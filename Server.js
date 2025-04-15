const express = require("express");
const app = express();

const userRoutes = require("./server/routes/userRoutes.js");

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});