document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name-input');
  const originInput = document.getElementById('origin-input');
  const reasonInput = document.getElementById('reason-input');
  const mottoInput = document.getElementById('motto-input');
  const templateText = document.getElementById('template-text');
  const copyTextButton = document.getElementById('copy-text-btn');
  const notification = document.getElementById('notification');

  nameInput.addEventListener('input', updateTemplateText);
  originInput.addEventListener('input', updateTemplateText);
  reasonInput.addEventListener('input', updateTemplateText);
  mottoInput.addEventListener('input', updateTemplateText);

  function updateTemplateText() {
    const name = nameInput.value || 'Nama';
    const origin = originInput.value || 'Asal sekolah';
    const reason = reasonInput.value || 'Alasan bergabung';
    const motto = mottoInput.value || 'Motto';

    document.getElementById('name').textContent = name;
    document.getElementById('origin').textContent = origin;
    document.getElementById('reason').textContent = reason;
    document.getElementById('motto').textContent = motto;
  }

  copyTextButton.addEventListener('click', function () {
    const text = templateText.innerText;
    copyTextToClipboard(text);
    showNotification();
  });

  function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function showNotification() {
    notification.textContent = "Sudah di salin dan silahkan ke halaman selanjutnya";
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
});
