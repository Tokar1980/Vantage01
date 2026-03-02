(function(){
  const items = document.querySelectorAll('.acc-item');
  items.forEach(item => {
    const btn = item.querySelector('.acc-btn');
    if(!btn) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
})();
