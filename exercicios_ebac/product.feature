#language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado seleciono o produto para comprar

            Esquema do Cenário: Seleções de cor, tamanho e quantidade devem ser obrigatórios
            E escolho a <cor> <tamanho> <quantidade>
            Quando clicar em comprar
            Então valido a mensagem "Seleções de cor, tamanho e quantidade devem ser obrigatórios"

            Exemplos:
            | cor    | tamanho | quantidade |
            | ""     | "XL"    | "1"        |
            | "Blue" | ""      | "10"       |
            | "Red"  | "L"     | ""         |

            Esquema do Cenário: Selecionar opções obrigatórias para adicionar ao carrinho
            E escolho a <cor> <tamanho> <quantidade>
            Quando clicar em comprar
            Então o produto sera adicionado ao carrinho

            Exemplos:
            | cor   | tamanho | quantidade |
            | "Red" | "XL"    | "1"        |

            Esquema do Cenário: Quantidade de produto por carrinho
            Quando escolho a <cor> <tamanho> <quantidade>
            Então valido a mensagem "Deve permitir apenas 10 produtos por venda"

            Exemplos:
            | cor      | tamanho | quantidade |
            | "Blue"   | "Xs"    | "11"       |
            | "Orange" | "S"     | "50"       |
            | "Red"    | "M"     | "100"      |

Cenário: Voltar ao estado original
E escolho a "Amarelo" "G" "5"
Quando clicar em Limpar
Então valido estado original da tela