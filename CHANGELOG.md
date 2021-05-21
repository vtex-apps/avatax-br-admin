# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Criar página do Avatax BR no Admin
- Modularizar o código do front do Avatax BR
- Conectar o Avatax-BR-Admin com o Avatax-BR-Service
- Criar área de "Ativar/Desativar Taxação Avalara
- Remoção do Auth e criação do aplicativo no settings

### Changed 
- Completar o endereço a partir do CEP

### Changed 
- Adicionado o DropDown no nome da Doca com os valores das Docas existentes
- Completado o id da Doca após escolher o nome da Doca
- Arrumado a descrição do cityCode
- Remoção do Auth e criação do aplicativo no settings 

### Changed
- Validação dos campos
1. Campos obrigatórios como request, 
2. CEP com necessariamente 8 dígitos 
3. Validar se o CNPJ é válido
4. Toda vez que é preenchidos os valores de endereço vindo do CEP deve-se atualizar para que esses valores não apareçam como o aviso de campo obrigatório
5. Toda vez que se clica no botão “Adicionar” deve-se rodar a validação e preencher com avisos os campos que tem valores errados
6. Toda vez que se sair de um campo é necessário fazer a validação do campo e retornar erro caso haja incoerência no campo

### Added
- Initial release.
