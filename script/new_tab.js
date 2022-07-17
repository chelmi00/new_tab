function sleep(num) {
    let now = new Date();
    const stop = now.getTime() + num;
    while(true) {
        now = new Date();
        if(now.getTime() > stop) return;
    }
}

function busc(buscador) {
    var buscadores = ["ggl", "bin", "nss", "ddg", "qwa"];
    for (var busca of buscadores)
        document.getElementById(busca).style.display = "none";
    document.getElementById(buscador).style.display = "block";
    document.getElementById(buscador + "-input").focus();
    // document.getElementById(buscadores[(buscadores.indexOf(buscador) + 1) % 5]).click();
}