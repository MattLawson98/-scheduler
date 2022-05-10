# Interview Scheduler
The Interview Scheduler is a React based app that allows its users to create and cancel interviews with set interviewers. A user can see availble days to schedule interviews as well as how many open spots a day has! Once a user has chosen the day they want they can schedule an interview during one of the available times that are shown. Once an interview is created a user is still free to edit or cancel the interview! The overall developement was difficult due to my little experiance with react as well as trying to implement cypress using WSL!
This is a look at the main page!
!["The main page of scheduler"](https://github.com/MattLawson98/-scheduler/blob/master/docs/Main_page.PNG?raw=true)
This image shows what it looks like to create an appointment
!["Appoitment creation"](https://github.com/MattLawson98/-scheduler/blob/master/docs/Create_form.PNG?raw=true)
This is the what scheduler looks like on a smaller screen
!["Mobile main page!"](https://github.com/MattLawson98/-scheduler/blob/master/docs/Mobile_page.PNG?raw=true)
## Setup

Install dependencies with `npm install`.

The database API that was used is found at https://github.com/lighthouse-labs/scheduler-api
There is a set of instructions attached for set-up

If using Vagrant or WSL use a 12.x.x version of node, If on an M1 machine use a node 15.x.x Version!

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
### Dependencies

-axios
-classnames
-normalize.css
-prop-types
-react 
-react-dom
-react-scripts 

