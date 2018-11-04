function cekKomputer(){
        var komputer = ['gunting','kertas','batu']
        var index =  Math.floor(Math.random() * komputer.length)
        return komputer[index]
    }
function logika(com, you){
    if(com == you){
        return 'Seri'
    }else if(com == 'gunting' && you == 'batu'){
        return'Menang'
    }else if(com == 'gunting' && you == 'kertas'){
        return 'Kalah'
    }else if(com == 'kertas' && you == 'batu'){
        return 'Kalah'
    }else if(com == 'kertas' && you == 'gunting'){
        return 'Menang'
    }else if(com == 'batu' && you == 'kertas'){
        return 'Menang'
    }else if(com == 'batu' && you == 'gunting'){
        return 'Kalah'
    }
}
function gunting(){
    var com = cekKomputer()
    var you = 'gunting'
    console.log(logika(com , you))
}

function kertas(){
    var com = cekKomputer()
    var you = 'kertas'
    console.log(logika(com , you))
}

function batu(){
    var com = cekKomputer()
    var you = 'batu'
    console.log(logika(com ,you))
}