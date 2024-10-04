async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
      
    console.log(dados)
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    const grafico = document.createElement('div')

const data = [

  {
  x: nomeDasRedes,
  y: quantidadeUsuarios,
  type: 'bar',
  marker: {
  color: getCSS('--primary-color')
  
  }
  }
  ]

    grafico.className = 'grafico'
    margin-top: 3rem;
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout);
    }

    const layout = {

      plot_bgcolor: getCSS('--bg-color')
      paper_bgcolor: getCSS('--bg-color')
      title: {
        text: 'Redes sociais com mais usuários no mundo'
        
        x: 0,
        font: {
        color: getCSS(‘--primary-color’),
        family: getCSS(‘--font’),
        size: 30
        }
        }
    }
