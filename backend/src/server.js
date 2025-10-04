import express from 'express'
import AuthRoutes from "./routes/auth.route.js"
import path from "path"
import dotenv from "dotenv"
import { ConnectDB } from './lib/db.js';

dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();
const api = "/api/v1"
//make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/^\/(?!api\/v1\/auth).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.use(`${api}/auth`, AuthRoutes);
app.listen(PORT, ()=>{
    console.log(`App running at http://localhost:${PORT}`);
    ConnectDB()
})