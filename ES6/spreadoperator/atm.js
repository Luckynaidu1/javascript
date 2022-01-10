const bcrypt = require("bcryptjs")
let a={
    id:101,
    name:'Lakshmi prasanna',
    creditno:"098765422",
    pasword:"qqwert"
}
let salt=bcrypt.genSaltSync(10);
let newcreditno=bcrypt.hashSync(a.creditno,salt);
let newpasword=bcrypt.hashSync(a.pasword,salt);
console.log(newcreditno);
console.log(newpasword);
let new_a={...a, pasword:newpasword, creditno:newcreditno}
console.log(a);
console.log(new_a);
let result=bcrypt.compareSync("qqwert",new_a.pasword)
result? console.log("login sucess"):console.log("log in failure");




