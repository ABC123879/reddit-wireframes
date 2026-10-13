// Lab script: Messages
// Select a chat
document.querySelectorAll('.chatitem').forEach(c=>c.addEventListener('click',e=>{
  e.preventDefault();
  document.querySelectorAll('.chatitem').forEach(x=>x.classList.remove('active'));
  c.classList.add('active');
}));
// Send adds a placeholder bubble
document.getElementById('send').addEventListener('click',()=>{
  const b=document.createElement('div');b.className='bubble me';b.innerHTML='<div class="ln"></div>';
  document.getElementById('thread').appendChild(b);
});
