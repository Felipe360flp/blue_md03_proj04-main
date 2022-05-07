# Projeto 04 - Módulo 03 - Back-end
## _Blue Ed Tech Projeto Extra, Turma 12 - 2022_
### API Rick Morty Back end 

Autores: <br/>
Marcelo A Santos - GH: _DJMarshallSantos_<br/>
Felipe Santos - GH: _Felipe360flp_<br/>
<br/>
Tutores Turma 12 - 2022: <br/>
Leo Ruiz - GH: _Leoruiz197_<br/>
Maria Eduarda de Araújo Cardoso - GH: _dudahcardoso_<br/>
<br/>
## Objetivo

Desenvolver uma API totalmente do zero, que seja capaz de suprir o front-end apresentado a seguir.

### _O projeto deve ter:_

### Endpoints 

#User

- [post] Criar usuário
- [Get] Buscar todos os usuários

#Auth

- [Post] Login de usuários 

#Characters

- [GET] Leitura de todas os personagens 
- [GET] Leitura de personagens individuais (por ID) 
- [POST] Criação de personagens 
- [PUT] Edição de personagens por ID 
- [DELETE] Exclusão de personagens por ID 

### Requisitos 

- Persistência de dados no MongoDB Atlas
- Formatação do código utilizando o Prettier 
- Documentação Swagger
- Status Code corretos em todos os endpoints
- Deploy
- Autenticação JWT

## Tech

Tecnologia usada no código:

- [express] = Um framework Node.js mínima e flexível que fornece um conjunto robusto de recursos para desenvolver aplicativos da Web e móveis.
- [nodemon] = Uma ferramenta que ajuda a desenvolver em node. js, reiniciando automaticamente o aplicativo do nó quando as alterações de arquivo no diretório são detectadas.
- [mongoose] = Uma biblioteca de modelagem de dados de objeto (ODM) para MongoDB e Node.js.
- [cors] = Um mecanismo para permitir ou restringir recursos solicitados em um servidor web dependendo de onde a solicitação HTTP foi iniciada.
- [bcrypt] = Método de criptografia do tipo hash para senha.
- [JWT] = Padrão para autenticação e compartilhamento de informações por meio
de um token.
- [swagger] - Conjunto de ferramentas para documentação de APIs.
- [node.js] - E/S com eventos para back-end.

## Instalação

Instalação do node.js
1- Via navegador visite https://nodejs.dev/download/ e baixe o instalador do node.js
2- Sequindo os passos do instalador instale o software
3- Verifique a instalação usando command-prompt ou powershell

```sh
node -v
```

4- Faça o mesmo para NPM

```sh
npm -v
```

Instalação das dependências.

```sh
npm i express
npm i nodemon -D
npm i mongoose
npm i cors
npm i swagger-ui-express
npm i bcryptjs
npm i jsonwebtoken

## License
**Público**
