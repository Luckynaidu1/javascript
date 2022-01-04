class parent{
    constructor(){
 console.log("lucky");   
}
}
class child extends parent{
    constructor(){
        super();
        console.log("don");
    }

} 
new child();
