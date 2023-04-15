const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  ratimg: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour

//   const testTour = new Tour({
//     name: 'The Camper 2',
//     price: 2345,
//   });

//   testTour
//     .save()
//     .then(() => {
//       console.log('Data Saved in DB');
//     })
//     .catch((err) => {
//       console.log('Error', err);
//     });
