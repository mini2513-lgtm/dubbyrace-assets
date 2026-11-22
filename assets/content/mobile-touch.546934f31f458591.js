(() => {
  const viewport=window.visualViewport;
  if(viewport && document.body?.classList.contains('world-page')){
    // On iOS the toolbar can resize the visible page before CSS viewport units update.
    const syncWorldSize=()=>{
      if(viewport.scale!==1 || viewport.width<=0 || viewport.height<=0)return;
      document.body.style.setProperty('--world-view-width',Math.ceil(viewport.offsetLeft+viewport.width)+'px');
      document.body.style.setProperty('--world-view-height',Math.ceil(viewport.offsetTop+viewport.height)+'px');
    };
    viewport.addEventListener('resize',syncWorldSize);
    viewport.addEventListener('scroll',syncWorldSize);
    window.addEventListener('resize',syncWorldSize);
    window.addEventListener('pageshow',syncWorldSize);
    syncWorldSize();
  }
  const textEntry='input:not([type]),input:is([type=text],[type=password],[type=search],[type=email],[type=tel],[type=url],[type=number]),textarea,[contenteditable]:not([contenteditable=false])';
  const style=document.createElement('style');
  style.textContent=`
    :where(*) {
      -webkit-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      touch-action: pan-x pan-y;
    }
    :is(${textEntry}), :is(${textEntry}) :where(*) {
      -webkit-user-select: text;
      user-select: text;
      -webkit-touch-callout: default;
    }
    @media (any-pointer: coarse) {
      :is(${textEntry}), select { font-size: max(16px, 1em) !important; }
    }
  `;
  document.head.append(style);

  const isTextEntry=target=>target.closest?.(textEntry);
  document.addEventListener('contextmenu',event=>{
    const touch=event.pointerType?event.pointerType==='touch':matchMedia('(any-pointer: coarse)').matches;
    if(touch&&!isTextEntry(event.target))event.preventDefault();
  });

  // iOS can ignore the viewport zoom limits. Keep pointer events for the game camera.
  if(!('ongesturestart' in window||/iPhone|iPad|iPod/.test(navigator.platform)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)))return;
  for(const type of ['gesturestart','gesturechange','gestureend']){
    document.addEventListener(type,event=>event.preventDefault(),{passive:false});
  }

  let start,lastTap;
  const distance=(a,b)=>Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
  document.addEventListener('touchstart',event=>{
    start=event.touches.length===1&&!isTextEntry(event.target)?event.touches[0]:null;
    if(!start)lastTap=null;
  },{passive:true});
  document.addEventListener('touchmove',event=>{
    if(event.touches.length>1)event.preventDefault();
    if(start&&(event.touches.length>1||distance(start,event.touches[0])>12))start=lastTap=null;
  },{passive:false});
  document.addEventListener('touchcancel',()=>{start=lastTap=null;},{passive:true});
  document.addEventListener('touchend',event=>{
    const tap=event.changedTouches[0],wasTap=start&&tap&&distance(start,tap)<=12;
    start=null;
    if(!wasTap||event.defaultPrevented||!event.cancelable){lastTap=null;return;}
    if(lastTap&&event.timeStamp-lastTap.time<350&&distance(lastTap.tap,tap)<24){
      event.preventDefault();
      // Cancelling the second touchend also cancels its click on iOS.
      event.target.closest?.('button,a,summary,label,input,select,[role=button]')?.click();
    }
    lastTap={tap,time:event.timeStamp};
  },{passive:false});
})();
