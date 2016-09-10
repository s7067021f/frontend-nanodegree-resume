/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
$("#main").append("Michael Sutherland.");

var awesomeThoughts = " I am Michael and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);
*/

var formattedRole = HTMLheaderRole.replace("%data%","Code Monkey");
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%","Michael Sutherland");
$("#header").prepend(formattedName);





