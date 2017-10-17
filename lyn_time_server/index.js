const net = require('net')
function gettime(i)
{
    return (i < 10 ? '0' : '') + i
}
function getdate (){
    const d = new Date()
    return d.getFullYear() + '-' +
    gettime(d.getMonth() + 1) + '-' +
    gettime(d.getDate()) + ' ' +
    gettime(d.getHours())+ ':' +
    gettime(d.getMinutes())
}
const server = net.createServer(function(timedate){
    timedate.end(getdate() + '\n')
})
server.listen(Number(process.argv[2]))