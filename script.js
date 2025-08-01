const form = document.getElementById('formulario');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const presenca = document.querySelector('input[name="presenca"]:checked').value;
      const adultos = document.getElementById('adultos').value;
      const criancas = document.getElementById('criancas').value;
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const observacoes = document.getElementById('observacoes').value.trim() || 'Nenhuma';

      const mensagem = `*Confirmação de Presença*%0A` +
        `*Nome:* ${nome}%0A` +
        `*Irá ao evento?* ${presenca}%0A` +
        `*Adultos (incluindo você):* ${adultos}%0A` +
        `*Crianças:* ${criancas}%0A` +
        `*E-mail:* ${email}%0A` +
        `*Telefone:* ${telefone}%0A` +
        `*Observações:* ${observacoes}`;

      const numero = '559286381119'; // WhatsApp com código do país (55)
      const url = `https://wa.me/${numero}?text=${mensagem}`;

      window.open(url, '_blank');
});


// --------------------------------AUDIO---------------------------------

const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const tempo = document.getElementById('tempo');
    const progresso = document.getElementById('progresso');

    let tocando = false;

    playPauseBtn.addEventListener('click', () => {
      if (tocando) {
        audio.pause();
        playPauseBtn.innerHTML = "&#9654;"; // ▶
      } else {
        audio.play();
        playPauseBtn.innerHTML = "&#10074;&#10074;"; // ❚❚
      }
      tocando = !tocando;
    });

    audio.addEventListener('timeupdate', () => {
      const minutos = Math.floor(audio.currentTime / 60);
      const segundos = Math.floor(audio.currentTime % 60)
        .toString()
        .padStart(2, '0');
      tempo.textContent = `${minutos}:${segundos}`;

      const porcentagem = (audio.currentTime / audio.duration) * 100;
      progresso.style.width = `${porcentagem}%`;
    });

    audio.addEventListener('ended', () => {
      playPauseBtn.innerHTML = "&#9654;";
      tocando = false;
      progresso.style.width = `0%`;
      tempo.textContent = "00:00";
    });

    // -------------------------------countdown--------------------------------------
    const targetDate = new Date("2025-10-25T19:30:00");

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").textContent = "Chegou a hora.";
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      document.getElementById("countdown").textContent =
        `${d} dias ${h} horas ${m} min ${s} seg`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();