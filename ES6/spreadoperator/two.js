const bcrypt=require("bcryptjs")
let a={
    name:"lucky don",
    phno:"7799224405",
    ccno:"123455667",
    pasword:"lucky123"
}
let salt=bcrypt.genSaltSync(10)
let new_ccno=bcrypt.hashSync(a.ccno,salt);
let new_pasword=bcrypt.hashSync(a.pasword,salt)
// console.log(new_ccno);
// console.log(new_pasword);
let new_a={...a,ccno:new_ccno,pasword:new_pasword}
console.log(a);
console.log(new_a);
let result=bcrypt.compareSync("qwert",new_a.pasword)
result?console.log("log in suceess"):console.log("failure");