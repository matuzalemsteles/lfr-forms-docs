---
path: "/high-level-view"

order: 3
title: "Visão Alto Nível da Aplicação"
---

Pode-se distinguir 3 principais partes do Forms: A (User View)[#user-view]: parte que somente renderiza os formulários, (Form Builder)[#form-builder-view]: parte que cuida da criação desses formulários, assim como a Sidebar e a (Rule Builder View)[#rule-builder-view]: que toma de conta do criador de regras.

# User View

Não existe muito o que dizer sobre essa parte, ela é uma parte representacional da estrutura de um formulário montada previamente pelo (Form Builder)[#form-builder-view] e o (Rule View)[#rule-builder-view].

# Form Builder View

Basicamente o Builder monta como será a estrutura dos fields em que o User View irá exibir. Nele fica o componente de Sidebar que é responsável para montar essas estruturas assim como a lógica de mudar a forma de como esses Fields estão dispostos na User View, com ferramentas tipo o Resize.


# Rule Builder View

Na parte de criação de regras(Rule Builder), podemos definir regras como se podemos exibir ou não um field em um determinado estado de outro field ou regras considerando entidades do DXP. 

# Localização

Normalmente você pode encontrar códigos do User View no módulo `dynamic-data-mapping-form-renderer` e a parte do Builder, analogamente ao módulo `dynamic-data-mapping-form-builder` assim como a parte de Regras.

# Como funciona a integração do Form Builder com a User View?

Como já foi abordado anteriormente, o Form Builder é responsável para criar estruturas para serem renderizadas usando o User View, mas como isso acontece?

No Forms, é seguido o padrão de Redux em que existem ações como `fieldAdded` que partindo da Sidebar(Builder) fala para a store do Forms(LayoutProvider) que um field novo foi adicionado em determinada região e o valor é atualizado no User View.

Como por exemplo:

```
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

```
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

