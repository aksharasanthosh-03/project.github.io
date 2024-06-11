document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modalImage" src="" alt="Popup Image" />
            <p id="modalMessage"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.style.display = 'none';
    };

    const openModal = (message, imageUrl) => {
        document.getElementById('modalMessage').textContent = message;
        document.getElementById('modalImage').src = imageUrl;
        modal.style.display = 'block';
    };

    modal.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        openModal('You have logged in.', 'img2.png');
    });

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        openModal('You have signed up.', 'img2.png');
    });

    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const wrapper = document.querySelector('.wrapper');

    signUpBtnLink.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });

    signInBtnLink.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });
});
