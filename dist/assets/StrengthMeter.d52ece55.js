var l=Object.defineProperty,n=Object.defineProperties,e=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,a=Math.pow,r=(n,e,t)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(l,n)=>{for(var e in n||(n={}))s.call(n,e)&&r(l,e,n[e]);if(t)for(var e of t(n))u.call(n,e)&&r(l,e,n[e]);return l},i=(l,t)=>n(l,e(t));import{k as c,ae as h,r as g,f as d,a6 as p,F as f,u as m,L as b,o as y,q as k,O as w,b3 as j,ai as M,Y as T,s as x,y as D,S}from"./vendor.c2cc062a.js";import{p as I,c as E}from"./index.7fd854bf.js";const O=(l,n)=>l.push.apply(l,n),v=(l,n)=>l.split("").map((l=>n[l]||l)).join(""),C=l=>l.sort(((l,n)=>l.i-n.i||l.j-n.j)),L=l=>{const n={};let e=1;return l.forEach((l=>{n[l]=e,e+=1})),n};var P={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},F={azerty:{0:["ç9",null,null,")°","pP","oO"],1:["²~",null,null,"é2","aA",null],2:["&1",null,null,'"3',"zZ","aA"],3:["é2",null,null,"'4","eE","zZ"],4:['"3',null,null,"(5","rR","eE"],5:["'4",null,null,"-6","tT","rR"],6:["(5",null,null,"è7","yY","tT"],7:["-6",null,null,"_8","uU","yY"],8:["è7",null,null,"ç9","iI","uU"],9:["_8",null,null,"à0","oO","iI"],"²":[null,null,null,"&1",null,null],"~":[null,null,null,"&1",null,null],"&":["²~",null,null,"é2","aA",null],"é":["&1",null,null,'"3',"zZ","aA"],'"':["pP",")°","+=","$£","ù%","mM"],"'":['"3',null,null,"(5","rR","eE"],"(":["'4",null,null,"-6","tT","rR"],"-":["(5",null,null,"è7","yY","tT"],"è":["-6",null,null,"_8","uU","yY"],_:["è7",null,null,"ç9","iI","uU"],"ç":["_8",null,null,"à0","oO","iI"],"à":["ç9",null,null,")°","pP","oO"],")":["à0",null,null,"+=",'^"',"pP"],"°":["à0",null,null,"+=",'^"',"pP"],"+":[")°",null,null,null,"$£",'^"'],"=":[")°",null,null,null,"$£",'^"'],a:[null,"&1","é2","zZ","qQ",null],A:[null,"&1","é2","zZ","qQ",null],z:["aA","é2",'"3',"eE","sS","qQ"],Z:["aA","é2",'"3',"eE","sS","qQ"],e:["zZ",'"3',"'4","rR","dD","sS"],E:["zZ",'"3',"'4","rR","dD","sS"],r:["eE","'4","(5","tT","fF","dD"],R:["eE","'4","(5","tT","fF","dD"],t:["rR","(5","-6","yY","gG","fF"],T:["rR","(5","-6","yY","gG","fF"],y:["tT","-6","è7","uU","hH","gG"],Y:["tT","-6","è7","uU","hH","gG"],u:["yY","è7","_8","iI","jJ","hH"],U:["yY","è7","_8","iI","jJ","hH"],i:["uU","_8","ç9","oO","kK","jJ"],I:["uU","_8","ç9","oO","kK","jJ"],o:["iI","ç9","à0","pP","lL","kK"],O:["iI","ç9","à0","pP","lL","kK"],p:["oO","à0",")°",'^"',"mM","lL"],P:["oO","à0",")°",'^"',"mM","lL"],"^":["pP",")°","+=","$£","ù%","mM"],$:['^"',"+=",null,null,"*µ","ù%"],"£":['^"',"+=",null,null,"*µ","ù%"],q:[null,"aA","zZ","sS","wW","<>"],Q:[null,"aA","zZ","sS","wW","<>"],s:["qQ","zZ","eE","dD","xX","wW"],S:["qQ","zZ","eE","dD","xX","wW"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],G:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],H:["gG","yY","uU","jJ","nN","bB"],j:["hH","uU","iI","kK",",?","nN"],J:["hH","uU","iI","kK",",?","nN"],k:["jJ","iI","oO","lL",";.",",?"],K:["jJ","iI","oO","lL",";.",",?"],l:["kK","oO","pP","mM",":/",";."],L:["kK","oO","pP","mM",":/",";."],m:["lL","pP",'^"',"ù%","!§",":/"],M:["lL","pP",'^"',"ù%","!§",":/"],"ù":["mM",'^"',"$£","*µ",null,"!§"],"%":["mM",'^"',"$£","*µ",null,"!§"],"*":["ù%","$£",null,null,null,null],"µ":["ù%","$£",null,null,null,null],"<":[null,null,"qQ","wW",null,null],">":[null,null,"qQ","wW",null,null],w:["<>","qQ","sS","xX",null,null],W:["<>","qQ","sS","xX",null,null],x:["wW","sS","dD","cC",null,null],X:["wW","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ",",?",null,null],N:["bB","hH","jJ",",?",null,null],",":["nN","jJ","kK",";.",null,null],"?":["nN","jJ","kK",";.",null,null],";":[",?","kK","lL",":/",null,null],".":[",?","kK","lL",":/",null,null],":":[";.","lL","mM","!§",null,null],"/":[";.","lL","mM","!§",null,null],"!":[":/","mM","ù%",null,null,null],"§":[":/","mM","ù%",null,null,null]},dvorak:{0:["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],"`":[null,null,null,"1!",null,null],"~":[null,null,null,"1!",null,null],"!":["`~",null,null,"2@","'\"",null],"@":["1!",null,null,"3#",",<","'\""],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"^":["5%",null,null,"7&","fF","yY"],"&":["6^",null,null,"8*","gG","fF"],"*":["7&",null,null,"9(","cC","gG"],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"[":["0)",null,null,"]}","/?","lL"],"{":["0)",null,null,"]}","/?","lL"],"]":["[{",null,null,null,"=+","/?"],"}":["[{",null,null,null,"=+","/?"],"'":[null,"1!","2@",",<","aA",null],'"':[null,"1!","2@",",<","aA",null],",":["'\"","2@","3#",".>","oO","aA"],"<":["'\"","2@","3#",".>","oO","aA"],".":[",<","3#","4$","pP","eE","oO"],">":[",<","3#","4$","pP","eE","oO"],p:[".>","4$","5%","yY","uU","eE"],P:[".>","4$","5%","yY","uU","eE"],y:["pP","5%","6^","fF","iI","uU"],Y:["pP","5%","6^","fF","iI","uU"],f:["yY","6^","7&","gG","dD","iI"],F:["yY","6^","7&","gG","dD","iI"],g:["fF","7&","8*","cC","hH","dD"],G:["fF","7&","8*","cC","hH","dD"],c:["gG","8*","9(","rR","tT","hH"],C:["gG","8*","9(","rR","tT","hH"],r:["cC","9(","0)","lL","nN","tT"],R:["cC","9(","0)","lL","nN","tT"],l:["rR","0)","[{","/?","sS","nN"],L:["rR","0)","[{","/?","sS","nN"],"/":["lL","[{","]}","=+","-_","sS"],"?":["lL","[{","]}","=+","-_","sS"],"=":["/?","]}",null,"\\|",null,"-_"],"+":["/?","]}",null,"\\|",null,"-_"],"\\":["=+",null,null,null,null,null],"|":["=+",null,null,null,null,null],a:[null,"'\"",",<","oO",";:",null],A:[null,"'\"",",<","oO",";:",null],o:["aA",",<",".>","eE","qQ",";:"],O:["aA",",<",".>","eE","qQ",";:"],e:["oO",".>","pP","uU","jJ","qQ"],E:["oO",".>","pP","uU","jJ","qQ"],u:["eE","pP","yY","iI","kK","jJ"],U:["eE","pP","yY","iI","kK","jJ"],i:["uU","yY","fF","dD","xX","kK"],I:["uU","yY","fF","dD","xX","kK"],d:["iI","fF","gG","hH","bB","xX"],D:["iI","fF","gG","hH","bB","xX"],h:["dD","gG","cC","tT","mM","bB"],H:["dD","gG","cC","tT","mM","bB"],t:["hH","cC","rR","nN","wW","mM"],T:["hH","cC","rR","nN","wW","mM"],n:["tT","rR","lL","sS","vV","wW"],N:["tT","rR","lL","sS","vV","wW"],s:["nN","lL","/?","-_","zZ","vV"],S:["nN","lL","/?","-_","zZ","vV"],"-":["sS","/?","=+",null,null,"zZ"],_:["sS","/?","=+",null,null,"zZ"],";":[null,"aA","oO","qQ",null,null],":":[null,"aA","oO","qQ",null,null],q:[";:","oO","eE","jJ",null,null],Q:[";:","oO","eE","jJ",null,null],j:["qQ","eE","uU","kK",null,null],J:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],K:["jJ","uU","iI","xX",null,null],x:["kK","iI","dD","bB",null,null],X:["kK","iI","dD","bB",null,null],b:["xX","dD","hH","mM",null,null],B:["xX","dD","hH","mM",null,null],m:["bB","hH","tT","wW",null,null],M:["bB","hH","tT","wW",null,null],w:["mM","tT","nN","vV",null,null],W:["mM","tT","nN","vV",null,null],v:["wW","nN","sS","zZ",null,null],V:["wW","nN","sS","zZ",null,null],z:["vV","sS","-_",null,null,null],Z:["vV","sS","-_",null,null,null]},keypad:{0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"],"/":[null,null,null,null,"*","9","8","7"],"*":["/",null,null,null,"-","+","9","8"],"-":["*",null,null,null,null,null,"+","9"],"+":["9","*","-",null,null,null,null,"6"],".":["0","2","3",null,null,null,null,null]},keypadMac:{0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:["8","=","/","*","-","+","6","5"],"=":[null,null,null,null,"/","9","8","7"],"/":["=",null,null,null,"*","-","9","8"],"*":["/",null,null,null,null,null,"-","9"],"-":["9","/","*",null,null,null,"+","6"],"+":["6","9","-",null,null,null,null,"3"],".":["0","2","3",null,null,null,null,null]},qwerty:{0:["9(",null,null,"-_","pP","oO"],1:["`~",null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],"`":[null,null,null,"1!",null,null],"~":[null,null,null,"1!",null,null],"!":["`~",null,null,"2@","qQ",null],"@":["1!",null,null,"3#","wW","qQ"],"#":["2@",null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"^":["5%",null,null,"7&","yY","tT"],"&":["6^",null,null,"8*","uU","yY"],"*":["7&",null,null,"9(","iI","uU"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"-":["0)",null,null,"=+","[{","pP"],_:["0)",null,null,"=+","[{","pP"],"=":["-_",null,null,null,"]}","[{"],"+":["-_",null,null,null,"]}","[{"],q:[null,"1!","2@","wW","aA",null],Q:[null,"1!","2@","wW","aA",null],w:["qQ","2@","3#","eE","sS","aA"],W:["qQ","2@","3#","eE","sS","aA"],e:["wW","3#","4$","rR","dD","sS"],E:["wW","3#","4$","rR","dD","sS"],r:["eE","4$","5%","tT","fF","dD"],R:["eE","4$","5%","tT","fF","dD"],t:["rR","5%","6^","yY","gG","fF"],T:["rR","5%","6^","yY","gG","fF"],y:["tT","6^","7&","uU","hH","gG"],Y:["tT","6^","7&","uU","hH","gG"],u:["yY","7&","8*","iI","jJ","hH"],U:["yY","7&","8*","iI","jJ","hH"],i:["uU","8*","9(","oO","kK","jJ"],I:["uU","8*","9(","oO","kK","jJ"],o:["iI","9(","0)","pP","lL","kK"],O:["iI","9(","0)","pP","lL","kK"],p:["oO","0)","-_","[{",";:","lL"],P:["oO","0)","-_","[{",";:","lL"],"[":["pP","-_","=+","]}","'\"",";:"],"{":["pP","-_","=+","]}","'\"",";:"],"]":["[{","=+",null,"\\|",null,"'\""],"}":["[{","=+",null,"\\|",null,"'\""],"\\":["]}",null,null,null,null,null],"|":["]}",null,null,null,null,null],a:[null,"qQ","wW","sS","zZ",null],A:[null,"qQ","wW","sS","zZ",null],s:["aA","wW","eE","dD","xX","zZ"],S:["aA","wW","eE","dD","xX","zZ"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],G:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],H:["gG","yY","uU","jJ","nN","bB"],j:["hH","uU","iI","kK","mM","nN"],J:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",<","mM"],K:["jJ","iI","oO","lL",",<","mM"],l:["kK","oO","pP",";:",".>",",<"],L:["kK","oO","pP",";:",".>",",<"],";":["lL","pP","[{","'\"","/?",".>"],":":["lL","pP","[{","'\"","/?",".>"],"'":[";:","[{","]}",null,null,"/?"],'"':[";:","[{","]}",null,null,"/?"],z:[null,"aA","sS","xX",null,null],Z:[null,"aA","sS","xX",null,null],x:["zZ","sS","dD","cC",null,null],X:["zZ","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ","mM",null,null],N:["bB","hH","jJ","mM",null,null],m:["nN","jJ","kK",",<",null,null],M:["nN","jJ","kK",",<",null,null],",":["mM","kK","lL",".>",null,null],"<":["mM","kK","lL",".>",null,null],".":[",<","lL",";:","/?",null,null],">":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],"?":[".>",";:","'\"",null,null,null]},qwertz:{0:["9)",null,null,"ß?","pP","oO"],1:["^°",null,null,'2"',"qQ",null],2:["1!",null,null,"3§","wW","qQ"],3:['2"',null,null,"4$","eE","wW"],4:["3§",null,null,"5%","rR","eE"],5:["4$",null,null,"6&","tT","rR"],6:["5%",null,null,"7/","zZ","tT"],7:["6&",null,null,"8(","uU","zZ"],8:["7/",null,null,"9)","iI","uU"],9:["8(",null,null,"0=","oO","iI"],"^":[null,null,null,"1!",null,null],"°":[null,null,null,"1!",null,null],"!":["^°",null,null,'2"',"qQ",null],'"':["1!",null,null,"3§","wW","qQ"],"§":['2"',null,null,"4$","eE","wW"],$:["3§",null,null,"5%","rR","eE"],"%":["4$",null,null,"6&","tT","rR"],"&":["5%",null,null,"7/","zZ","tT"],"/":["6&",null,null,"8(","uU","zZ"],"(":["7/",null,null,"9)","iI","uU"],")":["8(",null,null,"0=","oO","iI"],"=":["9)",null,null,"ß?","pP","oO"],"ß":["0=",null,null,"´`","üÜ","pP"],"?":["0=",null,null,"´`","üÜ","pP"],"´":["ß?",null,null,null,"+*","üÜ"],"`":["ß?",null,null,null,"+*","üÜ"],q:[null,"1!",'2"',"wW","aA",null],Q:[null,"1!",'2"',"wW","aA",null],w:["qQ",'2"',"3§","eE","sS","aA"],W:["qQ",'2"',"3§","eE","sS","aA"],e:["wW","3§","4$","rR","dD","sS"],E:["wW","3§","4$","rR","dD","sS"],r:["eE","4$","5%","tT","fF","dD"],R:["eE","4$","5%","tT","fF","dD"],t:["rR","5%","6&","zZ","gG","fF"],T:["rR","5%","6&","zZ","gG","fF"],z:["tT","6&","7/","uU","hH","gG"],Z:["tT","6&","7/","uU","hH","gG"],u:["zZ","7/","8(","iI","jJ","hH"],U:["zZ","7/","8(","iI","jJ","hH"],i:["uU","8(","9)","oO","kK","jJ"],I:["uU","8(","9)","oO","kK","jJ"],o:["iI","9)","0=","pP","lL","kK"],O:["iI","9)","0=","pP","lL","kK"],p:["oO","0=","ß?","üÜ","öÖ","lL"],P:["oO","0=","ß?","üÜ","öÖ","lL"],"ü":["pP","ß?","´`","+*","äÄ","öÖ"],"Ü":["pP","ß?","´`","+*","äÄ","öÖ"],"+":["üÜ","´`",null,null,"#'","äÄ"],"*":["üÜ","´`",null,null,"#'","äÄ"],a:[null,"qQ","wW","sS","yY","<>"],A:[null,"qQ","wW","sS","yY","<>"],s:["aA","wW","eE","dD","xX","yY"],S:["aA","wW","eE","dD","xX","yY"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","zZ","hH","bB","vV"],G:["fF","tT","zZ","hH","bB","vV"],h:["gG","zZ","uU","jJ","nN","bB"],H:["gG","zZ","uU","jJ","nN","bB"],j:["hH","uU","iI","kK","mM","nN"],J:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",;","mM"],K:["jJ","iI","oO","lL",",;","mM"],l:["kK","oO","pP","öÖ",".:",",;"],L:["kK","oO","pP","öÖ",".:",",;"],"ö":["lL","pP","üÜ","äÄ","-_",".:"],"Ö":["lL","pP","üÜ","äÄ","-_",".:"],"ä":["öÖ","üÜ","+*","#'",null,"-_"],"Ä":["öÖ","üÜ","+*","#'",null,"-_"],"#":["äÄ","+*",null,null,null,null],"'":["äÄ","+*",null,null,null,null],"<":[null,null,"aA","yY",null,null],">":[null,null,"aA","yY",null,null],y:["<>","aA","sS","xX",null,null],Y:["<>","aA","sS","xX",null,null],x:["yY","sS","dD","cC",null,null],X:["yY","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ","mM",null,null],N:["bB","hH","jJ","mM",null,null],m:["nN","jJ","kK",",;",null,null],M:["nN","jJ","kK",",;",null,null],",":["mM","kK","lL",".:",null,null],";":["mM","kK","lL",".:",null,null],".":[",;","lL","öÖ","-_",null,null],":":[",;","lL","öÖ","-_",null,null],"-":[".:","öÖ","äÄ",null,null,null],_:[".:","öÖ","äÄ",null,null,null]}},A={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};var G=new class{constructor(){this.l33tTable=P,this.dictionary={userInput:[]},this.rankedDictionaries={},this.translations=A,this.graphs=F,this.availableGraphs=[],this.setRankedDictionaries(),this.setAdjacencyGraphs(F)}setOptions(l={}){l.l33tTable&&(this.l33tTable=l.l33tTable),l.dictionary&&(this.dictionary=l.dictionary,this.setRankedDictionaries()),l.translations&&this.setTranslations(l.translations),l.graphs&&this.setAdjacencyGraphs(l.graphs)}setTranslations(l){if(!this.checkCustomTranslations(l))throw new Error("Invalid translations object fallback to keys");this.translations=l}checkCustomTranslations(l){let n=!0;return Object.keys(A).forEach((e=>{if(e in l){const t=e;Object.keys(A[t]).forEach((e=>{e in l[t]||(n=!1)}))}else n=!1})),n}setRankedDictionaries(){const l={};Object.keys(this.dictionary).forEach((n=>{const e=this.dictionary[n];if("userInputs"===n){const t=[];e.forEach((l=>{const n=typeof l;"string"!==n&&"number"!==n&&"boolean"!==n||t.push(l.toString().toLowerCase())})),l[n]=L(t)}else l[n]=L(e)})),this.rankedDictionaries=l}setAdjacencyGraphs(l){l&&(this.graphs=l,this.availableGraphs=Object.keys(l))}};class R{constructor(){this.rankedDictionaries={},this.rankedDictionaries=G.rankedDictionaries}match({password:l}){const n=[],e=l.length,t=l.toLowerCase();return Object.keys(this.rankedDictionaries).forEach((s=>{const u=this.rankedDictionaries[s];for(let a=0;a<e;a+=1)for(let r=a;r<e;r+=1)if(t.slice(a,+r+1||9e9)in u){const e=t.slice(a,+r+1||9e9),o=u[e];n.push({pattern:"dictionary",i:a,j:r,token:l.slice(a,+r+1||9e9),matchedWord:e,rank:o,dictionaryName:s,reversed:!1,l33t:!1})}})),C(n)}}class W{constructor(){this.MatchDictionary=new R}match({password:l}){const n=[],e=this.enumerateL33tSubs(this.relevantL33tSubtable(l,G.l33tTable));for(let s=0;s<e.length;s+=1){const u=e[s];if(t=u,0===Object.keys(t).length)break;const a=v(l,u);this.MatchDictionary.match({password:a}).forEach((e=>{const t=l.slice(e.i,+e.j+1||9e9);if(t.toLowerCase()!==e.matchedWord){const l={};Object.keys(u).forEach((n=>{const e=u[n];-1!==t.indexOf(n)&&(l[n]=e)}));const s=Object.keys(l).map((n=>`${n} -> ${l[n]}`)).join(", ");n.push(i(o({},e),{l33t:!0,token:t,sub:l,subDisplay:s}))}}))}var t;return C(n.filter((l=>l.token.length>1)))}relevantL33tSubtable(l,n){const e={},t={};return l.split("").forEach((l=>{e[l]=!0})),Object.keys(n).forEach((l=>{const s=n[l].filter((l=>l in e));s.length>0&&(t[l]=s)})),t}enumerateL33tSubs(l){const n=Object.keys(l);return this.getSubs(n,[[]],l).map((l=>{const n={};return l.forEach((([l,e])=>{n[l]=e})),n}))}getSubs(l,n,e){if(!l.length)return n;const t=l[0],s=l.slice(1),u=[];e[t].forEach((l=>{n.forEach((n=>{let e=-1;for(let t=0;t<n.length;t+=1)if(n[t][0]===l){e=t;break}if(-1===e){const e=n.concat([[l,t]]);u.push(e)}else{const s=n.slice(0);s.splice(e,1),s.push([l,t]),u.push(n),u.push(s)}}))}));const a=this.dedup(u);return s.length?this.getSubs(s,a,e):a}dedup(l){const n=[],e={};return l.forEach((l=>{const t=l.map(((l,n)=>[l,n]));t.sort();const s=t.map((([l,n])=>`${l},${n}`)).join("-");s in e||(e[s]=!0,n.push(l))})),n}}class Y{constructor(){this.MatchDictionary=new R}match({password:l}){const n=l.split("").reverse().join(""),e=this.MatchDictionary.match({password:n}).map((n=>i(o({},n),{token:n.token.split("").reverse().join(""),reversed:!0,i:l.length-1-n.j,j:l.length-1-n.i})));return C(e)}}class N{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:l}){const n=[];return Object.keys(G.graphs).forEach((e=>{const t=G.graphs[e];O(n,this.helper(l,t,e))})),C(n)}checkIfShifted(l,n,e){return!l.includes("keypad")&&this.SHIFTED_RX.test(n.charAt(e))?1:0}helper(l,n,e){let t;const s=[];let u=0;const a=l.length;for(;u<a-1;){let r=u+1,o=0,i=0;for(t=this.checkIfShifted(e,l,u);;){const c=n[l.charAt(r-1)]||[];let h=!1,g=-1,d=-1;if(r<a){const n=l.charAt(r),e=c.length;for(let l=0;l<e;l+=1){const e=c[l];if(d+=1,e){const l=e.indexOf(n);if(-1!==l){h=!0,g=d,1===l&&(t+=1),o!==g&&(i+=1,o=g);break}}}}if(!h){r-u>2&&s.push({pattern:"spatial",i:u,j:r-1,token:l.slice(u,r),graph:e,turns:i,shiftedCount:t}),u=r;break}r+=1}}return s}}var q={nCk(l,n){let e=l;if(n>e)return 0;if(0===n)return 1;let t=1;for(let s=1;s<=n;s+=1)t*=e,t/=s,e-=1;return t},log10:l=>Math.log(l)/Math.log(10),log2:l=>Math.log(l)/Math.log(2),factorial(l){let n=1;for(let e=2;e<=l;e+=1)n*=e;return n}};const H={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},U=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,$=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,z=/^[A-Z\xbf-\xdf]+$/,K=/^[^a-z\xdf-\xff]+$/,J=/^[a-z\xdf-\xff]+$/,Z=/^[^A-Z\xbf-\xdf]+$/,B=/[a-z\xdf-\xff]/,V=/[A-Z\xbf-\xdf]/,_=/[^A-Za-z\xbf-\xdf]/gi,X=/^\d+$/,Q=(new Date).getFullYear(),ll={recentYear:/19\d\d|200\d|201\d|202\d/g};var nl=l=>{const n=l.replace(_,"");if(n.match(Z)||n.toLowerCase()===n)return 1;const e=[U,$,K],t=e.length;for(let s=0;s<t;s+=1){const l=e[s];if(n.match(l))return 2}return(l=>{const n=l.split(""),e=n.filter((l=>l.match(B))).length,t=n.filter((l=>l.match(V))).length;let s=0;const u=Math.min(e,t);for(let a=1;a<=u;a+=1)s+=q.nCk(e+t,a);return s})(n)};const el=({token:l,graph:n,turns:e})=>{const t=(l=>{let n=0;return Object.keys(l).forEach((e=>{const t=l[e];n+=t.filter((l=>!!l)).length})),n/=Object.entries(l).length,n})(G.graphs[n]),s=Object.keys(G.graphs[n]).length;let u=0;const r=l.length;for(let o=2;o<=r;o+=1){const l=Math.min(e,o-1);for(let n=1;n<=l;n+=1)u+=q.nCk(o-1,n-1)*t*a(s,n)}return u};const tl={bruteforce:({token:l})=>{let n,e=a(10,l.length);return e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE),n=1===l.length?11:51,Math.max(e,n)},dictionary:({rank:l,reversed:n,l33t:e,sub:t,token:s})=>{const u=l,a=nl(s),r=(({l33t:l,sub:n,token:e})=>{if(!l)return 1;let t=1;const s=n;return Object.keys(s).forEach((l=>{const{subbedCount:n,unsubbedCount:u}=(({subs:l,subbed:n,token:e})=>{const t=l[n],s=e.toLowerCase().split("");return{subbedCount:s.filter((l=>l===n)).length,unsubbedCount:s.filter((l=>l===t)).length}})({subs:s,subbed:l,token:e});if(0===n||0===u)t*=2;else{const l=Math.min(u,n);let e=0;for(let t=1;t<=l;t+=1)e+=q.nCk(u+n,t);t*=e}})),t})({l33t:e,sub:t,token:s});return{baseGuesses:u,uppercaseVariations:a,l33tVariations:r,calculation:u*a*r*(n?2:1)}},spatial:({graph:l,token:n,shiftedCount:e,turns:t})=>{let s=el({token:n,graph:l,turns:t});if(e){const l=n.length-e;if(0===e||0===l)s*=2;else{let n=0;for(let t=1;t<=Math.min(e,l);t+=1)n+=q.nCk(e+l,t);s*=n}}return Math.round(s)},repeat:({baseGuesses:l,repeatCount:n})=>l*n,sequence:({token:l,ascending:n})=>{const e=l.charAt(0);let t=0;return t=["a","A","z","Z","0","1","9"].includes(e)?4:e.match(/\d/)?10:26,n||(t*=2),t*l.length},regex:({regexName:l,regexMatch:n,token:e})=>{const t={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(l in t)return a(t[l],e.length);switch(l){case"recentYear":return Math.max(Math.abs(parseInt(n[0],10)-Q),20)}return 0},date:({year:l,separator:n})=>{let e=365*Math.max(Math.abs(l-Q),20);return n&&(e*=4),e}};const sl={password:"",optimal:{},excludeAdditive:!1,fillArray(l,n){const e=[];for(let t=0;t<l;t+=1){let l=[];"object"===n&&(l={}),e.push(l)}return e},makeBruteforceMatch(l,n){return{pattern:"bruteforce",token:this.password.slice(l,+n+1||9e9),i:l,j:n}},update(l,n){const e=l.j,t=((l,n)=>{const e={};if("guesses"in l&&null!=l.guesses)return l;const t=((l,n)=>{let e=1;return l.token.length<n.length&&(e=1===l.token.length?10:50),e})(l,n),s=tl[l.pattern](l);let u=0;"number"==typeof s?u=s:"dictionary"===l.pattern&&(u=s.calculation,e.baseGuesses=s.baseGuesses,e.uppercaseVariations=s.uppercaseVariations,e.l33tVariations=s.l33tVariations);const a=Math.max(u,t);return i(o(o({},l),e),{guesses:a,guessesLog10:q.log10(a)})})(l,this.password);let s=t.guesses;n>1&&(s*=this.optimal.pi[t.i-1][n-1]);let u=q.factorial(n)*s;this.excludeAdditive||(u+=a(1e4,n-1));let r=!1;Object.keys(this.optimal.g[e]).forEach((l=>{const t=this.optimal.g[e][l];parseInt(l,10)<=n&&t<=u&&(r=!0)})),r||(this.optimal.g[e][n]=u,this.optimal.m[e][n]=t,this.optimal.pi[e][n]=s)},bruteforceUpdate(l){let n=this.makeBruteforceMatch(0,l);this.update(n,1);for(let e=1;e<=l;e+=1){n=this.makeBruteforceMatch(e,l);const t=this.optimal.m[e-1];Object.keys(t).forEach((l=>{"bruteforce"!==t[l].pattern&&this.update(n,parseInt(l,10)+1)}))}},unwind(l){const n=[];let e=l-1,t=0,s=Infinity;const u=this.optimal.g[e];for(Object.keys(this.optimal.g[e]).forEach((l=>{const n=u[l];n<s&&(t=parseInt(l,10),s=n)}));e>=0;){const l=this.optimal.m[e][t];n.unshift(l),e=l.i-1,t-=1}return n}};var ul={mostGuessableMatchSequence(l,n,e=!1){sl.password=l,sl.excludeAdditive=e;const t=l.length;let s=sl.fillArray(t,"array");n.forEach((l=>{s[l.j].push(l)})),s=s.map((l=>l.sort(((l,n)=>l.i-n.i)))),sl.optimal={m:sl.fillArray(t,"object"),pi:sl.fillArray(t,"object"),g:sl.fillArray(t,"object")};for(let o=0;o<t;o+=1)s[o].forEach((l=>{l.i>0?Object.keys(sl.optimal.m[l.i-1]).forEach((n=>{sl.update(l,parseInt(n,10)+1)})):sl.update(l,1)})),sl.bruteforceUpdate(o);const u=sl.unwind(t),a=u.length,r=this.getGuesses(l,a);return{password:l,guesses:r,guessesLog10:q.log10(r),sequence:u}},getGuesses(l,n){const e=l.length;let t=0;return t=0===l.length?1:sl.optimal.g[e-1][n],t}};class al{match({password:l,omniMatch:n}){const e=[];let t=0;for(;t<l.length;){const s=this.getGreedyMatch(l,t),u=this.getLazyMatch(l,t);if(null==s)break;const{match:a,baseToken:r}=this.setMatchToken(s,u);if(a){const l=a.index+a[0].length-1,s=this.getBaseGuesses(r,n);e.push({pattern:"repeat",i:a.index,j:l,token:a[0],baseToken:r,baseGuesses:s,repeatCount:a[0].length/r.length}),t=l+1}}return e}getGreedyMatch(l,n){const e=/(.+)\1+/g;return e.lastIndex=n,e.exec(l)}getLazyMatch(l,n){const e=/(.+?)\1+/g;return e.lastIndex=n,e.exec(l)}setMatchToken(l,n){const e=/^(.+?)\1+$/;let t,s="";if(n&&l[0].length>n[0].length){t=l;const n=e.exec(t[0]);n&&(s=n[1])}else t=n,t&&(s=t[1]);return{match:t,baseToken:s}}getBaseGuesses(l,n){return ul.mostGuessableMatchSequence(l,n.match(l)).guesses}}class rl{constructor(){this.MAX_DELTA=5}match({password:l}){const n=[];if(1===l.length)return[];let e=0,t=null;const s=l.length;for(let u=1;u<s;u+=1){const s=l.charCodeAt(u)-l.charCodeAt(u-1);if(null==t&&(t=s),s!==t){const a=u-1;this.update({i:e,j:a,delta:t,password:l,result:n}),e=a,t=s}}return this.update({i:e,j:s-1,delta:t,password:l,result:n}),n}update({i:l,j:n,delta:e,password:t,result:s}){if(n-l>1||1===Math.abs(e)){const u=Math.abs(e);if(u>0&&u<=this.MAX_DELTA){const u=t.slice(l,+n+1||9e9),{sequenceName:a,sequenceSpace:r}=this.getSequence(u);return s.push({pattern:"sequence",i:l,j:n,token:t.slice(l,+n+1||9e9),sequenceName:a,sequenceSpace:r,ascending:e>0})}}return null}getSequence(l){let n="unicode",e=26;return J.test(l)?(n="lower",e=26):z.test(l)?(n="upper",e=26):X.test(l)&&(n="digits",e=10),{sequenceName:n,sequenceSpace:e}}}class ol{match({password:l,regexes:n=ll}){const e=[];return Object.keys(n).forEach((t=>{const s=n[t];s.lastIndex=0;const u=s.exec(l);if(u){const l=u[0];e.push({pattern:"regex",token:l,i:u.index,j:u.index+u[0].length-1,regexName:t,regexMatch:u})}})),C(e)}}class il{match({password:l}){const n=[...this.getMatchesWithoutSeparator(l),...this.getMatchesWithSeparator(l)],e=this.filterNoise(n);return C(e)}getMatchesWithSeparator(l){const n=[],e=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let t=0;t<=Math.abs(l.length-6);t+=1)for(let s=t+5;s<=t+9&&!(s>=l.length);s+=1){const u=l.slice(t,+s+1||9e9),a=e.exec(u);if(null!=a){const l=this.mapIntegersToDayMonthYear([parseInt(a[1],10),parseInt(a[3],10),parseInt(a[4],10)]);null!=l&&n.push({pattern:"date",token:u,i:t,j:s,separator:a[2],year:l.year,month:l.month,day:l.day})}}return n}getMatchesWithoutSeparator(l){const n=[],e=/^\d{4,8}$/,t=l=>Math.abs(l.year-Q);for(let s=0;s<=Math.abs(l.length-4);s+=1)for(let u=s+3;u<=s+7&&!(u>=l.length);u+=1){const a=l.slice(s,+u+1||9e9);if(e.exec(a)){const l=[],e=a.length;if(H[e].forEach((([n,e])=>{const t=this.mapIntegersToDayMonthYear([parseInt(a.slice(0,n),10),parseInt(a.slice(n,e),10),parseInt(a.slice(e),10)]);null!=t&&l.push(t)})),l.length>0){let e=l[0],r=t(l[0]);l.slice(1).forEach((l=>{const n=t(l);n<r&&(e=l,r=n)})),n.push({pattern:"date",token:a,i:s,j:u,separator:"",year:e.year,month:e.month,day:e.day})}}}return n}filterNoise(l){return l.filter((n=>{let e=!1;const t=l.length;for(let s=0;s<t;s+=1){const t=l[s];if(n!==t&&t.i<=n.i&&t.j>=n.j){e=!0;break}}return!e}))}mapIntegersToDayMonthYear(l){if(l[1]>31||l[1]<=0)return null;let n=0,e=0,t=0;for(let s=0,u=l.length;s<u;s+=1){const u=l[s];if(u>99&&u<1e3||u>2050)return null;u>31&&(e+=1),u>12&&(n+=1),u<=0&&(t+=1)}return e>=2||3===n||t>=2?null:this.getDayMonth(l)}getDayMonth(l){const n=[[l[2],l.slice(0,2)],[l[0],l.slice(1,3)]],e=n.length;for(let t=0;t<e;t+=1){const[l,e]=n[t];if(1e3<=l&&l<=2050){const n=this.mapIntegersToDayMonth(e);return null!=n?{year:l,month:n.month,day:n.day}:null}}for(let t=0;t<e;t+=1){const[l,e]=n[t],s=this.mapIntegersToDayMonth(e);if(null!=s)return{year:this.twoToFourDigitYear(l),month:s.month,day:s.day}}return null}mapIntegersToDayMonth(l){const n=[l,l.slice().reverse()];for(let e=0;e<n.length;e+=1){const l=n[e],t=l[0],s=l[1];if(t>=1&&t<=31&&s>=1&&s<=12)return{day:t,month:s}}return null}twoToFourDigitYear(l){return l>99?l:l>50?l+1900:l+2e3}}class cl{constructor(){this.matchers=[R,Y,W,N,al,rl,ol,il],this.options={}}match(l){const n=[];return this.matchers.forEach((e=>{const t=new e;O(n,t.match({password:l,omniMatch:this}))})),C(n)}}const hl={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};class gl{translate(l,n){let e=l;void 0!==n&&1!==n&&(e+="s");const{timeEstimation:t}=G.translations;return t[e].replace("{base}",`${n}`)}estimateAttackTimes(l){const n={onlineThrottling100PerHour:l/(100/3600),onlineNoThrottling10PerSecond:l/10,offlineSlowHashing1e4PerSecond:l/1e4,offlineFastHashing1e10PerSecond:l/1e10},e={};return Object.keys(n).forEach((l=>{const t=n[l];e[l]=this.displayTime(t)})),{crackTimesSeconds:n,crackTimesDisplay:e,score:this.guessesToScore(l)}}guessesToScore(l){return l<1005?0:l<1000005?1:l<100000005?2:l<10000000005?3:4}displayTime(l){let n,e="centuries";const t=Object.keys(hl),s=t.findIndex((n=>l<hl[n]));return s>-1&&(e=t[s-1],0!==s?n=Math.round(l/hl[e]):e="ltSecond"),this.translate(e,n)}}class dl{constructor(){this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(G.translations.suggestions.useWords,G.translations.suggestions.noNeed)}getFeedback(l,n){if(0===n.length)return this.defaultFeedback;if(l>2)return{warning:"",suggestions:[]};const e=G.translations.suggestions.anotherWord,t=this.getLongestMatch(n);let s=this.getMatchFeedback(t,1===n.length);return null!=s?(s.suggestions.unshift(e),null==s.warning&&(s.warning="")):s={warning:"",suggestions:[e]},s}getLongestMatch(l){let n=l[0];return l.slice(1).forEach((l=>{l.token.length>n.token.length&&(n=l)})),n}getMatchFeedback(l,n){switch(l.pattern){case"dictionary":return this.getDictionaryMatchFeedback(l,n);case"spatial":return this.getSpatialMatchFeedback(l);case"repeat":return this.getRepeatMatchFeedback(l);case"sequence":return{warning:G.translations.warnings.sequences,suggestions:[G.translations.suggestions.sequences]};case"regex":if("recentYear"===l.regexName)return{warning:G.translations.warnings.recentYears,suggestions:[G.translations.suggestions.recentYears,G.translations.suggestions.associatedYears]};break;case"date":return{warning:G.translations.warnings.dates,suggestions:[G.translations.suggestions.dates]};default:return{warning:"",suggestions:[]}}return{warning:"",suggestions:[]}}getSpatialMatchFeedback(l){let n=G.translations.warnings.keyPattern;return 1===l.turns&&(n=G.translations.warnings.straightRow),{warning:n,suggestions:[G.translations.suggestions.longerKeyboardPattern]}}getRepeatMatchFeedback(l){let n=G.translations.warnings.extendedRepeat;return 1===l.baseToken.length&&(n=G.translations.warnings.simpleRepeat),{warning:n,suggestions:[G.translations.suggestions.repeated]}}getDictionaryMatchFeedback(l,n){const e=this.getDictionaryWarning(l,n),t=[],s=l.token;return s.match(U)?t.push(G.translations.suggestions.capitalization):s.match(K)&&s.toLowerCase()!==s&&t.push(G.translations.suggestions.allUppercase),l.reversed&&l.token.length>=4&&t.push(G.translations.suggestions.reverseWords),l.l33t&&t.push(G.translations.suggestions.l33t),{warning:e,suggestions:t}}getDictionaryWarning(l,n){let e="";const t=l.dictionaryName;return"passwords"===t?e=this.getDictionaryWarningPassword(l,n):t.includes("wikipedia")?e=this.getDictionaryWarningWikipedia(l,n):("lastnames"===t||t.toLowerCase().includes("firstnames"))&&(e=this.getDictionaryWarningNames(l,n)),e}getDictionaryWarningPassword(l,n){let e="";return!n||l.l33t||l.reversed?l.guessesLog10<=4&&(e=G.translations.warnings.similarToCommon):e=l.rank<=10?G.translations.warnings.topTen:l.rank<=100?G.translations.warnings.topHundred:G.translations.warnings.common,e}getDictionaryWarningWikipedia(l,n){let e="";return n&&(e=G.translations.warnings.wordByItself),e}getDictionaryWarningNames(l,n){return n?G.translations.warnings.namesByThemselves:G.translations.warnings.commonNames}}const pl=()=>(new Date).getTime();var fl=c({name:"StrengthMeter",components:{InputPassword:h.Password},props:{value:I.string,showInput:I.bool.def(!0),disabled:I.bool},emits:["score-change","change"],setup(l,{emit:n}){const e=g(""),{prefixCls:t}=E("strength-meter"),s=d((()=>{const{disabled:t}=l;if(t)return-1;const s=m(e)?(l=>{const n=new dl,e=new cl,t=new gl,s=pl(),u=e.match(l),a=ul.mostGuessableMatchSequence(l,u),r=pl()-s,c=t.estimateAttackTimes(a.guesses);return i(o(o({calcTime:r},a),c),{feedback:n.getFeedback(c.score,a.sequence)})})(m(e)).score:-1;return n("score-change",s),s}));return p((()=>{e.value=l.value||""})),f((()=>m(e)),(l=>{n("change",l)})),{getPasswordStrength:s,handleChange:function(l){e.value=l.target.value},prefixCls:t,innerValueRef:e}}});const ml=D(),bl=ml(((l,n,e,t,s,u)=>{const a=b("InputPassword");return y(),k("div",{class:[l.prefixCls,"relative"]},[l.showInput?(y(),k(a,w({key:0},l.$attrs,{allowClear:"",value:l.innerValueRef,onChange:l.handleChange,disabled:l.disabled}),j({_:2},[M(Object.keys(l.$slots),(n=>({name:n,fn:ml((e=>[S(l.$slots,n,e,void 0,!0)]))})))]),1040,["value","onChange","disabled"])):T("",!0),x("div",{class:`${l.prefixCls}-bar`},[x("div",{class:`${l.prefixCls}-bar--fill`,"data-score":l.getPasswordStrength},null,10,["data-score"])],2)],2)}));fl.render=bl,fl.__scopeId="data-v-04484f84";export{fl as _};