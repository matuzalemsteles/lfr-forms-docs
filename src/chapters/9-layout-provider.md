---
path: "/layout-provider"

order: 9
title: "Layout Provider"
---

# What is it?

## Draft

# Localização

Você pode encontrar códigos do User View no módulo `dynamic-data-mapping-form-renderer` e a parte do Builder, analogamente ao módulo `dynamic-data-mapping-form-builder` assim como a parte de Regras.

# Como funciona a integração do Form Builder com a User View?

Como já foi abordado anteriormente, o Form Builder é responsável para criar estruturas para serem renderizadas usando o User View, mas como isso acontece?

No Forms, é seguido o padrão de Redux em que existem ações como `fieldAdded` que partindo da Sidebar(Builder) fala para a store do Forms(LayoutProvider) que um field novo foi adicionado em determinada região e o valor é atualizado no User View.

Como por exemplo:

```javascript
dispatch(
  ‘fieldAdded’’,
  {
    pageIndex: 0,
    rowIndex: 0,
    columnIndex: 0,
    fieldType: ‘text’
  }
);
```

Enquanto no Layout Provider, ele recebe dados vindo dessa ação da seguinte forma:

```javascript
this.on(‘fieldAdded’, payload => {
    const {pages} = this.state;
    const {pageIndex, rowIndex, columnIndex, fieldType} = payload;

    // Realiza a operação de adicionar um field no local especificado pelo evento
    pages[pageIndex].rows[rowIndex].columns[columnIndex].fields.push(createField(fieldType));
    
    // Atualiza estado da aplicação. Isso faz com que haja uma renderização da aplicação e o novo field deverá aparecer no Form Builder
    this.setState({pages});
})
```

No Forms, existem várias ações disponíveis. Você terá mais detalhes na parte de LayoutProvider(#9).

