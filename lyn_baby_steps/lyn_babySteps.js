var sum=0
for(var n=2;n<process.argv.length;n++){
    var num=Number(process.argv[n])
    sum=sum+num;
}
console.log(sum)