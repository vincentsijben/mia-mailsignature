$(document).ready(function () {

  $('input[rel="txtTooltip"]').tooltip({ 'trigger': 'focus', html: true });

  $('.custom-file-input').on('change', function () {
    let fileName = $(this).val().split('\\').pop();
    $(this).next('.custom-file-label').addClass("selected").html(fileName);
  })

  

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

  window.location.href = "mailsignature.html";

  return false;
}