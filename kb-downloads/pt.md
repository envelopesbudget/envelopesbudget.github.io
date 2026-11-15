# Meu orçamento — Central de ajuda

## O que o app faz {#about}

“Meu orçamento” não é um caderno de gastos — é um orçamento completo pelo método dos envelopes. Ele faz muita coisa, e quase nada fica escondido no fundo dos menus: está em gestos e pequenos detalhes. Esta página é um passeio rápido; depois, cada tela tem o seu próprio artigo.

### O essencial {#about-main}

Anotar gastos responde à pergunta “para onde foi o dinheiro”. Um orçamento responde a uma mais importante: **“para o que ele ainda dá”** — hoje, até o salário, até as férias.

##### Envelopes

Cada real ganha uma tarefa: mercado, aluguel, férias. Você vê quanto sobra em cada envelope, e o gasto excedido fica vermelho na hora. Mais em [“Como o orçamento funciona”](#start).

##### Seus dados são seus

O orçamento fica no seu celular e na sua nuvem. O desenvolvedor não tem acesso a ele. A nuvem pode ser fechada com senha — AES-256. Mais em [“Nuvem e backups”](#sync-password).

##### Vindo do YNAB

Contas, categorias e todo o histórico do YNAB 4 ou do YNAB web chegam como arquivo, e um pequeno glossário mostra como se chamam aqui os termos conhecidos. Mais em [“Primeiros passos”](#first-steps).

### Entrada rápida {#about-input}

É mais fácil anotar uma compra no caixa do que lembrar dela à noite. Por isso há vários jeitos.

##### Para a caixa de entrada

Sem tempo no caixa para escolher categoria e conta? Digite só o valor. O botão “Para a caixa de entrada” salva a transação com a marca “Organizar”, e em casa o formulário abre essas transações uma a uma. Ative em “Configurações → Dados → Caixa de entrada”. Mais em [“Formulário de transação”](#entry-inbox).

##### Por voz

“Carrefour 211 Mercado da conta Conta corrente” — e o formulário está preenchido. Mais em [“Entrada por voz”](#voice).

##### Pela nota fiscal

Aponte a câmera para o QR code da nota fiscal — o valor e a data se preenchem sozinhos, e a partir da segunda vez o app reconhece a loja pelo caixa. Funciona onde o app sabe ler as notas fiscais do seu país. Mais em [“Leitor de notas fiscais”](#receipt).

##### Da tela inicial

Widgets e atalhos abrem o formulário com um toque, sem entrar no app. Mais em [“Widgets e atalhos”](#widgets).

##### Teclado de calculadora

Os valores são digitados no teclado do próprio app, com soma e subtração, divididos entre várias categorias, transferidos entre contas — até em moedas diferentes. Mais em [“Formulário de transação”](#entry).

### Planos {#about-plans}

##### Metas

Cinco tipos: por mês, até uma data, manter um saldo, porcentagem da renda e lista de compras. O app calcula quanto separar. Mais em [“Metas”](#goals).

##### Pagamentos programados

Aluguel, assinaturas, parcelas de empréstimo — com lembrete antecipado e lançados com um toque. Mais em [“Pagamentos programados”](#scheduled).

##### Cartões de crédito e dívidas

O dinheiro para pagar o cartão de crédito é separado sozinho, e você vê a dívida mês a mês. Mais no cenário [“Cartões de crédito e dívidas”](#scenario-credit).

##### Tags e “quem deve a quem”

Uma viagem, uma reforma, despesas divididas com amigos — a tag junta tudo de categorias diferentes e calcula quem deve a quem. Mais em [“Beneficiários e tags”](#payees-tags).

### Relatórios {#about-reports}

Dez relatórios: para onde foi o dinheiro, tendência e desvio do habitual, fluxo do dinheiro da renda aos gastos, receitas e despesas por mês, idade do dinheiro, patrimônio, dívida dos cartões. E o “Resumo” é a sua tela inicial: você escolhe os blocos e os organiza do seu jeito. Mais em [“Relatórios”](#reports) e [“Resumo”](#overview).

### Aparelhos e nuvem {#about-devices}

Um orçamento no celular, no tablet e no computador com Windows — para duas pessoas ou para a família toda. Sincronização pelo Google Drive, Dropbox ou WebDAV — Nextcloud, ownCloud, pCloud, seu próprio servidor; os backups são feitos sozinhos, conforme um cronograma. Mais nos cenários [“Um orçamento em vários aparelhos”](#scenario-devices) e [“Duas ou mais pessoas, um orçamento”](#scenario-together).

### Do seu jeito {#about-yours}

Treze idiomas, sessenta moedas, formatos de valores e datas do seu país. Sete estilos em claro e escuro, fontes, densidade, cantos, ícones. Vários orçamentos: pessoal, da família, do trabalho. Mais em [“Configurações”](#settings).

### Por onde começar {#about-start}

1. [“Como o orçamento funciona”](#start) — o método dos envelopes em dez minutos.
2. [“Primeiros passos”](#first-steps) — da instalação ao primeiro mês.
3. [Cenários](#scenario-paycheck) — respostas prontas: de salário em salário, freelance, cartões de crédito, viagem com amigos.

## Como o orçamento funciona {#start}

O método dos envelopes em dez minutos: por onde o dinheiro entra, como dividi-lo e o que acontece na virada do mês.

### Envelopes: a ideia principal {#start-idea}

Imagine que você sacou o salário em dinheiro e o dividiu em envelopes: “Mercado”, “Contas de casa”, “Férias”. Ao comprar comida, você tira dinheiro só desse envelope. Envelope vazio quer dizer que acabou o dinheiro para isso. O app faz exatamente isso, só que sem papel.

(1)
##### O dinheiro nas contas

Conta corrente — R$ 5.100

Dinheiro — R$ 600

(2)
##### “Não alocado”

R$ 5.700 — ainda sem tarefa

(3)
##### Envelopes das categorias

Mercado — R$ 1.650

Contas de casa — R$ 510

…e assim por diante, até chegar a 0

(4)
##### O gasto

Você comprou pão — o envelope “Mercado” ficou mais magro

Cada real das suas contas está em exatamente um lugar: ou em algum envelope, ou em “não alocado”. Por isso, a qualquer momento dá para ver o que ainda cabe no bolso e o que não cabe. O primeiro objetivo é levar “não alocado” a zero: aí **cada real tem uma tarefa**. Isso não é a linha de chegada, e sim o primeiro passo — para onde o método leva depois está [no fim do artigo](#start-ladder).

Em que isso difere do “controle de gastos” comum, veja [abaixo](#start-vs).

### Em que difere do controle de gastos {#start-vs}

Muita gente anota os gastos durante anos — num caderno, numa planilha, no app do banco — e mesmo assim não entende por que o dinheiro acaba antes do mês. O controle de gastos conta o passado com honestidade. Os envelopes ajudam a dirigir o futuro.

|  | Controle de gastos | Orçamento por envelopes |
|---|---|---|
| Quando você pensa no dinheiro | Depois do gasto: você olha para onde ele foi. | Antes do gasto: você decide quanto pode gastar. |
| A pergunta principal | “Para onde foi o dinheiro?” | “O que ainda cabe no bolso?” |
| Gasto excedido | Você descobre no fim do mês, quando já é tarde. | Você vê na hora: o envelope fica vermelho no momento da compra — e você passa dinheiro de outro. |
| O dinheiro no banco | Um número só: “tem R$ 4.200 na conta, então tenho dinheiro”. | Dividido por tarefas: uma parte já está prometida ao aluguel, outra às férias. Livre é só o que está no envelope certo. |
| O salário | Só uma entrada que “de algum jeito vai embora”. | Dinheiro a que você dá uma tarefa logo de cara. |
| Despesas irregulares | O seguro ou um conserto caem do nada. | Você separa um pouco todo mês — quando a conta chega, o dinheiro já está lá. |

(R$ 4.200)
#### Exemplo: “ainda tem bastante na conta”

É metade do mês e há R$ 4.200 na conta. Você quer um fone de ouvido de R$ 840.

*Como funciona:*
**O controle de gastos** vê R$ 4.200 e diz: “vai fundo”. Mas o aluguel vence em uma semana — R$ 2.400, mais as contas de casa e a comida até o salário. O fone foi comprado, e falta para o aluguel.

**Os envelopes** veem os mesmos R$ 4.200, só que divididos: “Aluguel” — R$ 2.400, “Contas de casa” — R$ 510, “Mercado” — R$ 780, “Lazer e hobbies” — R$ 510. Para o fone estão livres R$ 510. Quer comprar agora? Decida de qual envelope sairão os R$ 330 que faltam. A decisão é sua, e você a toma antes da compra, não depois.

(?)
#### Então aqui não tem controle de gastos?

Tem — e mais detalhado que um caderno.

*Como funciona:*
Cada compra fica registrada, e “Para onde foi o dinheiro”, “Gastos do mês” e os relatórios mostram para onde foi tudo. Só que aqui isso não é o objetivo, e sim a conferência do plano: o que você decidiu bateu com o que aconteceu? No mês seguinte você vai orçar com mais precisão.

(↻)
#### Resumindo

O controle de gastos é o retrovisor. Os envelopes são o volante.

*Como funciona:*
Olhar no retrovisor é útil: você vê de onde veio. Mas só o volante ajuda a seguir em frente — uma decisão, tomada antes, sobre para onde vai o dinheiro.

### Três números de cada categoria {#start-envelope}

Vire o celular de lado — a tela “Plano” vira uma tabela, e os três números do envelope estão assinados direto nos títulos das colunas.

[Plano na horizontal: colunas Categoria, Planejado, Gasto, Disponível; Contas de casa 300, −278, 89]
Celular de lado: o mesmo “Plano” em forma de tabela. Na visão comum, “Disponível” é o valor à direita da categoria, e “… de … gastos” é a linha embaixo da barra.

1. **“Planejado”** — quanto você colocou no envelope neste mês. É uma decisão: “R$ 300 para as contas de casa em novembro”.

2. **“Gasto”** — quanto já saiu do envelope: todos os gastos desta categoria no mês, com sinal de menos. Um reembolso por um produto devolvido diminui esse número.

3. **“Disponível”** — quanto você ainda pode gastar: o que veio do mês passado + planejado − gasto.

   *Como funciona:*
   Na captura, “Contas de casa” tem planejado 300 e gasto 278 — parece que sobram 22. Mas o disponível é 89: R$ 67 não foram gastos em outubro e passaram para novembro. É assim que um envelope vai se enchendo.

   Chip verde quer dizer que há dinheiro no envelope, zero cinza — que está vazio, vermelho — que está no negativo: você gastou mais do que havia.

[Tela Plano: grupos de categorias, valores à direita, barras e linhas de gasto]

Como fica na tela e onde tocar está no artigo [“Plano”](#budget). Aqui ficam só as regras que os números seguem.

(R$)
#### A receita vai para “não alocado”, não para uma categoria

O salário não cai num envelope sozinho: ele vai para “não alocado”, e você o divide.

*Como funciona:*
No formulário de transação, a receita é lançada por padrão como “Receita para novembro” — ou seja, no “não alocado” deste mês. Também dá para escolher “Receita para dezembro” — veja a seção [“Idade do dinheiro em detalhe”](#overview) do artigo “Resumo”.

(↺)
#### O reembolso volta para o envelope

Recebeu dinheiro de volta por um produto devolvido? Ele vai para a categoria de onde saiu, não para a receita.

*Como funciona:*
Como lançar — artigo [“Formulário de transação”](#entry), seção “Reembolso por um produto devolvido”.

(⇄)
#### Transferência não é gasto

Você sacou dinheiro, pagou o cartão de crédito, passou dinheiro para a poupança — o dinheiro continua sendo seu.

*Como funciona:*
Uma transferência entre contas do orçamento não toca nenhum envelope. Só uma transferência para uma conta fora do orçamento (uma poupança, uma aplicação) sai dos envelopes — aí o app pede uma categoria.

### Mês a mês {#start-months}

O orçamento vive em meses. O que acontece com um envelope na virada do mês é uma das regras principais.

(+)
#### O positivo passa adiante

Não gastou tudo? O resto vai para o mês seguinte e continua no envelope.

*Como funciona:*
É assim que se junta dinheiro para coisas grandes e irregulares: coloque R$ 450 em “Férias” todo mês, não gaste — e até o verão haverá R$ 2.700. Também dá para separar dinheiro para o futuro de uma vez: você pode alocar dinheiro em qualquer mês à frente — a seta “›” na tela “Plano”.

(−)
#### O negativo volta a zero

Gastou mais do que tinha no envelope? A categoria fica vermelha. Na virada do mês, o negativo é zerado — mas não sem deixar rastro.

*Como funciona:*
Um negativo do seu próprio dinheiro (vermelho, ícone de carteira) diminui o “não alocado” do mês seguinte: afinal, o dinheiro já foi gasto. Por isso é melhor cobrir o negativo na hora, passando dinheiro de outra categoria: toque no valor vermelho na tela “Plano”.

Um negativo no cartão de crédito (amarelo, ícone de cartão) é outra história: ele não come o seu dinheiro, ele aumenta a dívida do cartão. O “não alocado” não o desconta, mas a dívida vai ter de ser paga do mesmo jeito.

(≡)
#### “Orçamento do mês” no “Resumo”

Toda a contabilidade do mês numa escada: o que veio do mês passado, a receita, o alocado e o total “não alocado”.

*Como funciona:*
Se o número no chip parecer estranho, olhe aqui: você vai ver de onde ele veio. Mais no artigo [“Resumo”](#overview).

### O cartão de crédito no orçamento {#start-credit}

O cartão de crédito é a parte menos óbvia do método dos envelopes. A regra é uma só: uma compra no cartão de crédito gasta o dinheiro do envelope igualzinho a uma compra no débito.

(1)
#### A compra

Você comprou comida no cartão de crédito por R$ 105 — o envelope “Mercado” ficou R$ 105 mais magro, como sempre.

(2)
#### O dinheiro do pagamento se separa sozinho

O app passa esses R$ 105 para o grupo “Pagamentos de cartão”, para a categoria do seu cartão de crédito.

*Como funciona:*
Assim, na data do pagamento o dinheiro para quitar a fatura já está separado, e você não o gasta sem querer. Não é preciso separar nada por conta própria.

(3)
#### O pagamento do cartão

Pague o cartão de crédito com uma transferência da sua conta comum para o cartão. O dinheiro separado vai para o pagamento.

*Como funciona:*
Como lançar uma transferência — artigo [“Formulário de transação”](#entry).

### As quatro regras do método {#start-rules}

O app não obriga você a segui-las — ele sugere uma de cada vez, quando a regra fica pertinente.

(1)
#### Dê uma tarefa a cada real

Vá alocando dinheiro até “não alocado” chegar a zero. Dinheiro sem tarefa escapa sem ninguém notar.

(2)
#### Encare as despesas reais

O seguro uma vez por ano, o conserto do carro, os presentes de fim de ano — também são despesas. Separe um pouco para elas todo mês.

*Como funciona:*
As metas “até a data” ajudam: o app calcula quanto colocar por mês para chegar a tempo.

(3)
#### Adapte-se aos imprevistos

Gasto excedido não é fracasso. Passe dinheiro de outro envelope e siga em frente.

*Como funciona:*
Um orçamento é um plano, não um juramento. O que importa é que os envelopes mostrem com honestidade quanto sobra.

(4)
#### Envelheça o seu dinheiro

O objetivo é gastar o dinheiro ganho há um mês, não ontem.

*Como funciona:*
A “Idade do dinheiro” no “Resumo” acompanha isso. Quando chegar a 30 dias, você consegue viver com o dinheiro do mês passado: detalhes no artigo [“Resumo”](#overview).

### O zero é só o primeiro degrau {#start-ladder}

“Não alocado” em zero é um bom objetivo, mas não o último. O método vai além: de “chego até o salário” a “meu dinheiro trabalha para mim”. Os degraus vêm em ordem — pular é arriscado: investir sem reserva significa vender os investimentos na primeira vez que o carro quebrar.

(1)
#### Cada real tem uma tarefa

Todo o dinheiro das contas está dividido em envelopes. Você sabe o que cabe no bolso até o fim do mês.

**Como saber que você está aqui:** “não alocado” é zero, e nenhuma categoria está vermelha.

**Como o app ajuda:** o chip “Não alocado”, a alocação automática, “Cobrir todos os gastos excedidos”.

(2)
#### Envelopes para despesas irregulares

Seguro, conserto do carro, presentes e férias não pegam mais você de surpresa: um pouco vai para eles todo mês.

**Como saber que você está aqui:** chega uma conta grande, e o dinheiro para ela já está esperando no envelope.

**Como o app ajuda:** as metas “até a data” e “Por mês” calculam quanto colocar; o bloco “O que vem” no “Resumo” lembra onde está faltando.

(3)
#### Um mês à frente

Você gasta o dinheiro ganho há um mês. Este mês não precisa do salário novo — ele vai para o seguinte.

**Como saber que você está aqui:** a “Idade do dinheiro” é de 30 dias ou mais.

**Como o app ajuda:** a “Idade do dinheiro” no “Resumo”, a receita “para o mês seguinte” no formulário — detalhes no artigo [“Resumo”](#overview), seção “Idade do dinheiro em detalhe”.

(4)
#### Uma reserva de emergência

Uma reserva de três a seis meses de gastos normais. Perder o emprego ou ficar doente vira um contratempo, não uma catástrofe.

**Como saber que você está aqui:** a “Reserva de emergência” guarda o equivalente a vários meses de despesas.

**Como o app ajuda:** uma meta “Saldo” na categoria “Reserva de emergência”; o gasto médio por mês — nos relatórios e na tela da categoria.

(5)
#### Seu dinheiro trabalha para você

A reserva está montada, as despesas irregulares estão cobertas, você está um mês à frente — e agora o que sobra pode fazer mais do que ficar parado: CDB, Tesouro Direto, investimentos. O dinheiro começa a render dinheiro.

**Como saber que você está aqui:** todo mês uma parte da renda vai para “Investimentos”, e você não mexe nela para os gastos do dia a dia.

**Como o app ajuda:** o grupo “Poupança” com a categoria “Investimentos”; “Pague-se primeiro” no “Resumo” mostra qual porcentagem da renda você separa (o normal é 10% ou mais); uma conta “Só acompanhamento” para uma aplicação ou uma conta na corretora; “Patrimônio” no “Resumo” — como cresce tudo o que você tem.

Quanto tempo o caminho leva depende da sua renda e dos seus hábitos. O primeiro degrau costuma ser o primeiro mês. Um mês à frente leva de três meses a um ano. O que importa é dar um passo por mês, não um salto.

Pronto para começar? A seguir — [“Primeiros passos”](#first-steps): do primeiro uso ao primeiro mês.

## Primeiros passos {#first-steps}

Do primeiro uso a um orçamento funcionando: o assistente de configuração, a lista “Primeiros passos” e o que fazer no primeiro mês.

*Como o próprio método funciona está em [“Como o orçamento funciona”](start.md)*

### Primeiro uso: como você quer começar {#first-steps-welcome}

No primeiro uso abre o assistente de configuração. A primeira tela oferece três portas. O idioma pode ser trocado aqui mesmo, no botão do canto superior direito: as categorias que o app sugere por padrão também virão nesse idioma.

[Passo 1 de 6: Bem-vindo, botão de idioma, três opções: Começando do zero, Já tenho um orçamento, Estou vindo do YNAB]

(A)
#### “Começando do zero”

O assistente leva você por cinco passos: moeda e nome, contas, categorias, a primeira alocação. Os passos estão explicados abaixo.

(B)
#### “Já tenho um orçamento”

Você já mantinha um orçamento em outro celular ou antes de reinstalar o app. Ele carrega o orçamento da nuvem — Google Drive, Dropbox ou WebDAV — ou de um arquivo de backup.

*Como funciona:*
O nome não é pedido aqui: ele vem junto com o orçamento e serve de endereço da pasta dele na nuvem.

(C)
#### “Estou vindo do YNAB”

YNAB 4 ou YNAB web: contas, categorias e histórico chegam de um arquivo.

*Como funciona:*
Primeiro a moeda e o nome, depois você escolhe o arquivo de exportação, e no fim há um glossário: como se chama aqui cada termo do YNAB. O glossário também pode ser aberto depois, ao importar pelas configurações.

Leva uns cinco minutos. Qualquer passo pode ser pulado — a lista “Primeiros passos” no “Resumo” lembra o que ficou faltando.

### Começando do zero: cinco passos {#first-steps-fresh}

Embaixo de cada passo ficam “Avançar” e “Pular”. O botão Voltar do sistema leva um passo para trás em vez de fechar o app.

[Passo 2. Moeda e nome]

(•)
#### Passo 2. Moeda e nome

O app preenche a moeda pelo país do celular — confira. É o símbolo em que você mantém o orçamento; o app não converte valores.

*Como funciona:*
Invente um nome seu: “Família”, “Pessoal”. Se deixar o campo vazio, o orçamento vai se chamar “Meu orçamento”. O nome aparece no cabeçalho e no nome da pasta na nuvem, então é fácil reconhecer o orçamento em qualquer aparelho.

[Passo 3. Onde está o seu dinheiro]

(•)
#### Passo 3. Onde está o seu dinheiro

Adicione todos os lugares onde você guarda dinheiro, com o saldo de hoje: a carteira, os cartões de todos os bancos, o cartão de crédito, a poupança.

*Como funciona:*
Deixe de fora um cartão só, e o orçamento não vai bater com o que você realmente tem. Toque em “+” ao lado do modelo que combina — abre a folha de nova conta com o tipo já escolhido. O saldo da conta vai direto para “não alocado” — na captura, duas contas trouxeram R$ 5.700. Mais sobre contas no artigo [“Contas”](#accounts).

[Passo 4. Suas categorias]

(•)
#### Passo 4. Suas categorias

Os chips “Com o que você gasta” adicionam as categorias necessárias: “Carro”, “Filhos”, “Animais de estimação”. Embaixo está a lista inteira, e dá para ajustá-la do seu jeito.

*Como funciona:*
- toque numa categoria para renomeá-la;
- o X remove uma categoria;
- “Adicionar categoria” fica em cada grupo, “Adicionar novo grupo” fica no fim;
- o lápis ao lado do nome de um grupo — renomear o grupo.

A captura mostra o começo da lista; ela é mais longa.

[Passo 5. Aloque o seu dinheiro]

(•)
#### Passo 5. Aloque o seu dinheiro

Divida o “não alocado” entre os envelopes: toque no valor ao lado de uma categoria e digite quanto você está disposto a gastar com ela neste mês.

*Como funciona:*
No alto aparece quanto falta. Na captura, R$ 2.520 estão alocados e faltam R$ 3.180. Não é preciso chegar a zero aqui: comece pelo essencial — moradia, comida, celular — e aloque o resto depois, na tela “Plano”.

[Passo 6. Pronto]

(•)
#### Passo 6. Pronto

A regra principal mais uma vez: vá alocando dinheiro até “não alocado” chegar a zero.

*Como funciona:*
“Abrir orçamento” leva à tela “Plano”. De lá em diante o app dá dicas pelo caminho — uma dica de cada vez, quando ela fizer sentido.

### Depois do assistente: a lista “Primeiros passos” {#first-steps-first-steps}

No alto do “Resumo” aparece um cartão com uma lista. Ali está o que o orçamento precisa antes de poder mostrar a verdade. O assistente já marca o que você fez.

[Resumo com o cartão Primeiros passos: 3 de 6, Dinheiro alocado aberto, 5.700 não alocado, botão Ir para o orçamento]

1. **Dinheiro na carteira** — A carteira como conta separada. O dinheiro vivo é o primeiro a sumir: sem conta própria, o orçamento se descola do dinheiro na sua mão já na primeira compra. Não usa dinheiro vivo? — “Não uso dinheiro vivo”.
2. **Cartões de todos os bancos** — Todos os cartões e contas foram adicionados. Se você os adicionou no assistente, o item já vem marcado.
3. **Categorias do seu jeito** — A lista de categorias foi ajustada. Passou pelo passo das categorias — está marcado. O botão abre a mesma tela do assistente. Uma categoria que já tem transações não é apagada pelo X, e sim ocultada: as transações ficam onde estão.
4. **Dinheiro alocado** — “Não alocado” chegou a zero. Até lá, o item mostra quanto falta e leva para o “Plano”.
5. **Primeira transação** — Você lançou a primeira compra — o orçamento ganhou vida. O botão abre o formulário.
6. **Uma cópia fora do celular** — Uma nuvem ou um arquivo de backup. Perdeu o celular — e o orçamento não se perdeu. Botões: conectar uma nuvem ou “Backups”.

(1)
#### O que foi feito ganha um visto

No alto, “3 de 6”: quantos estão feitos. Um item concluído é uma só linha com um visto.

(2)
#### Um item fica aberto

O primeiro não concluído — ou aquele em que você tocou. Ele diz o que fazer e por quê.

(3)
#### O botão principal é uma porta

Ele leva direto para onde o item se resolve: o formulário de conta, o “Plano”, o formulário de transação, a entrada na nuvem. Às vezes há um segundo ao lado — a sua resposta: “Não uso dinheiro vivo”, “Todos adicionados”, “Deixar como está”.

(⋮)
#### Ocultar a lista

Menu do cartão → “Ocultar a lista” (com “Desfazer” embaixo na tela). Quando tudo estiver feito, o cartão diz “Seu orçamento está pronto” — toque em “Entendi”.

*Como funciona:*
Enquanto a lista está aberta, as dicas comuns do “Resumo” ficam em silêncio — para a mesma coisa não ser dita duas vezes. Para trazer todas as dicas de volta: “Configurações → Ajuda e contato → Dicas → Mostrar as dicas de novo”.

Se você veio do YNAB, a lista é outra: conferir os saldos das contas com o banco, o dinheiro vivo, a alocação e um backup — as contas e as categorias já vieram no arquivo.

### O seu primeiro mês {#first-steps-month1}

1. **Lance cada compra** — na hora, no caixa: “+ Transação”, a câmera para a nota fiscal ou o microfone. Cinco segundos agora em vez de uma noite com o extrato depois. Sem tempo? — a “Caixa de entrada” (artigo [“Formulário de transação”](#entry)).
2. **Entrou dinheiro — divida.** Todo salário cai em “não alocado”; distribua-o pelos envelopes na tela “Plano”.
3. **Um envelope ficou vermelho — passe dinheiro** de outro. É normal: o primeiro mês sempre mostra o que você subestimou.
4. **Uma vez por semana, confira as contas** com o banco — menu da conta, “Conciliação de saldo” (artigo [“Contas”](#accounts)).
5. **No fim do mês, olhe o “Resumo”**: “Para onde foi o dinheiro”, “Gastos do mês”. No mês seguinte você vai alocar com base na experiência.

## Um orçamento em vários aparelhos {#scenario-devices}

O celular no bolso, o tablet em casa, o computador no trabalho — e o mesmo orçamento em todos. Lance uma compra no caixa, e à noite ela já está no notebook. Como configurar e o que ter em mente.

*“Configurações”, seção “Sincronização”*

### Para quem é {#scenario-devices-who}

##### Celular e computador

Os gastos pelo celular, no caixa. O planejamento do mês, os relatórios e as revisões numa tela grande. Para o computador existe a “Versão para Windows”: o mesmo orçamento, com aparência própria, feita para o mouse. Ela sincroniza pelo Google Drive — se houver um computador na história, escolha essa nuvem também no celular.

##### Celular e tablet

Dividir o salário entre os envelopes é confortável no tablet: o “Plano” na horizontal é uma tabela em tela cheia.

##### Um celular novo

O antigo quebrou ou você trocou de aparelho — anos de orçamento passam em dois minutos. É o mesmo cenário: o celular novo é o segundo aparelho.

Quem liga os aparelhos é a nuvem: Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, seu próprio servidor). Cada aparelho envia para lá as suas alterações e pega as dos outros. Como funciona em detalhe — no artigo [“Nuvem e backups”](#sync).

### No primeiro aparelho {#scenario-devices-first}

Aquele em que você já mantém o orçamento.

1. “Configurações”, seção “Sincronização” → “Autorização”.
2. Entre na nuvem. No Google Drive — com a conta Google que você vai usar também nos outros aparelhos. No Dropbox — com o e-mail e a senha do Dropbox, não pelo Google. Vai ter um computador com Windows? Escolha o Google Drive: a versão para Windows não se conecta a outras nuvens.
3. Quer fechar os dados na nuvem com senha? — “Definir senha” no bloco “Criptografia da nuvem”. Anote a senha: ninguém consegue recuperá-la.
4. Volte para o “Resumo” e toque no ícone de sincronização no canto superior direito. O orçamento vai para a nuvem.

[Tela Autorização: Criptografia da nuvem, Google Drive, Dropbox, WebDAV]
“Autorização” — é aqui que se conecta uma nuvem. Cada nuvem em detalhe — no artigo [“Nuvem e backups”](sync.md#auth).

### No segundo aparelho {#scenario-devices-second}

##### O app acabou de ser instalado

1. No assistente do primeiro uso, escolha “Já tenho um orçamento”.
2. Abre “Carregar orçamento da nuvem”. Conecte **a mesma** nuvem com **a mesma** conta.
3. Escolha o orçamento na lista e toque em “Carregar orçamento”.
4. Se no primeiro aparelho há uma senha, defina a mesma aqui.
5. Confira a moeda: “Configurações” → “Moeda do orçamento”. Detalhes — [abaixo](#scenario-devices-per-device).

[Tela Carregar orçamento da nuvem: passo 1 Conectar uma nuvem, passo 2 Nome do orçamento]
“Carregar orçamento da nuvem” — primeiro a nuvem, depois um orçamento da lista.

##### O app já está instalado, com um orçamento próprio

“Configurações”, seção “Sincronização” → “Carregar orçamento da nuvem” — e depois os mesmos passos. Ou toque no nome do orçamento no cabeçalho do “Resumo” — “Carregar orçamento da nuvem” também está lá.

*Como funciona:*
Se neste aparelho um orçamento com o mesmo nome já tem dados próprios, na primeira sincronização o app pergunta se é um orçamento só ou dois diferentes: “Da nuvem” ou “Mesclar”. Mais no artigo [“Nuvem e backups”](#sync-trouble).

### O que é comum e o que cada aparelho guarda para si {#scenario-devices-per-device}

O que sincroniza são os **dados do orçamento**. As configurações de aparência e segurança não: cada aparelho tem as suas.

| Comum a todos os aparelhos | Separado em cada aparelho |
|---|---|
| Contas, seus ícones e cores | Idioma e formatos |
| Categorias e grupos, notas das categorias | Aparência: estilo, tema, fonte, cantos |
| Transações, tags, beneficiários | PIN e entrada por digital |
| Valores separados por mês, metas e linhas da “lista” | A senha da nuvem — mas ela precisa ser igual |
| Pagamentos programados | Lembretes |
| Fotos e PDFs — se “Sincronizar fotos” estiver ligado | Agenda de backups |
| | **Moeda do orçamento** |

##### Moeda do orçamento — confira em cada aparelho

O símbolo da moeda do orçamento fica no aparelho e não vai para a nuvem. Um orçamento carregado recebe a moeda do orçamento que já estava neste aparelho — normalmente pelo país do celular. Os valores não mudam, só o símbolo ao lado deles. Símbolo errado? — “Configurações” → “Moeda do orçamento”.

##### Fotos de notas fiscais

Logo depois da instalação, as fotos ficam no aparelho em que foram tiradas. Para elas aparecerem em todos, ligue “Sincronizar fotos” na tela “Sincronização” — em **cada** aparelho.

### No dia a dia {#scenario-devices-daily}

##### Sincronizar à mão vai ser raro

O app sincroniza sozinho — alguns segundos depois de cada vez que você o abre. O número no ícone de sincronização do “Resumo” é quantas alterações suas ainda não foram para a nuvem.

##### Lançou uma compra e vai guardar o celular

Quando o app é minimizado, o Android não o deixa continuar trabalhando, então as alterações sobem na próxima vez que você abrir. Se vai sentar no computador agora, toque no ícone de sincronização no celular para a compra já estar lá.

##### A cor do ícone de sincronização

Piscou verde — tudo certo. Vermelho — não deu certo; uma falha isolada costuma ser só falta de rede. Se o ícone ficar vermelho, a sincronização falhou várias vezes seguidas — abra a tela “Sincronização”, ela diz o que aconteceu.

### Erros comuns {#scenario-devices-mistakes}

| O que aconteceu | Por quê, e o que fazer |
|---|---|
| O segundo aparelho não tem as alterações do primeiro | Os aparelhos entraram na nuvem com contas **diferentes** — cada um escreve na sua nuvem. Entre em todos com uma conta só. |
| “A nuvem está protegida por senha” | A senha está definida num aparelho, e no outro não está ou é diferente. Defina **a mesma**. |
| As fotos chegaram, mas não abrem | A mesma coisa: a senha é diferente entre os aparelhos. |
| Renomeou o orçamento — o segundo aparelho parou de ver as alterações | O nome do orçamento é o endereço da pasta dele na nuvem. Depois de renomear, renomeie o orçamento exatamente igual nos outros aparelhos. |
| “Conflito” | O mesmo registro foi alterado em dois aparelhos antes de eles sincronizarem. O cartão mostra as duas versões — escolha a que você quer. |

### Sem nuvem {#scenario-devices-no-cloud}

Não quer nuvem? Dá para passar o orçamento entre os seus aparelhos diretamente: como arquivo ou pelo Wi-Fi na mesma rede. É uma transferência única, não uma sincronização contínua: as alterações vão ter de ser passadas de novo. Serve bem para mudar para um celular novo. Mais no artigo [“Nuvem e backups”](#sync-local).

## Duas ou mais pessoas, um orçamento {#scenario-together}

Uma família com dinheiro em comum: os dois pagam, os dois lançam, os dois veem quanto sobra em cada envelope. Como se acertar com o app e um com o outro para não haver confusão nem duplicatas.

*“Configurações”, seção “Sincronização”*

### Para quem é {#scenario-together-who}

O dinheiro é comum: os salários vão para um bolo só, e o aluguel, a comida e as férias saem do caixa comum. Cada um paga com o seu cartão ou em dinheiro, mas os envelopes são compartilhados: os dois veem o “Mercado”, e quem chegar primeiro ao limite é quem vê o vermelho.

Se cada um tem também dinheiro pessoal que o outro não deve ver, veja o cenário [“Casal: despesas em comum e dinheiro de cada um”](#scenario-couple).

### Configuração {#scenario-together-setup}

Tecnicamente é o mesmo orçamento em vários aparelhos — os passos estão no cenário [“Um orçamento em vários aparelhos”](#scenario-devices). Há uma diferença, e ela é importante.

##### Uma conta de nuvem separada — só para o orçamento

Todos os aparelhos precisam entrar na nuvem com **uma** conta. Mas entrar na conta Google pessoal do marido no celular da esposa é má ideia: o celular vai começar a sincronizar os contatos, as fotos e o e-mail dele.

Crie uma conta Google **nova** — só para o orçamento — e use-a para entrar na nuvem do app em todos os aparelhos. Cada um continua com as suas contas pessoais. O mesmo vale para o Dropbox: um Dropbox separado, com entrada por e-mail e senha.

##### Uma senha da nuvem para todos

Se definir uma senha, defina **a mesma** em todos os celulares. A senha não sincroniza: ela é digitada à mão em cada aparelho.

### Quem pagou o quê {#scenario-together-whose}

O app não guarda em qual celular uma transação foi lançada. Quem separa os gastos é a **conta**.

##### Uma conta para cada pessoa

Dê a cada um as suas contas: “Cartão da Júlia”, “Cartão do Pedro”, “Dinheiro da Júlia”. Em qual conta a compra foi lançada, essa pessoa pagou. Cada um confere os saldos das contas com o próprio banco — “Conciliação de saldo” no artigo [“Contas”](#accounts).

Os gastos de cada um neste mês — “Transações” → “⋮” → “Filtro”, filtrar por conta.

##### Se precisar de “quem deve a quem”

Num orçamento comum, geralmente não precisa: o dinheiro é de todos de qualquer jeito. Mas se combinaram dividir algo meio a meio — uma tag com “Acerto de contas” ligado nessas compras mostra quem deve quanto a quem. Mais no artigo [“Beneficiários e tags”](#payees-tags).

### Alocar o dinheiro {#scenario-together-assign}

Dividir o salário entre os envelopes é mais fácil para uma pessoa — ou para duas diante da mesma tela.

##### Por que não cada um no seu celular

Se os dois mudarem ao mesmo tempo quanto está separado na mesma categoria, vence a alteração que chegou por último à nuvem — ou o app mostra um “Conflito” e pede para escolher. O valor no envelope pode não ser o combinado.

Combinem quem faz a alocação. Antes de começar, abra o app e dê alguns segundos para ele sincronizar — assim você vê os últimos gastos da outra pessoa.

##### O que os dois veem

O “Não alocado”, o saldo de cada envelope, “Gasto excedido” e “Acabando” no “Resumo” são comuns. Se o “Mercado” ficar amarelo, os dois veem, e vocês conversam sobre os mesmos números.

### Pagamentos programados {#scenario-together-scheduled}

O aluguel e as assinaturas são comuns, e o vencimento chega nos dois celulares.

##### Uma pessoa confirma

Se duas pessoas tocarem em “Confirmar” no mesmo pagamento antes de os celulares sincronizarem, a transação é lançada **duas vezes**. Combinem quem confirma os pagamentos programados, ou deixe o app sincronizar antes de confirmar. Apague a transação a mais em “Transações”.

Os lembretes de vencimento chegam nos dois celulares — para quem os tiver ligados. Cada um configura no próprio celular: “Configurações” → “Lembretes”.

### No dia a dia {#scenario-together-daily}

##### Lançou algo? Sincronize

O app sincroniza quando você o abre, não quando o minimiza. Lançou uma compra grande e sabe que a outra pessoa vai olhar o orçamento daqui a pouco? Toque no ícone de sincronização no “Resumo”.

##### O lembrete da noite conta os dois

“Lembrar de adicionar os gastos” fica em silêncio se o orçamento já tem gastos hoje — inclusive os lançados pela outra pessoa e trazidos pela sincronização. Se quiser que ele lembre cada um, cada um deve lançar os próprios gastos no mesmo dia.

##### As “Transações recentes” são comuns

No “Resumo” você vê o que a outra pessoa comprou: as compras dela aparecem ali depois de uma sincronização.

### Erros comuns {#scenario-together-mistakes}

| O que aconteceu | Por quê, e o que fazer |
|---|---|
| Um celular tem mais gastos que o outro | Os celulares entraram na nuvem com contas diferentes — são duas nuvens diferentes. Entrem em todos com uma conta só, separada para o orçamento. |
| Uma transação apareceu duas vezes | Os dois a lançaram: por exemplo, uma nota em comum foi lançada por quem pagou e por quem carregou as sacolas. Combinem: lança quem pagou com o próprio cartão. |
| Um pagamento programado foi lançado duas vezes | Os dois tocaram em “Confirmar”. Apague a transação a mais; daqui em diante uma pessoa confirma. |
| “A nuvem está protegida por senha” num celular | Um celular tem a senha definida, e o outro não tem nenhuma ou tem outra. Defina a mesma. |
| O símbolo da moeda é diferente entre vocês | A moeda do orçamento fica no aparelho. Corrija em “Configurações” → “Moeda do orçamento”. |

## "Casal: despesas em comum e dinheiro de cada um" {#scenario-couple}

Cada um tem o seu salário e os seus gastos, enquanto o apartamento, a comida e as férias são divididos meio a meio. Como fazer isso no app hoje, o que ele ainda não sabe fazer e como acertar as contas uma vez por mês.

*a tag “comum” no formulário de transação e o bloco “Minhas tags” no “Resumo”*

### O que funciona hoje {#scenario-couple-today}

O ideal seria assim: um orçamento comum, “Nossa casa”, que os dois mantêm, e mais um pessoal para cada um, que o outro não vê. Por uma nuvem comum isso **não vai funcionar** — o porquê está abaixo. Mas funciona se vocês passarem o orçamento comum pelo Wi-Fi em casa.

##### Por quê

O celular entra na nuvem com uma conta, e todos os orçamentos desse celular sincronizam com essa nuvem. A senha da nuvem também é uma por celular, não por orçamento. Por isso, um orçamento comum numa nuvem comum e um pessoal escondido do parceiro não podem morar no mesmo celular: o pessoal iria para o mesmo lugar que o comum.

Três jeitos funcionam.

##### Orçamentos pessoais e uma tag “comum”

Cada um tem o seu orçamento — ninguém vê o dinheiro do outro. Os gastos comuns levam uma tag, e uma vez por mês vocês comparam e acertam. Detalhes — [abaixo](#scenario-couple-tag).

##### Dois orçamentos, o comum pelo Wi-Fi

Cada celular tem o seu orçamento e o comum, “Nossa casa”. Cada um tem a sua nuvem, e vocês passam o orçamento comum um para o outro pelo Wi-Fi em casa. Detalhes — [abaixo](#scenario-couple-wifi).

##### Um orçamento comum para os dois

Todo o dinheiro num orçamento só, o dinheiro pessoal como categorias próprias. Os dois veem tudo. Bom se vocês não têm nada a esconder um do outro. Detalhes — [abaixo](#scenario-couple-all-shared).

### O jeito da tag “comum” {#scenario-couple-tag}

Cada um tem o seu orçamento no seu celular: com a sua nuvem ou sem nuvem nenhuma. Cada um lança os gastos comuns no próprio orçamento, como sempre, e coloca uma tag neles.

##### Como configurar — cada um no seu celular

1. Crie uma categoria para a sua parte dos gastos comuns — por exemplo, “Família” no grupo “Despesas fixas”. Todo mês, coloque nela quanto vocês combinaram de contribuir para o caixa comum.
2. Pagou algo comum — o mercado da casa, as contas? Lance a compra nessa categoria.
3. No campo “Tags”, crie a tag “comum” e coloque-a em cada compra assim.
4. No “Resumo”, no bloco “Minhas tags” → “⋮” → “Escolher tags…”, marque “comum” e escolha o período “Total deste mês”.

*Por que uma categoria só, e não “Mercado” e “Contas de casa”:*
O seu orçamento pessoal responde à pergunta “quanto eu gasto”. A sua parte da casa comum é uma linha só, como o aluguel: “Família”. Se quiser ver para onde vai o dinheiro comum, abra a tela da tag “comum”: lá tem “Por categoria”. Nesse caso, lance os gastos comuns nas categorias normais, e a tag os junta.

### Fim do mês: quem deve a quem {#scenario-couple-month}

1. Cada um confere em “Minhas tags” quanto gastou com “comum” neste mês.
2. Somem os dois valores e dividam ao meio — essa é a parte de cada um.
3. Quem gastou menos que a sua parte manda a diferença para o outro.

**Exemplo.** A Júlia gastou R$ 3.600 com o comum, o Pedro, R$ 2.400. No total são R$ 6.000, então a parte de cada um é R$ 3.000. O Pedro manda R$ 600 para a Júlia.

##### Como lançar o repasse

- **Pedro** — uma despesa de R$ 600 na categoria “Família” com a tag “comum”: é também a contribuição dele para o caixa comum.
- **Júlia** — R$ 600 entrando do Pedro na mesma categoria “Família”, com a mesma tag: o dinheiro voltou para o envelope. Como lançar um reembolso para uma categoria — no artigo [“Formulário de transação”](#entry).

Nas “Minhas tags” do Pedro fica R$ 3.000. Nas da Júlia continua R$ 3.600: o bloco conta só os gastos. Os R$ 3.000 dela estão na tela da tag “comum”: “Recebido” R$ 600 e “Líquido” R$ 3.000.

Comparem pelas “Minhas tags” **antes** do repasse — depois dele, os números já estão acertados.

*E o “Acerto de contas” na tag?:*
O “Acerto de contas” calcula “gasto menos recebido” no **seu** orçamento — é bom quando você divide uma despesa com alguém que não lança no seu orçamento: uma viagem com amigos, um presente em grupo. Para um casal com dois orçamentos, ele mostra só a sua metade do quadro: a contribuição do outro não está no seu orçamento. Por isso, aqui comparem pelas “Minhas tags”. Sobre o “Acerto de contas” — no artigo [“Beneficiários e tags”](#payees-tags).

### Dois orçamentos, o comum pelo Wi-Fi {#scenario-couple-wifi}

Cada celular tem dois orçamentos: o seu e o comum, “Nossa casa”. Cada um tem a sua nuvem — a sua conta, a sua senha. Os dois orçamentos vão para a nuvem do dono do celular, e o outro não os vê lá. Vocês passam um para o outro só a “Nossa casa” — pelo Wi-Fi, quando os dois estão em casa.

##### Como configurar

1. Cada um conecta uma nuvem no seu celular com a sua conta, como sempre.
2. A Júlia cria o orçamento “Nossa casa”: toque no nome do orçamento no cabeçalho do “Resumo” — ali estão a lista de orçamentos e um orçamento novo. O Pedro cria no celular dele um orçamento vazio com o mesmo nome.
3. Na primeira vez, o Pedro recebe a “Nossa casa” da Júlia pelo Wi-Fi (como — abaixo) e escolhe “Substituir por completo”: o orçamento vazio dele vira uma cópia do da Júlia.

##### A troca em casa

1. **Os dois abrem a “Nossa casa”.** A troca acontece entre os orçamentos abertos.
2. “Configurações” → “Transferência local”. Júlia: “Iniciar o servidor”. Pedro: “Escanear o QR” → “Receber os dados” → “Mesclar”.
3. Júlia: “Parar o servidor”.

A troca vai nos dois sentidos: o Pedro recebe as alterações da Júlia, e as dele vão para a Júlia — tanto as transações quanto as fotos das notas fiscais. Não importa qual dos dois envia e qual recebe.

**“Parece que é outro orçamento” — toque em “Cancelar”.** Se um de vocês estiver com o próprio orçamento aberto em vez da “Nossa casa”, os dois orçamentos não têm nenhuma conta nem transação em comum, e o app pergunta antes de mesclar. “Continuar mesmo assim” despejaria os gastos pessoais no orçamento comum, e não haveria como separá-los de novo.

*E se os orçamentos se mesclaram?:*
Separá-los à mão não dá, mas dá para voltar os dois a um backup automático — o app os faz sozinho, por padrão a cada 5 dias. A troca vai nos dois sentidos, então são dois orçamentos estragados: o pessoal do Pedro (a “Nossa casa” entrou nele) e a “Nossa casa” da Júlia (os gastos pessoais do Pedro entraram nela). Cada um conserta o seu no próprio celular.

1. Abra o orçamento estragado. “Configurações” → “Backups”.
2. Encontre um backup **deste** orçamento (o nome dele está na linha do backup) com data **anterior** à troca. Toque no ícone de relógio com seta → “Restaurar”. Depois disso, **não toque em “Sincronizar”**: o orçamento mesclado ainda está na nuvem.
3. Apague o arquivo de sincronização deste orçamento na sua nuvem — como no artigo [“Nuvem e backups”](#sync-rollback), passos 2–4. Cada um tem a sua nuvem, e só o seu celular grava este orçamento lá, então a parte sobre vários aparelhos não se aplica.
4. As alterações feitas depois do backup se perdem. As comuns dá para recuperar: quando a Júlia tiver voltado a “Nossa casa”, troquem mais uma vez com os dois na “Nossa casa”, e as alterações comuns voltam para ela da “Nossa casa” do Pedro — a cópia dele está limpa. Os gastos pessoais lançados depois do backup vão ter de ser lançados de novo.

Antes da primeira troca vale a pena fazer backups à mão — cada um no seu celular, e dos **dois** orçamentos: o backup é feito do orçamento aberto. Abra o seu orçamento → “Backups” → “Criar backup agora”, depois abra a “Nossa casa” e repita. Assim você volta não a um backup automático de cinco dias atrás, e sim ao estado logo antes da troca.

*A senha da nuvem precisa ser igual?:*
Não. A transferência pelo Wi-Fi é criptografada com o código de confirmação da tela do celular que envia; a senha dos backups não entra nisso. A senha do bloco “Criptografia da nuvem” fecha só a **sua** nuvem. Ela precisa ser igual só quando dois celulares gravam numa nuvem só — aqui as nuvens são diferentes.

*E se alguém alterou algo fora de casa?:*
Cada um tem a “Nossa casa” no próprio celular: lance uma compra na loja, e ela já está na sua cópia e na sua nuvem. Troquem em casa — e os dois ficam com tudo. Se um dos celulares ainda tiver uma versão mais antiga do app, as alterações de quem recebe não voltam — o app avisa; aí troquem de novo, invertendo os papéis. Se os dois alteraram a mesma transação, fica a alteração mais recente, como na sincronização comum.

O preço: o orçamento comum só fica em dia quando os dois estão em casa e fizeram a troca.

### Um orçamento comum para os dois {#scenario-couple-all-shared}

Se não há segredos pessoais, o mais simples é manter tudo junto — aí vocês veem o quadro inteiro e um “não alocado” só para os dois.

- Configuração — como no cenário [“Duas ou mais pessoas, um orçamento”](#scenario-together): uma conta de nuvem separada para o orçamento, com entrada nos dois celulares.
- O dinheiro pessoal — como categorias próprias: “Pessoal da Júlia”, “Pessoal do Pedro”. Todo mês entra nelas o valor combinado; como gastar é com o dono.
- As contas — cada um tem as suas: “Cartão da Júlia”, “Cartão do Pedro”. Assim dá para ver quem pagou.

O preço: os dois veem tudo — tanto os gastos das categorias “pessoais” quanto os saldos dos cartões.

### O que ainda não existe {#scenario-couple-not-yet}

Um orçamento comum que sincroniza sozinho pela nuvem para os dois, ao lado de orçamentos pessoais escondidos do parceiro, e passar uma despesa comum do orçamento pessoal para o comum com um toque — ainda não existem. Vamos fazer quando as pessoas precisarem. Se é o seu caso, escreva no “Bate-papo no Telegram” (“Configurações”, seção “Ajuda e contato”): quanto mais mensagens assim, mais cedo.

## Freelance e renda irregular {#scenario-freelance}

O dinheiro entra quando o cliente paga: um mês de fartura, outro de aperto. Como parar de viver de um pagamento a outro com uma renda assim, separar dinheiro para os impostos e saber quanto você realmente ganha.

*“Plano”, “Resumo”, “Relatórios” — tudo abaixo*

### A ideia principal {#scenario-freelance-idea}

Com salário, o mês é previsível: caiu no dia 5, dá até o próximo dia 5. Um freelancer não sabe de antemão a renda do mês — então não dá para planejar a partir dela. Planeje a partir do dinheiro que você **já tem**.

##### Gaste o que ganhou antes

O mês vive do que entrou antes. O que entra agora trabalha para o mês seguinte. [Como](#scenario-freelance-last-month).

##### Amorteça com uma reserva

Um mês bom abastece a reserva, um mês fraco tira dela. [Como](#scenario-freelance-buffer).

##### Separe o imposto na hora

Uma porcentagem de cada pagamento vai para um envelope próprio antes de o dinheiro ser gasto. [Como](#scenario-freelance-taxes).

### Gaste o dinheiro do mês passado {#scenario-freelance-last-month}

Lance cada pagamento não para este mês, e sim para o **seguinte**. Assim, no dia 1º o mês inteiro já está pago com dinheiro ganho, e você o divide entre os envelopes de uma vez — não aos pedaços depois de cada pagamento.

##### Como lançar um pagamento

1. “+ Transação” → “+ Entradas”, beneficiário — o cliente, valor.
2. Toque no campo “Categoria” — abre “Onde lançar a receita”.
3. Escolha “Receita para dezembro” em vez de “Receita para novembro”. Salve.

A data da transação continua a real. Muda só o mês do orçamento em que o dinheiro aparece.

##### Por onde começar

No primeiro mês você vai ter de gastar o que tem e ao mesmo tempo juntar para o seguinte. Comece por um pagamento que ainda não foi alocado. Até ter o bastante para um mês à frente, coloque pelo menos parte dele no mês seguinte: o app mostra quanto já há lá no “Orçamento do mês” do “Resumo” — a linha “Orçamento de dezembro”.

O objetivo é uma “Idade do dinheiro” de 30 dias ou mais: quer dizer que você gasta o dinheiro do mês passado. Mais no artigo [“Resumo”](#overview-age-month).

### Uma reserva para os meses fracos {#scenario-freelance-buffer}

Mesmo com dinheiro um mês à frente, dois meses fracos seguidos acontecem. A reserva é um envelope que segura você neles.

##### Como configurar

1. A categoria “Reserva de emergência” — ou uma sua, “Colchão”.
2. Uma meta “Saldo”: o valor é o seu gasto normal de 3–6 meses. Quanto é isso — “Renda média por mês” e “Tendência de gastos”, abaixo.
3. Num mês bom, coloque na reserva tudo o que passar do normal.

A meta “Saldo” cuida para a reserva não derreter: gastou uma parte, e o app pede para repor. Mais no artigo [“Metas”](#goals-balance).

##### Um mês fraco

Não deu para os envelopes, e os gastos entraram no negativo. Toque no valor vermelho no “Plano” → “Cobrir de outra categoria” → na linha “Reserva de emergência”, “Tirar …”. O dinheiro passa da reserva para onde está o negativo. Mais no artigo [“Plano”](#budget-screen).

### Impostos — direto para o envelope deles {#scenario-freelance-taxes}

O imposto de um pagamento é fácil de gastar: o dinheiro está no cartão, e o imposto só vence no trimestre que vem.

##### Uma meta “% renda”

1. A categoria “Impostos”.
2. Uma meta “% renda” — a porcentagem que você paga. Embaixo da porcentagem, deixe “Da renda deste mês”: o imposto é calculado sobre o dinheiro que entrou, não sobre a média.
3. Cada pagamento atualiza a meta sozinho: entrou mais, a meta subiu, e “faltam …” diz quanto completar.

O que você separa vai se acumulando no envelope até a data do pagamento: o positivo passa de mês para mês. Mais no artigo [“Metas”](#goals-percent).

*Se você lança a receita para o mês seguinte:*
Então a meta “% renda” deste mês já é conhecida no dia 1º: a renda do mês chegou no mês passado. Prático — o imposto é separado logo de início, junto com os outros envelopes.

### Entrou dinheiro — divida com um toque {#scenario-freelance-income}

Dividir cada pagamento à mão cansa. A alocação automática “Por porcentagem” faz isso por você.

##### Configure uma vez

1. No “Plano”, toque em “não alocado” no cabeçalho — abre “Alocação automática do orçamento”.
2. “Por porcentagem” → “Definir porcentagens”: por exemplo, “Impostos” — 5%, “Reserva de emergência” — 20%, “Investimentos” — 10%.
3. As porcentagens ficam guardadas. O que não for coberto por uma porcentagem fica em “não alocado” — aloque nos envelopes do mês você mesmo.

Daí em diante: entrou dinheiro — toque em “não alocado” → “Por porcentagem”. O app divide exatamente o que está não alocado agora.

*Por que porcentagens e não valores:*
Com renda irregular, um valor fixo é impossível num mês e ridículo no outro. A porcentagem sobe e desce junto com a renda. Arredondamento — os chips “Para inteiros”, “Para 10”, “Para 100” na mesma folha.

### Clientes e projetos {#scenario-freelance-clients}

##### O cliente é o beneficiário

Lance cada pagamento com o cliente no campo “Beneficiário”. Toque no cliente em “Configurações” → “Beneficiários” — abre a tela dele: “Tendências de entradas” mostra quanto ele paga em média, e o período “Ano” mostra todos os pagamentos dele no ano. Dá para ver quem sustenta você e quem paga duas vezes por ano. Mais no artigo [“Beneficiários e tags”](#payees-tags-payee).

##### O projeto é uma tag

Crie uma tag para o projeto: “site do café”. Coloque-a tanto no pagamento do cliente quanto nos custos do projeto: a assinatura de um serviço, o táxi para uma reunião, uma fonte. A tela da tag mostra “Gasto”, “Recebido” e “Líquido” — quanto o projeto realmente rendeu. Mais no artigo [“Beneficiários e tags”](#payees-tags).

### Pagamentos esperados {#scenario-freelance-expected}

A nota foi emitida, e o dinheiro foi prometido até o dia 15. Para não esquecer e ver o que vem pela frente, crie um pagamento programado.

1. “Configurações” → “Pagamentos programados” → “+ Pagamento”.
2. “+ Entradas”, o cliente, o valor, a data prometida para o pagamento, “Repetir” — “Uma vez”.
3. O pagamento aparece em “O que vem” e no “Calendário” do “Resumo”.
4. O dinheiro chegou na data — “Confirmar” na tela de confirmação. Antes do prazo — deslize a linha do pagamento para a esquerda — “Lançar”. O cliente atrasou — abra o pagamento e mude o campo “Data”.

Enquanto o pagamento não é confirmado, ele não está no orçamento: os envelopes não são enchidos com dinheiro prometido. Mais no artigo [“Pagamentos programados”](#scheduled).

### O que acompanhar {#scenario-freelance-reports}

| Onde | O que diz |
|---|---|
| “Resumo” → “Orçamento do mês” | A “Renda média por mês” em 12 meses e o “Orçamento de dezembro” — quanto você já tem para o mês seguinte. |
| “Resumo” → “Idade do dinheiro” | 30 dias ou mais — você vive com o dinheiro do mês passado. |
| “Resumo” → “Gastos do mês” | Se você está gastando mais que o normal agora. |
| “Relatórios” → “Receitas e despesas” | Uma tabela mês a mês: as receitas por fonte — cada cliente na sua linha —, as despesas por grupo e a “Taxa de poupança”. Dá para ver tanto a sazonalidade quanto quem paga quanto. |
| “Relatórios” → “Tendência de gastos” | O seu gasto normal por mês — a base para dimensionar a reserva. |
| “Relatórios” → “Fluxo de dinheiro” | Para onde foi o dinheiro ganho num período — e quanto sobrou. |
| “Relatórios” → “Idade do dinheiro” | Como o seu fôlego de tempo cresce mês a mês. |

Mais sobre os relatórios no artigo [“Relatórios”](#reports).

### O dinheiro do trabalho à parte {#scenario-freelance-business}

Se o trabalho tem uma conta própria e despesas próprias — serviços, equipamento, contador —, dá para mantê-los num **segundo orçamento**, por exemplo “Trabalho”. Toque no nome do orçamento no cabeçalho do “Resumo” — ali estão a troca de orçamento e um orçamento novo.

O orçamento do trabalho guarda os pagamentos e as despesas do trabalho. O que você tira para viver vai como transferência para o seu cartão pessoal: no orçamento do trabalho é gasto, no pessoal é receita. Assim o orçamento pessoal vive com um valor estável todo mês, e todos os altos e baixos ficam no orçamento do trabalho.

## De salário em salário {#scenario-paycheck}

O dinheiro acaba antes do mês, e o salário ainda está a uma semana. Como dividir o que você tem, chegar ao próximo salário sem vermelho e, passo a passo, sair da corrida dos ratos.

*“Plano”, “Resumo” e a tela da categoria — tudo abaixo*

### A ideia principal {#scenario-paycheck-idea}

Os envelopes não dão mais dinheiro do que você tem. Mas mostram **de antemão** se ele vai dar até o salário — não no último dia, e sim no primeiro.

##### Aloque só o que você tem

Um envelope é enchido com o dinheiro que já está nas contas. Um salário prometido ainda não é dinheiro. [Como](#scenario-paycheck-now).

##### O essencial primeiro

Moradia, comida, o transporte para o trabalho, remédios, a parcela do empréstimo. Todo o resto vem depois. [Como](#scenario-paycheck-now).

##### Negativo não é fracasso

Passe dinheiro de outro envelope e siga em frente. [Como](#scenario-paycheck-minus).

### Dia de pagamento — divida na hora {#scenario-paycheck-now}

Enquanto o dinheiro não está dividido, parece muito. Dividido em envelopes, ele diz a verdade: R$ 600 para a comida até o dia 5, e é isso.

##### Na ordem

1. Abra o “Plano”. No alto está “não alocado”: esse tanto de dinheiro ainda não tem tarefa.
2. Primeiro encha os envelopes sem os quais não dá para chegar ao próximo salário: aluguel, contas de casa, “Mercado”, o transporte para o trabalho, remédios, a parcela mínima do empréstimo.
3. Depois todo o resto, até “não alocado” chegar a zero.
4. Não dá para tudo? Alguns envelopes ficam vazios. Isso não é erro, e sim uma resposta honesta: neste mês não há dinheiro para isso.

Como colocar dinheiro num envelope — passo a passo no artigo [“Plano”](#budget-screen).

*O chip ficou vermelho — “Alocado em excesso”:*
Você distribuiu mais do que tem nas contas. Diminua o valor separado num dos envelopes — toque no valor e digite menos. O dinheiro volta para “não alocado”.

### Dois pagamentos por mês {#scenario-paycheck-two}

Dinheiro duas vezes por mês — você divide duas vezes. O primeiro pagamento vai para o que é preciso até o segundo. O segundo vai para o resto e para o que vem depois dele.

##### As contas antes do pagamento — como pagamentos programados

Crie pagamentos programados para o aluguel, as contas de casa, o celular: “Configurações” → “Pagamentos programados” → “+ Pagamento”. Eles aparecem no bloco “O que vem” e no “Calendário” do “Resumo”, e um lembrete chega na véspera do vencimento. Você vê quais contas vencem antes do pagamento e quais depois — e o que cobrir com o primeiro. Mais no artigo [“Pagamentos programados”](#scheduled).

### Quanto dá para gastar por dia {#scenario-paycheck-until}

##### “≈ … por dia”

Toque numa categoria no “Plano” — abre a tela dela. Embaixo de “Disponível” está quanto você pode gastar por dia até o fim do mês sem entrar no negativo. Com R$ 420 no “Mercado” e dez dias até o fim do mês — “≈ R$ 42,00 por dia”. Mais no artigo [“Tela da categoria”](#category-screen).

##### “Acabando” no “Resumo”

Ainda há dinheiro no envelope, mas você está gastando mais rápido do que o mês anda — a categoria aparece amarela no bloco “Acabando”. É um sinal para frear agora, não daqui a uma semana. Mais no artigo [“Resumo”](#overview-blocks).

##### “Gastos do mês”

Um bloco no “Resumo”: se neste mês você está gastando mais do que o normal até esta data.

### Um negativo vermelho {#scenario-paycheck-minus}

Você gastou mais do que o envelope tinha — o valor está vermelho. Cubra na hora, antes de o mês acabar.

1. Toque no valor vermelho no “Plano”.
2. Na folha “Gasto excedido”, toque em “Cobrir de outra categoria”. Abre “De onde tirar o dinheiro”: o “Não alocado” e todos os envelopes que têm dinheiro.
3. Toque em “Tirar …” ao lado de um envelope que pode ceder. O negativo está coberto — “Excesso coberto!”.

Mais no artigo [“Plano”](#budget-screen).

*O negativo ficou até o fim do mês:*
Ele é zerado, mas não sem deixar rastro: o “não alocado” do mês seguinte diminui no mesmo valor. O próximo salário fica menor exatamente nesse negativo. Mais no artigo [“Como o orçamento funciona”](#start-months).

*Vários negativos, e há algo em “não alocado”:*
Toque em “não alocado” no cabeçalho do “Plano” → “Cobrir todos os gastos excedidos”. O app cobre todos os negativos do mês com o dinheiro não alocado de uma vez.

### O cartão de crédito não é a saída {#scenario-paycheck-card}

O envelope está vazio, mas o cartão de crédito tem limite. A tentação é compreensível, mas uma compra no cartão de crédito com o envelope vazio é um negativo **amarelo**: não há dinheiro, e a dívida cresce. No mês seguinte vai ser preciso pagá-la com o salário novo — ou seja, ele vai ficar menor de novo. Mais no cenário [“Cartões de crédito e dívidas”](#scenario-credit-yellow).

### Lance todo dia {#scenario-paycheck-daily}

O envelope diz a verdade só enquanto todos os gastos estão lançados nele. Uma compra esquecida de ontem — e o “≈ … por dia” está mentindo.

- O lembrete da noite: “Configurações” → “Planejamento” → “Lembretes” → “Gastos do dia” → “Lembrar de adicionar os gastos”. Ele chega só se você não lançou nada naquele dia. **Logo depois da instalação:** desligado.
- O jeito mais rápido de lançar é no caixa: [por voz](#voice) ou [com o leitor de notas fiscais](#receipt). Sem tempo para escolher a categoria? — [“Para a caixa de entrada”](#entry-inbox), e organize à noite.

### Como sair da corrida dos ratos {#scenario-paycheck-out}

O objetivo não é só se virar, e sim um dia viver com o dinheiro ganho um mês antes. Vá degrau por degrau, um de cada vez.

(1)
##### Uma pequena reserva

A categoria “Reserva de emergência” com uma meta “Saldo” — para começar, o bastante para pelo menos uma semana de gastos. O celular quebrou — o dinheiro sai daqui, não do envelope da comida. Mais no artigo [“Metas”](#goals-balance).

(2)
##### Despesas irregulares — um pouco de cada vez

O seguro, os presentes e o conserto do sapato deixam de estragar o mês se você separar dinheiro para eles todo mês. Uma meta “até a data” calcula quanto. Mais no cenário [“Juntar para algo grande”](#scenario-saving).

(3)
##### Dinheiro um mês à frente

Todo mês, deixe um pouco a mais. Quando tiver juntado um mês inteiro, lance o salário para o mês seguinte: “Categoria” → “Receita para dezembro”. Daí em diante cada mês está pago de antemão, e o dia do pagamento deixa de importar.

Quanto você já tem para o mês seguinte — “Orçamento do mês” no “Resumo”, a linha “Orçamento de dezembro”. Como está indo — a “Idade do dinheiro”: 30 dias ou mais quer dizer que você saiu da corrida dos ratos. Mais no artigo [“Resumo”](#overview-age-month) e no artigo [“Como o orçamento funciona”](#start-ladder).

## Cartões de crédito e dívidas {#scenario-credit}

Um cartão de crédito, um financiamento do carro, uma dívida de antes do app. Como configurar, como pagar para o orçamento não mentir e como acompanhar a dívida diminuindo.

*“Contas”, “Plano” → “Pagamentos de cartão”, “Relatórios” → “Dívida dos cartões” e “Patrimônio”*

### Cartão de crédito {#scenario-credit-card}

A regra é uma só: uma compra no cartão de crédito gasta o dinheiro do envelope igualzinho a uma compra no débito. A diferença está em onde esse dinheiro espera: não numa conta, e sim na categoria do cartão de crédito, até você pagar o banco.

##### Como configurar

1. “Contas” → “⋮” → “Adicionar conta”.
2. Tipo — “Cartão de crédito”. Nome — como você chama o cartão.
3. Valor — quanto você deve ao banco agora. Digite e toque em “±” para deixar negativo.
4. Salve. O cartão vai para a seção “Cartões de crédito”, e no “Plano” aparece no grupo “Pagamentos de cartão” uma categoria com o mesmo nome.

Não mexa nessa categoria: é por ela que o app conta a dívida deste cartão. Mais no artigo [“Contas”](#accounts-screen).

##### Uma compra

Lance como sempre: conta — o cartão de crédito, categoria — o que você comprou. Comprou comida por R$ 105 — o “Mercado” ficou R$ 105 mais magro, e os mesmos R$ 105 foram para a categoria do cartão de crédito, para o pagamento. Não é preciso separar nada por conta própria.

### Dívida de antes de você começar {#scenario-credit-old-debt}

A dívida inicial — R$ 2.400 no cartão desde o ano passado — o app não separa sozinho: nunca houve dinheiro para ela nos envelopes.

Separe dinheiro para ela na categoria do cartão de crédito, como em qualquer envelope: no “Plano”, toque no valor dela e digite quanto você consegue neste mês. Tudo de uma vez ou aos poucos — você decide. Enquanto não separar, não há dinheiro para quitá-la.

### O negativo amarelo {#scenario-credit-yellow}

Você gastou no cartão de crédito mais do que o envelope tinha — o valor ficou **amarelo**, com ícone de cartão. Vermelho, com ícone de carteira, é um negativo do seu próprio dinheiro.

##### O vermelho come o seu dinheiro

Um negativo no débito ou no dinheiro vivo. No fim do mês ele diminui o “não alocado” do mês seguinte.

##### O amarelo aumenta a dívida

Você não gastou dinheiro — pegou emprestado. Só a parte coberta foi para a categoria do cartão de crédito; para o resto não há dinheiro para o pagamento.

##### O que fazer

Cubra um negativo amarelo como um vermelho: toque no valor → “Cobrir de outra categoria” → “Tirar …” de outro envelope. Aí o dinheiro do pagamento é completado sozinho. Não conseguiu? No mês seguinte, coloque a diferença direto na categoria do cartão de crédito.

### O pagamento do cartão {#scenario-credit-payment}

Quanto pagar ao banco está na categoria do cartão de crédito no “Plano”: esse tanto já está separado para o pagamento.

1. “+ Transação”, conta — o seu cartão de débito.
2. “Beneficiário” → a seção “Transferências” → o seu cartão de crédito. O cabeçalho do formulário fica cinza, e a categoria não é necessária.
3. Valor — quanto você está pagando. Salve.

O dinheiro no cartão de débito diminui, a dívida do cartão de crédito também, e junto com ela o valor separado na categoria do cartão de crédito. Os envelopes não mudam: o gasto você já fez antes, quando fez as compras. Mais no artigo [“Formulário de transação”](#entry-transfer).

*Pagar tudo ou o mínimo:*
A categoria do cartão de crédito tem exatamente o quanto você gastou no cartão a partir dos envelopes. Pague todo mês tudo o que está separado, e nenhuma dívida nova se acumula. Pague só o mínimo, e o resto fica na categoria, esperando; o banco cobra juros sobre a dívida restante.

### Juros e tarifas do cartão {#scenario-credit-card-interest}

O banco cobrou juros ou uma tarifa de anuidade — isso é gasto.

Lance uma despesa: conta — o cartão de crédito, beneficiário — o banco, categoria — uma própria, por exemplo “Juros e tarifas”. O envelope diminui, e o dinheiro do pagamento é separado, como em qualquer compra. Também aparece nos relatórios: quanto esse crédito custa para você.

### Empréstimo {#scenario-credit-loan}

Um financiamento do carro, da casa, um parcelamento — dinheiro que você já gastou e está devolvendo em partes.

##### Como configurar

1. “Contas” → “⋮” → “Adicionar conta”.
2. Tipo — “Empréstimo”. Valor — quanto falta pagar segundo o extrato do banco, com sinal de menos (“±”).
3. A conta vai para a seção “Dívidas”. Ela fica fora do orçamento: esse dinheiro não tem envelopes, e o orçamento não toca na dívida inicial.

##### Um envelope para a parcela

Crie uma categoria para a parcela mensal — por exemplo, “Empréstimos” no grupo “Despesas fixas” — e uma meta “Por mês” com o valor da parcela. Todo mês a meta lembra você de separar o dinheiro. Mais no artigo [“Metas”](#goals-monthly).

### O pagamento do empréstimo {#scenario-credit-loan-payment}

1. “+ Transação”, conta — o cartão de onde você paga.
2. “Beneficiário” → “Transferências” → a conta do empréstimo.
3. O empréstimo está fora do orçamento, então o app pede uma categoria: escolha “Empréstimos”. O dinheiro sai do envelope, e a dívida na conta do empréstimo diminui.

*O banco diz que R$ 240 da parcela são juros:*
Lance a parcela inteira como uma transferência só, como acima. Depois, uma vez por mês, lance os juros na própria conta do empréstimo: “Saídas”, conta — o empréstimo, beneficiário — o banco, valor — os juros. A categoria não é necessária: a conta está fora do orçamento. Assim a dívida no app bate com a do banco, e o envelope “Empréstimos” entrega exatamente a sua parcela.

*Um lembrete da parcela:*
Crie um pagamento programado como transferência: “Configurações” → “Pagamentos programados” → “+ Pagamento”, “Beneficiário” → “Transferências” → a conta do empréstimo, categoria “Empréstimos”, “Repetir” — “Mensalmente”. O pagamento aparece nas telas das duas contas, um lembrete chega antes, e “Confirmar” lança a transferência. O mesmo vale para o pagamento do cartão de crédito: do cartão de débito para o cartão de crédito. Mais no artigo [“Pagamentos programados”](#scheduled-new).

### Acompanhar a dívida {#scenario-credit-watch}

| Onde | O que diz |
|---|---|
| “Contas” | As seções “Cartões de crédito” e “Dívidas” — quanto você deve agora. |
| “Plano” → “Pagamentos de cartão” | Quanto está separado para quitar cada cartão. |
| “Relatórios” → “Dívida dos cartões” | A dívida de todos os cartões de crédito mês a mês: se está diminuindo ou crescendo. Disponível se você tiver um cartão de crédito. |
| “Relatórios” → “Patrimônio” | Tudo o que você tem menos todas as dívidas. Cada parcela de empréstimo empurra a linha para cima. |

Mais sobre os relatórios no artigo [“Relatórios”](#reports-capital).

## Juntar para algo grande {#scenario-saving}

Um notebook, uma reforma, um carro, a entrada de um apartamento. Como separar um pouco de cada vez, ver se vai dar até o prazo e não gastar o que juntou sem querer.

*“Plano”, “Metas”, a tela da categoria*

### Um envelope só para a compra {#scenario-saving-envelope}

O dinheiro do notebook misturado com o dinheiro do dia a dia é o primeiro a ser gasto. Um envelope separado o protege: enquanto ele está em “Notebook”, não aparece no “Mercado”.

1. No “Plano”, encontre o grupo que tem “Compras grandes” e “Viagens e férias”.
2. Toque em “⊕” ao lado do nome dele — uma categoria nova. Dê a ela o nome da compra: “Notebook”.
3. Ou junte na categoria pronta “Compras grandes”, se a compra for uma só.

Mais no artigo [“Plano”](#budget-screen).

### Uma meta “até a data” {#scenario-saving-goal}

Diga ao app quanto e até que mês — ele calcula quanto colocar por mês.

1. Toque na categoria no “Plano” → o cartão “Meta” → “Adicionar meta”.
2. “Tipo de meta” — “Até a data”.
3. “Valor” — o preço da compra, “Juntar até o mês” — quando você precisa.
4. “Salvar”.

Um notebook de R$ 7.200 em seis meses — a meta vai pedir R$ 1.200 por mês. Pulou um mês, e o que faltou se distribui pelos meses restantes, então a parcela cresce. Colocou mais, e as próximas diminuem. Mais no artigo [“Metas”](#goals-bydate).

*Juntar sem prazo:*
Uma meta “Saldo”: o envelope deve ter esse valor, e quando não importa. Serve para “um carro novo algum dia” e para uma reserva de emergência. Mais no artigo [“Metas”](#goals-balance).

### Estou no ritmo? {#scenario-saving-pace}

##### Uma estimativa rápida na tela da categoria

Toque na categoria — uma meta “até a data” tem um seletor embaixo da barra: “Por valor” e “Por prazo”. Mexa em “Guardar por mês” — você vê em que mês chega lá. Mexa no mês — você vê quanto colocar. Gostou da data nova? — “Usar como prazo da meta: …”. Mais no artigo [“Metas”](#goals-card).

##### Faltando neste mês

No “Plano”, embaixo do valor há uma bandeirinha e “faltam …”. O chip “Subfinanciado” acima da lista deixa só essas categorias. No “Resumo”, o que falta aparece nos blocos “Metas” e “O que vem”.

### Onde está o dinheiro {#scenario-saving-where}

A poupança muitas vezes fica numa conta separada: uma poupança, uma aplicação, um cofrinho. Como essa conta está configurada decide se o dinheiro fica no envelope.

##### No orçamento — para uma compra

Uma conta do tipo “Conta bancária”. Você passou R$ 1.200 da conta corrente para a poupança — o envelope “Notebook” não mudou: o dinheiro mudou de lugar, mas continua seu e continua no orçamento. A meta vê isso e não pede de novo. **Está juntando para uma compra? Escolha esta opção.**

##### Fora do orçamento — para o patrimônio

Uma conta do tipo “Só acompanhamento”: investimentos, uma previdência. O app registra uma transferência para lá como dinheiro saindo de um envelope — ele pede uma categoria, e o envelope esvazia. Para uma compra isso não serve: a meta vai pedir dinheiro de novo, mesmo você tendo.

Mais no artigo [“Contas”](#accounts-kinds).

### Várias metas ao mesmo tempo {#scenario-saving-many}

Férias, um notebook e os presentes de fim de ano — pode não haver dinheiro para tudo neste mês.

“Plano” → “⋮” → “Alocar nas metas”. O app distribui o “não alocado” por todas as metas de uma vez. Não dá para tudo? As metas recebem dinheiro em ordem, de cima para baixo, como as categorias estão organizadas no “Plano”. Deixe o mais importante mais acima: “⋮” → “Mudar a ordem”. Mais no artigo [“Metas”](#goals-allocate).

### A compra {#scenario-saving-buy}

1. Lance a compra como sempre — na categoria “Notebook”. O envelope esvazia — é para isso que você juntou.
2. Saiu mais barato? O resto fica no envelope. Precisa dele em outro lugar? No “Plano”, toque no valor de “Notebook” e digite menos: a diferença volta para “não alocado”.
3. Saiu mais caro? O valor fica vermelho. Toque nele → “Tirar …” de outro envelope.
4. Não precisa mais da meta? “Plano” → “⋮” → “Metas” → toque na categoria → “Excluir”. O dinheiro no envelope fica. A categoria com a própria compra não pode ser excluída — só ocultada.

*Comprei no cartão de crédito:*
Também funciona: o dinheiro de “Notebook” é separado para o pagamento do cartão. Comprou a crédito ou parcelado? Isso é uma dívida; como acompanhá-la está no cenário [“Cartões de crédito e dívidas”](#scenario-credit-loan).

### Quanto eu guardo {#scenario-saving-pay-yourself}

O bloco “Pague-se primeiro” no “Resumo” mostra qual porcentagem da renda você separa — no mês, em três meses e no ano. O normal é 10%. Quais categorias contam como “guardado” você escolhe em “Configurações → Orçamento → Pague-se primeiro”: “Compras grandes”, “Notebook”, “Reserva de emergência”. Mais no artigo [“Resumo”](#overview-blocks).

## Viagem com amigos {#scenario-trip}

Você pagou a hospedagem de quatro pessoas, um amigo pagou o jantar, a gasolina é meio a meio, e no exterior ainda tem dinheiro vivo em outra moeda. Como juntar para a viagem, ver quanto ela custou e não se perder em quem deve a quem.

*a tag da viagem, “Acerto de contas” na tela da tag, o formulário de transação*

### Antes da viagem {#scenario-trip-before}

Junte em “Viagens e férias” com uma meta “até a data”: o valor é quanto você espera gastar, o mês é quando vai viajar. O app calcula a contribuição mensal. Mais no cenário [“Juntar para algo grande”](#scenario-saving-goal).

### Uma tag para a viagem {#scenario-trip-tag}

Os gastos da viagem caem em categorias diferentes — “Mercado”, “Transporte”, “Viagens e férias”. Uma tag os junta.

1. Já na primeira compra da viagem, abra “Adicional” → “Tags” → digite um nome, por exemplo “Lisboa”, → “Criar tag “…””.
2. Coloque essa tag em cada compra da viagem.
3. “⋮” da tag → “Mostrar em Minhas tags” — o total da viagem vai estar no “Resumo”.

A tela da tag mostra “Gasto” e “Por categoria” — quanto a viagem custou e para onde foi o dinheiro. Mais no artigo [“Beneficiários e tags”](#payees-tags-tag).

### Você paga por todos {#scenario-trip-pay-for-all}

Você pagou a hospedagem de quatro pessoas: R$ 2.400. A sua parte é R$ 600, e os outros R$ 1.800 devem voltar para você.

##### Divida o valor entre a sua parte e a dos amigos

1. Lance a compra de R$ 2.400, conta — o seu cartão, tag — “Lisboa”.
2. “Categoria” → “Dividir o valor”.
3. A primeira parte é “Viagens e férias”, R$ 600: é a sua parte.
4. A segunda parte também é “Viagens e férias”, R$ 1.800, e nela “+ tag” → uma tag nova “Lisboa: amigos devem”.
5. Abra a tela da tag “Lisboa: amigos devem” → “⋮” → “Acerto de contas”.

Agora a tela da tag diz “cobrar R$ 1.800”: é quanto devem a você. Mais sobre valores divididos no artigo [“Formulário de transação”](#entry-split).

*Por que uma segunda tag, e não uma só:*
O “Acerto de contas” calcula gasto menos recebido. Se você o ligasse em “Lisboa”, a sua própria parte também ficaria pendurada ali como “Cobrar”, e o acerto nunca fecharia. Uma tag só na parte dos amigos chega a zero quando todos devolverem.

### Um amigo devolveu {#scenario-trip-paid-back}

1. “+ Transação” → “Entradas”. Beneficiário — o amigo, valor — quanto ele devolveu, conta — onde o dinheiro chegou.
2. “Categoria” → “Para uma categoria de despesa…” → “Viagens e férias”. Isso não é receita — é o seu dinheiro voltando para o envelope.
3. Tags — “Lisboa” e “Lisboa: amigos devem”.

Quando os três tiverem devolvido, a tela da tag “Lisboa: amigos devem” diz “Quitado” em verde. E em “Lisboa”, o “Líquido” vai ser R$ 1.800 menor que o “Gasto” — na hospedagem fica exatamente a sua parte. Mais no artigo [“Formulário de transação”](#entry-refund).

### Um amigo pagou {#scenario-trip-friend-paid}

Um amigo pagou o jantar, e a sua parte é R$ 150. Do seu cartão ainda não saiu dinheiro — não há nada para lançar.

Quando você devolver ao amigo, lance então: uma despesa, beneficiário — o amigo, categoria — “Viagens e férias”, tag — “Lisboa”. Até pagar, guarde a dívida de cabeça ou numa nota — o app não acompanha a carteira dos outros.

### No exterior {#scenario-trip-abroad}

##### Pagando com o seu cartão

O banco cobra na moeda do seu cartão. Lance o valor que o banco cobrou — dá para vê-lo no app do banco. O valor em moeda local, se precisar, vai na nota: “jantar 42 €”.

##### Você levou dinheiro vivo em moeda estrangeira

Crie uma conta “Dinheiro €”: “Contas” → “⋮” → “Adicionar conta”, tipo “Só acompanhamento”, “Moeda da conta” — €. Só uma conta fora do orçamento pode ter moeda própria. Como trabalhar com ela está abaixo.

##### Câmbio e gastos em dinheiro vivo

1. Você trocou dinheiro — lance uma transferência do cartão para “Dinheiro €”. Embaixo do beneficiário aparecem “Será creditado” e “Taxa”: quantos euros você recebeu.
2. A conta está fora do orçamento, então o app pede uma categoria: “Viagens e férias”. O dinheiro saiu do envelope já no câmbio.
3. Lance os gastos em dinheiro vivo em euros na conta “Dinheiro €” — sem categoria, o envelope já pagou. Coloque a tag “Lisboa” como sempre.
4. Sobraram euros e você os trocou de volta? Uma transferência de “Dinheiro €” para o cartão, “Categoria” → “Para uma categoria de despesa…” → “Viagens e férias”. O dinheiro volta para o envelope.

Mais sobre moedas no cenário [“Várias moedas e casos especiais”](#scenario-currencies).

### Depois da viagem {#scenario-trip-after}

- A tela da tag “Lisboa”: o “Líquido” é quanto a viagem custou para você depois de todas as devoluções, “Por categoria” mostra para onde foi o dinheiro. Útil quando você for juntar para a próxima. Os gastos em euros ficam numa linha à parte: não há conversão pela taxa, e o próprio câmbio é uma transferência, então não entra no “Gasto”.
- Não precisa mais da tag na seleção? “⋮” da tag → “Ocultar da seleção”. Ela continua nas transações.
- Sobrou dinheiro em “Viagens e férias”? Deixe lá até as próximas férias: o positivo passa de mês para mês.

## Várias moedas e casos especiais {#scenario-currencies}

O salário numa moeda, a poupança em outra, um pouco de bitcoin e viagens ao exterior. O que o app sabe fazer com moedas, onde estão os limites e como manter as contas para os envelopes não mentirem.

*“Configurações” → “Moeda do orçamento”, contas fora do orçamento, uma transferência com taxa*

### A regra principal {#scenario-currencies-rule}

**Um orçamento tem uma moeda.** Todos os envelopes, todas as contas do orçamento e o “não alocado” estão nela. As outras moedas vivem em contas **fora do orçamento**: você vê quanto há lá, mas esse dinheiro não é dividido entre os envelopes.

*Por que funciona assim:*
Um envelope responde “quanto posso gastar com comida”. Se ele tivesse reais e dólares, a resposta mudaria todo dia junto com o câmbio. Uma moeda só nos envelopes — e a resposta é sempre a mesma.

### A moeda do orçamento {#scenario-currencies-budget-currency}

“Configurações” → “Orçamento” → “Moeda do orçamento”. A lista tem sessenta moedas, a atual na primeira linha, e uma busca por nome e símbolo no alto: “zloty” encontra “Złoty”.

Muda só o símbolo — o app não converte valores. Se você mantinha o orçamento em reais e escolher euros, R$ 1.000 vira € 1.000. Por isso a moeda é escolhida no começo, não no meio das contas.

*Um orçamento para cada moeda:*
Cada orçamento tem a sua moeda. Vive entre dois países? Dá para manter dois orçamentos: “Casa” em reais e “Lisboa” em euros. Toque no nome do orçamento no cabeçalho do “Resumo” — ali estão a troca de orçamento e um orçamento novo; a moeda é pedida na criação.

### Uma conta em outra moeda {#scenario-currencies-foreign-account}

1. “Contas” → “⋮” → “Adicionar conta”.
2. Tipo — “Só acompanhamento” (ou “Empréstimo”, se for uma dívida). Só uma conta fora do orçamento pode ter moeda própria.
3. Na seção “Moeda da conta”, toque no campo “Moeda” — abre uma lista de sessenta moedas, a mesma do orçamento: a atual na primeira linha, uma busca por nome e símbolo no alto. Os nomes estão na língua do próprio país: “zloty” encontra “Złoty”.
4. Criptomoeda — os chips embaixo do campo: ₿, USDT, USDC.
5. Não está lá? Digite você mesmo em “Ou digite a sua (ticker)”: ETH, o ticker de uma ação ou de um fundo. Os valores da conta vão levar esse rótulo.
6. Valor — quanto há na conta nessa moeda.

A conta vai para a seção “Fora do orçamento”, com os valores no próprio símbolo: “€ 1.200,00”. Mais no artigo [“Contas”](#accounts-kinds).

### Câmbio {#scenario-currencies-exchange}

Comprou euros com reais? É uma transferência entre as suas próprias contas, só que com taxa.

1. “+ Transação”, conta — o seu cartão em reais, “Beneficiário” → “Transferências” → a conta em euros.
2. Valor — quantos reais saíram.
3. Embaixo do beneficiário estão “Será creditado” e “Taxa”. Digite a taxa ou quantos euros entraram — o outro é calculado. O botão ao lado da taxa inverte o sentido dela: reais por um euro ou euros por um real.
4. A conta em euros está fora do orçamento — o app pede uma categoria: de qual envelope o dinheiro saiu. Por exemplo, “Reserva de emergência” ou “Investimentos”.

Mais no artigo [“Formulário de transação”](#entry-transfer).

*Vendeu os euros de volta:*
Uma transferência da conta em euros para o cartão. O campo “Categoria” abre “Onde lançar a receita”: “Receita para …” — se é dinheiro novo para distribuir, “Para uma categoria de despesa…” — se ele volta para o envelope de onde saiu.

### Viver num país, guardar em outro {#scenario-currencies-two-countries}

O orçamento fica na moeda em que você recebe e gasta no dia a dia: reais, euros, libras. O dinheiro na terra natal, uma aplicação em outra moeda, dólares guardados “para uma emergência” — contas fora do orçamento, cada uma na sua moeda. Os envelopes contam aquilo de que você vive, e o resto aparece ao lado, em “Contas”.

Os gastos no cartão no exterior são lançados no valor que o banco cobrou, na moeda do seu cartão. O valor em moeda local, se precisar, vai na nota. Mais no cenário [“Viagem com amigos”](#scenario-trip-abroad).

### Criptomoeda {#scenario-currencies-crypto}

Uma conta fora do orçamento, o chip ₿, USDT ou USDC embaixo do campo “Moeda” — e o seletor “Criptomoeda” liga sozinho: “8 casas decimais”. Para um ticker próprio (ETH, SOL), ligue à mão. Escolheu uma moeda comum da lista? O seletor desliga.

O número de casas decimais é escolhido uma vez: quando a conta já tem transações, o seletor diz “Não dá para mudar: a conta tem transações”.

### Moedas sem centavos {#scenario-currencies-no-cents}

O iene, o won e o dong não têm frações, mas o app mostra “,00” mesmo assim. É só a aparência: digite números inteiros como sempre. Com a digitação “Com vírgula”, 1500 é 1.500, não 15,00. Como os valores são digitados — “Configurações” → “Idioma e formatos” → “Digitação do valor”.

### Como os valores são escritos {#scenario-currencies-format}

“Configurações” → “Idioma e formatos” → “Formato dos valores”: o separador de milhar e o decimal, o símbolo da moeda à esquerda ou à direita. Logo depois da instalação, ele segue o idioma da interface: em português do Brasil, “R$ 1.234,56”. O inglês num celular da Índia ganha lakhs e crores de cara: “₹12,34,567.89”. Mais no artigo [“Configurações”](#settings-formats).

### O que falta {#scenario-currencies-not-yet}

- **Cotações da internet.** A taxa de câmbio você digita, quando faz o câmbio. Isso também é uma proteção: o app não pergunta cotações a nenhum serviço, então ninguém de fora fica sabendo em quais moedas está o seu dinheiro. Os seus dados ficam com você — como também diz a [política de privacidade](#settings-s-about).
- **Conversão para uma moeda só.** O “Patrimônio” soma só as contas na moeda do orçamento: uma conta em euros não entra. Em “Contas”, uma seção que tem uma conta em outra moeda não mostra total — não há como somar reais com euros.
- **Contas do orçamento em outra moeda.** Por quê — [acima](#scenario-currencies-rule).

## Resumo {#overview}

A primeira tela ao abrir o app: se o dinheiro dá, o que é urgente e o que vem pela frente — num só feed de cartões.

*A aba “Resumo” no meio, embaixo na tela*

### Para que serve esta tela {#overview-why}

O “Resumo” abre primeiro toda vez que você inicia o app. É uma olhada matinal no dinheiro: está tudo bem, o que está acabando, o que vem pela frente. Aqui você não divide dinheiro nem corrige transações — para isso existem o “Plano” e as “Transações”. Aqui você olha e decide para onde ir em seguida.

##### Está tudo bem

Se há dinheiro não alocado, onde há negativo, quais envelopes estão esvaziando mais rápido do que o mês anda.

##### O que já aconteceu

As transações recentes, os grandes gastos, um calendário dos dias de gasto.

##### O que vem pela frente

Os pagamentos programados, as metas em que falta dinheiro e os gastos deste mês comparados com o normal.

Minimize o app por mais de meio minuto, e ao voltar ele abre o “Resumo” de novo. Se você prefere voltar para onde parou, escolha isso em “Configurações → Aparência → Voltar para”.

### O que fica onde na tela {#overview-screen}

Toque em qualquer captura para abri-la em tela cheia.

[Tela “Resumo”: cabeçalho, o chip “Não alocado” e “Idade do dinheiro”, “Transações recentes”, “Acabando”]

1. **Configurações** — a engrenagem. Todas as configurações do app: sincronização, backups, aparência, idioma.

2. **Nome do orçamento** — toque para abrir a lista dos seus orçamentos e trocar para outro.

   *Como funciona:*
   Você pode ter vários orçamentos: por exemplo, o pessoal e o da família, ou um antigo que não quer apagar. Para criar, renomear ou excluir um orçamento — o menu “⋮” → “Orçamentos” ([abaixo](#overview-menu)).

3. **Sincronização** — duas setas num círculo. Toque — as suas alterações vão para a nuvem, e as dos outros aparelhos vêm para cá.

   *Como funciona:*
   O número no ícone é quantas alterações ainda não foram enviadas. Logo depois de uma sincronização o ícone pisca por 15 segundos: verde — deu certo, vermelho — não deu. Segure o dedo nele, e o app conta o que aconteceu.

   Uma falha isolada costuma ser a rede: o metrô, um sítio no meio do mato. Se falhar quatro vezes seguidas, o ícone fica vermelho com um “!” dentro até dar certo. Sem nuvem conectada — o ícone fica na cor normal, sem número.

4. **O menu “⋮”** — orçamentos, escolha de blocos, “Ocultar valores”. Explicado [abaixo](#overview-menu).

5. **“Não alocado”** — o dinheiro que está nas contas, mas ainda não foi dividido entre os envelopes. Toque, e o app sugere como distribuí-lo.

   *Como funciona:*
   O rótulo muda junto com o número:

   - **“Não alocado”** — há dinheiro para distribuir. Na captura são R$ 900: entrou um salário, e os envelopes de novembro já estão cheios.
   - **“Tudo alocado”**, em verde — cada real tem uma tarefa. É o objetivo.
   - **“Alocado em excesso”**, em vermelho — foi colocado nos envelopes mais do que há nas contas. Tire o excesso de alguma categoria na tela “Plano”.

   Dá para tocar só quando há algo para distribuir. Abre a folha “Alocação automática do orçamento”: “Cobrir todos os gastos excedidos”, “Subfinanciado”, “Alocado no mês passado” e outros jeitos. Ao lado de cada um está quanto ele levaria. Nada muda até você confirmar. Mais sobre envelopes — no artigo [“Plano”](#budget).

6. **“Idade do dinheiro”** — quantos dias em média o seu dinheiro fica parado antes de você gastá-lo.

   *Como funciona:*
   Na captura são 52 dias: o que você gasta hoje chegou até você quase dois meses atrás. O app pega os últimos dez gastos e vê qual receita pagou cada um — o dinheiro mais antigo é gasto primeiro.

   Menos de 30 dias — você vive de salário em salário, e qualquer atraso no pagamento bate no orçamento. Mais de 30 — você gasta o dinheiro do mês passado, e o salário novo espera a vez com calma. Um negativo — foi gasto mais do que havia nas contas do orçamento. A ampulheta do ícone diz o mesmo: cheia — 30 dias ou mais, pela metade — menos, vazia — negativo.

   A idade pode ser calculada de três jeitos, e a partir de 30 dias faz sentido viver com o dinheiro do mês passado. Tudo isso — [abaixo](#overview-age).

7. **Blocos** — cartões de resumo, um embaixo do outro. Quais mostrar e em que ordem você decide. Cada bloco é explicado [abaixo](#overview-blocks).

8. **“+ Transação”** — lançar um gasto ou uma receita. Acima dele — a câmera (nota fiscal pelo QR code) e o microfone (por voz). Role para baixo, e os botões se recolhem num só “+”.

   *Como funciona:*
   É o mesmo formulário da tela [“Transações”](#transactions): toda aba tem uma entrada para ele.

### Os blocos em ordem {#overview-blocks}

Embaixo do chip “Não alocado” (marcações 5 e 6) vêm os cartões. Aqui eles estão na ordem que têm logo depois da instalação. Um bloco sem nada para mostrar se esconde sozinho: sem tags — sem “Minhas tags”, sem metas — sem “Metas”.

Para tirar um bloco, trazê-lo de volta ou subi-lo — “⋮” → “Widgets” ([abaixo](#overview-menu)).

[O bloco “Transações recentes” na captura do “Resumo”]

#### Transações recentes

Os últimos cinco lançamentos: data, beneficiário, valor, categoria e nota. Prático para conferir se tudo de ontem está lançado.

*Como funciona:*
A receita leva o sinal “+”, o gasto, “−”. Um valor dividido (“Americanas” na captura) tem um ícone de garfo ao lado, e as categorias dele vêm listadas separadas por pontos. Há duas entradas na captura: um salário e R$ 129 do André — um amigo devolveu a metade dele da “Americanas”. Isso não é receita, e sim um reembolso para o “Mercado” (como lançar — no artigo [“Formulário de transação”](#entry)).

As linhas aqui não são tocáveis. Para corrigir uma transação, abra as [“Transações”](#transactions).

[O bloco “Excessos e avisos” na captura do “Resumo”]

#### Gasto excedido e “Acabando”

Os envelopes que pedem atenção agora. Toque numa linha para abrir a tela dessa categoria.

*Como funciona:*
- **“Gasto excedido”**, em vermelho — a categoria está no negativo: você gastou mais do que separou. Ícone de carteira quer dizer negativo do seu próprio dinheiro; ele vai tirar do “não alocado” do mês seguinte. Ícone de cartão e amarelo querem dizer negativo no cartão de crédito: virou dívida do cartão em vez de comer o seu dinheiro. Para acabar com o negativo — na tela [“Plano”](#budget).
- **“Acabando”**, em amarelo — o envelope ainda tem dinheiro suficiente, mas você está gastando mais rápido do que o mês anda. O app divide o plano do mês igualmente pelos dias e dá uma folga de 15%. Na captura, hoje é 10 de novembro, e no “Mercado” foi gasto mais do que o devido até esta data, mesmo com a folga.
- **“Tudo sob controle”** — sem negativos, sem avisos. O bloco mostra isso em vez de ficar vazio.

As categorias com exatamente zero não aparecem aqui: o plano foi cumprido até o centavo.

[O bloco “Para onde foi o dinheiro” na captura do “Resumo”]

#### Para onde foi o dinheiro

As cinco categorias mais caras do mês: valor, porcentagem de todos os gastos e uma barra do mesmo comprimento.

*Como funciona:*
Na captura, o “Aluguel” é 76% dos gastos de novembro: o aluguel é pago no dia 1º, de uma vez, enquanto os outros gastos vão se acumulando dia a dia. Até o fim do mês as porcentagens se equilibram.

Deslize o cartão para a direita com o dedo para ver o mês passado, para a esquerda para o seguinte. Para voltar ao mês atual — o chip “Hoje”, que aparece no cabeçalho do cartão quando você foi para outro mês.

[O bloco “O que vem” na captura do “Resumo”]

#### O que vem

Os pagamentos programados mais próximos e as metas em que falta dinheiro — até seis linhas, por data.

*Como funciona:*
Pagamento programado tem ícone de calendário, meta tem uma bandeirinha. Há duas metas na captura: na “Reserva de emergência” faltam R$ 3.375 até o fim de novembro, em “Viagens e férias” — R$ 300. O valor em amarelo é quanto ainda falta colocar.

As linhas não são tocáveis: para colocar dinheiro numa categoria — a tela [“Plano”](#budget), pagamentos programados — “Configurações → Planejamento”.

[O bloco “Orçamento do mês” na captura do “Resumo”]

#### Orçamento do mês

De onde veio o número de “Não alocado”: uma escada do saldo do mês passado até o total.

*Como funciona:*
Leia de cima para baixo, como uma nota fiscal:

- **Trazido de outubro** — quanto não foi alocado no mês passado.
- **Orçamento de novembro** — a receita deste mês: na captura, dois salários de R$ 4.200 cada.
- **Alocado em novembro** — quanto já foi dividido entre os envelopes.
- **Não alocado** — o total, o mesmo número do chip no alto da tela.

Abaixo da linha fica o “Planejamento”: quanto já há para dezembro, a renda média por mês e quanto as suas metas pedem por mês, com a porcentagem da renda. Às vezes aparecem mais linhas — o gasto excedido do mês passado, dinheiro vindo das reservas, dinheiro separado adiante; o bloco esconde as linhas vazias.

O cartão desliza para os dois lados, para frente também: você pode alocar dinheiro para dezembro já em novembro.

[O bloco “Patrimônio” na captura do “Resumo”]

#### Patrimônio

Tudo o que você tem menos as dívidas — e como isso mudou.

*Como funciona:*
Em letra grande — o seu patrimônio hoje: R$ 36.630,00 na captura. À direita — quanto ele cresceu no período (+R$ 13.033,00 em 6 meses), embaixo — uma linha por mês e o detalhamento: “Ativos” (todas as contas no positivo) e “Dívidas” (cartões de crédito e empréstimos).

No “⋮” do bloco: o período — 6 meses, 12 meses, este ano ou todo o tempo — e “Contas em outras moedas”: essas contas aparecem como linhas à parte na sua própria moeda, sem conversão e fora do total geral.

**Logo depois da instalação:** o bloco está desligado; ligue em “⋮” → “Widgets”.

[O bloco “Metas” na captura do “Resumo”]

#### Metas

Quantas categorias não alcançam a meta neste mês, e por quanto. Toque para abrir a tela “Metas”.

*Como funciona:*
Na captura, faltam R$ 3.675,00 para duas metas juntas. As metas são definidas na tela da categoria ou na tela “Metas”: “Reservar todo mês”, “Juntar até …”, “Manter no saldo”, “Porcentagem da renda” ou “lista”.

[O bloco “Pague-se primeiro” na captura do “Resumo”]

#### Pague-se primeiro

Qual porcentagem da renda você separa para o seu eu do futuro — em um mês, três meses e um ano.

*Como funciona:*
A regra é antiga e simples: de cada salário, pague primeiro a si mesmo, e só depois todos os outros. O normal é 10% da renda.

Na captura, em novembro estão separados 11,2% — R$ 102,00 acima do normal. Se ficar abaixo do normal, embaixo da porcentagem aparece “faltando”, com um valor.

Quais categorias contam como “guardado” é você quem escolhe: “Configurações → Orçamento → Pague-se primeiro”. Normalmente são as reservas: “Reserva de emergência”, “Investimentos”. Sem nenhuma escolhida, o bloco não aparece.

[O bloco “Grandes gastos” na captura do “Resumo”]

#### Grandes gastos

Os três maiores gastos do mês — data, beneficiário, valor, categoria e nota.

*Como funciona:*
Ajuda a pegar o que sai da curva: uma ida às compras inesperadamente cara aparece na hora, não no fim do mês.

**Logo depois da instalação:** o bloco está desligado; ligue em “⋮” → “Widgets”.

[O bloco “Calendário” na captura do “Resumo”]

#### Calendário

O mês como uma grade de dias: quanto mais clara a célula, mais foi gasto. Toque num dia para ver o que aconteceu nele.

*Como funciona:*
Um olhar detalhado com os modos e o menu — [abaixo](#overview-heatmap).

[O bloco “Minhas tags” na captura do “Resumo”]

#### Minhas tags

Até quatro tags: quanto foi gasto com elas, em que período e quantas transações.

*Como funciona:*
Uma tag com “Acerto de contas” mostra à direita quanto falta cobrar ou devolver para ficar quite: na captura, “#meio a meio” mostra “cobrar R$ 129,00”: uma compra na “Americanas” foi dividida com um amigo, e ele já devolveu a metade. Toque numa tag para abrir a tela dela. “Todas as tags ›” embaixo do bloco — a lista inteira.

No “⋮” do bloco: “Escolher tags…” — quais quatro mostrar e em que ordem; e o período — “Total de todo o período” ou “Total deste mês”. Não escolha nada, e o app mostra sozinho as tags com transações nos últimos 30 dias. Sem tags — sem bloco.

Sobre as próprias tags — no artigo [“Transações”](#transactions).

[O bloco “Gastos do mês” na captura do “Resumo”]

#### Gastos do mês

Quanto você gastou desde o começo do mês — comparado com quanto costuma gastar até esta data.

*Como funciona:*
Em letra grande — os gastos desde o dia 1º: R$ 4.863,00. À direita — a diferença do normal: +R$ 179,00, ou seja, um pouco mais que o normal. A linha forte é este mês, a fina é o normal.

“Normalmente” é o meio dos seus meses passados no último ano: um mês fora do comum não o desloca. O cartão desliza como “Para onde foi o dinheiro”.

### O calendário em detalhe {#overview-heatmap}

O bloco mais vivo do “Resumo”: um mês inteiro num cartão. Passe os olhos — e você vê quais dias foram caros e quais passaram sem gasto nenhum.

[O bloco “Calendário”: chips Gastos, Receitas, Programados, a grade de novembro, hoje — dia 10, “3 dias sem gastos”]

(E)
#### Modos

O que colorir: “Gastos”, “Receitas” ou “Programados”.

*Como funciona:*
- **“Gastos”** — seis tons. A célula mais clara é o dia mais caro do mês, e cada degrau abaixo é a metade. O brilho responde “quantas vezes este dia foi mais barato que o mais caro”.
- **“Receitas”** — o mesmo para o dinheiro que entrou, em verde.
- **“Programados”** — os dias em que vencem os pagamentos programados. Um dia passado em que tudo foi lançado ganha um visto; onde um pagamento ficou para trás, o número do dia fica vermelho.

No modo “Gastos”, um dia futuro com um pagamento programado ganha um contorno tracejado.

(F)
#### O menu do calendário

Três pontinhos no cabeçalho do cartão, à direita do mês. Ele define o que mais desenhar na grade e o que mostrar na folha do dia.

*Como funciona:*
**A folha do dia** não é um item do menu. Ela abre quando você toca num número da grade do calendário: uma lista do que aconteceu naquele dia sobe de baixo (captura [abaixo](#overview-day)). O menu só define o que essa folha contém.

Itens no modo “Gastos”:

- **“Receitas como pontos”** — um dia em que entrou dinheiro ganha um ponto verde na célula.
- **“Dia inteiro na folha do dia”** — toque num número, e a folha do dia mostra não só os gastos, mas também as receitas daquele dia: como uma linha recolhida embaixo; toque para abrir. Desligado — a folha mostra só os gastos.

No modo “Programados” os itens são outros: mostrar os pagamentos futuros como preenchimento da célula ou como ponto, e se destacar em vermelho o número de um dia com pagamento atrasado.

**Logo depois da instalação**, “Receitas como pontos” e “Dia inteiro na folha do dia” estão desligados.

(G)
#### Hoje

O dia de hoje tem contorno.

*Como funciona:*
Deslize o calendário com o dedo para ver outro mês, para trás e para frente sem limite: ele também serve de calendário comum, em que dá para ver em que dia da semana cai uma data. Para voltar — o chip “Hoje” no cabeçalho do cartão.

(H)
#### Dias sem gastos

Quantos dias do mês passaram sem nenhum gasto. À direita — a escala de brilho.

*Como funciona:*
Uma célula vazia no passado é um dia sem gastos. Se a única coisa naquele dia foi um reembolso de uma loja, no lugar do preenchimento há um anel vazio.

#### A folha do dia: toque num número do calendário {#overview-day}

Uma folha sobe de baixo: a data e o total do dia no cabeçalho, e embaixo cada transação. Um valor dividido aparece em partes: na captura, “Americanas” — R$ 183 de mercado e R$ 75 de produtos de limpeza.

[Folha do dia 10 de novembro: total −R$ 129,00, duas partes da compra na “Americanas”, o reembolso do André]

Como abrir: no “Resumo”, encontre o “Calendário” e toque no número do dia que você quer — na captura acima é o 10, com o contorno de “hoje” (G). A folha mostra o que o calendário colore: no modo “Gastos” — os gastos do dia, em “Receitas” — o dinheiro que entrou. Para ver os dois de uma vez, ligue “Dia inteiro na folha do dia” no menu do calendário (F). Para fechar a folha, deslize-a para baixo ou toque fora dela.

No modo “Programados” a folha é outra: o que não foi lançado, o que foi e o que ainda vem. Deslize um vencimento para a esquerda — “Lançar”, para a direita — “Excluir”.

### Idade do dinheiro em detalhe {#overview-age}

O número no chip responde à pergunta: quantos dias o meu dinheiro ficou parado antes de eu gastá-lo. O salário chegou em 1º de outubro, e em 5 de novembro você compra pão com o que sobrou do dinheiro de outubro — esse dinheiro tem 35 dias. O app pega os últimos dez gastos, encontra para cada um qual receita o pagou (o dinheiro mais antigo primeiro) e mostra a média.

##### Menos de 30 dias

De salário em salário: os gastos de hoje são pagos com o último salário, e qualquer atraso bate na hora.

##### 30 ou mais

Um mês à frente: você gasta o dinheiro do mês passado. É o objetivo do método — [o que fazer em seguida](#overview-age-month).

##### Um negativo

Foi gasto mais do que havia nas contas do orçamento.

#### Três jeitos de calcular {#overview-age-modes}

A idade do dinheiro é uma métrica discutível, e não há uma fórmula única correta para ela. Por isso o jeito é escolha sua: “Configurações → Orçamento → Idade do dinheiro”. O número muda na hora — tanto no chip quanto no relatório “Idade do dinheiro”.

##### Clássico (YNAB FIFO) · logo depois da instalação

O jeito do YNAB. Ele não enxerga transferências — nem para a poupança, nem da poupança. Um gasto para o qual você não tinha dinheiro pesa exatamente −1 dia, seja de cem reais ou de dez mil.

Bom se você não mexe na poupança: aí é honesto e bate com o YNAB. Ruim se você vive de transferências da poupança: o dinheiro chega na conta corrente, ele não vê e desenha dias positivos animados. Num orçamento real, as contas estavam R$ 9.000 no negativo, cobertas com transferências de “Investimentos” — e o Clássico mostrava +10 dias.

##### Considerando as reservas · o mais perto da verdade

Uma transferência da poupança é dinheiro entrando no orçamento, uma transferência para a poupança é dinheiro saindo dele. Um gasto além do que você tinha é medido em dias da sua renda: gastou a renda de uma semana além do que tinha — cerca de menos 7 dias.

O resultado é a média dos últimos 10 gastos, então um gasto no negativo entre outros cobertos fica suavizado.

##### Com reservas e profundidade do negativo

O mesmo que o anterior enquanto o orçamento está no positivo. Mas enquanto está no negativo, ele mostra não a média, e sim a profundidade do buraco: quantos dias da sua renda normal vai levar para fechá-lo.

Isso já não é uma idade, e sim um sinal de alarme. Prático enquanto você sai do negativo: o número diminui com honestidade a cada salário.

##### Qual escolher

O mais perto da verdade é **“Considerando as reservas”**: ele conta exatamente o dinheiro das suas contas do orçamento, com tudo o que veio da poupança e foi para ela. O Clássico é honesto só enquanto você não mexe na poupança. A profundidade do negativo é para quem está no negativo agora e quer ver quanto falta. Se você não passa dinheiro para a poupança e de volta e não gasta mais do que tem, os três mostram o mesmo número.

#### Idade de 30 dias ou mais: viva com o dinheiro do mês passado {#overview-age-month}

Como os seus gastos já são pagos pelo último salário, este mês não precisa do atual. Dê-o direto ao mês seguinte: assim cada mês começa com o dinheiro pronto, e você o aloca de antemão em vez de esperar o dia do pagamento.

##### Como fazer

1. Lance o salário como sempre: “+ Transação” → “Entradas”, beneficiário, valor.
2. Toque no campo “Categoria”. Abre a folha “Onde lançar a receita”.
3. Escolha “Receita para dezembro” — o mês seguinte — em vez de “Receita para novembro”. Salve.

A data da transação continua a real — o dia em que o dinheiro chegou. Muda só o mês do orçamento em que ele aparece. Um salário já lançado é passado do mesmo jeito: abra-o e mude a categoria.

##### Por qual salário começar

Por aquele que você ainda não dividiu entre os envelopes. Passá-lo diminui o “não alocado” deste mês no valor do salário. Se depois disso aparecer um “Alocado em excesso” vermelho, esse dinheiro já está trabalhando neste mês: devolva o salário para este mês e passe o seguinte.

##### Como o orçamento muda

- **Este mês** vive do que entrou antes. O salário novo não cai mais no “não alocado” dele.
- **O mês seguinte** recebe o dinheiro de antemão. Na tela “Plano”, avance com a seta “›” — o salário já está no “não alocado” dele, e você pode encher os envelopes antes do dia 1º. No “Resumo”, no “Orçamento do mês” abaixo da linha — a linha “Orçamento de dezembro”.
- **No dia 1º** o mês inteiro já está pago. O dinheiro é alocado uma vez, no começo do mês, em vez de aos pedaços depois de cada pagamento. “Alocado no mês passado” na alocação automática faz isso com um toque.
- **As metas “% renda”** com base na renda do mês já são conhecidas no primeiro dia: a renda do mês chegou no mês passado.
- **Os relatórios** (“Receitas e despesas”, “Pague-se primeiro”) contam esse salário no mês para o qual ele foi separado.
- **A própria idade do dinheiro** não cresce por causa dessa marcação: ela cresce quando você gasta menos do que ganha. A marcação fixa a reserva — o dinheiro do mês seguinte não se dissolve neste. Até chegar o mês dela, essa receita não conta para a idade.

### O menu “⋮” {#overview-menu}

Os orçamentos, a aparência do “Resumo” e o modo de exibição.

[Menu “⋮” da tela “Resumo”: Orçamentos, Widgets, Ocultar valores, Dicas, Central de ajuda]

(A)
#### Orçamentos

Tudo sobre os orçamentos numa folha só.

*Como funciona:*
“Criar um novo orçamento”, “Escolher orçamento”, “Excluir o orçamento”. O último orçamento que sobrou não pode ser excluído — o app precisa de pelo menos um. Para simplesmente trocar de orçamento, é mais rápido tocar no nome no alto da tela.

(B)
#### Widgets

Quais blocos mostrar no “Resumo” e em que ordem.

*Como funciona:*
Visto — o bloco aparece, vazio — está oculto. Para subir ou descer um bloco, arraste-o pela alça à direita. A configuração fica neste aparelho: num tablet, o “Resumo” pode ser diferente do celular.

(C)
#### Ocultar valores

Pontos em vez de números. Para o momento em que outra pessoa pode ver a tela.

*Como funciona:*
Virou o celular para alguém, está fazendo uma captura para o suporte, gravando um vídeo — ligue, e os valores em todas as telas viram “••••”. O sinal “+” ou “−” fica: ele diz para que lado foi o dinheiro, mas não quanto. Barras, gráficos e cores ficam como estavam.

Enquanto o modo está ligado, há um olho riscado no cabeçalho do “Resumo” — toque nele para trazer os valores de volta. Ou no mesmo “⋮” — o item agora se chama “Mostrar valores”. O modo continua depois de reiniciar o app.

(D)
#### Dicas

Todas as dicas desta tela num lugar só.

(E)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

[Folha “Widgets da visão geral”: blocos com vistos e alças de arrastar]
**“Widgets”.** Visto — mostrar, a alça à direita — arrastar.

### O que dá para fazer na tela {#overview-gestures}

A maior parte das linhas do “Resumo” é só para ler. São tocáveis as que levam a algum lugar.

| Faça isto | O que acontece |
|---|---|
| Puxe a tela para baixo | Recalcular todos os blocos. |
| Toque no nome do orçamento | Trocar para outro orçamento. |
| Toque em “Não alocado” | A folha “Alocação automática do orçamento” — se houver algo para distribuir. |
| Deslize um cartão para a esquerda ou para a direita | Outro mês — em “Para onde foi o dinheiro”, “Orçamento do mês”, “Calendário” e “Gastos do mês”. No primeiro uso, um dedo mostra esse gesto sozinho. |
| Toque numa linha de gasto excedido | A [tela da categoria](#category): saldo, gastos, as transações do mês. |
| Toque num dia do calendário | A folha do dia: o que aconteceu naquele dia. |
| Toque em “Metas” ou numa tag | A tela “Metas” ou a tela da tag. |

## Plano {#budget}

Os seus envelopes. É aqui que você decide quanto dinheiro separar para a comida, o aluguel e todo o resto — e vê quanto sobra em cada envelope.

*A aba “Plano” embaixo na tela*

### Para que serve esta tela {#budget-why}

Imagine uma pilha de envelopes com os nomes “Mercado”, “Aluguel”, “Contas de casa”. No dia do pagamento você divide o dinheiro entre eles. Quando gasta, tira do envelope certo. O envelope esvaziou — acabou o dinheiro para isso neste mês, a não ser que você passe um pouco de outro.

A tela “Plano” é essa pilha de envelopes. Cada linha é um envelope (no app ele se chama categoria), e o valor à direita é quanto há nele agora. A regra principal é uma só: distribua todo o seu dinheiro pelos envelopes até aparecer “Tudo alocado” no alto.

##### Dividir o salário

Entrou dinheiro — apareceu “não alocado” no alto. Distribua pelos envelopes.

##### Conferir antes de comprar

“Dá para comprar um tênis novo?” — olhe o valor ao lado de “Roupas e calçados”.

##### Acabar com o vermelho

Gastou mais do que separou? Passe dinheiro de outro envelope.

### O que fica onde na tela {#budget-screen}

Toque em qualquer captura para abri-la em tela cheia.

[Tela “Plano”, agosto: “Tudo alocado”, chips “Falta” e “Disponível”, grupos de categorias com saldos e barras]

1. **Mês** — qual mês você está dividindo agora.

   *Como funciona:*
   As setas “‹” e “›” passam os meses. Toque no nome para abrir a escolha do mês, sem precisar passar um por um.

   Dá para ir para frente sem limite — e isso é útil: em setembro você já pode separar dinheiro para os presentes de dezembro. Cada mês tem os seus envelopes, e o que sobra num envelope passa sozinho para o mês seguinte.

2. **“Não alocado”** — o dinheiro que ainda não está em nenhum envelope. O número mais importante da tela.

   *Como funciona:*
   Chega um salário — ele cai aqui. A sua tarefa é distribuí-lo pelos envelopes até isto chegar a zero. Este lugar tem três estados:

   - **um número num chip colorido** — o dinheiro está esperando uma tarefa. Toque no chip para abrir a alocação automática: o app oferece dividir o dinheiro como no mês passado, pela média de gastos, pelas metas ou pelas suas porcentagens;
   - **“✓ Tudo alocado”** — objetivo cumprido: cada real tem uma tarefa. Como na captura;
   - **“alocado em excesso” em vermelho** — você colocou nos envelopes mais do que tem. Toque — e tire o excesso dos envelopes.

3. **O menu “⋮”** — metas, ordem, aparência das linhas. Cada item é explicado [abaixo](#budget-menu).

4. **Chips de filtro** — mostrar só os envelopes que pedem atenção.

   *Como funciona:*
   “Excedido” — envelopes no negativo. “Falta” — envelopes em que ainda falta para a meta deste mês. “Disponível” — onde há dinheiro. O número no chip é quantos envelopes assim existem; na captura, dois esperam dinheiro para chegar à meta, e nove têm dinheiro.

   Um chip com zero não aparece: se nada passou do limite, o “Excedido” simplesmente não aparece. Toque em “Todas” para trazer a lista inteira de volta.

5. **Grupo** — uma prateleira de envelopes parecidos.

   *Como funciona:*
   “Despesas fixas”, “Despesas do dia a dia”… À direita — quanto há em todos os envelopes deste grupo. Toque no nome para recolher o grupo e tirá-lo do caminho. Segure o dedo para um menu: “Renomear o grupo”, adicionar uma categoria ou um grupo novo, excluir.

   Ligue “Porcentagem da renda” no menu “⋮” — e embaixo do valor do grupo você vai ver qual porcentagem da renda do mês colocou em todos os envelopes dele juntos. Dá para ver na hora que as “Despesas fixas” levam, digamos, metade do salário, e as “Despesas do dia a dia”, um terço. A porcentagem conta todos os envelopes do grupo, mesmo se o grupo estiver recolhido ou alguns envelopes estiverem escondidos por um filtro.

6. **⊕ ao lado de um grupo** — um envelope novo neste grupo.

7. **Categoria** — um envelope.

   *Como funciona:*
   Toque na linha para abrir a [tela da categoria](#category): todos os gastos deste envelope no mês e as tendências dos meses passados.

   Dá para deslizar a linha para a esquerda ou para a direita com o dedo — para renomear, passar para outro grupo ou excluir. Como exatamente — na seção [“O que dá para fazer com uma linha”](#budget-gestures).

8. **O valor à direita** — quanto há no envelope agora. A cor dele é a principal dica da tela.

   *Como funciona:*
   - **Verde** — há dinheiro, dá para gastar.
   - **0,00 cinza** — o envelope está vazio. Para um aluguel já pago, isso é normal.
   - **Vermelho, com ícone de carteira** — você gastou mais do que havia. Esse negativo vai comer o dinheiro do mês seguinte.
   - **Amarelo, com ícone de cartão** — também é negativo, mas você pagou com cartão de crédito: a dívida do cartão cresceu, e o dinheiro do orçamento não foi tocado.

   #### Como colocar dinheiro num envelope

   1. Toque no valor à direita.
   2. Abre uma janela com um teclado. Ela mostra não o saldo, e sim quanto você já separou neste envelope neste mês.
   3. Digite o valor novo — o primeiro dígito substitui o antigo. Quer somar? Toque em “+”, digite 105 e “=”.
   4. O envelope tem meta? Toque em “Para a meta: …” — o valor necessário se preenche sozinho.
   5. Toque em “Concluir”.

   O dinheiro sai do “não alocado” no alto — ele diminui exatamente no mesmo valor.

   #### Como acabar com um negativo vermelho

   1. Toque no valor vermelho.
   2. Abre a folha “Gasto excedido: Mercado” com dois itens. “Alterar o orçamento” abre o teclado de valor deste envelope, para completá-lo com o “não alocado”. “Cobrir de outra categoria” passa dinheiro de outros envelopes; mais sobre isso abaixo.
   3. Toque em “Cobrir de outra categoria”. No alto — “A cobrir: R$ 105”, embaixo — “De onde tirar o dinheiro”: a primeira linha é “Não alocado”, depois todos os envelopes que têm dinheiro, com o saldo de cada um.
   4. Cada linha tem um botão “Tirar …”: o app já calculou quanto dá para tirar dali. Toque nele ao lado de um envelope que pode ceder. Por exemplo, “Lazer e hobbies”.
   5. Abre um teclado com esse valor. Concorda — toque em “Tirar …”. Quer tirar menos? Digite o seu valor.
   6. Um envelope não bastou? Tire o resto do próximo. Quando o negativo acabar, a folha diz “Excesso coberto!”.

9. **Barra** — quanto do que você separou já foi gasto.

   *Como funciona:*
   Em “Contas de casa”, na captura, a barra está quase cheia: quase tudo o que foi separado para o mês já foi. Passou do fim, e a barra fica vermelha.

   Se o envelope tem meta, a barra não mostra mais os gastos, e sim quanto da meta foi cumprido. As barras podem ser desligadas no menu “⋮”.

   No mês atual, a barra de gastos tem um traço vertical fino — hoje: quanto do mês já passou. Se o preenchimento passou do traço, você está gastando mais rápido do que o mês anda, e o envelope pode não durar até o fim do mês. A barra de meta não tem esse traço.

10. **“… de … gastos”** — os gastos deste mês comparados com o que você separou neste mês.

    *Como funciona:*
    “R$ 278,00 de R$ 300,00 gastos” em “Contas de casa”: você separou R$ 300, gastou R$ 278. Então por que à direita aparece 89, e não 22? Porque no envelope havia também dinheiro dos meses passados — o saldo acompanha o envelope.

    Pelo mesmo motivo o “Mercado” tem uma linha vermelha — “R$ 400,00 gasto acima de R$ 1.200,00” — enquanto o valor à direita é verde: o plano do mês foi ultrapassado, mas a reserva dos meses passados cobriu o excesso. O envelope está no positivo, tudo certo.

11. **Bandeirinha da meta** — “Atingida” ou “faltam …”.

    *Como funciona:*
    A meta diz ao envelope quanto deve haver nele: “R$ 1.200 para a comida todo mês” ou “R$ 3.900 para as férias até julho”. A bandeirinha embaixo do valor mostra se a meta deste mês está cumprida, e se não, quanto ainda falta colocar. As metas são definidas na tela da categoria.

12. **“Hoje”** — voltar ao mês atual. Aparece quando você foi para outro.

13. **Novo gasto** — os mesmos três botões das “Transações”. [Mais no artigo “Transações”](#transactions)

### O menu “⋮” {#budget-menu}

Metas, a ordem dos envelopes e o que mostrar nas linhas.

[O menu “⋮” aberto da tela “Plano”: Metas, Alocar nas metas, Mudar a ordem, Barras de progresso, Porcentagem da renda, Categorias ocultas, Dicas, Central de ajuda]

(A)
#### Metas

Todas as metas do orçamento numa tela. Mais no artigo [“Metas”](#goals).

*Como funciona:*
Você vê quais envelopes estão no ritmo e em quais falta. Toque numa meta para mudá-la.

(B)
#### Alocar nas metas

Completar cada envelope com quanto falta para a meta dele. Mais no artigo [“Metas”](#goals).

*Como funciona:*
O app tira dinheiro do “não alocado” e entrega aos envelopes com meta — a cada um exatamente o que falta. Primeiro ele mostra o plano: o que vai para onde — e só depois do seu “sim” faz a alocação.

Se todas as metas do mês já estão cumpridas, ele mostra quanto cada uma tem — para você ver por que não há nada a distribuir.

(C)
#### Mudar a ordem

Reorganizar os envelopes e os grupos.

*Como funciona:*
Aparecem alças nas linhas — arraste por elas. É prático manter os envelopes mais usados no alto. Quando terminar, o mesmo item do menu se chama “Concluir a ordenação”.

(D)
#### Barras de progresso

Mostrar uma barra e uma linha “… de … gastos” embaixo de cada envelope.

*Como funciona:*
Desligue se quiser uma lista curta: ficam só os nomes e os valores. Os envelopes com meta mantêm a barra sempre — ela mostra a meta.

**Logo depois da instalação:** ligado.

(E)
#### Porcentagem da renda

Qual porcentagem da renda do mês você separa em cada envelope.

*Como funciona:*
Ao lado do valor aparece um rótulo como “12%”: o aluguel come 40% da renda, o mercado, 15%. Cada grupo mostra o seu total em porcentagem embaixo do valor dele, somando todos os seus envelopes. Os gastos não mudam a porcentagem — só quanto você separa e a própria renda do mês.

**De onde a porcentagem é calculada.** Não de todo o dinheiro que você distribui, e sim da linha “Orçamento de novembro” no cartão “Orçamento do mês” do “Resumo”: a renda atribuída a este mês. O “Trazido de outubro” não entra nela. Distribua também a sobra do mês passado, e as porcentagens saem maiores do que de fato são, e juntas podem passar de 100%. Quanto do que você alocou é renda deste mês e quanto é sobra — dá para ver no mesmo cartão ([“Resumo”](#overview-blocks)).

**Logo depois da instalação:** desligado. **Veja também:** a alocação automática “Por porcentagem” — toque em “não alocado”.

(F)
#### Categorias ocultas

Os envelopes que você tirou de vista.

*Como funciona:*
Um envelope que tem gastos não pode ser excluído — os relatórios precisam do histórico dele. Dá para ocultá-lo: ele some da lista, e os gastos passados ficam. Aqui você traz de volta os envelopes ocultos.

(G)
#### Dicas

Todas as dicas desta tela num lugar só.

(H)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

### O que dá para fazer com uma linha {#budget-gestures}

Não há botões “editar” e “excluir” na linha. Em vez disso, você desliza a linha do envelope para o lado com o dedo — até um botão que aparece por baixo. A primeira linha da lista mostra uma vez como fica.

| Faça isto | O que acontece |
|---|---|
| Toque na linha | A [tela da categoria](#category): os gastos deste envelope no mês e as tendências. |
| Toque no valor | Colocar dinheiro no envelope, ou, num vermelho, acabar com o negativo. Os passos estão no item [“O valor à direita”](#budget-balance) acima. |
| Deslize para a esquerda | Aparece à direita um botão “Editar”. Toque para abrir “Editar a categoria”: um nome novo e um campo “Grupo”. Escolha outro grupo nele — e o envelope vai para lá, com todo o dinheiro e o histórico. |
| Deslize para a direita | Aparece à esquerda um botão vermelho “Excluir”. Um envelope vazio, sem nenhuma compra, é excluído depois da pergunta “Excluir a categoria?”. Se houve gastos, o app diz “Não é possível excluir — há transações” e oferece “Ocultar”: o envelope some da lista, e o histórico fica. Para trazer de volta um oculto — o menu “⋮” → “Categorias ocultas”. |
| Segure o dedo num grupo | O menu do grupo: renomear, adicionar uma categoria ou um grupo novo, excluir o grupo. |

Os envelopes do grupo “Pagamentos de cartão” não deslizam: quem cuida deles é o próprio cartão de crédito, e o dinheiro é separado neles automaticamente.

## Metas {#goals}

Quanto dinheiro cada envelope precisa — e quanto ainda falta colocar neste mês.

*“Plano” → “⋮” → “Metas”*

### Para que servem as metas {#goals-why}

Um envelope responde “quanto tem aqui”. Uma meta responde “quanto deveria ter aqui”. O app compara os dois e diz quanto ainda falta colocar.

**“A comida leva R$ 1.200 por mês”** — uma meta “Por mês” no “Mercado”. Todo mês o app lembra você de separar esses R$ 1.200.

**“Férias em março, preciso de R$ 6.000”** — uma meta “Até a data”. O app divide o valor pelos meses sozinho: tanto em novembro, tanto em dezembro.

**“A reserva de emergência deve ter R$ 12.000”** — uma meta “Saldo”. Gastou uma parte, e o app pede para repor.

A meta em si não mexe no dinheiro: ela só conta. Quem coloca o dinheiro no envelope é você — na tela “Plano” ou com um botão só, “Alocar nas metas” (mais sobre ele [abaixo](#goals-allocate)). Cada categoria tem uma meta.

### O que fica onde na tela {#goals-screen}

A tela “Metas” abre a partir do “Plano”: “⋮” → “Metas”. Ela tem todas as categorias com as suas metas para o mês escolhido. A captura mostra novembro no orçamento demo: cinco metas de cinco tipos.

[Tela Metas: mês novembro de 2026, resumo Total 5 metas, Custo mensal 7.627,00, Faltando 4.825,00; grupos de categorias; Mercado — por mês 1.200, Atingida; Presentes — lista 520; Viagens — até a data 6.000; Reserva de emergência — saldo 12.000; Investimentos — % renda 840]

(1)
**Mês** — as setas “‹ ›” passam os meses, um toque no nome abre a escolha do mês. As metas são calculadas para este mês. Saia do atual, e aparece um botão “Hoje” embaixo.

(2)
**O menu “⋮”** — quais categorias mostrar, barras de progresso, dicas — [abaixo](#goals-menu).

(3)
**Resumo** — “Total” é quantas metas existem. “Custo mensal” é quanto todas as metas precisam neste mês. “Faltando” é quanto ainda não foi colocado.

(4)
**Grupo** — os mesmos grupos do “Plano”. Embaixo do nome — quantas metas o grupo tem e quanto falta para elas, ou “tudo coberto”. Um toque recolhe o grupo.

(5)
**Uma categoria sem meta** — “sem meta”. Toque na linha ou no “⊕” — abre “Nova meta”.

(6)
**Uma categoria com meta** — a meta inteira em três linhas. Um toque a abre para editar.

*Como funciona:*
A primeira linha: o nome da categoria, o tipo de meta (“por mês”, “até a data”, “saldo”, “% renda”, “lista”) e o valor da meta. A segunda: uma barra — quanto está feito — e o estado: uma bandeirinha verde e “Atingida”, ou uma bandeirinha e “faltam …” — quanto completar. A terceira: a condição da meta em palavras e a porcentagem feita.

Na captura, o “Mercado” está atingido: os R$ 1.200 já estão separados no envelope em novembro. E em “Viagens e férias” faltam R$ 300 neste mês — é quanto é preciso por mês para chegar a R$ 6.000 até março.

#### O menu “⋮” {#goals-menu}

[Menu da tela Metas: Todas as categorias, Apenas com metas, Subfinanciado, Barras de progresso, Dicas, Central de ajuda]

(A, B, C)
#### Quais categorias mostrar

“Todas as categorias”, “Apenas com metas” ou “Subfinanciado” — aquelas em que falta algo para a meta neste mês. A escolha fica guardada; se nem tudo está à mostra, acende um ponto no “⋮”.

(D)
#### Barras de progresso

se mostrar barras e porcentagens. Sem elas a linha fica mais curta, enquanto a meta e o valor ficam no lugar.

(E)
#### Dicas

as dicas desta tela em forma de lista.

(F)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

### Como definir uma meta {#goals-new}

Você define uma meta aqui, em “Metas”, ou na própria tela da categoria — com o botão “Adicionar meta” no cartão “Meta”. É a mesma folha.

[Folha Nova meta: Tipo de meta Por mês, Valor Definir…, botão Salvar em cinza]

[Folha Tipo de meta: Por mês, Até a data, Saldo, % renda, Lista — cada um com uma explicação]

1. Toque numa categoria sem meta. Abre “Nova meta”.
2. “Tipo de meta” — toque e escolha um dos cinco. Cada um diz embaixo do nome para que serve. Qual usar quando — [abaixo](#goals-types).
3. “Valor” — toque e digite no teclado do app. Para “% renda” há “Porcentagem da renda” no lugar do valor, e para “Lista” — as linhas da lista.
4. “Até a data” tem também “Juntar até o mês” — o mês até o qual você precisa do valor inteiro.
5. “Salvar”. Enquanto o valor não está definido, o botão fica cinza.

**Editar ou excluir** — toque numa categoria com meta — abre “Editar a meta” com os mesmos campos. Embaixo — “Excluir” e “Salvar”. Uma meta excluída vai embora; o dinheiro no envelope fica.

**Uma sugestão vinda dos pagamentos programados** — se a categoria tem um pagamento programado, o cartão da meta na tela da categoria mostra “Do pagamento programado: …”. Um pagamento todo mês sugere “por mês” no valor dele; uma vez por ano — “juntar … até o pagamento”.

### Cinco tipos de meta {#goals-types}

O tipo de meta é a regra que o app usa para calcular “quanto é preciso neste mês”. Abaixo, cada regra com um exemplo da captura.

#### “Por mês” — para o que você gasta todo mês {#goals-monthly}

**Como é calculada** — todo mês é preciso separar o mesmo valor. A meta olha quanto você colocou no envelope **neste mês**, não quanto sobra nele.

*Como funciona:*
“Mercado”, R$ 1.200 por mês. Colocou R$ 1.200 em novembro — a meta está “Atingida”, mesmo que metade já tenha sido gasta. Gastar é exatamente para o que esse dinheiro serve. Colocou R$ 810 — “faltam R$ 390”.

Para o mercado, a internet, o transporte, as assinaturas.

#### “Até a data” — juntar um valor até um certo mês {#goals-bydate}

[Folha Editar a meta: Tipo de meta Até a data, Valor 6.000, Juntar até o mês março de 2027]

**Como é calculada** — o quanto ainda falta do valor inteiro é dividido pelos meses restantes, contando este. Isso dá a contribuição do mês.

*Como funciona:*
“Viagens e férias”, R$ 6.000 até março. No começo de novembro o envelope tem R$ 2.250, então faltam R$ 3.750. Até março, contando novembro, são cinco meses — R$ 750 por mês. Em novembro R$ 450 já estão separados — a meta diz “faltam R$ 300”.

Pulou um mês, e o que faltou se distribui pelos restantes, então a contribuição cresce sozinha. Colocou mais, e as próximas contribuições diminuem.

A barra mostra outra coisa: quanto do valor inteiro já está no envelope. Na captura — 45%.

**Para quê** — férias, o seguro uma vez por ano, os presentes de fim de ano, uma reforma na primavera — tudo o que não acontece todo mês, mas é previsível.

#### “Saldo” — manter uma reserva {#goals-balance}

**Como é calculada** — o envelope deve ter sempre esse valor. O quanto faltar no começo do mês, é isso que a meta pede.

*Como funciona:*
“Reserva de emergência”, R$ 12.000. O envelope tem R$ 8.625 agora — a meta pede “faltam R$ 3.375”. Não há prazo: complete quando puder. Tirou uma parte da reserva para um conserto? A meta pede para repor de novo.

Para uma reserva de emergência, a farmacinha, uma reserva para consertos do carro.

#### “% renda” — separar uma porcentagem da renda {#goals-percent}

[Folha Editar a meta: Tipo de meta % renda, Porcentagem da renda 10%, Da renda deste mês escolhida, Da renda média; Renda de novembro 8.400, Meta do mês 840]

**Como é calculada** — a meta do mês é a sua porcentagem da renda. O app mostra o valor direto na folha: “Renda de novembro: R$ 8.400,00 · Meta do mês: R$ 840,00”.

**“Da renda deste mês”** — calculada a partir do dinheiro que **já chegou**. Chegou a primeira parte do pagamento — uma meta; chegou a segunda — a meta cresceu. Enquanto não há renda no mês, a meta é zero e conta como cumprida. **Por padrão:** esta está escolhida.

**“Da renda média”** — a renda média dos últimos 12 meses. A meta é conhecida desde o dia 1º e não muda durante o mês — prático se você recebe no fim do mês.

**Para quê** — “separar 10% de tudo o que eu ganho” — investimentos, poupança, doações.

#### “Lista” — o que comprar neste mês {#goals-list}

Uma meta feita de linhas: anote no que o dinheiro da categoria vai ser gasto neste mês — e o valor da meta se soma sozinho. Cada mês tem a sua lista.

[Folha Editar a meta: Tipo de meta Lista, Lista de novembro: Aniversário da mãe 300, Bolo 120 — registrado 130, Colega 100 — registrado 70 · 2 transações; Adicionar linha; Meta de novembro 520]

[Tela da categoria Presentes e festas: cartão Meta — 520 por mês, pela lista; Alocar mais 310; linhas da lista]

[Folha Linha da lista: Colega, Valor previsto 100; Registrado 70 de 100, Reduzir para 70; duas transações — 60 e 10; Registrar transação; Excluir, Salvar]

**Linhas** — escolha “Lista” em “Tipo de meta”, e as linhas do mês aparecem direto na folha. “⊕ Adicionar linha” — um nome e um valor. Embaixo — “Meta de novembro”: o total de todas as linhas. Enquanto não houver linhas, “Salvar” fica cinza.

**Na tela da categoria** — as linhas ficam no cartão “Meta”, embaixo da barra. É ali que você trabalha com elas: toque numa linha para editá-la, deslize para a esquerda — “Lançar”, para a direita — “Excluir” (com “Desfazer” na mensagem embaixo).

**“Lançar”** — abre o formulário de transação comum: o valor planejado (corrija para o real), esta categoria, o nome da linha na nota. Depois de salvar, embaixo da linha em verde: “✓ registrado R$ 130,00 · 13 de nov.”, enquanto o valor planejado continua à direita: na captura, o bolo estava planejado em R$ 120 e foi comprado por R$ 130.

*Como funciona:*
Uma linha pode ser lançada de novo: uma compra às vezes são vários pagamentos — os pneus, depois a montagem. O formulário sugere o que falta do previsto, e a linha mostra o total dos lançamentos e quantos são. A folha dela tem um link para cada transação e “Registrar transação”; o botão “Reduzir para …” iguala o previsto ao que foi registrado. Uma linha registrada não pode ser passada para outro mês.

**Passar para outro mês** — segure o dedo numa linha para ligar a seleção. Marque as que quiser; embaixo — o total delas e “⋮”: “Passar para dezembro”, “Passar para outro mês…”, “Excluir”.

**Um mês novo** — a lista está vazia: “A lista de dezembro está vazia” e um botão “Copiar as linhas de novembro · valor”: as linhas do mês passado são copiadas (sem as marcas de “registrado”), e o mês passado não muda.

### O cartão “Meta” na tela da categoria {#goals-card}

Toque numa categoria no “Plano” — abre [a tela dela](#category). O cartão “Meta” mostra a meta do mês da tela e diz quanto colocar.

[Tela da categoria Viagens e férias: resumo, cartão Meta — Juntar 6.000 até março, Alocar mais 300 neste mês, seletor Por valor / Por prazo, Guardar por mês 1.200, controle deslizante, Juntar até o mês Fevereiro de 2027, 1 mês antes do prazo, Usar como prazo da meta]

**Cabeçalho** — a descrição da meta e um lápis para editar. Embaixo — uma barra e “Alocar mais … neste mês” ou “A meta do mês foi cumprida”.

**A estimativa “Por valor” / “Por prazo”** — para uma meta “Até a data”, embaixo da barra: e se separar mais ou menos? “Por valor”: mexa no controle “Guardar por mês” — o “Juntar até o mês” embaixo dele mostra quando você chega lá, e a linha de baixo diz “… meses antes do prazo”, “… meses depois do prazo” ou “Bem no prazo”. “Por prazo”: mexa em “Juntar até o mês” — embaixo do controle você vê quanto separar por mês. Precisa de um valor exato? Toque em “Guardar por mês” e digite no teclado.

*Como funciona:*
A estimativa não salva nada: saia da tela, e tudo fica como estava. Gostou da data nova? Toque em “Usar como prazo da meta: …”, e a meta fica com ela.

Na captura: colocando R$ 1.200 por mês, o dinheiro das férias fica pronto em fevereiro — um mês antes do prazo.

**Sem meta** — o cartão tem um só botão, “Adicionar meta”. Se houver um pagamento programado, ao lado aparece a sugestão “Do pagamento programado: …”.

### Alocar nas metas {#goals-allocate}

O salário chegou — divida-o entre todas as metas com um botão só. “Plano” → “⋮” → “Alocar nas metas”.

[Janela Alocar nas metas: 690 para 3 categorias — Presentes e festas +310, Viagens e férias +300, Reserva de emergência +80; ficará 0,00; Cancelar, Alocar]

**O que faz** — tira dinheiro do “não alocado” e coloca nos envelopes cujas metas estão faltando algo neste mês. Primeiro mostra o plano — quanto vai para qual envelope; “Alocar” faz, “Cancelar” não muda nada.

**Se não der para tudo** — as metas são cobertas em ordem, de cima para baixo, como as categorias estão organizadas no “Plano”, e a última recebe o que sobrar. Na captura, R$ 690 bastaram para “Presentes e festas” e “Viagens e férias” por completo, enquanto a “Reserva de emergência” recebeu R$ 80 de R$ 3.375. Deixe o mais importante mais acima — a ordem é mudada no “Plano”: “⋮” → “Mudar a ordem”.

**Se não há nada para alocar** — o “não alocado” está vazio — o app avisa. Não há metas — ele diz onde defini-las. Todas as metas já estão cumpridas — ele mostra para cada uma quanto está separado e quanto é preciso.

**O mesmo na alocação automática** — toque em “não alocado” no cabeçalho do “Plano” — o modo “Subfinanciado” faz a mesma coisa. E a calculadora do valor da categoria no “Plano” tem um botão “Para a meta: …” — ele preenche exatamente o que falta.

### Onde mais as metas aparecem {#goals-elsewhere}

A meta não aparece só aqui.

**“Plano”** — uma categoria com meta tem uma bandeirinha embaixo do valor: “Atingida” ou “faltam …”, e a barra mostra a meta, e não os gastos. O chip “Falta” acima da lista deixa só as categorias cujas metas estão faltando algo. Mais no artigo [“Plano”](#budget).

**“Resumo”** — o bloco “Metas” mostra quantas metas existem, quantas estão cumpridas e quanto ainda é preciso neste mês. Mais no artigo [“Resumo”](#overview).

## Tela da categoria {#category}

Um envelope por inteiro: quanto ele tinha, quanto foi separado e gasto, quanto sobra e para quantos dias dá. E também a meta, uma nota, os gastos dos meses passados e todas as transações do mês.

*“Plano” → toque numa categoria*

### Para que serve esta tela {#category-why}

No “Plano”, uma categoria tem uma linha e um número. Aqui está tudo o que há por trás dele.

##### Vai dar até o fim do mês

“Disponível” e embaixo dele “≈ … por dia”: quanto você pode gastar por dia até o fim do mês sem entrar no negativo.

##### Para onde foi o dinheiro

Todas as transações desta categoria no mês, por dia. Toque em qualquer uma para abrir o cartão dela.

##### Quanto você realmente precisa

As “Tendências de gastos” mostram quanto costuma sair por mês. Se você separa menos, todo mês termina no negativo.

### Como abrir {#category-open}

- **“Plano”** — toque na linha de uma categoria. A tela abre no mês escolhido no “Plano”. Isso com o celular em pé: na horizontal, tocar numa linha da tabela abre a calculadora do valor, e num tablet abre um painel à direita ([abaixo](#category-tablet)).
- **“Resumo”** — toque numa linha do bloco “Gasto excedido” ou “Acabando”.
- **“Relatórios”** — toque numa linha da lista em “Para onde foi o dinheiro” ou num bloco em “Desvio”. A tela abre no mês do relatório.

### O que fica onde na tela {#category-screen}

A tela rola: o resumo no alto, depois os cartões “Meta”, “Nota” e “Tendências de gastos”, e embaixo deles as transações do mês. Toque numa captura para abri-la em tela cheia.

[Tela da categoria Mercado: o mês com setas; resumo — De outubro, Planejado, Gasto, Disponível e ≈ por dia; cartão Meta — Reservar 1.200,00 por mês, A meta do mês foi cumprida; Nota; Tendências de gastos; Transações do mês por dia: Americanas, Pão de Açúcar, Carrefour; botão Transação]

1. **Nome** — o nome da categoria. Renomeie no menu “⋮”.

2. **“⋮”** — ocultar, renomear ou passar para outro grupo, excluir. Detalhes — [abaixo](#category-menu).

3. **Mês** — “‹ ›” passam os meses: passados e futuros, sem limite. Detalhes — [abaixo](#category-months).

4. **“De …”** — quanto sobrou no envelope do mês passado.

5. **“Planejado para …”** — quanto você separou neste envelope neste mês. Em letra pequena embaixo do valor — qual porcentagem da renda do mês isso representa.

6. **“Gasto em …”** — quanto saiu do envelope neste mês, descontados os reembolsos.

7. **“Disponível”** — quanto há no envelope agora. O mesmo número da linha da categoria no “Plano”.

8. **“≈ … por dia”** — quanto você pode gastar por dia até o fim do mês. Só no mês atual e só se “Disponível” estiver acima de zero.

9. **“Meta”** — a meta da categoria neste mês: quanto ainda separar. Mais no artigo [“Metas”](#goals-card).

10. **“Nota”** — um texto seu sobre esta categoria. Detalhes — [abaixo](#category-note).

11. **“Tendências de gastos”** — quanto sai em média por mês. Detalhes — [abaixo](#category-trends).

12. **Data** — as transações do mês por dia, as mais novas no alto. Detalhes — [abaixo](#category-ops).

13. **Transação** — uma linha como nas “Transações”, só que sem a categoria: aqui ela é uma só.

14. **“+ Transação”** — uma transação nova com a categoria já escolhida no formulário.

### O resumo: de onde vêm os números {#category-stats}

As quatro linhas do resumo formam uma fórmula só:

**“De …”** + **“Planejado”** − **“Gasto”** = **“Disponível”**

##### O positivo passa para o mês seguinte, o negativo não

Não gastou tudo? O resto fica no envelope e aparece no mês seguinte na linha “De …”. Gastou mais do que havia? Neste mês o “Disponível” fica vermelho. Na virada do mês, o negativo é zerado: no mês seguinte o “De …” será 0.

*Como funciona:*
Para onde vai o negativo zerado depende de como você pagou. Com dinheiro vivo ou cartão de débito, ele diminui o “não alocado” do mês seguinte. Com cartão de crédito, virou dívida do cartão. Mais no artigo [“Plano”](#budget).

##### Porcentagem da renda

Embaixo de “Planejado” — qual porcentagem da renda do mês você separou neste envelope. A mesma porcentagem do selo “Porcentagem da renda” no “Plano”. Sem renda no mês — sem porcentagem. Ela é calculada a partir da linha “Orçamento de …” do cartão “Orçamento do mês” — sem a sobra do mês passado; por que a porcentagem pode então parecer alta demais — no artigo [“Plano”](#budget-income-share).

##### “≈ … por dia”

O “Disponível” é dividido pelos dias que faltam até o fim do mês, contando hoje, e arredondado para baixo — para que um dia nunca receba mais do que existe. Gastou menos hoje? Amanhã o número cresce.

### Nota {#category-note}

Escreva o que entra nesta categoria, para o que você está juntando, o que foi combinado — tudo o que vai ajudar daqui a seis meses. Toque no campo “Adicionar uma nota para a categoria…” e digite: a nota se salva sozinha, não há botão. Com nuvem, ela chega aos seus outros aparelhos.

### “Tendências de gastos” {#category-trends}

Quanto costuma sair desta categoria. Conta os 12 meses completos antes deste; o mês atual não entra porque ainda não terminou. Os gastos são descontados os reembolsos.

[Cartão Tendências de gastos da categoria Compras grandes: Média em um mês ativo 1.440, Gasto mensal médio 288, Gasto no mês passado 0]

**“Gasto mensal médio”** — quanto sai em média por mês, contando também os meses sem gastos. É quanto vale a pena separar todo mês para o envelope não ficar negativo.

**“Média em um mês ativo”** — a média só dos meses com gastos. Aparece quando não houve gasto todo mês: na captura, “Compras grandes” tem R$ 1.440 num mês com compra e R$ 288 na média de todos os meses.

**“Gasto em …”** — quanto saiu no mês passado: compare com este.

**As porcentagens embaixo dos valores** — qual porcentagem da renda isso representa: nas médias, da renda média dos mesmos meses; no mês passado, da renda dele.

### As transações do mês {#category-ops}

Todas as transações desta categoria no mês da tela, por dia: as mais novas no alto. De um valor dividido, aparece só a parte com esta categoria — na captura, “Americanas”.

| Faça isto | O que acontece |
|---|---|
| Toque numa linha | O cartão da transação — o mesmo das “Transações”. Mais no artigo [“Transações”](#transactions-detail). |
| Toque no círculo à direita | A marca “Compensado”, como nas “Transações”. |
| Deslize para a esquerda | “Editar” — o formulário de transação. |
| Deslize para a direita | “Excluir” — depois de uma confirmação. Embaixo aparece “Desfazer”. |

A ordem das transações dentro de um dia e o total do dia ao lado da data são definidos nas “Transações”: “⋮” → “Ordenação” e “Total do dia”. Aqui eles são os mesmos.

### Outro mês {#category-months}

“‹” e “›” acima do resumo passam os meses. Saia do mês atual, e embaixo à esquerda aparece “Hoje”: toque para voltar ao mês atual.

[A mesma tela para o mês passado: resumo sem a linha ≈ por dia, um botão Hoje embaixo à esquerda]

Num mês passado você vê quanto havia e quanto foi gasto então. Lá não há a linha “≈ … por dia”: o mês acabou. Num mês futuro você vê quanto já está separado adiante.

### O menu “⋮” {#category-menu}

[Menu: Ocultar a categoria, Editar a categoria, Dicas, Central de ajuda, Excluir a categoria]

(A)
##### “Ocultar a categoria”

A categoria some do “Plano” e da lista de categorias do formulário de transação. O dinheiro e as transações ficam, e ela conta nos cálculos como antes. Para trazê-la de volta — aqui mesmo: o item vira “Mostrar a categoria”. Ou “Plano” → “⋮” → “Categorias ocultas”.

(B)
##### “Editar a categoria”

Uma folha com o nome e um campo “Grupo”. Detalhes — [abaixo](#category-edit).

(C)
##### “Dicas”

As dicas desta tela — inclusive as que você já fechou.

(D)
##### “Central de ajuda”

Este artigo no site: abre no navegador, no idioma do app.

(E)
##### “Excluir a categoria”

Só se a categoria não tiver nenhuma transação. Então, depois da pergunta “Excluir a categoria?”, ela some, a meta dela também, e tudo o que estava separado nela volta para “não alocado”.

*Como funciona:*
Se houver transações, o app diz “Não é possível excluir — há transações” e oferece “Ocultar”. Uma categoria excluída sumiria do histórico, e as transações dela ficariam sem envelope.

#### Renomear e passar para outro grupo {#category-edit}

[Folha Editar a categoria: Nome Mercado, Grupo Despesas do dia a dia, botões Excluir e Salvar]

[Folha Grupo: Despesas fixas, Despesas do dia a dia, Despesas ocasionais, Poupança]

(E)
##### “Nome”

O nome novo da categoria. As transações, a meta e o dinheiro ficam com ela.

(F)
##### “Grupo”

Toque para abrir a lista de grupos. Escolha outro e toque em “Salvar”: a categoria vai para o fim desse grupo junto com o dinheiro e o histórico.

*Como funciona:*
As categorias do grupo “Pagamentos de cartão” não têm este campo: quem cuida do grupo delas é o app.

(G)
##### “Excluir”

O mesmo que “Excluir a categoria” no menu.

##### Como passar uma categoria para outro grupo

1. Abra a categoria: “Plano” → toque na linha dela.
2. “⋮” → “Editar a categoria”.
3. Toque no campo “Grupo” e escolha um grupo.
4. “Salvar”.

Dá para fazer o mesmo direto no “Plano”: deslize a linha da categoria para a esquerda → “Editar”.

### No tablet {#category-tablet}

Num tablet na horizontal, tocar numa linha do “Plano” não tira você da tabela: o resumo, a meta, a nota, as tendências e as transações da categoria aparecem à direita. O mês ali é o mesmo da tabela; ele não tem setas próprias.

O painel não tem menu “⋮”. Para ocultar, renomear ou excluir uma categoria, use a tela dela: coloque o tablet em pé e toque na linha, ou abra a categoria pelo “Resumo” ou pelos “Relatórios”.

## Transações {#transactions}

Toda a história do seu dinheiro num feed só. Cada compra, cada salário, cada “passei um pouco da conta corrente para a poupança”.

*A aba “Transações” embaixo na tela*

### Para que serve esta tela {#transactions-why}

A tela “Plano” responde à pergunta “quanto ainda posso gastar”. As “Transações” respondem “então para onde foi, afinal”. É o seu diário: tudo o que você lançou está aqui por dia, o dia mais recente no alto.

##### Encontrar

“Quanto custou aquele jantar em março?” — duas letras na busca, e lá está.

##### Corrigir

Categoria errada, um zero a mais, um lançamento duplicado — deslize a linha e corrija.

##### Conferir com o banco

Marque o que já passou no cartão — e você vê na hora o que o banco ainda não processou.

### O que fica onde na tela {#transactions-screen}

Toque em qualquer captura para abri-la em tela cheia.

[Tela “Transações”: busca, menu, chips de tipo de transação, o feed de transações por dia e o botão de adicionar]

1. **Busca** — encontra qualquer coisa por duas letras, um valor ou datas.

   *Como funciona:*
   Digite “carre” — o feed deixa só as idas ao Carrefour. A busca procura em tudo: beneficiário, categoria, nota e valor. “143” encontra esse valor, “leite” encontra a nota “Leite, ovos, pão”.

   A busca entende as datas do jeito que você as escreve:

   - **15/08/2026** — um dia só;
   - **15/08** — esse dia em qualquer ano: “o que eu comprei nos aniversários passados?”;
   - **08/2026** — o mês de agosto inteiro;
   - **02/08/26-10/08/26** — de e até, os dois dias incluídos. Funciona com meses também: **06/2026-08/2026** — o inverno inteiro.

   Entre o “de” e o “até” serve um hífen, um travessão ou um espaço — o app descobre onde fica o limite. Um número sozinho, como “8”, não é tratado como data: senão uma busca por R$ 8 se afogaria em todo o mês de agosto.

   Uma cerquilha liga a busca por tags: “#fér” — tudo com a tag “férias”, “#fér café” — só os cafés das férias. Duas tags separadas por espaço — as transações que têm as duas.

2. **Beneficiários e tags** — para quem você paga com mais frequência e quanto.

   *Como funciona:*
   Uma tela à parte com duas abas. “Beneficiários” — todos a quem você pagou e que pagaram você, com um total deste ano (o período muda no menu “⋮”). Muitas vezes é ali que você descobre que as idas “rapidinhas” à padaria da esquina somaram umas férias no ano.

   “Tags” — os seus rótulos por cima das categorias: “férias”, “reforma”, “presente para a mãe”. Toque num beneficiário ou numa tag para abrir o histórico. [O artigo “Beneficiários e tags”](#payees-tags)

3. **O menu “⋮”** — tudo o que muda a aparência do feed. Cada item é explicado [abaixo](#transactions-menu).

4. **Tipo de transação** — só despesas, só receitas, com um toque.

   *Como funciona:*
   Quer ver só o dinheiro que entrou? Toque em “Receitas”. As “Transferências” são quando o dinheiro só mudou de lugar entre as suas próprias contas: da conta corrente para a poupança, para pagar o cartão de crédito. As “Notas” são lançamentos sem valor, lembretes para você mesmo.

   Toque de novo no mesmo chip, e o feed inteiro volta.

5. **Data** — pular para qualquer dia.

   *Como funciona:*
   Rolar seis meses para trás com o dedo é para os fortes. Toque no chip da data, escolha um dia no calendário — e o feed já está lá. Para voltar para hoje, use o botão “Hoje” embaixo à esquerda.

6. **Marcador** — um sinal colorido para você mesmo.

   *Como funciona:*
   O marcador não calcula nada — é só um sinal. Vermelho — “conferir se não cobraram duas vezes”, verde — “um amigo prometeu devolver”. As cores e o significado você inventa.

   Dá para colocar um marcador no formulário de transação, ou em uma dúzia de linhas de uma vez pela seleção. Um contorno cinza quer dizer “sem marcador”. A forma do marcador — um ponto, uma bandeirinha triangular ou uma bandeira ondulada — fica em “Configurações → Aparência”.

7. **Categoria** — de qual envelope saiu o dinheiro.

   *Como funciona:*
   Uma categoria é um envelope da tela “Plano”. Uma compra no Carrefour com a categoria “Mercado” diminui o envelope do mercado: é assim que o orçamento sabe quanto você ainda tem para a comida.

   A nota tinha comida e produtos de limpeza? Dá para dividir o valor: cada parte vai para o seu envelope, e a linha mostra um chip para cada parte. E num salário, no lugar da categoria aparece “Disponível neste mês”: o dinheiro chegou e está esperando você distribuí-lo pelos envelopes.

8. **Conta** — de onde saiu ou para onde chegou.

   *Como funciona:*
   Conta corrente, dinheiro vivo, cartão de crédito — cada conta tem o seu ícone e a sua cor, para você reconhecer sem ler. Uma transferência tem duas linhas, uma em cada conta: numa o dinheiro saiu, na outra chegou. Por isso o título de uma transferência mostra não uma loja, e sim a outra conta: “Visa” na conta corrente, “Conta corrente” no Visa.

9. **Compensado** — se bate com o extrato. Opcional.

   *Como funciona:*
   Você lançou a compra na hora, no caixa, e o banco a processou um ou dois dias depois. O círculo evita confusão: vazio — o banco ainda não tem esta transação, um visto — tem. Viu a compra no app do banco? Toque no círculo.

   Uma vez por mês dá para conferir a conta inteira. Aí os vistos viram cadeados: “conferido, não mexo mais”.

   **A marca é opcional:** ela não afeta o orçamento, só ajuda a conferir a conta com o banco. Se você nunca a usou, simplesmente ignore — círculos vazios estão tudo bem.

10. **Novo gasto** — três botões no canto inferior direito.

    *Como funciona:*
    “+ Transação” abre um formulário vazio — o valor, a categoria e a conta você preenche.

    Acima dele há dois botões redondos para não precisar digitar. O roxo é a câmera: aponte para o QR code da nota fiscal, e o app preenche o valor e a data sozinho (se conhecer as notas fiscais do seu país). O verde é o microfone: diga “café 18 da conta Conta corrente”, e o app preenche o valor e a conta, e também o beneficiário e a categoria se os reconhecer entre os seus. De qualquer jeito abre o mesmo formulário — confira e salve. [O artigo “Formulário de transação”](#entry)

11. **Ícones de câmera e QR** — uma foto da nota fiscal e uma nota fiscal eletrônica estão anexadas à transação. [O que é](#transactions-badges)

12. **Ícone PDF** — um arquivo está anexado à transação: uma conta, uma fatura, a nota fiscal de uma loja online. [O que é](#transactions-badges)

13. **Ícone de garfo** — o valor está dividido em partes por categorias diferentes. [O que é](#transactions-badges)

14. **Cerquilhas — tags** — os seus rótulos de “para quê”; uma transação pode ter várias. [O que é](#transactions-tags)

### A tela tem dois jeitos {#transactions-two-views}

Não estranhe se a sua tela não for igual à imagem acima. Os botões no canto inferior direito se recolhem para não cobrir as suas transações.

[Botões abertos: “+ Transação”, a câmera e o microfone acima dele]
**Acabou de abrir a tela.** Três botões: “+ Transação”, câmera e microfone.

[Botões recolhidos: sobrou só o “+”]
**Rolou o feed para baixo.** Sobrou só o “+” — ele faz a mesma coisa.

Para trazer de volta a câmera e o microfone, role o feed um pouco para cima — os botões se abrem de novo.

Dá para tocar no “+” nos dois jeitos: ele sempre abre o formulário de nova transação.

### Ícones e tags numa linha {#transactions-badges}

Os ícones pequenos ao lado de uma transação dizem que ela tem algo a mais: uma nota fiscal anexada, um arquivo ou várias categorias. Eles não fazem nada sozinhos — para ver o que está anexado, toque na linha.

Sem beneficiário: no lugar do nome aparece um traço “———”. Não é um erro: o beneficiário só não foi informado, e o sinal do valor mostra o sentido.

#### Câmera — uma foto da nota fiscal

Uma foto de uma nota em papel, de uma etiqueta de preço ou de qualquer coisa que você queira guardar junto com a compra.

**Não exagere.** Anexe fotos ao que você vai realmente precisar, não a cada pãozinho. [Por quê](#transactions-attach-weight)

*Como adicionar e para quê:*
O formulário de transação tem o campo “Fotos e PDFs”. Toque em “Adicionar” e escolha “Tirar foto” ou “Escolher da galeria”. Dá para anexar várias fotos.

É útil quando, um mês depois, você precisa devolver algo na garantia ou lembrar o que tinha naquela compra de R$ 143. A foto fica no celular; para ela aparecer também nos seus outros aparelhos, ligue “Sincronizar fotos” nas configurações de sincronização.

#### Quadrado QR — uma nota fiscal eletrônica

O código ou link da nota fiscal que o caixa emitiu.

*Como adicionar e para quê:*
Muitas notas fiscais têm um QR code impresso embaixo — por ele dá para encontrar a nota fiscal no sistema da loja ou do fisco. O formulário de transação tem o campo “Nota fiscal eletrônica (URL ou código)”: cole o link ali, ou toque no ícone do leitor e aponte a câmera para o QR code.

Se o app conhece as notas fiscais do seu país, ele também confere a nota fiscal com o formulário: preenche o valor se você ainda não o digitou, e se os valores forem diferentes, avisa e oferece corrigir. O leitor não muda a data do formulário. Uma nota fiscal de um país desconhecido é simplesmente guardada como está — e mesmo assim é útil: no cartão da transação dá para copiar o código e abrir o link.

#### Folha “PDF” — um arquivo anexado

Uma conta, um boleto de luz, a nota fiscal de uma loja online — tudo o que chega como arquivo.

**Não exagere.** Um PDF não é comprimido ao ser adicionado — o arquivo é guardado como está. [Por quê](#transactions-attach-weight)

*Como adicionar e para quê:*
O mesmo campo “Fotos e PDFs” no formulário: “Adicionar” → “Escolher PDF”. O arquivo fica junto da transação — chega de caçar a conta no e-mail ou nos “Downloads”.

Toque num PDF anexado — embaixo aparecem “Abrir” (num app de PDF) e “Salvar em arquivo” (uma cópia numa pasta que você escolher).

#### Cada foto tem peso {#transactions-h-weight}

O banco de dados em si não engorda com as fotos: ele guarda só um link para o arquivo. Mas o arquivo fica no celular e, o mais importante, vai inteiro para **cada backup**. Por padrão são guardados até 19 backups — 7 frequentes e 12 mensais, no celular e na nuvem.

Então uma única foto de nota fiscal de 300 KB pode ocupar quase 6 MB nos backups, e cem fotos assim, mais de meio gigabyte. Se “Sincronizar fotos” estiver ligado, cada uma também viaja para a nuvem e para os seus outros aparelhos. O mesmo vale para os PDFs, só que eles nem são comprimidos ao serem adicionados.

**A regra é simples:** anexe o que você vai precisar — um certificado de garantia, a nota fiscal de uma compra cara, uma conta para os seus registros. Pão e leite passam sem foto. E uma nota fiscal eletrônica (QR) pesa como uma linha de texto — dá para guardá-lo em toda compra.

#### Garfo — o valor está dividido em partes

Uma compra — várias categorias. No formulário é “Dividir o valor” na lista de categorias; no cartão da transação, as partes ficam sob o título “Divisão”.

*Como funciona:*
Na “Americanas” da captura você pagou R$ 258 num pagamento só, mas comprou comida e produtos de limpeza. Se lançasse tudo em “Mercado”, o envelope do mercado diminuiria R$ 75 a mais, enquanto “Itens de casa” ficaria intocado — e o orçamento começaria a mentir.

Por isso o valor é dividido: R$ 183 para “Mercado”, R$ 75 para “Itens de casa”. No feed, uma transação assim tem um chip para cada parte, e o cartão dela tem a seção “Divisão”. Dá para dividir o valor no formulário de transação, ao escolher a categoria.

##### Saque no caixa da loja também é divisão

Você paga R$ 300 no cartão na loja e pede R$ 90 em dinheiro ao caixa. O banco mostra uma cobrança só de R$ 300, mas na verdade aconteceram duas coisas: R$ 210 foram de mercado, e R$ 90 só passaram do cartão para a carteira.

1. Lance uma transação de R$ 300 da conta “Conta corrente” e divida o valor.
2. A primeira parte — R$ 210, categoria “Mercado”.
3. A segunda parte — R$ 90: na lista de categorias, role até a seção “Transferências” e escolha “Transferência: Dinheiro”.

O feed mostra um chip “Transferência: Dinheiro”, a conta “Dinheiro” sobe R$ 90, e o envelope do mercado diminui exatamente R$ 210. Lance tudo em “Mercado”, e o orçamento vai achar que você comeu R$ 90 a mais, enquanto a carteira mostra menos do que realmente tem.

#### Uma linha de cerquilhas — tags

Os seus rótulos por cima das categorias: “#sítio”, “#meio a meio”, “#férias”. Uma transação pode ter quantas você quiser.

*Como funciona:*
A categoria responde “com o que eu gastei”, e a tag responde “para quê”. Leite e pão no “Carrefour” são “Mercado”, mas foram comprados para o sítio. Coloque a tag “#sítio” — e depois você vê de relance quanto custou o verão no sítio, mesmo que o dinheiro tenha ido para mercado, gasolina e material de construção.

O “Pão de Açúcar” da captura tem duas tags de uma vez: compras para o sítio, e pagas meio a meio com um amigo. Uma transação pode ter quantas tags você quiser.

##### Como adicionar uma tag

1. No formulário de transação, embaixo da nota, toque no campo “Tags”.
2. Abre uma lista, com as tags recentes no alto. Marque as que precisar.
3. A tag que você precisa ainda não existe? Digite o nome dela na linha “Buscar ou criar tag” e toque em “Criar tag “…””.
4. Toque em “Concluir”.

##### Onde olhar depois

- **Quanto foi gasto com uma tag** — o ícone “Beneficiários e tags” no cabeçalho (marcação 2), a aba “Tags”. Toque numa tag para abrir a tela dela: quanto saiu em todo o período, por categoria e por mês, e todas as transações.
- **Encontrar transações** — digite “#” e o começo da tag na busca: “#sít” mostra tudo do sítio.
- **Quem deve a quem** — para uma tag como “#meio a meio”, ligue “Acerto de contas” no menu “⋮” da tela dela. O app mostra quanto ainda cobrar ou devolver para ficar quite.

A tag na linha não é tocável — é um rótulo, não um botão.

Há também: **duas setas** — uma transferência entre as suas contas; **um calendariozinho com seta** — uma transação lançada a partir de um pagamento programado; **um bilhete** — uma nota: um lançamento sem valor, um lembrete para você mesmo.

### O menu “⋮” {#transactions-menu}

Tudo aqui é sobre como mostrar o feed. Nenhum item muda ou apaga os seus lançamentos — experimente sem medo.

[O menu “⋮” aberto: Selecionar transações, Filtro, Ordenação, Total do dia, Dicas, Central de ajuda]

(A)
#### Selecionar transações

Uma ação em uma dúzia de linhas de uma vez.

*Como funciona:*
Precisa colocar um marcador vermelho em uma dúzia de compras para conferir com o extrato? Não é preciso abrir uma por uma. Ligue a seleção e marque as linhas — o total delas aparece embaixo (útil também para somar notas). Toque no “⋮” ao lado do total: dá para definir uma categoria, um marcador ou a marca “compensado” para todas de uma vez, repeti-las com a data de hoje, passá-las para outra conta ou excluí-las. O último item, “Limpar a seleção”, sai da seleção sem mudar nada.

O atalho: segure o dedo em qualquer linha.

(B)
#### Filtro

Deixar no feed só o que você precisa.

*Como funciona:*
Por exemplo: “gastos em cafés no mês passado, só no cartão”. Dá para filtrar por tipo, período, categoria, beneficiário, conta, valor e tag. Os filtros se somam — cada um a mais estreita o feed.

Enquanto um filtro está ligado, acende um número no “⋮” — um lembrete de que o feed não está completo agora. Senão é fácil achar que transações sumiram.

**Logo depois da instalação:** sem filtros. **Volta ao normal sozinho:** quando você troca de orçamento — outro orçamento tem as suas categorias e contas. **Veja também:** [o filtro dos relatórios](#reports).

(C)
#### Ordenação

Como organizar as transações dentro de um dia.

*Como funciona:*
Os dias sempre seguem como num calendário — o mais recente no alto, e isso não muda. Mas dentro de um dia você pode definir a sua ordem: os gastos grandes no alto (“Decrescente”), os pequenos no alto (“Crescente”) ou as receitas primeiro. A ordem escolhida fica escrita no próprio item do menu — para que uma semana depois você não estranhe por que um dia parece “embaralhado”.

**Logo depois da instalação:** na ordem em que foram lançadas. **Funciona também:** na tela da conta, nas transações de uma categoria e de um beneficiário.

(D)
#### Total do dia

Quanto saiu num dia — bem ao lado da data.

*Como funciona:*
Ligue “Só despesas” — e à direita de cada data você vê quanto gastou naquele dia. Ótimo para pegar os dias “caros”: um sábado com feira e cinema aparece na hora.

“Despesas e receitas” mostra a diferença como um número só, com sinal: “−300” — o dia ficou no negativo, “+4.200” — entrou um salário. As transferências entre as suas próprias contas e os saldos iniciais não contam: não são gastos, o dinheiro só mudou de lugar.

**Logo depois da instalação:** não aparece. **Funciona também:** na tela da conta e nas transações de uma categoria.

(E)
#### Dicas

Todas as dicas desta tela num lugar só.

*Como funciona:*
No app, as dicas aparecem uma de cada vez — quando são úteis, para não soterrar você com tudo de uma vez. Aqui estão todas reunidas, até as que você ainda não alcançou.

(F)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

### O que dá para fazer com uma linha {#transactions-gestures}

Não há botões “editar” e “excluir” na linha — para não atrapalhar a leitura. Em vez disso, toque na linha ou deslize-a para o lado com o dedo.

| Faça isto | O que acontece |
|---|---|
| Toque | Abre o cartão da transação: tudo sobre ela, fotos da nota fiscal, edição. [O que tem nele](#transactions-detail) |
| Deslize para a esquerda | “Editar” — direto para o formulário. |
| Deslize para a direita | “Excluir”. Mudou de ideia? “Desfazer” fica embaixo por alguns segundos. |
| Segure o dedo | Liga a seleção de várias linhas — como o item [“Selecionar transações”](#transactions-select). |

#### Você tocou numa transação — o que tem dentro {#transactions-detail}

O cartão da transação sobe de baixo: tudo o que você lançou sobre ela, numa folha só. Nada muda até você tocar em “Editar” — dá para olhar com calma.

[Cartão da transação “Carrefour”: valor, beneficiário, categoria, conta, data, nota fiscal eletrônica, nota, tag “sítio”, foto da nota fiscal, botões “Repetir”, “Editar”, “Criar pagamento programado”]
**Uma compra com nota fiscal e foto.**

[Cartão da divisão “Americanas”: partes da divisão — Mercado R$ 183 e Itens de casa R$ 75]
**Um valor dividido.** Embaixo — as partes da divisão.

- **Grande no alto** — o valor com sinal: menos é despesa, mais é receita.
- **Beneficiário, categoria, conta, data** — o que você lançou no formulário.
- **Nota fiscal** — a nota fiscal eletrônica. “Copiar” coloca o código na área de transferência para você colar onde precisar. Se for um link, há também “Abrir” — a nota fiscal abre no navegador.
- **Tags** — os rótulos da transação como chips, como no feed: “#sítio”.
- **Fotos** — miniaturas das imagens e dos PDFs anexados. Toque numa imagem para abri-la em tela cheia.
- **Partes da divisão** — num valor dividido: cada parte com a sua categoria, nota e valor.

##### Botões embaixo

- **“Editar”** — abrir esta transação no formulário e mudar qualquer coisa.
- **“Repetir”** — uma transação nova com o mesmo beneficiário, categoria e valor. Prático para o que você compra sempre: café, transporte, almoço.
- **“Criar pagamento programado”** — fazer desta transação um pagamento regular: aluguel, uma assinatura, um empréstimo. Só falta escolher de quanto em quanto tempo ele se repete.

Um valor dividido e uma transferência têm só “Editar”: o app não vai repeti-los pela metade.

## Relatórios {#reports}

Dez relatórios: para onde vai o seu dinheiro, como os gastos mudam, de onde vem a renda e se o seu patrimônio está crescendo.

*A aba “Relatórios” embaixo na tela*

### Como a aba funciona {#reports-how}

Um relatório por vez na tela. No alto fica qual relatório e de qual período, embaixo o próprio relatório. O app lembra o relatório e o período: abra a “Tendência de gastos” de seis meses, e da próxima vez é ela que abre.

[Relatório Para onde foi o dinheiro de setembro — novembro: rosca, total 17.679, lista de categorias]

1. **Nome do relatório** — toque para abrir a lista de todos os relatórios (captura abaixo).

2. **Filtros** — o funil: período, categorias, contas, tags. O número nele é quantos filtros estão ligados.

   *Como funciona:*
   Desligue a categoria “Aluguel” — ela some dos relatórios de gastos, e o quadro dos gastos do dia a dia fica mais claro. Os filtros ficam guardados para cada orçamento.

3. **Período** — as setas “‹ ›” movem a janela um mês para trás ou para frente, e o toque no rótulo abre a escolha do período: um mês, 3, 6, 12 meses, o ano até agora ou um intervalo seu.

   *Como funciona:*
   Saiu do mês atual? Ao lado aparece “Hoje”, para voltar. Cada relatório tem o seu período: os gastos são práticos de ver por mês, e a tendência por ano.

4. **Visualização** — alguns relatórios têm vários jeitos de ver: rosca, bolhas, blocos, tabela ou gráfico. A escolha fica guardada para cada relatório.

5. **Lista** — os mesmos números em linhas: cor, nome, valor, porcentagem. Toque numa linha para abrir a tela da categoria ou do beneficiário.

[Folha de escolha do relatório: seções Gastos, Movimentação de dinheiro, Patrimônio]
**Escolher um relatório.** Três seções — pela pergunta que o relatório responde.

[Folha Filtros do relatório: Período, Categorias, Contas, Tags]
**Filtros do relatório.** Cada seção se abre.

### Gastos {#reports-spending}

Para onde vai o dinheiro e como isso muda.

#### Para onde foi o dinheiro {#reports-r-spending}

Os gastos do período por categoria — o principal relatório de “para onde foi tudo”. Três jeitos de ver a mesma coisa: escolha o que for mais claro para você.

[Bolhas: Aluguel 10.800, 61%, Mercado 2.660, 15%]
**Bolhas.** A área de uma bolha é o valor.

[Blocos: Aluguel, Mercado, Compras grandes]
**Blocos.** A área de um bloco é o valor.

(•)
#### Rosca, bolhas, blocos

Troque entre eles com os ícones à direita, acima da imagem. A rosca é a conhecida; as bolhas e os blocos mostram melhor as categorias pequenas ao lado das grandes.

(•)
#### Toques

Toque numa fatia da rosca, numa bolha ou num bloco — ele fica destacado, e a linha dele se acende na lista. Um segundo toque abre a tela dessa categoria.

(•)
#### O que é contado

Os gastos menos os reembolsos, sem as transferências entre as suas próprias contas. Na captura, saíram R$ 17.679 em três meses, 61% deles com o aluguel.

*Como funciona:*
Quer ver os gastos do dia a dia sem o aluguel e as contas de casa? Tire-os no filtro “Categorias”.

#### Tendência de gastos {#reports-r-trend}

Se os seus gastos estão subindo ou caindo — por mês, com a média e uma linha de tendência.

[Tendência de gastos junho — novembro: barras por mês, dinâmica, linhas de tendência e de média, Total do período 34.770,00]

(•)
#### No alto

O gasto médio por mês e para onde ele vai: “subindo ≈ R$ 114,70/mês” ou “caindo”.

(•)
#### O gráfico

As barras são os gastos de cada mês. A linha com pontos é a dinâmica, a reta é a tendência, a tracejada é a média. O mês atual fica esmaecido: ele ainda não terminou, por isso fica fora da média e da tendência.

(•)
#### A tabela “Por mês”

Cada mês e quanto ele se afasta da média — em reais e em porcentagem. Toque num mês no gráfico, e o valor exato aparece acima dele.

#### Exemplo: as contas de casa estão ficando mais caras? {#reports-r-trend-example}

A tendência geral não vai dizer: ela tem todos os gastos juntos, e o crescimento de uma categoria se perde no resto. Deixe só uma categoria no relatório.

[Filtros do relatório: Categorias 1 de 18, Desmarcar tudo, só Contas de casa marcada]
**O filtro.** Uma categoria só ficou no relatório.

[Tendência de gastos só das contas de casa: R$ 292,00/mês, caindo ≈ R$ 11,80/mês, outubro −20% em relação à média]
**O resultado.** A tendência só das contas de casa.

6. **“Categorias”** — na “Tendência de gastos”, toque no funil no canto superior direito, depois em “Categorias”: abre uma lista de todas as categorias com caixas de seleção.

7. **“Desmarcar tudo”** — desmarca todas as categorias de uma vez, em vez de uma por uma.

8. **A categoria que você precisa** — marque “Contas de casa”. Embaixo de “Categorias” agora aparece “1 de 18”. Feche a folha: deslize-a para baixo ou toque fora dela.

9. **O número no funil** — quantos filtros estão ligados. Enquanto ele está aceso, o relatório não mostra todos os gastos.

Agora o relatório é só sobre as contas de casa: R$ 292 por mês em média, as contas estão caindo cerca de R$ 11,80 por mês, e outubro foi 20% mais barato que a média. O filtro fica guardado para este relatório: da próxima vez a “Tendência de gastos” abre com ele. Para trazer todas as categorias de volta — “Selecionar tudo” ou “Limpar” na folha de filtros.

#### Principais beneficiários {#reports-r-payees}

O mesmo que “Para onde foi o dinheiro”, mas por beneficiário: para quem você paga mais.

[Principais beneficiários: rosca, Proprietário 10.800, Carrefour, Tok&Stok, Pão de Açúcar]

(•)
#### Os mesmos três jeitos

Rosca, bolhas ou blocos — este relatório guarda a sua própria escolha.

(•)
#### Toques

Uma linha ou uma fatia abre a tela do beneficiário: todos os gastos com ele, por categoria e por mês (artigo [“Beneficiários e tags”](#payees-tags)).

#### Desvio {#reports-r-deviation}

Onde você está gastando mais ou menos que o normal neste mês — de relance. A comparação é com os seus 12 meses antes do período: o mês em andamento é comparado com os mesmos dias dos meses passados, do dia 1 até a data de hoje, e um período de vários meses com um mês habitual multiplicado pelo número deles.

[Desvio de novembro: blocos por categoria, a cor mostra mais ou menos que o normal]

(•)
#### Blocos

O tamanho de um bloco é quanto foi gasto, a cor é quanto a mais (avermelhado) ou a menos (esverdeado) que o normal, em três degraus. Os cinzas estão como de costume, dentro de 10%. Um contorno sem preenchimento quer dizer que a categoria apareceu pela primeira vez.

(•)
#### “O normal”

O meio dos seus meses passados no ano: um mês fora do comum não o desloca. No mês atual — “o habitual até esta data”: 10 de novembro é comparado com os mesmos dias dos meses passados.

(•)
#### O resumo em palavras

Embaixo dos blocos — “Mais que o normal”, “Menos”, “Novos” com os valores. “Categorias” ou “Beneficiários” — chips no alto.

#### Tags {#reports-r-tags}

Quanto saiu com cada tag — por mês, como tabela ou gráfico.

[Relatório Tags: tabela por mês — sítio, Juntas, Todos os gastos; seção Acertos — meio a meio, cobrar 129]

[Relatório Tags como gráfico: 1 de 4 no gráfico, As maiores do período]

(•)
#### A tabela

Uma linha por tag, uma coluna por mês. “Juntas” são todas as tags de uma vez: uma transação com duas tags conta nela uma vez só. “Todos os gastos” estão ali para comparar.

(•)
#### “Acertos”

As tags com “Acerto de contas” ligado, num bloco à parte: quanto cobrar ou devolver.

(•)
#### O gráfico

Até quatro tags como linhas por mês; quais — você escolhe acima do gráfico.

### Movimentação de dinheiro {#reports-flow}

De onde veio o dinheiro, para onde foi e quanto sobrou.

#### Fluxo de dinheiro {#reports-r-flow}

O caminho inteiro do dinheiro numa imagem só: das fontes de renda — para o orçamento — por grupo — por categoria.

[Fluxo de dinheiro: Empregador → Orçamento; no alto Receita 25.200, Despesa 17.679, Líquido +7.521, Economia 30%]
**À esquerda** — de onde veio o dinheiro.

[Fluxo de dinheiro, a parte direita: grupos de despesas → categorias, Restante]
**Deslize para o lado** — grupos e categorias.

(•)
#### No alto

A receita, a despesa, o “líquido” (quanto sobrou) e a taxa de poupança — qual porcentagem da renda não foi gasta.

(•)
#### Fitas

A espessura de uma fita é o valor. Toque numa fita para ver o valor e a porcentagem. A faixa verde “Restante” é o dinheiro que não foi para lugar nenhum.

(•)
#### Como olhar

A imagem é maior que a tela: deslize para o lado e para baixo. O cabeçalho com os totais rola junto com a imagem.

#### Receitas e despesas {#reports-r-ie}

A contabilidade mês a mês: quanto entrou, quanto saiu por grupo, o que sobrou.

[Receitas e despesas como tabela: Receitas, Despesas por grupo, Total, Taxa de poupança por mês]
**Tabela.**

[Receitas e despesas como gráfico: barras verdes e vermelhas por mês e uma linha do total]
**Gráfico.**

(•)
#### A tabela

As linhas são as receitas por fonte e as despesas por grupo; um grupo pode ser aberto até as categorias. Embaixo — o “Total” e a “Taxa de poupança” de cada mês.

*Como funciona:*
Toque num número para abrir a lista de transações que o formam. A tabela é maior que a tela — deslize para o lado.

(•)
#### O gráfico

Cada mês tem duas barras: a verde para cima — quanto dinheiro entrou, a vermelha para baixo — quanto saiu. Uma linha fina mostra o que sobrou: acima de zero, o mês terminou no positivo; abaixo, você gastou mais do que entrou. Acima do gráfico há quatro números do período inteiro: receitas, despesas, total e taxa de poupança. Toque num mês, e os números mostram só esse mês; deslize o dedo, e eles mudam pelos meses vizinhos; toque de novo no mesmo mês, e volta o período inteiro.

#### Idade do dinheiro {#reports-r-aom}

Como a sua idade do dinheiro mudou mês a mês.

[Idade do dinheiro: 52 dias no fim do período, uma linha por mês]

(•)
#### O número no alto

A idade no fim do período — o mesmo número do “Resumo”.

(•)
#### Para quê

Você vê se o seu fôlego está crescendo. Uma linha subindo quer dizer que você está cada vez mais longe do “de salário em salário”. O que o número significa e como é calculado — no artigo [“Resumo”](#overview), seção “Idade do dinheiro em detalhe”.

### Patrimônio {#reports-capital}

Tudo o que você tem e tudo o que você deve.

#### Patrimônio {#reports-r-networth}

O total de todas as contas menos as dívidas — e como ele mudou.

[Patrimônio: 36.630,00 no fim do período, uma linha por mês, uma tabela por mês com setas]

(•)
#### O que entra

Todas as contas na moeda principal — tanto as do orçamento quanto as de fora dele (poupança, aplicações), menos os cartões de crédito e os empréstimos. As contas em outras moedas não são convertidas e não entram no total.

(•)
#### A tabela

O patrimônio no fim de cada mês, com uma seta — para cima ou para baixo.

#### Dívida dos cartões {#reports-r-carddebt}

Quanto você deve nos cartões de crédito — e se a dívida está crescendo.

[Dívida dos cartões: 2.670,00 no fim do período, a dívida cresceu 1.688,00 no período]

(•)
#### O número no alto

A dívida de todos os cartões de crédito no fim do período e quanto ela cresceu ou diminuiu no período.

(•)
#### Quando aparece

O relatório está na lista só se você tiver um cartão de crédito. Como um cartão de crédito funciona no orçamento — no artigo [“Como o orçamento funciona”](#start).

## Contas {#accounts}

Todos os lugares onde o seu dinheiro fica: cartões, carteira, poupança, cartões de crédito. E quanto há em cada lugar agora.

*A aba “Contas” embaixo na tela*

### Para que serve esta tela {#accounts-why}

Aqui você vê onde está o seu dinheiro agora: quanto há na conta corrente, quanto na carteira, quanto você deve no cartão de crédito. Os envelopes da tela “Plano” respondem “para quê”, e as contas respondem “onde”.

##### Adicione as suas contas

Todos os lugares onde fica dinheiro: os cartões de todos os bancos, a carteira, a poupança.

##### Confira com o banco

Uma vez por semana ou por mês, confirme que o app e o banco mostram a mesma coisa.

##### Tire o que é velho

Encerrou um cartão? Oculte-o, e o histórico fica.

### O que fica onde na tela {#accounts-screen}

Toque em qualquer captura para abri-la em tela cheia.

[Tela “Contas”: seções “No orçamento”, “Cartões de crédito”, “Fora do orçamento” com contas e valores]

1. **Seção** — uma prateleira de contas de um mesmo tipo. Toque no nome para recolher a seção.

   *Como funciona:*
   São quatro seções, e em qual delas uma conta cai depende do tipo dela. “No orçamento” é o dinheiro que você divide entre os envelopes: conta corrente, dinheiro vivo. “Cartões de crédito” — os cartões de crédito. “Fora do orçamento” — o que você está guardando ou só quer ter à vista: a poupança, uma aplicação. “Dívidas” — os empréstimos. Uma seção vazia não aparece. Mais na seção [“No orçamento ou fora do orçamento”](#accounts-kinds).

2. **Total da seção** — quanto há em todas as contas da seção.

   *Como funciona:*
   “No orçamento” na captura é R$ 14.138,00: é a conta corrente e o dinheiro vivo juntos, exatamente o dinheiro que você divide entre os envelopes na tela “Plano”. Os “Cartões de crédito” têm um total vermelho — é dívida.

3. **Conta** — uma linha é uma carteira, um cartão ou uma aplicação. O ícone e a cor vêm do tipo da conta.

   *Como funciona:*
   Toque na linha para abrir a tela da conta: todas as transações dela, como nas “Transações”, mas só desta conta. Segure o dedo para abrir o menu da conta ([abaixo](#accounts-hold)). Deslize para a esquerda ou para a direita — “Editar” ou “Excluir”.

4. **Saldo** — quanto há na conta agora segundo os seus lançamentos.

   *Como funciona:*
   É a soma de todas as transações da conta com o saldo inicial. Se não bater com o banco, uma transação foi esquecida ou lançada duas vezes. Como encontrar — [“Conciliação de saldo”](#accounts-reconcile).

5. **“Não compensado”** — o total das transações que o banco ainda não processou.

   *Como funciona:*
   A conta corrente na captura mostra −R$ 143,00: você já lançou a compra no “Carrefour”, mas ela ainda não está no banco. Quando ela aparecer no extrato, marque-a com o círculo no feed (nas “Transações” — marcação 9), e a linha some. Enquanto houver transações assim, o saldo do app e o saldo no app do banco diferem com razão — exatamente nesse valor. A marca é opcional. Se você não a usa, todas as transações da conta vêm parar aqui — não é erro, a linha só não diz nada nesse caso.

6. **“Cartões de crédito”** — uma seção à parte para os cartões de crédito. O total vermelho é quanto você deve ao banco. Para cada cartão de crédito, o app cria sozinho uma categoria especial na tela “Plano” — não mexa nela.

   *Como funciona:*
   Os gastos no cartão de crédito diminuem os envelopes igualzinho aos gastos no débito. Mas o dinheiro para pagá-lo o app separa sozinho — no grupo “Pagamentos de cartão” da tela “Plano”. O pagamento do cartão de crédito é uma transferência do seu cartão de débito para o cartão de crédito.

   **A categoria especial.** Quando você cria uma conta do tipo “Cartão de crédito”, o app cria uma categoria com o mesmo nome do cartão no grupo “Pagamentos de cartão” da tela “Plano”. Embaixo do nome dela aparece “Dívida do cartão …”. O app separa nela o dinheiro do pagamento: gastou R$ 105 no cartão de crédito — R$ 105 vieram para cá do envelope da compra.

   **Não mexa nessa categoria** — e o app nem deixa: ela não pode ser renomeada, excluída nem passada para outro grupo, e você não pode adicionar uma categoria sua ao grupo “Pagamentos de cartão”. É por ela que o app conta a dívida deste cartão. Renomeie o cartão na tela “Contas” — a categoria se renomeia sozinha. Mude o cartão para outro tipo — a categoria some, e o dinheiro dela volta para “não alocado”.

   Uma coisa nela continua sendo sua: **a dívida que o cartão já tinha antes de você começar a acompanhar**. O app não separa dinheiro para ela — para quitá-la, você coloca dinheiro nesta categoria como em qualquer envelope, aos poucos ou de uma vez.

7. **“Fora do orçamento”** — contas cujo dinheiro não é dividido entre os envelopes: a poupança, uma aplicação. Em que diferem — [abaixo](#accounts-kinds).

8. **O menu “⋮”** — adicionar uma conta e configurar a aparência da lista. Explicado [abaixo](#accounts-menu).

### No orçamento ou fora do orçamento {#accounts-kinds}

A pergunta principal sobre cada conta: você divide o dinheiro dela entre os envelopes? A resposta decide onde a conta aparece nesta tela e se o dinheiro dela chega à tela “Plano”.

##### No orçamento

A conta corrente, o dinheiro vivo, um cartão de crédito — aquilo de onde você gasta todo dia. Cada real aqui deve estar em algum envelope. O salário cai na conta corrente — ele vai para “não alocado”.

##### Fora do orçamento

A poupança, uma aplicação, investimentos, um empréstimo — o que você quer ver, mas não gasta todo dia. Esse dinheiro não tem envelopes. Passou dinheiro da poupança para a conta corrente? Ele aparece em “não alocado”, e você pode distribuí-lo.

Uma conta nova cai na sua seção sozinha, pelo tipo: “Dinheiro” e “Conta bancária” vão para “No orçamento”, “Cartão de crédito” para “Cartões de crédito”, “Empréstimo” para “Dívidas”, “Só acompanhamento” para “Fora do orçamento”. Os empréstimos e as contas “Só acompanhamento” não têm envelopes.

### O menu “⋮” {#accounts-menu}

Uma conta nova e como mostrar a lista.

[Menu “⋮” da tela “Contas”: Adicionar conta, Saldos correntes, Contas ocultas, Dicas, Central de ajuda]

(F)
#### Adicionar conta

Um cartão novo, uma carteira ou uma aplicação.

*Como funciona:*
1. Toque em “Adicionar conta”.
2. Escolha um tipo: “Dinheiro”, “Conta bancária”, “Cartão de crédito”, “Empréstimo” ou “Só acompanhamento”. O tipo decide a seção e o ícone.
3. Digite um nome — como você chama essa conta: “Cartão Nubank”, “Carteira”.
4. Digite quanto há na conta hoje — o valor do app do banco ou da sua carteira.
5. Salve. O valor vira o saldo inicial. Para dinheiro vivo e conta bancária, ele vai direto para “não alocado” na tela “Plano” — distribua pelos envelopes.

(G)
#### Saldos correntes

Mostrar o saldo depois de cada transação — para todas as contas de uma vez.

*Como funciona:*
O mesmo que “Saldo corrente” no menu de uma conta, só que para todas. **Logo depois da instalação:** desligado.

(H)
#### Contas ocultas

Mostrar as contas ocultas no fim da lista.

*Como funciona:*
O número entre parênteses é quantas são. Enquanto não há contas ocultas, o item fica cinza, como na captura. Cada conta oculta na lista tem um botão “Restaurar”.

(I)
#### Dicas

Todas as dicas desta tela num lugar só.

(J)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

### O que dá para fazer com uma linha {#accounts-gestures}

A linha de uma conta não tem botões. Toque nela, segure o dedo ou deslize-a para o lado.

| Faça isto | O que acontece |
|---|---|
| Toque | A tela da conta: todas as transações dela, com o saldo e o “Não compensado” no alto. |
| Segure o dedo | O menu da conta — [explicado abaixo](#accounts-hold). |
| Deslize para a esquerda | “Editar” — a folha de edição da conta: nome, tipo, aparência. |
| Deslize para a direita | “Excluir”. Se a conta tinha transações, o app oferece “Ocultar”. |

#### O menu da conta — segure o dedo {#accounts-hold}

A linha de uma conta não tem “⋮” próprio, para não tirar espaço do nome. O menu abre com um toque longo bem onde está o seu dedo. Os mesmos itens estão no “⋮” da própria tela da conta.

[Menu da conta no toque longo: Conciliação de saldo, Saldo corrente, Ocultar a conta, Editar a conta, Excluir a conta]

(A)
#### Conciliação de saldo

Conferir se o app e o banco mostram a mesma coisa.

*Como funciona:*
1. Abra o app do banco e veja quanto há na conta.
2. Em “Contas”, segure o dedo nesta conta e escolha “Conciliação de saldo”.
3. A janela diz “No app: …”. Embaixo, no campo “Saldo real no banco”, digite o valor do banco e toque em “Conciliar”.
4. Bateu — o app diz “Saldo conciliado ✓”. Todas as transações da conta até hoje ganham um cadeado, e embaixo da conta aparece “Conciliado em” com a data.
5. Não bateu — a janela “O saldo não confere” mostra a diferença. Primeiro procure uma transação esquecida ou a mais. Não encontrou? Toque em “Criar ajuste”: o app adiciona uma transação nessa diferença, e você preenche a categoria, o beneficiário e a nota.

As transações com cadeado contam como conferidas: editar uma pede confirmação, para que o que foi conciliado não saia do lugar sem querer.

(B)
#### Saldo corrente

Mostrar embaixo de cada transação desta conta quanto a conta tinha depois dela.

*Como funciona:*
Prático para achar onde o saldo se separou do extrato do banco: percorra as transações e compare os saldos linha a linha. Liga só para esta conta; para todas de uma vez — “Saldos correntes” no menu “⋮”.

(C)
#### Ocultar a conta

Tirar da lista uma conta que você não usa mais.

*Como funciona:*
Encerrou um cartão? Não dá para excluí-lo — ele tem histórico. Uma conta oculta some da lista, mas as transações dela ficam no histórico e nos relatórios. Para trazê-la de volta: “⋮” → “Contas ocultas” — elas aparecem no fim da lista com um botão “Restaurar”.

(D)
#### Editar a conta

Mudar o nome, o tipo, o ícone e a cor da conta, e, numa conta em outra moeda, a moeda.

*Como funciona:*
A mesma folha abre quando você desliza a linha para a esquerda. Se a conta tem um saldo inicial, a folha tem uma linha “Saldo inicial” com a data e o valor — toque para abrir essa própria transação, e corrija-a como qualquer outra.

(E)
#### Excluir a conta

Só uma conta sem nenhuma transação.

*Como funciona:*
Se a conta já tem transações, o app diz quantas e oferece ocultar a conta em vez de excluí-la — os relatórios e os saldos precisam do histórico. O mesmo com um deslize para a direita.

## Formulário de transação {#entry}

Como lançar uma compra, uma receita, uma transferência ou uma compra dividida entre várias categorias — e para que serve cada campo.

*“+ Transação” em qualquer aba*

### Para que serve esta tela {#entry-why}

É aqui que você lança tudo o que acontece com o seu dinheiro: uma compra, um salário, uma transferência de um cartão para outro. Quanto mais rápido você lança, mais honesto o orçamento — por isso o essencial do formulário dá para fazer no caixa, em poucos toques.

##### Abrir

“+ Transação” em qualquer aba. Da tela de uma conta ou de uma categoria, o formulário abre com elas já preenchidas. Mais rápido ainda — um widget na tela inicial.

##### O mínimo

Valor, categoria e conta. O beneficiário, a nota e todo o resto são opcionais.

##### Não só à mão

A câmera acima do “+” lê o QR code da nota fiscal, o microfone, uma frase como “café 18 Lazer e hobbies”. Os dois botões abrem este mesmo formulário, já preenchido.

### O que fica onde na tela {#entry-screen}

É assim que o formulário fica logo depois de você tocar em “+”. O teclado do valor abre na hora: quase sempre você começa pelo valor. Toque em qualquer captura para abri-la em tela cheia.

[Nova transação: seletor Saídas e Entradas, valor 0,00, campos Beneficiário, Categoria, Conta, Data, teclado do valor]

1. **Fechar** — o X. Se algo já foi digitado, o app pergunta “Sair sem salvar?” — “Ficar” ou “Não salvar”.

2. **“Saídas” / “Entradas”** — uma despesa ou uma receita. A escolha decide o sinal do valor e a cor do cabeçalho: avermelhado — despesa, verde — receita, cinza — transferência.

   *Como funciona:*
   Escolha “Entradas” e um beneficiário — o app coloca sozinho a categoria de receita deste mês: assim um salário vai direto para “não alocado” na tela “Plano”.

   Toque no campo “Categoria” numa receita — abre a folha “Onde lançar a receita”: “Receita para novembro”, “Receita para dezembro” ou “Para uma categoria de despesa…” (um reembolso, a sua parte numa compra dividida). O salário é lançado para o mês seguinte quando a sua idade do dinheiro chega a 30 dias — por que e o que muda está no artigo [“Resumo”](#overview), seção “Idade do dinheiro em detalhe”.

3. **Valor** — digitado no teclado abaixo. Se o teclado estiver escondido, toque no valor para trazê-lo de volta.

4. **Beneficiário** — a quem você pagou ou de quem veio o dinheiro: “Carrefour”, “Empregador”. As transferências entre as suas próprias contas também ficam aqui.

   *Como funciona:*
   Escolha um beneficiário que você já lançou antes — o app preenche a categoria e a nota como da última vez. Ele preenche só os campos vazios: se você já escolheu uma categoria, ela fica. Um beneficiário novo é criado pela busca: digite o nome e escolha “Criar “…””. Para tirar o beneficiário de uma transação, use o X à direita do campo. Mais — [abaixo](#entry-pickers).

5. **Categoria** — o envelope de onde saiu o dinheiro. Sem ela, uma compra não diminui nenhuma linha da tela “Plano”.

6. **Conta** — de onde saiu ou para onde chegou o dinheiro: conta corrente, carteira, cartão de crédito. O ícone e a cor são os mesmos da lista de contas.

7. **Data** — hoje, se você não mexer. Toque para abrir um calendário.

   *Como funciona:*
   Uma data mais de um mês à frente — o app pergunta de novo: “A transação ficará com a data …, mais de um mês à frente. Continuar?”. Isso pega um erro de digitação no ano.

8. **Teclado do valor** — o do próprio app, com calculadora. Explicado [abaixo](#entry-keypad).

### O teclado do valor {#entry-keypad}

O teclado comum do celular é ruim para valores: dígitos pequenos, sem operações, a vírgula escondida numa segunda tela. O formulário tem o seu — grande e com calculadora.

(+)
#### Ele faz as contas

Uma conta para dois, duas compras num cartão — calcule direto no campo.

*Como funciona:*
Digite 360, toque em “+”, digite 105 e toque em “=” — o valor vira 465. “+”, “−”, “×” e “÷” funcionam. A operação escolhida fica destacada enquanto você digita o segundo número.

(,)
#### Vírgula ou centavos

Como digitar a parte decimal, você decide.

*Como funciona:*
**Com vírgula** — como numa calculadora: 12, vírgula, 50 é 12,50. Enquanto você digita os centavos, a tecla da vírgula fica destacada.

**A partir dos centavos** — como numa maquininha de cartão: 1250 é 12,50. No lugar da vírgula, o teclado tem uma tecla “00”: “3”, “00”, “00” é 300,00.

Mude em “Configurações → Idioma e formatos → Digitação do valor”. **Logo depois da instalação:** com vírgula.

(⌫)
#### Apagar

Toque para apagar o último dígito. Segure para apagar tudo de uma vez, junto com uma operação começada.

(✓)
#### “Concluir”

Esconde o teclado, revelando os outros campos e o botão “Salvar” embaixo. O botão Voltar do sistema faz o mesmo.

(✋)
#### Qual mão

Os dígitos embaixo do seu polegar.

*Como funciona:*
“Para a mão direita” — os dígitos à direita, as operações e o “Concluir” à esquerda (como na captura). “Para a mão esquerda” — o contrário. “Configurações → Idioma e formatos → Teclado do valor”. **Logo depois da instalação:** para a mão direita.

### Escolher o beneficiário e a categoria {#entry-pickers}

Os dois campos abrem uma lista vinda de baixo da tela. No alto — a busca: digite duas letras, e a lista se estreita.

[Lista de beneficiários: busca, seção Transferências com contas e saldos, Fora do orçamento, beneficiários com uma letra à esquerda]
**Beneficiário.** Primeiro as suas contas para transferências, depois os beneficiários.

[Lista de categorias: busca, Dividir o valor, Usados com frequência, grupos de categorias]
**Categoria.** “Dividir o valor”, as frequentes, depois todos os grupos.

(A)
#### Transferências — na lista de beneficiários

O dinheiro foi para uma conta sua? Escolha-a na seção “Transferências”: “Transferência: Visa”.

*Como funciona:*
Embaixo do nome da conta está o saldo dela, para você não errar. As contas fora do orçamento (poupança, uma aplicação) ficam numa seção própria mais abaixo. Como funciona uma transferência — [abaixo](#entry-transfer).

(B)
#### Beneficiário novo

Não está na lista? Digite o nome na busca e escolha “Criar “…””.

*Como funciona:*
Não é preciso cadastrar os beneficiários antes: a lista se forma sozinha conforme você lança. Para renomear ou excluir — “Configurações → Beneficiários”.

(C)
#### “Usados com frequência”

Chips com as categorias que você escolhe mais. Um toque e pronto.

*Como funciona:*
A busca também entende o nome do grupo. Não encontrou? Escolha “Criar “…” no grupo”: a categoria nova aparece na hora também na tela “Plano”.

(D)
#### “Dividir o valor”

Uma compra — várias categorias. Explicado [abaixo](#entry-split).

### Uma transação preenchida {#entry-filled}

A compra no “Carrefour” do artigo “Transações”: com uma tag, uma nota fiscal eletrônica e uma foto. O teclado está escondido e o “Adicional” aberto — todos os campos do formulário estão visíveis.

[Editando a transação Carrefour 143,00: campos, Adicional com a tag sítio, nota fiscal, foto, Compensado, Marcador, Excluir a transação, Salvar]

9. **Nota** — o que você comprou ou por quê: “Leite, ovos, pão”. Ela aparece no feed em itálico e pode ser encontrada pela busca.

   *Como funciona:*
   O valor não é obrigatório: um registro sem valor é uma nota sobre um acontecimento. Por exemplo: troca de óleo aos 85.000 km, entregamos ao André as chaves do sítio. Ele ainda precisa de conta e categoria. No primeiro toque em “Salvar” o app responde “Informe um valor”, no segundo “Informe um valor. Toque de novo e será salvo sem valor”, e o terceiro salva o registro.

   Depois, a busca em “Transações” encontra o registro: ela procura também no texto da nota; digite, por exemplo, óleo.

10. **“Adicional”** — os campos pouco usados num cartão só. Toque no cabeçalho para recolher ou abrir o cartão.

    *Como funciona:*
    Um cartão recolhido é uma linha só, com ícones à direita para os campos escondidos nele: tag, nota fiscal, foto, “Compensado”, marcador. Um campo preenchido fica sempre visível, mesmo num cartão recolhido. O app lembra a sua escolha. **Logo depois da instalação:** recolhido.

11. **Tags** — rótulos por cima da categoria: “#sítio”, “#férias”. A folha de escolha — [abaixo](#entry-tags).

12. **Nota fiscal eletrônica** — o código ou o link da nota fiscal. O ícone do leitor à direita aponta a câmera para um QR code, o “+” adiciona mais uma nota fiscal.

    *Como funciona:*
    Se o app conhece as notas fiscais do seu país, ele confere a nota fiscal com o formulário: preenche o valor se ainda não houver, e se os valores forem diferentes, mostra uma linha embaixo do campo e oferece “Corrigir”. Uma nota fiscal nunca muda a data. Mais sobre notas fiscais e fotos — no artigo [“Transações”](#transactions).

13. **Fotos e PDFs** — “Adicionar” — tirar uma foto da nota fiscal, escolher uma foto da galeria ou um PDF. O X numa miniatura a remove.

    *Como funciona:*
    Não exagere: cada foto vai para todos os backups e, se estiver ligado, para a nuvem. Mais — no artigo [“Transações”](#transactions).

14. **“Compensado”** — marque quando a transação aparecer no extrato do banco. O círculo na linha do feed faz o mesmo.

    *Como funciona:*
    A marca é opcional: ela não afeta o orçamento, só ajuda a conferir a conta com o banco. Se você nunca a usou, simplesmente ignore — círculos vazios estão tudo bem.

15. **Marcador** — um sinal colorido de “voltar depois”: para conferir, para esperar um reembolso, para conversar. Uma bandeirinha aparece na linha do feed.

16. **Excluir a transação** — só numa transação já lançada. O app pergunta de novo.

17. **“Salvar”** — lançar. Sem conta ou categoria o app não salva e diz o que escolher. Um valor zero é permitido: um lançamento assim vira uma nota-lembrete no feed.

### Uma transferência entre as suas contas {#entry-transfer}

Sacou dinheiro, pagou o cartão de crédito, passou dinheiro para uma aplicação — isso não é gasto, é dinheiro mudando de lugar. Lance essas transações como transferências, senão o orçamento vai contá-las como despesas.

[Uma transferência de 900 lançada como saindo da Conta corrente: Saídas, Transferência: Visa, conta Conta corrente, brilho vermelho]
**Jeito 1.** Saindo da Conta corrente: “Saídas”.

[A mesma transferência de 900 lançada como chegando ao Visa: Entradas, Transferência: Conta corrente, conta Visa, brilho verde]
**Jeito 2.** Chegando ao Visa: “Entradas”.

(E)
#### Para onde — no campo “Beneficiário”

Escolha uma conta na seção “Transferências”. O cabeçalho do formulário fica cinza.

*Como funciona:*
A captura mostra o pagamento de um cartão de crédito: R$ 900 da “Conta corrente” para o “Visa”. No feed aparecem duas linhas: um menos na conta corrente e um mais no cartão de crédito.

(F)
#### “Categoria não é necessária”

O dinheiro continua seu — ele só mudou de lugar. Os envelopes da tela “Plano” não mudam.

*Como funciona:*
A exceção é uma transferência entre uma conta do orçamento e uma de fora dele (para a poupança, por exemplo). Aí o dinheiro sai dos envelopes ou entra neles, e o app pede uma categoria.

(G)
#### “Saídas” e “Entradas” numa transferência

O sentido é do ponto de vista da conta do campo “Conta”.

*Como funciona:*
**“Saídas”** — o dinheiro sai desta conta para a conta do campo “Beneficiário”. Um círculo vermelho brilha suave atrás do valor. **“Entradas”** — o dinheiro chega a esta conta vindo da do “Beneficiário”. O círculo é verde. O cabeçalho de uma transferência é cinza de qualquer jeito.

(!)
#### Uma transferência — dois jeitos de lançar

Um pagamento de R$ 900 da “Conta corrente” para o “Visa” pode ser lançado de qualquer um dos lados. O resultado é o mesmo.

*Como funciona:*
1. **Saindo da conta corrente** (captura da esquerda): “Conta” — Conta corrente, “Beneficiário” — “Transferência: Visa”, “Saídas”, brilho vermelho.
2. **Chegando ao cartão de crédito** (captura da direita): “Conta” — Visa, “Beneficiário” — “Transferência: Conta corrente”, “Entradas”, brilho verde.

De qualquer jeito aparecem no feed as mesmas duas linhas: −900 na Conta corrente e +900 no Visa, as duas com o ícone de transferência. Escolha o que for mais prático: está conferindo o extrato da conta corrente — lance como saindo da conta corrente; o app do banco diz “pagamento da fatura recebido” — lance como chegando ao cartão. Da tela de uma conta, o formulário abre com essa conta sozinho.

**Lance uma transferência uma vez só.** O app adiciona o outro lado sozinho. Lance como saindo da conta corrente e depois também como chegando ao cartão de crédito, e a transferência dobra: saem R$ 1.800 da conta corrente, e chegam R$ 1.800 ao cartão em vez de R$ 900.

(H)
#### Moedas diferentes

De um cartão em reais para uma conta em euros — o formulário oferece a conversão sozinho.

*Como funciona:*
Embaixo do beneficiário aparecem campos: “Será creditado” — quanto chega na segunda conta — e “Taxa”, com um botão que inverte o sentido da taxa. Mude o valor, e o “Será creditado” é recalculado; mude a taxa — o mesmo; digite o “Será creditado” — e a taxa é recalculada.

### Um valor dividido {#entry-split}

Uma compra — vários envelopes: na “Americanas” você comprou comida por R$ 183 e produtos de limpeza por R$ 75. Lance como uma transação só, mas em duas categorias — aí os dois envelopes diminuem com honestidade.

[Divisão da Americanas 258: Divisão, Total, Mercado 183, Itens de casa 75, Adicionar parte]

(I)
#### “Divisão”

Aparece no lugar do campo “Categoria” quando você escolhe “Dividir o valor”. Ao lado — o “Total” das partes.

(J)
#### Uma parte

A sua própria categoria, valor e nota. Toque na categoria ou no valor — muda só esta parte.

*Como funciona:*
Uma parte também pode ser uma transferência: pediu um saque no caixa da loja — R$ 210 para “Mercado” e R$ 90 como “Transferência: Dinheiro”. Um exemplo com números — no artigo [“Transações”](#transactions).

(K)
#### “+ tag”

Uma tag só para esta parte. Uma tag do campo “Tags” do formulário vale para a compra inteira de uma vez.

(L)
#### “Adicionar parte”

Mais uma linha. O X à direita de uma parte a mais a remove.

(M)
#### “Cancelar”

Voltar para uma categoria só para o valor inteiro.

As partes não somam o total? Explicado [abaixo](#entry-split-mismatch).

#### As partes não somam o valor {#entry-split-mismatch}

Errou numa parte? O app não corrige em silêncio — ele mostra a diferença bem embaixo das partes e oferece um jeito de fechá-la.

[Partes 183 e 105 com total 258: A divisão excede o total em 30, botão Aumentar para 288]
**As partes são maiores.** “Aumentar para R$ 288,00”.

[Partes 183 e 45 com total 258: Falta dividir 30, botão Reduzir para 228]
**As partes são menores.** “Reduzir para R$ 228,00”.

(N)
#### “A divisão excede o total em …” / “Falta dividir: …”

O quanto as partes estão longe do total. A linha aparece embaixo das partes sozinha enquanto você edita.

*Como funciona:*
Enquanto você edita, a linha é amarela — é uma dica. Toque em “Salvar” com valores que não batem, e a linha fica vermelha, e o formulário não salva a transação até os valores baterem. O mesmo botão de correção também aparece na mensagem embaixo da tela.

(O)
#### “Aumentar para …” / “Reduzir para …”

Um toque — e o total fica igual à soma das partes.

*Como funciona:*
À esquerda: na segunda parte você digitou 105 em vez de 75. Juntas, as partes dão R$ 288, enquanto o total é R$ 258: “A divisão excede o total em R$ 30,00”, e o botão “Aumentar para R$ 288,00” soma esses 30 ao total. À direita é o contrário: 45 em vez de 75 — “Falta dividir: R$ 30,00”, e o botão “Reduzir para R$ 228,00” tira os 30.

**O botão corrige o total, não a parte.** Se o total está certo — como na nota — e o erro foi numa parte, corrija a própria parte: toque no valor dela e digite o certo.

### Reembolso por um produto devolvido {#entry-refund}

Devolveu um leite vencido, levou de volta uma jaqueta que não serviu — o dinheiro voltou. Isso não é receita: lance como reembolso para a mesma categoria de onde você pagou.

[Folha Onde lançar a receita: Receita para novembro, Receita para dezembro, Para uma categoria de despesa]
**Passo 3.** O campo “Categoria” tem “Receita para novembro” — toque nele e escolha “Para uma categoria de despesa…”.

[Um reembolso de 4,50 do Carrefour: Entradas, categoria Mercado, conta Conta corrente, nota Reembolso: leite vencido]
**Pronto.** “Entradas”, a loja, a categoria da compra.

(P)
#### Como lançar

Um reembolso é dinheiro que veio da loja de volta para a categoria de onde saiu.

*Como funciona:*
1. “+ Transação” → “Entradas”.
2. O valor do reembolso. Beneficiário — a mesma loja. Conta — para onde o dinheiro foi devolvido, normalmente o mesmo cartão.
3. Por costume, o app coloca “Receita para novembro” em “Categoria” (captura da esquerda). Toque no campo “Categoria” → “Para uma categoria de despesa…” → escolha a categoria da compra: “Mercado”.
4. Nota — opcional: “Reembolso: leite vencido”. Salve.

(Q)
#### O que muda

O envelope “Mercado” é completado, o “não alocado” não.

*Como funciona:*
- Na tela “Plano”, o “Mercado” mostra o “gasto” R$ 4,50 menor, e o saldo cresce no mesmo valor.
- O “Não alocado” não muda: você não ganhou esse dinheiro, recebeu de volta o seu.
- Nas telas da categoria e da loja, os gastos são contados descontados os reembolsos.
- No calendário do “Resumo”, um dia só com reembolsos é marcado com um anel vazio.
- Reembolsou no cartão de crédito? A dívida do cartão diminui, e junto com ela o valor separado para pagá-lo em “Pagamentos de cartão”.

(R)
#### E se lançar como receita

O orçamento vai mentir duas vezes.

*Como funciona:*
A “Receita para novembro” soma R$ 4,50 ao “não alocado” como se você tivesse ganhado, enquanto o “Mercado” fica com uma compra que de fato não aconteceu. O relatório “Receitas e despesas” mostra as receitas e as despesas maiores do que realmente são.

(S)
#### Por que não excluir a compra

Dá para excluir se você devolveu tudo no mesmo dia.

*Como funciona:*
Se a compra já passou no banco ou foi conciliada, ou se você devolveu só uma parte, lance o reembolso como uma transação à parte. O extrato do banco vai ter duas linhas, a compra e o reembolso — deixe o app ter duas também: a conciliação vai bater.

O dinheiro que um amigo devolveu pela metade dele numa compra dividida é lançado do mesmo jeito: “Entradas”, do amigo, para a categoria da compra.

### Tags {#entry-tags}

O campo “Tags” no “Adicional” abre uma folha de escolha.

[Folha Tags: busca Buscar ou criar tag, Recentes: sítio marcada, meio a meio]

1. Marque as tags que precisar — as recentes ficam no alto, com o número de transações à direita.
2. A que você precisa não está lá? Digite o nome dela na linha “Buscar ou criar tag” e escolha “Criar tag “…””.
3. Toque em “Concluir”.

A escolha não se perde nem se você deslizar a folha para baixo. Para que servem as tags e onde ver os totais depois — no artigo [“Transações”](#transactions).

### Sem tempo? — “Para a caixa de entrada” {#entry-inbox}

No caixa às vezes você tem só um segundo: lembra o valor, mas não há tempo para escolher categoria e conta.

Ligue “Configurações → Dados → Caixa de entrada”. Agora, se o formulário tem um valor, mas não tem categoria ou conta, o botão diz **“Para a caixa de entrada”** em vez de “Salvar”, e no teclado do valor ele salva na hora. A transação fica lançada, mas com a marca “Organizar”.

Enquanto houver transações assim, uma faixa fica acima da navegação, e há um aviso no “Resumo”. Toque nela — o formulário as abre uma a uma, na ordem em que você lançou: prático para lembrar o dia loja por loja. **Logo depois da instalação:** desligado.

Fica especialmente prático com a voz: diga a compra no caixa — e em casa organize o que a voz não reconheceu. O cenário — no artigo [“Entrada por voz”](#voice-inbox).

### O que dá para fazer no formulário {#entry-gestures}

Uma colinha curta de gestos e botões.

| Faça isto | O que acontece |
|---|---|
| Toque no valor | Trazer de volta o teclado do valor. |
| O botão Voltar do celular | Primeiro esconde o teclado, na segunda vez sai (pergunta se algo não foi salvo). |
| Segure o ⌫ | Apagar o valor inteiro. |
| O X no campo “Beneficiário” | Tirar o beneficiário da transação. |
| Toque no cabeçalho “Adicional” | Recolher ou abrir os campos pouco usados. |
| O X numa miniatura de foto | Tirar a imagem ou o PDF da transação. |

## Entrada por voz {#voice}

Diga a compra numa frase — “Carrefour 211 Mercado” — e o app abre o formulário já preenchido. Confira e salve.

*o botão verde do microfone acima de “+ Transação”*

### Para quê {#voice-why}

No caixa as mãos estão ocupadas, mas é preciso lançar a compra na hora, enquanto você lembra. Digitar o valor, escolher o beneficiário, a categoria e a conta — são cinco toques. Por voz — uma frase.

A voz não lança nada sozinha. Ela preenche o formulário de transação, e quem salva é você — assim um erro de reconhecimento nunca entra no orçamento sem você ver.

O botão do microfone é verde, acima de “+ Transação” no “Resumo”, nas “Transações” e nas telas de conta e de categoria.

### A primeira vez {#voice-first}

[Folha de entrada por voz: microfone, Diga o valor e seus próprios nomes: categoria, loja, conta; Por exemplo: “211 Mercado”; O que for reconhecido vai para o formulário — lá dá para conferir e corrigir; botões Cancelar e Falar]

1. **O que dizer** — o valor e os seus próprios nomes: categoria, loja, conta.

2. **Exemplo** — uma frase do seu próprio orçamento: a sua categoria mais frequente e um valor típico. Repita — e vai funcionar.

3. **Para onde vai** — para o formulário de transação, onde dá para conferir e corrigir tudo.

4. **“Falar”** — liga o microfone. Na primeira vez, a folha não o liga sozinha: leia antes o que dizer. Depois disso, o microfone liga assim que você abre a folha.

O app pede permissão para usar o microfone — permita. Fale, depois toque em “Pronto” ou simplesmente pare de falar: a frase reconhecida aparece na folha, e o formulário abre.

### O que dizer {#voice-say}

Comece pelo valor e pela categoria, depois acrescente o resto. O exemplo embaixo do microfone cresce junto com você: duas frases certas seguidas — e ele mostra o próximo passo.

Os passos no orçamento demo:

| Frase | O que é preenchido |
|---|---|
| “211 Mercado” | Valor e categoria. |
| “Carrefour 211 Mercado” | Mais o beneficiário. |
| “Carrefour 211 Mercado nota Comida” | Mais uma nota: tudo depois da palavra “nota”. |
| “Carrefour 211 Mercado da conta Conta corrente” | Mais a conta de onde você pagou. |
| “transferência 300 da conta Conta corrente para conta Visa” | Uma transferência entre contas. |
| “receita 4200 Empregador para conta Conta corrente” | Uma receita e a conta para onde foi o dinheiro. |

[Formulário Adicionar transação depois da frase “Carrefour 211 Mercado da conta Conta corrente”: Saídas, 211,00, Beneficiário Carrefour, Categoria Mercado, Conta Conta corrente, Data]

A captura mostra o formulário depois da frase “Carrefour 211 Mercado da conta Conta corrente”. A data é hoje. Confira e toque em “Concluir”, depois em “Salvar”.

##### Palavras que o app entende

- **“transferência”** — uma transferência entre contas; **“receita”** — entrou dinheiro. Sem essas palavras, a frase é uma despesa.
- **“da conta …”** ou **“do …”**, **“da …”** — de qual conta sai; **“para conta …”** ou **“para …”** — para qual conta vai. Dá para omitir a palavra “conta”.
- **“nota”** — tudo depois desta palavra vira a nota. Por isso diga-a por último.
- **“categoria …”** — se o nome de uma categoria soa como o nome de uma loja e o app os confunde.

##### Valor

Em algarismos ou por extenso — o reconhecimento transforma “duzentos e cinquenta” em 250 sozinho. Os centavos vêm depois da vírgula: “25,50”. Se a frase tiver vários números, o valor é o primeiro.

### Como os nomes são reconhecidos {#voice-names}

O app procura na frase os **seus** nomes: beneficiários, categorias e contas deste orçamento. Ele não cria novos — diga uma loja que ainda não está no orçamento, e o campo “Beneficiário” fica vazio.

##### O beneficiário traz a categoria junto

Assim que o beneficiário é reconhecido, a categoria e a nota se preenchem com base nas transações anteriores dele, como se você o tivesse escolhido no formulário à mão. Dizer “Carrefour 211” basta — a categoria “Mercado” se preenche sozinha.

##### Quantas palavras são precisas

Para um beneficiário, basta uma palavra do nome. Uma categoria de várias palavras precisa de pelo menos duas delas — para que “Saúde e remédios” não se confunda com “Saúde”. Um nome dito por inteiro é sempre reconhecido.

*Por que o exemplo vem do seu orçamento:*
Um exemplo com nomes inventados (“Nubank 300 mercado Leroy Merlin”) ensinaria uma frase que não existe no seu orçamento: repita-a, e você teria um formulário vazio. Por isso o exemplo é sempre montado com os seus próprios dados — a sua compra mais frequente, as suas contas, uma nota recente.

### Não pegou tudo — “Para a caixa de entrada” {#voice-inbox}

A voz reconheceu o valor, mas não a categoria ou a loja. Não há tempo para resolver no caixa, e você não quer perder a compra. Para isso existe a “Caixa de entrada”.

##### Lance agora, organize em casa

1. Ligue uma vez “Configurações → Dados → Caixa de entrada”.
2. No caixa, diga a frase como sempre. No fim, acrescente “nota” e duas palavras sobre a compra — por exemplo, “nota farmácia perto de casa”. A nota fica salva mesmo que a loja e a categoria não tenham sido reconhecidas.
3. Falta algo no formulário? No lugar de “Salvar” aparece um botão “Para a caixa de entrada”, e no teclado do valor também. Toque nele — a compra fica lançada e com a marca “Organizar”.
4. Em casa, toque na faixa acima da navegação ou no aviso do “Resumo”. O formulário abre essas compras uma a uma, na ordem em que você lançou: “Caixa de entrada · 1 de 3”. Escolha a categoria e a conta — “Salvar”.

O valor, a data e tudo o que a voz conseguiu reconhecer já estão na transação — com eles e com a nota, é fácil lembrar a compra. Se a conta foi reconhecida, a compra já diminuiu o saldo dela, e no “Plano” ela fica na linha “Sem categoria” até você organizar. Se a conta não foi reconhecida, a compra espera fora do orçamento e entra nele quando você escolher a conta.

*O que não vai para a “Caixa de entrada”:*
Uma transferência entre contas e um valor dividido: eles precisam das duas contas ou de todas as partes de uma vez. Sem valor também não vai: se a voz não pegou o número, digite-o no formulário. Mais sobre a “Caixa de entrada” no artigo [“Formulário de transação”](#entry-inbox).

### Se não entendeu {#voice-fail}

| Na folha | O que aconteceu |
|---|---|
| “Não entendi nada — tente de novo” | O celular não reconheceu nenhuma palavra. Fale mais perto do microfone e toque em “Tentar de novo”. |
| “Não reconheci nem o valor nem nenhum dos seus nomes” | A frase foi reconhecida, mas não tem número nem nenhum nome conhecido. O formulário não abre — olhe o exemplo e toque em “Tentar de novo”. |
| “Sem acesso ao microfone, ou o reconhecimento não está disponível…” | O app não recebeu o microfone, ou o celular não tem reconhecimento de fala. Confira as permissões do app nas configurações do celular. |

Se nada foi reconhecido, o exemplo na folha fica um passo mais simples. Se um nome foi reconhecido, mas o valor não, o exemplo fica o mesmo: o mais provável é que a frase tenha sido cortada.

### Idioma {#voice-language}

O app escuta no idioma da interface — o escolhido em “Configurações”, seção “Aparência” → “Idioma e formatos” → “Idioma da interface”. Mais no artigo [“Configurações”](#settings-formats). Embaixo do exemplo está escrito em qual idioma ele está escutando.

##### “O idioma da interface não está instalado para o reconhecimento de voz — estou ouvindo em …”

O celular não tem um modelo de reconhecimento para este idioma, então o app escuta no idioma do celular. Adicione o idioma nas configurações de reconhecimento de fala do celular — e a linha some.

##### As palavras “transferência”, “receita”, “nota” — no seu idioma

Cada idioma tem as suas palavras-chave: em ucraniano “переказ”, “дохід”, “нотатка”, em russo “перевод”, “доход”, “заметка”. O exemplo embaixo do microfone sempre mostra as palavras do seu idioma.

## Leitor de notas fiscais {#receipt}

Aponte a câmera para o QR code da nota fiscal — o app preenche o valor e a data, e reconhece uma loja já vista pelo número do caixa, preenchendo o beneficiário, a categoria e a conta.

*o botão roxo com QR code acima de “+ Transação”*

### Para quê {#receipt-why}

As notas fiscais se acumulam no bolso, e à noite é preciso lembrar onde, quanto e quando. O leitor tira da nota fiscal o valor e a data — sem erros de digitação nos números e com o dia real da compra, mesmo que você lance a nota fiscal no dia seguinte. A nota fiscal fica salva na transação como nota fiscal eletrônica: a de papel pode ir para o lixo.

### Onde fica o botão {#receipt-where}

O botão roxo com um QR code fica acima de “+ Transação” no “Resumo”, nas “Transações” e nas telas de conta e de categoria.

Ele aparece só se o app conhece as notas fiscais do seu país:

| País | Quando o botão aparece |
|---|---|
| Ucrânia | Hryvnia no orçamento ou em alguma conta, ou o celular foi comprado na Ucrânia (região UA). |
| Cazaquistão | Tenge no orçamento ou numa conta, ou a região do celular é KZ. |
| Rússia | Rublo no orçamento ou numa conta. |
| Portugal | A região do celular é PT, ou o idioma do app é o português e há euros no orçamento ou numa conta. |

*Por que pela moeda e não pelo idioma:*
O idioma não diz nada sobre o país onde você faz compras: escreve-se em russo tanto na Ucrânia quanto no Cazaquistão, e as notas fiscais lá são diferentes. Já a moeda você escolheu — e ela diz onde você paga.

**No Brasil o botão não aparece.** O QR code da NFC-e, na maioria das notas, traz só um link para a Sefaz com a chave de acesso — sem o valor e sem a data, e o app não vai buscá-los na internet ([por quê](#receipt-your-country)). Mas o código de qualquer nota fiscal pode ser guardado numa transação — com o ícone do leitor no campo “Nota fiscal eletrônica” do formulário ([abaixo](#receipt-form)). E para ensinar o app a ler as notas fiscais do seu país, mande alguns para nós — [como](#receipt-your-country).

### Como escanear {#receipt-how}

[Janela O aplicativo aprende com suas notas fiscais: o código QR traz só a data, o valor e o número do caixa; botões Cancelar e Escanear]

1. Toque no botão roxo.
2. Nas três primeiras vezes, o app explica como aprende com as notas fiscais (captura). Toque em “Escanear”. Depois de reconhecer uma loja, ele não explica mais.
3. A câmera abre: “Aponte a câmera para o QR code da nota fiscal”. O código é lido sozinho, não é preciso tocar em nada.
4. O formulário de transação abre com o valor, a data e a nota fiscal. Confira e toque em “Salvar”.

A nota fiscal é uma foto ou um PDF no celular? Embaixo da câmera — “Escolher da galeria” e “Escolher PDF”.

### O que vem da nota fiscal {#receipt-what}

O QR code de uma nota fiscal não tem o nome da loja nem a lista de compras — só o valor, a data e a hora, o número da nota fiscal e o número do caixa. Por isso:

| Campo do formulário | De onde vem |
|---|---|
| Valor | Da nota fiscal. |
| Data | Da nota fiscal: o dia da compra, não hoje. |
| “Nota fiscal eletrônica” | O código do própria nota fiscal. Com ele dá para abrir e copiar a nota fiscal. |
| Beneficiário | Pelo número do caixa: quem você escolheu para as notas fiscais anteriores desse caixa. |
| Categoria e nota | Pelo beneficiário — como se você o tivesse escolhido no formulário à mão. |
| Conta | Aquela com que você pagou nessa loja da última vez. |

*Um caixa quer dizer a mesma loja:*
Um caixa sempre pertence a uma loja. No supermercado você cai numa fila ou noutra — com as notas fiscais ucranianos o app reconhece também um caixa vizinho da mesma loja. Se caixas vizinhos levam a beneficiários diferentes, o app fica quieto: melhor você mesmo escolher a loja do que receber a errada.

### Uma loja nova {#receipt-new-shop}

Na primeira nota fiscal de uma loja nova, o app preenche só o valor e a data — e abre na hora a escolha do beneficiário.

[Folha de beneficiários sobre o formulário: busca, transferências, beneficiários]

[O formulário depois da escolha: 713,00, Beneficiário Carrefour, Categoria Mercado, Conta vazia, Data 9 de novembro, Nota fiscal eletrônica com um link para a nota fiscal]

1. Encontre a loja na lista ou digite um nome novo.
2. A categoria se preenche sozinha se você já comprou desse beneficiário antes.
3. Escolha a conta: você ainda não pagou nessa loja, então o app não a conhece.
4. “Salvar”.

A próxima nota fiscal desse caixa chega com o beneficiário, a categoria e a conta já preenchidos.

### Repetições e erros {#receipt-problems}

| Mensagem | O que aconteceu |
|---|---|
| “Esta nota fiscal já foi lançada” | Esta mesma nota fiscal já está numa transação — a data e o valor estão na janela. “Editar” abre aquela transação, “Adicionar mesmo assim” — uma nova, “Cancelar” — nada. |
| “Esta não é uma nota fiscal que o aplicativo conheça” | O QR code não é de uma nota fiscal, ou é da nota fiscal de outro país. O formulário não abre. |
| “Esta nota fiscal não tem valor” | O código foi lido, mas não tem valor. Lance a compra com “+ Transação”. |

Alguns serviços de caixa imprimem na nota fiscal um link para o próprio site, sem valor nem data — o app não consegue ler uma nota fiscal assim.

### Uma nota fiscal de um arquivo: “Compartilhar” {#receipt-share}

A nota fiscal chegou por e-mail, WhatsApp ou no app do banco como imagem ou PDF? Toque em “Compartilhar” ali e escolha “Meu orçamento”.

- Uma nota fiscal conhecida é encontrada — o formulário abre como depois da câmera, e o app pergunta “Anexar o arquivo à transação?”. A nota fiscal eletrônica é adicionada de qualquer jeito; anexe o arquivo se quiser ver a própria nota fiscal.
- O arquivo não tem nota fiscal, ou tem uma desconhecida — o app diz por quê e oferece “Preencher manualmente”: o formulário abre com o arquivo já anexado.

### Uma nota fiscal no formulário {#receipt-form}

No formulário de transação, em “Adicional”, há um campo “Nota fiscal eletrônica” com um ícone de leitor. Ele funciona com **qualquer** QR code, em qualquer país: coloca no campo o que estiver escrito no código.

Se a nota fiscal é conhecida, o app a confere com o formulário: preenche o valor se ainda não houver, e se os valores forem diferentes, mostra a linha “A nota fiscal tem outro valor: …” e oferece “Corrigir”. Uma nota fiscal não muda a data num formulário aberto. Mais no artigo [“Formulário de transação”](#entry).

Uma nota fiscal salva aparece como ícone na linha da transação e, no cartão da transação, como os botões “Copiar” e “Abrir”. Mais no artigo [“Transações”](#transactions).

### Ensine o app a ler as notas fiscais do seu país {#receipt-your-country}

O app lê uma nota fiscal sem internet: tudo o que ele precisa — o valor e a data — tem de estar no próprio QR code. Em muitos países é assim: o QR code de uma nota fiscal traz o valor, a data e o número do caixa. Se no seu país também é assim, podemos adicionar as notas fiscais dele.

##### Mande 5–10 notas fiscais

1. Pegue notas fiscais de lojas diferentes: uma rede de supermercados, uma farmácia, um posto de gasolina, uma lojinha. Nota fiscals eletrônicos — um PDF ou uma imagem de um e-mail — também servem.
2. Fotografe cada um de modo que o QR code e o total fiquem bem visíveis.
3. Mande no “Bate-papo no Telegram” ou por e-mail com “Sugerir uma melhoria” — os dois ficam em “Configurações”, seção “Ajuda e contato”. Diga qual é o seu país.

São precisas várias notas fiscais para ter certeza de que o código é montado do mesmo jeito em caixas e redes diferentes. Uma nota fiscal só não diz isso.

*O que cobrir na foto:*
Precisamos só do QR code, do valor e da data. Os últimos dígitos do cartão, o nome do caixa, o cartão de fidelidade e tudo o mais que for pessoal podem ser cobertos com o dedo ou riscados — isso não atrapalha o reconhecimento.

*Quando não vai funcionar:*
Se o QR code da nota fiscal traz só um link para um site — sem valor e sem data —, os dados estão naquele site. O app não vai até lá: ele promete funcionar sem servidor e sem cadastro. Esses notas fiscais ficam sem o leitor, mas você sempre pode guardar o código deles no campo “Nota fiscal eletrônica”.

## Widgets e atalhos {#widgets}

Botões para lançar uma compra direto na tela inicial do celular: voz, nova transação, leitor de notas fiscais. Um toque e você está no formulário — sem abrir o app nem procurar o “+”.

*tela inicial do celular — “Widgets” → “Meu orçamento”; atalhos — toque longo no ícone do app*

### Para quê {#widgets-why}

As compras são lançadas enquanto você lembra delas: no caixa, saindo da loja. Cada toque a mais é uma desculpa para deixar “para a noite” e esquecer. Um widget na tela inicial abre na hora o que você precisa: a voz, o formulário ou a câmera para uma nota fiscal.

### Cinco widgets {#widgets-widgets}

| Widget | Tamanho | O que faz |
|---|---|---|
| “Voz” | 1 célula | Um botão verde com microfone — [entrada por voz](#voice). |
| “Transação” | 1 célula | Um botão com “+” na cor de “+ Transação” — uma transação nova. |
| “Nota fiscal” | 1 célula | Um botão roxo com QR code — [o leitor de notas fiscais](#receipt). |
| “Botões em coluna” | 1 × 2 células | Os três botões empilhados. |
| “Botões em linha” | 2 × 1 células | Os três botões lado a lado. |

As cores são as mesmas dos botões do app: verde para a voz, roxo para as notas fiscais.

##### O botão de nota fiscal não é para todos

O widget separado “Nota fiscal” todo mundo recebe. Mas nos widgets de três botões, o botão de nota fiscal só aparece se o app conhece as notas fiscais do seu país — pela mesma regra do botão no app. A regra está no artigo [“Leitor de notas fiscais”](#receipt-where). Senão o widget tem dois botões.

### Como adicionar um widget {#widgets-add}

1. Segure o dedo num lugar vazio da tela inicial.
2. Escolha “Widgets”.
3. Encontre “Meu orçamento” e o widget que você quer.
4. Arraste-o para a tela inicial.

Os nomes dos menus dependem do celular: em alguns, “Widgets” fica no menu da tela inicial, em outros numa lista à parte. Os widgets “Voz”, “Transação” e “Nota fiscal” ocupam uma célula, como o ícone de um app.

### Atalhos {#widgets-shortcuts}

Um atalho é a mesma ação que um ícone comum: quem o desenha é o launcher, como os ícones dos apps, e ele fica alinhado com eles em qualquer celular.

1. Segure o dedo no ícone “Meu orçamento”.
2. Aparecem “Voz” e “Transação” — toque num deles para abrir na hora.
3. Ou arraste um atalho para a tela inicial — ele fica lá como ícone.

Não há atalho para notas fiscais: um atalho não pode ser escondido onde o app não conhece as notas fiscais do país. Para notas fiscais, use o widget “Nota fiscal”.

### O que abre {#widgets-open}

| Você toca em | O que acontece |
|---|---|
| “Voz” | O app abre no “Resumo” com a folha de entrada por voz por cima. |
| “Transação” | O “Resumo”, com o formulário de nova transação por cima. |
| “Nota fiscal” | O “Resumo”, com a câmera do leitor por cima. |

Depois de salvar, você fica no “Resumo” e vê que a compra entrou no orçamento.

##### Se há um PIN definido

O app primeiro pede o PIN ou a digital, e logo depois abre o que você tocou. Não é preciso tocar de novo.

## Beneficiários e tags {#payees-tags}

Para quem você paga e para quê — dois recortes do seu feed de transações, ao lado das categorias.

*Um ícone no cabeçalho das “Transações”*

### Para que serve esta tela {#payees-tags-why}

As categorias respondem “para onde foi o dinheiro”. Aqui estão outros dois recortes do mesmo feed de transações: **para quem** você paga e **para quê**. Quanto foi para o “Carrefour” neste ano, quanto custou o sítio, quem deve a quem numa compra dividida.

##### Como chegar

O ícone “Beneficiários e tags” no cabeçalho das “Transações”. Ou “Configurações → Dados → Beneficiários” e “Tags”. Ou “Todas as tags ›” no bloco “Minhas tags” do “Resumo”.

##### Não é preciso cadastrar antes

Os beneficiários e as tags aparecem sozinhos na primeira vez que você os digita no formulário de transação. Aqui você os vê, renomeia e organiza.

##### Duas abas

“Beneficiários” e “Tags”. A tela lembra em qual aba você saiu.

### A aba “Beneficiários” {#payees-tags-payees}

Todos a quem você pagou ou de quem recebeu dinheiro. Toque em qualquer captura para abri-la em tela cheia.

[Aba Beneficiários: busca, Total do ano atual, Carrefour −3.336,00, Netflix, Empregador +50.400, botão Novo beneficiário]

1. **Abas** — “Beneficiários” e “Tags”.

2. **O menu “⋮”** — a ordem da lista de beneficiários e o período do total. Explicado à direita da segunda captura.

3. **Busca** — digite duas letras do nome.

4. **Beneficiário** — uma letra, o nome, à direita o total do período, embaixo do nome quantas transações houve no mesmo período e quando foi a última.

   *Como funciona:*
   O total é “líquido” e com sinal: numa loja, um menos descontados os reembolsos; num empregador, um mais. Na captura, o “Carrefour” custou R$ 3.336,00 desde o começo do ano, e o “Empregador” trouxe R$ 50.400. Esses números não têm cor de propósito: o sinal mostra o sentido.

   Toque numa linha — abre a tela do beneficiário ([abaixo](#payees-tags-payee)). Deslize para a esquerda — “Editar”: renomear. Deslize para a direita — “Excluir”: o app pergunta de novo e diz quantas transações o beneficiário tem. As transações em si não somem; só ficam sem beneficiário.

5. **“Total do ano atual”** — o rótulo acima da lista: a qual período se referem os números à direita. Escolha o período no menu “⋮”.

6. **“+ Novo beneficiário”** — adicionar um beneficiário à mão. Normalmente não é preciso: o formulário de transação cria um sozinho.

#### A ordem da lista {#payees-tags-sort}

[Menu de ordenação: Mais usados, Recentes, Ordem alfabética, Por valor, Período]

(A)
#### Mais usados

Os com mais transações no alto. É a configuração logo depois da instalação.

(B)
#### Recentes

Os com a transação mais recente no alto.

(C)
#### Ordem alfabética

Prático quando você tem centenas de beneficiários.

(D)
#### Por valor

Os maiores no alto: tanto quem você mais paga quanto de quem mais recebe. O sinal não importa, só o tamanho.

(E)
#### Período

“Total do ano atual” (o padrão logo depois da instalação), “Total em 12 meses” ou “Total de todo o período”. O período define o valor de cada linha, as “Transações: N” e as ordens “Mais usados” e “Por valor”; a data da última transação é sempre de todo o período. O ano começa em 1º de janeiro: no dia 1º de janeiro o total começa do zero.

### A tela do beneficiário {#payees-tags-payee}

Tudo sobre um beneficiário: quanto, com o quê e quando. O “⋮” renomeia, e o “+” embaixo começa uma transação nova com este beneficiário já preenchido.

[Tela do beneficiário Netflix: período novembro de 2026, Tendências de gastos, Por categoria, transações por dia]

(F)
#### Período

Começa no mês atual. As setas passam os meses, e o toque no nome abre a folha “Período”: a mesma dos “Relatórios”.

*Como funciona:*
Quer ver tudo o que foi para um beneficiário num ano? Escolha um ano ou um intervalo seu, e a tela mostra tudo: o total, as categorias e todas as transações.

(G)
#### “Tendências de gastos”

Quanto foi gasto com o beneficiário no período e quanto em média por mês.

*Como funciona:*
Os gastos são contados descontados os reembolsos. Se o beneficiário mais paga você (um empregador, um inquilino), o bloco se chama “Tendências de entradas” e conta as receitas.

(H)
#### “Por categoria”

Para o que foi o dinheiro dado a este beneficiário. Aparece quando há duas categorias ou mais.

*Como funciona:*
Na captura, a Netflix tem duas categorias: a internet de casa em “Telefone e internet” e a assinatura em “Assinaturas”.

(I)
#### Transações

Todas as transações com este beneficiário no período, por dia.

### A aba “Tags” {#payees-tags-tags}

Rótulos por cima das categorias: “#sítio”, “#férias”, “#meio a meio”. Como colocar uma tag numa transação — no artigo [“Transações”](#transactions).

[Aba Tags: meio a meio — cobrar 129, arrecadado 129 de 258; sítio — 355, duas transações]

7. **Tag** — o nome, o total em todo o período da tag, o próprio período e o número de transações. Numa tag com “Acerto de contas”, o lado direito mostra quanto cobrar ou devolver.

   *Como funciona:*
   A ordem é: primeiro as tags com acerto em aberto, depois pela transação mais recente, e as tags sem transações no fim. As tags ocultas ficam reunidas num bloco à parte, “Tags ocultas”, embaixo.

   Toque — a tela da tag ([abaixo](#payees-tags-tag)). Segure o dedo — um menu: “Renomear”, “Acerto de contas”, “Ocultar da seleção”. Deslize para a esquerda para renomear, para a direita para excluir.

8. **“+ Nova tag”** — adicionar uma tag à mão. Normalmente as tags são criadas direto no formulário de transação.

### A tela da tag {#payees-tags-tag}

Tudo o que foi lançado com uma tag — quanto, com o quê e quando. É aqui também que o “Acerto de contas” é configurado.

[Tela da tag meio a meio: 10 de novembro, 2 transações, cobrar 129, 50% quitado, Gasto 258, Recebido 129, Por categoria, transações]

(J)
#### Período e transações

O primeiro e o último dia com transações com a tag, e quantas são. Os totais da tela cobrem todo o período da tag.

(K)
#### Acerto de contas

Se o “Acerto de contas” está ligado na tag: quanto falta para ficar quite, e uma barra “N% quitado”.

*Como funciona:*
O acerto de contas responde “quem deve a quem” numa despesa dividida. O app calcula: gasto menos recebido em todo o período da tag.

- **“Cobrar”** — você gastou mais do que arrecadou. Na captura: uma compra de R$ 258 na “Americanas” foi dividida com o André, ele devolveu R$ 129 — faltam R$ 129, 50% quitado.
- **“Devolver”** — você arrecadou mais do que gastou: por exemplo, todo mundo fez uma vaquinha para um presente, e sobrou troco.
- **“Quitado”** em verde — tudo bate.

Lance o dinheiro de um amigo como reembolso para a categoria da compra, com a mesma tag — como no artigo [“Formulário de transação”](#entry), seção “Reembolso por um produto devolvido”. O “Acerto de contas” não mexe no orçamento nem nos relatórios: é uma ajuda para você.

(L)
#### “Gasto” e “Recebido”

Quanto saiu e entrou com a tag. As transferências entre as suas próprias contas não entram.

(M)
#### “Por categoria”

Para o que foi o dinheiro com esta tag. Uma tag numa parte de um valor dividido conta só essa parte.

(N)
#### Transações

Todas as transações com a tag, por dia.

#### O menu “⋮” da tag {#payees-tags-tag-menu}

[Menu da tag: Renomear, Mostrar em Minhas tags, Acerto de contas marcado, Ocultar da seleção, Dicas, Central de ajuda, Excluir]

(O)
#### Renomear

O nome novo aparece em todas as transações com a tag. O app não aceita um nome que já existe.

(P)
#### Mostrar em “Minhas tags”

Adicionar a tag ao bloco “Minhas tags” do “Resumo”. São quatro lugares; quando estão cheios, o item fica cinza e diz por quê: “Minhas tags já tem 4”.

(Q)
#### Acerto de contas

Ligar ou desligar o cálculo de “quem deve a quem” para esta tag.

(R)
#### Ocultar da seleção

A tag some da folha de escolha do formulário, mas fica nas transações. Prático para umas férias que já acabaram. Numa tag oculta, este lugar diz “Voltar à seleção”.

(S)
#### Dicas

As dicas desta tela.

(T)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

(U)
#### Excluir

A tag é tirada de todas as transações; as transações em si ficam. O app pergunta de novo.

### O que dá para fazer com uma linha {#payees-tags-gestures}

Não há botões nas linhas: toque, segure o dedo ou deslize com o dedo.

| Faça isto | O que acontece |
|---|---|
| Toque num beneficiário | A tela do beneficiário. |
| Deslize um beneficiário para a esquerda / direita | “Editar” (renomear) / “Excluir”. |
| Toque numa tag | A tela da tag. |
| Segure o dedo numa tag | Um menu: “Renomear”, “Acerto de contas”, “Ocultar da seleção”. |
| Deslize uma tag para a esquerda / direita | “Editar” (renomear) / “Excluir”. |

## Pagamentos programados {#scheduled}

Aluguel, assinaturas, o seu salário — tudo o que se repete. O app lembra os vencimentos, avisa sobre eles e preenche sozinho o valor e a categoria. O dinheiro no orçamento só se move quando você confirma o pagamento.

*“Configurações” → “Planejamento” → “Pagamentos programados”*

### Para que serve esta tela {#scheduled-why}

Metade dos gastos de um mês é conhecida de antemão: o aluguel no dia 1º, a internet no dia 5, uma assinatura no dia 11, o salário duas vezes por mês. Um pagamento programado é uma transação assim, anotada uma vez, com antecedência.

##### Não esquecer

O app lembra o vencimento com uma notificação — no dia do pagamento ou antes, como você configurar.

##### Não digitar à mão

Chegou o vencimento — toque em “Confirmar”, e a transação se lança sozinha: valor, beneficiário, categoria, conta.

##### Ver o que vem pela frente

Os próximos pagamentos ficam no “Resumo”, no bloco “O que vem” e no “Calendário”. Você vê a que o dinheiro já está prometido.

Um pagamento programado ainda não é gasto. Até você confirmá-lo, os saldos das contas e dos envelopes não mudam: ele só lembra e sugere.

### O que fica onde na tela {#scheduled-screen}

Todos os pagamentos programados numa lista, o vencimento mais próximo no alto. Toque em qualquer captura para abri-la em tela cheia.

[Tela Pagamentos programados: Empregador +4.200 duas vezes por mês, Proprietário −3.600 mensalmente, Enel, Spotify, Netflix, um travessão −2.400 anualmente com um marcador vermelho e a nota Seguro do carro, botão Pagamento]

1. **Linha** — um pagamento que se repete. Ela é montada como a linha de uma transação: quem e quanto, categoria e conta, como se repete e quando vence de novo.

   *Como funciona:*
   A primeira linha é o beneficiário e o valor com sinal: “−” quer dizer que o dinheiro vai sair, “+” que vai entrar. A segunda é a categoria e a conta. A terceira é a frequência e o vencimento mais próximo.

   Um pagamento sem beneficiário mostra um travessão “———” no lugar do nome, e a nota fica numa quarta linha — na captura, “Seguro do carro”.

   A lista é ordenada pelo vencimento mais próximo. Os pagamentos cujo vencimento já passou também estão aqui, no alto: eles esperam confirmação — mais sobre isso [abaixo](#scheduled-due).

2. **Frequência e data** — à esquerda como se repete, à direita o próximo vencimento. Depois de cada vencimento lançado ou pulado, a data passa sozinha para o seguinte.

3. **Marcador** — o mesmo sinal colorido de uma transação. Quando o pagamento é lançado, o marcador passa para a transação.

4. **“+ Pagamento”** — um pagamento programado novo. Os passos estão [abaixo](#scheduled-new).

Enquanto não há pagamentos programados, a tela fica vazia: “Sem pagamentos programados” e a dica “Aluguel, assinaturas, salário — adicione pelo botão ‘Pagamento’”.

### Um pagamento programado novo {#scheduled-new}

O formulário é o mesmo de uma transação comum, só que com um campo “Repetir”. Tocar numa linha da lista também o abre: aí ele se chama “Pagamento programado” e edita o que já existe.

[Formulário do pagamento programado: Saídas, 3.600, Beneficiário Proprietário, Categoria Aluguel, Conta Conta corrente, Data, Repetir Mensalmente, Nota, Adicional, Salvar]

[Folha Repetir: Uma vez, Diariamente, Semanalmente, A cada 2 semanas, Duas vezes por mês, A cada 4 semanas, Mensalmente, A cada 2 meses, A cada 3 meses, A cada 4 meses, Duas vezes por ano, Anualmente]

5. **Valor** — digite no teclado do app e toque em “Concluir”. Acima do valor — “− Saídas” para um pagamento e “+ Entradas” para um salário.

6. **Beneficiário** — a quem você paga ou quem paga você.

7. **Categoria** — de qual envelope o dinheiro vai sair. Para um salário — a receita do mês.

8. **Conta** — de qual conta ele é debitado ou em qual chega.

9. **Data** — o vencimento mais próximo. O app conta os seguintes a partir dele.

10. **“Repetir”** — com que frequência: doze opções, a folha está na segunda captura.

    *Como funciona:*
    - **“Uma vez”** — um pagamento sem repetições. Depois de lançado ou pulado, ele some da lista.
    - **“Duas vezes por mês”** — no dia do vencimento e 15 dias depois: o dia 3 e o dia 18. Se o segundo dia não existe num mês, o vencimento cai no último dia do mês.
    - **“A cada 4 semanas”** — não é o mesmo que “Mensalmente”: são 13 vencimentos por ano, não 12, e a data muda a cada vez.
    - **“Mensalmente”** e com menos frequência — no mesmo dia do mês. Se esse dia não existe num mês, o vencimento cai no último dia do mês e volta no seguinte: um pagamento no dia 31 chega em 28 de fevereiro, 31 de março, 30 de abril.

11. **Tags** — os mesmos rótulos das transações. Na captura, o aluguel tem a tag “apartamento”.

12. **“Adicional”** — nota fiscal eletrônica, fotos e PDFs, “Compensado” e o marcador. Na captura, um PDF do contrato de aluguel está anexado ao aluguel.

    *Como funciona:*
    Tudo o que você preencher aqui, junto com as tags, vai para cada transação lançada a partir deste pagamento. As tags fazem sentido aqui: cada aluguel cai sozinho na tag “apartamento”. Já um anexo normalmente é preciso uma vez só: basta anexar o contrato a uma transação — quando lançar o primeiro pagamento, toque em “Editar” e adicione o PDF no formulário. Anexado aqui, ele ficaria como ícone ao lado de cada pagamento por anos. Preencha aqui o recibo, as fotos e os PDFs só se cada transação realmente precisar do documento.

13. **“Salvar”** — o pagamento aparece na lista. Se os lembretes estiverem ligados, o app vai avisar sobre ele.

##### Como criar um pagamento

1. “Configurações” → “Planejamento” → “Pagamentos programados”.
2. Toque em “+ Pagamento” embaixo à direita. Abre “Novo pagamento programado”.
3. Digite o valor e toque em “Concluir”.
4. Escolha o beneficiário, a categoria e a conta.
5. “Data” — o vencimento mais próximo.
6. “Repetir” — com que frequência se repete.
7. Se quiser — as tags e o “Adicional”.
8. “Salvar”.

##### Uma transferência programada

O pagamento do cartão de crédito, a parcela de um empréstimo, um depósito na poupança — isso é uma transferência entre as suas próprias contas. No campo “Beneficiário”, escolha uma conta na seção “Transferências”, e o sentido — “Saídas” ou “Entradas”, como numa transferência comum.

*Uma transferência quer dizer duas contas:*
- O pagamento aparece nas telas das **duas** contas, no bloco “O que vem”: como menos na conta corrente, como mais no empréstimo.
- Na tela de confirmação, no lembrete e no resumo da semana, ele tem o nome do caminho: “Conta corrente → Empréstimo”.
- “Confirmar” lança a transferência nas duas contas de uma vez, como faz o formulário.
- Contas em moedas diferentes — aparecem “Será creditado” e “Taxa” embaixo do beneficiário: digite a taxa logo, ao criar. Quando chegar o vencimento, “Confirmar” abre o formulário com esses números — confira a taxa do dia e salve.
- Uma transferência para uma conta fora do orçamento (um empréstimo, uma aplicação) tira dinheiro de um envelope — o app pede uma categoria, como numa transferência comum. Uma transferência entre contas do orçamento (conta corrente → cartão de crédito) não precisa de categoria.
- No “Calendário” do “Resumo”, o pagamento do cartão de crédito não é pintado como gasto: o dinheiro ficou no orçamento. A parcela de um empréstimo fora do orçamento é pintada.

##### O que um pagamento programado não pode ter

Um valor dividido: ao salvar, o app diz “Divisões programadas ainda não têm suporte”.

### A partir de uma transação existente {#scheduled-from-txn}

O jeito mais rápido de criar um pagamento programado é a partir de uma transação que você já lançou: o formulário recebe tudo, menos a frequência.

[Folha da transação Carrefour: beneficiário, categoria, conta, data, nota fiscal, foto; embaixo os botões Repetir, Editar e Criar pagamento programado]

(14)
##### “Criar pagamento programado”

1. Toque numa transação nas “Transações”, na tela de uma conta ou de uma categoria — abre a folha da transação.
2. Embaixo — “Criar pagamento programado”.
3. Abre “Novo pagamento programado” com o mesmo valor, beneficiário, categoria, conta, nota, marcador e tags. A nota fiscal eletrônica, as fotos e PDFs e o “Compensado” ficam vazios: cada pagamento tem os seus. Precisa anexar, por exemplo, um contrato? Adicione aqui. A folha “Repetir” abre por cima na hora — escolha a frequência.
4. A data se preenche sozinha — o vencimento mais próximo depois daquela transação, mas não antes de hoje: de uma transação no dia 5, um pagamento mensal começa no dia 5 do mês seguinte.
5. “Salvar”.

Só uma transação comum tem o botão: um valor dividido e uma transferência não têm.

### Quando vence {#scheduled-due}

Na data do vencimento, o pagamento começa a esperar confirmação. Ele não se lança sozinho: o aluguel pode ter sido pago com um dia de atraso, e a conta de luz vem com um valor diferente todo mês. Quem decide é você.

[Faixa no Resumo: Pagamentos programados: 2 aguardando confirmação]
No alto do “Resumo” aparece uma faixa: “Pagamentos programados: 2 aguardando confirmação”. Toque para abrir a tela de confirmação.

[Tela de confirmação: cartões Empregador +4.200 e Proprietário −3.600, cada um com uma data de lançamento e setas, Pular, Editar, Confirmar]

[O mesmo cartão com a data movida um dia: rótulos adiado e reinício]

(A)
##### O cartão do pagamento

Quem, quanto, categoria, conta e frequência. O vencimento mais antigo no alto.

(B)
##### A data de lançamento

Começa como a data do vencimento. “‹ ›” movem-na um dia antes ou depois, e o toque na data abre um calendário — um mês para cada lado. Depois de movida, aparecem ao lado “adiado” e “reinício” (segunda captura); “reinício” traz de volta a data do vencimento.

(C)
##### “Confirmar”

A transação é lançada na data escolhida e aparece nas “Transações” com tudo o que o pagamento tem: tags, nota fiscal, fotos e PDFs, a marca “Compensado”. O cartão some, e o vencimento passa para o seguinte.

*Como funciona:*
O próximo vencimento é contado a partir da data do VENCIMENTO, não da data do lançamento: o aluguel do dia 1º foi pago no dia 3 — o próximo vencimento continua sendo o dia 1º. Senão o cronograma escorregaria a cada atraso.

(D)
##### “Editar”

Se desta vez o valor é outro. O formulário de transação abre com os campos do pagamento — e com as tags, a nota fiscal, as fotos e os PDFs dele: ajuste e salve — a transação é lançada, e o vencimento é fechado. Fechou o formulário sem salvar? Nada mudou.

(E)
##### “Pular”

Desta vez não houve pagamento. Nenhuma transação é lançada, e o vencimento passa para o seguinte. Um pagamento “Uma vez” some depois de pulado.

*Se vários vencimentos se acumularam:*
Não abriu o app por dois meses? Um pagamento mensal tem dois vencimentos para trás. O cartão mostra o mais antigo; confirme-o ou pule-o — aparece o seguinte, até chegar a hoje. Quando não há mais nada a resolver, a tela diz “Sem pagamentos para confirmar”.

Uma transferência programada é lançada como transferência — nas duas contas de uma vez. Se as contas estão em moedas diferentes, “Confirmar” abre o formulário com os campos “Será creditado” e “Taxa” preenchidos na criação — ajuste para a taxa do dia e salve.

### Antes ou depois do vencimento {#scheduled-early-late}

O dinheiro raramente chega no dia exato. O pagamento é lançado com a data em que realmente aconteceu — e o vencimento é fechado: no dia dele não vai aparecer de novo, nem na tela de confirmação nem como lembrete.

##### O salário caiu 2 dias antes

O vencimento ainda não chegou, então ele não está na tela de confirmação.

1. “Configurações” → “Planejamento” → “Pagamentos programados”.
2. Deslize a linha “Empregador” para a esquerda — aparece “Lançar”. Toque.
3. O formulário de transação abre: valor, beneficiário, categoria, conta, tags — do pagamento, data — hoje. O dinheiro não chegou hoje? Toque no campo “Data” e escolha o dia.
4. “Salvar”.

O salário fica lançado no dia em que chegou. O vencimento é fechado: no dia dele o app não vai lembrar nem pedir confirmação. O próximo vencimento segue o cronograma: duas vezes por mês — o próximo dos dois dias, mensalmente — um mês depois do vencimento, não do dia em que você lançou.

##### O aluguel foi pago com um dia de atraso

O vencimento já passou — o pagamento espera na tela de confirmação.

1. Toque na faixa “Pagamentos programados: … aguardando confirmação” do “Resumo”.
2. No cartão do pagamento, toque em “›” — a data de lançamento passa um dia para frente. Toque na própria data para abrir um calendário.
3. “Confirmar”.

A transação fica lançada no dia em que você pagou. O próximo vencimento segue o cronograma — o dia 1º, não o dia 2.

##### Desta vez o valor é outro

A conta de luz é diferente todo mês. O vencimento chegou — “Editar” no cartão da tela de confirmação; ainda não — “Lançar” na lista. Corrija o valor no formulário e toque em “Salvar”: a transação fica lançada com o valor novo, e o pagamento programado continua com o antigo.

### O que dá para fazer com uma linha {#scheduled-gestures}

Não há botões na linha. Você desliza a linha para o lado com o dedo — até um botão que aparece por baixo.

[Linha Enel deslizada para a esquerda: botão Lançar]

[Linha Enel deslizada para a direita: botão vermelho Excluir]

| Faça isto | O que acontece |
|---|---|
| Toque na linha | O formulário “Pagamento programado”: mude o valor, a data, a frequência — qualquer coisa. “Salvar”. |
| Deslize para a esquerda | “Lançar” — lançar agora o vencimento mais próximo: você pagou o aluguel adiantado, o dinheiro chegou antes. Abre um formulário de transação nova com os campos do pagamento e a data de hoje. Depois de salvar, a transação fica lançada, este vencimento é fechado, e o seguinte segue o cronograma. |
| Deslize para a direita | “Excluir” — depois da pergunta “Excluir o pagamento programado?”. As transações já lançadas a partir deste pagamento ficam. |

### Lembretes {#scheduled-reminders}

O app lembra o vencimento com uma notificação: “Hoje: …”, “Amanhã: …” ou “Em 3 dias: …”. Quando lembrar — no dia do pagamento, 1, 2 ou 3 dias antes, ou uma semana antes —, a que horas e se esconder os valores na tela de bloqueio fica em [“Configurações” → “Lembretes”](#settings-reminders).

### Onde mais os pagamentos programados aparecem {#scheduled-elsewhere}

**“Resumo”** — o bloco “O que vem”: os próximos pagamentos com as datas, e o “Calendário” no modo “Programados”: os próximos vencimentos, os lançados e os não lançados. Mais no artigo [“Resumo”](#overview-heatmap).

**Tela da conta** — acima do feed, um cartão “O que vem”: os pagamentos programados desta conta. Tocar numa linha abre “Pagamentos programados”.

**“Metas”** — se uma categoria tem um pagamento programado, o cartão da meta sugere “Do pagamento programado: …”. Mais no artigo [“Metas”](#goals-new).

**Resumo da semana** — se estiver ligado, inclui os próximos pagamentos programados. Mais em [“Configurações” → “Lembretes”](#settings-reminders).

## Nuvem e backups {#sync}

Como não perder o seu orçamento e como mantê-lo em vários aparelhos.

*“Configurações” → seção “Sincronização”*

### Para que tudo isso {#sync-why}

O orçamento mora no seu celular. Esta seção das configurações responde a três perguntas.

**“Meu celular caiu no lago”** — três anos de orçamento não devem afundar junto. Os [backups](#sync-backups) e a nuvem ajudam: um celular novo [carrega o orçamento da nuvem](#sync-restore).

**“A gente mantém o orçamento juntos”** — ou é só você, mas com um celular e um computador. Todos os aparelhos olham para uma nuvem e trocam alterações: isso é a [sincronização](#sync-sync).

**“Ontem eu baguncei tudo”** — excluiu a conta errada, importou o arquivo errado. O app faz [backups conforme uma agenda](#sync-backups) sozinho, e você pode voltar a eles.

**Por onde começar.** Três passos bastam:

1. [Conecte uma nuvem](#sync-auth) — Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, seu próprio servidor).
2. [Defina uma senha](#sync-password) se não quiser que mais ninguém consiga ler os seus dados na nuvem. Anote-a.
3. Pronto. A sincronização e os backups funcionam sozinhos daí em diante: toda vez que você abre o app.

### Autorização: conectar uma nuvem {#sync-auth}

É aqui que você entra numa nuvem. São três, e dá para conectar uma ou várias. Na captura, o Dropbox já está conectado, enquanto o Google Drive e o WebDAV ainda não: assim você vê os dois tipos de bloco.

[Tela Autorização: Criptografia da nuvem, Google Drive com o botão Entrar com o Google, Dropbox com uma conta conectada, WebDAV com campos de endereço, usuário e senha]

(1)
**Criptografia da nuvem** — o mesmo bloco das telas “Sincronização” e “Backups”. A senha é definida uma vez — explicado [abaixo](#sync-password).

(2)
**Google Drive** — “Entrar com o Google” — e escolha uma conta. O orçamento vai para uma pasta “My budget” no seu Google Drive.

*Como funciona:*
Depois de entrar, uma placa da conta aparece no lugar do botão: nome, e-mail, hora da última sincronização e “Sair”. No Google Drive o app vê só o que ele mesmo criou: os outros arquivos não ficam disponíveis para ele.

(3)
**Dropbox** — “Entrar com o Dropbox” abre a página de entrada do Dropbox no navegador. Ali dá para entrar de dois jeitos: com o e-mail e a senha do Dropbox, ou com o botão “Continuar com o Google”. Permita o acesso — e o navegador traz você de volta para o app. O orçamento vai para uma pasta “My budget”.

*Por que o e-mail e a senha do Dropbox são melhores:*
Entrar com o Google amarra o Dropbox à conta Google que você usou. Um segundo aparelho, ou uma segunda pessoa com outra conta Google, facilmente vai parar em outro Dropbox, que não tem o seu orçamento. O e-mail e a senha do Dropbox funcionam igual em qualquer celular ou computador, para qualquer pessoa com quem você mantém o orçamento.

*Uma alternativa, se você não voltou para o app:*
A entrada principal — voltando do navegador — costuma bastar. Se o navegador nunca traz você de volta para o app, abra “Problemas para entrar?” → “Entrar com um código (se você não voltou para o app)”: o Dropbox mostra um código, cole-o na janela do app.

A captura mostra um Dropbox conectado: uma placa da conta com “Sair” e “Sincronizar”. O “Atualizar o token do Dropbox” ali também é uma alternativa: só para quando a entrada de repente para de funcionar.

(4)
**WebDAV** — o seu próprio servidor ou uma nuvem que fala WebDAV: Nextcloud, ownCloud, pCloud, Yandex Disk e outras. É preciso um endereço, um usuário e uma senha — sem precisar entrar numa conta pessoal.

*Como funciona:*
Se a nuvem tem a verificação em duas etapas ligada, o servidor não vai aceitar a sua senha comum: crie uma “senha de app” nas configurações da nuvem e digite essa. Comece o endereço com `https://` — com `http://` o usuário e a senha viajam como texto aberto, e o app avisa sobre isso.

**A regra principal: uma conta de nuvem para todos os aparelhos**

O celular, o tablet e o computador que mantêm um orçamento entram na nuvem com **a mesma** conta. Senão cada aparelho escreve na sua própria nuvem, e eles não veem as alterações uns dos outros.

*E se na nossa família cada um tem uma conta Google?:*
Crie uma **conta Google nova e separada** para o orçamento e entre na nuvem do app só com ela, em todos os aparelhos. Não entre na sua conta pessoal no celular da sua esposa, nem na dela no seu: o celular vai começar a sincronizar contatos, mensagens e fotos com essa conta, e os dados pessoais de duas pessoas vão se misturar. Uma conta separada para o orçamento só sabe do orçamento.

**Dropbox** — entre com o **e-mail e a senha** do Dropbox, não pelo botão “Continuar com o Google”. Entrar com o Google amarra o Dropbox à conta Google que você usou — e num aparelho com outra conta Google é fácil ir parar em outro Dropbox, que não tem o seu orçamento.

**WebDAV** — o mesmo endereço, usuário e senha em todos os aparelhos.

### Sincronização {#sync-sync}

A troca de alterações entre este aparelho e a nuvem, e através da nuvem — com os seus outros aparelhos. Lance uma compra no celular — um minuto depois ela está no computador.

[Tela Sincronização: Criptografia da nuvem, estado Sincronizado (Dropbox), escolha da nuvem Dropbox, seletores Sincronizar fotos e Backup automático na nuvem a partir deste dispositivo, botão Sincronizar]

(1)
**Criptografia da nuvem** — uma senha em tudo o que vai para a nuvem. Explicado [abaixo](#sync-password).

(2)
**Estado** — como terminou a última sincronização: “Sincronizado (Dropbox)” em verde, um erro em vermelho, com um botão “Relatar um erro”.

(3)
**Nuvem** — se várias nuvens estão conectadas, escolha com qual sincronizar. Sem nuvem — este lugar diz “Nenhuma nuvem conectada” e diz onde conectar uma.

*Como funciona:*
Todos os aparelhos sincronizam por UMA nuvem. O app também atualiza as outras nuvens conectadas a cada poucos dias — caso a principal fique indisponível.

(4)
**Sincronizar fotos** — as fotos e os PDFs das notas fiscais vão para a nuvem, para a pasta do orçamento, e aparecem nos outros aparelhos. **Logo depois da instalação:** desligado.

*Como funciona:*
Sem esse seletor, as transações chegam ao segundo aparelho com a marca de foto, mas a imagem em si não está lá. Cada foto ocupa espaço na nuvem; se você só olha as notas fiscais no celular em que os fotografou, não é preciso ligar. Com uma senha definida, as fotos sobem criptografadas.

(5)
**Backup automático na nuvem a partir deste dispositivo** — cada backup automático do orçamento também vai para a nuvem. **Logo depois da instalação:** ligado.

*Como funciona:*
Se dois aparelhos mantêm o orçamento, os dois fazem backups na nuvem — e você fica com duplicatas. Deixe o seletor ligado num aparelho e desligue nos outros. Para o backup na nuvem ter todas as fotos das notas fiscais, ligue também “Sincronizar fotos”: senão entram no backup só as fotos tiradas neste aparelho.

(6)
**Sincronizar** — sincronizar agora mesmo. Normalmente não é preciso tocar — o app faz isso sozinho, veja abaixo.

#### Quando o app sincroniza sozinho {#sync-when}

**Toda vez que você o abre** — alguns segundos depois de você voltar ao app. Por isso você quase nunca precisa começar uma sincronização à mão.

**Não quando você o minimiza** — o Android não deixa um app continuar trabalhando depois de minimizado. As alterações feitas antes de minimizar sobem na próxima vez que você abrir. Quer enviá-las na hora? Toque no ícone de sincronização no “Resumo”.

**O ícone no “Resumo”** — no canto superior direito. O número nele é quantas alterações ainda não foram enviadas para a nuvem. Tocar nele sincroniza agora.

*Como funciona:*
Depois de cada sincronização, o ícone acende por 15 segundos: verde (deu certo) ou vermelho (não deu). Uma falha isolada costuma ser a rede: o metrô, um sítio no meio do mato. Se quatro sincronizações seguidas falharem, o ícone fica vermelho até a próxima dar certo — isso quer dizer que algo quebrou, e vale a pena abrir esta tela. Segure o dedo no ícone para ver o texto do erro.

O app fica em silêncio sobre as sincronizações automáticas. A mensagem “Sincronizado” aparece só se você mesmo começou a sincronização.

#### Se algo der errado {#sync-trouble}

Na tela “Sincronização” aparece um cartão: o que aconteceu e o que fazer. Estes são os tipos.

**“O orçamento “…” já existe na nuvem com dados”** — com os botões “Da nuvem” e “Mesclar” embaixo do cartão.

**O que aconteceu.** Você conectou uma nuvem, e ela já tem um orçamento com **o mesmo nome** do orçamento deste aparelho — e os dois já têm dados. Normalmente é um segundo celular: alguém adicionou contas ou duas compras nele primeiro, e só depois conectou a nuvem do primeiro celular. O app não sabe se é um orçamento só ou dois diferentes com o mesmo nome, então não mexe em nada e espera a sua resposta. Ele pergunta uma vez — na primeira sincronização deste orçamento.

**O que escolher:**

- **É um segundo aparelho do mesmo orçamento** — toque em **“Da nuvem”**, depois em “Carregar”. Este aparelho recebe o orçamento inteiro da nuvem, e o que você lançou aqui se perde — lance de novo. Esta é a resposta de que você mais vai precisar.
- **Você de fato manteve um orçamento em dois aparelhos separadamente** e quer juntar tudo — toque em **“Mesclar”**. Tudo se soma: o que você lançou aqui e o que está na nuvem. Mas as contas e as categorias criadas em cada aparelho separadamente ficam lado a lado — duas contas “Conta corrente”, dois beneficiários “Padaria da esquina” — e você vai ter de limpar as sobras à mão.
- **São dois orçamentos diferentes** que só têm o mesmo nome — por exemplo, o seu e o da sua esposa, os dois “Meu orçamento”. Não toque em nenhum dos botões. Renomeie o orçamento neste aparelho: toque no nome do orçamento no cabeçalho do “Resumo” → o “⋮” ao lado deste orçamento → “Renomear”. Com o nome novo, ele ganha a sua própria pasta na nuvem e sincroniza à parte.

Na dúvida? Faça um backup antes: “Backups” → “Criar backup agora” → “Dispositivo”. Se a escolha estiver errada, você pode voltar a ele.

**“A nuvem está protegida por senha”** — os dados na nuvem estão criptografados com uma senha definida em outro aparelho, e aqui ela não está definida ou é diferente. Os dados estão intactos. “Digitar senha” — digite a mesma senha, e a sincronização continua.

*Como funciona:*
“Senha perdida” é o último recurso: o arquivo na nuvem é substituído pelos dados deste aparelho, e a criptografia é removida. Os dados dos outros aparelhos não se perdem — as alterações deles voltam na próxima sincronização deles. Antes de substituir, o app faz backups e guarda o arquivo criptografado antigo ao lado deles — caso você lembre a senha.

**“A nuvem não está criptografada”** — há uma senha definida neste aparelho, mas os dados na nuvem estão abertos: a criptografia foi removida em outro aparelho. Você decide: “Criptografar a nuvem” — aí os outros aparelhos vão precisar digitar a mesma senha — ou “Remover a senha aqui”.

**“O arquivo de sincronização na nuvem está ilegível”** — o arquivo na nuvem está danificado e não vai se consertar sozinho. “Reparar a nuvem” faz backups novos do orçamento e substitui o arquivo da nuvem pelos dados deste aparelho.

*Como funciona:*
As alterações de outro aparelho que ainda não tinham chegado a este ficam só no arquivo danificado — uma cópia dele é guardada ao lado dos backups. Se o segundo aparelho funciona, ele traz os dados de volta na próxima sincronização.

**“Fotos da nuvem não descriptografadas: N”** — os dados chegaram, mas as fotos não: elas estão criptografadas com uma senha que aqui não está definida ou é diferente. Defina a mesma senha do outro aparelho — as fotos chegam na próxima sincronização.

**“Conflito”** — o mesmo registro foi alterado em dois aparelhos. O cartão mostra em que as versões diferem: “Manter” fica com a versão deste aparelho, “Pegar” pega a da nuvem.

### Criptografia da nuvem: a senha {#sync-password}

O bloco “Criptografia da nuvem” vem primeiro nas telas “Autorização”, “Sincronização” e “Backups”. É uma única e mesma senha.

**O que ela fecha** — tudo o que vai para a nuvem: os backups, as fotos das notas fiscais e o arquivo de sincronização. A criptografia é AES-256. Sem senha, qualquer pessoa com acesso à pasta da nuvem consegue ler esses arquivos.

**Como definir** — toque em “Definir senha”.

*Passo a passo:*
1. Abre a janela “Senha de criptografia”.
2. Digite a senha em “Senha” e de novo em “Repita a senha” — pelo menos 4 caracteres.
3. Marque “Anotei a senha em um lugar seguro” — sem isso, não dá para tocar em “Salvar”.
4. “Salvar”. O bloco vira “A nuvem está protegida por senha”.

**Nos outros aparelhos** — defina **a mesma** senha. A senha não sincroniza e não vai nem para a nuvem nem para o desenvolvedor — ela fica só no aparelho. Com senhas diferentes, a sincronização para com o cartão “A nuvem está protegida por senha”.

**Esqueceu a senha, e ninguém recupera os backups da nuvem.** Nem você, nem o desenvolvedor, de jeito nenhum. Anote-a onde você guarda as suas outras senhas importantes.

**Mudar ou remover** — no bloco, toque em “Editar” — “Alterar a senha” ou “Desligar a criptografia”. Mude a senha em todos os aparelhos: se um ficar com a antiga, ele deixa de conseguir ler a nuvem.

**Os backups no celular não são criptografados** — eles ficam ao lado do próprio banco de dados do orçamento, e esse é aberto. Por isso, com uma senha definida, os backups “Dispositivo” da lista levam o rótulo “Sem criptografia” — para você não achar que está tudo fechado.

### Backups {#sync-backups}

Um backup é o orçamento inteiro num momento: contas, categorias, transações, metas, pagamentos programados e fotos. O app faz backups sozinho; você vem aqui quando precisa voltar.

[Tela Backups: Criar backup agora, Último backup, Criptografia da nuvem, Agenda de backups, filtros Todas, Dispositivo, Dropbox, uma lista de sete backups]

(1)
**Criar backup agora** — um backup agora mesmo, por exemplo antes de uma importação ou de uma grande limpeza. O app pergunta “Onde salvar o backup?” — captura [abaixo](#sync-where).

(2)
**“Último backup”** — quando foi feito o backup mais recente deste orçamento. Se faz tempo, a linha fica amarela.

(3)
**Criptografia da nuvem** — a mesma senha da “Sincronização” — [acima](#sync-password).

(4)
**Agenda de backups** — com que frequência o app faz backups e quantos guarda. Toque para abrir — [abaixo](#sync-schedule).

(5)
**Filtros** — “Todas”, “Dispositivo” e um chip para cada nuvem conectada. O número é quantos backups há ali. Sem nuvens conectadas — sem filtros: não há o que filtrar.

(6)
**Backup** — data e hora, onde está, que tipo é e de qual orçamento.

*Como funciona:*
Embaixo da data — onde está (“Dispositivo”, “Dropbox”…) e o tipo: “Auto, frequente”, “Auto, espaçada” ou “Manual”. Embaixo — o nome do orçamento, quantos registros, fotos e PDFs há no backup, e o tamanho do arquivo.

O ícone de relógio com seta — **voltar o orçamento a este backup**. A lixeira — excluir o backup (o app pergunta de novo).

(7)
**O menu “⋮”** — “Restaurar de um arquivo”, “Cópia legível”, “Dicas” — [abaixo](#sync-menu).

#### Como voltar o orçamento a um backup {#sync-back}

1. Encontre o backup do dia de que você precisa. Na dúvida? Pegue o último antes de as coisas darem errado.
2. Toque no ícone de relógio com seta na linha dele.
3. A janela “Restaurar os dados?”: “Os dados serão restaurados … Os dados atuais serão substituídos.” — toque em “Restaurar”.
4. Embaixo aparece “Restaurado de …”. O orçamento agora está como estava no momento do backup.

**Se há uma nuvem conectada, uma restauração só não basta.**

Um backup é restaurado para se livrar de alterações recentes: excluiu a conta errada, importou o arquivo errado. Mas a restauração muda o orçamento só neste celular. A nuvem ainda tem o orçamento com essas mesmas alterações, e ao sincronizar o app junta o celular e a nuvem, e vence a alteração mais recente. Toque em “Sincronizar” — e tudo de que você estava se livrando volta da nuvem em meio minuto.

Para a volta pegar, a nuvem precisa ser substituída pelo orçamento restaurado. Como — abaixo.

#### Voltar a nuvem também {#sync-rollback}

O orçamento está num celular só — estes passos bastam. A ordem importa.

1. **Restaure o backup** — os passos acima. Depois disso, **não toque em “Sincronizar”**.
2. **Saia do app** com o botão Início. Enquanto o app está minimizado, ele não sincroniza.
3. **Apague o arquivo de sincronização na nuvem.** Abra a nuvem num navegador: a pasta “My budget” → a pasta com o nome do orçamento → o arquivo `ynab_budget_sync.json`. Apague só ele — deixe as pastas de backups e de fotos em paz. No Dropbox, a pasta “My budget” fica dentro de “Aplicativos” → “My Budget Envelopes”.
4. **Volte ao app.** Alguns segundos depois ele sincroniza sozinho, não encontra arquivo na nuvem e coloca lá o orçamento restaurado. A tela “Sincronização” deve dizer “Sincronizado”.

*Por que restaurar primeiro e apagar o arquivo depois:*
Toda vez que você volta ao app, ele sincroniza alguns segundos depois. Apague o arquivo primeiro, e ao voltar do navegador o app logo coloca na nuvem o orçamento atual — ainda com aquelas alterações. Aí você teria de começar tudo de novo.

#### Se vários aparelhos mantêm o orçamento {#sync-rollback-devices}

O segundo celular e o computador também têm aquelas alterações. Na sincronização eles as devolveriam à nuvem, e de lá — de volta para você. Por isso cada um dos outros aparelhos precisa esquecer os seus dados e pegar o orçamento da nuvem de novo — antes de ter a chance de sincronizar.

1. Volte o orçamento e a nuvem num aparelho — os passos acima.
2. No outro celular, **ligue o modo avião** e só depois abra o app: sem rede, ele não sincroniza.
3. “Configurações” → “Sobre” → “Redefinir todos os dados”.
4. **Desligue o modo avião.** O app sincroniza e carrega da nuvem o orçamento já voltado.

Num computador — o mesmo: desconecte da internet antes de abrir o programa, redefina os dados nas configurações, conecte de novo. As alterações nesses aparelhos que ainda não tinham chegado à nuvem se perdem com a redefinição.

#### Agenda de backups {#sync-schedule}

O app faz um backup sozinho quando chega a hora — quando você abre o app e quando troca para outro orçamento. Cada orçamento tem a sua agenda. Há dois tipos de backup: os frequentes — para voltar alguns dias, e os espaçados — para voltar meses.

[Agenda de backups no modo Personalizado: backups frequentes a cada 5 dias, guardar 7; espaçados uma vez por mês, guardar 12; Quão longe para trás: frequentes cerca de 35 dias, espaçados até 12 meses]
**“Personalizado”.** As mesmas escolhas do “Padrão”.

**Padrão** — backups frequentes a cada 5 dias, os últimos 7 ficam guardados — são uns 35 dias para trás; espaçados — uma vez por mês, 12 ficam guardados — até um ano para trás.

**Personalizado** — frequentes — todo dia ou a cada 2, 3, 5, 7 dias, guardar 3, 5, 7, 10, 14 ou 30; espaçados — uma vez por mês ou uma vez por trimestre, guardar 3, 4, 6, 12 ou 24 — ou “Não fazer”.

**“Quão longe para trás”** — o app calcula quantos dias e meses para trás dá para voltar com a agenda escolhida.

**Avisos** — se os backups frequentes acabam antes de começar um espaçado, o app mostra “Entre … e … dias pode não haver cópias” com botões que fecham o buraco. Escolha “Não fazer” para os espaçados, e ele avisa que não vai haver backups com mais de alguns dias.

**Os backups velhos são apagados** — se você diminuir quantos guardar, os backups a mais são apagados no próximo backup automático — tanto no celular quanto na nuvem. Por isso o “Salvar” pergunta antes: quantos vão ser apagados, e a data do mais antigo.

**Backups manuais** — ficam guardados sem limite: a agenda não mexe neles. A agenda vale para este aparelho e não sincroniza.

**O backup automático falhou duas vezes seguidas** — aparece no “Resumo” um aviso “O backup automático falha” com o motivo (por exemplo, falta de espaço) e um botão “Fazer backup”.

#### “Onde salvar o backup?” {#sync-where}

“Criar backup agora” pergunta isto.

[Folha Onde salvar o backup: Dispositivo, Arquivo no telefone, Google Drive, Dropbox, WebDAV]

**Dispositivo** — para a pasta de backups do app. O backup aparece na lista.

**Arquivo no telefone** — escolha uma pasta — por exemplo “Downloads” — e salve o backup como arquivo. Dá para mandá-lo para você mesmo ou colocá-lo num computador. Com uma senha definida, o arquivo é criptografado.

**Google Drive, Dropbox, WebDAV** — o backup vai direto para a nuvem. A nuvem não está conectada? O app diz onde conectá-la.

#### O menu “⋮” {#sync-menu}

[Menu da tela Backups: Restaurar de um arquivo, Cópia legível, Dicas, Central de ajuda]

[Folha Cópia legível: Arquivo compactado com fotos e PDF, Só os dados, Um arquivo da nuvem]

(A)
#### Restaurar de um arquivo

voltar o orçamento a partir de um arquivo de backup que não está na lista: baixado da nuvem, enviado para você mesmo, salvo em “Downloads”.

*Como funciona:*
Servem um backup (`.y4zip`), uma “Cópia legível” e até o arquivo de sincronização `ynab_budget_sync.json` baixado da nuvem num navegador. Se o arquivo estiver criptografado, o app pede a senha. Se o backup for de outro orçamento (sem nenhuma conta em comum), o app pergunta de novo: “Parece que é outro orçamento”. Um arquivo do YNAB 4 não vai aqui — ele passa pelo “Importar do YNAB” nas configurações.

(B)
#### Cópia legível

os seus dados como um arquivo que qualquer programa abre, sem senha. Guarde-o onde estranhos não vão olhar.

*Como funciona:*
Três opções:

- **Arquivo compactado com fotos e PDF** — este orçamento inteiro; qualquer descompactador abre.
- **Só os dados** — este orçamento num único arquivo de texto; qualquer editor de texto abre. As notas fiscais eletrônicas estão lá, as fotos e os PDFs não.
- **Um arquivo da nuvem** — tirar a senha e a compressão de um arquivo de sincronização ou de um backup da nuvem que você baixou num navegador.

É um caminho até os seus dados que passa por fora do app: mesmo sem o app, o orçamento continua seu.

(C)
#### Dicas

as dicas desta tela em forma de lista.

(D)
#### Central de ajuda

Este artigo no site: abre no navegador, no idioma do app.

### Carregar um orçamento da nuvem {#sync-restore}

Um celular novo, uma reinstalação ou um segundo aparelho. O orçamento está na nuvem com o nome dele; esta tela o encontra e o carrega aqui. A opção “Já tenho um orçamento” do assistente do primeiro uso abre esta mesma tela.

[Tela Carregar orçamento da nuvem: passo 1 Conecte uma nuvem com um botão Conectar, passo 2 Nome do orçamento]

(1)
**Conecte uma nuvem** — o mesmo do primeiro aparelho: o mesmo Google Drive, Dropbox ou WebDAV e **a mesma conta**.

(2)
**Escolha um orçamento** — o app mostra os orçamentos da nuvem com a data da última sincronização. Toque no seu e em “Carregar orçamento”.

*Como funciona:*
Sem lista, ou o seu orçamento não está nela? Toque em “Digitar o nome à mão” e digite o nome exatamente como ele se chama no primeiro aparelho: o nome do orçamento é o endereço da pasta dele na nuvem. Maiúsculas e minúsculas não importam. O nome aparece no cabeçalho do “Resumo” no primeiro aparelho.

Se este aparelho já tem dados, o app pergunta de novo: “Substituir os dados pelos da nuvem?”: tudo o que não está na nuvem se perde.

**Senha** — se há uma senha definida no primeiro aparelho, defina a mesma aqui. Sem ela, a sincronização para, e as fotos das notas fiscais chegam, mas não abrem.

### Transferência local: sem nuvem {#sync-local}

Passar um orçamento entre os seus próprios aparelhos diretamente — como arquivo ou pelo Wi-Fi. Sem internet e sem contas. É uma transferência única, não uma sincronização contínua.

[Tela Transferência local: um bloco Arquivo com botões Exportar e Importar, um bloco WiFi com os papéis de enviar e receber]

(1)
**Arquivo** — “Exportar” — os dados do orçamento como arquivo: mande por um mensageiro, por e-mail ou num pen drive. No outro aparelho — “Importar” e escolha esse arquivo.

*Como funciona:*
A importação **junta** os dados do arquivo com o que já existe, e se o mesmo registro for diferente, ela fica com a versão do arquivo. As fotos não vão no arquivo. Para passar tudo, inclusive as fotos — o Wi-Fi ou um [backup](#sync-backups) (“Arquivo compactado com fotos e PDF”).

(2)
**WiFi (rede local)** — os dois aparelhos na mesma rede Wi-Fi. Um envia os dados, o outro os recebe e, com “Mesclar”, manda de volta as suas alterações. As fotos também passam.

*Como funciona:*
1. No aparelho que envia: “Iniciar o servidor”. Aparecem um QR code e um “Código de confirmação” de 6 dígitos.
2. No que recebe: “Escanear o QR” — o código preenche os dois campos. Ou digite o endereço IP e o código à mão.
3. “Receber os dados”. O app pergunta “Como aplicar os dados?”: “Mesclar” — como uma sincronização de mão dupla comum: as alterações deste aparelho também vão para o que envia, nada se perde; “Substituir por completo” — este orçamento vira uma cópia exata do que envia, e tudo o que não foi sincronizado aqui se perde. “Substituir” é para um aparelho novo.
4. No aparelho que envia — “Parar o servidor”.

A transferência é criptografada com o código de confirmação, e o próprio código nunca vai pela rede.

## Configurações {#settings}

O que cada linha faz e como ela está logo depois da instalação.

*A engrenagem no canto superior esquerdo do “Resumo”*

As seções estão na ordem de quanto você precisa delas: as mais frequentes no alto.

### Planejamento {#settings-s-plan}

Tudo o que se repete: pagamentos regulares e lembretes.

[Seção Planejamento: Pagamentos programados, Lembretes]

**Pagamentos programados** — aluguel, assinaturas, salário — tudo o que se repete. No dia, o app oferece lançar o pagamento com um toque, e o “O que vem” no “Resumo” mostra os próximos.

**Lembretes** — quando e sobre o que o app avisa você. Uma tela própria — [abaixo](#settings-reminders).

#### A tela “Lembretes” {#settings-reminders}

[Tela Lembretes: Pagamentos programados, Gastos do dia, Resumo semanal, Todos os lembretes]

**Pagamentos programados** — “Quando lembrar” — no dia do pagamento, 1, 2 ou 3 dias antes, ou uma semana antes; “Horário do lembrete”; “Ocultar valores nas notificações” — o lembrete aparece na tela de bloqueio, e sem isso qualquer pessoa que pegar o celular consegue ler o valor. **Logo depois da instalação:** na véspera, às 9:00, valores visíveis.

**Gastos do dia** — “Lembrar de adicionar os gastos” — à noite, se você não lançou nada hoje. Se lançou, ele fica em silêncio. **Logo depois da instalação:** desligado, às 21:00.

**Resumo semanal** — “Enviar resumo” — no último dia da semana: quanto foi gasto e com o que mais, quais categorias estão acabando, quais pagamentos programados vêm aí. **Logo depois da instalação:** desligado.

**Todos os lembretes** — “Lembretes no horário exato”. Sem permissão, o Android pode entregar um lembrete com atraso. O seletor abre as configurações do Android onde essa permissão é dada.

### Dados {#settings-s-data}

As listas do orçamento e a troca de dados com outros programas.

[Seção Dados: Beneficiários, Tags, Exportar para CSV, Importar do YNAB, Caixa de entrada]

**Beneficiários e Tags** — listas que se formam sozinhas conforme você lança transações. Tudo sobre elas — no artigo [“Beneficiários e tags”](#payees-tags).

**Exportar para CSV** — todas as transações do orçamento atual como um arquivo de planilha — para abrir no Excel ou no Planilhas Google.

*Mais:*
O arquivo tem tudo o que uma transação tem: data, conta, beneficiário, categoria e o grupo dela, valor e moeda, “compensado”, nota, as partes de um valor dividido, transferência, tags, marcador, notas fiscais eletrônicas, o mês do orçamento (para um salário lançado “para o mês seguinte” — o mês para o qual ele foi separado), e, numa transferência entre moedas — quanto chegou, em que moeda e a que taxa. Só as fotos e os PDFs não são exportados: são arquivos no celular.

Os nomes das colunas são em inglês (`date`, `amount`, `tags`…) e não dependem do idioma do app: assim as fórmulas e as tabelas dinâmicas não quebram se você mudar o idioma. Os números no arquivo são sempre os reais, mesmo com “Ocultar valores” ligado. O separador dos campos segue o formato dos números, então a tabela abre em colunas, e não numa linha só.

**Importar do YNAB** — passar um orçamento do YNAB 4 (um arquivo .y4backup) ou do YNAB web (uma exportação .zip): contas, categorias e todo o histórico. Depois da importação, um glossário mostra como se chama aqui cada termo do YNAB.

**Caixa de entrada** — no caixa, só o valor; a conta e a categoria você escolhe depois. Como funciona — no artigo [“Formulário de transação”](#entry). **Logo depois da instalação:** desligado.

### Sincronização {#settings-s-sync}

A nuvem, os backups e a passagem de um orçamento entre aparelhos. Aqui, rapidamente, o que fica onde; em detalhe — o artigo [“Nuvem e backups”](#sync).

[Seção Sincronização: Autorização, Sincronização, Backups, Carregar orçamento da nuvem, Transferência local]

**Autorização** — conectar uma nuvem: Google Drive, Dropbox ou WebDAV. A regra principal: todos os aparelhos que mantêm este orçamento usam **a mesma conta de nuvem**, senão não se enxergam.

*Mais:*
**Se as pessoas da família têm contas Google diferentes**, crie uma **conta Google nova e separada** para o orçamento e entre na nuvem do app só com ela, em todos os aparelhos. Não entre na sua conta pessoal no celular da sua esposa, nem na dela no seu: o celular vai começar a sincronizar contatos, mensagens e fotos com essa conta, e os dados pessoais de duas pessoas vão se misturar. Uma conta separada para o orçamento só sabe do orçamento.

**Dropbox** — entre com o **e-mail e a senha** do Dropbox, não pelo botão “Continuar com o Google”. Entrar com o Google amarra o Dropbox à conta Google que você usou — e num aparelho com outra conta Google é fácil ir parar em outro Dropbox, que não tem o seu orçamento. O e-mail e a senha do Dropbox funcionam igual em qualquer aparelho.

**WebDAV** — uma nuvem que o suporte (Nextcloud, ownCloud, pCloud e outras) ou o seu próprio servidor; o mesmo endereço, usuário e pasta em todos os aparelhos.

**Sincronização** — a troca de alterações com a nuvem e com os outros aparelhos; também a senha que criptografa a nuvem, e o registro da sincronização.

**Backups** — cópias do orçamento: automáticas conforme uma agenda e manuais, no celular e na nuvem. Também daqui — uma “Cópia legível” como arquivo.

**Carregar orçamento da nuvem** — um celular novo ou uma reinstalação — o orçamento volta da nuvem ou de um arquivo de backup.

**Transferência local** — passar um orçamento entre os seus aparelhos pelo WiFi ou como arquivo — sem nuvem.

### Orçamento {#settings-s-budget}

As configurações do orçamento atual.

[Seção Orçamento: Moeda do orçamento, Categorias de “Pague-se primeiro”, Idade do dinheiro]

**Moeda do orçamento** — o símbolo em que você mantém o orçamento. Só para este orçamento; o app não converte valores — muda só o símbolo.

**Categorias de “Pague-se primeiro”** — quais categorias contam como “separado para você mesmo” — normalmente as reservas. Sem nenhuma escolhida, o bloco “Pague-se primeiro” não aparece no “Resumo”. O que ele mostra — no artigo [“Resumo”](#overview).

**Idade do dinheiro** — como calculá-la: três jeitos. Uma tela própria — [abaixo](#settings-aom).

#### A tela “Idade do dinheiro” {#settings-aom}

[Tela Como calcular a idade do dinheiro: Clássico YNAB FIFO, Considerando as reservas, Com reservas e profundidade do negativo]

Os três jeitos estão descritos na própria tela. Qual fica mais perto da verdade e por quê, com exemplos — no artigo [“Resumo”](#overview), seção “Idade do dinheiro em detalhe”. Em resumo: **“Considerando as reservas”** conta exatamente o dinheiro que está nas suas contas. **Logo depois da instalação:** “Clássico (YNAB FIFO)”.

### Segurança {#settings-s-security}

Um cadeado no app.

[Seção Segurança: PIN]

**PIN** — o app pede ao abrir. Depois de definido um PIN, aparece embaixo o “Desbloqueio biométrico” — a digital ou o rosto em vez dos números.

*Mais:*
Sem PIN, a biometria não pode ser ligada: sem ele não há cadeado. Enquanto há um PIN, o cartão do app na lista de apps abertos fica coberto, e olhos curiosos não veem os seus saldos ali (no Android 13 e mais novos).

### Aparência {#settings-s-look}

Duas telas: o idioma com os formatos, e toda a aparência do app.

[Seção Aparência: Idioma e formatos, Aparência]

**Idioma e formatos** — o idioma da interface, a aparência dos valores e das datas, como digitar um valor. A tela — [abaixo](#settings-formats).

**Aparência** — tema, estilo, fonte, ícones e a aparência de uma linha de transação. A tela — [abaixo](#settings-appearance).

#### A tela “Idioma e formatos” {#settings-formats}

[Tela Idioma e formatos: Idioma da interface, Formato dos valores, Digitação do valor, Teclado do valor, Formato de data]

**Idioma da interface** — treze idiomas; “Padrão do sistema” é o idioma do celular. O idioma fica neste aparelho e não sincroniza: o celular pode estar em inglês e o computador em alemão.

**Formato dos valores** — os separadores de milhar e decimal, de que lado fica o símbolo da moeda. Por padrão — como é costume no idioma escolhido: “R$ 1.234.567,89”.

**Digitação do valor** — “Com vírgula” ou “A partir dos centavos, como na maquininha” (1-2-5-0 quer dizer 12,50). **Logo depois da instalação:** com vírgula.

**Teclado do valor** — “Para a mão direita” — os dígitos à direita, as operações à esquerda; “Para a mão esquerda” — o contrário. **Logo depois da instalação:** para a mão direita.

**Formato de data** — ordem, separador, mês em número ou por extenso — 24 opções para escolher.

#### A tela “Aparência” {#settings-appearance}

[Tela Aparência: Tema, Estilo, Cantos, Cores de receitas e gastos, Fonte, Densidade, Ícones, Cor dos valores, Forma do marcador, Voltar para]

**Tema** — “Sistema”, “Claro” ou “Escuro”. “Sistema” segue o celular.

**Estilo** — o caráter de cores do app: “Clássico”, “Neon”, “Aurora”, “Ácido”, “Doce”, “Marshmallow”, “Grafite”. Cada um tem uma versão clara e uma escura.

**Cantos** — “Retos”, “Normais” ou “Suaves” — os cantos dos cartões, botões e chips. Independente do estilo.

**Cores de receitas e gastos** — “Padrão” — receitas em verde, gastos em vermelho. “Reforçadas” — receitas em azul: para quem tem dificuldade de distinguir o verde do vermelho.

*Mais:*
Cerca de um homem em cada doze e uma mulher em cada duzentas veem as cores de outro jeito. Há três tipos:

- **deuteranopia** — percepção mais fraca do verde; a mais comum;
- **protanopia** — percepção mais fraca do vermelho;
- **tritanopia** — o azul e o amarelo se confundem; muito rara.

Nas duas primeiras, o verde e o vermelho se fundem num tom parecido de marrom, e a receita não se distingue do gasto pela cor. As duas veem bem o azul — por isso, nas “Reforçadas”, as receitas são azuis.

**O que mais o app faz por essas pessoas — já, sem configuração nenhuma:**

- todo valor tem um sinal “+” ou “−”: o sentido de uma transação aparece sem cor nenhuma (e logo depois da instalação os valores das transações nem têm cor);
- o gasto excedido fala não só com a cor, mas também com um ícone: uma carteira — você gastou o seu próprio dinheiro, um cartão — você entrou na dívida do cartão de crédito;
- uma sincronização que falhou muda não só a cor do ícone, mas também o desenho — aparece um “!” dentro;
- as cores dos gráficos dos relatórios são escolhidas para que fatias vizinhas difiram também no brilho, não só no tom.

**O que as “Reforçadas” mudam:** receitas em azul em todo lugar — nos valores, no cabeçalho do formulário de receita, nos gráficos e na tabela “Receitas e despesas”; as cores dos marcadores das transações se afastam pelo brilho; os gráficos dos relatórios e o “Fluxo de dinheiro” usam um conjunto de cores próprio. Cada conjunto é conferido com os três tipos durante o desenvolvimento.

As “Reforçadas” ajudam também quem distingue bem as cores, mas olha a tela sob sol forte.

**Fonte** — a fonte do sistema ou uma de sete: “Fira Sans”, “Geologica”, “IBM Plex Sans”, “Inter”, “Manrope”, “Noto Sans”, “Source Sans 3” — para toda a interface.

**Densidade** — “Compacta”, “Normal” ou “Espaçosa” — o espaço entre as linhas e os blocos. O tamanho das letras não muda.

**Ícones** — “Normais” ou “Bicolores”.

**Cor dos valores** — se colorir os valores nas listas de transações: “Sem cor”, “Somente receitas” ou “Gastos e receitas”.

*Mais:*
**Logo depois da instalação — “Sem cor”**, e todas as capturas deste guia foram feitas assim. Por quê: o vermelho é a cor do alarme, e comprar pão não merece alarme; quando toda linha brilha em vermelho, a cor deixa de dizer alguma coisa. O sinal mostra o sentido de uma transação: “−” para gasto, “+” para receita. Quer cor? Escolha “Gastos e receitas” ou “Somente receitas”.

O gasto excedido de uma categoria, a dívida e o estado da sincronização continuam coloridos, seja qual for a escolha: ali a cor é um aviso.

**Forma do marcador** — “Ponto”, “Bandeirinha triangular” ou “Bandeira ondulada” — como o marcador aparece nas linhas de transação.

**Voltar para** — “Resumo” — depois de uma pausa de mais de 30 segundos e ao abrir, abre o “Resumo”; “Onde você parou” — a mesma tela, mesmo com um formulário aberto. O PIN é pedido nos dois casos.

### Ajuda e contato {#settings-s-help}

As dicas e o contato com o desenvolvedor.

[Seção Ajuda e contato: Dicas, Central de ajuda, Bate-papo no Telegram, Relatar um erro, Sugerir uma melhoria]

**Dicas** — todas as dicas do app em lista, por tela. E também “Mostrar as dicas de novo”. As dicas de uma tela também são abertas pelo item “Dicas” do menu “⋮” dela.

**Central de ajuda** — artigos sobre cada tela no site, no idioma do app; o item abre a página inicial. O artigo de uma tela é aberto pelo item “Central de ajuda” do menu “⋮” dela.

**Bate-papo no Telegram** — um grupo onde as perguntas são respondidas e onde dá para perguntar a outros usuários.

**Relatar um erro** — um e-mail para o desenvolvedor. As versões do app e do aparelho se preenchem sozinhas; dá para anexar o registro de eventos do “Sobre”.

**Sugerir uma melhoria** — um e-mail com uma ideia: o que está incômodo agora e como você gostaria que fosse.

### Sobre {#settings-s-about}

Uma linha, e atrás dela uma tela com a versão, os documentos e os itens de serviço.

[Seção Sobre]

**Sobre** — a tela — [abaixo](#settings-about-screen).

#### A tela “Sobre” {#settings-about-screen}

[Tela Sobre: Versão, Versão para Windows, Compartilhar o app, Política de privacidade, Licença, Registro de eventos, Redefinir todos os dados]

**Versão** — o número da versão; toque nele para ver as “Novidades”: o que mudou nas últimas versões.

**Versão para Windows** — o mesmo orçamento num computador — na Microsoft Store.

**Compartilhar o app** — mandar um link para o app no Google Play.

**Política de privacidade e Licença** — documentos. Em resumo: os seus dados são seus, e o desenvolvedor não tem acesso a eles.

**Registro de eventos** — os erros do app e da sincronização. Útil se você vai escrever sobre um problema.

**Redefinir todos os dados** — apagar todas as contas, categorias, transações, pagamentos programados e metas. O app pergunta de novo: “Redefinir todos os dados?”. Isso não pode ser desfeito.

*Mais:*
Se a sincronização está conectada, os dados voltam da nuvem na próxima sincronização. Para apagar de vez, desconecte a nuvem ou apague o arquivo de sincronização nela. Antes de redefinir, faça uma cópia em “Backups”.
