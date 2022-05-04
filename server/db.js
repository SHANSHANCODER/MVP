const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientSchema = new mongoose.Schema({
  IPv4:String,
  country:String,
  State:String,
  city:String,
  topic:String,
  time:Date

});

 let Cli = mongoose.model("Cli", clientSchema);
var me = new Cli(
    {IPv4:"001.121",
    country:"US",
state:"Cali",
city:"SF",
topic:"testingtopic",
time:new Date()
    }
)
//me.save();
console.log(me)



//console.log(myglos)

// Glos.create(data,(err,result)=>{
//     if (err){
//         callback(err)
//     } else {
//         callback(null, result)
//     }
// })

// const glos = Glos.find((err,result)=>{
//     if(err){
//         console.log("err")
//         return
//     }
//     console.log("find>>>>",result)
// });
//console.log("glos>>>>",glos);

// let save = (data, callback = () => {}) => {
//   Cli.create(data, (err, result) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, result);
//     }
//   });
// };

// let retrieveall = (callback) =>{

// Glos.find((err,glos)=>{
//     if(err){
//         callback(err)
//         return;
//     }
//         callback(null,glos)
//        // console.log("callback invoked")
// })

// // retrieveall(console.log)

// }
// let deleteGlossary = (word,callback)=>{
//   Glos.deleteOne(word,(err,result)=>{
//     if (err){
//       callback(err)
//     } else {
//       console.log(word);
//       callback(null,result)
//     }
//   })
// }

// let updateGlossary = (word, callback)=> {
//   Glos.findByIdAndUpdate(word._id,word.update, function(err, result){
//     if(err){
//         callback(err)
//     }
//     else{
//         callback(null,result)
//     }

// })
// }
// let searchGlossary =(keyword,callback)=>{
//   var searchterm=[{keyword:{$regex:keyword,$options:'i'}},{meaning:{$regex:keyword,$options:'i'}}]
// Glos.find().or(searchterm)
// .then((result)=>{
//  // console.log("searchterm result>>>>>>",result)
//     callback(null,result)
// }).catch(err=>{
//   console.log('searcherr')
// })
// }


//Glos.findByIdAndUpdate('623d119577f011727cfd6a07',{keyword:"testingsame111",meaning:"testingsame222"},console.log)


//module.exports.save = save;
//module.exports.retrieveall = retrieveall;
//module.exports.deleteGlossary=deleteGlossary;
//module.exports.updateGlossary=updateGlossary;
//module.exports.searchGlossary=searchGlossary;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
