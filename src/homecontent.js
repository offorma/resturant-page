const homeContent = {
  home: `<img src='img/bake3.jpeg'></img>
  <p>A Big Welcome to our bakery</p>
  <p>We are a family business who is honored to serve San Francisco’s neighborhood communities. Since 1995, our mission has been simple: to bring smiles to our neighbors. We’re here to help you celebrate life’s moments, big and small: from A+ spelling tests to milestone birthdays.</p>
  <p>We are a family business who is honored to serve San Francisco’s neighborhood communities. Since 1995, our mission has been simple: to bring smiles to our neighbors. We’re here to help you celebrate life’s moments, big and small: from A+ spelling tests to milestone birthdays.</p>
  <p>We are a family business who is honored to serve San Francisco’s neighborhood communities. Since 1995, our mission has been simple: to bring smiles to our neighbors. We’re here to help you celebrate life’s moments, big and small: from A+ spelling tests to milestone birthdays.</p>
  <p>We are a family business who is honored to serve San Francisco’s neighborhood communities. Since 1995, our mission has been simple: to bring smiles to our neighbors. We’re here to help you celebrate life’s moments, big and small: from A+ spelling tests to milestone birthdays.</p>
  <p>We’re a family business who is honored to serve San Francisco’s neighborhood communities. Since 1995, our mission has been simple: to bring smiles to our neighbors. We’re here to help you celebrate life’s moments, big and small: from A+ spelling tests to milestone birthdays.</p>`
};

const loadHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML = homeContent.home;
 };
export default { loadHome };