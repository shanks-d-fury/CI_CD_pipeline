const express = require("express");
const app = express();
const path = require("path");

// app.use((req, res, next) => {
// 	console.log(`Request received: ${req.method} ${req.url}`);
// 	next();
// });

app.use(express.static(path.join(__dirname, "public")));

// the above and the below one is used to debug the icons folder in the ec2 instance
// app.use((req, res, next) => {
// 	if (req.url.startsWith("/icon/")) {
// 		console.log(`Static file not found: ${req.url}`);
// 	}
// 	next();
// });

app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, "public", "PNF.html"));
});

app.listen(8080, () => {
	console.log("Listening {Port: http://localhost:8080}");
});
