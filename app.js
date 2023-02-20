const clock = document.getElementById('clock');

function tick(){

    const now = new Date();

    const hours =now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    const CreateHtml = `
    <span> ${hours} : </span>
    <span> ${minutes} : </span>
    <span> ${seconds}</span>
    `;
  
    clock.innerHTML = CreateHtml;
};

setInterval(function(){

    tick();

},1000);