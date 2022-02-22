# General Assembly Software Engineering Immersive: Project 3

![homepage](asset/Screenshot%202022-02-22%20at%2013.29.23.png?raw=true)

## Overview

For the third and the biggest project of the course, we were put in groups to build a full stack MERN application with CRUD functionality.
Project 3 was a one-week team coded project with [Holly Partridge](https://github.com/hollypartridge), [Harry Murphy](https://github.com/harrymurphyprojects) and [David Harvey](https://github.com/D-Harvey). We worked using a single Git repository for the first time. 
We decided to mirror the styling of the second hand clothes website Depop and use the idea of the Dots which is a professional network for people in the creative industry. They have a projects section which we would use for our content. 

Epop was deployed with netlify and can be found [here](https://epop-project3.netlify.app/).

Please also find the Git repository for the backend [here](https://github.com/mikeomerta/sei-project-three-be)

## The Brief

* Build a full-stack application by making your own backend and your own front-end.
* Build and use an Express API to serve your data from a Mongo database.
* Build a complete product with multiple relationships and CRUD functionality and have multiple models

## Timeframe

7 days.

## Technologies Used

* HTML
* CSS
* Excalidraw
* JavaScript
* React.js
* Cloudinary
* MongoDB
* Mongoose
* Bcrypt
* Axios
* Git
* GitHub

## Approach Taken

### Planning

We knew that this would be the biggest project to date so we had to plan our week carefully to make sure we could deliver an MVP with one day left of the timeframe. This would allow us to have a day to fix bugs and add stretch goals. Initially, we drew out our wireframe on Excalidraw to understand what we wanted to achieve. 

We knew that the MVP needed to have the following functionality:
* Log In
* Log Out
* Favourites
* Add Own Project
* Search Bar (Live changes as the user types)
* Navbar
* Comments
* User Page

We then made a list of stretch goals:
* Eppop Dollars (Investing in projects)
* Newsletter signup
* Email verification
* Random Avatar created on creation of user account
* Dark Theme

![excalidraw image](asset/Screenshot%202022-02-22%20at%2013.29.52.png?raw=true)

We then planned out what we wanted to achieve on each day up until the deadline. 

Tuesday
* Rough Database

Wednesday
* Pages: 
   * Home
   * Explore
   * Add Project
   * User Page

Thursday
* Login
* Logout
* Register
* WireFrame - SASS

Friday
* Error Handling
* Edit Projects
* Delete Projects
* Securing Pages

Saturday & Sunday
* Fill database
* Small Ad hoc tasks (TBC)

Monday
* Pure CSS and styling

Tuesday
* Checking app for bugs
* Troubleshooting

With this plan in place we knew we could have the app built in time for the deadline with all the functionality we wanted to have. 

### The Build - Backend

With this project we group coded for the majority of the project. The only time when we went and did solo coding was during the evening and over the weekend. There were a few times where someone would go off to build something small while the rest of us coded along together. This generally meant one person code while the other 3 navigate for them. This turned out to be a very efficient way of working and we managed to get a lot of code written very fast using this method. 

To begin with we knew we would need a backend built so that we had something to work with on our front end. We only planned to fill in some dummy data into the backend just so we could start to get our front end operating like we wanted to. 

We listed what we needed for a basic backend and we then committed to building the following files:
* Index - to build the startServer function
* Environment
* Model - project & user
* Database - data for the project model
* Seed - to seed the data we create
* Basic Controllers
  * get all projects
  * get one project
* Basic router

We started by setting up our backend with the index, environment and helpers files. We built our seed file and while this was being done Harry went and added 5 projects to a database file. We made sure that we could perform the functions we wanted to do in Insomnia. We built our model for projects on the app and while we were doing this David went and built the model for the user. We wouldn't need the user model initially but we built it as we were creating the backend functionality that we would need later. 

We used Mongoose unique validator for pre-save validation within our Mongoose schemas and bcrypt for encrypting user passwords. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.30.50.png?raw=true)
![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.00.png?raw=true)

We then built our backend router to help us keep our code clean and tidy and store everything on separate files. This then grew larger as we continued building the app but initially all we built was the ability to get all the projects and to get a single project using the projectId. 

Our controllers were split into four files in the end depending on what part of the app they controlled. Initially all we built was show all and show one controller. At the end of the project there is a controller file for projects, users, comments and for authorisation. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.30.png?raw=true)
![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.19.png?raw=true)

All of this was not something we got finished on that initial afternoon we had on day one so we met the next day and carried on building until the afternoon of day two. By the afternoon of day two we had our backend setup like we wanted it to and we could focus on connecting the frontend. 

We broke for the day and overnight we all had different tasks. We wanted some main pages built on the frontend so 3 of us took the Home, Project Show All and the Project Show One pages. David carried on working on the backend adding functionality that we would use later.

By day three we had frontend pages connected and working as designed and the backend was now set up with error handling, secure routes and with the database filled in with another 10 projects. As this was a user-centric approach, the secure route was added so that certain parts of the website could only be accessed by people with an account, and also allowed us to show unique information based on the user. In order for these secure routes to work, we wrote a function that confirms that there is a valid token obtained at the login stage, and it authorised the users accordingly.

![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.30.png?raw=true)
![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.40.png?raw=true)

### The Build - Frontend

With the backend developed as much as we needed it at this stage we worked all day and the next on the frontend. On day three and four we built the following:

* Pages: 
  * Home
  * Explore
  * Add Project
  * User Page
  * Login
  * Register

We also built the functionality so the user could:

* Login
* Logout
* Register
* Edit Projects
* Delete Projects

This was a very productive period with group coding along with each of us doing small bits of solo work on certain elements. During these two days the areas I took responsibility for were:

* Error handling
* Loading handling
* Uploading of images by the user
* The add project function

I added error handling to a number of pages by creating a Boolean that would become true in the try/catch function. If true, a certain error page would appear on the screen by using some conditional rendering. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.31.56.png?raw=true)

