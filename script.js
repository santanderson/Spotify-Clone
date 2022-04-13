const mobileBtn = document.getElementById("mobile-button");
const mobileMenu = document.getElementById("mobile-menu");
let isOpn = false;

mobileBtn.addEventListener('click', () => {
    if(!isOpn) {
        mobileMenu.style.display = "flex";
        mobileBtn.style.position = "fixed";
        mobileBtn.innerHTML = 'x';
        isOpn = true;
    }else if(isOpn) {
        mobileMenu.style.display = 'none';
        mobileBtn.style.position = 'static';
        mobileBtn.innerHTML = '|||';
        isOpn = false;
    }
})