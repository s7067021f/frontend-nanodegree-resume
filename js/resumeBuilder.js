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

var bio = {
  "name": "Michael Sutherland",
  "role": "Monkey",
  "contactEmail": "myemailaddress@gmail.com",
  "pictureUrl": "http://ichef.bbci.co.uk/news/660/cpsprodpb/025B/production/_85730600_monkey2.jpg",
  "welcomeMessage": "Hello, this is a welcome message",
  "location": "Singapore",
  "twitter": "mjfs2012",
  "skills": ["awesomeness","programming"]
}

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(welcomeMessage);

var contactEmail = HTMLemail.replace("%data%",bio.contactEmail);
$("#header").append(contactEmail);

//var locn = HTMLlocation.replace("%data%",bio.location);
//$("#header").append(locn);

var twitter = HTMLtwitter.replace("%data%",bio.twitter);
$("#header").append(twitter);

var pictureUrl = HTMLbioPic.replace("%data%",bio.pictureUrl);
$("#header").append(pictureUrl);

var work = {};
work.currentPosition = "IT Tester";
work.employer = "Credit Suisse";
work.yearsWorked = "Twenty two";
work.city = "Singapore";

$("workExperience").append(work.currentPosition);









