var offset = 0;
var i=0;
process.stdin.on('readable', function () {
    
    var buf = process.stdin.read();
    console.log(i++);
    if (!buf) return;
    for (; offset < buf.length; offset++) {
        if (buf[offset] === 0x0a) {
            //console.dir(buf.slice(0, offset).toString());
            buf = buf.slice(offset + 1);
            offset = 0;
            process.stdin.unshift(buf);
            return;
        }
    }
    process.stdin.unshift('abc');
});