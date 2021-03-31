import app from "./app";
import { Request, Response } from "express";
import moment from "moment";
import {
  createUser,
  getUserById,
  editUser,
  createTask,
  getTasks,
} from "./reqFunctions";

//CREATE USER
app.put("/user", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.body.name as string;
    const nickname: string = req.body.nickname as string;
    const email: string = req.body.email as string;

    if (!name || !nickname || !email) {
      errorCode = 422;
      throw new Error("Invalid body!");
    }

    const result = await createUser(name, nickname, email);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//GET USER BY ID
app.get(
  "/user/:id",
  async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400;
    const id: number = Number(req.params.id);

    try {
      if (isNaN(id)) {
        throw new Error("Invalid id!");
      }

      const result = await getUserById(id.toString());

      if (result.length === 0) {
        errorCode = 404;
        throw new Error("User not found!");
      }

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
);

// EDIT USER
app.post(
  "/user/edit/:id",
  async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400;
    const id: number = Number(req.params.id);
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;
    const email: string = req.body.email;
    const getUser = await getUserById(id.toString());

    try {
      if (isNaN(id)) {
        throw new Error("Invalid id!");
      }
      if (name === "" || nickname === "" || email === "") {
        throw new Error("Invalid body!");
      }
      if (getUser.length === 0) {
        errorCode = 404;
        throw new Error("User not found!");
      }

      await editUser(id.toString(), name, nickname, email);
      res.status(200).send({ message: "User successfully changed." });
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
);

// CREATE TAKS
app.put(
  "/task",
  async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400;
    const title: string = req.body.title as string;
    const description: string = req.body.description as string;
    const limitDate: string = req.body.limitDate as string;
    const status: string = req.body.status as string;
    const id_createdby: number = Number(req.body.id_createdby);
    const dateDiff: number =
      moment(req.body.limitDate, "DD/MM/YYYY").unix() - moment().unix();

    try {
      if (!title || !description || !limitDate || !status || !id_createdby) {
        throw new Error("Invalid body!");
      }
      if (dateDiff <= 0) {
        throw new Error("The deadline must be greater than the current date.");
      }

      const result = await createTask(
        title,
        description,
        moment(limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
        status,
        id_createdby.toString()
      );

      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  }
);

// GET TASKS
app.get("/tasks/", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await getTasks();
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});
app.get("/tasks/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const result = await getTasks(req.params.id);

    if (result.length == 0) {
      throw new Error("Task not found!");
    }

    const task = {
      title: result[0][0].title,
      description: result[0][0].description,
      limitDate: moment(result[0][0].limitDate, "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      ),
      status: result[0][0].status,
      id_createdby: result[0][0].id_createdby,
      creatorUserNickname: result[0][0].creatorUserNickname,
    };

    res.status(200).send(task);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});
