# Projeto de front-end Granfinalle

Para rodar o projeto basta clonar ele e executar no terminal dentro da pasta *npm run dev*

No inicio do código começo importando os estados do React que irei utilizar, na sequência comecei criando as váriaveis que irei trabalhar para manipular as informações que recebo da API
Na linha 11 inicio recebendo as informações da API e já tratando erro caso as informações não cheguem e também setei uma váriavel para apresentar um carregamento enquanto aguardo as informações e quando recebo transformo em json.
Na linha 31 começo a trabalhar com a API nativa no caso optei pela geolocalização, e também já faço a tratativa de erro caso ocorra, ou o usuário não permita acessar a localização.

No Return é onde começa a renderizar o código em tela recebendo os valores da API começo a apresentar em tela conforme a "Msg" que recebo da API. Ao fim eu exporto o código para conseguir acionar ele quantas vezes eu quiser no meu main.jsx (reponsável por guardar o "esqueleto" do código.

Primeiro gostaria de agradecer a oportunidade pois pude aprender mais sobre consumos de API, peço desculpas por ter ficado feio, eu queria ter feito algo relativo ao natal mas não consegui encaixar o CSS com o código. Também sei que eu poderia ter modularizado colocando cada coisinha em uma função que tenha um nome auto-sugetivo ou até mesmo dentro de um arquivo novo para depois conseguir acionar quantas vezes eu quiser, mas não consegui, ainda estou aprendendo, sei dos conceitos, mas me falta mão na massa e sei que posso adiquirir isso com vocês.
