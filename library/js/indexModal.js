// --- Дроп меню профиля в хедере ---
const loginImg = document.querySelector('.login-img');
const dropMenuProfile = document.querySelector('.modal-menu__profile-no-auth');
const dropMenuProfileHeader = document.querySelector('.profile-no-auth__header');
const dropMenuProfileLogin = document.querySelector('.profile-no-auth__log-in');
const dropMenuProfileRegister = document.querySelector('.profile-no-auth__register');
const dropMenuProfileMyProfile = document.querySelector('.profile-no-auth__my-profile');
const dropMenuProfileLogOut = document.querySelector('.profile-no-auth__log-out');
// --- Все модальные окна ---
const modalWindow = document.querySelector('.modal-window');
const modalLogin = document.querySelector('.modal__log-in');
const modalRegister = document.querySelector('.modal__register');
const modalProfile = document.querySelector('.modal-profile');
const modalBuyCard = document.querySelector('.modal-buy-card');
// --- Кнопки из Digital Library Cards ---
const digitalLogin = document.querySelector('.card-button__log-in');
const digitaSignUp = document.querySelector('.card-button__sign-up');
const digitaProfile = document.querySelector('.card-button__profile');

// localStorage.setItem('loginStatus', 'false');

// +++ Drop menu profile +++
// --- Вызов ---
loginImg.addEventListener('click',
    function ()
    {
        dropMenuProfile.classList.toggle('profile-menu__active');
        const loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (localStorage.getItem('loginStatus') === 'true')
        {
            dropMenuProfileLogin.style = 'display: none';
            dropMenuProfileRegister.style = 'display: none';
            dropMenuProfileMyProfile.style = 'display: ""';
            dropMenuProfileLogOut.style = 'display: ""';

            dropMenuProfileHeader.textContent = loginUserInfo.cardNumber;
            dropMenuProfileHeader.style = 'font-size: 13px';
        }
        else
        {
            dropMenuProfileLogin.style = 'display: ""';
            dropMenuProfileRegister.style = 'display: ""';
            dropMenuProfileMyProfile.style = 'display: none';
            dropMenuProfileLogOut.style = 'display: none';

            dropMenuProfileHeader.textContent = 'Profile';
            dropMenuProfileHeader.style = 'font-size: 15px';
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
// --- ----- ---

// +++ Log In +++
// --- Вызов ---
dropMenuProfileLogin.addEventListener('click', 
    function()
    {
        modalWindow.classList.add('active-modal');
        modalLogin.classList.add('active-modal');
        // --очистка строк ввода--
        const LoginInputs = modalLogin.querySelectorAll('.modal-input');
        for(let elem of LoginInputs)
        {
            elem.value = '';
        }
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
// --- ----- ---

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
// --- ----- ---

// +++ Profile +++
// --- Вызов ---
dropMenuProfileMyProfile.addEventListener('click', 
    function()
    {
        modalWindow.classList.add('active-modal');
        modalProfile.classList.add('active-modal');
    }
);

// --- Закрытие ---
window.addEventListener('click', (event) => 
{
    if((event.target == document.querySelector('.profile-header__close')) ||
    (event.target == modalWindow))
    {
        modalWindow.classList.remove('active-modal');
        modalProfile.classList.remove('active-modal')
    } 
    
    if (event.target == document.querySelector('.register-footer__link'))
    {
        modalLogin.classList.add('active-modal');
        modalProfile.classList.remove('active-modal');
    }
});
// --- ----- ---

// +++ Вызовы из Digital Library Cards +++
// --- Log In ---
digitalLogin.addEventListener('click',
    function ()
    {
        modalWindow.classList.add('active-modal');
        modalLogin.classList.add('active-modal');
        // --очистка строк ввода--
        const LoginInputs = modalLogin.querySelectorAll('.modal-input');
        for(let elem of LoginInputs)
        {
            elem.value = '';
        }
    }
);
// --- Register ---
digitaSignUp.addEventListener('click',
    function ()
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
// --- Profile ---
digitaProfile.addEventListener('click',
    function ()
    {
        modalWindow.classList.add('active-modal');
        modalProfile.classList.add('active-modal');
    }
);
// --- ----- ---

// +++ Log Out +++
// --- Вызов ---
dropMenuProfileLogOut.addEventListener('click',
    function ()
    {
        localStorage.setItem('loginStatus', 'false');

        getIconProfile ()
        location.reload();
    }
);
// --- ----- ---
