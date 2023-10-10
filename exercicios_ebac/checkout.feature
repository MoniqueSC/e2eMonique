#language: pt

            Funcionalidade: Tela de Cadastro - Checkout
            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro
            Para finalizar minhas compras

            Contexto:
            Dado que preencha o cadastro do Usuário

            Esquema do Cenário: Campos marcados com asterisco
            E preencho <nome> <sobrenome> <pais> <endereco> <cidade> <cep> <telefone> <email>
            Quando clicar em salvar
            Então posso finalizar a compra

            Exemplos:
            | nome      | sobrenome  | pais     | endereco  | cidade   | cep    | telefone   | email            |
            | "Monique" | "Santiago" | "Brasil" | "Rua 123" | "Santos" | 115550 | 1354559654 | monique@ebac.com |

            Esquema do Cenário: Email inválido
            E preencho <email>
            Quando clicar em salvar
            Então valido a <mensagem> "Formato email invalido"

            Exemplos:
               email         | 
            |  "Teste"       |
            |  "Teste@"      |
            |  "Teste@."     |
            |  "Teste@gmail" |
            | "Teste@gmail.A"|
            | "Teste@gm15l"  |
            |  "Teste!gm15l" |

            Esquema do Cenário: Cadastro incompleto
            Quando  deixar de preencher algum campo obrigatório
            Então valido a mensagem "Campos não preenchidos."