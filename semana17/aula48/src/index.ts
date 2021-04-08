import { Request, Response } from "express";
import app from "./app";
import {
  selectAllUsers,
  selectAllUsers2,
  selectAllUsers3,
  selectAllUsers4,
  selectAllUsers5,
} from "./functions";

app.get(
  "/users",
  async (req: Request, res: Response): Promise<void> => {
    const nameFilter: string = req.query.name as string;
    try {
      const users = await selectAllUsers(nameFilter);

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);

app.get(
  "/users/:type",
  async (req: Request, res: Response): Promise<void> => {
    const typeUser: string = req.params.type as string;
    try {
      const users = await selectAllUsers2(typeUser);

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);

app.get(
  "/ordUsers/:orderBy",
  async (req: Request, res: Response): Promise<void> => {
    const orderBy: string = req.params.orderBy as string;
    try {
      const users = await selectAllUsers3(orderBy);

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);

app.get(
  "/userspage/:page",
  async (req: Request, res: Response): Promise<void> => {
    const limit: number = 4;
    const page: number = Number(req.params.page);

    const offset = limit * (Number(page) - 1);

    try {
      const users = await selectAllUsers4(limit.toString(), offset.toString());

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);

app.get(
  "/final/:page",
  async (req: Request, res: Response): Promise<void> => {
    const orderBy: string = req.query.orderBy as string;
    const page: number = Number(req.params.page);
    const offset = 5 * (Number(page) - 1);
    const name: string = req.query.name as string;

    try {
      const users = await selectAllUsers5(
        offset.toString(),
        orderBy.toString(),
        name
      );

      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No recipes found");
      }

      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  }
);
