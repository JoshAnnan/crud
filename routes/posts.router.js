const { Router } = require("express");
const { 
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
 } = require("../controllers/posts.controller");

 const postRouter = Router();

 postRouter.route("/")
    .get(getAllPosts)
    .get(createPost);

postRouter.route("/:postId")
    .get(getSinglePost)
    .patch(updatePost)
    .delete(deletePost); 
    
module.exports = postRouter;    