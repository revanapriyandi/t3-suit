function cekKomputer(){
        var komputer = ['gunting','kertas','batu']
        var index =  Math.floor(Math.random() * komputer.length)
        var hasil = komputer[index]
        document.getElementById('enemy').setAttribute("src","img/"+hasil+".png");
        return hasil

    }
function logika(com, you){
    if(com == you){
        document.getElementById('draw').setAttribute("src","draw.mp3")
        return 'Seri'
    }else if(com == 'gunting' && you == 'batu'){
        document.getElementById('Menang').setAttribute("src","win.mp3")
        return'Menang'
    }else if(com == 'gunting' && you == 'kertas'){
        document.getElementById('Kalah').setAttribute("src","lose.mp3")
        return 'Kalah'
    }else if(com == 'kertas' && you == 'batu'){
        document.getElementById('Kalah').setAttribute("src","lose.mp3")
        return 'Kalah'
    }else if(com == 'kertas' && you == 'gunting'){
        document.getElementById('Menang').setAttribute("src","win.mp3")
        return 'Menang'
    }else if(com == 'batu' && you == 'kertas'){
        document.getElementById('Menang').setAttribute("src","win.mp3")
        return 'Menang'
    }else if(com == 'batu' && you == 'gunting'){
        document.getElementById('Kalah').setAttribute("src","lose.mp3")
        return 'Kalah'
    }
}
function gunting(){
    var com = cekKomputer()
    var you = 'gunting'
    console.log(logika(com , you))
    document.getElementById('status').textContent = logika(com , you)
}

function kertas(){
    var com = cekKomputer()
    var you = 'kertas'
    console.log(logika(com , you))
    document.getElementById('status').textContent = logika(com , you)
}
function batu(){
    var com = cekKomputer()
    var you = 'batu'
    console.log(logika(com ,you))
    document.getElementById('status').textContent = logika(com , you)
}
