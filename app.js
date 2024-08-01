// document.getElementById("myimage").addEventListener("dblclick" , function(){
//     var heart= document.getElementById("heart");
//     heart.style.display="block";

//     setTimeout(function(){
//         heart.style.display="none";
//     }, 1000);
// });

 
  

 
let lastTouchTime = 0;

function showHearts(event) {
  var container = event.currentTarget.parentElement;

  for (var i = 0; i < 10; i++) {
    var heart = document.createElement('div'); 
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}%`; 
    heart.style.top = `${Math.random() * 100}%`; 
    heart.style.display = 'block'; 
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 600); 
  }
}

// Event listener for double-click on desktop
document.getElementById('myimage').addEventListener('dblclick', showHearts);

// Event listener for double-tap on mobile devices
document.getElementById('myimage').addEventListener('touchend', function(event) {
  const now = new Date().getTime();
  if (now - lastTouchTime <= 300) { 
    showHearts(event);
  }
  lastTouchTime = now;
});
