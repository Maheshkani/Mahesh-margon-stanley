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
function getData(user,sortBy,sortDirection){
  let selectedUser;
  let balNumbers;
  if(user){
    selectedUser = acctData.find(obj=>{
      return user == obj.user
    })
      return selectedUser

  }

  if(sortBy=="acctNum"){
    let numbers = acctData.map(ob=>{
      return ob.acctNum.split(" ")[2]
    })
    return numbers
  }else if(sortBy == "balance" && !sortDirection){
    balNumbers = Object.values(balance)
    return balNumbers
  }else if(sortBy == "balance" && sortDirection == "asc"){
    balNumbers = Object.values(balance)
    return balNumbers.sort(function(a, b){return a-b})
  } else if(sortBy == "balance" && sortDirection == "desc"){
        balNumbers = Object.values(balance)
      return balNumbers.sort(function(a, b){return b-a})

  }
}

console.log(getData("Bob"))
console.log(getData("Charlie"))
console.log("acctNum", getData(null,"acctNum"))
console.log("ASC",getData(null,"balance"))
console.log("DESC",getData(null,"balance","desc"))











