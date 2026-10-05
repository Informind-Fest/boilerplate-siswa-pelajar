// 1. GLOBAL POLLUTION
// Deklarasi di luar function. Kita gunakan agar lolos TS.
var polusiSatu = "Global 1";
let polusiDua = "Global 2";
const polusiTiga = "Global 3";

export function jalankanVanilla() {
    // Kita panggil variabelnya supaya TS gak error "unused"
    console.log(polusiSatu, polusiDua, polusiTiga);

    let total = 0;
    
    // 2. DOM QUERY IN LOOP (Pembunuh Performa)
    for (let i = 0; i < 5; i++) {
        // Pemanggilan getElementById di dalam perulangan yang sah
        const elemen = document.getElementById("app");
        if (elemen) {
            total += i;
            elemen.setAttribute("data-test", total.toString());
        }
    }
}

jalankanVanilla();