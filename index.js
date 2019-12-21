// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
 var acctData = [ { "acctNum": "AAA - 1234", "user": "Alice" },
 { "acctNum": "AAA - 5231", "user": "Bob" },
 { "acctNum": "AAA - 9921", "user": "Alice" },
 { "acctNum": "AAA - 8191", "user": "Alice" }
];

var acctNum;

var myJson = function( prop ){
  var k=[];
  var m=prop;
  console.log(typeof m);
  if(typeof m == 'undefined'){
    var test = acctNum;
  }

console.log(test);
for ( var i=0;i<acctData.length;i++){
k.push(acctData[i].acctNum);
}
console.log(k);
return k;
}
var user;
myJson(user);





