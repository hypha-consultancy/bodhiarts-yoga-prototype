const fs=require('fs'),O=require('opencc-js');
const cv=O.Converter({from:'cn',to:'twp'});
const fix=s=>s.replace(/臺/g,'台').replace(/郵箱/g,'信箱').replace(/回復/g,'回覆').replace(/示例/g,'範例').replace(/“/g,'「').replace(/”/g,'」').replace(/社羣/g,'社區').replace(/羣/g,'群').replace(/瑜伽/g,'瑜珈').replace(/裏/g,'裡');
const tc=s=>fix(cv(s));
let h=fs.readFileSync('src.html','utf8');
const pairs=[];
h=h.replace(/<span class="zh">((?:(?!<span|<\/span>)[\s\S])*?)<\/span>/g,(m,x)=>{const t=tc(x);pairs.push([x,t]);return m+'<span class="tc">'+t+'</span>'});
h=h.replace(/data-title-zh="([^"]*)"/g,(m,x)=>m+' data-title-tc="'+tc(x)+'"');
h=h.replace(/<title>([^<]*)<\/title>/,(m,x)=>'<title>'+tc(x)+'</title>');
// sanity: any zh span left unconverted (nested spans)?
const left=(h.match(/<span class="zh">(?:(?!<\/span>)[\s\S])*?<span/g)||[]).length;
fs.writeFileSync(process.argv[2],h);
fs.writeFileSync('pairs.txt',pairs.map(p=>p[0]+'\n'+p[1]).join('\n\n'));
console.log('converted',pairs.length,'nested-left',left);
