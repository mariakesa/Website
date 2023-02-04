window.addEventListener('load', function() {
    const grid = document.querySelector('#grid');
    const icons = ['gg-infinity', 'gg-airplane', 'gg-map-marker', 'gg-location', 'gg-globe', 'gg-envelope', 'gg-mobile', 'gg-user', 'gg-clock', 'gg-settings'];
    const images =['./CVImages/zebrafish','./CVImages/snakegame.png']
    const texts =[
        {title: 'PhD researcher',
        year: 2020,
        body: 'Hello'
        }
    ]    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const button = document.createElement('button');
        const icon = document.createElement('i');
        icon.classList.add(icons[row * 4 + col % 10]);
  
        button.appendChild(icon);
        button.addEventListener('click', function() {
          console.log(`Button ${row * 4 + col + 1} was clicked`);
          im=document.querySelector('#im')
          im.setAttribute("src", images[row+col]);
          txt=document.querySelector('#txt')
          txt.innerHTML = '<pre>Title: ${texts[row + col].title}\nYear: ${texts[row + col].year}\nBody: ${texts[row + col].body}</pre>';
        });
        grid.appendChild(button);
      }
    }
  });