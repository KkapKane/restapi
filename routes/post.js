const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res)=> {
   try {
      const posts = await Post.find();
      res.json(posts);
   }
   catch(err){
      res.json({message: err})
   }
})

router.post('/', async (req,res)=>{
const post = new Post({
      key: req.body.key
   }) 
   try {
      const savedPost = await post.save();
      res.json(savedPost);
   }catch (err) {
      res.json({message: err})
   }   
    
   })

   router.patch('/:postId', async (req,res)=> {
      try {
         const updatePost = await Post.updateOne(
            { _id: req.params.postId},
            {
               $set : {
               key: req.body.key
            },
         }
         );
         res.json(updatePost);
      }catch(err){
         res.json({message: err})
      }
   })


   module.exports = router;