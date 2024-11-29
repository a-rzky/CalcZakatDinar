const x = document.getElementById (`textSeperempatdinar`);
const y = document.getElementById (`textSetengahdinar`);
const z = document.getElementById (`textSatudinar`);
const submitDinar = document.getElementById(`submitDinar`);
const hasilZakat = document.getElementById(`hasilZakat`);
const submitGram = document.getElementById(`submitGram`);
const hasilGram = document.getElementById(`hasilGram`);

let fixedTotal = 0;



submitDinar.onclick = function(){
    const dinarX = Number (x.value);
    const dinarY = Number (y.value);
    const dinarZ = Number (z.value);

    const dinarPer4 = dinarX * 0.25
    const dinarPer2 = dinarY * 0.5
    const dinarPer1 = dinarZ * 1
    
    let total = (dinarPer4 + dinarPer2 + dinarPer1)*(2.5/100);
    fixedTotal = Number (total.toFixed(1));
    hasilZakat.textContent = `${fixedTotal} Dinar`;
};


submitGram.onclick = function(){
    let totalGram = fixedTotal * 4.25;
    hasilGram.textContent = `${totalGram.toFixed(2)} gr`;
};


