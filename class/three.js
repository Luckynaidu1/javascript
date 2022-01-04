class bank{
    min_bal=500;
        open_account(){
        console.log("account open sucessfully");
    }
    diposite_amount(){
        console.log("diposited sucessfully");
    }
    get_balance() {
     return this.min_bal() + 100;
    }
}
let c1=new bank()
c1.diposite_amount();

