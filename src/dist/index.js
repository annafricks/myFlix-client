"use strict";

var _client = require("react-dom/client");
var _mainView = require("./components/main-view/main-view");
require("./index.scss");
// Import statement to indicate that you need to bundle `./index.scss`

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "my-flix"
  }, /*#__PURE__*/React.createElement("div", null, "Good morning"));
};
//remove ( ...); and add <MainView />; }; instead??

// Finds the root of your app
const container = document.querySelector("#root");
const root = (0, _client.createRoot)(container);

// Tells React to render your app in the root DOM element
root.render( /*#__PURE__*/React.createElement(MyFlixApplication, null));
