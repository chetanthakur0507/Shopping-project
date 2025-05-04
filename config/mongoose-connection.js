const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/scatch1')
  .then(() => console.log('Mongodb Connected!'))
  .catch(function(err){
    console.log(err);
  })

  module.exports=mongoose.connection;