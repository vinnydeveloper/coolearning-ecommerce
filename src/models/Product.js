module.exports = (conection, DataTypes) => {
  const Product = conection.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(200),
      },
      preco: {
        type: DataTypes.FLOAT(10),
      },
      estoque: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "produtos",
      timestamps: false,
    }
  );

  return Product;
};
