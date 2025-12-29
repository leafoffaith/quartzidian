[[UML]] Previous

## Coding Style
<mark class="hltr-yellow">Understandable </mark>- write comments in English, code should be understood by everyone in the team

<mark class="hltr-yellow">Simplicity and Clarity</mark> - Making sure that the code is well formatted, commented for others to read

<mark class="hltr-yellow">Documentation</mark> - Making sure that the doc that you do write uses tables/figures

<mark class="hltr-yellow">Methods for Data Declaration</mark> - Methods that return something should be properly documented. Null pointer, div by zero exceptions 
Should you throw an exception or try-catch

<mark class="hltr-yellow">Statement Construction</mark> - Don't do too many nested ifs, separate into different lines for clarity

<mark class="hltr-yellow">I/O Techniques</mark> - How users insert information and how your system deals with it. Think about exceptions and edge cases 
How do you deal with possible injection attacks(like React will turn everything passed to props into strings)

----

## Code Documentation 
Identifier names - make it descriptive and concise
Placement and composition of commenting - SHOULD HAVE A HEADER COMMENT FOR EVERY SINGLE FILE 
For JavaScript use inline comment 
Authors, description of the file 
Version number, revision dates
For methods/functions, everything should have good descriptive natural language comments 
Think about the structure of the folder

Keep backend/front separate 
Use modular folders and export 

*Not about making a commercial quality software but clearly setting a team standard*

Use a set format for comments

A statement of purpose that indicates the function of the module 

An interface or template description that includes where it is being used. Re: templating in JS or Components in React

Make sure to highlight the important variables, their uses, restrictions an limitations. Also, specify how to invoke a given function, whether or not it is async, how you expect it to run

Development history that includes git comments, class designers, modification dates and description including merges 

Describe blocks or sections of code than commenting on every line to avoid the comments obscuring the flow. It's better to have no comments that misleading comments
To-do notes / previous revision then that should be taken out in time. Why keep To-do if it has already been implemented 

Maintenance, especially during the final phases of software engineering
Comments you leave behind are the guides that help them navigate the code 

Indentation is very important but choose a style that is consistent
Standard approach/order for data declarations

const/let should be initialized properly
the difference between let/var is very important because var uses variable hoisting while let doesn't this can cause unexpected errors which people might miss

Simple and direct code that is not convoluted. 
Could I understand this if I was not the person who coded it-

Heavy nesting is undesirable, On<sup>2</sup> at the very least but still not desirable 
Use helper functions to return true or false

----
## Input/Output
Validate all input, check the plausibility of important combinations
Keep input format simple
Label interactive input requests, specify available choice and/or 
You can specify the bounding values, this means you won't have to do much validation.
Keep input format uniform 
Use REGEX to check if the input is correct
Extra san checks on data if you're using JavaScript
User sophistication - are they crafty or are they a novice. Can they potentially hack the system 

---
## Code Efficiency
Performance Requirements should be specified during the requirements analysis phases.
Software should be as efficient as is required - don't try to over optimize the code, the simpler the code is the more efficient it is

Don't sacrifice clarity, readability or correctness for nonessential improvements in efficiency
All arithmetic and logical expressions should be simplified before committing to code 
Evaluate nested loops to determine if statements or expressions. Try not to nest more than 2 loops. 
Avoid pointers(doesn't really matter in JavaScript), complex lists and multi-dim arrays if possible
Don't mix data types

----
## Deployment Advice
Teams are responsible for ALL content 
Don't give users access to it, only test within your team
If your app stores personal information about its users then don't use real details 
Use a dummy postal address

---


