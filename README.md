# SpaceX App

Esta aplicação foi criada com o intuíto de consumir os dados da API criada no repositório:

  ```https://github.com/marinafischer/spaceX-be```

É muito importante que você inicie clonando o repositório acima.

## Tecnologias

  - JavaScript;
  - React.JS;
  - React-Router;

## Para a execução do código, é necessário
  - node v16;

## Para iniciar
  - clone esse repositório:
    ```git@github.com:marinafischer/spaceX-fe.git```
  - entre na pasta criada:
    ``cd spaceX-fe``
  - na raiz do projeto execute o comando:
    ```npm install```
  - rode o comando:
    ```npm start```
  - a aplicação será iniciada na porta 3000 da sua máquina (lembre de startar a API também)

## Documentação do APP

### Tela Inicial

A aplicação inicia com uma tela com quatro opções para navegação.
Ao clicar no botão desejado, você é redirecionado para uma tela com detalhes da opção escolhida;

### Tela do Próximo Lançamento

Está opção é renderizada na rota /next
Nesta tela, caso a API esteja rodando, é exibido um card com as informações de nome, imagem, foguete e data de lançamento(convertida para o formato brasileiro).

### Tela do Último Lançamento

Está opção é renderizada na rota /latest
Nesta tela, caso a API esteja rodando, é exibido um card com as informações de nome, imagem, foguete e data de lançamento(convertida para o formato brasileiro).

### Tela dos Próximos Lançamentos

Está opção é renderizada na rota /upcoming
Nesta tela, caso a API esteja rodando, são exibidos cards, cada um com as informações de nome e data de lançamento(convertida para o formato brasileiro), além de um botão "ver detalhes" que ao ser clicado, mostra as informações de imagem e foguete.
Clicando no botão "ver menos", o card volta ao formato inicial.

### Tela dos Últimos Lançamentos

Está opção é renderizada na rota /past
Nesta tela, caso a API esteja rodando, são exibidos cards, cada um com as informações de nome e data de lançamento(convertida para o formato brasileiro), além de um botão "ver detalhes" que ao ser clicado, mostra as informações de imagem e foguete.
Clicando no botão "ver menos", o card volta ao formato inicial.

## Alguma dúvida?

- LinkedIn: [Marina Fischer](https://www.linkedin.com/in/marina-miranda-fischer/)
