# Voice Command Chrome Extension

Objective: User can interact with content on any webpage by looking at it and speaking the commands.

scenario: user is on google.com and wants to click on "search". then user will look at search button and say "click on search".

### Technical Process:

- Create a option page and plug in webgazer calibration system there so that user webgazer could calibrate according to individual user.

- to open "Voice command" click on extenion icon then just look at any element and say your command. e.g. "click image". Within 100px boundry image will be searched in DOM of current active page.

- Use annyang.js for Speech Apis built on top of chrome speechApis.
- Use webgazer.js for tracking eye movements of user.

## Basic Usage

```
    yarn
    yarn dev // create development build
    yarn build // create production build
```

## directory structure

> - `src/` is root directory for a chrome extension. it includes `manifest.json` file and other static stuff.

> - `src/background.js` is main background js file for the chrome extension.

> - `src/popup-page` is the directory which includes react js setup for popup page.

> - `src/content-scripts` is the directory directory which includes react js setup for content script.

> - `src/services` is the directory for services that can be written in es6,es7 or es8...

## How to extend ?

> - Write chrome extension's background scripts code in `src/background.js`

> - Write chrome extension's popup page codes in `src/popup-page` Reactjs directory system.

> - Write chrome extension's content scripts codes in `src/content-scripts` Reactjs directory system.
