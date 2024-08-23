const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const listOfComments = await Comments.findAll({where: {postId: postId}});
    res.json(listOfComments);
})

router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});


module.exports = router;
