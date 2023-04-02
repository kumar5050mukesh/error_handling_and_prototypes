// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.
function getPerson(obj)

{

try
{
    if ( obj.age===undefined || obj.name===undefined){
    throw new Error("Invalid parameter type")}
    else(console.log(obj.name,obj.age))
    
}

catch(error){
    console.log(error.message)

}}
getPerson({name:"mukesh",age:20})
getPerson({name:"mukesh"})
getPerson(["name","mukesh"])
