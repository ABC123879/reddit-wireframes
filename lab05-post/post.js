// Lab script: Post detail
// Upvote / downvote toggle
document.querySelectorAll('.vote').forEach(v=>{
  const up=v.querySelector('.up'),down=v.querySelector('.down');
  up.addEventListener('click',()=>{up.classList.toggle('on');down.classList.remove('on');});
  down.addEventListener('click',()=>{down.classList.toggle('on');up.classList.remove('on');});
});
// Save toggle
document.querySelectorAll('.save').forEach(s=>s.addEventListener('click',()=>{
  s.textContent=s.textContent.includes('Saved')?'★ Save':'★ Saved';
}));
// Add a placeholder comment when "Comment" is clicked
document.getElementById('cbtn').addEventListener('click',()=>{
  const d=document.createElement('div');d.className='cmt';
  d.innerHTML='<div class="row"><div class="img circle xs"></div><small>u/you • just now</small></div><div class="ln"></div><div class="ln w50"></div>';
  document.getElementById('comments').prepend(d);
});
