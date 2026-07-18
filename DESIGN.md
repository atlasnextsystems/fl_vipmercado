<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Supermercado Vip
description: Landing Page Premium do Supermercado Vip na cidade de Salto
---

# Design System: Supermercado Vip

## 1. Overview

**Creative North Star: "O Frescor Vibrante"**

O design do Supermercado Vip é centrado na energia da cor laranja e no frescor de produtos de hortifrúti, açougue e padaria. A direção criativa busca afastar-se completamente de templates de comércio locais genéricos, aplicando um design limpo, minimalista e focado na clareza de informações.

A interface utiliza uma estratégia de contraste restrita: grandes espaços em branco puro, tipografia escura em tom chumbo para legibilidade absoluta e o laranja vibrante reservado como um ponto de luz intencional para guiar as ações do usuário (CTAs e links). As animações são sutis e orgânicas, priorizando a resposta ao toque/clique e transições de rolagem discretas que agregam valor estético sem distrair.

**Características Chave:**
- **Calor Estratégico:** Uso ponderado e controlado da cor laranja (limite de 10% da tela) para criar contraste visual.
- **Apetite Visual:** Uso proeminente de imagens fotográficas em alta definição para seções de alimentos, substituindo gráficos ou ícones genéricos.
- **Leitura Confortável:** Tipografia moderna e tamanho adequado com alto contraste.
- **Foco na Ação:** Botão de WhatsApp e rotas físicas sempre visíveis e fáceis de interagir.

## 2. Colors

O esquema de cores é guiado pela regra do contraste restrito, garantindo acessibilidade visual e elegância.

### Regra do Laranja Focado (Regra dos 10%)
O laranja vibrante é a nossa assinatura visual, mas nunca deve ser usado como cor de fundo para grandes áreas de texto ou seções inteiras. Ele é exclusivo para botões de ação primária (CTAs), ícones destacados e elementos ativos selecionados.

### Primary
- **Laranja Vibrante** (oklch a ser definido na implementação): Cor de destaque de conversão e identidade da marca.

### Neutral
- **Fundo Limpo** (oklch a ser definido na implementação): Branco puro ou off-white limpo para a área de leitura e respiração.
- **Texto Chumbo** (oklch a ser definido na implementação): Cinza escuro/preto com alto contraste para máxima legibilidade (mínimo de 4.5:1).
- **Divisores Suaves** (oklch a ser definido na implementação): Linhas finas e discretas para delimitar seções.

## 3. Typography

A tipografia deve combinar modernidade e alta legibilidade, suportando leitura confortável no celular e desktop.

**Display Font:** Sans-serif geométrica de impacto [fonte a ser definida na implementação]
**Body Font:** Sans-serif humanista limpa e legível [fonte a ser definida na implementação]

### Hierarchy
- **Display** [tamanho e peso a serem definidos]: Usado exclusivamente para a headline principal do hero.
- **Headline** [tamanho e peso a serem definidos]: Títulos das principais seções da página.
- **Title** [tamanho e peso a serem definidos]: Títulos de cartões de setores ou seções secundárias.
- **Body** [tamanho e peso a serem definidos]: Textos informativos de sobre e descrições. Limite de largura de linha entre 65ch e 75ch.
- **Label** [tamanho e peso a serem definidos]: Botões, status de funcionamento ("Aberto Agora") e informações adicionais de rodapé.

## 4. Elevation

O sistema é predominantemente bidimensional e limpo. A profundidade é comunicada através de cores de fundo suaves e bordas delicadas, em vez de sombras pesadas ou múltiplos níveis de sobreposição.

### Regra da Elevação de Resposta
Surfaces e elementos são planos em repouso. Sombras sutis e suaves aparecem apenas como resposta interativa (hover) para botões de ação ou cartões interativos.

## 5. Components

*(Omitido nesta fase de semente. Será documentado após a criação das primeiras estruturas de código em React).*

## 6. Do's and Don'ts

Guardrails e limites visuais rígidos para manter a fidelidade e a qualidade do design.

### Do:
- **Do** Manter o contraste das fontes em no mínimo 4.5:1 em relação ao fundo.
- **Do** Usar imagens reais e vibrantes de frutas, pães e carnes para destacar os setores de produtos.
- **Do** Limitar a largura do texto a 65–75 caracteres por linha para facilitar a leitura.
- **Do** Implementar o indicador de status "Aberto" e "Fechado" com clareza visual e cores semânticas (verde/vermelho).

### Don't:
- **Don't** Utilizar fundos saturados de cor laranja por trás de blocos de texto longos.
- **Don't** Usar texto cinza claro sobre fundo branco (baixa acessibilidade).
- **Don't** Usar bordas laterais espessas (borders-left/right maiores que 1px) como decorações coloridas em cartões ou alertas.
- **Don't** Utilizar templates genéricos cheios de caixas e cartões idênticos repetitivos.
- **Don't** Aplicar animações ou rotações em imagens ao passar o cursor (hover de imagens é proibido).
