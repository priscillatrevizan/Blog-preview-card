# Blog Preview Card - Frontend Mentor

![Prévia do design para o desafio Blog Preview Card](./public/design/preview.jpg)

## Bem-vindo! 👋

Este projeto foi desenvolvido como parte de um desafio do [**Frontend Mentor**](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS), que visa a construção de um card de visualização de blog o mais fiel possível ao design proposto.

## O Desafio

O desafio é construir um componente de cartão de visualização de blog utilizando React e CSS com variáveis, garantindo que ele seja responsivo e funcional em diferentes dispositivos. Os usuários devem conseguir:

## Ferramentas Utilizadas

- **React**: Para a construção de componentes e a organização da lógica da aplicação.
- **CSS com variáveis**: Para estilização, utilizando variáveis para cores, espaçamento e tipografia, garantindo consistência e fácil manutenção.


## Estrutura do Projeto

- **Card.js**: Componente principal que exibe o conteúdo do card.
- **Card.css**: Arquivo de estilo responsável pelo design do componente.
- **App.js**: Arquivo onde o componente `Card` é renderizado.

## Como Iniciar o Projeto

Este projeto foi inicializado com o **Create React App**. Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/blog-preview-card.git

2. Instale as dependências:
    ```npm install```

3. Execute o projeto em modo de desenvolvimento:
    ```npm start```

## Sobre a Estilização

Utilizei CSS com variáveis para definir as cores e tipografia principais do projeto. As variáveis ajudam a manter a consistência visual e facilitam mudanças globais no design. 

    ```:root {
      --color-primary: #F4D04E;
      --color-background: #FFFFFF;
      --color-text-primary: #111111;
      --color-text-secondary: #6B6B6B;
      --font-family: "Figtree", sans-serif;
    }
    ```

## Responsividade

Foi garantida a responsividade do layout com o uso de media queries, ajustando o layout para telas menores e mantendo a boa usabilidade em dispositivos móveis.

## Estados de Hover e Foco

Elementos interativos, como imagens e botões, têm seus estados de hover e foco bem definidos para melhorar a experiência do usuário.


## Aprendizado
Ao desenvolver este projeto, pude rever conceitos e praticar meu conhecimento em:

- Organização de componentes com React.
- Utilização de variáveis CSS para um design mais consistente.
- Responsividade e acessibilidade.
- Deploy


## Deploy

O projeto foi publicado utilizando Vercel, uma ferramenta eficiente para deploy de aplicações React.

E sua versão online pode ser vista [aqui](https://blog-preview-card-kohl-six.vercel.app/).
