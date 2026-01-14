Lesson 1: React basics, JSX
what is react? 
React = external library that helps us to create websites easier.
1- External library = code that is outside our computer = code that someone else wrote.
 - it's a bunch of code that is outside our computer.
 - We can load this code on our website, and use it.
 - Why are there 2 external libraries for React?
<script src="https://unpkg.com/supersimpledev/react.js"></script>
<script src="https://unpkg.com/supersimpledev/react-dom.js"></script>
React can be used in different places.
	1- React = shared features for websites and mobile apps.
	2 - ReactDOM = features specific for websites.
2- React helps us to create websites easier.
  ReactDOM.create() = sets up React
  .render = display something
  - What is Babel?
Babel = JavaScript compiler = translates another languages into JavaScript.
- <script src="https://unpkg.com/supersimpledev/babel.js"></script>
When using React, we don't use normal JavaScript = wer use JSX instead of normal JavaScript.
We use an enhanced version of JavaScript = JSX = JavaScript XML = same as JavaScript, but we can write HTML directly in our JavaScript code.
Example:
	in JSX:
		const button = <button>Click</button>
	in JavaScript;
		const button = document.createElement('button');
		button.innerHTML = 'Click';
Problem:
- Our Web Browser does not understand JSX.
- We need to translate JSX into JavaScript.

Lesson 2: Components, Props
Components = a piece of of the website
When building websites:
- It's better to split up the website into pieces.
- So we can work on a small piece of the website at a time.
WARNING: The component name must start with a capital letter.
PascalCase = each word starts with a capital letter: (ChatInput)
JSX is more strict than normal HTML. So all elements need a closing tag.
<tagname /> = shortcut for: <tagname></tagname>  = self-closing element
COMPONENT SYNTAX:
function Button(props){
	retunr (
	  <div>
	      <button>Click</button>
	  </div>
	)
}
const div = (
	<div>
	   <Button />
    </div>
);
React lets us split our website into smaller pieces(components).(This lets us work on a small piece of the website at a time)
Fragment = <></> : group elements together, without creating an extra <div>
props = properties : are arguments passed into components : Make our components reusable.
Shortcuts in React (Destructuring):
const {prop1,prop2..} = props; => const prop1 = props.prop1; 
function Component({props}) {const {prop1,prop2} = props} ... => function ({prop1,prop2..}) {...}
in JSX we cant use if-else statement in curly brakets we use instead the Guard Operator (&&):
const result = value1 && value2;
- if value1 is true, the result will be value2.
- this works just like an if-statement.
EXAMPLE:
Instead of this:
if (sender === "robot") {
    return (
        <div>
            <img src="robot.png" width="50" />
            {message}
        </div>
    );
}
We use this :
{sender === "robot" $$ <img src="robot.png" width="50" />}

Best Practice:
- Use a component (App) to create a Website.