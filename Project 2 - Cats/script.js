// Calcular quanto de ração ainda resta no saco 
// Saber quantas gramas se dá e por quantos dias
// Subtrair do saco as gramas diárias totais
// Calcular por quantos dias durará a ração 

    let inputKilograma = document.getElementById("saco");
    let inputGramas = document.getElementById("gramas");
    let inputQtdPD = document.getElementById("qtdPD");

    let resultado = document.getElementById("resultado");

function calcular(){

    let kg = inputKilograma.value;
    let g = inputGramas.value;
    let qtdPD = inputQtdPD.value;
    
    let qtdPorDia = ;
    let qtdSemana =  ;
    let qtdMes = ;


    
    resultado.innerHTML = `<p> Você por dia gasta ${porDia()}g de ração</p>`
    resultado.innerHTML += `<p> Você ainda tem ${((porMes() - kg) / 1000).toFixed(2)}kg no saco de ração </p>`
   
}


function porDia(pD){
        pD = qtdPD * g;
        return pD;
    }
    
    
function porMes(){
        pM =  porDia() * 30;
        return pM;
    }