User List
=======================

Introdução
------------
Esse projeto tem como objetivo realizar a apresentação e o conhecimento relacionada ao desenvolvimento JavaScript. Nesse caso foi utilizado o Angular, NodeJS, ExpressJS, e TypeScript para essa finalidade.

O Projeto consiste na exibição/listagens de usuários, com os recursos de adicionar um novo usuário, 
editar um determinado usuário, e ainda a sua exclusão.

O sistema ainda possui a opção de consumir as informações através da API Rest, esse mesmo recurso é utilizado para
realizar as operações CRUD do sistema.

Para que as informações sejam salvas, foram utilizadas o MongoDB e o Local Storage. Para utilizar um ou outro consulte 
a seção "Execução da Aplicação".

Regras da aplicação
---------------------------
+ Gerenciar os usuários com inclusão / alteração e exclusão
+ Interface para visualização da lista dos usuários
+ Interface responsiva

### Tecnologias usadas
Para o desenvolvimento da aplicação foram utilizados os seguintes recursos:

+ NodeJS 6
+ Angular 5
+ ExpressJS
+ TypeScript
+ MongoDB
+ Restful
+ Bootstrap
+ Local Storage

### Ambiente de Desenvolvimento

+ IDE Visual Studio Code

### Requisitos da Aplicação

+ Git
+ NodeJS
+ MongoDB (apenas se não for usar o localStorage)

### Execução da Aplicação
Para realizar o uso da aplicação, basta seguir os seguintes passos:

1. Através do 'prompt command' ou 'git bash', realizar o clone do projeto pelo comando:

        git clone git@github.com:diogomarcos/user-list.git user-list

2. Com o 'prompt command' ou 'git bash', navegue até a pasta do projeto `user-list` e execute o comando abaixo para 
fazer o download dos requisitos necessários para o funcionamento da aplicação:

        npm install

3. Para usar o banco "localStorage" ou "MongoDB", basta você ir no diretório `user-list\config\system.js`, e alterar
o valor da variável `exports.USE_MONGODB`, sendo que TRUE é para usar o "MongoDB" e FALSE para usar o "localStorage".

4. Finalizando o passo 2, pelo 'prompt command' ou 'git bash', estando na pasta do projeto `user-list` execute 
o comando abaixo para executar a aplicação:

        npm start

5. Em seu navegador de preferência use o endereço abaixo para ter acesso a aplicação:

        http://localhost:3000

### Considerações Complementares
1. O Projeto também pode ser utlizado como API REST, abaixo você encontra um exemplo usando o método POST para criar
um novo usuário.

+ Ação Add (POST):
    + URL: http://localhost:3000/user
    + HTTP Method: POST
    + Accept Header application/json
    + Content-Type Header: application/json
    + Body: email, first_name, last_name, vat, company, address, country, postal_code, city e state
    + Exemplo:
    ![alt tag](https://raw.githubusercontent.com/diogomarcos/user-list/src/assets/images/screen/tela-api.PNG)

### Resultado do Desenvolvimento
Abaixo estão disponibilizados as telas da aplicação:

+ Página Inícial / Gerenciar Usuários:
![alt tag](https://raw.githubusercontent.com/diogomarcos/user-list/src/assets/images/screen/tela-inicial.PNG)

+ Tela Adicionar Usuário:
![alt tag](https://raw.githubusercontent.com/diogomarcos/user-list/src/assets/images/screen/tela-add.PNG)

+ Tela Editar Usuário:
![alt tag](https://raw.githubusercontent.com/diogomarcos/user-list/src/assets/images/screen/tela-edit.PNG)

+ Tela Excluir Usuário:
![alt tag](https://raw.githubusercontent.com/diogomarcos/user-list/src/assets/images/screen/tela-delete.PNG)

