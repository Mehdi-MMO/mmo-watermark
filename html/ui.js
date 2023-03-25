var logo = document.getElementById("logo-container");
var serverName = document.getElementById("name-container");
var link = document.getElementById("link-container");
var nameText = document.getElementById("name");
var linkText = document.getElementById("link");

window.addEventListener('message', (event) => {
  if (event.data.type === 'setup') {
    nameText.innerHTML = event.data.nametext;
    serverName.style.color = event.data.nameColor;
    linkText.innerHTML = event.data.linktext;

    link.style.color = event.data.nameColor;
    serverName.style.color = event.data.linkColor;

    logo.style.opacity = 0;
    serverName.style.opacity = 0;
    link.style.opacity = 0;
    
    document.getElementById("logo").style.backgroundImage = "url(" + event.data.logoLink + ")";
  }
  else if (event.data.type === 'show') {
    logo.style.opacity = 0;
    serverName.style.opacity = 0;
    link.style.opacity = 0;

    setTimeout(() => {
      if (event.data.item === 'logo') {
        logo.style.opacity = event.data.opacity / 100;
      } else if (event.data.item === 'name') {
        serverName.style.opacity = event.data.opacity / 100;
      } else if (event.data.item === 'link') {
        link.style.opacity = event.data.opacity / 100;
      }
    }, 1000);
  }
});

