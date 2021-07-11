const express = require("express"); //returns a function
const courses = require("./routes/courses");
const home = require("./routes/home");
const app = express();

app.use(express.json());
app.use("/api/courses", courses);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
// console.log(process.env.PORT);
