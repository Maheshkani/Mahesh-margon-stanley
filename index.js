// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Mahesh-Morgan Stanley test</h1>`;
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

function myJson( prop ,sortby,sortdirection){
  var k=[];
  var test = prop;
  //console.log('test '+prop);
  //console.log('sortBy '+ sortby)
  // console.log('sortdirection '+ sortdirection)

  acctData.sort(GetSortOrder(sortby));


  function GetSortOrder(prop) {
                return function(a, b) {
                    if (a[prop] > b[prop]) {
                        return 1;
                    } else if (a[prop] < b[prop]) {
                        return -1;
                    }
                    return 0;
                }
            }

///console.log(acctData);
  if(typeof test == 'undefined')
    var test = 'acctNum';
  else 
    test= prop;


console.log(test);
for ( var i=0;i<acctData.length;i++){
k.push(acctData[i][test]);
}
if(sortdirection=="desc")
{
k.reverse();
}
console.log(k);
return k;
}

console.log("1)  returns only an array of account numbers");
myJson("acctNum");
//var act = new myJson();
//myJson("user","user");
console.log("2)  returns only an array of account users");
myJson("user");
console.log("3)  returns only an array of accountNum and sorted by acctNum");
myJson("acctNum","acctNum");

console.log("4)  returns only an array of accountNum and sorted by acctNum");
myJson("acctNum","acctNum","desc");


console.log('**************************************');
console.log('1--- filter to retun based on values Bob');
console.log(acctData.filter(function(item){
    return item.user == "Bob";         
}));
console.log('2--- filter to return based on value charlie');
console.log(acctData.filter(function(item){
    return item.user == "Charlie";         
}));
console.log('3--- c) sorted by acctNum');
console.log(acctData.sort(function(item){
    return item.acctNum;         
}));











