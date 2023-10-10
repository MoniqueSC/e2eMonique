#language: pt

            Funcionalidade: Login
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que o cliente acesse a página de login

            Esquema do Cenário: Cadastro válido
            Quando digitar o <e-mail>
            E a senha <senha>
            Então valido tela de Checkout

            Exemplos:
            | e-mail                 | senha        |
            | "moniquesant@ebac.com" | "monique123" |
            | "joao@ebac.com"        | "joao123"    |
            | "guilherme@ebac.com"   | "gui123"     |

            Esquema do Cenário: Senha inválida
            Quando digitar o "moniquesant@ebac.com"
            E a senha <senha>
            Então valido a mensagem "Usuário ou senha inválidos"

            Exemplos:
            | senha           |
            | "monique1234"   |
            | "jo1234"        |
            | "guilherme1234" |

            Esquema do Cenário: Usuário inválido
            Quando digitar o <e-mail>
            E a senha "monique12345"
            Então valido a mensagem "Usuário ou senha inválidos"

            Exemplos:
            | e-mail                     |
            | "moniquesantiago@ebac.com" |
            | "joao12@ebac.com"          |
            | "gui@ebac.com"             |