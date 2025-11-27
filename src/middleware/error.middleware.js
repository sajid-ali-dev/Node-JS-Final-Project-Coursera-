import logger from "../logger/index.js";

export default (err, req, res, next) => {
  logger.error(err);
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  return res.status(status).json({ message });
};
