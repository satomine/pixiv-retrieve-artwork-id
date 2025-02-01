[...document.querySelectorAll('span[to]:not([data-gtm-value])')].forEach(e=>{
  let a=e.getAttribute('to').split('/');
  let i=a[a.length-1];

  let s=document.createElement('span');
  s.innerText=i;

  /*Here-you-can-edit-text-to-be-copied*/
  let c=`${i}`;

  let b=document.createElement('button');
  b.setAttribute('type','button');
  b.innerText='Copy';
  b.onclick=()=>{navigator.clipboard.writeText(c)};

  e.innerText='';
  e.appendChild(s);
  e.appendChild(b);
});

void(0);
