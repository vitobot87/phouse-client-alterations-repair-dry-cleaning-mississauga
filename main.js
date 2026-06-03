const root=document.documentElement;
const buttons=[...document.querySelectorAll('.theme-toggle')];
const mq=matchMedia('(prefers-color-scheme: dark)');
const states=['system','light','dark'];
const icons={system:'◐',light:'☼',dark:'☾'};
function resolved(t){return t==='system'?(mq.matches?'dark':'light'):t}
function apply(t){root.dataset.theme=t;root.classList.toggle('dark',resolved(t)==='dark');buttons.forEach(btn=>{btn.textContent=icons[t];btn.title=`Theme: ${t}`;btn.setAttribute('aria-label',`Theme: ${t}`)});localStorage.setItem('theme',t)}
apply(localStorage.getItem('theme')||'system');
buttons.forEach(btn=>btn.addEventListener('click',()=>apply(states[(states.indexOf(root.dataset.theme)+1)%states.length])));
mq.addEventListener?.('change',()=>{if(root.dataset.theme==='system')apply('system')});
