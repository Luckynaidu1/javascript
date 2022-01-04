class bank{
    account_open(){
        constructor(a,b,c)
        {
            this.amount=a;
            this.number=b;
            this.statement=c;

        }
        min_bal=500;

        console.log("account open sucessfully");
    }
    deposite_amount(){
        console.log("amount deposited sucessfully");
    }
    withdra_amounnt(){
        console.log("amount with");
    }
    get_balance(){
        return "your bank balance is"+min_bal()+this.amount;
    }
}
let l1=new bank(400,779,"six month")
l1.deposite_amount();
console.log(l1);
l1.get_balance()