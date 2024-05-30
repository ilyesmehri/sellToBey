const db = require("../database/index");


module.exports = {
    getSellerProd: (req, res) => {
        db.Product.findAll()
          .then((data) => {
            console.log(data)
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      },
      getOneSellerProd: (req, res) => {
        db.Product.findOne({
          where: {
            id: req.params.id,
          },
        })
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      },
    addSellerProd: (req, res) => {
      db.Product.create(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
    removeSellerProd: (req, res) => {
      db.Product.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
    updateSellerProd: (req, res) => {
      db.Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    },
  };
  