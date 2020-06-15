function navClickHandler(elementClassName)
{
  const contentsToShow = document.querySelector("." + elementClassName);
  contentsToShow.className = "content-active";
}