module.exports = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res);
    } catch (err) {
      next(err);
    }
  };
};
