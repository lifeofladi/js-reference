const Joi = require("joi");
const express = require("express"); //returns a function
const router = express.Router();

const courses = [
  { id: 1, name: "Math" },
  { id: 2, name: "English" },
  { id: 3, name: "Physics" },
];

//Handling GET request
router.get("/", (req, res) => {
  res.send(courses);
});

//GET request for a particular object
router.get("/:id", (req, res) => {
  const course = courses.find(ele => ele.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not found!");

  res.send(course);
});

//Handling POST request
router.post("/", (req, res) => {
  const { error } = validateResource(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //console.log(result);
  const course = {
    id: courses.length + 1,
    name: req.body.name, //why we use express.json()
  };
  courses.push(course); //add course object to courses array
  res.send(course); //send the course obj that was just added as response.
});

//Handling PUT request
router.put("/:id", (req, res) => {
  //Find resource
  const course = courses.find(ele => ele.id === parseInt(req.params.id));
  //If not not existing, return 404 - Resource not found
  if (!course) return res.status(404).send("Course not found!");

  //Validate resource
  const { error } = validateResource(req.body);
  //If invalid,  return 404 - Bad Request
  if (error) return res.status(400).send(error.details[0].message);

  //Update Course
  course.name = req.body.name;
  //Return updates course
  res.send(course);
});

//Handling DELETE request
router.delete("/:id", (req, res) => {
  //Find resource
  const course = courses.find(ele => ele.id === parseInt(req.params.id));
  //If not not existing, return 404 - Resource not found
  if (!course) return res.status(404).send("Course not found!");

  //Delete
  const index = courses.indexOf(course);
  const deletedItem = courses.splice(index, 1).map(m => m.name);

  res.send("Deleted: ", deletedItem);
});

//validation logic
function validateResource(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

module.exports = router;
