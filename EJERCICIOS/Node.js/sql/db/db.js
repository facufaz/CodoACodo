const express = require('express')
const app = express();

const moviesRouter = require('../routes/movieRoutes')

app.use(express.json());
app.use("/movies", moviesRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})