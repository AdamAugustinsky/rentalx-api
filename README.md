# Cadastro de carro

**Requisitos Funcionais(RF)**

* Deve ser possivel cadastrar um novo carro

**Regra de negócio(RN)**

* Não deve ser possivel cadastrar 2 carros com a mesma placa
* Não deve ser possivel alterar a placa de um carro já cadastrado
* O carro deve ser cadastrado, por padrão, com disponibilidade
* O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos Funcionais(RF)**

* Deve ser possivel listrar todos os carros disponiveis

**Regra de negócio(RN)**

* O usuário não precisar estar logado no sistama

# Cadastro de Especificação no carro

**Requisitos Funcionais(RF)**

* Deve ser possivel cadastrar uma especificação para um carro
* Deve ser possivel listrar todas as especificações
* Deve ser possivel listrar todos os carros

**Regra de negócio(RN)**

* Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
* Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
* O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos Funcionais(RF)**

* Deve ser possivel cadastrar uma imagem do carro
* Deve ser possivel listar todos os carros

**Requisitos Não Funcionais(RNF)**

* Utilizar o multer para o upload dos arquivos

**Regra de negócio(RN)**

* O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
* O usuário responsavel pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**Requisitos Funcionais(RF)**

* Deve ser possivel cadastrar um aluguel

**Requisitos Funcionais(RF)**

* Utilizar o multer para o upload dos arquivos

**Regra de negócio(RN)**

* O aluguel deve ter duração minima de 24 horas
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro