Event Planner
=============
Test driving a single paged javascript web app with a custom testing framework

## User Stories
---------------
```
As a user
So I can let people know about an event
I can post an event with some details

As a user
So I can let people know when an event I post will take place
I can provide date and time details when I post an event

As a user
So I can find out about all events posted
I can see a list of events with their details

As an admin
So the event planner doesn't clog up
Only upcoming events stay listed on my webapp

As a user
So I know which events are happening soon
I want to see the list of events in chronological order

As a user
So I can find out the weatherforecast
I can input my city's name and request the forecast
```

## Run the SPA
--------------
1. In your terminal, move to your project directory and clone/move into the repo:

```
git clone git@github.com:CKKH/puffin-event-planner-js.git
cd puffin-event-planner-js
```
2. From the project's root directory, run the following command:

```
open -a "Google Chrome" index.html
```

## Tests
--------
1. Provided you followed the steps for cloning the repo in the 'Run' section above,
to run the rests move to the project's root directory and run the following:
```
open -a "Google Chrome" SpecRunner.html`
```

2. Open your browser's DevTools and view the console tab to view the tests.

## Technologies Used
--------------------
- Vanilla Javascript:                     https://www.javascript.com/
- Bea's and Jacques' testing framework:   https://github.com/beacourage/Testing_Framework_js/blob/master/testingFramework.js
- Google Chrome:                          https://www.google.com/chrome/
- Open Weather API                        https://openweathermap.org/api
