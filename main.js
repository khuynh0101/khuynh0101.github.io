function init() {
  try {
    if (window.location.hash) {
      const hash = window.location.hash;
      const contentItems = document.querySelectorAll('.sidebar-content-item a');
      contentItems.forEach(function (contentItem) {
        setActiveLink(contentItem, hash);
      });
    }
  } catch (exception) {}
}

function closeMobileSideBarMenu() {
  const menu = document.querySelector('.sidebar-menu-open');
  if (menu) toggleMenu();
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
    setActiveLink(contentItem, content.hash);
  });
}

function setActiveLink(contentItem, contentHash)
{
  if (contentItem.hash === contentHash)
    contentItem.classList.add('link-active');
  else 
  contentItem.classList.remove('link-active');
    // if (contentItem.className === 'sub-link')
    //   contentItem.className = 'sub-link link-active';
    // else contentItem.className = 'link-active';
}
