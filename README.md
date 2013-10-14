A simple directive to help bind keyboard events to methods in your scope.

Sample usage

In your html page make sure you include angularjs and keypress.js

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="keypress.js"></script>

Then use the keypress attribute on the element to bind methods for different keypress.

    <input type="text" keypress="13:enterPressed(), 8 || 46 : backSpacePressed()">

If the Enter key(13) is pressed the method enter pressed is invoked in your scope, Similarly if 
backspace or delete (8 || 46) is pressed the backspacePressed method is invoked. The || operator
can you used to split any number of keyboard events.

Try running the sample page if you need any help.
