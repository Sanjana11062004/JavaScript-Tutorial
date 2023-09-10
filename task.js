/*var num=19;
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
//array
var student=["sanjana","latha"];
student.push("rohit");
document.write(student);
document.write("<br />")
//object
function tudent(name,age,section){
    this.nam=name;
    this.age=age;
    this.section=section;
}
var s1=new tudent("sanjana",19,"A")
document.write(s1.section);
s1.grade="B"
document.write(s1.grade);*/
//DOM manipulation
function al(){
   // alert("Hello!");
   var x=document.getElementById("name").value;
   var y=document.getElementById("password").value;
   var rad1=document.getElementById("radio");
   var rad2=document.getElementById("radio2");
   var rad3=document.getElementById("radio3");
   var rad4=document.getElementById("radio4");
   if(x=="sanjana"&&y=="sanjana"){
    if(rad1.checked==true){
    alert("Verified! The hobby is Sleeping");
   }
   if(rad2.checked==true){
    alert("Verified! The hobby is Drawing");
   }
   if(rad3.checked==true){
    alert("Verified! The hobby is Reading");
   }
   if(rad4.checked==true){
    alert("Verified! The hobby is Playing");
   }
}
   else{
    alert("Incorrect!")
   }

   //select not working
   /*
   var sel = document.getElementById("select");
   alert(sel.options[sel.setIndex].val)*/
}
//getElementsByTagName
function ol(){
    var z=document.getElementsByTagName("h2");
    z[0].style.color="blue";
}
//onmouseover onmouseout
function pl(){
    var i=document.getElementById("head");
    i.style.color="red";
}
function ql(){
    var j=document.getElementById("head");
    j.style.color="yellow";
}

function verify(){
    var x = document.getElementById("name").value;
    var y=document.getElementById("password").value;
    if(x=="sanjana"&& y=="sanjana@123"){
        alert("successfull");
        return true;
    }
    else{
        alert("Error");
        return false;
    }

}