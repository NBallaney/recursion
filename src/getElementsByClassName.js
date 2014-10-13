// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = [];
  var re = new RegExp('(^| )'+ className +'( |$)');
  var el = document.getElementsByTagName("*");
    for(var i=0,j=el.length; i<j; i++)
        if(re.test(el[i].className))arr.push(el[i]);
    return arr;
};
