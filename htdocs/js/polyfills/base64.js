(function(d){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=String.fromCharCode,b=(function(){try{document.createElement("$")}catch(e){return e}}());d.btoa||(d.btoa=function(f){var p,n,o,m,k,h,j,e=0,g=f.length,l=Math.max,q="";while(e<g){p=f.charCodeAt(e++)||0;n=f.charCodeAt(e++)||0;j=f.charCodeAt(e++)||0;if(l(p,n,j)>255){throw b}o=(p>>2)&63;m=((p&3)<<4)|((n>>4)&15);k=((n&15)<<2)|((j>>6)&3);h=j&63;if(!n){k=h=64}else{if(!j){h=64}}q+=a.charAt(o)+a.charAt(m)+a.charAt(k)+a.charAt(h)}return q});d.atob||(d.atob=function(f){f=f.replace(/=+$/,"");var p,n,o,m,l,h,k,e=0,g=f.length,j=[];if(g%4===1){throw b}while(e<g){o=a.indexOf(f.charAt(e++));m=a.indexOf(f.charAt(e++));l=a.indexOf(f.charAt(e++));h=a.indexOf(f.charAt(e++));p=((o&63)<<2)|((m>>4)&3);n=((m&15)<<4)|((l>>2)&15);k=((l&3)<<6)|(h&63);j.push(c(p));n&&j.push(c(n));k&&j.push(c(k))}return j.join("")})}(this));
