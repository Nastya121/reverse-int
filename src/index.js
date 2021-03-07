module.exports = function reverse (n) 
 {
   if (n<0){n*=-1;}
  let s=String(n);   
  let sh = s.split('');
  let p=sh.reverse();
  let j=p.join('');
return j;
}
