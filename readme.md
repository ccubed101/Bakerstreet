Running The App
===============

The application was developed using Visual Studio 2017.  So the easiest way to run the applicaiton is to double-click on the solution file (Bakerstreet.sln) to launch Visual Studio 2017 and then press the "IIS Express" button in the toolbar.  IIS Express will serve both the React based single page application and data from the REST API which is implemented using ASP.NET Core and is in the same domain/origin as the React app.  More recent versions of Visual Studio should also work...but that has not been tested.

If an appropriate version of Visual Studio is not available or it simply does not work then there is an alternative.  The "server.js" file contains code that implements a separate REST API but with exactly the same behavior.  The difference being that this separate REST API depends on NodeJS and Express.  So NodeJS will need to be installed globally or locally on the machine used to execute the application.  To execute the application open 2 console windows and in both cases navigate to the "ClientApp" directory.  In the first console window execute 

> `npm install`
	
to get the dependent projects requried by the application installed in the "node_modules" directory.  Then execute
  
> `node server` 
	
to start the Express server that will serve the REST API.  Then in the second console window execute

> `npm start` 
	
to execute the application in Chrome.  (The application was tested and developed with Chrome.  No other browsers were tested.)

Bakerstreet "Technical Questions"
=================================

Q. Explain the differences between the variable j, if any, and list where these would exist in the DOM.

`var j = 0;`
`j = 0;`

A. In previous versions or JavaScript "var j = 0;" would have been a variable at global scope and "j = 0;" would have been a property on the window object (or global in Node).  But in EC6 they are both properties on the window object.

'function j(j) {'
    'return j + j;'
'}'

A. Here j is a parameter whose scope is limited to the function j.

'var j = function(b) {'
    'return b + 10;'
'}'

A. As with "var j = 0;" above j will be a property on the window object in EC6.  But now j references a funtion.

```
function(x) {
    let j = 10;
    return j * x;
}
```

A. Here j has block scope.  j is defined only in the function and only after the line on which j was defined.

`''//Referenced by <script src=”file.js” />
var j = 10;
'''

A. Once again j will be a property on the window object in EC6.

A. The question about "where these would exist in the DOM" is puzzling to me.  JavaScript code exists in the DOM in <script> elements and in-line for things like defining behavior for events.  But I have the feeling that the question is after something else.  But for now this is the best I can do.

Q. What ways could this function be executed?

```var a = function(b) {
    return b * 10;
}```

A.
1. `a(numberParam)`
   Context is window (global context).
2. `AnObject.f = a;`
   `AnObject.f(numberParam);`
   Context is AnOject.
3. `var AnObject = new a(numberParam)`
4. `a.apply(desiredContext, arrayOfArguments);`
5. `a.call(desiredContext, arg1, arg2, arg3, <more args here>);`
6. `(function(b) { return b * 10; })(numberParam);`

Q. What does this function do? How would you unit test this function?

```export default function c(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
}```

A. 'c' is a function that takes 0 to n functions as parameters which we will refer to as F1, F2, ... Fn-1, Fn.  Passing in anything other than functions will likely result in an exception.  The return value is a function that we will refer to a R.  If no parameters are passed into function 'c' then when R is executed it will return the first parameter passed in to it if at least 1 parameter is supplied.  If no parameter are supplied then 'undefined' is returned.  If a single parameter (F1) is passed into function 'c' then R is the same as F1.  If 2 or more parameters (F1, F2, ... Fn) are passed into function 'c' then R begins by executing Fn and passing to Fn the arguments that were passed into R.  Then Fn-1 is executed with the result returned from the execution of Fn passed in as parameter.  Then Fn-2 is executed with the result returned from the execution of Fn-1 passed in as parameter.  This process continues until F1 is executed with the result returned from the execution of F2 passed in as parameter.  So R = F1(F2( ... Fn-1(Fn(...args)) ... ))

There are 3 cases to test.  The first is passing in 0 functions.  The second is passing in 1 function.  And the third is passing in 2 or more functions.  (Passing in 2 functions effectively test for any number of funtions greater than or equal to 2.)


Bakerstreet "Coding Test" Questions
===================================

Q. How did you approach the design of this application.

A. The application is constructed as a directed acyclic graph.  The application consists of a core which includes application state, domain logic and application specific logic.  Persistence, infrastructure and UI depend on the core through dependency inversion.  Generally dependency inversion would be achieved by defining interfaces in the core and then implementing the elements of persistance, infrastructure and UI to adhere to those interfaces.  Doing so makes it possible to change implementations of those elements without having to change the core.  However EC6 does not have interfaces.  So the elements have to be implemented as if those interfaces did exist...which requires a bit more discipline.

Q. Why did you choose the specific events to trigger actions?

A. The goal of the application is to demonstrate the items specified in the Bakerstreet instructions and one or two other features.  Decisions about what events to use to trigger actions was based solely on achieving that goal.

Q. Did you place all state into Redux or was it a combination of React and Redux?

A. All state in Redux.  There may be situations where state is not in Redux but they should be rare.  For example you might have a service that would maintain its own state because it is incorporated into different applications and may be part of future applications.

Q. How did you get React and Redux to play nicely together?

A. Used the React-Redux library.

Q. What changes would you make if you had more time to complete this application?

A. Setup a continuous delivery/continous deployment pipeline using Docker.

A Word About Testing
====================

There are no unit tests included in the project.  This is primarily a result of time constraints as I would want to learn Enzyme and Jest.  But I will state that I have some reservations about how extensive testing should be, when and where it should be used and it's return on investment.  I would be happy to discuss these issues further.