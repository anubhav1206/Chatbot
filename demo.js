var fs = require('fs')
var data = {
    name:'Tim'
}
fs.writeFile('data.json', JSON.stringify(data),(err) =>{
    console.log("write finished",err)
})