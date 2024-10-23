const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}

const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.transporte-dados-globalThis} </span> o transporte para o trabalho se torna parte essencial da rotina diária de 2.000.000.000 dessas pessoas. Este deslocamento, em média, consome cerca de 0,9 hora de cada trabalhador. Em uma escala global,é fácil perceber como o transporte impacta bilhões de vidas.
    <span> ${dados.transporte-dados-globais} </span> estão empregadas em serviços registrados. Eles trabalham 
    <span> ${dados.tranposte_numeros} </span> horas por semana.`
    const container = document.getElementById('graficos-container')
container.appendChield(paragrafo):

vizualizarInformacoesGlobais()