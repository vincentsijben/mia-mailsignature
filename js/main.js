
document.addEventListener("DOMContentLoaded", function () {

  if (typeof ClipboardItem == "undefined") {
   document.querySelector('form').setAttribute("style", "display: none")
   document.querySelector(".alert-danger").setAttribute("style","display: block");
   document.querySelector(".alert-success").setAttribute("style","display: none");

  }

  if (document.body.getAttribute("id") != "homepage") {
    document.querySelector("#slotformule").replaceWith(localStorage.getItem('slotformule'));
    document.querySelector("#naam").replaceWith(localStorage.getItem('naam'));
    document.querySelector("#functie").replaceWith(localStorage.getItem('functie'));
    document.querySelector("#email").replaceWith(localStorage.getItem('email'));
    document.querySelector("#href").setAttribute("href", `mailto:${localStorage.getItem('email')}`);
    document.querySelector("#locatie1").replaceWith(localStorage.getItem('locatie1'));
    document.querySelector("#departmentrow1").replaceWith(localStorage.getItem('departmentrow1'));
    let departmentrow2 = localStorage.getItem('departmentrow2');
    if (departmentrow2) {
      let br = document.createElement("br");
      let strong = document.createElement("strong");
      strong.appendChild(document.createTextNode(departmentrow2));
      document.querySelector("#departmentrow2").replaceWith(br, strong);
    } else document.querySelector("#departmentrow2").replaceWith("");
    let telefoon1 = localStorage.getItem('telefoon1');
    if (telefoon1.substr(0, 2) == "06") {
      telefoon1 = `M +31 (0)6 ${telefoon1.substr(2, 3)} ${telefoon1.substr(5, 3)} ${telefoon1.substr(8, 2)}`;
    }
    if (telefoon1.substr(0, 3) == "043") {
      telefoon1 = `T +31 (0)43 ${telefoon1.substr(3, 3)} ${telefoon1.substr(6, 4)}`;
    }
    if (telefoon1.substr(0, 4) == "0032") {
      telefoon1 = `T +32 ${telefoon1.substr(4, 3)} ${telefoon1.substr(7, 2)} ${telefoon1.substr(9, 2)} ${telefoon1.substr(11, 2)}`;
    }
    document.querySelector("#telefoon1").replaceWith(telefoon1);

    let telefoon2 = localStorage.getItem('telefoon2');
    if (telefoon2.substr(0, 2) == "06") {
      telefoon2 = `, M +31 (0)6 ${telefoon2.substr(2, 3)} ${telefoon2.substr(5, 3)} ${telefoon2.substr(8, 2)}`;
    }
    if (telefoon2.substr(0, 3) == "043") {
      telefoon2 = `, T +31 (0)43 ${telefoon2.substr(3, 3)} ${telefoon2.substr(6, 4)}`;
    }
    if (telefoon2.substr(0, 4) == "0032") {
      telefoon2 = `, T +32 ${telefoon2.substr(4, 3)} ${telefoon2.substr(7, 2)} ${telefoon2.substr(9, 2)} ${telefoon2.substr(11, 2)}`;
    }
    document.querySelector("#telefoon2").replaceWith(telefoon2);

    let copy = document.createElement("div");
    copy.setAttribute("id", "copy");
    
    let btn = document.createElement("button");
    btn.onclick = function () { copyRichText(); }
    btn.innerText = "Kopieer deze mailsignature naar het klembord"
    btn.setAttribute("style","display:block;margin-top:30px;");
    copy.appendChild(btn);
    document.body.appendChild(copy)



  }

});

function fill() {
  document.querySelector("#naam").value = "Vincent Sijben";
  document.querySelector("#functie").value = "lecturer creative technology";
  document.querySelector("#email").value = "vincent.sijben@zuyd.nl";
  document.querySelector("#departmentrow1").value = "Communication and Multimedia Design";
  document.querySelector("#departmentrow2").value = "Design | Visual Communication";
  document.querySelector("#telefoon1").value = "0431234567";
  document.querySelector("#telefoon2").value = "0612345678";
  document.querySelector("#locatie1").value = "Brusselseweg 150, 6217 HB Maastricht, P.O. Box 634, 6200 AP Maastricht";
}

function validate() {
  localStorage.setItem('slotformule', document.querySelector("#slotformule").value);
  localStorage.setItem('departmentrow1', document.querySelector("#departmentrow1").value);
  localStorage.setItem('departmentrow2', document.querySelector("#departmentrow2").value);
  localStorage.setItem('telefoon1', document.querySelector("#telefoon1").value);
  localStorage.setItem('telefoon2', document.querySelector("#telefoon2").value);
  localStorage.setItem('naam', document.querySelector("#naam").value);
  localStorage.setItem('email', document.querySelector("#email").value);
  localStorage.setItem('functie', document.querySelector("#functie").value);
  localStorage.setItem('locatie1', document.querySelector("#locatie1").value);

  if (typeof ClipboardItem == "undefined") {
    alert("this browser is not supported")
  } else {
  window.location.href = "mailsignature.html";
  }
  return false;
}

const copyRichText = async () => {

  
    const content = document.querySelector("table").outerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const richTextInput = new ClipboardItem({ "text/html": blob });
    await navigator.clipboard.write([richTextInput]);
    let success = document.createTextNode("kopiëren gelukt!");
    document.querySelector("#copy").appendChild(success);

};