// --- Окно логина ---
const loginNameInput = document.querySelector('.login-form__input-email');
const loginPasswordInput = document.querySelector('.login-form__input-password');
// --- Окно регистрации ---
const firstNameRegInput = document.querySelector('.register-form__input-first-name');
const lastNameRegInput = document.querySelector('.register-form__input-last-name');
const eMailRegInput = document.querySelector('.register-form__input-email');
const passwordRegInput = document.querySelector('.register-form__input-password');
// --- Кнопки submit ---
const loginFormBtn = document.querySelector('.login-form__btn');
const registerFormBtn = document.querySelector('.register-form__btn');
// --- Иконка копирования card number ---
const copyCardNumber = document.querySelector('.profile-card-number__copide');

console.log(JSON.parse(localStorage.getItem('userInfo')));
// let loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));
// loginUserInfo.buyCard = 'false';
// localStorage.setItem('userInfo', JSON.stringify(loginUserInfo));

function loginUser ()
{
    let loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (((loginNameInput.value === loginUserInfo.eMail)
     || (loginNameInput.value === loginUserInfo.cardNumber))
     && (loginPasswordInput.value === loginUserInfo.password))
    {
        localStorage.setItem('loginStatus', 'true');
        loginUserInfo.visits = +loginUserInfo.visits + 1;
        localStorage.setItem('userInfo', JSON.stringify(loginUserInfo));

        modalWindow.classList.remove('active-modal');
        modalLogin.classList.remove('active-modal');

        getIconProfile ()
        location.reload()
    } 
    else
    {
        alert('Неверный логин или пароль!');
    }
}

function registerNewUser ()
{
    if((firstNameRegInput.value != '') && 
    (lastNameRegInput.value != '') &&
    (eMailRegInput.validity.valid) &&
    (passwordRegInput.value.length > 7))
    {
        const newUser = {};

        newUser.firsName = firstNameRegInput.value;
        newUser.lastName = lastNameRegInput.value;
        newUser.initials = [firstNameRegInput.value[0].toUpperCase(), lastNameRegInput.value[0].toUpperCase()]
        newUser.eMail = eMailRegInput.value;
        newUser.password = passwordRegInput.value;
        newUser.cardNumber = Math.random().toString(16).slice(2,11).toUpperCase();
        newUser.visits = 1;
        newUser.buyCard = 'false';
        newUser.books = [];
        newUser.rentBooks = 0;
        // getRentBooks ()
        // {
        //     newUser.books.length
        // };

        localStorage.setItem('loginStatus', 'true');
        localStorage.setItem('userInfo', JSON.stringify(newUser));

        modalWindow.classList.remove('active-modal');
        modalLogin.classList.remove('active-modal');

        getIconProfile ();
        location.reload()
    }
    
};

function getIconProfile ()
{
    if(localStorage.getItem('loginStatus') === 'true')
    {
        const loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        // -- Замена иконки профиля -- 
        document.querySelector('.heading__login-profile').classList.add('active__heading-login-profile');
        document.querySelector('.heading__login-profile').textContent = loginUserInfo.initials[0] + loginUserInfo.initials[1];
        loginImg.setAttribute('title', `${loginUserInfo.firsName} ${loginUserInfo.lastName}`);
        // -- Замена информации в профиле --
        modalProfile.querySelector('.block-avatar').textContent = loginUserInfo.initials[0] + loginUserInfo.initials[1];
        modalProfile.querySelector('.block-name').textContent = loginUserInfo.firsName + ' ' + loginUserInfo.lastName;
        modalProfile.querySelector('.achievement-value-visits').textContent = loginUserInfo.visits;
        modalProfile.querySelector('.profile-card-number__value').textContent = loginUserInfo.cardNumber;
    }
    else
    {
        // -- Возврат стандартной иконки профиля --
        document.querySelector('.heading__login-profile').classList.remove('active__heading-login-profile'); 
        loginImg.removeAttribute('title');

    }
};

// --- Копирование card number в профиле ---
copyCardNumber.addEventListener('click',
    function ()
    {
        if (navigator.clipboard) 
        {
            const loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            navigator.clipboard.writeText(loginUserInfo.cardNumber).then(function() 
            {
                console.log('Текст успешно скопирован в буфер обмена');
                copyCardNumber.classList.add('copide-active');
                setTimeout(() => copyCardNumber.classList.remove('copide-active'), 250);
            }, 
            function(err) 
            {
                console.error('Произошла ошибка при копировании текста: ', err);
            });
        } 
        else 
        {
            alert('Копирование не доступно!');
        }
    }
);

// --- Покупка книг ---
function buyBook (userInfo, elem_btn)
{
    if ((localStorage.getItem('loginStatus') === 'true')
    && (userInfo.buyCard === 'true'))
    {
        console.log('rt');
        userInfo.books.push({bookName: elem_btn.parentNode.childNodes[3].textContent, bookAutor: elem_btn.parentNode.childNodes[5].textContent});
        userInfo.rentBooks = userInfo.books.length;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // console.log('rt2');
        elem_btn.classList.add('disabled-btn__book-buy');
        elem_btn.textContent = 'Own';
        // location.reload();
    }
};


loginFormBtn.onclick = loginUser;
registerFormBtn.onclick = registerNewUser;
getIconProfile ();

// window.addEventListener('storage', event => 
// {
//     console.log(event);
// });

// window.addEventListener('click', (event) => 
// {
//     console.log(event.target);
// });

// modalProfile



