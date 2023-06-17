const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']; 
let age = 20; 
let isMarried = false; 
const student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	isMarried: true,
	skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'] 
}; 

const txt = `{
	"Alex": {
		"email": "alex@alex.com",
		"skills": ["HTML", "CSS","JavaScript"],
		"age": 20,
		"isLoggedIn": false,
		"points": 30 
	}, 
	"Asab": {
		"email": "asab@asab.com",
		"skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
		"age": 25,
		"isLoggedIn": false,
		"points": 50 
	},
	"Brook": {
		"email": "brook@brook.com",
		"skills": [ "HTML", "CSS", "JavaScript", "React", "Redux"],
		"age": 30,
		"isLoggedIn": true,
		"points": 50 
	},
	"Daniel": { 
		"email": "daniel@daniel.com", 
		"skills": ["HTML", "CSS", "JavaScript", "Python"], 
		"age": 20, 
		"isLoggedIn": false, 
		"points": 40 
	}, 
	"Jane": { 
		"email": "jane@jane.com", 
		"skills": [ "HTML", "CSS", "JavaScript", "React", "Redux", "Node.js" ], 
		"age": 20, 
		"isLoggedIn": true, 
		"points": 50 
	},
	"Thomas": {
		"email": "thomas@thomas.com", 
		"skills": [ "HTML", "CSS", "JavaScript", "React" ], 
		"age": 20, 
		"isLoggedIn": false, 
		"points": 40 
	}, 
	"Paul": {
		"email": "paul@paul.com", 
		"skills": ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"], 
		"age": 20, 
		"isLoggedIn": false, 
		"points": 40 
	}
}`;
	

// 1. Change skills array to JSON using JSON.stringify()

skills_JSON= JSON.stringify(skills);
console.log(skills_JSON);

// 2. Stringify the age variable
age_JSON= JSON.stringify(age);
console.log(age_JSON);

// 3. Stringify the isMarried variable
isMarried_JSON=JSON.stringify(isMarried);
if (!isMarried) console.log(isMarried_JSON);

//4. Stringify the student object
student_JSON= JSON.stringify(student);
console.log(student_JSON);

// 5. Stringify the student object with only firstName, lastName and skills properties
student_JSON2= JSON.stringify(student,["firstName","lastName","skills"]);
console.log(student_JSON2);

// 6. Parse the txt JSON to object.

const usersObj = JSON.parse(txt); 
console.log(usersObj);

// 7. Find the user who has the most skills from the variable stored in txt.

let maxSkills=0;
let usrSkilled="";

for (const usr in usersObj){
	if (usersObj[usr].skills.length >maxSkills){
		maxSkills=usersObj[usr].skills.length;
		usrSkilled=usr;
	}
}

console.log("The user with the most skills is: "+usrSkilled);