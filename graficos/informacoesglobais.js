const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}

const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.transporte-dados-globalThis} </span> de pessoas e que aproximadamente 
    <span> ${dados.transporte-dados-globais} </span> estão empregadas em serviços registrados. Eles trabalham 
    <span> ${dados.tranposte_numeros} </span> horas por semana.`
    const container = document.getElementById('graficos-container')
container.appendChield(paragrafo):

vizualizarInformacoesGlobais()