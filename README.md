[![Netlify Status](https://api.netlify.com/api/v1/badges/0b060e86-21f9-4a54-9df4-d034fe8d116c/deploy-status)](https://app.netlify.com/sites/blog-blumenaujs/deploys)

<p align="center">
  <a href="http://fw7.com.br/">
    <img src="https://github.com/blumenaujs/site/blob/master/assets/logo.png" />
  </a>
</p>

<h1 align="center">
  BlumenauJS Blog
</h1>

Este é o repositório do [blog.blumenaujs.org](https://blog.blumenaujs.org)

## Sobre o projeto

Este projeto foi desenvolvido com [Gatsby](https://www.gatsbyjs.org/) e utiliza o tema [Novela](https://github.com/narative/gatsby-theme-novela). 

## Setup

```sh
yarn

yarn develop

## Open localhost:8000
```

## Enviando um post

Para enviar um post você deve fazer um _fork_ deste projeto, escrever seu post e criar um pull request.
Para que seu post seja aceito deve respeitar as seguintes condições:

- Deve ter adicionado seu perfil como autor no blog - [Como adicionar meu perfil como autor](https://github.com/blumenaujs/blog#adicionando-um-autor)

- Criar na pasta _content/posts/_ uma nova pasta para seu artigo seguindo o padrão de nomenclatura que é: _04-01-2020-nome-do-post_. Esta pasta deve conter a seguinte estrutura
  - Uma pasta _images/_ para colocar as imagens do seu post
  - Um arquivo chamado _index.mdx_ que é onde você irá seu escrever seus posts utilizando [mdx](https://github.com/mdx-js/mdx).
  - O arquivo _index.mdx_ deve conter a seguinte estrutura
  ```
    ---
      title: My first post
      author: My name # exatamente como colocou na lista de authores
      date: 2020-01-04
      hero: ./images/1.png # Foto de capa caso queira adicionar ao artigo
      excerpt: My post description
    ---
  ```


Caso tenha dúvidas de como utilizar mdx para escrever seu artigo pode seguir os exemplos do próprio [novela theme](https://github.com/narative/gatsby-theme-novela#step-5-adding-a-post).

## LICENSE

MIT
