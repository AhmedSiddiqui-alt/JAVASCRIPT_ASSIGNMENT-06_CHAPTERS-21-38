// **********************************************************************************************************
//                                            // Chapters 21-25
// **********************************************************************************************************

// Task 1
var firstName=prompt("Enter first name");
var lasttName=prompt("Enter last name");
var fullName=firstName+" "+lasttName;
alert("Hello "+fullName);

// Task 2
var mobileName=prompt("Enter your favourite mobile phone name");
document.write("My favourite phone is :"+mobileName+"</br>");
document.write("Length of string:"+mobileName.length+"</br></br>");

// Task 3
var country="Pakistani";
var indexofCountry=country.indexOf("n");
document.write("String:"+country+"</br>");
document.write("Index of n:"+indexofCountry+"</br></br>");

// Task 4
var txt="Hello World";
var indexofTxt=txt.lastIndexOf("l");
document.write("String:"+txt+"</br>");
document.write("Last index of l:"+indexofTxt+"</br></br>");

// Task 5
document.write("String:"+country+"</br>");
var charAt=country.charAt(3);
document.write("Character at index of "+3+": "+charAt+"</br></br>");

// Task 6
var fName=prompt("Enter first name");
var lName=prompt("Enter last name");
var fulName=fName.concat(" ",lName);
document.write(fulName+"</br></br>");

// Task 7
var city="Hyderabad";
var cityReplace=city.replace("Hydera","Islama");
document.write("City: "+city+"</br>");
document.write("After replacement: "+cityReplace+"</br></br>");

// Task 8
var message="Ali and Sami are best friends. They play cricket and football together";
document.write(message+"</br>");
message=message.replace(/and/g,'&');
document.write(message+"</br></br>");

// Task 9
var stringToNumber="472"
document.write("Value: "+stringToNumber+"</br>");
document.write("Type: "+"string"+"</br>");
var number=parseInt(stringToNumber);
document.write("Value: "+number+"</br>");
document.write("Type: "+"number"+"</br></br>");

// Task 10
var userInput="peanuts";
document.write("User input: "+userInput+"</br>");
userInput=userInput.toUpperCase();
document.write("Upper case: "+userInput+"</br></br>");

// Task 11
var txtInput=prompt("Enter Your Text");
document.write("User input: "+txtInput+"</br>");
var cpy="";
for(var i=0; i<txtInput.length; i++)
{
if(i==0)
{
    cpy+=txtInput[i].toUpperCase();
}
else{
    cpy+=txtInput[i].toLowerCase();
}
}
document.write("Titlecase: "+cpy+"</br></br>");

// Task 12
var num=35.36;
document.write("Number: "+num+"</br>");
var stringNum=num.toString();
document.write("Result: "+stringNum.charAt(0)+stringNum.charAt(1)+stringNum.charAt(3)+stringNum.charAt(4)+"</br></br>");

// Task 13
var inputString=prompt("Enter any string");
for(var i=0; i<inputString.length; i++)
{
    var a=inputString.charCodeAt(i);
   if(a==33 ||a==44||a==46||a==64 ) 
   {
       alert("Please enter a valid username");
       break;
   }
}

// Task 14
var A=["cake","apple pie","cookie","chips","patties"];
var searchInput=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");4
searchInput=searchInput.toLowerCase();
var checkItem=false;
for (var i=0; i<A.length; i++)
{
    if(searchInput==A[i])
    {
       document.write(searchInput+" is available at index "+i+" in our bakery"+"</br></br>"); 
       checkItem=true;
       break;
    }
} 
if(checkItem==false)
{
    document.write("We are sorry. "+searchInput+" is "+"<strong>not available</strong>"+" in our bakery"+"</br></br>"); 
}

// Task 15
var verfyPassword=prompt("Enter your password");
if(verfyPassword.length<6)
{
    alert("Password should be equal to greater than 6 characters ");
}
for(var i=0; i<verfyPassword.length; i++)
{
    var a=verfyPassword.charCodeAt(i); 
    if (a==65||(a>=65&&a<=90)||a==90||a==97||(a>=97&&a<=122)||a==122)
    {
    alert("Password is verified");
    break;
    }
    else{
        alert("Password cannot start with a number");
        break;
    }
}

// Task 16
var university="University of Karachi";
var A=university.split("");
for(var i=0; i<A.length; i++)
{
    document.write(A[i]+"</br>");
}
document.write("</br></br>");

