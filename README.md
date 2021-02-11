# Mutuus Pokemon App

Este projeto consiste em uma aplicação web criada para mostrar aos usuários amantes do Pokemon diferentes informações relacionadas às habilidades, tipos, stats, evoluções, imagens e principais caraterísticas de todos os Pokemons existentes.

A aplicação foi constrida com [React js](https://reactjs.org/) usando Hooks e Redux. Os dados dos Pokemons são obtidos via fetching desde a RESTful API do Pokemon, a qual pode ser encontrada neste [link](https://pokeapi.co/).

O projeto foi desenvolvido como parte do desafio de teste técnico passado pela empresa [Mutuus](https://www.mutuus.net/) no processo de seleção de novos membros para a equipe de desenvolvimento.

Alguns detalhes da aplicação são dados a seguir.

## Requerimentos da aplicação

Como requerimento principal foi especificado implementar uma solução web capaz de consumir a API do Pokemon para obter diferentes tipos de informações e apresentá-las para o usuário em uma interface gráfica no navegador.

A aplicação devia ser construida usando escencialmente a tecnologia de frontend de React js em combinação com o container de estados de aplicação oferecido por Redux.

As funcionalidades da aplicação consistem de:

- Uma tela principal que apresenta uma lista de Pokemons com uma vista preliminar da imagem do Pokemon e algumas das informações mais relevante como nome e tipo.
- A lista mencionada antes pussui função de scroll infinito através do qual o usuário pode fazer _scroll down_ para ir cargando e visualizando mais Pokemons na medida que a tela vai descendo.
- A vista premiliminar do Pokemon é apresentada em uma card sobre a qual tem um botão "Detalhes" que leva o usuário para uma tela com maiores informações sobre do Pokemon selecionado.
- A nova tela de detalhes possui um parte fixa com a imagem do Pokemon, e uma navegação em formato de abas. Na primeira aba, o usuário pode acessar às informações de caraterísticas do Pokemon (habilidades, peso, altura, tipo, forma, etc.). A segunda aba corresponde à cadeia de evolução do Pokemon selecionado, mostrando o Pokemon de estado anterior e o da segunte evolução, assim como também uma lista extendida de todos os Pokemons da acdeia de evolução. Finalmente, na aba de "_stats_", são mostradas informações de valor de ataque, velocidade, defesa, etc.

### Instalação

O repositorio do projeto pode encontrado [aqui](https://github.com/EfrainRodriguez/Mutuus-Pokemon-App.git). Você pode escolher em baixar ou clonar o projeto usando o comando `clone` do Git:

```console
git clone https://github.com/EfrainRodriguez/Mutuus-Pokemon-App.git
```

Para instalar o projeto você precisará ter instalado `Node js` e `npm` em seu computador. Você pode econtrar o Node js para baixar [aqui](https://nodejs.org/en/).

Abra o projeto com seu editor de código favorito ou use a terminal de comandos. estando no diretório principal do projeto, execute o seguinte comando para instalar a aplicação:

```console
npm install
```

Isso instalará todas as dependencias necessárias para rodar o programa.

## Execução

Estando no diretorio principal, digite na terminal o comando:

`npm start`

isso abrirá automáticamente a aplicação no seu navegador padrão usando a url [http://localhost:3000](http://localhost:3000).

### Sobre a estrutura da aplicação

A figura abaixo apresenta a esquematização da estrutura dos componentes de React criados para a aplicação. O componente raiz da aplicação é denotado como `<App/>`. Nesse componente são chamados os componentes `<Home/>` e `<PokemonProfile/>`, os quais representam a tela principal com lista de Pokemons e a tela de perfil de um Pokemon selecionado, respectivamente. O paso de uma tela à outra é possível através da configuração do `react-router-dom` que permite criar as rotas associadas a esse componentes usando os componentes `Router`, `Switch` e `Route` que são parte do `react-router-dom`.

O componente `<Home/>` chama internamente o componente `<PokemonCard/>` para criar as vistas preliminares de cada Pokemon na lista principal. Por outro lado, o componente `<PokemonProfile/>` usa os componentes `<AboutPanel/>`, `<EvolutionsPanel/>` e `<StatsPanel/>` para apresentar diferentes tipos de informações sobre do Pokemon selecionado pelo usuário dependendo sobre a aba da interface gráfica na qual o usuário esteja.

      <App/>
        |___________________________________
        |       react router dom            |
     <Home/> <<----------------->>  <PokemonProfile/>
        |                   ________________|_____________
        |                   |               |             |
    <PokemonCard/>      <AboutPanel/> <EvolutionsPanel/> <StatsPanel/>

O gerenciamento do estado da aplicação é realizado em parte por meio de Redux, o qual consiste em um mecanismo que permite centralizar o estado da aplicação para que qualquer componente possa acessá-lo, independentemente do nível da hierarquia onde esteja. Aqui foram criados estados com Redux para salvar a lista geral de Pokemons obtidos da API, também para o Pokemon selecionado pelo usuário, para a URL da seguinte petição de dados, e para o erro. Componentes de um nível baixo na hierarquia da aplicação como os usados dentro do componente `<PokemonProfile/>` podem acessar esses estados com ajuda do Hook `useSelector`.

Foi instalada a ferramenta `redux devtools extension` para Google Chrome que facilitou o monitoramento dos estados e fluxo do processo no inspetor no navegador, graças ao uso de middlewares com `react-thunk`.

Para criar a funcionalidade de scroll infito foi instalado e usado o modulo `react-infinite-scroll-component`. 

Para agregar estilos foram usadas classes de `Bootstrap` junto com componentes de `react-bootstrap`, ambos modulos instalados via `npm`.

### Comnetários sobre o ciclo de vida dos componentes em React

Nos inícios de React, os componentes eram criados com classes extendendo a classe React Component, e com isso os componentes criados aproveitam as vantagens da herança para adquirir funcionalidades para gerenciar seu proprio estado. Esses componentes possuem um ciclo de vida, que é composto essencialmente por três fases: a montagem do componente, atulização e a desmontagem... no entanto, também é considerado como fase do ciclo de vida a inicialização do estado do componente...

Depois, apareceram os Hooks, que são uma serie de métodos que permitem criar componente a partir de funções. Com essas funcções também é possível gerenciar o ciclo de vida do componente usando uns métodos conhecidos como os Hooks, sendo mais usados o `useState` e o `useEffect`... o primeiro para accessar ao estado do componente e o segundo para realizar as operações de montagem do componente, atualização (pudendo ser por variável linkada), e cleanup, que seria a desmontagem.

Algo que vale a pena ressaltar também é que os componentes podem se comunicar uns com os outros ao longo do seu ciclo de vida, já seja por meio da `props` que são mensagens entre eles, ou então usando ferramentas como Redux onde o estado está centralizado para todos.

De maneira geral, os componentes em React tem um estado e um ciclo de vida que consiste de fases nas quais acontece alguma coisa com esse estado.

### Observações

De fato trabalhar com React traz muitos beneficios em termos de rendimento da aplicação pois ao ser baseado em componentes que tem estado proprio não precisa de atulizar toda pagina atual da aplicação cada vez que o cliente faz alguma transação, ao invés disso só atuliza o estado do compoennte individual... isso é mais notável ainda quando se trabalha com o supoerte para server side rendering usando o framework de Next js por exemplo.

No caso da aplicação deste projeto, pode ser visto que existem três componentes que são chamados por outro cada vez que o usuario gera uma ação mudando de aba. Esses componentes são chamados e insertados na pagina com todo o estado deles sem ter que recarregar a pagina interira, e o melhor que podem ser reaproveitados em qualquer parte da aplicação.

Uma coisa que considero muito legal é o fato de o desenvolvedor focar em criar as funcionalizades e não se preocupar pelo trabalho extra de configurar tantas coisas, e mais usando o `create-react-app`.

Opinando um pouco sobre o Redux, ele é uma ferramenta muito poderosa, que em aplicações grandes, com muitos componentes estruturados em uma hierarquia complexa, e que además tenha tendência de escalabilidade, pode facilitar muito trabalho e auxiliar no gerenciamento do estado da aplicação... No entanto, em aplicações menores, com poucos componentes, como a aplicação deste projeto, o uso de Redux fica como sobredimensionamento e agrega complexidade que pode ser evitada com o uso unicamente de `props` ou tambem com `context`.

Para este projeto, as tarefas pessadas associadas à consulta à Pokemon API, são feitas unicamente nos componentes do `<Home/>`e `<PokemonProfile/>`, e os dados das consultas são colocadas na `store` de Redux para que os outros componentes como os paineis de informação do Pokemon, simplesmente busquem a informação de interesse no estado e não tenham que realizar petições repetitivas à API muitas vezes.

**Finalmente, concluo que desenvolver este exercicio foi muito agradável, divertido e enriquecedor em mais experiência e conhecimento.**


**Contribui:** Efrain Rodriguez