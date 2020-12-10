let arrDespesas = [
    { valor: 20, tipo: `alimentação`, descricao: 'McDonalds' },
    { valor: 15, tipo: `utilidades`, descricao: 'Capinha de celular' },
    { valor: 300, tipo: `viagem`, descricao: 'Gasolina carro' },
    { valor: 200, tipo: `alimentação`, descricao: 'Picanha na pedra' }
]
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    for (const iterator of despesas) {
        divDespesas.innerHTML +=
            `<div class="despesaCadastrada">` +
            `<h2>Descrição: ${iterator.descricao}</h2>` +
            `<h3>Valor R$: ${iterator.valor}</h3>` +
            `<h3>Tipo: ${iterator.tipo}</h3>` +
            `</div>`;
    }
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO

    //TOTAL
    arrDespesas.forEach((despesa) => {
        gastoTotal += despesa.valor;
    })

    //ALIMENTACAO
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === `alimentação`) {
            return true;
        }
    }).forEach((valor) => {
        gastoAlimentacao += valor.valor;
    })

    //UTILIDADES
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === `utilidades`) {
            return true;
        }
    }).forEach((valor) => {
        gastoUtilidades += valor.valor;
    })

    //VIAGEM
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === `viagem`) {
            return true;
        }
    }).forEach((valor) => {
        gastoViagem += valor.valor;
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
    console.log(arrDespesas);

}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
    imprimirDespesas(arrDespesas)
    imprimirExtrato()
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
        console.log(arrDespesas);
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    let despesasFiltradas;

    if (tipoFiltro === 'todos') {
        despesasFiltradas = arrDespesas.filter((p) => {
            if (p.valor >= valorMin && p.valor <= valorMax) {
                return true;
            }
        });
    } else {
        despesasFiltradas = arrDespesas.filter((p) => {
            if (p.tipo === tipoFiltro && p.valor >= valorMin && p.valor <= valorMax) {
                return true;
            }
        })
    }

    console.log(tipoFiltro);
    if (validarCamposFiltro(tipoFiltro, valorMin, valorMax) === false) {
        alert('Por favor, verifique os dados inseridos');
        return;
    }

    imprimirDespesas(despesasFiltradas)
}

function validarCamposFiltro(cbx, vMin, vMax) {
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    if (cbx !== 'todos' && cbx !== 'alimentação' && cbx !== 'viagem' && cbx !== 'utilidades') {
        return false;
    }
    if (vMin > vMax) {
        return false;
    }
    if (vMax < vMin) {
        return false;
    }
    if (isNumber(vMin)) {
        return true;
    }
    if (isNumber(vMax)) {
        return true;
    }
    return true;
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}