// Task 17
var takeInput=prompt("Enter anything");
document.write("User input:"+takeInput+"</br>");
for(var i=takeInput.length-1; i>0; i--)
{
    document.write("Last character of input:"+takeInput[i]+"</br></br>");
    break;
}

// Task 18
var txt="The quick brown fox jumps over the lazy dog";
document.write("Text: "+txt+"</br>");
var a=0;
for(var i=0; i<txt.length; i++)
{
    if((txt[i]=="T"&&txt[i+1]=="h"&&txt[i+2]=="e")||(txt[i]=="t"&&txt[i+1]=="h"&&txt[i+2]=="e"))
    {
        a+=1;
    }
}
document.write("There are "+a+" occurence(s) of word 'the'"+"</br></br>");


// **********************************************************************************************************
                                           // // Chapters 26-30
// **********************************************************************************************************

// Task 1
var giveInputNumberP=prompt("Enter any positive number");
document.write("Number: "+giveInputNumberP+"</br>");
document.write("round off value: "+Math.round(giveInputNumberP)+"</br>");
document.write("floor value: "+Math.floor(giveInputNumberP)+"</br>");
document.write("ceil value: "+Math.ceil(giveInputNumberP)+"</br></br>");

// Task 2
var giveInputNumberN=prompt("Enter any negative number");
document.write("Number: "+giveInputNumberN+"</br>");
document.write("round off value: "+Math.round(giveInputNumberN)+"</br>");
document.write("floor value: "+Math.floor(giveInputNumberN)+"</br>");
document.write("ceil value: "+Math.ceil(giveInputNumberN)+"</br></br>");

// Task 3
var checkAbsoluteValue=prompt("Enter any number");
document.write("The absolute value of "+checkAbsoluteValue+" is "+Math.abs(checkAbsoluteValue)+"</br></br>");

// Task 4
var randomDiceValue=Math.random()*7;
if(Math.floor(randomDiceValue)!=0)
{
    document.write("random dice value "+Math.floor(randomDiceValue)+"</br></br>");
}

// Task 5
var tossHeadsOrTails=Math.random()*3;
if(Math.floor(tossHeadsOrTails)==1)
{
document.write(Math.floor(tossHeadsOrTails)+"</br>")
document.write("random coin value: Heads"+"</br></br>");
}
else if(Math.floor(tossHeadsOrTails)==2)
{
    document.write(Math.floor(tossHeadsOrTails)+"</br>")
    document.write("random coin value: Tails"+"</br></br>");
}

// Task 6
var randomNumberBetween1and100=Math.random()*101;
document.write("Random number between 1 and 100: "+Math.floor(randomNumberBetween1and100));

// Task 7
var weightInput=prompt("Enter your weight in kilograms");
if(weightInput.length==2)
{
var cpy=weightInput.slice(0,2);
document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==5)
{
    var cpy=weightInput.slice(0,2);
    document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==7)
{
    var cpy=weightInput.slice(0,4);
    document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==13)
{
    var cpy=weightInput.slice(0,4);
    document.write("The weight of user is "+cpy+" kilograms");
}

// Task 8
var secretNumberBetween1to10=Math.random()*10;
var takeFloorSecret=Math.floor(secretNumberBetween1to10);
var guessSecretNumberByUser=+prompt("Enter a number between 1 and 10");
if(guessSecretNumberByUser==takeFloorSecret)
{
    alert("Answer is correct")
}
else{
    alert("Try again");
}

// **********************************************************************************************************
                                           // // Chapters 31-34
// **********************************************************************************************************

// Task 1
var fullDate=new Date();
document.write(fullDate+"</br></br>");

// Task 2
var onlyMonth=fullDate.getMonth();
if(onlyMonth==0)
{
    document.write("January"+"</br></br>");
}
else if(onlyMonth==1)
{
    document.write("February"+"</br></br>");
}
else if(onlyMonth==2)
{
    document.write("March"+"</br></br>");
}
else if(onlyMonth==3)
{
    document.write("April"+"</br></br>");
}
else if(onlyMonth==4)
{
    document.write("May"+"</br></br>");
}
else if(onlyMonth==5)
{
    document.write("June"+"</br></br>");
}
else if(onlyMonth==6)
{
    document.write("July"+"</br></br>");
}
else if(onlyMonth==7)
{
    document.write("August"+"</br></br>");
}
else if(onlyMonth==8)
{
    document.write("September"+"</br></br>");
}
else if(onlyMonth==9)
{
    document.write("October"+"</br></br>");
}
else if(onlyMonth==10)
{
    document.write("November"+"</br></br>");
}
else if(onlyMonth==11)
{
    document.write("December"+"</br></br>");
}

