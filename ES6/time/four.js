let sum=(a,b)=>{
    return a+b
}
let sub=(a,b)=>{
    return a-b
}
let calculate=(a,b,Callback) =>{
    if(Callback==sum){
        return Callback(a,b)}
        if(Callback==sub){
            return Callback(a,b)
        }
}
let lucky=calculate(50,20,sum)
console.log(lucky);