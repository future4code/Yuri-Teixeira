import app from "./app";
import { Request, Response } from "express";
import moment from "moment";
import generateNewId from "./services/generateNewId";
import { generateToken, decodeToken } from "./services/manageTokens";
import { generateHash, compareHash } from "./services/bcrypt";
import { userType, recipeType } from "./types/types";

//functions
import createUser from "./functions/createUser";
import signIn from "./functions/signIn";
import viewProfile from "./functions/viewProfile";
import viewRecipe from "./functions/viewRecipe";
import createRecipe from "./functions/createRecipe";

app.post("/signup", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = generateNewId();
    const name: string = req.body.name as string;
    const email: string = req.body.email as string;
    const password: string = req.body.password as string;
    const newUser: userType = {
      id,
      name,
      email,
      password: await generateHash(password),
    };

    if (!name || !email || !password) {
      throw new Error("Invalid body!");
    }
    if (password.length < 6) {
      throw new Error("The password must be 6 characters or more.");
    }

    const result = await createUser(newUser);
    const token = generateToken(id);
    res.status(200).send({ result, token });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/signin", async (req: Request, res: Response) => {
  let errorCode = 400;
  const email: string = req.body.email as string;
  const password: string = req.body.password as string;
  try {
    const result = await signIn(email, password);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/profile", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const token: string = req.headers.authorization as string;
    if (!token) {
      throw new Error("Token must be informed.");
    }
    const id: string = decodeToken(token) as string;
    const profile = await viewProfile(id);
    res.status(200).send(profile);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;
    if (!id) {
      throw new Error("Invalid id!");
    }
    const userProfile = await viewProfile(id);
    res.status(200).send(userProfile);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/recipe", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    if (!req.body.title || !req.body.description) {
      throw new Error(
        "Invalid body, title and description must be informated."
      );
    }
    const newRecipe = {
      id: generateNewId(),
      title: req.body.title,
      description: req.body.description,
      creationDate: moment().format("YYYY-MM-DD"),
    };

    const result = createRecipe(newRecipe);
    res
      .status(200)
      .send({ message: "Recipe successfully created.", result: result });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/recipes/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: string = req.params.id as string;
    if (!id) {
      throw new Error("Invalid ID!");
    }

    const result = await viewRecipe(id);

    if (result.length < 1) {
      throw new Error("Recipe not found!");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});
