class lucky{
    adress=10;
    constructor(a,b,c){
        this.acc_number=a;
        this.user_name=b;
        this.amount=c;
    }
    account_open(){
      return "hi"+this.user_name+"welcone to bank ";
    }
    account_balance(){
        return "your amount is"+(this.amount+this.adress);
    }

}
let d1=new lucky (33384,"lucky don",35000);
let accountmem =d1.account_balance();
console.log(d1);