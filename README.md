## 🚀 Funcionalidades

* **Interface UI/UX Premium:** Réplica fiel da estética limpa da Apple, utilizando tipografia inspirada em Roboto/Inter e espaçamentos rigorosamente alinhados.
* **Layouts Dinâmicos:** Páginas exclusivas e sob medida para as principais linhas de produtos (Mac, iPad, Watch, iPhone), quebrando a monotonia de templates SaaS convencionais.
* **Animações Fluidas:** Transições suaves, micro-interações e efeitos de profundidade no eixo Z construídos puramente com Tailwind CSS.
* **Transições de Modo (Light/Dark):** Seções projetadas estrategicamente para alternar entre temas claros e escuros, destacando as características de cada produto.
* **Design Responsivo:** Abordagem *mobile-first* que garante uma experiência impecável em qualquer tamanho de tela.
* **Componentes Customizados e Reutilizáveis:** Arquitetura baseada em templates reutilizáveis (como o `AppleHeroTemplate`) para manter a consistência visual em páginas secundárias.

## 🛠️ Stack Tecnológica

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Biblioteca:** [React](https://react.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Carrossel:** [Embla Carousel](https://www.embla-carousel.com/)

## 📂 Estrutura do Projeto

```text
├── public/                 # Ativos estáticos (imagens, logos)
├── src/
│   ├── app/                # Rotas e páginas (Next.js App Router)
│   │   ├── page.tsx        # Página Inicial (Home)
│   │   ├── mac/            # Página do Mac
│   │   ├── ipad/           # Página do iPad
│   │   ├── watch/          # Página do Apple Watch
│   │   ├── iphones/        # Página do iPhone
│   │   └── ...             # Outras categorias
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AppleHeroTemplate.tsx
│   └── globals.css         # Estilos globais e diretivas do Tailwind

```

## 💻 Como Começar

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação e Execução

1. Clone o repositório:
```bash
git clone <url-do-repositorio>

```


2. Acesse o diretório do projeto:
```bash
cd apple

```


3. Instale as dependências:
```bash
npm install

```


4. Inicie o servidor de desenvolvimento:
```bash
npm run dev

```


5. Abra o navegador e acesse:
```text
http://localhost:3000

```



## 🎨 Filosofia de Design

Este projeto foi desenvolvido seguindo estritamente conceitos avançados de arquitetura frontend:

* **Identidade Purista ("No Purple"):** Paleta de cores fiel ao minimalismo da Apple, baseada em tons de prata, preto, branco e cores de destaque cirurgicamente selecionadas.
* **Tensão Assimétrica:** Substituição das divisões padrão de 50/50 por grids dinâmicos e visualmente impactantes (especialmente na página do Mac).
* **Profundidade no Eixo Z:** Uso de elementos sobrepostos e brilhos sutis (*glows*) para criar uma sensação tridimensional sem comprometer a performance da aplicação.

---

*Nota: Este é um projeto educacional feito por fãs e não possui qualquer afiliação com a Apple Inc. Todos os nomes de produtos, logotipos e marcas são de propriedade de seus respectivos donos.*

---
