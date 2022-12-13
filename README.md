# Queen - Sistema de gerenciamento de eventos
## Projeto feito para a cadeira de Programação Orientada a Objetos
### Alunos: Isabella Nunes, Vinicius Lima, Amanda Bandeira, Jhonatas Flor

<br>

# Tecnologias usadas

- Nestjs (back-end)
- HTML5 + CSS3 + Javascript (front-end)
- Postgres

# Requisitos
- Postgres
- Nestjs
- arquivo "info.ts" com os dados do banco
- criar banco de dados (sequelize não o cria)

# Instalação

- Node <br>
<a href="https://nodejs.org/pt-br/download/">Link para o download do Node </a>
<br>

- Nestjs (globalmente)
```
    npm i -g @nestjs/cli
```

- Postgres <br>
<a href="https://www.postgresql.org/download/"> Link para baixar Postgres</a>
<br>

- Instalar bibliotecas node
```
    npm install
```
# Configurar banco de dados
- Após baixar o postgres abra o executavel PgAdmin e crie uma senha para seu usuario
- Crie o Banco de Dados dentro dos servidores
- Preencha o arquivo "info.ts" com os dados do banco:
    - Host
    - User (postgres é o usuario padrão do postgres)
    - Password
    - PORT (caso esteja usando em uma porta diferente da padrão)
    - DB (nome do banco de dados criado)
# Executar projeto 
### O frontend fica dentro do arquivo index.html na pasta frontend para executar o projeto
### Passo a passo:
- Configurar banco
- Iniciar Servidor
- Abrir index.html (frontend/index.html)
## Iniciar servidor - PORTA 3000
```
    npm run start
```

## Iniciar testes
```
    npm run test
```