// Task 3
var dayToday=fullDate.getDay();
if(dayToday==0)
{
    document.write("Sun"+"</br></br>");
}
else if(dayToday==1)
{
    document.write("Mon"+"</br></br>");
}
else if(dayToday==2)
{
    document.write("Tue"+"</br></br>");
}
else if(dayToday==3)
{
    document.write("Wed"+"</br></br>");
}
else if(dayToday==4)
{
    document.write("Thu"+"</br></br>");
}
else if(dayToday==5)
{
    document.write("Fri"+"</br></br>");
}
else if(dayToday==6)
{
    document.write("Sat"+"</br></br>");
}

// Task 4
dayToday
if(dayToday==0)
{
    document.write("It's Fun day"+"</br></br>");
}

else if(dayToday==6)
{
    document.write("It's Fun day"+"</br></br>");
}

// Task 5
var getDays=fullDate.getDay();
if(getDays<16)
{
    document.write("First Fifteen days of the month"+"</br></br>");
}
else{
    document.write("Last days of the month"+"</br></br>");
}

// Task 6
var storeData=new Date("Jan 1, 1970");
var gettodayDatemili=fullDate.getTime();
var convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("Current Date: "+fullDate+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+diff+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+(diff/1000*60*60*24)+"</br></br>");

// Task 7
var getPmOrAm=fullDate.getHours();
document.write(getPmOrAm+"</br>");
if(getPmOrAm>=1 && getPmOrAm<=12){
document.write("It's AM"+"</br></br>");
}
else if(getPmOrAm>=13 && getPmOrAm<=23)
{
    document.write("It's PM"+"</br></br>");
}

// Task 8
var setTheDate=new Date(fullDate.setMonth(11));
document.write(setTheDate+"</br></br>");

// Task 9
var todaysDateC=new Date();
var calculatingRamadandDays=new Date("Jun 18, 2015");
var getDaysMili=calculatingRamadandDays.getTime();
var todaysDateMili=todaysDateC.getTime();
var diffBetweenTwoDate=todaysDateMili-getDaysMili;
var daysCount=diffBetweenTwoDate/(1000*60*60*24);
document.write(Math.floor(daysCount)+" days have passed since 1st Ramadan, 2015"+"</br></br>");


// Task 10
storeData=new Date("Dec 5, 2015");
convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT),"+diff/1000*60*60+"</br></br>");

// Task 11
var extractTodaysDate=new Date();
document.write("current date:"+extractTodaysDate+"</br>");
var extractHours=new Date(extractTodaysDate.setHours(14));
document.write("1 hour ago, "+extractHours+"</br></br>");

// Task 12
var extractCurrentDate=new Date();
document.write("current date:"+extractCurrentDate+"</br>");
var convertTo100Years=new Date(extractCurrentDate.setFullYear(1920));
document.write("100 years back, it was "+convertTo100Years+"</br></br>");   

// Task 13
var takeInputAge=+prompt("Enter your age");
var getInputAge=new Date(takeInputAge);
document.write("Your age is "+takeInputAge+"</br>");
var getCurrDate=new Date();
var getYearToday=getCurrDate.getUTCFullYear();
var calculateYearAge=getYearToday-getInputAge;
document.write("Your birth year is "+calculateYearAge+"</br></br>");

// Task 14
var customerNameN=prompt("Enter your name");
var enterNumberUnits=+prompt("Enter number of units","410");
var enterChargesPerUnits=+prompt("Enter charges per unit ","16");
var netAmountBillWithInDueDate=enterNumberUnits*enterChargesPerUnits;
var latePaymentCharges=350;
var grossAmountPayableAfterDueDate=netAmountBillWithInDueDate+latePaymentCharges;
var onlyMontH=fullDate.getMonth();
var Monthm="";
if(onlyMontH==0)
{
 Monthm="January";
}
else if(onlyMontH==1)
{
Monthm="February";
}
else if(onlyMontH==2)
{
Monthm="March";
}
else if(onlyMontH==3)
{
Monthm="April";
}
else if(onlyMontH==4)
{
Monthm="May";
}
else if(onlyMontH==5)
{
Monthm="June";
}
else if(onlyMontH==6)
{
Monthm="July";
}
else if(onlyMontH==7)
{
Monthm="August";
}
else if(onlyMontH==8)
{
Monthm="September";
}
else if(onlyMontH==9)
{
Monthm="October";
}
else if(onlyMontH==10)
{
Monthm="November";
}
else if(onlyMontH==11)
{
Monthm="December";
}

