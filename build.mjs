import { mkdirSync, copyFileSync, cpSync } from 'node:fs';
mkdirSync('dist/assets',{recursive:true});
for (const f of ['index.html','styles.v2.css','main.js','site.webmanifest']) copyFileSync(f,`dist/${f}`);
cpSync('assets','dist/assets',{recursive:true});
