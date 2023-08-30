const loginImg = document.querySelector('.login-img');
const dropMenuProfile = document.querySelector('.modal-menu__profile-no-auth');
const dropMenuProfileHeader = document.querySelector('.profile-no-auth__header');
const dropMenuProfileLogin = document.querySelector('.profile-no-auth__log-in');
const dropMenuProfileRegister = document.querySelector('.profile-no-auth__register');
const dropMenuProfileMyProfile = document.querySelector('.profile-no-auth__my-profile');
const dropMenuProfileLogOut = document.querySelector('.profile-no-auth__log-out');

const modalWindow = document.querySelector('.modal-window');
const modalLogin = document.querySelector('.modal__log-in');
const modalRegister = document.querySelector('.modal__register');
const modalProfile = document.querySelector('.modal-profile');
const modalBuyCard = document.querySelector('.modal-buy-card');
// const modalBtn = document.querySelectorAll('.modal-btn');
// const modalClose = document.querySelectorAll('.modal-close');

// localStorage.setItem('loginStatus', 'false');

// +++ Drop menu profile +++
// --- Вызов ---
loginImg.addEventListener('click',
    function ()
    {
        dropMenuProfile.classList.toggle('profile-menu__active');

        if (localStorage.getItem('loginStatus') === 'true')
        {
            dropMenuProfileLogin.style = 'display: none';
            dropMenuProfileRegister.style = 'display: none';
            dropMenuProfileMyProfile.style = 'display: ""';
            dropMenuProfileLogOut.style = 'display: ""';
        }
        else
        {
            dropMenuProfileLogin.style = 'display: ""';
            dropMenuProfileRegister.style = 'display: ""';
            dropMenuProfileMyProfile.style = 'display: none';
            dropMenuProfileLogOut.style = 'display: none';
        }
    }
);

// --- Закрытие --
window.addEventListener('click', (event) => 
{
    if((event.target !== loginImg) &&
    (event.target !== event.target.closest('.modal-menu__profile-no-auth')) && 
    (event.target !== dropMenuProfileHeader))
    {
        dropMenuProfile.classList.remove('profile-menu__active')
    }    
});


// +++ Log In +++
// --- Вызов ---
dropMenuProfileLogin.addEventListener('click', 
    function()
    {
        modalWindow.classList.add('active-modal');
        modalLogin.classList.add('active-modal');
    }
);

// --- Закрытие ---
window.addEventListener('click', (event) => 
{
    if((event.target == document.querySelector('.login-header__close')) ||
    (event.target == modalWindow))
    {
        modalWindow.classList.remove('active-modal');
        modalLogin.classList.remove('active-modal');
    }
    
    if (event.target == document.querySelector('.login-footer__link'))
    {
        modalLogin.classList.remove('active-modal');
        modalRegister.classList.add('active-modal');
    }
});


// +++ Register +++
// --- Вызов ---
dropMenuProfileRegister.addEventListener('click', 
    function()
    {
        modalWindow.classList.add('active-modal');
        modalRegister.classList.add('active-modal');
        // --очистка строк ввода--
        const registerInputs = modalRegister.querySelectorAll('.modal-input');
        for(let elem of registerInputs)
        {
            elem.value = '';
        }
    }
);

// --- Закрытие ---
window.addEventListener('click', (event) => 
{
    if((event.target == document.querySelector('.register-header__close')) ||
    (event.target == modalWindow))
    {
        modalWindow.classList.remove('active-modal');
        modalRegister.classList.remove('active-modal')
    } 
    
    if (event.target == document.querySelector('.register-footer__link'))
    {
        modalLogin.classList.add('active-modal');
        modalRegister.classList.remove('active-modal');
    }
});

// +++ Log Out +++
// --- Вызов ---
dropMenuProfileLogOut.addEventListener('click',
    function ()
    {
        localStorage.setItem('loginStatus', 'false');
    }
);
