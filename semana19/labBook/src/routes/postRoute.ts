import express from 'express'
import createPost from '../controller/createPost'

const postRoute = express.Router();

postRoute.put('/',createPost)

export default postRoute;