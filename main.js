var elRecBtn = document.querySelector(".js-btn")
var elMessi = document.querySelector(".js-messi")
var elRonaldo = document.querySelector(".js-ronaldo")
var elNeymar = document.querySelector(".js-neymar")
var elRamos = document.querySelector(".js-ramos")
var elBuffon = document.querySelector(".js-buffon")




var record = new webkitSpeechRecognition();
record.lang = 'en-US';

elRecBtn.addEventListener("click", function () { //record boshlanishi
    record.start();
    elRecBtn.textContent = "Yozilmoqda"
    console.log("Boshlandi");
})

record.onresult = function (evt) {
    var result = evt.results["0"]["0"].transcript;

    console.log(result);

    if (result.match(/messi/gi)) {
        elMessi.classList.remove("d-none");

        elRonaldo.classList.add("d-none");
        elNeymar.classList.add("d-none");
        elRamos.classList.add("d-none");
        elBuffon.classList.add("d-none");
    }
    if (result.match(/ronaldo/gi)) {
        elRonaldo.classList.remove("d-none");

        elMessi.classList.add("d-none");
        elNeymar.classList.add("d-none");
        elRamos.classList.add("d-none");
        elBuffon.classList.add("d-none");
    }
    if (result.match(/neymar/gi)) {
        elNeymar.classList.remove("d-none");

        elRonaldo.classList.add("d-none");
        elMessi.classList.add("d-none");
        elRamos.classList.add("d-none");
        elBuffon.classList.add("d-none");
    }
    if (result.match(/ramos/gi)) {
        elRamos.classList.remove("d-none");

        elRonaldo.classList.add("d-none");
        elNeymar.classList.add("d-none");
        elMessi.classList.add("d-none");
        elBuffon.classList.add("d-none");
    }
    if (result.match(/buffon/gi)) {
        elBuffon.classList.remove("d-none");

        elRonaldo.classList.add("d-none");
        elNeymar.classList.add("d-none");
        elRamos.classList.add("d-none");
        elMessi.classList.add("d-none");
    }
}




record.onend = function () { //record tugatishi

    elRecBtn.textContent = "Ovoz yozish"


    console.log("Tugadi");
}


record.onerror = function () {
    console.log("Xatolik");
}