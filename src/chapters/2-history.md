---
path: "/history"

order: 2
title: "História"
---

# Da onde veio o Forms?

O portlet de Forms que temos hoje no Liferay DXP é um reflexo de evoluções e adaptações de soluções mais antigas desenvolvidas pela Liferay. Em meados de 2010, Michael Han percebeu nos nossos clientes a necesidade de se adaptar o banco de dados do Liferay para suportar customizações que eram muito comuns ao se implantar um sistema com Liferay. Baseado nessa necessidade, ele idealizou um sistema onde um usuário poderia modelar um banco de dados utilizando a própria UI do Liferay sem a necessidade de programação ou de alterar o banco de dados do próprio Liferay através de SQL.

Esse sistema recebeu o nome de Dynamic Data Lists. Com ele veio a [primeira implementação de um Form Builder pela Liferay](https://github.com/liferay/alloy-ui/commit/99b3c5d0d09c1867e8b9962ea4fe95f383611b07#diff-ef9f2ea7373eb89698ac6953359e5a8d). Um componente que se utlizava de Drag and Drop onde o usuário poderia arrastar os campos do banco de dados que desejava criar. A implementação foi feita utilizando o framework adotado pela Liferay na época: [AlloyUI](http://alloyui.com/).

# Tá! E o que aconteceu de lá pra cá?

Desde o começo de sua implementação em Janeiro de 2011 (há mais de 9 anos atrás), o Form Builder passou por vários ciclos de bug fixing, melhorias e reescritas. Por volta de 2014 ele foi reescrito ainda em AlloyUI para suportar **Layouts**: Uma feature que permitia que o usuário criasse um formulário com multiplas **linhas e colunas**. Nessa época a Liferay Brasil tinha acabado de contratar seus primeiros designers e aproveitou essa reescrita para fazer melhorias na UI. Uma dessas "melhorias" foi a **remoção do Drag and Drop** porque alguns feedbacks sobre o produto diziam que ele tornava a aplicação muito complexa.

Essa remoção acabou não sendo muito bem aceita pelos usuários do produto e algum tempo depois, o **Drag and Drop foi adicionado novamente**. Adicionar o Drag and Drop de volta dessa vez não foi tão trivial porque o Form Builder tinha sido reescrito sem esse requisito em mente.

E o Form Builder ficou nesse estado durante um bom tempo. Algumas melhorias foram sendo implementadas aos poucos, mas a maiora das mudanças eram bug fixes. Nessa época o departamento de Front End da empresa estava focada na construção de um novo framework para se desenvolver aplicações, pois o **AlloyUI estava depreciado** (porque o framework em cima do qual ele foi construido foi depreciado).

**A Liferay lançou seu novo framwork - o [Metal.js](/metal) -** por volta de 2016 e foi migrando todos os portlets para usar esse framework aos poucos. Após algum tempo, AlloyUI dentro do portal era a minoria e o Form Builder era uma deles. O time de Front End Infrastructure começou a pressionar para a remoção de todo código que utilizasse AlloyUI do portal. Por volta de 2018 o time conseguiu convencer o gerente de produto de que era necessário investir algum tempo para modernizar o código, já que ter um produto feito em cima de um framework que não era mais mantido era um risco.

Foi então que a impementação que temos hoje começou a ser feita. O prazo era curto e a aplicação já tinhas muitos anos de história (requerimentos e edge cases a serem tratados). Uma das grandes dificuldades era que não existia padrão em vigor para se desenvolver aplicações do porte do Forms em metal. O próprio time teve que pensar em alguma forma de gerenciar estado de uma forma que fosse organizada e escalável. Mais a frente vamos ver como o [Efeito Boomerang](/boomerang) foi concebido para resolver este problema.

# Resumo da ópera

Essa história toda é pra dizer que o Forms é uma aplicação complexa, com muita bagagem histórica e várias reescritas por pessoas diferentes e às vezes sem muito conhecimento das ferramentas (porque essas ferramentas não viveram o suficiente para serem bem documentadas). Isso faz com que o código possa não fazer sentido muitas vezes, mas o intuito desse documento é justamente tentar esclarecer o que estiver sombrio :)

