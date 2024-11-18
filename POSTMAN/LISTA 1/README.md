Testes Automatizados - Wikipedia: Alexandre de Moraes
Este projeto contém uma coleção de testes estruturados no Postman, divididos em cenários positivos e cenários negativos, para validar o comportamento do site da Wikipedia ao acessar a página Alexandre de Moraes.

Descrição
Os testes foram organizados para cobrir os seguintes aspectos:

Validação de páginas existentes e respostas esperadas.
Identificação de comportamentos incorretos em cenários inválidos.
Garantia de desempenho, segurança e consistência na API ou página.
Categorias de Testes
Cenários Positivos
Verificação Completa de Disponibilidade (GET):

Certifica-se de que a página está disponível.
Valida cabeçalhos como Content-Type.
Validação de Conteúdo Específico (GET):

Verifica se o conteúdo da página corresponde ao esperado.
Confirma o título e os textos do corpo da página.
Teste de Performance (GET):

Avalia o tempo de resposta da página para garantir desempenho adequado.
Teste de Redirecionamento (GET):

Valida como a Wikipedia trata requisições com parâmetros adicionais ou URLs malformadas.
Cenários Negativos
Página Inexistente (GET):

Simula o acesso a uma página que não existe.
Valida a resposta 404 (Not Found) e mensagens de erro apropriadas.
Envio de Dados Inválidos com POST (POST):

Envia uma requisição POST para uma página que aceita apenas GET.
Verifica se o servidor lida adequadamente com o método inesperado.
Teste de Segurança - Headers Sensíveis (GET):

Confirma que o servidor não expõe cabeçalhos sensíveis, como X-Powered-By ou Server.
Teste de Restrições de Tamanho (GET):

Verifica se a resposta da página excede um tamanho limite aceitável.
Estrutura do Projeto
Pastas e Arquivos
plaintext
Copiar código
├── README.md                     # Documentação do projeto
├── Wikipedia_API_Tests.json      # Arquivo da coleção de testes do Postman
├── environment.json              # Arquivo de variáveis de ambiente (opcional)
└── Relatórios/                   # Relatórios de execução (HTML/JSON) - gerados pelo Newman
Como Executar os Testes
Passo 1: Importar a Coleção
Baixe o arquivo Wikipedia_API_Tests.json deste repositório.
No Postman:
Clique em "Import" no canto superior esquerdo.
Importe o arquivo .json da coleção.
Passo 2: Configurar Variáveis de Ambiente
Configure variáveis no Postman, se necessário:
BASE_URL: https://pt.wikipedia.org/wiki
PAGE_TITLE: Alexandre_de_Moraes
Passo 3: Executar a Coleção
Manual: Execute testes individuais clicando no botão "Send".
Automatizado: Use o Collection Runner:
Selecione a coleção "Lista 1 - Wikipedia: Alexandre de Moraes".
Clique em "Run" e configure parâmetros como iterações e ambiente.
Passo 4: Geração de Relatórios (opcional)
Use o Newman para rodar os testes e gerar relatórios em linha de comando:

bash
Copiar código
newman run Wikipedia_API_Tests.json -e environment.json -r cli,html
Detalhes dos Testes
Cenários Positivos
Verificação Completa de Disponibilidade

Método: GET
URL: /Alexandre_de_Moraes
Validações:
Status code: 200.
Cabeçalho Content-Type: text/html.
Título da página.
Validação de Conteúdo Específico

Método: GET
URL: /Alexandre_de_Moraes
Validações:
Verifica que o corpo contém "Alexandre de Moraes".
Título: "Alexandre de Moraes – Wikipédia".
Teste de Performance

Método: GET
Validações:
Tempo de resposta menor que 500ms.
Teste de Redirecionamento

Método: GET
Validações:
Resposta com status 200.
O conteúdo do redirecionamento corresponde ao esperado.
Cenários Negativos
Página Inexistente

Método: GET
URL: /Pagina_Inexistente
Validações:
Status code: 404.
Mensagem de erro no corpo.
Título da página: "Título inválido".
Envio de Dados Inválidos com POST

Método: POST
URL: /Alexandre_de_Moraes
Validações:
Status code: 200 ou 405.
Ausência de mensagens de erro no corpo.
Teste de Segurança - Headers Sensíveis

Método: GET
Validações:
X-Powered-By: Não presente.
Server: Não exposto.
Teste de Restrições de Tamanho

Método: GET
Validações:
O tamanho da resposta não deve exceder 1MB.
Resultados Esperados
Cenários Positivos
PASS:
Resposta consistente com conteúdo esperado.
Títulos e corpo válidos.
Tempo de resposta dentro dos limites.
Cenários Negativos
PASS:
Respostas adequadas para páginas inexistentes ou métodos inválidos.
Nenhum dado sensível exposto.
Licença
Este projeto foi desenvolvido para fins educacionais e não está afiliado à Wikipedia.
