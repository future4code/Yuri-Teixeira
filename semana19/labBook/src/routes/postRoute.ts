import express from "express";
import createPost from "../controller/createPost";
import getPostById from "../controller/getPostById";

const postRoute = express.Router();

postRoute.get("/:id", getPostById);
postRoute.put("/", createPost);

export default postRoute;
