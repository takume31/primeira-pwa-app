if ('serviceWorker' in navigator) {
  window.addEventListener('load', async() => {
    try {
      let reg;
      reg = await navigator.serviceWorker.register('/sw.js', { type: "module"});
      console.log('Service Worker registrado com sucesso:', reg);
    } catch (error) {
      console.log('Falha ao registrar o Service Worker:', error);
    }
  });
}