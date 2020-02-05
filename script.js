let btnAddTarefa = document.querySelector("#adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')





btnAddTarefa.onclick = function(){

let valorDigitado = inputTarefa.value

    let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
  <div class="texto-tarefa">
      ${valorDigitado}                      
    </div>
    <div class="botao-tarefa">
    <img src="Imagem/download.png" width="32" alt="botao para finalizar tarefa"
    title="Botão para finalizar tarefa">
   </div>
</div>
</div>`
    tarefas.innerHTML += tarefaNova
}
