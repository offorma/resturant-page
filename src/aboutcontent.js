const aboutContent = {
  about: `<img src='img/bake1.jpeg'></img><h2> We love bread</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>`,
};
const loadAbout = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML = aboutContent.about;
};
export default { loadAbout };