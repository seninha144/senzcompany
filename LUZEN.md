# Substituição Resisol → LUZEN

LUZEN ocupa a primeira posição na home e no portfólio, como conceito / projeto independente. O case editorial usa o header, footer, navegação, tokens e idiomas da SENZ. Não foram atribuídos clientes, resultados comerciais, tecnologias ou funcionalidades implementadas sem confirmação.

## Ficheiros da alteração

- `src/content/luzen.ts`: copy e legendas em inglês, português, francês, italiano e alemão.
- `src/content/en.ts`, `pt.ts`, `fr.ts`, `it.ts`, `de.ts`: primeira entrada substituída pela copy localizada da LUZEN. Os outros três objetos de projeto permanecem iguais.
- `src/content/types.ts`: slug `luzen` na lista partilhada de rotas e sitemap.
- `src/content/media.ts`: chave antiga substituída por `luzen`.
- `src/content/luzen-media.ts`: deteção de media opcional em disco.
- `src/components/luzen-case.tsx`: case editorial e integração de media.
- `src/components/luzen-visual.tsx`: capa/hero e fallback tipográfico.
- `src/components/project-loop.tsx`: vídeo com reprodução controlada por visibilidade, pausa e movimento reduzido.
- `src/components/project-visual.tsx`: encaminhamento da primeira capa para LUZEN; remoção do desenho de Resisol da renderização.
- `src/components/sections.tsx`: legenda da primeira capa gerida pelo fallback LUZEN.
- `src/app/[locale]/[[...slug]]/page.tsx`: case LUZEN, metadata específica e cover para Open Graph quando disponível.
- `src/app/luzen.css`: estilos exclusivos do novo case.
- `src/app/globals.css`: importação desses estilos; regras antigas conservadas.
- `next.config.ts`: redirecionamentos permanentes dos endereços antigos e da rota sem idioma.
- `tests/luzen.spec.ts`: rotas, tradução, sitemap e ausência de media.
- `tests/site.spec.ts`: navegação atualizada para LUZEN.
- `scripts/test-project-loop.mjs`: teste isolado com gravação sintética temporária; nenhum vídeo fictício publicado.
- `scripts/visual-audit.mjs`: rota de auditoria atualizada.
- `public/projects/luzen/README.md`, `README.md`, `QA.md`, `LUZEN.md`: configuração e documentação.

## Media a adicionar

Pasta exata: `C:\Users\freef\Projects\senz\public\projects\luzen\`

| Ficheiro              | Utilização                                                |
| --------------------- | --------------------------------------------------------- |
| `cover.webp`          | Capa do portfólio e imagem de partilha                    |
| `hero.webp`           | Imagem principal do case; a cover serve de alternativa    |
| `detail.webp`         | Imagem editorial / detalhe do produto                     |
| `mobile.webp`         | Captura vertical da experiência mobile                    |
| `preview.mp4`         | Vídeo curto do website, preferencialmente H.264 sem áudio |
| `preview-poster.webp` | Fotograma estático do vídeo                               |

A capa atual é `public/projects/luzen/cover-editorial.png`, criada com a ferramenta integrada de geração de imagens a pedido do utilizador, tendo o logótipo da imagem original como referência. Preenche toda a área com recorte central responsivo. A imagem original continua em `cover.png`. O vídeo de `images/video_luzen.mp4` está ligado como `preview.mp4`; o poster foi extraído do próprio vídeo. As imagens hero, detail e mobile continuam opcionais. A prioridade da capa é `cover-editorial.png`, `cover.webp`, `cover.png`.

## Prompt da capa editorial

Ferramenta: `image_gen` integrada. Referência: `images/image_projects/luzen_project.png`.

> Use case: product-mockup. Create a finished wide landscape portfolio cover for the jewelry brand LUZÉN, based on the supplied reference image. Reference image role: exact brand logo and palette reference, not a layout to repeat. Preserve the elegant thin high-contrast serif wordmark LUZÉN (accent on É) and the intertwined calligraphic LZ monogram at its left. Make a completely new premium editorial brand composition, filling the canvas edge to edge, no frames, no letterboxing, no inset business card. A richly textured matte dark chocolate-brown surface across the entire frame, beautifully lit with subtle warm grazing studio light and delicate gold-foil embossed LZ + LUZÉN logo directly on that surface, centered, large and exquisitely legible. Restrained tactile luxury, contemporary jewelry house, sophisticated and minimal. Very subtle organic shadow at the far left edge, no jewelry products or added objects, no extra text, no slogans. Target aspect ratio 2:1 wide horizontal. Keep the full logo inside the central 60% width and central 45% height so it survives a centered mobile crop to 1.4:1. Flat frontal viewpoint, no tilted rectangle, no perspective distortion of logo. Gold typography, deep brown background, subtle material realism, generous but purposeful breathing room. This is a website portfolio hero asset, not a screenshot or website UI. High resolution.

## Referências antigas

A sequência atual dos cases é VANTA → LUZEN → Restaurant Management Platform → VANTA. A capa LUZEN surge numa coluna secundária no desktop e mantém a mesma identidade e página individual.

Resisol permanece apenas nos redirecionamentos de compatibilidade, testes desses redirecionamentos, seletores CSS sem utilização e documentação/referências visuais históricas. As cópias locais de segurança em `.visual-review/` também conservam o estado anterior e não são publicadas. Não existe uma página pública Resisol, nem links para ela na navegação, no portfólio ou no sitemap.
