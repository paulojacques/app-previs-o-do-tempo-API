//const key =
//const img-street =

//https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=&signature=YOUR_SIGNATURE

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: "+ dados.main.humidity +" %"
    document.querySelector(".im-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


//assync = espera o servidor responder;
//await = espera o servidor responder;
//fetch = 
async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
    const cidade = document.querySelector('.input-cidade').value
    

    buscarCidade(cidade)

}


