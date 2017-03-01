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
