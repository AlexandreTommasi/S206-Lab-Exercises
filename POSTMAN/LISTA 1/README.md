# **Testes Automatizados - Wikipedia: Alexandre de Moraes**

Este projeto contém uma coleção de testes estruturados no **Postman**, divididos em **cenários positivos** e **cenários negativos**, para validar o comportamento do site da Wikipedia ao acessar a página **Alexandre de Moraes**.

---

## **Descrição**

Os testes foram organizados para cobrir os seguintes aspectos:
1. Validação de páginas existentes e respostas esperadas.
2. Identificação de comportamentos incorretos em cenários inválidos.
3. Garantia de desempenho, segurança e consistência na API ou página.

### **Categorias de Testes**

#### **Cenários Positivos**
1. **Verificação Completa de Disponibilidade (GET):**
   - Certifica-se de que a página está disponível.
   - Valida cabeçalhos como `Content-Type`.

2. **Validação de Conteúdo Específico (GET):**
   - Verifica se o conteúdo da página corresponde ao esperado.
   - Confirma o título e os textos do corpo da página.

3. **Teste de Performance (GET):**
   - Avalia o tempo de resposta da página para garantir desempenho adequado.

4. **Teste de Redirecionamento (GET):**
   - Valida como a Wikipedia trata requisições com parâmetros adicionais ou URLs malformadas.

#### **Cenários Negativos**
1. **Página Inexistente (GET):**
   - Simula o acesso a uma página que não existe.
   - Valida a resposta **404 (Not Found)** e mensagens de erro apropriadas.

2. **Envio de Dados Inválidos com POST (POST):**
   - Envia uma requisição POST para uma página que aceita apenas GET.
   - Verifica se o servidor lida adequadamente com o método inesperado.

3. **Teste de Segurança - Headers Sensíveis (GET):**
   - Confirma que o servidor não expõe cabeçalhos sensíveis, como `X-Powered-By` ou `Server`.

4. **Teste de Restrições de Tamanho (GET):**
   - Verifica se a resposta da página excede um tamanho limite aceitável.


