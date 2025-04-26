const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, "public", "PNF.html"));
});

app.listen(8080, () => {
	console.log("Listening {Port: http://localhost:8080}");
});
