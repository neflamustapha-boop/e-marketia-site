(function(){
  var root=document.documentElement,key='em_lang',lang;
  try{lang=localStorage.getItem(key)}catch(e){}
  if(lang!=='fr'&&lang!=='en'){lang=(navigator.language||'fr').toLowerCase().indexOf('fr')===0?'fr':'en'}
  function apply(l){root.setAttribute('data-lang',l);root.lang=l;
    var b=document.querySelectorAll('.lang-switch');for(var i=0;i<b.length;i++){b[i].textContent=l==='fr'?'EN':'FR';b[i].setAttribute('aria-label',l==='fr'?'Switch to English':'Passer en français')}}
  apply(lang);
  document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.lang-switch')){lang=lang==='fr'?'en':'fr';try{localStorage.setItem(key,lang)}catch(e){}apply(lang)}});
  document.addEventListener('DOMContentLoaded',function(){apply(lang)});
})();
