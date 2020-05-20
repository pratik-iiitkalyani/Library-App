'use strict'

const Router = require("express").Router();
// const UserCtrl = require('../app/database/controllers/user');

Router.route('/')
    .get(async (req, res) => {
        res.render('index')
    })
// Router.route('/user')
//     .post(async function (req, res) {
//         try {
//             let response = await UserCtrl.createUserData(req.body);
//             res.json(response);
        
//         } catch (err) {
//             console.log("Error in /user post", err)
//             res.status(400).json({ "message": "Problem in creating user or the email/username already exists." })
            
//         }
//     })

//     .get(async (req, res) => {
//         try {
//             const allData = await UserCtrl.getAllUserData()
//             res.json(allData);

//         } catch (err) {
//             console.log("Error in /user get", err)
//             res.status(400).json({ "message": "Problem in fetching user." })
//         }
//     })



// Router.route('/user/:id')
//     .get(async(req, res) =>{
//         try {
//             const response = await UserCtrl.getUserDataById(req.params.id)
//             res.json(response);

//         } catch(err) {
//             console.log("Error in /user/:id get", err)
//             res.status(400).json({ "message": "Problem in fetching User By Id." })
//         }
//     })

//     .put(async (req, res) => {
//         try {
//             const response = await UserCtrl.updateUserData(req.params.id, req.body)
//             res.json(response);

//         } catch (err) {
//             console.log("Error in /user/:id put", err)
//             res.status(400).json({ "message": "Problem in updating User By Id." })
//         }
//     })

//     .delete(async function (req, res) {
//         try {
//             const response = await UserCtrl.deleteUserData(req.params.id)
//             res.json(response);

//         } catch (err) {
//             console.log("Error in /user/:id delete", err)
//             res.status(400).json({ "message": "Problem in deleting User By Id." });
//         }
//     })




module.exports = Router