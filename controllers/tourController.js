const fs = require("fs");
const Tour = require('./../models/tourModel')

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tour-simple.json`)
// );

// exports.checkResponse = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Missing Name or price",
//     });
//   }
//   next();
// };

// exports.checkId = (req, res, next, val) => {
//   console.log(`Tour id is  ${val}`);
//   if (val.name > tours.length) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Invalid Id",
//     });
//   }
//   next();
// };

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    // result: tours.length,
    // error: "",
    // data: {
    //   tours,
    // },
  });
};

exports.createTour = (req, res) => {

  res.status(201).json({
    status: "success",
    // date: {
    //   tours: newTour,
    // },
  });
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);

  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tour-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: "success",
  //       date: {
  //         tours: newTour,
  //       },
  //     });
  //   }
  // );
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;

  //const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    // data: {
    //   tour,
    // },
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     tour: `<Updated tour here for ${id} tour>`,
  //   },
  // });
};

exports.deleteTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  res.status(204).json({
    status: "success",
    data: null,
  });
};
