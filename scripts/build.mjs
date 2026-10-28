// Builds index.html (a standalone page for GitHub Pages) from nume-apple.html,
// which is written as an Artifact body (no <!doctype>, <head> or <body> of its own).
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('../nume-apple.html', import.meta.url), 'utf8')
  .replace(/^<meta charset="utf-8">\s*/, '');
const page = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Protótipo de loja de iPhones e Macs com catálogo, checkout e painel do vendedor.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${src}
</body>
</html>
`;
writeFileSync(new URL('../index.html', import.meta.url), page);
console.log('index.html gerado');
