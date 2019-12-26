const apiKey = '1a903fec6414f2c45f75';
const apiURL = `https://free.currconv.com/api/v7/convert?q=EUR_RON&compact=ultra&apiKey=${apiKey}`;

async function calcCost() {
    let res = await fetch(apiURL);
    let nrPersoane = document.getElementById("peopleNo").value;
    if (res.ok) {
        res = await res.json();
        let rentCost = 600 * res.EUR_RON / nrPersoane;
        let taxCost = 200 * res.EUR_RON / nrPersoane;
        let consumables = 40;
        let values = {
            "rent": rentCost,
            "tax": taxCost,
            "consumables": consumables
        };
        document.getElementById("result").innerHTML = `<strong class="text-secondary">Mancare si bautura:</strong> ${values.consumables} Lei<br><strong class="text-secondary">Pret inchiriere vila:</strong> ${values.rent.toFixed(2)} Lei<br><strong class="text-secondary">Taxa in caz ca spargem ceva:</strong> ${values.tax.toFixed(2)} Lei<br><strong class="text-success">Total per persoana:</strong> ${(values.consumables + values.rent + values.tax).toFixed(2)} Lei`;
    } else {
        document.getElementById("result").innerHTML = '<span class="text-danger">Scuze boss, nu mi-a iesit.</span>';
    }
}