var fs = require('fs');
function PhoneNumber(err,data){                 /*a callback */
    console.log("the data is:",data);

}
fs.readdir('c:/',PhoneNumber);      /*This runs last*/
fs.readdir('d:/',PhoneNumber);      /*This runs second*/
console.log("This comes after");    /*This runs first*/           /*notice that in the output, this line comes earlier*/ 