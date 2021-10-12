import axios from "axios"

const apiRequest = axios.create({
  baseURL: "https://sitev.com.br/api",
  timeout: 3000
})

export default apiRequest

/* 
  5 rotas:
    1 - api/user
    Enviar data do clique no aceite.
    Aqui será capturado o ID que será passado em todas outras requisições.

    2 - api/user/:id/document-name
    Enviar social_name e document
    Aqui será validado o nome e o documento
    Aqui pode cair na tela de erro

    3 - api/user/:id/email-phone
    Enviar email e phone (Aqui será enviado um código para o email do usuário)

    4 - api/user/:id/code
    Enviar code

    5 - api/user/:id/password
    Enviar password
*/
