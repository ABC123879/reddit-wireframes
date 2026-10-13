// Lab script: Settings
// Tabs: click to switch the active pill
document.querySelectorAll('.tabs').forEach(group=>{
  group.querySelectorAll('a').forEach(tab=>{
    tab.addEventListener('click',()=>{
      group.querySelectorAll('a').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
// Toggle switches
document.querySelectorAll('.tgl').forEach(t=>t.addEventListener('click',()=>t.classList.toggle('on')));
