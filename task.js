var num=19;
var num2=22;
var res;
res=num+num2;
switch(res+" sanju"){
    case "41 sanju":
        document.write("Correct Answer");
        break;
    default:
        alert("Wrong input");
}
//for loop
for(i=1;i<=10;i++){
    document.write("<h2>"+num+"*"+i+"="+(num*i)+"</h2>");
}
alert("The sum of 19 and 22 is "+res)
//while loop
document.write("<br />")
var x=1;
while(x<=10){
    document.write(x);
    x+=2;
}
document.write("<br />")
//function
function add(a,b){
    var total=a+b;
    return total;
}
var c= add("sanjana",1);
document.write("<h1>"+c+"</h1>");