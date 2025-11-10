<!-- - Fazendo build:
╭─eddev@eddev ~/minha-api
╰─$ docker compose up -d --build

- Para rodar o servidor:
╭─eddev@eddev ~/minha-api
╰─$ node src/server.js

- Para subi a API:
╭─eddev@eddev ~/minha-api
╰─$ docker logs -f minha-api-app-1

- Testando a rota:
╭─eddev@eddev ~/minha-api
╰─$ curl -v http://localhost:3000/users

- Testando a API:
http://localhost:3000

- Parando o container:
╭─eddev@eddev ~/minha-api
╰─$ docker-compose down -v

- Removendo o conteiner:
╭─eddev@eddev ~/minha-api
╰─$ docker compose down -v --remove-orphans

╭─eddev@eddev ~/minha-api
╰─$ docker system prune -af

╭─eddev@eddev ~/minha-api
╰─$ docker system prune -a --volumes

╭─eddev@eddev ~/minha-api
╰─$ docker image prune -a -->