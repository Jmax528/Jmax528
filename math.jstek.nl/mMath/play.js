let cel3 = 0;
let cel4 = 0;
let cel6 = 0;
let cel7 = 0;
let card = document.getElementById("card-body")

function generate() {

    cel3 = Math.floor(Math.random() * 21);
    cel4 = Math.floor(Math.random() * 21);
    cel6 = Math.floor(Math.random() * 21);
    cel7 = Math.floor(Math.random() * 21);

    let cel1 = cel3 + cel7;
    let cel2 = cel4 + cel6;
    let cel5 = cel3 + cel4;
    let cel8 = cel6 + cel7;
    let cel9 = cel3 + cel6;
    let cel10 = cel4 + cel7;

    document.getElementById("cel1").value = cel1;
    document.getElementById("cel2").value = cel2;
    document.getElementById("cel5").value = cel5;
    document.getElementById("cel8").value = cel8;
    document.getElementById("cel9").value = cel9;
    document.getElementById("cel10").value = cel10;
}


function check() {
   let inCel3 = parseInt(document.getElementById("cel3").value);
   let inCel4 = parseInt(document.getElementById("cel4").value);
   let inCel6 = parseInt(document.getElementById("cel6").value);
   let inCel7 = parseInt(document.getElementById("cel7").value);
   console.log(cel3, cel4, cel6, cel7);

   if (inCel3 === cel3 && inCel4 === cel4 && inCel6 === cel6 && inCel7 === cel7) {
       card.classList.remove("bg-danger-subtle")
       card.classList.add("bg-success-subtle")

       alert("Correct!");
   } else {
       card.classList.remove("bg-success-subtle")
       card.classList.add("bg-danger-subtle")
       alert("Try again!")

   }
}