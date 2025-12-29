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

    let dias = porDia() / kg;


    resultado.innerHTML = `<p> Você por dia gasta ${porDia()}g de ração</p>`
    resultado.innerHTML += `<p> Por mês você gasta ${((porMes() - kg) / 1000).toFixed(2)}kg </p>`
    resultado.innerHTML += `<p> Este saco de ração durará ${ (dias)} dias</p>`

    resultado.innerHTML += ` ${duracao()}` 



function porDia(pD){
        pD = qtdPD * g;
        return pD;
    }
    
    
function porMes(){
        pM =  porDia() * 30;
        return pM;
    }

    
 function duracao(){
    if (porMes() <= kg){
        return `<p> Parabéns, esse controle de ração diária é o ideal! </p>`
    }
    else{
        return `<p> Esta quantidade de ração diária não durará para o mês inteiro, diminua por favor! </p>`
    }
}

   
}

