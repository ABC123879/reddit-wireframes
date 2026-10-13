// Index page: highlight the card you last opened (stored in sessionStorage)
const last=sessionStorage.getItem('lastLab');
document.querySelectorAll('.map .card').forEach(c=>{
  if(c.getAttribute('href')===last) c.style.outline='2px solid #555';
  c.addEventListener('click',()=>sessionStorage.setItem('lastLab',c.getAttribute('href')));
});
