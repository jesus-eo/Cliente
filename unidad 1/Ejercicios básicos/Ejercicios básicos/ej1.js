function CambiarImagen() {
    let img = document.getElementById("miimg");
    if (img.src.match("imag1")) {
        img.src = "img/imag2.jpeg";
    
    }else if (img.src.match("imag2")) {
        img.src = "img/imag3.jpeg";
    }else if (img.src.match("imag3")) {
        img.src = "img/imag4.jpeg";
    }else if (img.src.match("imag4")) {
        img.src="img/imag5.jpeg";
    }else if (img.src.match("imag5")) {
        img.src= "img/imag1.jpeg";
    }
}

