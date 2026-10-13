// Lab script: Communities
// Tabs: click to switch the active pill
document.querySelectorAll('.tabs').forEach(group=>{
  group.querySelectorAll('a').forEach(tab=>{
    tab.addEventListener('click',()=>{
      group.querySelectorAll('a').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
// Join / Joined toggle
document.querySelectorAll('.join').forEach(b=>b.addEventListener('click',()=>{
  const on=b.classList.toggle('joined');
  b.textContent=on?'Joined':'Join';
}));
