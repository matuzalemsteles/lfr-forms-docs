---
path: "/form-builder-and-sidebar"

order: 10
title: "Form Builder e Sidebar"
---

# Form Builder

O FormBuilder é composto do FormRenderer e o PageRenderer.

O FormRenderer é a parte que lida com o modo de renderização do Form Builder, como se vai ter páginas ou não, se tiver, como essas páginas irão ser mostradas(Pagination, Wizard, Tabbed, Grid). Existem mais detalhes sobre esse componente na parte de FormRenderer.
￼
# Sidebar
O componente de Sidebar também utiliza o Form Renderer, ele é usado na parte de configuração dos fields para que se reuse os mesmos fields.

A Sidebar é um componente do Forms em que dentro dele existem lógicas para fazer o drag-n-drop dos fields, emissão de eventos para o LayoutProvider para alteração na estrutura do formulário. Como por exemplo o `settingsContext` que tem informações que descreve como um determinado field deve ser mostrado.

# Como alterações na Sidebar fazem os fields dentro do Form Builder serem modificados?
Primeiramente, é importante salientar que Sidebar e Form Builder são componentes irmãos e eles não se comunicam de maneira direta. A única coisa que compartilham é o LayoutProvider e é por ele que eles fazem alterações na estrutura do Formulário e a partir disso um muda o outro.

Para qualquer mudança dentro de um field dentro do FormBuilder,  é emitido um evento de `fieldEdited`, `fieldBlurred` ou `fieldFocused` para o 
LayoutProvider e com isso a Sidebar consegue escutar as mudanças e vice e versa.
