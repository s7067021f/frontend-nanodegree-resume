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

var formattedName = HTMLheaderName.replace("%data%","Mike Sutherland");
$("#header").prepend(formattedName);

var bio = {
  "name": "Michael Sutherland",
  "role": "Monkey",
  "contactInfo": "myemailaddress@gmail.com",
  "picture url": "https://www.google.dk/imgres?imgurl=http%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F660%2Fcpsprodpb%2F025B%2Fproduction%2F_85730600_monkey2.jpg&imgrefurl=http%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-asia-34346092&docid=GNcRdxA225nDDM&tbnid=MTZ1sfXpGRKpfM%3A&w=660&h=660&hl=en&bih=907&biw=1727&ved=0ahUKEwiMuNuKj5jPAhXJRI8KHaTJBh0QMwg0KAMwAw&iact=mrc&uact=8",
  "welcomeMessage": "Hello, this is a welcome message",
  "skills": ["awesomeness","programming"]
}

var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(welcomeMessage);





