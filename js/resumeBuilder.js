var bio =
{
    "name" : "Cody Nicholson",
    "role" : "Undergrad at DePaul University",
    "contacts" :
    {
        "email" : "codynicholson96@gmail.com",
        "github" : "CodyNicholson",
        "twitter" : "@CodyLiam7",
        "location" : ["Schaumburg, IL", "Lincoln Park, IL"],
        "linkedIn" : "codynicholson"
    },
    "welcomeMessage" : "My name is Cody Nicholson and this is my résumé webpage where you can find all the details about my skills, experience, and background",
    "skills" :
    [
        "Java", "C#", "Object Oriented Design Patterns", "Ruby", "Rails", "Python", "Git", "Maven", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Linux", "Responsive Web Design", "Selenium",
        "SQL", "Leadership", "Acceptance Testing", "Microsoft Excel", "Agile Methodologies", "Hadoop MapReduce"
    ],
    "bioPic" : "../images/codyHead.jpg"
};

var work =
{
    "jobs" :
        [
            {
                "employer": "Textura Corporation",
                "title": "Software Development Engineer in Test",
                "location": "Deerfield, IL",
                "dates": "June 2015 - May 2016",
                "description": "Automated test cases to make sure that our products were running smoothly, without errors. " +
                "Created methods for various web pages to facilitate the work of myself and other automation engineers. " +
                "Adapted to a fast paced work environment by learning various skills such as Java, Eclipse, SVN, Selenium, XPath, and SQL."
            },
            {
                "employer": "CNA Insurance",
                "title": "IT Database Analyst",
                "location": "Chicago, IL",
                "dates": "September 2016 - ",
                "description": "As an IT Database Analyst I play an important role including the Acceptance Testing of our company's software systems by consolidating defects, creating project testing status reports, and putting together presentations that represent this data. I also help migrate data from legacy applications to enterprise applications."
            }
        ]
};

work.display = function()
{
    for (job in work.jobs)
    {
        // Creates a div with class work-entry
        $("#workExperience").append(HTMLworkStart);
        // Creates variables to hold the job information for each job
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedTitle +formattedEmployer;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        // Adds the job info to the newly created div
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedDescription);
    }
};

var education =
{
    "schools" :
    [
        {
            "name" : "DePaul University",
            "location" : "Chicago, IL",
            "degree" : ["B.S. in Computer Science", " M.S. in Software Engineering"],
            "studied" : "Computer Science with a concentration on Software Engineering",
            "dates" : ["2018", " 2020"]
        },
        {
            "name" : "James B. Conant High School",
            "location" : "Hoffman Estates, IL",
            "degree" : ["High School Diploma"],
            "studied" : "General Education",
            "dates" : ["2014"]
        }
    ],
    "onlineCourses" :
    [
        {
            "title" : ["Responsive Web Design Fundamentals, How to use Git and Github", "Intro to Java Programming", "Programming Foundations with Python", "Responsive Images", "Intro to HTML and CSS", "JavaScript Basics", "Intro to jQuery", "Software Development Process"],
            "school" : "Udacity",
            "date" : "2016",
            "url" : "Udacity.com"
        }
    ]
};

education.display = function()
{
    for (edu in education.schools)
    {
        // Creates a div with class education-entry
        $("#education").append(HTMLschoolStart);
        // Creates variables to hold the edu information for each school
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].studied);
        // Adds the edu info to the newly created div
        $(".education-entry:last").append(formattedTitle).append(formattedDates).append(formattedDegree).append(formattedLocation).append(formattedMajors);
    }
};


