const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/dadosglobais.json'

console.log(url);

async function
visualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = await res.json()
console.log(dados.tempo_medio);
const paragrafo = document.createElement(‘p’)
paragrafo.classList.add(‘graficos-container__texto’)
paragrafo.innerHTML = `Você sabia que o mundo tem
${dados.total_pessoas_mundo} de pessoas e
que aproximadamente ${dados.total_pessoas_conectadas}
estão conectadas em alguma rede social e passam em média
${dados.tempo_medio} horas conectadas.`
console.log(paragrafo)
const container = document.getElementById(‘graficos-
container’)
container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

paragrafo.innerHTML = `Você sabia que o mundo tem
<span>${dados.total_pessoas_mundo}</span> de pessoas e
que aproximadamente <span>${dados.total_pessoas_
conectadas}</span> estão conectadas em alguma rede
social e passam em media

<span>${dados.tempo_medio}</span> horas conectadas.`

const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas)
* 100)
const porcentagemConectada = ((pessoasConectadas /
pessoasNoMundo) * 100).toFixed(2)

const paragrafo = document.createElement(‘p’)
paragrafo.classList.add(‘graficos-container__texto’)
paragrafo.innerHTML = `Você sabia que o mundo tem
<span>${pessoasNoMundo} bilhões</span> de pessoas e
que aproximadamente <span>${pessoasConectadas}
bilhões </span> estão conectadas em alguma rede social
e passam em média <span>${horas}</span> horas e
<span>${minutos}</span> minutos conectadas.
<br> Isso significa que aproximadamente ${porcentagemConectada}%