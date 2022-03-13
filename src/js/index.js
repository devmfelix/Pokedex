//precisamos criar duas variaveis no js para trabalhar com os elementos na tela(no caso o queryselectorAll serve para selecionar toda a lista de pokemons)
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const cardPokemon = document.querySelectorAll('.cartoes-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons, o igualdade e a seta serve como uma função e dentro dela tera uma ação
    pokemon.addEventListener('click', () => {
        //remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado
        const pokemonAtivoNaListagem =  document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        //adicionar o ativo no item da lista que está selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})