document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('paymentForm');
    const modal = document.getElementById('popupModal');
    const closeModal = document.querySelector('.close');
    const okButton = document.getElementById('okButton');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      modal.style.display = 'block';
    });
  
    closeModal.onclick = function() {
      modal.style.display = 'none';
    };
  
    okButton.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
  