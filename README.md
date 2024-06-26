Deploy: https://aluraflix-three-tan.vercel.app/

![](https://raw.githubusercontent.com/gio-bon/aluraflix/main/src/assets/Screenshot%202024-06-26%20at%2016-36-01%20Vite%20React.png)
![](https://raw.githubusercontent.com/gio-bon/aluraflix/main/src/assets/Screenshot%202024-06-26%20at%2016-37-14%20Vite%20React.png)
![](https://raw.githubusercontent.com/gio-bon/aluraflix/main/src/assets/Screenshot%202024-06-26%20at%2016-36-21%20Vite%20React.png)

# Projeto

- `npm create vite@latest`
- `npm install`
    - `npm install react-icons`
    - `npm install react-router-dom`
    - `npm install styled-components@latest`
    - `npm install -g json-server`
- Use a extensão do VSCode `ES7+ React/Redux/React-Native snippets` para usar comando `rafce` que cria um componente funcional React com exportação
- `npm run dev`
- Apagar arquivos do projeto padrão que não serão usados.
- criação de `/src/routes.jsx` para criar rotas
- criação de `/src/pages`
- criação de `/src/components`
- criação de `/db.json`
- iniciar o servidor da API falsa `json-server --watch db.json`
- Agora você pode realizar requisições HTTP para http://localhost:3000/ para interagir com seus dados simulados.
- Fake JSON Server: https://my-json-server.typicode.com/gio-bon/fake_json_server_aluraflix

## Compreensão

- A pasta `public` é usada para armazenar arquivos estáticos que serão servidos diretamente pelo servidor web. Para referenciar arquivos da pasta `public` no seu código React, você pode usar a URL relativa que começa com `/`. Por exemplo `<img src="/images/some-image.png" alt="Some Image" />`
    - **​`index.html`​** é o arquivo HTML principal do seu aplicativo React. Você pode incluir links para fontes, meta tags, e outras configurações que você deseja que sejam carregadas no início
    - Arquivos de imagens como logos, ícones e outras imagens estáticas podem ser colocados na pasta `public`.
    - Qualquer outro arquivo estático que você precisa servir diretamente sem processamento pode ser colocado aqui.

## Não funciona

- criação de `/jsconfig.json` ajuda a simplificar e organizar as importações no projeto React, estabelecendo `src` como a base para os caminhos dos módulos e limitando os arquivos incluídos no projeto ao diretório `src`
```
{
    "compilerOptions": {
        "baseUrl": "src"

    },
    "include": [
        "src"
    ]
}
```