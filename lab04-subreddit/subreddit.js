// Lab script: Subreddit
// Tabs: click to switch the active pill
document.querySelectorAll('.tabs').forEach(group=>{
  group.querySelectorAll('a').forEach(tab=>{
    tab.addEventListener('click',()=>{
      group.querySelectorAll('a').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
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
// Join / Joined toggle
document.querySelectorAll('.join').forEach(b=>b.addEventListener('click',()=>{
  const on=b.classList.toggle('joined');
  b.textContent=on?'Joined':'Join';
}));
