module.exports = (req, res, next) => {
  const { user } = req.session;

  if (user.type_user !== "ADMIN") {
    return res.redirect("/home");
  }

  next();
};
