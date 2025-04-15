import express from "express";
import { createServer } from "http";
const app = express();
const server = createServer(app);

//Hilfsimporte
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));



import { initializeSocket } from "./server/services/eventManager.js";
import { PORT } from './server/config.js';

initializeSocket(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.use('/client', express.static(join(__dirname, "/client")));
app.use('/shared', express.static(join(__dirname, "/shared")));


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});