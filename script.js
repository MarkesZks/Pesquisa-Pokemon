var formulario = document.querySelector('form')

formulario.addEventListener('submit',function(e){
  // Serve para para de dar refresh na pagina 
  e.preventDefault()
// url de pesquisa da API
  let urlForm =  "https://pokeapi.co/api/v2/pokemon/";
  //Valor do input Name
  let nome = document.getElementById("name")
  //Concatena a url com o inputname
  urlForm = urlForm + this.name.value
  // Transforma os valores em letras minusculas
  urlForm = urlForm.toLocaleLowerCase()
//id conttent
let resposta = document.getElementById('content')
// Id imgPokemon
let imagem = document.getElementById('imgPokemon')
// resposta em HTML
let html = ''

//fetch= um comando 
fetch(urlForm)

.then(reposta => reposta.json())
.then(function(data){
  console.log(data)
  html = 'Nome: ' + maiuscula(data.name) + '<br>'
  html = html + 'Type: '+ maiuscula(data.types[0].type.name)
  resposta.innerHTML = html
  imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"

})
.catch(function (err) {
  if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
      html = 'Pokémon não encontrado! 😒'
  } else {
      html = err
  }
  resposta.innerHTML = html
})

});
function maiuscula(val){
  return val[0].toUpperCase() + val.substr(1)
}