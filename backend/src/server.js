import express from 'express'
import AuthRoutes from "./routes/auth.route.js"
const app = express();
const PORT = process.env.PORT || 4000;
const api = "/api/v1"
app.get("/",(req, res)=>{
    res.send("Hello world")
})

app.use(`${api}/auth`, AuthRoutes);
app.listen(PORT, ()=>{
    console.log(`App running at http://localhost:${PORT}`)
})