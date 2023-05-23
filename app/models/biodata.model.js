module.exports = (sequelize, Sequelize) => {
  const Biodata = sequelize.define("biodatas", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Biodata;
};
