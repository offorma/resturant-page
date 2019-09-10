const contactContent = {

  contact : `<img src='img/bake2.jpeg'></img>
  <pre><h2>HOURS & LOCATION</h2>
    30 East 30th St.,
    New York, NY 10016 
    646-747-8625

    Open Every Day : 7AM - 9PM

    Join us for Coffee Happy Hour 3 - 9PM every day!

    CONTACT US
    info@caffemarchio.com
    646-747-862
  </pre>`,
};

  const loadContact  = () => {
  const content = document.getElementById("content");
  content.innerHTML = '';
  content.innerHTML = contactContent.contact;
 }
export {loadContact}