// console.log(document)
var btnplus=document.getElementsByClassName('plus')
//console.log(btnplus)
var btnmin=document.getElementsByClassName('minus')
var btnlike=document.getElementsByClassName('fas fa-heart')
var btndel=document.getElementsByClassName('fas fa-trash-alt')
const checkboxs = document.querySelectorAll(".check");
// console.log(checkboxs);

const lines = document.querySelectorAll(".lines");
const heart = document.querySelector('fas fa-heart');

for ( var i=0 ; i< btnplus.length ; i++)
{btnplus[i]. addEventListener ("click",increment )
checkboxs[i].addEventListener("click", total);
btnmin[i]. addEventListener ("click",reduction )
btnlike[i]. addEventListener ("click", likey )
btndel[i]. addEventListener ("click", trash )
}


function increment (e) {
//console.log (e)
const btn = e.target;
//console.log(btn)
const divElt = btn.parentElement;
 // console.log(divElt)
 var quentityTag = divElt.querySelector("p");
 var quentityValue = Number(quentityTag.innerHTML);
 quentityValue++;
 quentityTag.innerHTML = quentityValue;
  //console.log(quentityValue);
  const trElt = divElt.parentElement.parentElement;
  //console.log(trElt);
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  // console.log(unitePriceValue)
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  console.log(priceValue)

}
function total(e) {
    const checkBox = e.target;
    // console.log(checkBox)
    const trElt = checkBox.parentElement.parentElement;
    //console.log(trElt)
    const priceValue = Number(trElt.querySelector(".price").innerHTML);
    // console.log(priceValue)
    var totalTag = document.getElementById("total");
    // console.log(totalTag)
    var totalValue = Number(totalTag.innerHTML);
  //   console.log(totalValue);
  const btnplus= checkBox.parentElement.parentElement.querySelector (".plus");
  //console.log (btnplus)
  if (checkBox.checked===true) {
      totalValue+=priceValue
      totalTag.innerHTML=totalValue
      btnplus.setAttribute("disabled",true) }
  else{
      totalValue-=priceValue
totalTag.innerHTML=totalValue
btnplus.removeAttribute("disabled") }
 }

 function reduction (e) {
//console.log (e)
const btn = e.target;
//console.log(btn)
const divElt = btn.parentElement;
 // console.log(divElt)
 var quentityTag = divElt.querySelector("p");
 var quentityValue = Number(quentityTag.innerHTML);
 if(quentityValue>0){

     quentityValue--;
    }
 quentityTag.innerHTML = quentityValue;
  //console.log(quentityValue);
  const trElt = divElt.parentElement.parentElement;
  //console.log(trElt);
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  // console.log(unitePriceValue)
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  //console.log(priceValue) 
  const btnmin= checkBox.parentElement.parentElement.querySelector (".minus");
  //console.log (btnmin)

}

function likey (e) {
    //console.log(e)
    var like=e.target
    like.style.color = "blue"
    if (like.style.color===blue){
    }
    else{

    }
   
        }

        function trash (e) {
            //console.log(e) 
           const btn=e.target
            var divElt = btn.parentElement.parentElement.parentElement.parentElement;
            divElt.remove()
                }
