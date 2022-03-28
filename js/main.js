function readMore(index){
  const idBtn = `#read-more-${index}`;
  const idText = `#text-read-more-${index}`;

  let btn  = document.querySelector(idBtn);
  let btnText = document.querySelector(idBtn + '> span > span');
  let btnChevron = document.querySelector(idBtn + '> span > i');
  let text = document.querySelector(idText);

  if(btnText.textContent.replace(/\s/g, '').toLowerCase() == 'lermais'){
    btnText.innerHTML = 'Ler menos'
    btnChevron.classList.remove('fa-chevron-down')
    btnChevron.classList.add('fa-chevron-up')
    text.classList.remove('h-24');
    text.classList.add('h-full');
  }else{
    btnText.innerHTML = 'Ler mais'
    btnChevron.classList.remove('fa-chevron-up')
    btnChevron.classList.add('fa-chevron-down')
    text.classList.add('h-24');
    text.classList.remove('h-full');
  }

}