import express from "express";
import mainRoutes from "./routes/mainRoutes"
import {resolve} from "path"

const app = express()
app.set('view engine', 'ejs')
app.set("views", resolve(__dirname, "./views"))

app.use("/", mainRoutes)
app.use(express.json())

const port = 3005

app.listen(process.env.PORT || port, () => { 
    console.log(`Servidor funcionando ${port}`)
});
