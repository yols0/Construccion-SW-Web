let addItem = () => {
    let ul = document.querySelector("#list");

    let name = document.querySelector(".employe-name-input").value;
    let kpi = document.querySelector(".kpi-measure-input").value;
    let li = document.createElement("li");
    let texto = document.createTextNode(name + " " + kpi);
    li.setAttribute('id', name + " " + kpi);
    li.appendChild(texto);
    ul.appendChild(li);

    recalculate();
}

let removeItem = () => {
    let ul = document.querySelector("#list");
    let name = document.querySelector(".employe-name-input").value;
    let kpi = document.querySelector(".kpi-measure-input").value;
    let item = document.getElementById(name + " " + kpi);
    ul.removeChild(item);

    recalculate();
}

let recalculate = () => {
    let x = 0;
    let total = document.querySelector(".total");
    let kpi = document.querySelectorAll(".kpi-measure");

    kpi.forEach(element => 
        x += 1    
    );

    total.innerText = "Total: " + x;
    let average = document.querySelector(".average");
    let averageCalc = x / kpi.length;
    average.innerText = "Average: " + averageCalc;

  }
 
