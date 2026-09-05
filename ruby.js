(() => {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const marker = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  function html(input){
    const s=String(input ?? ''); let out='', last=0, m;
    marker.lastIndex=0;
    while((m=marker.exec(s))){
      out += esc(s.slice(last,m.index));
      out += `<ruby>${esc(m[1])}<rt>${esc(m[2])}</rt></ruby>`;
      last=marker.lastIndex;
    }
    return out + esc(s.slice(last));
  }
  function plain(input){ return String(input ?? '').replace(marker,'$1'); }
  function set(el,input){ el.innerHTML=html(input); }
  function staticMarkers(root=document.body){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; let n;
    while((n=walker.nextNode())) if(n.nodeValue.includes('[[')) nodes.push(n);
    nodes.forEach(node=>{
      const span=document.createElement('span'); span.innerHTML=html(node.nodeValue);
      node.replaceWith(...span.childNodes);
    });
  }
  window.SSTRuby={html,plain,set,staticMarkers};
})();
