document.write('<h1>Question no1 :~<h1/>')
var city = prompt( 'Enter City Name').toUpperCase();
var name = ('<h2>Welcome To City Of Light<h2/>');
var namu = ('<h2>WELCOME TO<h2/>');
if (city == 'KARACHI'){
    document.write(name)
} 
else {document.write('<h2>'+namu+city+'</h2>')
}

document.write('<h1>Question no 2 :~<h1/>')
var gender = prompt('Enter Your Gender').toUpperCase()
if('MALE'==gender){
    document.write('Welcome Sir')
} else{document.write("Welcome Maam")}

document.write('<h1>Question no 3 :~ <h1/>')
var color1 = prompt('Enter first Signal color','Red').toUpperCase()
var color2 = prompt('Enter second Signal color','Yellow').toUpperCase()
var color3 = prompt('Enter Third Signal color','Green').toUpperCase() 
document.write('<table>'+'<tr>'
+'<th><b>Signal Color<b/><th/>'+
'<th><b></b>Message<b/><th/>'+
'<tr/>'+
'<tr>'+'<td>'+color1+'<td/>')

if(color1 =='RED'){
   document.write('<td>Must Stop</td>')
} 
else if(color1 =='YELLOW'){
    document.write('<td>Ready To Move<td/>')
}
else if (color1 =='GREEN'){
    document.write('<td>Move Now<td/>')
}
else{
    document.write('<td>Invalid color</td>')
}
document.write('<tr/>'+
'<tr>'+'<td>'+color2+'</td>'+'<td>')
if(color2 =='RED'){
    document.write('<td>Must Stop</td>')
 } 
 else if(color2 =='YELLOW'){
     document.write('<td>Ready To Move<td/>')
 }
 else if (color2 =='GREEN'){
     document.write('<td>Move Now<td/>')
 }
 else{
     document.write('<td>Invalid color</td>')
 }
document.write('<tr/>'+
'<tr>'+'<td>'+color3+'<td/>')
if(color3 =='RED'){
    document.write('<td>Must Stop</td>')
 } 
 else if(color3 =='YELLOW'){
     document.write('<td>Ready To Move<td/>')
 }
 else if (color3 =='GREEN'){
     document.write('<td>Move Now<td/>')
 }
 else{
     document.write('<td>Invalid color</td>')
 }
 document.write('<tr/>'+
 '<table/>')
document.write('<h1>Question no 4 :~<h1/>')
var fule =+prompt('Enter Fule value')
var num = 'L fule' 
if(fule <= 0.25){
    document.write('Please refill the fule in your car')
}else{
    document.write("your fule level is good in tank")
}
document.write(" "+fule+" "+num)

document.write('<h1>Question no 5 :~<h1/>')
var a = 4;
if(++a===5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
if (++c < 14){
    alert("condition 3 is true");
    }
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}    
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}
document.write('<h1>Question no 6:~<h1/>')
document.write('<h1>Mark Sheet<h1/>'+'<br>')
var totalMark =+prompt('Enter Total Marks');
var markObtain =+prompt('Enter Mark Obtain');
var per = (markObtain/totalMark)*100;
document.write('<h2>'+'Total Mark :'+' '+totalMark+'<h2/>');
document.write('<h2>'+'Mark Obtain :'+' '+markObtain+'<h2/>');
document.write('<h2>'+'Percentage :'+' '+per+'%'+'<h2/>')
if(per >= 80){
    grade = ('Grade : A-one')
} 
else if(per >=79){
    grade = ('<h2>'+'Grade : A'+'<h2/>')
} 
else if(per >=69){
    grade = ('<h2>'+'Grade : B'+'<h2/>')
}
 else if(per >=60){
    grade = ('<h2>'+'Grade : c'+'<h2/>')
}
else{ grade = ('Grade : Fail')}
document.write(grade)

if(grade == 'A-one'){
    remark = ('Excellent')
}
else if(grade == 'A'){
    remark = ('Good')
}
else if(grade == 'B'){
    remark = ('You Need to Improve')
}
else{
    remark = ('Sorry')
}
document.write('<h2>'+"Remarks :"+ remark+'</h2>')
document.write('<h1>Question no 7:~<h1/>')
var nuw = +prompt('Enter a Number Whose Range (1 to 10)')
if(nuw === 4){
    swal("Good job!", "Correct Answer", "success");
}else{swal("Sorry!", "“Close enough to the correct answer”", "error");}
document.write('<h1>Question no 7:~<h1/>')
 var nub = +prompt("Enter any Number")
 if(nub%3==0 ){
    swal("Good job!", "Number is Divisible by 3", "success");
 }else{swal("Sorry!", "“Your Number is not Divisible by 3”", "error")}
document.write('<h1>Question no 8:~<h1/>')
 var nue = +prompt("Enter any Number")
 if(nue%2==0 ){
    swal("Good job!", "Number is Even Number", "success");
 }else{swal("Good job!", "Number is Odd Number", "success")}
document.write('<h1>Question no 9:~<h1/>')
 var nuq = +prompt("Enter any Number")
 if(nuq>40 ){
    swal("Temperature NEWS!", "“It is too hot outside.”", "success");
 }
 else if
 (nuq>30 ){
    swal("Temperature NEWS!", "“The Weather today is Normal.”", "success");}
else if
(nuq>20 ){
    swal("Temperature NEWS!", "“Today’s Weather is cool.”", "success");}
 else
 {swal("Temperature NEWS!", "“OMG! Today’s weather is so Cool.”", "success")}
document.write('<h1>Question no 10:~<h1/>')
var nob = +prompt('Enter number 1')
var nop = +prompt('Enter number 2')
var not = prompt('Enter Any Opprater(+,-,*,/,%)')
if(not==="+"){
    document.write(nob+nop)
}
else if(not==="-"){
    document.write(nob-nop)
}
else if(not==="/"){
    document.write(nob/nop)
}else if(not==="*"){
    document.write(nob*nop)
}else if(not==="%"){
    document.write(nob%nop)
}
else{swal("Sorry!", "“Some Thing Went Wrong”", "error")}