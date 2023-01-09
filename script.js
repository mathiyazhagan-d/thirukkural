//--------------------------title------------------
let title = document.createElement("div");
title.innerHTML = ` <div class="bg-dark">
<p class="text-white text-center display-4 container-fluid p-2 ">திருக்குறள்</p>
</div> 
<div class="text h4 m-3"> குறள் எண்  <span class="text-muted h6">(Enter the number in range 1 to 1330)</span>
<input class="input" id="val" >
<button type="number" onclick="thiru()" class="btn btn-primary">submit</button>
</div>
<div id="content" class="row justify-content-around"></div>`;
document.body.append(title);
//--------------------Function----------------
async function thiru() {
  let content = document.getElementById("content");
  let num = document.getElementById("val");
  if (num.value > 0 && num.value <= 1330) {
    let data = await (
      await fetch(`https://api-thirukkural.vercel.app/api?num=${num.value}`)
    ).json();
    content.innerHTML = `<div class="card m-5 p-2 col-4 col-md-4" style="width: 40rem;">
  <div class=" bg-info text-white h4 p-2 text-center"> ${data.chap_tam}  <br>குறள் :  ${data.number} </div><br>
  <div class="card-item h4">${data.line1}<br>${data.line2}</div><br>
  <div>விளக்கம் : </div>
  <div>${data.tam_exp}</div><br>
  <div>இயல் : ${data.chapgrp_tam} </div>  <br>
 <div> பால் : ${data.sect_tam}</div>
  </div>
  <div class="card m-5 p-2 col-4 col-md-4" style="width: 40rem;">
  <div class=" bg-info text-white h4 p-2 text-center">  ${data.chap_eng}   <br>KURAL :  ${data.number} </div><br>
  <div class="card-item h4">${data.eng}</div><br>
   <div>EXPLANATION : </div>
  <div>${data.eng_exp}</div><br>
  <div>CHAPTER GROUP : ${data.chapgrp_eng} </div>  <br>
 <div> SECTION : ${data.sect_eng}</div>
  </div>`;
  } else {
    content.innerHTML = `<div class="display-4 text-danger">Please Enter number in range of 1 to 1330</div>`;
  }
}
