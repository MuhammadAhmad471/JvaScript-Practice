console.log("hello");
var arr=["Ahmad","Numan","sara","Ali","Hina"];
console.log(arr);
var names=[];
 names[0]="ahmad";
 names[1]="numan";
names[2]="sara";
 names[3]="ali";
 console.log(names);
 arr.push( "Aslam");
 console.log(arr);
 arr.pop();
 console.log(arr);
 arr.splice(2,3);
 console.log(arr);
 arr.sort();
 console.log(arr);

 var user={
    name:"numan",
    age:'17',
    education:"bs",
    material:"single",
    religion:"muslim"   
 }
console.log(user);
user.material="married";
user.nationality="pakistani"
console.log(user);
console.log(user);
var objectToString=JSON.stringify(user);
console.log(objectToString);
var stringToObject=JSON.parse(objectToString);
console.log(stringToObject);
const url="https://requires.in/api/users?page=1"
const asyfun=async(url)=>{
   const res=await fetch(url)
   console.log(await res.json())

}
console.log(asyfun(url))