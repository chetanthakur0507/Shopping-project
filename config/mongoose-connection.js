const mongoose=require('mongoose');
const config=require("config");
const dbgr=require("debug")("development:mongoose");


mongoose.connect(`${config.get("MONGODB_URI")}/scatch1`)
.then(function() { // Traditional function instead of arrow function
  dbgr('Mongodb Connected!');
})
  .catch(function(err){
    dbgr(err);
  })

  module.exports=mongoose.connection; 