document.write("<h1>K-Electric Bill</h1>"+"</br>");
document.write("Customer Name: "+"<strong>"+customerNameN+"</strong>"+"</br>");
document.write("Month: "+"<strong>"+Monthm+"</strong>"+"</br>");
document.write("Number of units: "+"<strong>"+enterNumberUnits+"</strong>"+"</br>");
document.write("Charges per units: "+"<strong>"+enterChargesPerUnits+"</strong>"+"</br></br>");
document.write("Net Amount Payable (within Due Date): "+"<strong>"+netAmountBillWithInDueDate+"</strong>"+"</br>");
document.write("Late payment surcharge: "+"<strong>"+latePaymentCharges+"</strong>"+"</br>");
document.write("Gross Amount Payable (after Due Date): "+"<strong>"+grossAmountPayableAfterDueDate+"</strong>"+"</br>");

// **********************************************************************************************************
//                                            // Chapters 35-38
// **********************************************************************************************************

// Task 1
function display_Current_Date_And_Time()
{
var functionDateAndTime=new Date();
document.write(functionDateAndTime+"</br></br>");    
}
display_Current_Date_And_Time();

// Task 2
function greet_User()
{
 var fnamee=prompt("Enter first name");
 var lnamee=prompt("Enter last name");
 var fullnamee=fnamee.concat(" ",lnamee);
 document.write(fullnamee+"</br></br>");   
}
greet_User();

// Task 3
function add_Two_Numbers()
{
   var firstNumberr=+prompt("Enter first number");
   var secondNumberr=+prompt("Enter second number");
   var summ=firstNumberr+secondNumberr;
   document.write("Sum of "+firstNumberr+" & "+secondNumberr+" is :"+summ+"</br></br>");
}
add_Two_Numbers();

// Task 4
function perform_Add_Subtract_Multiply_Divide_Modulus_Operation(fnn,snn,operator)
{
   
    if(operator==="+")
    {
        var resultt=fnnn+snnn;
        document.write("The addition of "+fnnn+" & "+snnn+" is: "+resultt+"</br></br>");
    }
    else if(operator==="-")
    {
        var resultt=fnnn-snnn;
        document.write("The subtraction of "+fnnn+" & "+snnn+" is: "+resultt+"</br></br>");
    }  
    else if(operator==="x")
    {
        var resultt=fnnn*snnn;
        document.write("The multiplication of "+fnnn+" & "+snnn+" is: "+resultt+"</br></br>");
    }
    else if(operator==="/")
    {
        var resultt=fnnn-snnn;
        document.write("The division of "+fnnn+" & "+snnn+" is: "+resultt+"</br></br>");
    }
    else if(operator==="%")
    {
        var resultt=fnnn%snnn;
        document.write("The modulus of "+fnnn+" & "+snnn+" is: "+resultt+"</br></br>");
    }   
    else
    {
        alert("Invalid operator");
    }
}
var fnnn=+prompt("Enter first number");
var snnn=+prompt("Enter second number");
var operator=prompt("Enter operator sign","+,-,x,/,%");
perform_Add_Subtract_Multiply_Divide_Modulus_Operation(fnnn,snnn,operator);

// Task 5
function take_Squares(argument)
{
var square=argument*argument;
document.write("The squares of "+argument+" is: "+square+"</br></br>");
}
var argument=prompt("Enter any number to find it's square");
take_Squares(argument);

// Task 6
function get_Factorial()
{
var inputFactorial=+prompt("Enter any number to compute factorial");
var fac=inputFactorial;
for(var i=inputFactorial-2; i>0; i--)
{
fac+=fac*i;  
document.write(fac+"</br> ");  
}
document.write("Factorial of "+inputFactorial+" is: "+fac+"</br></br>");    
}
get_Factorial();

