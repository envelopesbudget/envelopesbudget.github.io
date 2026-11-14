const search=document.querySelector('#kb-search');
const toc=document.querySelector('.kb-toc');
if(toc){const wide=matchMedia('(min-width:901px)');const sync=()=>{toc.open=wide.matches;};sync();wide.addEventListener('change',sync);}
if(search){
 const lang=document.body.dataset.kbLang||document.documentElement.lang,cards=[...document.querySelectorAll('[data-kb-card]')],status=document.querySelector('#kb-status');
 let corpus=null,request=0;
 const normalize=s=>s.normalize('NFKC').toLocaleLowerCase(lang).replaceAll('ё','е');
 const fallback=Object.fromEntries(cards.map(c=>[c.dataset.slug,c.textContent]));
 const loaded=fetch(`/assets/kb/${lang}/search.json`).then(r=>{if(!r.ok)throw Error(r.status);return r.json();}).then(data=>{corpus=data;}).catch(()=>{});
 search.addEventListener('input',async()=>{const current=++request;await loaded;if(current!==request)return;const terms=normalize(search.value).trim().split(/\s+/).filter(Boolean);let count=0;for(const card of cards){const text=normalize((corpus??fallback)[card.dataset.slug]);card.hidden=!terms.every(term=>text.includes(term));if(!card.hidden)count++;}for(const group of document.querySelectorAll('[data-kb-group]'))group.hidden=![...group.querySelectorAll('[data-kb-card]')].some(c=>!c.hidden);document.querySelector('[data-kb-empty]').hidden=count!==0;status.textContent=terms.length?`${document.body.dataset.kbFound}: ${count}`:'';});
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

// Reflow the two number rails after image loading and resizing. Leader lines stay
// outside the image and point to the original row even when badges need spacing.
const annotated=[...document.querySelectorAll('.kb-shot-image')].filter(s=>s.querySelector('.kb-marker'));
function layoutMarkers(frame){
 const width=frame.clientWidth,height=frame.clientHeight;if(!width||!height)return;
 let svg=frame.querySelector('.kb-marker-lines');
 if(!svg){svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('kb-marker-lines');svg.setAttribute('aria-hidden','true');frame.append(svg);}
 svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.replaceChildren();
 for(const side of ['left','right']){
  const markers=[...frame.querySelectorAll(`[data-marker-side="${side}"]`)].sort((a,b)=>+a.dataset.markerY-+b.dataset.markerY);
  const gap=26,positions=[];
  for(const [i,m] of markers.entries())positions.push(Math.max(11,+m.dataset.markerY*height,i?positions[i-1]+gap:11));
  if(positions.length&&positions.at(-1)>height-11){positions[positions.length-1]=height-11;for(let i=positions.length-2;i>=0;i--)positions[i]=Math.min(positions[i],positions[i+1]-gap);}
  for(const [i,m] of markers.entries()){
   const y=positions[i],target=+m.dataset.markerY*height;m.style.top=y+'px';
   const path=document.createElementNS(svg.namespaceURI,'path'),from=side==='left'?-5:width+5,to=side==='left'?0:width;
   path.setAttribute('d',`M ${from} ${y} L ${to} ${target}`);svg.append(path);
  }
 }
}
const markerObserver=new ResizeObserver(entries=>entries.forEach(e=>layoutMarkers(e.target)));
for(const frame of annotated){markerObserver.observe(frame);frame.querySelector('img').addEventListener('load',()=>layoutMarkers(frame));layoutMarkers(frame);}
