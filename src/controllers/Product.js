const { Product } = require("../models");
module.exports = {
  async list(req, res) {
    const products = await Product.findAll();

    return res.render("products/list", { products });
  },
  async viewCreate(req, res) {
    return res.render("products/create");
  },
  async viewUpdate(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    return res.render("products/update", { product });
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, preco, estoque } = req.body;

    const newProduct = await Product.update(
      { nome, preco, estoque },
      {
        where: {
          id,
        },
      }
    );

    return res.redirect(`/produtos/atualizar/${id}?msg=updated`);
  },
  async save(req, res) {
    const { nome, preco, estoque } = req.body;

    const newProduct = await Product.create({ nome, preco, estoque });

    return res.render("products/create", {
      msg: `Produto: ${nome} cadastro com sucesso!`,
    });
  },

  async delete(req, res) {
    const { id } = req.params;

    await Product.destroy({
      where: {
        id,
      },
    });

    return res.redirect("/produtos?msg=deleted");
  },
};
