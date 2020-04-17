---
path: "/boomerang"

order: 6
title: "Boomerang effect"
---

## What is it?

[Boomerang effect](https://github.com/matuzalemsteles/boomerang-effect) é um conceito "arquitetural" que divide os componentes da aplicação em pequenas partes, cada um com responsabilidades única com a idéia de compartilhar a mesma informação entre pequenas partes da aplicação (não confunda isso com uma store global), a reação do boomerang effect é causado pela composição de componentes consumidores que precisam da mesma informação e o provider que tem a responsabilidade de cuidar da informação e manipular se necessario.

Segindo a linha de raciocínio `ComponentRenderer -> Others Components -> Provider`, esse comportamento é recomendando que siga se replicando pela estrutura da aplicação quando necessario, isso evita que muitos componentes dependem apenas de um Provider e diminui a responsabilidade dos Providers uma vez que você distribui a responsabilidade. Para se criar um boomerang effect tem algumas regras:

- Apenas crie a estrutura boomerang quando mais de um componente depender da mesma informação;
- O Provedor não renderiza nenhum elemento apenas cuida da informação;

## Reaction

Para causar um efeito de reação bumerangue é quando o componente consumidor apenas renderiza os dados e quando os dados precisam ser alterados ele causa o efeito de propagação para o Provider e o Provider modifica e desce com as novas informações para os consumidores.

## Communication

A comunicação do consumer para o Provider é feita via eventos "pub/sub", os consumidores envia eventos para o Provider (isso para evitar renderizações desnecessarias) e o provider pode enviar para todos os consumidores as novas informações, isso pode ser feito via pub para que chegue até os componentes sem causar renderizações a abaixo dos providers.
