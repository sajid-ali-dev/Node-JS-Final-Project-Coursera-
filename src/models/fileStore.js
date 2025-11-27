import fs from "fs/promises";
import path from "path";
import config from "../config/index.js";

const readJson = async (file) => {
  const p = path.join(config.dataDir, file);
  try {
    const content = await fs.readFile(p, "utf8");
    return JSON.parse(content || "{}");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.mkdir(path.dirname(p), { recursive: true });
      await fs.writeFile(p, JSON.stringify({}), "utf8");
      return {};
    }
    throw err;
  }
};

const writeJson = async (file, data) => {
  const p = path.join(config.dataDir, file);
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2), "utf8");
};

export default {
  readJson,
  writeJson
};
