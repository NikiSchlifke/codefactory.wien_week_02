function crystalGazer(child_count, partner, location, job) {
    document.write(
        "Your will be a " + job + " in " + location + " and married to " + partner + " with " + child_count + " children." + "<br>"
    );
}



function ageCalculator(birth_year, current_year) {

    var age = current_year - birth_year;
    document.write("You are either " + (age - 1) + " or " + age + "<br>")
}


function ageCalculator2(birth_year) {
    d = new Date()
    current_year = d.getYear() + 1900;

    var age = current_year - birth_year;
    document.write("You are either " + (age - 1) + " or " + age + "<br>")
}



function box(width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
    this.volume = function() {
        return width * length * height;
    };
    this.area = function() {
        return width * length * 2 + width * height * 2 + length * height * 2;
    };

    this.printVolume = function() {
        document.write(
            "The volume of the box is: " + this.volume() + "<br>"
        );
    };
    this.printArea = function() {
        document.write("The area of the box is: " + this.area() + "<br>");
    };

    this.area_volume = function() {
        return [this.area(), this.volume()]
    }

}



function boxAreaAndVolume( width, length, height) {
	var area = 2*width*length + 2*width*height + 2*length*height;
	var volume = width*length*height;
	return [area, volume];

}


crystalGazer(2, "Maria", "Dubai", "Skydiver");

ageCalculator(1981, 2017);
ageCalculator2(1981);
/*
var brick = new box(4, 5, 6);
brick.printArea();
brick.printVolume();

document.write("change width<br>")


brick.width = 8;
brick.printArea();
brick.printVolume();
*/
package = boxAreaAndVolume(4,5,6);
document.write(
	"The area of the box is: " + package[0] + "<br>"+
	" The volume of the box is: " + package[1] +"<br>");


