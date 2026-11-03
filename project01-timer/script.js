// catatan :
// 1 second = 1000 ms

let inputTimer = document.getElementById('inputTimer');
const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');

let waktuMundur;

startBtn.addEventListener('click', function(){
    // user memasukan waktu yang diinginkan dalam bentuk menit pada input
    let waktuUser = Number(inputTimer.value);
    // memastikan waktuUser masih dalam cakupan angka menit (1-59)
    if(waktuUser > 0 && waktuUser < 60){
        // jika iya, mengubah waktuUser ke dalam bentuk ms
        let userMS = waktuUser * 60 * 1000;
        // memasukan waktu sekarang
        const waktuSkr = new Date().getTime();
        // menghitung waktu tujuan
        const waktuTujuan = userMS + waktuSkr;

        // memasukin setInterval
        waktuMundur = setInterval(function(){
            let waktuSaatIni = new Date().getTime();
            let selisih = waktuTujuan - waktuSaatIni;

            const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
            const detik = Math.floor(selisih % (1000 * 60) / 1000);

            const waktu = document.querySelector('.waktu');
            waktu.innerHTML = `${menit} : ${detik}`;



        }, 1000);

        
    } else {
        alert('masukan kurang tepat')
    }
});

stopBtn.addEventListener('click', function(){
    clearInterval(waktuMundur);
});




































// const tanggalTujuan = new Date('October 19, 2026 14:45:00').getTime();

// const hitungMundur = setInterval(function(){
//     const sekarang = new Date().getTime(); //getTime diubah ke dalam milidetik
//     const selisih = tanggalTujuan-sekarang;

//     const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
//     const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
//     const detik = Math.floor(selisih % (1000 * 60) / 1000);

//     const teks = document.getElementById('teks');
//     teks.innerHTML = 'Waktu kamu tinggal ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi';

//     if(selisih <= 0) {
//         clearInterval(hitungMundur);
//         teks.innerHTML ='Waktu anda habis';
//     }

// }, 1000);