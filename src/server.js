import app from "./app.js";
import config from "./config/index.js";
import logger from "./logger/index.js";

const port = config.port;
app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
