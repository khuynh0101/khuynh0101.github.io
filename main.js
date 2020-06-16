function init() {
  try {
    if (window.location.hash) {
      const hash = window.location.hash;
      const contentItems = document.querySelectorAll('.sidebar-content-item a');
      contentItems.forEach(function (contentItem) {
        if (contentItem.hash === hash) contentItem.className = 'link-active';
        else contentItem.className = '';
      });
    }
  } catch (exception) {}
}

function closeMobileSideBarMenu() {
  const menu = document.querySelector('.sidebar-menu-open');
  if (menu)
    toggleMenu();
}

function toggleMenu() {
  event.stopImmediatePropagation();
  const menu = document.querySelector('.sidebar');
  svgPath = document.querySelector('.toggleImage');
  //open menu
  if (
    menu.className === 'sidebar' ||
    menu.className === 'sidebar sidebar-menu-close'
  ) {
    menu.className = 'sidebar sidebar-menu-open';
    svgPath.className.baseVal = 'toggleImage toggle-open';
    svgPath.className.animVal = 'toggleImage toggle-open';
  } else if (menu.className === 'sidebar sidebar-menu-open') {
    menu.className = 'sidebar sidebar-menu-close';
    svgPath.className.baseVal = 'toggleImage toggle-close';
    svgPath.className.animVal = 'toggleImage toggle-close';
  }
}
function handleSideBarContentClick(content) {
  toggleMenu();
  //const menu = document.querySelector('.sidebar');
  //menu.className = 'sidebar sidebar-menu-close';

  const contentItems = document.querySelectorAll('.sidebar-content-item a');
  contentItems.forEach(function (contentItem) {
    if (contentItem.hash === content.hash)
      contentItem.className = 'link-active';
    else contentItem.className = '';
  });
}
