---
path: “/observer-design-pattern”

order: 4
title: “Padrão de Projeto: Observer”
---

# O que esse padrão resolve?

Bem, o padrão observer é um design pattern em que um objeto contém uma lista de dependências chamadas observers e as notifica automaticamente assim que qualquer estado muda.

Esse padrão é implementado amplamente em sistemas de event handling. O padrão observer é o mais utilizado em bibliotecas e sistemas, utilizado quase que em qualquer pedaço de software escrito por pessoas que cuidam do frontend.

Segue abaixo um exemplo do uso desse padrão no Forms:

```js
// Dentro de um componente você encontrará provavelmente uma função que irá escutar(uma função de handler) determinado evento da aplicação como `fieldEdited` como:

function handleFieldEdited(data) {
	console.log(‘data from fieldEdited event: ’, data);
}

this.on(‘fieldEdited’, (data) => {
	this.handleFieldEdited(data)
})


// Assim como em outra parte da aplicação, terá algo emitindo o evento de `fieldEdited` com alguma informação, como:

this.emit(‘fieldEdited’, () => {
	return {
		field: ‘fieldinho_12323132’,
		value: ‘test’,
		originalEvent: <NativeEvent>
	}
})

// Ao emitir utilizando essa função, todos os componentes que estão escutando o evento de `fieldEdited` irão ser disparados.
```


** Para melhor compreensão, nossos EventEmitters/funções `emit` são nossos Publishers e as nossas funções `on` são nossos Subscribers. **

O padrão Observer pode causar vários vazamentos de memória, conhecidos como: [Lapsed listener problem - Wikipedia](https://en.wikipedia.org/wiki/Lapsed_listener_problem), em que se não forem removidos todos os listeners ao remover algum componente, podemos deixar vários listeners atachados no browser que não estão sendo mais utilizados e fazer com que o número de funções chamadas quando determinado componente for chamado cresça de forma exponencial.

Um tratamento para isso é adicionar no Lifecycle disposed do Metal.js o método `removeAllListeners`, se estiver usando o metal-events. No contexto de React, como o evento é sintético(um evento criado e gerenciado pelo próprio React) todos os listeners de evento são removidos quando o componente é destruído.

# Quais formas de lidar com eventos que temos no Forms?

* Utilizando o `metal-dom`, utilizando `dom.on`, para lidar com eventos da DOM nativos. Por exemplo adicionar determinado evento do browser como ‘scroll’ num componente.

* Utilizando o `metal-events`, nos componentes de Metal.js, essa implementação é sempre é usada e contém vários utilitários para se inscrever e emitir eventos. Um benefício é podemos criar nosso próprio evento, como `fieldEdited`, que não é padrão do browser.
 [metal.js/packages/metal-events at master · metal/metal.js · GitHub](https://github.com/metal/metal.js/tree/master/packages/metal-events)

* Nas partes que utilizam React, é usada a maneira padrão do React e quando necessário, passado alguma função de metal-events via props ou por Adapter para escutar/emitir eventos.
