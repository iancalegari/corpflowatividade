
document.getElementById('form-tarefa').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const nome = this.nome.value;
    const descricao = this.descricao.value;
    const prazo = this.prazo.value;
  
    // CRIANDO OS CARDS PRINCIPAIS
    const card = document.createElement('div'); // cria uma nova div
    card.className = 'card'; // adiciona a classe 'card'
    card.innerHTML = `
      <strong>${nome}</strong><br>
      ${descricao}<br>
      <small>Prazo: ${prazo}</small><br><br>
    `;
  
    // CRIANDO OS BOTÕES DE VERIFICAR
    const btnVerificar = document.createElement('button'); // botão verificar
    btnVerificar.textContent = 'Verificar'; // texto do botão
    btnVerificar.className = 'btn-verificar'; 
    btnVerificar.onclick = function () {
      verificarTarefa(this); // chama função passando o próprio botão
    };
  
    // ADICIONA O BOTÃO AO CARD
    card.appendChild(btnVerificar);
  
    // AQUI O CARD CRIADO É ADICIONADO À COLUNA "A FAZER"
    document.getElementById('a-fazer').appendChild(card);
    this.reset();
  });
  
  // FUNÇÃO PARA MOVER O CARD PARA A COLUNA "VERIFICAR"
  function verificarTarefa(botao) {
    const card = botao.parentElement; 
  
    botao.remove(); 
  
    // CRIA UM CONTÊINER PARA OS NOVOS BOTÕES
    const divBtns = document.createElement('div');
    divBtns.style.marginTop = '10px';
  
    // CRIA BOTÃO 'VERIFICADA'
    const btnOk = document.createElement('button');
    btnOk.textContent = 'Verificada';
    btnOk.className = 'btn-ok';
    btnOk.onclick = function () {
      moverParaConcluido(this); // chama função passando o botão
    };
  
    // CRIA BOTÃO 'NÃO VERIFICADA'
    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = 'Não verificada';
    btnVoltar.className = 'btn-voltar';
    btnVoltar.onclick = function () {
      voltarParaFazer(this); 
    };
  
    divBtns.appendChild(btnOk);
    divBtns.appendChild(btnVoltar);
    card.appendChild(divBtns);
  
    // MOVE O CARD PARA A COLUNA 'VERIFICAR'
    document.getElementById('verificar').appendChild(card);
  }
  
  // FUNÇÃO PARA MOVER O CARD PARA A COLUNA "CONCLUÍDA"
  function moverParaConcluido(botao) {
    const card = botao.closest('.card'); // pega o card mais próximo
    card.querySelectorAll('button').forEach(btn => btn.remove()); 
    document.getElementById('concluida').appendChild(card); // move o card pra coluna 'Concluída'
  }
  
  // FUNÇÃO PARA VOLTAR O CARD PARA A COLUNA "A FAZER"
  function voltarParaFazer(botao) {
    const card = botao.closest('.card'); 
    card.querySelectorAll('button').forEach(btn => btn.remove()); // remove todos os botões
  
    // CRIA NOVO BOTÃO 'VERIFICAR'
    const btnVerificar = document.createElement('button');
    btnVerificar.textContent = 'Verificar';
    btnVerificar.className = 'btn-verificar';
    btnVerificar.onclick = function () {
      verificarTarefa(this); 
    };
  
    // ADICIONA O BOTÃO AO CARD
    card.appendChild(btnVerificar);
  
    // MOVE O CARD DE VOLTA PARA A COLUNA 'A FAZER'
    document.getElementById('a-fazer').appendChild(card);
  }
  