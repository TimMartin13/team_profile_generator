# Team Profile Generator

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A team profile generator written in javascript, using Node.js, that generates a team profile based on user input to various prompts.  The prompts are written using the npm inquirer package and then the output is written to an index.html file.

## Table of Contents
  
  * [Installation](#installation)
  * [Testing](#testing)
  * [Useage](#useage)
  * [Technologies](#technologies)
  * [License](#license)
  * [Contact](#contacts)

## Installation

'git clone' from my [my repository](https://github.com/TimMartin13/team_profile_generator) and then open the terminal window and navigate to the folder that holds the index.js file. Run 

```
npm i
````
from the terminal window to install the *inquirer* npm package. If you would like to test the various classes in this project, you will need to also install the *jest* npm package by typing

```
npm i --save-dev jest
```
into the terminal window. 

## Testing

After installing the *jest* npm package, type

```
npm run test
```
When the tests pass, you will have output that looks similar to this:

```
PICTURE OF TEST OUTPUT
```

## Useage

In your terminal window type:

```
node index.js
```
You will then be prompted to enter your team's information.  First you will enter the Manager, after the Manager, you will be prompted to enter an Engineer, Intern, or Finish. Enter as many team members as you like. Once you are finished, choose `Finish building your team` and then your team index.html will be generated in the dist folder.  Open the index.html in your favorite browser and BOOM!


## Technologies

HTML, CSS, JavaScript, Node.js, Test Driven Delevopment, npm packages (inquirer, jest).

## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license 

## Contact

Email: timmartin13@gmail.com

Github: [TimMartin13](https://github.com/TimMartin13)

## Links

[Team Profile Generator Repository](https://github.com/TimMartin13/team_profile_generator)

