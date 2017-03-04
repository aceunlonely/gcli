/** config.json engine */
var fs = require('fs');
var path = require('path');



var data = fs.readFileSync(path.join(__dirname,'config.json'),'utf-8');
var jsonData =JSON.parse(data);




jsonData.workspace ='abc';




module.exports= jsonData;
//exports.config = jsonData;
