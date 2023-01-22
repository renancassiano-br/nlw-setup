// add o form em uma variável
const from = document.querySelector("#form-habits")
// criando o objeto da biblioteca
const nlwSetup = new NLWSetup(from)
// selecionando o botão do header
const button = document.querySelector("header button")
// recuperando informação salva no navegador ou enviando um objeto vázio
const data = JSON.parse(localStorage.getItem("NLWSetu@habits")) || {}

// adicionando a trigger de click ao botão
button.addEventListener("click", add)
// monitorando alterações no form
from.addEventListener("change", save)

function add() {
  // alert("hello world")
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // verificando se o dia existe
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert(
      "🛑🛑🛑\nDia " +
        today +
        " já  está incluso! \nVerifique o quadro de habitos."
    )
    // sair da função ignorando o restante da função;
    return
  }

  alert("✅✅✅\nDia " + today + " Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  // salvando os dados do form no navegado
  localStorage.setItem("NLWSetu@habits", JSON.stringify(nlwSetup.data))
}

// //  criando os dados a serem adicionado ao objeto NLWSetup
// const data = {
//   // adicionado as informações de acordo com o data-name
//   // que vai vem ativas
//   run: ["01-01", "01-02", "01-05", "01-06", "01-07", "01-10"],
//   water: [],
//   food: ["01-02"],
//   journal: ["01-03"],
//   takePills: ["01-04"],
//   // estudar a biblioteca para conhecer as regras.
//   // nesse caso, apenas é necessário os itens que estarão marcados para aparecerem aqui,
//   // aslinhas 11 e 18, podem ser apagadas que não vai influenciar no resultado fial;
//   // swing:[],
// }

// adicionando os dados ao objeto nlwSetup que vai adicionar ao form
nlwSetup.setData(data)
// A mágica acontecendo -  carregadno os dados e atualizando a página
nlwSetup.load()
