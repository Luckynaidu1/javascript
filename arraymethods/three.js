let Employee = [
    {id:101, name: "lucky",sal: 45000},
    {id:102, name: "pgr",sal: 55000},
    {id:103, name: "don",sal: 65000}

]
function lucky(){
    let rows =""+
    Employee.map((Employee) =>{
        rows =
          rows +
    `<tr><td>${Employee.id}</td>
         <td>${Employee.name}</td>
          <td>${Employee.sal}</td>
      </tr>`;

    });
    document.getElementById("lucky").innerHTML=rows;
}