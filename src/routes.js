const express = require("express");
const router = express.Router();
const path = require("path");
const isLogin = require("./middlewares/isLogin");
const isAdmin = require("./middlewares/isAdmin");
const upload = require("./middlewares/upload");
const productController = require("./controllers/Product");
const cartController = require("./controllers/CartController");

router.get("/produtos", productController.list);
router.get("/produtos/cadastrar", productController.viewCreate);
router.post("/produtos/cadastrar", productController.save);
router.get("/produtos/atualizar/:id", productController.viewUpdate);
router.put("/produtos/atualizar/:id", productController.update);
router.delete("/produtos/deletar/:id", productController.delete);

router.get("/carrinho", cartController.index);
router.post("/carrinho/adicionar", cartController.addProdcutToCart);

module.exports = router;
