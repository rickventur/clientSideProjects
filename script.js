var d = new Date()
var nasc = document.getElementById('txtano')
var M = document.getElementById('masc')
var F = document.getElementById('Fem')

function Verify(){
    var res = document.getElementById('res')
    if (nasc < 1905)
    res.innerHTML = 'Você não pode ter esta idade'
}