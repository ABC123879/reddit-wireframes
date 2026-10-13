// Lab script: Notifications
// Tabs: click to switch the active pill
document.querySelectorAll('.tabs').forEach(group=>{
  group.querySelectorAll('a').forEach(tab=>{
    tab.addEventListener('click',()=>{
      group.querySelectorAll('a').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
// Click a notification to mark it read
document.querySelectorAll('.notif').forEach(n=>n.addEventListener('click',()=>n.classList.add('read')));
document.getElementById('markall').addEventListener('click',()=>document.querySelectorAll('.notif').forEach(n=>n.classList.add('read')));
