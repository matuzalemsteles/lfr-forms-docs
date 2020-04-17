---
path: "/fields"

order: 11
title: "Fields"
---

#  Fields
Fields são a parte mais fundamental de um formulário. Dentro desses componentes existem lógicas para tratar os casos de uso designados a eles e também a maneira de como se comunicam com o contexto do Forms.

Essa comunicação é dada emitindo eventos para o provedor mais próximo(como o PageRenderer ou o FormRenderer) que irá repassar para ao LayoutProvider.

# FieldBase

O FieldBase é um componente "pai-genérico-comum" de um field em que é renderizado partes comuns a todos os fields, como elementos e lógicas de validação e lógicas para tornar o field “repetitivo/removível”, se o field precisa ser preenchido obrigatoriamente.