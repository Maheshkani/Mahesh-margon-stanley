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
function myJson(user,sortBy,sortDirection){
  let selectUser;
  let balNums;
  if(user){
    selectUser = acctData.find(obj=>{
      return user == obj.user
    })
      return selectUser

  }

  if(sortBy=="acctNum"){
    let numbers = acctData.map(ob=>{
      return ob.acctNum.split(" ")[2]
    })
    return numbers
  }else if(sortBy == "balance" && !sortDirection){
   balNums = Object.values(balance)
    return balNums
  }else if(sortBy == "balance" && sortDirection == "asc"){
    balNums = Object.values(balance)
    return balNums.sort(function(a, b){return a-b})
  } else if(sortBy == "balance" && sortDirection == "desc"){
        balNums = Object.values(balance)
      return balNums.sort(function(a, b){return b-a})

  }
}
console.log('a) filtered by Bob');
console.log(myJson("Bob"));
console.log('b) filtered by Charlie');
console.log(myJson("Charlie"));
console.log('c) sorted by acctNum');
console.log("acctNum", myJson(null,"acctNum"));
console.log('c) 1 sorted by balance')
console.log("Asc",myJson(null,"balance"));
console.log('d) filtered by Alice; sorted by balance ascending');
console.log("Desc",myJson(null,"balance","desc"));











