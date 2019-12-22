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

var balance = {
"AAA - 1234": 4593.22,
"AAA - 9921": 0,
"AAA - 5231": 232142.5,
"AAA - 8191": 4344
};
//- sortBy (accepts "acctNum" or "balance")
//- sortDirection (accepts "asc" or "desc"; default to asc)

var myJson = function( prop ){
  var k=[];
  var test = prop;
  if(typeof test == 'undefined')
    var test = 'acctNum';
  else 
    test= prop;


console.log(test);
for ( var i=0;i<acctData.length;i++){
k.push(acctData[i][test]);
}
console.log(k);
return k;
}

var act = new myJson();

myJson('user');

function GetSortOrder(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}

array.sort( GetSortOrder("acctNum") );
document.write("Sorted Employee Names : <br>");

for (var item in array) {
 document.write("<br>"+array[item].acctNum);
}

array.sort( GetSortOrder("user") );

document.write("<br><br> Sorted Technology Names : <br>");

for (var item in array) {
 document.write("<br>"+array[item].user);
}





