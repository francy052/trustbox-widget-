(function() {
  const reviews = [
    { title: "Marco R. - 5 Stelle su Google", text: "Servizio eccellente e supporto top!" },
    { title: "Laura B. - 5 Stelle su Google", text: "Prodotto arrivato in 24 ore. Consigliatissimo!" },
    { title: "Alessandro T. - Cliente Verificato", text: "Rapporto qualità/prezzo imbattibile." }
  ];

  const style = document.createElement('style');
  style.innerHTML = `
    #trustbox-widget {
      display: none; position: fixed; bottom: 20px; left: 20px;
      background-color: #ffffff; color: #1a1a1a; padding: 14px 18px;
      border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 14px; z-index: 999999; border: 1px solid #eaeaea;
      align-items: center; gap: 12px; max-width: 320px;
      transition: all 0.4s ease;
    }
    #trustbox-star {
      background: #e6f4ea; color: #137333; border-radius: 50%;
      width: 36px; height: 36px; display: flex; align-items: center;
      justify-content: center; font-size: 18px; flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.id = 'trustbox-widget';
  container.innerHTML = `
    <div id="trustbox-star">★</div>
    <div>
      <div style="font-weight: 600; margin-bottom: 2px;" id="trustbox-title"></div>
      <div style="color: #5f6368; font-size: 12px;" id="trustbox-text"></div>
    </div>
  `;
  document.body.appendChild(container);

  let currentIndex = 0;
  function showNext() {
    const r = reviews[currentIndex];
    document.getElementById('trustbox-title').innerText = r.title;
    document.getElementById('trustbox-text').innerText = `"${r.text}"`;
    container.style.display = 'flex';
    container.style.opacity = '1';

    setTimeout(() => {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.display = 'none';
        currentIndex = (currentIndex + 1) % reviews.length;
      }, 400);
    }, 5000);
  }

  setTimeout(() => {
    showNext();
    setInterval(showNext, 12000);
  }, 3000);
})();
