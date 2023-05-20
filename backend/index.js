const express = require(`express`);
const app = express();
const PORT =  8080;

app.use(express.json());



app.get('/', (req, res) => {
    res.send(`Welcome to The Sparks Foundation Internship Task: Basic Banking System !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})