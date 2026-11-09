(() => {
  const locale=document.documentElement.lang;
  const messages=JSON.parse(document.querySelector('#demo-copy')?.textContent||'{}').messages||{};
  const tr=(ru,en,values=[])=> (locale==='ru'?ru:locale==='en'?en:messages[en]??en).replace(/\{(\d+)\}/g,(_,i)=>values[i]);
  const demo = document.querySelector('[data-demo]');
  const daily=document.querySelector('.daily-explore');
  if(daily){
    const copy=JSON.parse(document.getElementById('daily-copy').textContent);
    const tabs=[...daily.querySelectorAll('[data-daily-tab]')];
    const deviceSwitch=daily.querySelector('.device-switch');
    const tabletTabs=[...daily.querySelectorAll('[data-tablet-tab]')];
    function selectTablet(index){
      tabletTabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
      daily.querySelectorAll('[id^="tablet-panel-"]').forEach((panel,i)=>panel.hidden=i!==index);
    }
    tabletTabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>selectTablet(i));
      tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(i+1)%tabletTabs.length;if(event.key==='ArrowLeft')next=(i+tabletTabs.length-1)%tabletTabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabletTabs.length-1;if(next!==undefined){event.preventDefault();selectTablet(next);tabletTabs[next].focus();}});
    });
    const story=daily.querySelector('.explore-copy>p:not(.eyebrow)');
    const phoneStory=story.textContent;
    const eyebrow=daily.querySelector('.explore-copy>.eyebrow');
    const phoneEyebrow=eyebrow.textContent;
    deviceSwitch.hidden=false;
    deviceSwitch.querySelectorAll('[data-device]').forEach(button=>button.addEventListener('click',()=>{
      const tablet=button.dataset.device==='tablet';
      daily.dataset.device=button.dataset.device;
      eyebrow.textContent=tablet?(tr('02 / На большом экране.','02 / On a bigger screen.')):phoneEyebrow;
      deviceSwitch.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
      for(const selector of ['.phone-controls','.daily-device-viewport','.phone-caption'])daily.querySelector(selector).hidden=tablet;
      for(const selector of ['.tablet-controls','.tablet-gallery'])daily.querySelector(selector).hidden=!tablet;
      story.textContent=tablet?(tr('Больше места для вашего бюджета. Обзор, категории и структура доходов — на настоящих экранах планшетной версии.','More room for your budget. Explore the overview, categories and income structure on actual tablet screens.')):phoneStory;
    }));
    function selectDaily(index){
      tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===(index===3?0:index)?0:-1;});
      daily.querySelectorAll('[id^="daily-panel-"]').forEach((panel,i)=>panel.hidden=i!==index);
      daily.querySelector('[data-daily-title]').textContent=copy.titles[index];
      daily.querySelector('[data-daily-description]').textContent=copy.descriptions[index]||(tr('Остаток на карте после записанных расходов.','Card balance after recorded expenses.'));
      daily.querySelectorAll('[data-daily-switch]').forEach(button=>{const active=Number(button.dataset.dailySwitch)===index;button.classList.toggle('selected',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
      daily.querySelector('.app-phone-scroll').scrollTop=0;
    }
    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>selectDaily(i));
      tab.addEventListener('keydown',event=>{let index;if(['ArrowRight','ArrowDown'].includes(event.key))index=(i+1)%tabs.length;if(['ArrowLeft','ArrowUp'].includes(event.key))index=(i+tabs.length-1)%tabs.length;if(event.key==='Home')index=0;if(event.key==='End')index=tabs.length-1;if(index!==undefined){event.preventDefault();selectDaily(index);tabs[index].focus();}});
    });
    daily.querySelectorAll('[data-daily-switch]').forEach(button=>button.addEventListener('click',()=>selectDaily(Number(button.dataset.dailySwitch))));
  }
  function renderDaily({assigned,recorded,expenses,balances,spent}){
    if(!daily)return;
    const format=value=>new Intl.NumberFormat(locale,{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
    const totals={left:2000-spent,spent,available:assigned?0:2000};
    daily.querySelectorAll('[data-daily-value]').forEach(el=>el.textContent=format(totals[el.dataset.dailyValue]));
    daily.querySelectorAll('[data-daily-balance]').forEach((el,i)=>el.textContent=format(balances[i]));
    const names=[...demo.querySelectorAll('.envelope-paper>span:first-child')].map(el=>el.textContent);
    const categorySpent=[0,0,0];recorded.forEach(i=>categorySpent[expenses[i].category]+=expenses[i].amount);
    daily.querySelectorAll('[data-daily-category]').forEach((el,i)=>el.textContent=format(categorySpent[i]));
    daily.querySelectorAll('[data-daily-percent]').forEach((el,i)=>el.textContent=(spent?Math.round(categorySpent[i]/spent*100):0)+'%');
    const a=spent?categorySpent[0]/spent*100:0,b=spent?(categorySpent[0]+categorySpent[1])/spent*100:0;
    daily.querySelector('[data-daily-donut]').style.background=spent?`conic-gradient(#3988df 0% ${a}%,#388440 ${a}% ${b}%,#ce5589 ${b}% 100%)`:'#e9e0d2';
    const list=daily.querySelector('[data-daily-transactions]');list.replaceChildren();
    for(const index of [...recorded].reverse()){
      const expense=expenses[index],row=document.getElementById('daily-txn-template').content.firstElementChild.cloneNode(true);
      row.querySelector('[data-txn-label]').textContent=expense.label;
      row.querySelector('[data-txn-amount]').textContent='−'+format(expense.amount);
      row.querySelector('[data-txn-category]').textContent=names[expense.category];
      list.append(row);
    }
    daily.querySelector('[data-daily-empty]').hidden=recorded.length>0;
    daily.querySelector('[data-daily-date]').hidden=recorded.length===0;
    const dayTotal=daily.querySelector('[data-daily-day-total]');
    dayTotal.textContent=(spent?'−':'')+format(spent);
    dayTotal.title=dayTotal.textContent;
    dayTotal.setAttribute('aria-label',`${tr('Итог дня','Day total')}: ${dayTotal.textContent}`);
    const latest=expenses[recorded.at(-1)];
    daily.querySelector('[data-daily-recent]').textContent=latest?`${latest.label} · −${format(latest.amount)}`:tr('Пока нет расходов','No spending yet');
    daily.querySelector('[data-daily-context]').textContent=recorded.length?(tr("Записано расходов: {0} из 5. Осталось {1}.","Expenses recorded: {0} of 5. {1} left.",[recorded.length,format(2000-spent)])):assigned?(tr('Деньги распределены. Запишите покупку выше — и она появится здесь.','Money assigned. Record a purchase above and see it here.')):(tr('Начните с распределения $2 000 в примере выше. Все три экрана обновятся вместе с вашим бюджетом.','Start by assigning $2,000 in the example above. All three screens update with your budget.'));
  }
  if (demo) {
    const copy=JSON.parse(document.querySelector('#demo-copy').textContent);
    const format=value=>new Intl.NumberFormat(copy.locale,{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value);
    const expenses=[{label:tr('Продукты','Groceries'),amount:60,category:1},{label:tr('Аренда','Rent'),amount:800,category:0},{label:tr('Кафе','Coffee & lunch'),amount:35,category:2},{label:tr('Продукты на неделю','Weekly groceries'),amount:95,category:1},{label:tr('Коммунальные услуги','Utilities'),amount:120,category:0}];
    let assigned=false;const recorded=[];
    const spend=demo.querySelector('[data-spend]');spend.remove();
    const panel=document.createElement('div');panel.className='spending-workbench';panel.hidden=true;
    const choices=document.createElement('div');choices.className='expense-choices';
    const heading=document.createElement('h3');heading.textContent=tr('Теперь немного жизни.','Now, a little everyday life.');
    const hint=document.createElement('p');hint.textContent=tr('Записывайте покупки в любом порядке. Каждая уменьшает остаток своего конверта.','Record these expenses in any order. Each one comes out of its own envelope.');
    const ledger=document.createElement('div');ledger.className='expense-ledger';
    const ledgerHeading=document.createElement('h3');ledgerHeading.textContent=tr('Ваши расходы','Your spending');
    const list=document.createElement('ol');list.className='ledger-rows';
    const empty=document.createElement('p');empty.className='ledger-empty';empty.textContent=tr('Здесь появится первая запись.','Your first entry will appear here.');
    const total=document.createElement('div');total.className='ledger-total';
    const totalLabel=document.createElement('span');totalLabel.textContent=tr('Всего потрачено','Total spent');
    const totalValue=document.createElement('strong');total.append(totalLabel,totalValue);
    ledger.append(ledgerHeading,empty,list,total);
    const controls=document.createElement('div');controls.append(heading,hint,choices);panel.append(controls,ledger);
    demo.querySelector('.demo-bottom').after(panel);
    const buttons=expenses.map((expense,index)=>{const button=document.createElement('button');button.className='expense-choice';const label=document.createElement('span');label.textContent=expense.label;const amount=document.createElement('strong');amount.textContent='−'+format(expense.amount);button.append(label,amount);button.addEventListener('click',()=>{if(!assigned||recorded.includes(index))return;recorded.push(index);render();const next=buttons.find(x=>!x.disabled);(next||demo.querySelector('[data-reset]')).focus({preventScroll:true});});choices.append(button);return button;});
    function render(){const balances=assigned?[1200,500,300]:[0,0,0];for(const index of recorded)balances[expenses[index].category]-=expenses[index].amount;
      demo.querySelectorAll('[data-money]').forEach((el,index)=>el.textContent=format(balances[index]));
      demo.querySelector('[data-available]').textContent=format(assigned?0:2000);
      demo.querySelector('[data-assign]').hidden=assigned;panel.hidden=!assigned;demo.dataset.state=assigned?'1':'0';
      const spent=recorded.reduce((sum,index)=>sum+expenses[index].amount,0);
      renderDaily({assigned,recorded,expenses,balances,spent});
      const phone=demo.querySelector('.budget-phone');
      if(phone){
        const phoneFormat=value=>new Intl.NumberFormat(copy.locale,{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
        phone.querySelector('[data-phone-available]').textContent=assigned?(tr('✓ Всё распределено','✓ All assigned')):phoneFormat(2000);
        phone.querySelector('[data-phone-group]').textContent=phoneFormat(assigned?2000-spent:0);
        phone.querySelector('[data-phone-count]').textContent=assigned?'3':'0';
        const plans=[1200,500,300];
        balances.forEach((balance,index)=>{
          const paid=assigned?plans[index]-balance:0;
          phone.querySelector(`[data-phone-balance="${index}"]`).textContent=phoneFormat(balance);
          phone.querySelector(`[data-phone-spent="${index}"]`).textContent=tr("Потрачено {0} из {1}","{0} of {1} spent",[phoneFormat(paid),phoneFormat(assigned?plans[index]:0)]);
          phone.querySelector(`[data-phone-track="${index}"]`).style.width=(assigned?paid/plans[index]*100:0)+'%';
          phone.querySelector(`[data-phone-row="${index}"]`).classList.toggle('has-budget',assigned);
        });
      }
      const summarySpent=demo.querySelector('[data-spent-total]');
      if(summarySpent){summarySpent.textContent=format(spent);demo.querySelector('[data-left-total]').textContent=format(2000-spent);demo.querySelector('[data-starting-total]').textContent=format(2000);
        demo.querySelectorAll('[data-practice-step]').forEach((item,index)=>{if(index===(!assigned?0:recorded.length===5?2:1))item.setAttribute('aria-current','step');else item.removeAttribute('aria-current');});
        demo.querySelector('[data-complete]').hidden=recorded.length!==5;
      }
      demo.querySelector('[data-status]').textContent=!assigned?copy.start:!recorded.length?copy.assigned:tr("Записано {0} из 5 расходов. Осталось в конвертах: {1}.","{0} of 5 expenses recorded. {1} left in your envelopes.",[recorded.length,format(2000-spent)]);
      const feedback=demo.querySelector('[data-practice-feedback]');
      if(feedback){
        const latest=expenses[recorded.at(-1)];feedback.replaceChildren();
        if(latest){
          const purchase=document.createElement('span');purchase.className='feedback-purchase';
          const label=document.createElement('span');label.textContent=(tr('Записано: ','Recorded: '))+latest.label;
          const amount=document.createElement('strong');amount.textContent='−'+format(latest.amount);purchase.append(label,amount);
          const balance=document.createElement('span');balance.className='feedback-balance';
          const category=demo.querySelectorAll('.envelope-paper>span:first-child')[latest.category].textContent;
          balance.textContent=tr("В конверте «{0}» осталось {1}","{0}: {1} left",[category,format(balances[latest.category])]);
          feedback.append(purchase,balance);
        }else feedback.textContent=assigned?(tr('Распределено. Выберите расход ниже.','Assigned. Choose an expense below.')):(tr('Распределите деньги по конвертам.','Give your money a job.'));
      }
      empty.hidden=recorded.length>0;totalValue.textContent=format(spent);list.replaceChildren();
      for(const index of recorded){const expense=expenses[index],row=document.createElement('li'),name=document.createElement('span'),category=document.createElement('small'),value=document.createElement('strong');name.textContent=expense.label;category.textContent=demo.querySelectorAll('.envelope-paper>span:first-child')[expense.category].textContent;name.append(category);value.textContent='−'+format(expense.amount);row.append(name,value);list.append(row);}
      buttons.forEach((button,index)=>{button.disabled=recorded.includes(index);button.setAttribute('aria-label',`${expenses[index].label}, ${format(expenses[index].amount)}${button.disabled?(tr(', записано',', recorded')):''}`);});
    }
    demo.querySelector('[data-assign]').addEventListener('click',()=>{assigned=true;render();buttons[0].focus({preventScroll:true});});
    demo.querySelector('[data-reset]').addEventListener('click',()=>{assigned=false;recorded.length=0;render();demo.querySelector('[data-assign]').focus({preventScroll:true});});render();
  }
  const appearance=document.getElementById('appearance');
  if(appearance){
    const palettes=JSON.parse(document.getElementById('appearance-palettes').textContent);
    appearance.querySelectorAll('button[data-preview-theme]').forEach(button=>button.addEventListener('click',()=>{
      appearance.querySelector('.appearance-preview').dataset.previewTheme=button.dataset.previewTheme;
      appearance.querySelectorAll('button[data-preview-theme]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
    }));
    const defaults={shape:'soft',icons:'standard',font:'Roboto',flagShape:'wave',amountColors:'plain',flagFill:false};
    const state={style:'classic',...defaults};
    function renderAppearance(){
      appearance.querySelectorAll('[data-style]').forEach(button=>{if(button.tagName==='BUTTON')button.setAttribute('aria-pressed',String(button.dataset.style===state.style));});
      appearance.querySelectorAll('.appearance-phone').forEach(phone=>{
        const palette=palettes[state.style][phone.dataset.theme];
        const names={page:'page',card:'card',ink:'ink',muted:'muted',nav:'nav',accent:'accent',onAccent:'on-accent',chip:'chip',chipInk:'chip-ink',positive:'positive',negative:'negative',navLabel:'nav-label',navMuted:'nav-muted'};
        Object.entries(names).forEach(([key,name])=>phone.style.setProperty('--app-'+name,palette[key]));
        phone.style.setProperty('--app-font',`"App ${state.font}"`);
        for(const key of ['shape','icons','flagShape','amountColors','flagFill','style'])phone.dataset[key]=String(state[key]);
      });
    }
    appearance.querySelectorAll('button[data-style]').forEach(button=>button.addEventListener('click',()=>{state.style=button.dataset.style;renderAppearance();}));
    appearance.querySelectorAll('[data-look]').forEach(control=>control.addEventListener('change',()=>{state[control.dataset.look]=control.type==='checkbox'?control.checked:control.value;renderAppearance();}));
    appearance.querySelector('[data-look-reset]').addEventListener('click',()=>{Object.assign(state,{style:'classic',...defaults});appearance.querySelectorAll('[data-look]').forEach(control=>{if(control.type==='checkbox')control.checked=state[control.dataset.look];else control.value=state[control.dataset.look];});renderAppearance();});
    renderAppearance();
  }
  const tabs=[...document.querySelectorAll('[data-tab]')];
  function select(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
  tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowDown'||e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();select(tabs[next]);tabs[next].focus();}});});
  const languages=document.querySelector('.languages');
  const featureToggle=document.querySelector('[data-feature-toggle]');
  if(featureToggle){
    const entries=[...document.querySelectorAll('.feature-entry')];
    const update=()=>{const expanded=entries.every(entry=>entry.open);featureToggle.firstChild.textContent=(expanded?featureToggle.dataset.collapse:featureToggle.dataset.expand)+' ';featureToggle.setAttribute('aria-expanded',String(expanded));featureToggle.querySelector('span').textContent=expanded?'−':'+';};
    featureToggle.hidden=false;
    featureToggle.addEventListener('click',()=>{const open=!entries.every(entry=>entry.open);entries.forEach(entry=>entry.open=open);update();});
    entries.forEach(entry=>entry.addEventListener('toggle',update));update();
  }
  document.addEventListener('click',e=>{if(languages&&!languages.contains(e.target))languages.open=false;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&languages?.open){languages.open=false;languages.querySelector('summary').focus();}});
})();
