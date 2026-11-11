const search=document.querySelector('#kb-search');
const toc=document.querySelector('.kb-toc');
if(toc){const wide=matchMedia('(min-width:901px)');const sync=()=>{toc.open=wide.matches;};sync();wide.addEventListener('change',sync);}
if(search){
 const lang=document.documentElement.lang,cards=[...document.querySelectorAll('[data-kb-card]')],status=document.querySelector('#kb-status');
 let corpus=null,request=0;
 const normalize=s=>s.normalize('NFKC').toLocaleLowerCase(lang).replaceAll('ё','е');
 const fallback=Object.fromEntries(cards.map(c=>[c.dataset.slug,c.textContent]));
 const loaded=fetch(`/assets/kb/${lang}/search.json`).then(r=>{if(!r.ok)throw Error(r.status);return r.json();}).then(data=>{corpus=data;}).catch(()=>{});
 search.addEventListener('input',async()=>{const current=++request;await loaded;if(current!==request)return;const terms=normalize(search.value).trim().split(/\s+/).filter(Boolean);let count=0;for(const card of cards){const text=normalize((corpus??fallback)[card.dataset.slug]);card.hidden=!terms.every(term=>text.includes(term));if(!card.hidden)count++;}for(const group of document.querySelectorAll('[data-kb-group]'))group.hidden=![...group.querySelectorAll('[data-kb-card]')].some(c=>!c.hidden);document.querySelector('[data-kb-empty]').hidden=count!==0;status.textContent=terms.length?`${{ru:'Найдено',uk:'Знайдено',en:'Found'}[lang]}: ${count}`:'';});
}
const dialog=document.querySelector('.kb-lightbox');
if(dialog){
 let opener;
 document.querySelectorAll('[data-kb-zoom]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();opener=link;const img=dialog.querySelector('img');img.src=link.href;img.alt=link.querySelector('img').alt;dialog.showModal();}));
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>opener?.focus());
}
function revealHash(){if(!location.hash)return;const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(!target)return;let p=target.parentElement;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement;}}
addEventListener('hashchange',revealHash);revealHash();
