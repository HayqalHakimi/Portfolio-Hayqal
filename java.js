const bajetSaya = 100;

function semakBajet(hargaBarang) {
    const displayHarga = document.getElementById("display-harga");
    const statusTeks = document.getElementById("status");

    displayHarga.innerText = hargaBarang;

    if (hargaBarang <= bajetSaya) {
        statusTeks.innerText = "Boleh Beli 😊";
        statusTeks.style.color = "green";
    } else {
        statusTeks.style.fontSize = "16px";
        statusTeks.innerText = "Tidak Mampu 😞";
        statusTeks.style.color = "red";
        statusTeks.style.fontSize = "20px";
    }


    console.log("menyemak harga:RM" + hargaBarang);
}