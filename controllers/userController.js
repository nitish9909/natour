const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    result: users.length,
    error: "",
    data: {
      users,
    },
  });
};

exports.createUsers = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);
  users.push(newUser);

  fs.writeFile(
    `${__dirname}/dev-data/data/tour-simple.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: "success",
        date: {
          users: newUser,
        },
      });
    }
  );
};

exports.getUser = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > users.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  const user = users.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.updateUser = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > users.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: `<Updated tour here for ${id} user>`,
    },
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > users.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
