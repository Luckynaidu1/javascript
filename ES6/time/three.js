let calculate=(a,b,operation)=>{
    if(operation=="sum"){
        return a+b

    }
if (operation=="sub"){
    return a-b
}

}
let lucky=calculate(10,20,"sum")
console.log(lucky);
lucky=calculate(500,300,"sub")
console.log(lucky);