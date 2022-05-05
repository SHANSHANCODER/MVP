const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientSchema = new mongoose.Schema({
  country_code: String,
  country_name: String,
  postal: Number,
  IPv4: String,
  country: String,
  State: String,
  city: String,
  topic: String,
  time: Date,
});

let Cli = mongoose.model("Cli", clientSchema);
// var me = new Cli(
//     {IPv4:"001.121",
//     country:"US",
// state:"Cali",
// city:"SF",
// topic:"testingtopic",
// time:new Date()
//     }
// )
// me.save();
// console.log(me)


let save = (data, callback = () => {}) => {
  console.log("🚀 ~ file: db.js ~ line 64 ~ save ~ save", save);
  Cli.create(data, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};




module.exports = { save };
