module.exports = {
  async index(req, res) {
    const { cart } = req.session;
    let total = 0;
    if (!cart) return res.render("cart/list", { cart: [], total });

    total = cart.reduce(
      (productPrev, productNext) =>
        Number(productPrev.price) + Number(productNext.price)
    );

    return res.render("cart/list", { cart, total });
  },

  async addProdcutToCart(req, res) {
    const { idProduct, price, name } = req.body;

    const product = {
      id: idProduct,
      price,
      name,
    };

    if (req.session.cart) {
      req.session.cart.push(product);
    } else {
      req.session.cart = [product];
    }

    return res.redirect("/produtos?msg=cart_added_success");
  },

  //sugestão, não foi implementado
  async closeCart(req, res) {
    const { user, cart } = req.session;

    const newPedido = await Pedido.create({
      userId: user.id,
      preco: 1000,
    });

    const pedidoItems = await PedidoItem.bulckCreate([cart]);
  },
};