I followed a similar pattern if there was an issue loading the page and used conditional rendering to ensure it appeared when the issue occurred. 

![error page](asset/Screenshot%202022-02-22%20at%2013.32.09.png?raw=true)

For the uploading of images by the user I signed up to Cloudinary and used their documentation to understand how to implement the code into our app. I had to write to image uploaders as our model allowed us to upload multiple images for a new project. Using Cloudinary made the process of uploading and storing images very easy. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.32.20.png?raw=true)

The last thing I worked on independently was the Add Project page. I used a spread operator function to input the data the user was inputting. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.32.31.png?raw=true)

As our Project Schema had a restriction on the amount of text that could be entered I created a character count that was rendered so it would tell the user how many characters they had used. At a later date we added some error handling to the character count in order to flag it to the user and make for a better experience. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.32.42.png?raw=true)

Over the weekend we decided to do small jobs and to take a break mainly but our aim was to fill the database with more projects so I took that responsibility.

The other three members of the team split the frontend pages between them and did the styling via SASS/CSS and replicated the Depop style as close as they could have. 

![website image](asset/Screenshot%202022-02-22%20at%2013.32.51.png?raw=true)

After the weekend we focussed on building the comments and favourites functionality into the app.

We went back to the backend to create a controller for the comments and the ability to add and delete comments. We also used the token created by logging in to assign that comment to a user. We then had to create the code on the frontend to allow the user a place to leave comments and to favourite projects. 

We then spent the rest of the day trying to fix bugs, fixing elements of styling and hooking up our links across the app. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.33.08.png?raw=true)

We wanted to have a group of six projects that would display on the homepage if they were the most favorited projects. However, we ran out of time for this so we had to manually write a piece of code that put six projects onto the home page. This involved adding an additional requirement in our project model.

![codeblock](asset/Screenshot%202022-02-22%20at%2013.33.25.png?raw=true)

We were at a good place with our app and we wanted to finish off small pieces and make the app look as good as we could. Our deadline was early the next day so we decided not to add any further elements and just tidy up our code, finish some styling elements, add additional error handling and make sure we all had the up to date code. 

## Challenges

Working as a four and coding together could have presented big challenges but we all worked together very well and there were no huge challenges that we faced on this project. Listening to some of the other teams stand up everyday we heard about large issues and code not working but we never really faced these sort of issues. 

Of course there were times when code didn't work or things did not function like we wanted to but nothing that stopped us in our tracks. Whenever we had issues with our code we all went and did reading online or looked at class notes and we overcame our pain points relatively quickly. 

I would say that the biggest challenge is working with four people in a team. You have four different knowledge levels so it is important to make sure everyone understands the code that is being written and that the strongest person doesn't get burdened with having to produce all the answers. We solved this by having all of us code at different points and also navigate at different points. 

Additionally, having four people in a team means having four different views on styling. We partially solved this by mirroring the style of Depop so we didn't have to come up with creative styling completely by ourselves. However, this challenge does lead into one of my future improvements which is in the section below. 

## Wins

The relative ease we all had with coding this project was a huge win for us. Being able to work together helped all of us learn new things and contribute to the whole project.

I was especially happy with my contributions to the code and how that made for a better user experience. 

At one point we were trying to get the “date added” to the project information and the information coming from the backend was not user friendly. We had great fun remembering all the methods we learnt early in the course to rearrange the backend data into a user friendly version. I am sure there is an easier way to do it but we all had fun figuring it out as a group that we wanted to keep the code in for ourselves. 

![codeblock](asset/Screenshot%202022-02-22%20at%2013.34.02.png?raw=true)

## Key Learnings

Once again preparation proved to be the biggest factor in helping us achieve our intended target. Wireframes and planning day by day tasks are the way to ensure you achieve what you want to achieve. 

For me the biggest learning on this project was my ability to use previous employment experience in managing the group. By no means did I declare myself the “leader” but I definitely fell into the role of deciding when we did something, who would do something and being the organiser. Project management and team leading was a huge part of my previous employment and they really came into use during this project. 

## Known Bugs

The buttons and links on the homepage all lead to the same page as we didn't have time to develop further pages and sections of the app. This is something I want to look at for future improvements and build further pages and some of our stretch goals. 

## Future Improvements

As I mentioned before there were different opinions on styling the login, register and favourites page. In the future, I would like to restyle these pages to be more in line with Depop’s styling to match the overall design better.

I would also like to look at the code for the “Loved By” section on the home page and develop the code that puts the most liked projects into that section, rather than putting them in manually like we did.
