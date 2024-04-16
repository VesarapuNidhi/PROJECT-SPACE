// //FILENAME : db.js

// const mongoose = require("mongoose");

// // Replace this with your MONGOURI.
// const MONGOURI = "Paste your mongourl link";


// const InitiateMongoServer = async () => {
//   try {
//     await mongoose.connect(MONGOURI, {
//       useNewUrlParser: true
//     });
//     console.log("Connected to DB !!");
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

// module.exports = InitiateMongoServer;



const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://chandralikithakakada:tmWO1j4IDA3ut7HC@cluster0.2mfsxce.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";


const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;