


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

const copyRichText = async () => {
    const content = document.querySelector("table").outerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const richTextInput = new ClipboardItem({ "text/html": blob });
    await navigator.clipboard.write([richTextInput]);
    let success = document.createTextNode("kopiëren gelukt!");
    document.querySelector("#copy").appendChild(success);
};
