const express = require('express');
const router = express.Router();

router.get('/user/all', async(req, res) => {
    try {
    const user_all = await // all wines
    res.send(user_all)
    } catch(err) {
    res.status(500).send(err)
    }
})

router.get('/user/:id', async(req, res) => {
    try {
    const {id} = req.param
    const user = await 
    res.send(user)
    } catch(err) {
    res.status(500).send(err)
    }
})

router.post('/user/add', async (req, res) => {
    try {
      // add validation for the req.body to prevent error
      // you could use joi for that
      const {       
        id,
        create_time,
        email,
        password,
        phone_number,
        status,
        update_time,
        briefDescription,
        accessToken,
        refreshToken,
        username,
        awardCreditId,
        roleId,} = req.body
    
      const create_time = new Date(create_time)
      const update_time = new Date(update_time)
      const user = new User({
        id = id,
        create_time = create_time,
        email = email,
        password = password,
        phone_number = phone_number,
        status = status,
        update_time = update_time,
        briefDescription = briefDescription,
        accessToken = accessToken,
        refreshToken = refreshToken,
        username = username,
        awardCreditId = awardCreditId,
        roleId = roleId, 
      })

      const newUser = await user.save()    
      res.send(newUser);
    } catch(err) {
      res.status(500).send(err.message)
    }
  })
  
  router.put('/user/allupdate/:id', async (req, res,next) => {

    try {
      const {id} = req.params
      const user = {       
        create_time : req.body.create_time,
        email : req.body.email,
        password : req.body.password,
        phone_number : req.body.password,
        status : req.body.status,
        update_time : req.body.update_time,
        briefDescription : req.body.briefDescription,
        accessToken : req.body.accessToken,
        refreshToken : req.body.refreshToken,
        username : req.body.username,
        awardCreditId : req.body.awardCreditId,
        roleId : req.body.roleId
      } = req.body
  
      await User 
        console.log("update user")
      res.send(user)
    }catch(err) {
          res.send(500).send(err)
        }
  })
  
  
  router.delete('/user/all', async (req, res) => {
    try {
      await User
      res.send('all users removed')
    } catch(err) {
      res.status(500).send(err.message)
    }
  })
  
  router.delete('/user/:id' , async(req, res) => {
  try {
    const { id } = req.params
    let user = await 
    res.send({message : "user deleted successful"})
    } catch(err) {
      res.status(500).send(err) 
    }

