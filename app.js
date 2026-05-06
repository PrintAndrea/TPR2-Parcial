import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const morganType = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]';;

app.use(express.json());
app.use(morgan(morganType));
app.use(cors());


export default app;