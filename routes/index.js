const express = require('express');
const router = express.Router();
const Bravia = require('bravia');

let bravia = new Bravia('10.0.0.7', '80', '0000');

/* GET home page. */
router.get('/', async(req, res, next) => {
  
  let response;
  try {
    response = await bravia.system.invoke('getRemoteControllerInfo');
    //console.log(response);
  } catch (error) {
    console.log(error);
  } 
  res.render('index', { title: 'Intelligo Systems | TV Remote', commands : response , layout : ''});
});

router.post('/sendquery', async(req,res,next) => {
    //console.log(req.body);
  try {
    let id = req.body.command;
    if (id) {
      let resp = await bravia.send(id);
      if (resp){
        console.log(resp);
      }
    }
  }
  catch (error) {
    console.log(error);
  }
    res.json({ good : 'testing'});
});

module.exports = router;
