const express = require('express');
const blogController = require('../controllers/blogController');
// const Blog = require('../models/blogs'); // don't need it here anymore


const router = express.Router();

// now we can replace all app with router

// blogs route
// crud method: retrieve aka our dashboard
router.get('/', blogController.blog_index);

// form data crud method: create
router.post('/', blogController.blog_create_post);


// takes us to the create form
router.get('/create', blogController.blog_create_get);

// retrieve by id 
router.get('/:id', blogController.blog_details);


router.delete('/:id', blogController.blog_delete);

// edit and update existing blog post
// router.get('/blogs/edit/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//     .then( (result) => {
//         res.render('edit', { blog: result, title: 'Edit Blog'})
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// router.post('/blogs/update/:id', (req, res) => {
//     const id = req.params.id;

//     // Find the existing blog post by ID.
//     Blog.findByIdAndUpdate(id, req.body)
//         .then((result) => {
//             res.redirect('/blogs');
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


// delete route (ANOTHER WAY I WANT TO TRY)
// app.delete('/blogs/delete/:id', (req, res) => {
//     const id = req.params.id;
    
//     // Find the blog post by ID and delete it.
//     Blog.findByIdAndRemove(id)
//         .then(result => {
//             res.redirect('/blogs');
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });


module.exports = router;