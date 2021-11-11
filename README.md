# API-weather-Automation

This API weather automation project are created using Javascript and Sublime Text 3 as Text Editor. We will navigate to https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/ and automate below APIs:
- GET /current?lat={lat}&amp;lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242
- GET /forecast/3hourly?postal_code={postal_code} for values {postal_code} as 26354

# Introduction

An application programming interface (API) is a component that enables the communication between two different applications.
So, APIs sit between an application and the web server, acting as an intermediary layer that process data transfer between systems.
The purpose of API Testing is to check the functionality, reliability, performance, and security of the programming interfaces.

----

# Libraries
- Node JS v16.13.0. and NPM
- SuperTest
- Mocha
- Babel (ES6+)

----

# Installation and Configuration
1. Download and install Sublime Text 3 as your Text Editor, or you can use any IDE such as Intellij IDEA or Apache Netbeans
2. Download Node JS include npm. You can download it from https://nodejs.org/en/download/current/
3. Create new folder on your computer
4. From your terminal, initialize the directory with npm to generate a package.json file.

    ```npm init -y```

    ```npm i --save-dev supertest mocha @babel/cli @babel/core @babel/node @babel/register @babel/preset-env```
5. Open up the project in Sublime Text, and import this project. Here is how the Project structure would look like: <p align="center">  <img src="https://user-images.githubusercontent.com/92636608/141333094-3c227111-2127-465b-9c6d-2ce6c837eef4.png"> </p>
6. Register to get the API token key - https://www.weatherbit.io/account/create

----

# Additional Information

Sublime is Simple and free to use, Light on memory, and can easily work with multiple projects. Read this article https://www.geeksforgeeks.org/how-to-use-terminal-in-sublime-text-editor/, to see how to use the terminal in a sublime text editor.

----

# References

- https://automationbro.com/
- https://www.ibm.com/
- https://automationstepbystep.com/
- https://www.guru99.com/
