const loginNameInput = document.querySelector('.login-form__input-email');
const loginPasswordInput = document.querySelector('.login-form__input-password');

const firstNameRegInput = document.querySelector('.register-form__input-first-name');
const lastNameRegInput = document.querySelector('.register-form__input-last-name');
const eMailRegInput = document.querySelector('.register-form__input-email');
const passwordRegInput = document.querySelector('.register-form__input-password');

const loginFormBtn = document.querySelector('.login-form__btn');
const registerFormBtn = document.querySelector('.register-form__btn');

console.log(JSON.parse(localStorage.getItem('userInfo')));

function loginUser ()
{
    const loginUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (((loginNameInput.value === loginUserInfo.eMail)
     || (loginNameInput.value === loginUserInfo.cardNumber))
     && (loginPasswordInput.value === loginUserInfo.password))
    {
        localStorage.setItem('loginStatus', 'true');
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
    (passwordRegInput.value.length > 7))
    {
        const newUser = {};

        newUser.firsName = firstNameRegInput.value;
        newUser.lastName = lastNameRegInput.value;
        newUser.eMail = eMailRegInput.value;
        newUser.password = passwordRegInput.value;
        newUser.cardNumber = Math.random().toString(16).slice(2,11).toUpperCase();

        localStorage.setItem('loginStatus', 'true');
        localStorage.setItem('userInfo', JSON.stringify(newUser));

        modalWindow.classList.remove('active-modal');
        modalLogin.classList.remove('active-modal');

        console.log(newUser);
    }
    
};

loginFormBtn.onclick = loginUser;
registerFormBtn.onclick = registerNewUser;