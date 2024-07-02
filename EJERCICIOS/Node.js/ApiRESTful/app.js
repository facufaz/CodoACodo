const express = require("express"); 
const app = express();
const port = 3000;

let users = [
    {id:1, name:"Cristian", score:15},
    {id:2, name:"Pedro", score:8}
]

app.use(express.json())

//get all users

app.get("/users", (req,res) => {
    res.json(users)
});

//get user by id
app.get("/users/:id", (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send("User not found");
    res.json(user)
})

//create new user
app.post("/users", (req, res) => {
    if (!req.body.name) return res.status(400).send("Please provide a name");

    const user = {
        id: users.length + 1,
        name: req.body.name,
        score: req.body.score
    };

    users.push(user);
    res.status(201).json(user);
})

//update an existing user
app.put("/users/:id",(req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('User not Found');

    if(req.body.name != undefined) user.name = req.body.name;
    if(req.body.score != undefined) user.score = req.body.score;

    res.json(user);
});

//delete a user
app.delete("/users/:id", (req,res) => {
    const userIndex = users.find(u => u.id === parseInt(req.params.id));
    if(userIndex === -1) return res.status(404).send('User not Found');

    users.splice(userIndex,1)
    res.status(204).send()
})
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))