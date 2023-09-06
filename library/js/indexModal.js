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
// --- Кнопки из Favorites ---
const favoritesBuyBook = document.querySelectorAll('.block-item__book-buy');
// --- Digital Library Cards и кнопки из него ---
const digitalLibraryCards = document.querySelector('.library-cards');
const digitalLogin = document.querySelector('.card-button__log-in');
const digitaSignUp = document.querySelector('.card-button__sign-up');
const digitaProfile = document.querySelector('.card-button__profile');
const digitaInputBtn = document.querySelector('.input-block__btn');



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
// --- Check the card ---
digitaInputBtn.onclick = (event) =>
{
    const loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const inputBlockText = digitalLibraryCards.querySelector('.input-block__text');
    const inputBlockNumber = digitalLibraryCards.querySelector('.input-block__number');

    if ((inputBlockText.value.replaceAll(' ', '') === (loginUserInfo.firsName + loginUserInfo.lastName))
    && (inputBlockNumber.value === loginUserInfo.cardNumber))
    {
        const cloneAchivments = modalProfile.querySelector('.content-profile__achievements').cloneNode(true);
        cloneAchivments.classList.add('clone__achivments');

        for (let elem of cloneAchivments.querySelectorAll('.achievement-head'))
        {
            elem.style = 'font-size: 15px;'; 
        }

        cloneAchivments.querySelector('.achievement-value-visits').textContent = loginUserInfo.visits;
        cloneAchivments.querySelector('.achievement-value-books').textContent = loginUserInfo.rentBooks;
  
        digitalLibraryCards.querySelector('.form-input-block').after(cloneAchivments);
        digitalLibraryCards.querySelector('.input-block__btn').classList.add('disable__library-cards-block');
        digitalLibraryCards.querySelector('.find-card__form').classList.add('find-card__form-login');

        event.preventDefault();

        setTimeout(() => cloneAchivments.remove(), 10000);
        setTimeout(() => 
        {
            digitalLibraryCards.querySelector('.input-block__btn').classList.remove('disable__library-cards-block');
            digitalLibraryCards.querySelector('.find-card__form').classList.remove('find-card__form-login');

            inputBlockText.value = '';
            inputBlockNumber.value = '';
        }, 
        10000);
        
    }
    else
    {
        event.preventDefault();
        alert('Карточка не найдена.\nВведите "Имя Фамилия" и "номер карточки".\nP.S.: информация есть в консоли.');
    }
    
}
    

// --- ----- ---

// +++ Buy Library Card +++
// --- Вызов ---
for (let elem of favoritesBuyBook)
{
    elem.addEventListener('click',
        function ()
        {
            let loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

            if ((localStorage.getItem('loginStatus') === 'true') 
            && (loginUserInfo.buyCard === 'false'))
            {
                modalWindow.classList.add('active-modal');
                modalBuyCard.classList.add('active-modal');
            }

            if ((localStorage.getItem('loginStatus') === 'false')
            || (localStorage.getItem('loginStatus') === null))
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

            buyBook(loginUserInfo, elem);
        }
    );
}

// -- Проверка валидности --
const buyCardForm = document.querySelector('.buy-card-form');
const inputsBuyCardForm = buyCardForm.querySelectorAll('.modal-input');

for (elem of inputsBuyCardForm)
{
    elem.addEventListener('input',
        function ()
        {
            if (buyCardForm.checkValidity())
            {
                // buyCardForm.subm.removeAttribute('disabled');
                buyCardForm.subm.disabled = false;
                buyCardForm.subm.classList.remove('disabled-btn');
            }
            else
            {
                buyCardForm.subm.disabled = true;
                buyCardForm.subm.classList.add('disabled-btn');
            }
        }
    );
};

// -- Покупка и закрытие --
buyCardForm.subm.addEventListener('click',
    function ()
    {
        let loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        modalWindow.classList.remove('active-modal');
        modalBuyCard.classList.remove('active-modal');
        loginUserInfo.buyCard = 'true';
        localStorage.setItem('userInfo', JSON.stringify(loginUserInfo));
    }
);

// --- Закрытие ---
window.addEventListener('click', (event) => 
{
    if((event.target == document.querySelector('.card-content-header__close')) ||
    (event.target == modalWindow))
    {
        modalWindow.classList.remove('active-modal');
        modalBuyCard.classList.remove('active-modal')
    } 
});
// --- ----- ---

// +++ Log Out +++
// --- Вызов ---
dropMenuProfileLogOut.addEventListener('click',
    function ()
    {
        localStorage.setItem('loginStatus', 'false');

        updateShowProfileInfo ()
        location.reload();
    }
);
// --- ----- ---
