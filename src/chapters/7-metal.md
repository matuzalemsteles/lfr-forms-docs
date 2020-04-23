---
path: "/metal"

order: 7
title: "Metal.js"
---

# What is it?
Metal.js é uma biblioteca de Javascript para criação de componentes de frontend assim como um grande compilado de vários utilitários para lidar com a DOM e controlar estado(metal-state), eventos(metal-events) ou ajudar em construção de UIs difíceis(e.g metal-drag-drop). Existem vários utilitários disponíveis para várias coisas, incluindo URLs, routing. 

### Antes de começar:
Entretanto o projeto do Metal está em fase de **manutenção/deprecação**. Vários utilitários foram/estão sendo movidos para o código do DXP e issues dentro da própria biblioteca para criação de componentes só estão sendo fixados quando existe uma severidade muito grande.

### Vamos lá, como assim biblioteca para criar componentes de frontend?

O metal auxilia em fazer com que os componentes sejam atualizados assim que um dado é atualizado, de maneira geral, é uma forma de fazer two-way data binding.

Metal pode utilizar tanto Soy(Google Closure Templates) quanto JSX como linguagem de template.

Para entender mais sobre Soy, é recomendado a pasta de exemplos no repositório do closure-templates: [closure-templates/examples at master · google/closure-templates · GitHub](https://github.com/google/closure-templates/tree/master/examples)

Quando um dado é passado para o componente, o template renderiza somente as partes que realmente precisam ser atualizadas, o mecanismo que faz com que isso aconteça é o IncrementalDOM([incremental-dom | An in-place DOM diffing library](https://google.github.io/incremental-dom/))

### IncrementalDOM

O incrementalDOM é uma biblioteca para representar e aplicar modificações na DOM. O que acontece nele é que se faz uso de chamadas de Javascript para representar esses nós da arvore e a biblioteca faz com que aconteça a operação de diff, de maneira incremental, em cima da própria DOM, diferente do React que usa uma DOM em memória chamada virtualDOM.

O incrementalDOM não é utilizado de maneira direta. São usados várias ferramentas como metal-tools-soy e plugins de babel(no caso de JSX) para converter os templates em chamadas de incrementalDOM e a partir disso, o metal consegue interceptar e fazer mudanças em cima do IncrementalDOM.

Para saber mais sobre IncrementalDOM, veja o link a seguir: 
[incremental-dom | An in-place DOM diffing library](https://google.github.io/incremental-dom/#why-incremental-dom)

### Ciclo de Vida

Você provavelmente irá querer executar alguma coisa ou tratar seus dados no seu componente. Para isso, temos os ciclos de vida do metal.js, em que existem vários disponíveis e você pode encontrar mais informação aqui: [Component Lifecycle - Metal.js](http://metaljs.com/docs/guides/component-lifecycle.html)

### Renderização

Você pode usar as linguagens de template descritas acima, quanto você pode usar Javascript puro para renderizar componentes de Metal. Todos os componentes são instanciáveis, visto que são objetos e pode-se passar valores para esses num objeto de configuração como o exemplo abaixo:
`new Modal(data, '#parentElement');`

Em que no primeiro argumento é o objeto citado(que foi chamado de `data`) e o segundo é o seletor para o metal dar o replace no elemento da DOM existente e dar o bootstrap da aplicação.

Mais informações:
[Rendering Components - Metal.js](http://metaljs.com/docs/guides/rendering-components.html)

### Eventos

Eventos podem ser atachados a componentes de metal das 3 formas descritas no tutorial abaixo:

[Inline Events - Metal.js](http://metaljs.com/docs/guides/inline-events.html)

### Mais informações

Para mais informações sobre Metal, acesse a seguinte documentação:

http://metaljs.com/docs/guides/


Para informações sobre utilitários ou como saber como o metal.js funciona internamente, você pode acessar a seguinte URL: 

https://github.com/metal/metal-training/tree/master/docs/metal.js
