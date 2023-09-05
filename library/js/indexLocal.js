// --- Окно логина ---
const loginNameInput = document.querySelector('.login-form__input-email');
const loginPasswordInput = document.querySelector('.login-form__input-password');
// --- Окно регистрации ---
const firstNameRegInput = document.querySelector('.register-form__input-first-name');
const lastNameRegInput = document.querySelector('.register-form__input-last-name');
const eMailRegInput = document.querySelector('.register-form__input-email');
const passwordRegInput = document.querySelector('.register-form__input-password');
// --- Кнопки submit: login, register ---
const loginFormBtn = document.querySelector('.login-form__btn');
const registerFormBtn = document.querySelector('.register-form__btn');
// --- Иконка копирования card number ---
const copyCardNumber = document.querySelector('.profile-card-number__copide');

console.log(JSON.parse(localStorage.getItem('userInfo')));

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

        updateShowProfileInfo ()
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

        localStorage.setItem('loginStatus', 'true');
        localStorage.setItem('userInfo', JSON.stringify(newUser));

        modalWindow.classList.remove('active-modal');
        modalLogin.classList.remove('active-modal');

        updateShowProfileInfo ();
        location.reload()
    }
    
};

function updateShowProfileInfo ()
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
        modalProfile.querySelector('.achievement-value-books').textContent = loginUserInfo.rentBooks;
        modalProfile.querySelector('.profile-card-number__value').textContent = loginUserInfo.cardNumber;
        updateRentedBooks (loginUserInfo)

        // -- Замена кнопок купленых книг в favorites -- 
        updateFavoritesButtonAfterRent (loginUserInfo)

        // --- Изменение Digital Library Cards после логина --- 
        updateBlocksDigitalLibraryCards (loginUserInfo)
    }
    else
    {
        // -- Возврат стандартной иконки профиля --
        document.querySelector('.heading__login-profile').classList.remove('active__heading-login-profile'); 
        loginImg.removeAttribute('title');

    }
};

function updateRentedBooks (userInfo)
{
    for (let i = 0; i < +userInfo.rentBooks; i++)
    {
        const bookName = userInfo.books[i].bookName;
        const bookAutor = userInfo.books[i].bookAutor.slice(3);
        const newLi = document.createElement('li');
        newLi.textContent = `${bookName}, ${bookAutor}`;
        modalProfile.querySelector('.profile-rented__list').append(newLi);
    }
}

function updateFavoritesButtonAfterRent (loginUserInfo)
{
    for (let i = 0; i < +loginUserInfo.rentBooks; i++)
    {
        for (let elem of favoritesBuyBook)
        {
            if ((loginUserInfo.books[i].bookAutor === elem.parentNode.childNodes[5].textContent)
            && (loginUserInfo.books[i].bookName === elem.parentNode.childNodes[3].textContent))
            {
                elem.classList.add('disabled-btn__book-buy');
                elem.textContent = 'Own';
            }
        }    
    }
}

function updateBlocksDigitalLibraryCards (loginUserInfo)
{
    digitalLibraryCards.querySelector('.after-login').classList.remove('disable__library-cards-block');
    digitalLibraryCards.querySelector('.no-login').classList.add('disable__library-cards-block');
    
    digitalLibraryCards.querySelector('.input-block__text').setAttribute('placeholder', `${loginUserInfo.firsName} ${loginUserInfo.lastName}`);
    digitalLibraryCards.querySelector('.input-block__text').classList.add('disabled__form-input-block');

    digitalLibraryCards.querySelector('.input-block__number').setAttribute('placeholder', loginUserInfo.cardNumber);
    digitalLibraryCards.querySelector('.input-block__number').classList.add('disabled__form-input-block');

    const cloneAchivments = modalProfile.querySelector('.content-profile__achievements').cloneNode(true);
    cloneAchivments.classList.add('clone__achivments');

    for (let elem of cloneAchivments.querySelectorAll('.achievement-head'))
    {
        elem.style = 'font-size: 15px;'; 
    }

    digitalLibraryCards.querySelector('.form-input-block').after(cloneAchivments);
    digitalLibraryCards.querySelector('.input-block__btn').classList.add('disable__library-cards-block');
    digitalLibraryCards.querySelector('.find-card__form').classList.add('find-card__form-login');
}

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

        elem_btn.classList.add('disabled-btn__book-buy');
        elem_btn.textContent = 'Own';
    }
};


loginFormBtn.onclick = loginUser;
registerFormBtn.onclick = registerNewUser;
updateShowProfileInfo ();

// window.addEventListener('storage', event => 
// {
//     console.log(event);
// });

// window.addEventListener('click', (event) => 
// {
//     console.log(event.target);
// });



