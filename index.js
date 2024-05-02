function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.addEventListener('scroll' , () => {
    const header =document.querySelector('.navigation');
    if (window .scrollY>0){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
  })