// Task 7
function generate_Counting()
{
  var startNumberAsInput=prompt("Enter start number");
  var endNumberAsInput=prompt("Enter end number");
  for (var i=startNumberAsInput; i<=endNumberAsInput; i++)
  {
      document.write(i+"</br>");
  }  
}
generate_Counting();
document.write("</br></br>");

// Task 8
function calculateHypotenuse()
{
    var base=+prompt("Enter base value");
    var perpendicular=+prompt("Enter perpendicular value");
    var baseSquare,perpendicularSquare;
 function calculateSquare()
 {
     baseSquare=base*base;
     perpendicularSquare=perpendicular*perpendicular;
 }   
 calculateSquare();
 var hypotenuse=baseSquare+perpendicularSquare;
 document.write("Hypotenuse value: "+hypotenuse+"</br></br>");
}
calculateHypotenuse();

// Task 9
function calculate_Area_Of_Triangle(width,height)
{
var Area=width*height;
document.write("Area of rectangle value: "+Area+"</br></br>");
}
var width=prompt("Enter width value");
var height=prompt("Enter height value");
calculate_Area_Of_Triangle(width,height);

// Task 10
function check_Palindrome(w){
    var palindromeCheck="";
    var checkkkk=false;    
    for(var i=(w.length)-1; i>=0; i--){
        
        if(checkkkk==false){
            palindromeCheck=w[i];
            checkkkk=true;
        }
        else{
            palindromeCheck=palindromeCheck+w[i];
        }
    }  
    return palindromeCheck;
}

var a=prompt("Enter String");
var result=check_Palindrome(a);
if(result==a){
    document.write("Word "+result+" is Palindrome");
}
else{
    document.write("Word "+result+" is not Palindrome");
}

// Task 11
function convert_First_Alphabet_To_Uppercase(){
var takeWordInput=prompt("Enter your desire word");
document.write("EXAMPLE STRING: "+takeWordInput+"</br>");
var firstAlphabetAsUpperCase="";
for (var i=0; i<takeWordInput.length; i++)
{
if(i==0)
{
firstAlphabetAsUpperCase+=takeWordInput[i].toUpperCase();
}    
else if(takeWordInput[i]==" ")
{
firstAlphabetAsUpperCase+=takeWordInput[i];
firstAlphabetAsUpperCase+=takeWordInput[i+1].toUpperCase();
i++;
}
else
{
firstAlphabetAsUpperCase+=takeWordInput[i];  
}
}
document.write("EXPECTED OUTPUT"+firstAlphabetAsUpperCase+"</br></br>");
}
convert_First_Alphabet_To_Uppercase();
    
// Task 12
function long_Word_Checking(str)
{
    var str1=str.split(" ");
    var arr=new Array();
    for(var i=0; i<str1.length; i++)
    {
        arr[i]=str1[i].length;
    }
    var large=arr[0];
    var counterssss=0;
    for(var i=1; i<arr.length; i++){
        
        if(arr[i]>large){
            large=arr[i];
            counterssss=i;
        }
    }

    return str1[counterssss];
    
}
var s=prompt("Enter string to check longer word");
var resulttttttt=long_Word_Checking(s);
document.write(resulttttttt);

// Task 13
function Count_Special_Letter(strrrrrr,chhhhh) {
    
    var counterRRRR = 0;

    for (var i = 0; i <= strrrrrr.length; i++) {
        if (strrrrrr[i] == chhhhh ) {
            counterRRRR++;
        }
    }
    alert(counterRRRR);
    return counterRRRR;
}
var strrrrrr = prompt("Enter String");
var chhhhh = prompt("Enter that special charater to find");
var cc=Count_Special_Letter(strrrrrr,chhhhh);
document.write("Text: " + strrrrrr + "<br>There are " + cc + " occurence(s) of character " +"<strong>"+ chhhhh+"</strong>");

// Task 14
function calcCircumference(r){
    var circum=(2)*(Math.PI)*(r);
    return circum
}

function calcArea(r)
{
    var area=Math.PI*r*r;
    return area;
}


var r=prompt("enter radius of circle");
var result1=calcCircumference(r);
var result2=calcArea(r);
document.write("The value of circumference is: "+result1+"<br>");
document.write("The value of area is: "+result2);

// **********************************************************************************************************
//                                            // THE END
// **********************************************************************************************************
