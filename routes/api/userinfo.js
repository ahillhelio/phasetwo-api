const express = require('express');
const {getUser} = require('../../DataAccess/userinfo');
const {createUser} = require('../../DataAccess/userinfo');
const {updateUser} = require('../../DataAccess/userinfo');
const {deleteUser} = require('../../DataAccess/userinfo');
const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
          console.log("Got it!")
          const data = await getUser(); 
          res.send(data);
    } catch (err) {
          console.log(err);
          res.send(500, "Error-Internal Server Issue. Failed to reach userinfo DB.");
    };
});

router.post('/', async function(req, res, next) {
    console.log(req.body);
       try {
             const data = await createUser(req.body); 
             res.send(data);
       } catch (err) {
             console.log(err);
             res.status(500).send  ("Error-Internal Server Issue. A total failure.");
  };
});

router.put('/:id', async function(req, res, next) {
    console.log(req.body);
       try {
             const data = await updateUser(req.params.id, req.body); 
             res.send(data);
             
       } catch (err) {
             console.log(err);
             res.status(500).send  ("Error-Internal Server Issue. A total failure.");
       };
});

router.delete('/:id', async function(req, res, next) {
    console.log(req.body);
         try {
               const data = await deleteUser(req.params.id); 
               res.send(data);
               
         } catch (err) {
               console.log(err);
               res.status(500).send  ("Error-Internal Server Issue. A total failure.");
    };
});

module.exports = router;