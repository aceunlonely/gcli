/** config.json engine */
var fs = require('fs');
var path = require('path');



var data = fs.readFileSync(path.join(__dirname,'config.json'),'utf-8');
var jsonData =JSON.parse(data);



if(jsonData.workspace == 'defaut')
{
    jsonData.workspace = path.join(path.dirname(__dirname),'ccc');
}





module.exports= jsonData;
//exports.config = jsonData;
