import { mkdirSync, copyFileSync, cpSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
mkdirSync('dist/assets',{recursive:true});
execFileSync('npx',['-p','tailwindcss@3.4.17','tailwindcss','-i','input.css','-o','dist/styles.css','--minify'],{stdio:'inherit'});
for (const f of ['index.html','main.js','theme-init.js','site.webmanifest']) copyFileSync(f,`dist/${f}`);
cpSync('assets','dist/assets',{recursive:true});