var projects =
{
    "projs" :
    [
        {
            "title" : "https://codynicholson.github.io/",
            "dates" : "September 2016 - October 2016",
            "description" : "Developed and designed my portfolio website to promote my professional image. It includes a homepage with a cover letter, and a résumé page with all my skills, experience, and background information. The skills I used to complete this project were: HTML, CSS, JavaScript, jQuery, Bootstrap, Responsive Web Design, Linux, and Git.",
            "images" : ["../images/homepage.jpg", "../images/resumePage.jpg", "../images/resumePage2.jpg"],
            "captions": ["My portfolio homepage","The top of my résumé page with my skills and welcome message","The bottom of my résumé page with the places I have lived and worked displayed on google maps"]
        },
        {
            "title": "Eagle Project",
            "dates": "April 2014 - August 2014",
            "description": "Led an effort using 30+ volunteers to complete major phases of capital improvement including the demolition, removal, reconstruction, and addition of a handicap ramp for a sidewalk at the Church of the Holy Spirit. The improvement, besides looking better and having less tripping hazards, was the addition of a handicap ramp to allow people in wheelchairs to access the Church. I also led two different fund-raising efforts that resulted in the Church receiving an 85% discount on the total cost of the project.",
            "images": ["../images/eagleProject1.jpg", "../images/eagleProject2.jpg", "../images/eagleProject3.jpg"],
            "captions": ["The sidewalk after I lead the demolition team in breaking it up into small pieces that we could carry", "A small portion of the team and I at the project site", "The finished sidewalk with the added handicap ramp"]
        }
    ]
};

projects.display = function()
{
    for (p in projects.projs)
    {
        // Creates a div with class work-entry
        $("#projects").append(HTMLprojectStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[p].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projs[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projs[p].description);
        // Adds the Employment description to the newly created div
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
        if (projects.projs[p].images.length > 0)
        {
            for (i in projects.projs[p].images)
            {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projs[p].images[i]);
                formattedImage = formattedImage.replace("%caption%", projects.projs[p].captions[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var honorsAndAwards =
{
    "honors" :
        [
            {
                "title": "Eagle Scout",
                "dates": "July 2014",
                "description": "After developing my leadership skills over six years I finally made it to the rank of Eagle. What this means is that I have extensive experience in working with others to achieve common goals, resolve conflicts, and facilitate the growth of others."
            },
            {
                "title": "National Society of Collegiate Scholars",
                "dates": "September 2015",
                "description": "I was accepted into this organization because of my academic achievements at DePaul University."
            },
            {
                "title": "National Society of Leadership and Success",
                "dates": "September 2016",
                "description": "I was accepted into this organization because of my leadership experience and my academic achievements at DePaul University."
            }
        ]
};

honors.display = function()
{
    for (honor in honorsAndAwards.honors)
    {
        // Creates a div with class honor-entry
        $("#honors").append(HTMLhonorStart);
        // Creates variables to hold the honor information for each honor
        var formattedTitle = HTMLhonorTitle.replace("%data%", honorsAndAwards.honors[honor].title);
        var formattedDates = HTMLhonorDates.replace("%data%", honorsAndAwards.honors[honor].dates);
        var formattedDescription = HTMLhonorDescription.replace("%data%", honorsAndAwards.honors[honor].description);
        // Adds the honor info to the newly created div
        $(".honor-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
    }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]);

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(HTMLskillsStart).append(formattedwelcomeMessage).prepend(HTMLreturnHome);
$("#topContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn)/*.append(formattedTwitter)*/.append(formattedLocation);
$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn)/*.append(formattedTwitter)*/.append(formattedLocation);


// Runs the display functions and enables Google Maps
work.display();
projects.display();
education.display();
honors.display();

$("#mapDiv").append(googleMap);

// Adds all my skills to index.html
for(i = 0; i < bio.skills.length; i++)
{
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}


// Click log
$(document).click(function(loc)
{
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});


// Location
function locationizer(work_obj)
{
    var locationArray = [];
    for(job in work_obj.jobs)
    {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

/*
// Change name to international format
function inName(name_obj)
{
    name_obj = name_obj.trim().split(" ");
    console.log(name_obj);
    name_obj[1] = name_obj[1].toUpperCase();
    name_obj[0] = name_obj[0].slice(0,1).toUpperCase() + name_obj[0].slice(1).toLowerCase();
    return name_obj[0] + " " + name_obj[1];
}
$('#main').append(internationalizeButton);
*/
