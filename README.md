## Instalação

### Backend (Java Spring Boot)

1. Clone o repositório:
    ```bash
    git clone https://github.com/andreluas/product-register.git
    ```
2. Entre na pasta do backend:
    ```bash
    cd backend
    ```
3. Execute o servidor:
    ```bash
    ./gradlew bootRun
    ```

### Frontend (React com Vite)

1. Entre na pasta do frontend:
    ```bash
    cd frontend
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## Configuração do Banco de Dados

- **PostgreSQL**: Certifique-se de que o banco de dados está configurado corretamente para o Spring Boot, com as credenciais adequadas no arquivo `application.properties` ou `application.yml`.

## Endpoints da API

Todos endpoints podem ser verificados no arquivo Insomnia.json.

## Contribuindo

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Comite suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

