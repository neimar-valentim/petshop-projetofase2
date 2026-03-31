function atualizarMensagemHorario() {
  const mensagem = document.getElementById("mensagemHorario");
  const agora = new Date();
  const hora = agora.getHours();

  if (hora < 12) {
    mensagem.textContent = "Bom dia! Aproveite nossas ofertas e serviços para o seu pet.";
  } else if (hora < 18) {
    mensagem.textContent = "Boa tarde! Agende agora mesmo o cuidado ideal para o seu pet.";
  } else {
    mensagem.textContent = "Boa noite! Confira nossos serviços e faça seu agendamento.";
  }
}

function definirDataMinima() {
  const campoData = document.getElementById("dataAgendamento");
  const hoje = new Date().toISOString().split("T")[0];
  campoData.min = hoje;
}

function inicializarFormulario() {
  const formulario = document.getElementById("formAgendamento");
  const resumo = document.getElementById("resumoAgendamento");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;
    const servico = document.getElementById("servico").value;
    const metodo = document.getElementById("metodo").value;
    const data = document.getElementById("dataAgendamento").value;
    const hora = document.getElementById("horaAgendamento").value;

    resumo.classList.remove("d-none");
    resumo.innerHTML = `
      <h3 class="fs-5">Agendamento realizado com sucesso!</h3>
      <p><strong>Cliente:</strong> ${nomeCliente}</p>
      <p><strong>Pet:</strong> ${nomePet}</p>
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Método:</strong> ${metodo}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${hora}</p>
    `;
  });
}

atualizarMensagemHorario();
definirDataMinima();
inicializarFormulario();