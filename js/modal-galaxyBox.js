const modalParent = document.querySelector('.modal-parent')
const openModalButton = document.querySelector('.open-modal-button');

openModalButton.addEventListener('click', ()=>{
  modalParent.innerHTML = `
      <div class="video-section-container  modal">
        <button class="close-modal-button">&times;</button>
        <div class="video-section-vid">
          <iframe class="portfolio-vid" src="https://www.youtube.com/embed/Wff4pmmEjlw?rel=0;&loop=1&autoplay=1"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
      <div id="overlay-video"></div>
  `
  const closeModalButton = document.querySelector('.close-modal-button');
  const overlay = document.getElementById('overlay-video');


  closeModalButton.addEventListener('click', ()=>{
    modalParent.innerHTML = ''
  });
  overlay.addEventListener('click', ()=>{
    modalParent.innerHTML = ''
  });
});

