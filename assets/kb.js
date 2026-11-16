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
 document.querySelectorAll('[data-kb-zoom]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();opener=link;dialog.querySelector('.kb-zoom-content')?.remove();dialog.querySelector(':scope > img')?.remove();
 const content=document.createElement('div');content.className='kb-zoom-content';
 const figure=document.createElement('div');figure.className='kb-zoom-figure';
 const frame=link.querySelector('.kb-shot-image').cloneNode(true);frame.querySelector('img').loading='eager';figure.append(frame);content.append(figure);
 const explanation=link.closest('.kb-screen')?.querySelector('.kb-screen-text');
 if(explanation){const text=explanation.cloneNode(true);text.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));content.append(text);}
 dialog.append(content);dialog.showModal();dialog.scrollTop=0;markerObserver.observe(frame);layoutMarkers(frame);frame.querySelector('img').addEventListener('load',()=>layoutMarkers(frame),{once:true});}));
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{const frame=dialog.querySelector('.kb-shot-image');if(frame)markerObserver.unobserve(frame);opener?.focus();});
}
function revealHash(){if(!location.hash)return;const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(!target)return;let p=target.parentElement;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement;}}
addEventListener('hashchange',revealHash);revealHash();

// Resolve the visible text inside its semantic region, then keep the badge on
// that same row. Blank space on another row is never a placement candidate.
const annotated=[...document.querySelectorAll('.kb-shot-image')].filter(s=>s.querySelector('.kb-marker'));
function layoutMarkers(frame){
 const width=frame.clientWidth,height=frame.clientHeight,img=frame.querySelector('img');if(width<100||!height||!img.naturalWidth)return;
 const canvas=document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
 const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data,sx=canvas.width/width,sy=canvas.height/height;
 const light=(x,y)=>{const i=(y*canvas.width+x)*4;return (pixels[i]+pixels[i+1]+pixels[i+2])/3;};
 function contentBounds(m){
  const [l,t,r,b]=m.dataset.markerRect.split(',').map(Number);
  if(m.dataset.markerScan==='box')return {l:l*width,r:r*width,y:(t+b)/2*height,t:t*height};
  const x0=Math.max(0,Math.ceil(l*canvas.width)+2),x1=Math.min(canvas.width-1,Math.floor(r*canvas.width)-2);
  const y0=Math.max(0,Math.ceil(t*canvas.height)+2),y1=Math.min(canvas.height-1,Math.floor(b*canvas.height)-2);
  let background=0;for(let y=y0;y<=y1;y+=3)for(let x=x0;x<=x1;x+=3)background=Math.max(background,light(x,y));
  const neutral=['day','date-chip','period','month','date'].includes(m.dataset.markerKey);
  const ink=(x,y)=>{const i=(y*canvas.width+x)*4;return light(x,y)<Math.min(205,background-35)&&(!neutral||pixels[i+2]<=pixels[i]+15);};
  const bands=[],textRows=new Set();let band;
  for(let y=y0;y<=y1;y++){
   let count=0;for(let x=x0;x<=x1;x++)if(ink(x,y))count++;
   if(count>=Math.max(2,(x1-x0)*.005)&&count<(x1-x0)*.85){textRows.add(y);if(!band||y-band.b>3){band={t:y,b:y};bands.push(band);}else band.b=y;}
  }
  if(!bands.length)return {l:l*width,r:r*width,y:(t+b)/2*height,t:t*height};
  const chosen=m.dataset.markerScan==='all'?{t:bands[0].t,b:bands.at(-1).b}:m.dataset.markerScan==='last'?bands.at(-1):m.dataset.markerScan==='second'?(bands[1]??bands[0]):bands[0];
  let left=x1,right=x0;
  for(let y=chosen.t;y<=chosen.b;y++)for(let x=x0;x<=x1;x++)if(textRows.has(y)&&ink(x,y)){left=Math.min(left,x);right=Math.max(right,x);}
  return {l:left/sx,r:right/sx,y:(chosen.t+chosen.b)/2/sy,t:chosen.t/sy};
 }
 const empty=(x,y,radius)=>{
  // Horizontal dividers may pass behind a badge; letters and icons contain
  // variation along the row and must remain uncovered.
  for(let dy=-radius;dy<=radius;dy+=1){
   let lo=[255,255,255],hi=[0,0,0];
   for(let dx=-radius;dx<=radius;dx+=1){
    if(dx*dx+dy*dy>(radius+1)**2)continue;
    const px=Math.floor((x+dx)*sx),py=Math.floor((y+dy)*sy);
    if(px<0||px>=canvas.width||py<0||py>=canvas.height)continue;
    const i=(py*canvas.width+px)*4;
    for(let c=0;c<3;c++){lo[c]=Math.min(lo[c],pixels[i+c]);hi[c]=Math.max(hi[c],pixels[i+c]);}
   }
   if(hi.some((v,c)=>v-lo[c]>=40))return false;
  }
  return true;
 };
 frame.querySelector('.kb-marker-lines')?.remove();
 const placed=[];
 for(const m of frame.querySelectorAll('.kb-marker')){
  const target=contentBounds(m),preferred=m.dataset.markerPrefer;
  const radius=10;let position;
  const toolbar=width<260&&m.dataset.markerMenu!=='true'&&['menu','settings','sync','search','payees-tags'].includes(m.dataset.markerKey)&&target.y<height*.08;
  if(toolbar)position={x:(target.l+target.r)/2,y:target.t-radius-2,r:radius};
  const free=(x,y,r)=>placed.every(p=>Math.abs(p.x-x)>=p.r+r+2||Math.abs(p.y-y)>=p.r+r+2);
  for(const r of position?[]:[radius]){
   for(const side of m.dataset.markerMenu==='true'?[preferred]:[preferred,preferred==='left'?'right':'left']){
    for(let offset=0;offset<=48;offset+=3){
     const x=side==='left'?target.l-r-2-offset:target.r+r+2+offset;
     if(x<-16||x>width+16)continue;
     if(free(x,target.y,r)&&empty(x,target.y,r+1)){position={x,y:target.y,r};break;}
    }
    if(position)break;
   }
  }
  if(!position){
   for(const x of [-16,width+16])if(free(x,target.y,radius)){position={x,y:target.y,r:radius};break;}
  }
  if(!position)throw Error('No horizontal marker space: '+img.src+' '+m.dataset.markerKey+' '+width+'x'+height+' '+JSON.stringify(target));
  placed.push(position);m.style.left=position.x+'px';m.style.right='auto';m.style.top=position.y+'px';
  m.style.width=m.style.minWidth=m.style.height=position.r*2+'px';m.style.fontSize='12px';
  m.dataset.markerPlacement=toolbar?'above':'adjacent';m.dataset.markerLine='false';
  m.dataset.markerRow=position.y;m.dataset.markerLabelLeft=target.l;m.dataset.markerLabelRight=target.r;
 }
}
const markerObserver=new ResizeObserver(entries=>entries.forEach(e=>layoutMarkers(e.target)));
for(const frame of annotated){markerObserver.observe(frame);frame.querySelector('img').addEventListener('load',()=>layoutMarkers(frame));layoutMarkers(frame);}
