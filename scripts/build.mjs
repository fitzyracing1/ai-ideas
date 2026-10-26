// Builds ideas.json, docs/ideas.json, README index table, docs/sitemap.xml from ideas/*.md. No deps.
import fs from 'node:fs';
const SITE='https://fitzyracing1.github.io/ai-ideas/';
const parse=(src)=>{const m=src.match(/^---\n([\s\S]*?)\n---/);if(!m)throw new Error('no front matter');const o={};
for(const l of m[1].split('\n')){const i=l.indexOf(':');if(i<0)continue;const k=l.slice(0,i).trim();let v=l.slice(i+1).trim();
if(v.startsWith('['))v=v.slice(1,-1).split(',').map(s=>s.trim()).filter(Boolean);else v=v.replace(/^"|"$/g,'');o[k]=v;}return o;};
const ideas=fs.readdirSync('ideas').filter(f=>f.endsWith('.md')).sort().map(f=>{const o=parse(fs.readFileSync('ideas/'+f,'utf8'));
for(const k of ['title','summary','status','tenets','repo','tags'])if(!o[k])throw new Error(f+': missing '+k);
if(!/^[01]{4}$/.test(o.tenets))throw new Error(f+': tenets must be 4 bits');return {slug:f.slice(0,-3),...o};});
const json=JSON.stringify(ideas,null,2)+'\n';
const check=process.argv.includes('--check');let dirty=false;
const w=(p,c)=>{if(check){if(!fs.existsSync(p)||fs.readFileSync(p,'utf8')!==c){console.error('out of date: '+p);dirty=true;}}else fs.writeFileSync(p,c);};
w('ideas.json',json);w('docs/ideas.json',json);
const table='| Idea | Summary | Status | Tenets | Repo |\n|---|---|---|---|---|\n'+ideas.map(i=>`| [${i.title}](ideas/${i.slug}.md) | ${i.summary} | ${i.status} | \`${i.tenets}\` | [${i.repo.split('/').pop()}](${i.repo}) |`).join('\n');
const rd=fs.readFileSync('README.md','utf8').replace(/<!-- ideas:start -->[\s\S]*<!-- ideas:end -->/,`<!-- ideas:start -->\n${table}\n<!-- ideas:end -->`);w('README.md',rd);
w('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc></url>\n</urlset>\n`);
if(dirty){console.error('dark: run node scripts/build.mjs');process.exit(1);}console.log((check?'lit: up to date, ':'built ')+ideas.length+' ideas');
