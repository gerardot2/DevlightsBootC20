/**
 * The editor has two console.logs to help you see what is happening. 
 * Check the console as you code to see how it changes. 
 * Declare a local variable myVar inside myLocalScope and run the tests.
 * 
 *Note: The console will still display ReferenceError: myVar is not defined, 
 *but this will not cause the tests to fail.
 * 
 */
function myLocalScope() {
    var myVar = "var local"
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);