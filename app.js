// Aggiorna anno footer
document.getElementById('year').textContent = new Date().getFullYear();

// Effetto: i link progetti si rimpiccioliscono scorrendo
(function(){
  const projects = document.querySelector('.projects');
  const hero = document.querySelector('.hero');
  if(!projects || !hero) return;

  const threshold = hero.offsetHeight * 0.5; // quando superi metà hero
  function onScroll(){
    if(window.scrollY > threshold){
      projects.classList.add('shrink');
    }else{
      projects.classList.remove('shrink');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
})();
