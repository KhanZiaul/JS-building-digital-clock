const clock = document.getElementById('clock');

function tick(){

    const now = new Date();

    const hours =now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    const CreateHtml = `
    <p class= "text-7xl mb-10"> DIGITAL CLOCK <p>

    <div class = "border-2 rounded-xl p-2 bg-sky-900 lg:w-[50%] mx-auto lg:p-5">
    <span> ${hours} : </span>
    <span> ${minutes} : </span>
    <span> ${seconds}</span>
    </div>
    `;
  
    clock.innerHTML = CreateHtml;
};

setInterval(function(){

    tick();

},1000);