let btn = document.getElementById("btn");
let inputUST = document.getElementById("inputUst");
let inputALT = document.getElementById("inputAlt");
let ustDeyer = document.getElementById("input01");
let altDeyer = document.getElementById("input02");

function getTime() {
    let timeNow = new Date()
    document.getElementById("time").innerText = timeNow;
}
btn.addEventListener("click", function() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let rate;

            if (altDeyer.value == 'TRY') {
                rate = response.rates.TRY
            }
            if (altDeyer.value == 'USD') {
                rate = response.rates.USD
            }
            if (altDeyer.value == 'RUB') {
                rate = response.rates.RUB
            }

            inputALT.value = (rate * Number(inputUST.value)).toFixed(2);

        }
    }
    xhr.send();
});