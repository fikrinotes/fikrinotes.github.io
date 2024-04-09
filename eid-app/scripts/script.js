function push_button() {
    const loading = document.getElementById('loading');
    loading.classList.add("fa");
    loading.classList.add("fa-spinner");
    loading.classList.add("fa-spin");
    time = setTimeout(submit_data, 1000);
}

function submit_data() {
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('pesan').value;
    console.log(pesan);
    // delete input form
    document.getElementById('nama').value = "";
    document.getElementById('pesan').value = "";

    // replace all spaces
    nama = nama.replaceAll(" ", "%20");
    pesan = pesan.replaceAll(" ", "%20");
    console.log(nama);
    console.log(pesan);
    
    //encrypt message
    nama = encodeURIComponent(CryptoJS.AES.encrypt(nama, "rahasia"));
    pesan = encodeURIComponent(CryptoJS.AES.encrypt(pesan, "rahasia"));

    location.replace("https://fikrinotes.github.io/eid-app/response.html?nama=" + nama + "&pesan=" + pesan);
}

