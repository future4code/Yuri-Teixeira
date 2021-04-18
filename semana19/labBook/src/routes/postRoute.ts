import express from "express";
import _PostController from "../controller/postController";

const postRoute = express.Router();
const PostController = new _PostController();

postRoute.get("/:id", PostController.getPostById);
postRoute.put("/", PostController.createPost);

export default postRoute;
