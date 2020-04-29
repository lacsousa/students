# Projeto: Cadastro de Alunos exibindo exemplos de utilização de algumas tecnologias, como: Node.js; Sequelize; Yup; Banco de Dados PostgreSQL.

Estou preparando um artigo para explicar o uso das tecnologias utilizadas nesse repositório. 

Por enquanto, você pode baixar o projeto e na pasta do projeto executar : 

    yarn install

E depois: 

    yarn dev
    
*** Para efetuar testes utilize um software como o: Insomnia (https://insomnia.rest/). Um cliente REST, para que você possa testar as rotas disponíveis na aplicação. 

  - Rotas disponíveis: 
    - Listar estudantes - Tipo GET - http://localhost:3001/students
    - Criar um novo estudante - Tipo POST - http://localhost:3001/students
      - Passando um JSON, como: {
	                                "name" : "Luciano Cordeiro",
	                                "email": "luciano@gmail.com",
	                                "age" : 36
                                 }
    
