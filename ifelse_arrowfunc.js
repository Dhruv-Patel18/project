//
// let ab=(p)=>{
//     if(p>=90){
//         console.log("Grade A");
//     }
//     else if(p>=80){
//         console.log("Grade B");
//     }
//     else if(p>=70){
//         console.log("Grade C");
//     }
//     else if(p>=60){
//         console.log("Grade D");
//     }
//     else if(p>=40){
//         console.log("Grade E");
//     }
//     else{
//         console.log("Grade F");
        
//     }
// }
// ab(88)

//-----

//

// let ab=(s)=>{
//     sum=0
//     if(s<=10000){
//         hra=(20/100)*s
//         da=(80/100)*s
//         console.log("Total salary=",s+hra+da);  
//     }
//     else if(s<=20000){
//         hra=(25/100)*s
//         da=(90/100)*s
//         console.log("Total salary=",s+hra+da);  
//     }
//     else if(s>20000){
//         hra=(30/100)*s
//         da=(78/100)*s
//         console.log("Total salary=",s+hra+da);  
//     }
//     else{
//         console.log("Enter proper value of salary");
        
//     }
// }
// ab(8775)

//-----

//To count number of digits in given number
// let c=1
// let n=554387345

// while(c>0){
//     n=n/10
//     c=c+1
//     if(n<=10){
//         console.log("Total number of digits in given number=",c);
//         break;
//     }
// }

//-----

//To find sum of all even numbers from 1 to n
// sum=0
// for(a=1;a<=100;a++){
//     if(a%2==0){
//         sum=sum+a
//     }
// }
// console.log("Sum of all even numbers from 1 to 100=",sum);

//-----

//To find sum of all odd numbers from 1 to n
// let a=1
// sum=0

// while(a<=100){
//     if(a%2!=0){
//         sum=sum+a
//     }
//     a++
// }
// console.log("Sum of all odd numbers from 1 to 100=",sum);

//-----

//To count total number of notes in given amount
// let ab=(note)=>{
//     n500=0
//     n200=0
//     n100=0
//     n50=0
//     n20=0
//     n10=0
//     n5=0
//     n2=0
//     n1=0
//     if(note>=500){
//         a=note/500
//         n500=n500+a
//         a1=500*n500
//         note=note-a1
//     }
//     else if(note>=200){
//         b=note/200
//         n200=n200+b
//         b1=200*n200
//         note=note-b1
//     }
//     else if(note>=100){
//         c=note/100
//         n100=n100+c
//         c1=100*n100
//         note=note-c1
//     }
//     else if(note>=50){
//         d=note/50
//         n50=n50+d
//         d1=50*n50
//         note=note-d1
//     }
//     else if(note>=20){
//         e=note/20
//         n20=n20+e
//         e1=20*n20
//         note=note-e1
//     }
//     else if(note>=10){
//         f=note/10
//         n10=n10+f
//         f1=10*n10
//         note=note-f1
//     }
//      else if(note>=5){
//         g=note/5
//         n5=n5+g
//         g1=5*n5
//         note=note-g1
//     }
//      else if(note>=2){
//         h=note/2
//         n2=n2+h
//         h1=2*n2
//         note=note-h1
//     }
//      else if(note>=1){
//         i=note/1
//         n1=n1+i
//         i1=1*n1
//         note=note-i1
//     }
//     else{
//         console.log("Enter valid value");
//     }
// console.log("Notes of 500=",n500);
// console.log("Notes of 200=",n200);
// console.log("Notes of 100=",n100);
// console.log("Notes of 50=",n50);
// console.log("Notes of 20=",n20);
// console.log("Notes of 10=",n10);
// console.log("Notes of 5=",n5);
// console.log("Notes of 2=",n2);
// console.log("Notes of 1=",n1);
// }
// ab(5555)