const db = require("../models");
const Biodata = db.biodata;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

  if (!nama || !tempat_lahir || !tanggal_lahir || !alamat) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }
  console.log(nama, tempat_lahir);

  const biodata = {
    nama: nama,
    tempat_lahir,
    tanggal_lahir,
    alamat,
  };

  Biodata.create(biodata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error occurred while inserting book",
      });
    });
};

exports.findAll = (req, res) => {
  Biodata.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving biodata",
      });
    });
};

exports.findOne = (req, res) => {
  Biodata.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving Biodata",
      });
    });
};

exports.update = (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

  if (!nama || !tempat_lahir || !tanggal_lahir || !alamat) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }

  Biodata.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((Biodata) => {
      Biodata.nama = nama;
      Biodata.tempat_lahir = tempat_lahir;
      Biodata.tanggal_lahir = tanggal_lahir;
      Biodata.alamat = alamat;

      Biodata.save();

      res.send(Biodata);
    })
    .catch((err) => {
      console.log("Error while update biodata");
    });
};

// exports.updateOne = (req,res) => {
//     const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

//     Biodata.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(
//         ()
//     )
// }

exports.delete = (req, res) => {
  Biodata.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(
      res.send({
        message: "Success delete biodata with id " + req.params.id,
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete biodata with id" + req.params.id,
      });
    });
};
