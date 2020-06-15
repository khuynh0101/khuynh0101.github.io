function toggleMenu(){
    const menu = document.querySelector('.nav-menu');
    //open menu
    if (menu.className === 'nav-menu' || menu.className === 'nav-menu nav-menu-close')
    {
        menu.className = 'nav-menu nav-menu-open';
    }
    else if ( menu.className === 'nav-menu nav-menu-open')
    {
        menu.className = 'nav-menu nav-menu-close';
    }
}