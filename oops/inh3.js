class parent{
    constructor(){
        this.honor=" don"
    }
     hn(){
         return "future one of the biggest "+this.honor  
     }
}
class lucky extends parent{
constructor(){
    super();
    this.bglr="famous in his field"
}
ln(){
    
    return " and now he is trying to become "+this.bglr
}
}
class child extends lucky{
    constructor(){
    super();
    console.log(this.hn()+this.ln());
    }
}
new child();