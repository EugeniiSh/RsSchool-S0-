const loginImg = document.querySelector('.login-img');
const dropMenuProfile = document.querySelector('.modal-menu__profile-no-auth');
const dropMenuProfileHeader = document.querySelector('.profile-no-auth__header');

loginImg.addEventListener('click',
    function ()
    {
        dropMenuProfile.classList.toggle('profile-menu__active');
    }
);

window.addEventListener('click', (event) => 
{
    // alert(event.target.closest('.modal-menu__profile-no-auth'));
    if((event.target !== loginImg) &&
    (event.target !== event.target.closest('.modal-menu__profile-no-auth')) && 
    (event.target !== dropMenuProfileHeader))
    {
        dropMenuProfile.classList.remove('profile-menu__active')
    }    
});