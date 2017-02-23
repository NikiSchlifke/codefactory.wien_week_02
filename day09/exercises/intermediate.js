function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

document.write(degreesToRadians(50) + "<br>")

var grade_math;
var grade_physics;
var grade_english;

function askGrades() {
	grade_math = document.createElement('INPUT');
	grade_math.setAttribute("type", "number");
	grade_math.setAttribute("id", "math");

	document.write('Your Math grade: ')
	document.body.appendChild(grade_math)

	grade_physics = document.createElement('INPUT');
	grade_physics.setAttribute("type", "number");
	grade_physics.setAttribute("id", "physics");

	document.write('<br>Your Physics grade: ')
	document.body.appendChild(grade_physics)

	grade_english = document.createElement('INPUT');
	grade_english.setAttribute("type", "number");
	grade_english.setAttribute("id", "english");

	document.write('<br>Your English grade: ')
	document.body.appendChild(grade_english)

}

	grade_average = document.createElement('INPUT');
	grade_average.setAttribute("type", "number");
	grade_average.setAttribute("id", "output");

function averageGrades() {
	var grade_math_value = Number(document.getElementById('math').value);
	var grade_physics_value = Number(document.getElementById('physics').value);
	var grade_english_value = Number(document.getElementById('english').value);

	average = (grade_math_value + grade_english_value+ grade_physics_value)/3;
	document.getElementById('output').value = average;

}
askGrades();
var button = document.createElement('BUTTON');
button.innerHTML = 'get average grade';
button.onclick =  averageGrades;
document.write("<br />");
document.body.appendChild(button);
document.write('<br>Your average grade: ')

document.body.appendChild(grade_average)


