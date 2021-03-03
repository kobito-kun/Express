import Express from 'express';

const app = Express();
const port = 8000;

app.get("/", (req, res) => {
	res.send("Henlo")
})

app.listen(port, ()=>{
	console.log("Listening at port: " + port)
})
