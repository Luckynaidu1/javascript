class parent{
    constructor(){
    console.log("liuyg");
    }
    display(){
        console.log("lucky");
    
    }
}
class app extends parent{
    constructor(a,b,c,d){
        super(d);
        this.id=a;
        this.name=b;
        this.gmail=c;
    }

} 
let c1=new app(101,"lucky","jgsfd",7799); 
console.log(c1);
c1.display();