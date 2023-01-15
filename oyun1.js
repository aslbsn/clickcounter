const ayarlar = {

    oyunBasladiMi: false,
    sure: 0,
    sureIntervalId: null,
    tiklamaPuanı: 0,
    maksSure: null


}
const btnBasla = document.querySelector("#btnBasla");
const txtSure = document.querySelector("#txtSure");
const divKutu1 = document.querySelector("#kutu1");
const txtPuan = document.querySelector("#txtPuan");
divKutu1.style.userSelect = 'none';
const inpMaksSure = document.querySelector("#inpMaksSure")

divKutu1.addEventListener('click', () => {

    if (ayarlar.oyunBasladiMi === true) {
        ayarlar.tiklamaPuanı = ayarlar.tiklamaPuanı + 1;
        txtPuan.textContent = ayarlar.tiklamaPuanı + " puan"
    }
})

btnBasla.addEventListener("click", () => {

    if (ayarlar.oyunBasladiMi === false) {

        if (inpMaksSure.value === "") {
            alert("Süre boş olamaz!!")
            return; //fonksiyonun devam etmesini durdurduk
        }

        ayarlar.maksSure = parseInt(inpMaksSure.value);


        ayarlar.oyunBasladiMi = true;
        btnBasla.innerHTML = "Oyunu Bitir"

        txtPuan.textContent = ayarlar.tiklamaPuanı + " puan";
        ayarlar.sure = ayarlar.sure + 1;
        txtSure.textContent = ayarlar.sure + "sn";

        ayarlar.sureIntervalId = setInterval(() => {
            ayarlar.sure = ayarlar.sure + 1;
            txtSure.textContent = ayarlar.sure + "sn";

            if (ayarlar.sure >= ayarlar.maksSure) {
                alert("Süre doldu!")
                clearInterval(ayarlar.sureIntervalId);
                let mesaj = `Süre: ${ayarlar.sure} Puan: ${ayarlar.tiklamaPuanı}`
                alert(mesaj)
                //oyunu sıfırlama kodları
                ayarlar.tiklamaPuanı = 0;
                ayarlar.sure = 0;
                ayarlar.oyunBasladiMi = false;
                btnBasla.innerHTML = "Oyuna Başla"
                txtSure.textContent = "";
                txtPuan.textContent = ""
                inpMaksSure.value=""
            }

        }, 1000)
    }
    else {
        function OyunuBitir() {
        clearInterval(ayarlar.sureIntervalId)
        let mesaj = `Süre: ${ayarlar.sure} Puan: ${ayarlar.tiklamaPuanı}`
        alert(mesaj)

        //oyunu sıfırlama kodları
        ayarlar.tiklamaPuanı = 0;
        ayarlar.sure = 0;
        ayarlar.oyunBasladiMi = false;
        btnBasla.innerHTML = "Oyuna Başla"
        txtSure.textContent = "";
        txtPuan.textContent = ""
        inpMaksSure.value=""
 }
    }

})