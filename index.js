//---------JavaScript Conditional Statement--------//


//JavaScript মোটামোটি ৪ প্রকার Conditional Statement রয়েছে 1.IF 2. ELSE 3.ELSE IF 4.SWITCH //
//প্রথমে IF তারপর ELSE IF, তবে যদি আমরা  IF এর পর ELSE IF কোন কিছু ব্যবহার না করি তাহলে ELSE হবে । 
//Example//
/*
if
else if
else if
else if
else if
else if  //তবে else if বেশি ব্যবহার করা ঠিক না এতে করে সাইট অনেক ভারি হয়ে যাবে । else if এর পরিবর্তে SWITCH //
else
*/


// if, else if, else এর ব্যবহার //

const age = 25;
if (age> 40) {
    console.log(' You are old');  // age> 40 দিয়ে বুঝানো হচ্ছে যদি বয়স 40 থেকে বেশি হয় তাহলে মান You are old দেখাবে //
}
else if ( age > 18) {
    console.log(" You are 18 year's old ");   //age> 18 দিয়ে বুঝানো হচ্ছে যদি বয়স 18 থেকে বেশি হয় তাহলে মান You are 18 year's old দেখাবে //
}
else {
    console.log(" You are not 18 year's old ");
};
// উপরের সব গুলোর মধ্যে else if মান দেখাচ্ছে কারণ const age = 25, if বলা হয়েছে age> 40 দিয়ে বুঝানো হচ্ছে যদি বয়স 40 থেকে বেশি হয় তাহলে মান You are old দেখাবে, তবে এটা সত্য নয় কারণ const age = 25  মান ছোট । এখানে আবার else if মান সঠিক হওয়ার কারণে else মান দেখায় নি । এক কথায় যতখন না সে সঠিক মান পাবে ততখন সে নিচে মান খুজতে থাকবে //


const age1 = 41;
if (age1> 40) {
    console.log(" You are 40 year's old plus");  // age> 40 দিয়ে বুঝানো হচ্ছে যদি বয়স 40 থেকে বেশি হয় তাহলে মান You are old দেখাবে //
}
else if ( age1 > 18) {
    console.log(" You are 18 year's old ");   //age> 18 দিয়ে বুঝানো হচ্ছে যদি বয়স 18 থেকে বেশি হয় তাহলে মান You are 18 year's old দেখাবে //
}
else {
    console.log(" You are not 18 year's old ");
};
// উপরের সব গুলোর মধ্যে if মান দেখাচ্ছে কারণ const age = 41, যা if এর সাথে মিলে গেছে, if বলা হয়েছে  age> 40 দিয়ে বুঝানো হচ্ছে যদি বয়স 40 থেকে বেশি হয় তাহলে মান You are old দেখাবে //


const age2 = 16;
if (age2> 40) {
    console.log(" You are 40 year's old plus");  // age> 40 দিয়ে বুঝানো হচ্ছে যদি বয়স 40 থেকে বেশি হয় তাহলে মান You are old দেখাবে //
}
else if ( age2 > 18) {
    console.log(" You are 18 year's old ");   //age> 18 দিয়ে বুঝানো হচ্ছে যদি বয়স 18 থেকে বেশি হয় তাহলে মান You are 18 year's old দেখাবে //
}
else {
    console.log(" You are not 18 year's old ");
};

//উপরের সব গুলোর মধ্যে else মান দেখাচ্ছে কারণ const age = 16, যা else এর সাথে মিলে গেছে, যার কারণ else বলা হয়েছে You are not 18 year's old, আগেই বলা হয়েছে যদি উপরের কোন মানের সাথে না মেলে তাহলে সে পর্যায় ক্রমে নিচে দেখবে //


//SWITCH এর ব্যবহার //

let category = 'Car' ;
let carType;
switch (category) {
  case 'Motorcycle':
    carType = 'This is a Motorcycle';
    break;       //দুই case এর মধ্যে break দিতে হবে //
  case 'Car' :
    carType = ' This is a Car';
    break;
  case 'Bicycle' :
    carType = 'This is a Bicycle';
    break;
  default:
    carType = 'Unknow Category';
}
console.log(carType);

//এটাও সেম ভাবে কাজ করে । ভেরিয়েবলের category = 'Car' সাথে  যেটার টাইপ মিলবে সেটাকে কনসোলে দেখাবে //

let category1 = 'Motorcycle' ;
let carType1;
switch (category1) {
  case 'Motorcycle':
    carType1 = 'This is a Motorcycle';
    break;       //দুই case এর মধ্যে break দিতে হবে //
  case 'Car' :
    carType1 = ' This is a Car';
    break;
  case 'Bicycle' :
    carType1 = 'This is a Bicycle';
    break;
  default:
    carType1 = 'Unknow Category';
}
console.log(carType1);

let category2 = 'Bicycle' ;
let carType2;
switch (category2) {
  case 'Motorcycle':
    carType2 = 'This is a Motorcycle';
    break;       //দুই case এর মধ্যে break দিতে হবে //
  case 'Car' :
    carType2 = ' This is a Car';
    break;
  case 'Bicycle' :
    carType2 = 'This is a Bicycle';
    break;
  default:
    carType2 = 'Unknow Category';
}
console.log(carType2);


let category3 = 'Truck' ;
let carType3;
switch (category3) {
  case 'Motorcycle':
    carType3 = 'This is a Motorcycle';
    break;       //দুই case এর মধ্যে break দিতে হবে //
  case 'Car' :
    carType3 = ' This is a Car';
    break;
  case 'Bicycle' :
    carType3 = 'This is a Bicycle';
    break;
  default:
    carType3 = 'Unknow Category';
}
console.log(carType3);     // যদি কোন ভেরিয়েবলের মান Type সাথে না মেলে তাহলে default Type দেখাবে //

//if এর পরে else if অনেক বেশি ব্যবহার না করে switch ব্যবহার করা বেশি Recommend //


