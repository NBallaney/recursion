// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  console.log(obj);
   if (typeof obj == "string"){
     return "\"" + obj + "\"";
   }
   else if(typeof obj == "object" && obj != null){
     if (obj.length == undefined) var temp= {};
     else var temp= [];
     for (var i in obj) {
       if(typeof obj[i] === "function" || obj[i] === undefined) {
         return "{}";
       }
       if (typeof obj[i] == "object" && obj[i]!=null) temp[i]= stringifyJSON(obj[i]);
       else if (typeof obj[i] == "string"){
         temp[i]= "\"" + obj[i] + "\"";
       }
       else temp[i]=obj[i];
     }
     if(Array.isArray(temp)) return '[' + temp + ']';
     else return stringify(temp);
   }
  return String(obj);
  
};

function stringify(object){
  var str='',count=0,length=0;
  for (var j in object) {
    length++;
  }
  for (var i in object) {
    str+= "\"" + i + "\"" + ":" + object[i];
    if (length > 1 && count < length-1) str+= ",";
    count++;
  }
  return '{' + str + '}';
}