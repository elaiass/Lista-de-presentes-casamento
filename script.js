function revelarAoScroll() {
  const containers = document.querySelectorAll('.container2');
  const alturaTela = window.innerHeight;

  containers.forEach(container => {
    const distanciaTopo = container.getBoundingClientRect().top;
    const distanciaBase = container.getBoundingClientRect().bottom;

    if (distanciaTopo < alturaTela - 100 && distanciaBase > 100) {
      container.classList.add('aparecer');
    } else {
      container.classList.remove('aparecer');
    }
  });
}

window.addEventListener('scroll', revelarAoScroll);
revelarAoScroll(); // ativa ao carregar


function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

