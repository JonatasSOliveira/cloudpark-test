# 🚀 CloudPark Test

Este é um app mobile desenvolvido em **React Native com Expo**, como parte do desafio técnico proposto pela **CloudPark**. A aplicação simula um sistema de abertura e visualização de chamados, incluindo autenticação, listagem e formulário de criação.

---

## 📱 Tecnologias utilizadas

* **Expo** (com TypeScript)
* **React Native**
* **Zustand** (gerenciamento de estado)
* **React Navigation**
* **Tailwind CSS com NativeWind**
* **React Hook Form** (via useReducer)
* **Arquitetura hexagonal (adaptada)**
* **Atomic Design**
* **OneSignal** (para notificações push)

---

## 🧠 Arquitetura Hexagonal (Adaptada)

A aplicação segue uma **adaptação da Arquitetura Hexagonal**, separando bem as camadas de responsabilidade:

* **Domain**:  DTOs, services e regras de validação.
* **Application**: facades.
* **Adapters**: integração com serviços simulados e externos.
* **Presentation**: componentes, páginas e navegação.
* **Ports**: contratos (interfaces) entre camadas.

O objetivo foi **evitar acoplamento direto com tecnologias específicas** (como Firebase ou Axios), facilitando testes, manutenção e troca de tecnologias no futuro.

---

## 🧩 Atomic Design

A organização dos componentes segue o padrão **Atomic Design** para escalabilidade e reutilização:

* **Atoms**: componentes básicos (Input, Button, Header, etc).
* **Molecules** e **Organisms**: agrupamentos mais complexos.

Isso garante padronização visual e facilita a manutenção do código.

---

## ✅ Result Pattern

Para lidar com fluxos de sucesso e erro sem lançar exceções, implementamos o **Result Pattern**. Ele ajuda a evitar o uso excessivo de `try/catch` em chamadas assíncronas.

```ts
const result = await authService.signIn(data);
if (result.isFailure()) {
  // Tratar erro
} else {
  // Continuar fluxo
}
```

---

## 🧰 Facade Pattern

Foi aplicado o **Facade Pattern** para expor os serviços ao app (`ServiceFacade`). Isso simplifica o uso, centraliza a injeção de dependências e facilita o uso de mocks para testes.

---

## 🔐 Credenciais padrão (mock)

* **E-mail:** `teste@cloudpark.com.br`
* **Senha:** `123456`

Essas credenciais são utilizadas para simular o login no ambiente de desenvolvimento.

> ⚙️ **Importante:** As credenciais padrão podem ser alteradas facilmente no arquivo `app.json` dentro da chave `extra`, assim:

```json
"extra": {
  "oneSignalAppId": "",
  "authEmail": "teste@cloudpark.com.br",
  "authPassword": "123456"
}
```

Basta editar esses valores para modificar as credenciais usadas pela aplicação, sem precisar alterar o código-fonte.

---

## 🚨 OneSignal

Foi implementada a integração com **OneSignal** para notificações push.

* Para ativar, configure seu `oneSignalAppId` também na seção `extra` do `app.json`, como no exemplo acima.
* Caso o ID esteja vazio, o serviço de notificações ficará desativado.

---

## 📲 Testado principalmente em Android

> O projeto foi testado e validado principalmente em **emuladores Android** (Pixel 5 - API 34).
> Também funciona em iOS, mas recomenda-se iniciar pelo Android.

---

## 📦 Como rodar o projeto

1. Instale as dependências:

```bash
npm install
# ou
yarn
```

2. Inicie o servidor Expo:

```bash
npx expo start
```

3. Abra o app no emulador ou dispositivo físico (Android ou iOS).

---

## 🧪 Como rodar os testes

Um teste unitário básico está implementado no componente `Input`.

```bash
npm test
# ou
yarn test
```

---

## 📝 Funcionalidades

* ✅ Login com validação de campos (com mock configurável)
* ✅ Listagem de chamados
* ✅ Formulário com validações e feedback visual
* ✅ Dropdown genérico reutilizável
* ✅ Layout adaptado com NativeWind e paleta inspirada na CloudPark
* ✅ Armazenamento de sessão com Zustand
* ✅ Validação local + Result Pattern
* ✅ Teste unitário de componente (Input)
* ✅ Notificações push via OneSignal (configurável)

---

## 🖼️ Estilo e tema

* Paleta inspirada nas cores oficiais da **CloudPark**.
* Estilização com **NativeWind** (Tailwind CSS para React Native).

---

## 📂 Organização das pastas

```
src/
├── adapters/
├── application/
├── assets/
├── domain/
│   ├── dtos/
│   ├── errors/
│   ├── services/
├── infra/
├── ports/
├── presentation/
│   ├── components/
│   ├── navigation/
│   └── pages/
├── shared/
│   └── stores/
│   └── utils/

```

---

## 💡 Extras

* Arquitetura testável, escalável e adaptável
* Componentização e reutilização como foco principal
* Facilidade para trocar tecnologias (backend, UI kit etc)
* Experiência pensada para dispositivos móveis
