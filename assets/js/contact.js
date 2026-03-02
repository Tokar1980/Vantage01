(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const msg = (document.getElementById('message')?.value || '').trim();

    const subject = encodeURIComponent('VANTAGE website inquiry');
    const bodyLines = [
      'Name: ' + (name || '[not provided]'),
      'Email: ' + (email || '[not provided]'),
      '',
      msg || '[no message]',
      '',
      '---',
      'Sent via the VANTAGE project website'
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:jmo.vantage@gmail.com?subject=${subject}&body=${body}`;
  });
})();
