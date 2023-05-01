const list=document.querySelector('.list-page');
const addNew=document.querySelector('.add-page');
const contactPage=document.querySelector('.contact-page');
const listSection=document.getElementById('book-list');
const addSection=document.getElementById('add-book')
const contactSection=document.getElementById('contact')



list.addEventListener('click', ()=>{
    addSection.style.display='none';
    contactSection.style.display='none';
    listSection.style.display='block';
});

addNew.addEventListener('click', ()=>{
    addSection.style.display='block';
    contactSection.style.display='none';
    listSection.style.display='none';
})

contactPage.addEventListener('click', ()=>{
    addSection.style.display='none';
    contactSection.style.display='block';
    listSection.style.display='none';
})

