var zone = document.getElementById("zone")
var tarif = document.getElementById("tarif")
var reduction = document.getElementById("reduction")
var nom = document.getElementById("nom")
var prenom = document.getElementById("prenom")
var cin = document.getElementById("cin")
var metro = document.getElementById("metro")
var RER = document.getElementById("RER")
var TGV = document.getElementById("TGV")
var jour=document.getElementById("jour")
var semain=document.getElementById("semain")
var mois=document.getElementById("mois")

function calc(){
    const p = document.getElementById('zone').selectedIndex;
switch(p)
{
    case 1 :
        tarif.value=4;break;
    case 2 :
        tarif.value=7;break;
    case 3 :
        tarif.value=10;break;
    case 4 :
        tarif.value = 15;break;
    case 5 :
        tarif.value = 20;break;
}
}
function reduc(){
    const r = document.getElementById('age').selectedIndex;
    const p = document.getElementById('zone').selectedIndex;
    switch(true){
        case r==2 :
            reduction.value = 100;break;
        case r == 3 && (p==1 || p==2 || p==3) :
            reduction.value = 50 ; break;
        case r == 3 && (p == 4 || p == 5):
            reduction.value=20;break;
        case r == 1:
            reduction.value=30;break;
        default:
            reduction.value=0;break;
    }
}
function simuler(){
    const r = document.getElementById('age').selectedIndex;
    const p = document.getElementById('zone').selectedIndex;
    if (nom=="" || prenom=="" || cin=="" || r==0 || p==0 || (metro.checked==false && RER.checked==false && TGV.checked==false)){
        alert('drop ur shit bitch')
    }
 
}

function afficher(){
    var a = 0
    var b = 0
    var c = 0
    var sup = 0
    if (metro.checked==true){
         a=2
    }
    if(RER.checked==true){
         b=4
    }
    if(TGV.checked==true){
         c=8
    }
    sup = eval(a)+ eval(b) + eval(c)
    var tarifbillet=0
    var tarifjourn=((eval(tarif.value)+eval(sup))-(eval(tarif.value)+eval(sup))*eval(reduction.value)/100)
    if (jour.checked==true){
        tarifbillet=tarifjourn
    }
    else if(semain.checked==true){
        tarifbillet=eval(tarifjourn)*7-(eval(tarifjourn)*7*0.1)
    }
    else if(mois.checked==true){
        tarifbillet=eval(tarifjourn)*30-(eval(tarifjourn)*30*0.2)
    }
    document.getElementById("salina").value=tarifbillet
}