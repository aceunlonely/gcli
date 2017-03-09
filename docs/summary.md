# GCli
gcli is  short for great command line, it is a tool framework to help you creating your own combo clis

## main part
* shell for your clis 
* shell libs for your cli combo
* many basic api for you to devolop your cc(combo clis)
* easy to join cc togather and test alone
* a warehouse server for CCs 


## detailed design
* we will implement a module "pipe" , it is like the 'pipe' in bash, we will define many result type (like file,string,dir,etc)
* we have another module "gchain", it is a chain to join many chainNode togather, every node may be a gchain,may be a excutable file(like a js file) 
    , a gchain is a small unit to excute.
* in common, every chainNode in a gchain has an input( a pipe typed object) as well as an output(another pipe typed object, as input of next chainNode)
* so we can devolp our own cc by write a gchain
* our basic apis is also some gchains
* there is also a debug for gchain ,its name is gchdebug


## gchain
* gchain must have a gnodes
* gchain must have a name
* when to load gchain, firstly judge whether the param is an absolute Path ,is absolute,load it ,if not find gchain dir from workspace
* the gchain name can have ".", when load ,we firstly replace . to /
* gnode must have type and name
* gnode's type must one of ("exe" ,"cc")
* gnode's name can hava ".",when load, we firstly replace . to /
* exe is execute collection ,when we to explain it ,we will find the dir named as gnode.name from subdir "exes"
* cc is short for combo cli and actually it is a gchain,when will firstly find the dir named as gnode.name from subDir "chains",if we can not find the
dir,we will find it from workspace
* every gnode have a input gpipe or not , hav a output gpipe or not 
    if no input , no output , we will not gvie the next gnode a gpipe
    if no input , have output ,we will give the next gnode the output gpipe as its input
    if have input ,no output , we will give the next gnode the input gpipe as its input
    if have input ,have outpu ,we will give the next gnode the output gpipe as its input && the input will be put into [output.pre]
* gnodes must have its struct like: 
        {
            "type" : "exe",
            "name" : "copy",
            "params" : {
            }
        }
 PS: other key is invalid


 * exe is node typed directory, entry can be 'index.js' or defined by 'package.json'
 * exe must have an exports.callback function, otherwise throws Error