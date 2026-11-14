# O meu orçamento — Centro de ajuda

## O que a aplicação faz {#about}

«O meu orçamento» não é um caderno de despesas — é um orçamento completo pelo método dos envelopes. Faz muita coisa, e quase nada está escondido no fundo dos menus: está em gestos e pequenos pormenores. Esta página é uma visita rápida; depois, cada ecrã tem o seu próprio artigo.

### O essencial {#about-main}

Anotar despesas responde à pergunta «para onde foi o dinheiro». Um orçamento responde a uma mais importante: **«para que é que ainda chega»** — hoje, até ao ordenado, até às férias.

##### Envelopes

Cada euro recebe uma tarefa: supermercado, renda, férias. Vê quanto resta em cada envelope, e a despesa excedida fica vermelha de imediato. Mais em [«Como funciona o orçamento»](#start).

##### Os seus dados são seus

O orçamento vive no seu telemóvel e na sua nuvem. O programador não tem acesso a ele. A nuvem pode ser fechada com palavra-passe — AES-256. Mais em [«Nuvem e cópias de segurança»](#sync-password).

##### Vindo do YNAB

Contas, categorias e todo o histórico do YNAB 4 ou do YNAB web chegam como ficheiro, e um pequeno glossário mostra como se chamam aqui os termos conhecidos. Mais em [«Primeiros passos»](#first-steps).

### Registo rápido {#about-input}

É mais fácil registar uma compra na caixa do que lembrar-se dela à noite. Por isso há várias maneiras.

##### Para a caixa de entrada

Sem tempo na caixa para escolher categoria e conta? Introduza só o valor. O botão «Para a caixa de entrada» guarda a transação com a marca «Organizar», e em casa o formulário abre essas transações uma a uma. Ative em «Definições → Dados → Caixa de entrada». Mais em [«Formulário de transação»](#entry-inbox).

##### Por voz

«Continente 70 Supermercado da conta Conta à ordem» — e o formulário fica preenchido. Mais em [«Introdução por voz»](#voice).

##### A partir do recibo

Aponte a câmara ao código QR do recibo — o valor e a data preenchem-se sozinhos, e a partir da segunda vez a aplicação reconhece a loja pela caixa registadora. Funciona onde a aplicação sabe ler os recibos do seu país. Mais em [«Leitor de recibos»](#receipt).

##### A partir do ecrã principal

Widgets e atalhos abrem o formulário com um toque, sem entrar na aplicação. Mais em [«Widgets e atalhos»](#widgets).

##### Teclado de calculadora

Os valores introduzem-se no teclado da própria aplicação, com soma e subtração, repartidos por várias categorias, transferidos entre contas — até em moedas diferentes. Mais em [«Formulário de transação»](#entry).

### Planos {#about-plans}

##### Metas

Cinco tipos: por mês, até uma data, manter um saldo, percentagem do rendimento e lista de compras. A aplicação calcula quanto pôr de lado. Mais em [«Metas»](#goals).

##### Pagamentos programados

Renda, subscrições, prestações de empréstimos — com lembrete antecipado e registados com um toque. Mais em [«Pagamentos programados»](#scheduled).

##### Cartões de crédito e dívidas

O dinheiro para pagar o cartão de crédito é posto de lado sozinho, e vê a dívida mês a mês. Mais no cenário [«Cartões de crédito e dívidas»](#scenario-credit).

##### Tags e «quem deve a quem»

Uma viagem, uma obra, despesas partilhadas com amigos — a tag junta tudo de categorias diferentes e calcula quem deve a quem. Mais em [«Beneficiários e tags»](#payees-tags).

### Relatórios {#about-reports}

Dez relatórios: para onde foi o dinheiro, tendência e desvio do habitual, fluxo do dinheiro do rendimento às despesas, receitas e despesas por mês, idade do dinheiro, património, dívida dos cartões. E o «Resumo» é o seu ecrã inicial: escolhe os blocos e organiza-os à sua maneira. Mais em [«Relatórios»](#reports) e [«Resumo»](#overview).

### Dispositivos e nuvem {#about-devices}

Um orçamento no telemóvel, no tablet e no computador com Windows — a dois ou para toda a família. Sincronização pelo Google Drive, Dropbox ou WebDAV — Nextcloud, ownCloud, pCloud, o seu próprio servidor; as cópias de segurança fazem-se sozinhas, segundo um calendário. Mais nos cenários [«Um orçamento em vários dispositivos»](#scenario-devices) e [«Duas ou mais pessoas, um orçamento»](#scenario-together).

### À sua medida {#about-yours}

Treze idiomas, sessenta moedas, formatos de valores e datas do seu país. Sete estilos em claro e escuro, tipos de letra, densidade, cantos, ícones. Vários orçamentos: pessoal, da família, do trabalho. Mais em [«Definições»](#settings).

### Por onde começar {#about-start}

1. [«Como funciona o orçamento»](#start) — o método dos envelopes em dez minutos.
2. [«Primeiros passos»](#first-steps) — da instalação ao primeiro mês.
3. [Cenários](#scenario-paycheck) — respostas prontas: de ordenado em ordenado, trabalho independente, cartões de crédito, viagem com amigos.

## Como funciona o orçamento {#start}

O método dos envelopes em dez minutos: por onde entra o dinheiro, como reparti-lo e o que acontece na passagem do mês.

### Envelopes: a ideia principal {#start-idea}

Imagine que levantou o ordenado em dinheiro e o repartiu por envelopes: «Supermercado», «Contas de casa», «Férias». Quando compra comida, tira dinheiro só desse envelope. Envelope vazio quer dizer que acabou o dinheiro para isso. A aplicação faz exatamente isto, só que sem papel.

(1)
##### O dinheiro nas contas

Conta à ordem — 1700 €

Dinheiro — 200 €

(2)
##### «Não alocado»

1900 € — ainda sem tarefa

(3)
##### Envelopes das categorias

Supermercado — 550 €

Contas de casa — 170 €

…e assim por diante, até chegar a 0

(4)
##### A despesa

Comprou pão — o envelope «Supermercado» ficou mais magro

Cada euro das suas contas está exatamente num sítio: ou nalgum envelope, ou em «não alocado». Por isso, a qualquer momento vê o que ainda pode pagar e o que não pode. O primeiro objetivo é levar «não alocado» a zero: aí **cada euro tem uma tarefa**. Isto não é a meta final, mas o primeiro passo — para onde o método leva a seguir está [no fim do artigo](#start-ladder).

Em que isto difere do habitual «registo de despesas», veja [mais abaixo](#start-vs).

### Em que difere do registo de despesas {#start-vs}

Muita gente regista as despesas durante anos — num caderno, numa folha de cálculo, na aplicação do banco — e mesmo assim não percebe porque é que o dinheiro acaba antes do mês. O registo de despesas conta o passado com honestidade. Os envelopes ajudam a conduzir o futuro.

|  | Registo de despesas | Orçamento por envelopes |
|---|---|---|
| Quando pensa no dinheiro | Depois da despesa: vê para onde foi. | Antes da despesa: decide quanto pode gastar. |
| A pergunta principal | «Para onde foi o dinheiro?» | «O que é que ainda posso pagar?» |
| Despesa excedida | Descobre no fim do mês, quando já é tarde. | Vê-a logo: o envelope fica vermelho no momento da compra — e passa dinheiro de outro. |
| O dinheiro no banco | Um só número: «há 1400 € na conta, portanto tenho dinheiro». | Repartido por tarefas: uma parte já está prometida à renda, outra às férias. Livre é só o que está no envelope certo. |
| O ordenado | Só uma entrada que «de alguma forma se gasta». | Dinheiro a que dá uma tarefa logo à partida. |
| Despesas irregulares | O seguro ou uma reparação caem do céu. | Põe de lado um pouco todos os meses — quando chega a conta, o dinheiro já lá está. |

(1400 €)
#### Exemplo: «ainda há bastante na conta»

Estamos a meio do mês e há 1400 € na conta. Quer uns auscultadores de 280 €.

*Como funciona:*
**O registo de despesas** vê 1400 € e diz: «força». Mas a renda vence daqui a uma semana — 800 €, mais as contas de casa e a comida até ao ordenado. Os auscultadores estão comprados, e falta para a renda.

**Os envelopes** veem os mesmos 1400 €, mas repartidos: «Renda» — 800 €, «Contas de casa» — 170 €, «Supermercado» — 260 €, «Lazer e hobbies» — 170 €. Para os auscultadores estão livres 170 €. Quer comprá-los já? Decida de que envelope saem os 110 € que faltam. A decisão é sua, e toma-a antes da compra, não depois.

(?)
#### Então aqui não há registo de despesas?

Há — e mais detalhado do que num caderno.

*Como funciona:*
Cada compra fica registada, e «Para onde foi o dinheiro», «Gastos do mês» e os relatórios mostram para onde foi tudo. Só que aqui isso não é o objetivo, mas a verificação do plano: o que decidiu coincidiu com o que aconteceu? No mês seguinte vai orçamentar com mais precisão.

(↻)
#### Em resumo

O registo de despesas é o retrovisor. Os envelopes são o volante.

*Como funciona:*
Olhar pelo retrovisor é útil: vê de onde veio. Mas só o volante ajuda a avançar — uma decisão, tomada antes, sobre para onde vai o dinheiro.

### Três números de cada categoria {#start-envelope}

Rode o telemóvel — o ecrã «Plano» passa a ser uma tabela, e os três números do envelope estão identificados nos próprios títulos das colunas.

[Plano na horizontal: colunas Categoria, Planeado, Gasto, Disponível; Contas de casa 100, −92,74, 29,44]
Telemóvel na horizontal: o mesmo «Plano» em forma de tabela. Na vista normal, «Disponível» é o valor à direita da categoria, e «… de … gastos» é a linha por baixo da barra.

1. **«Planeado»** — quanto pôs no envelope este mês. É uma decisão: «100 € para as contas de casa em novembro».

2. **«Gasto»** — quanto já saiu do envelope: todas as despesas desta categoria no mês, com sinal de menos. Um reembolso por um artigo devolvido diminui este número.

3. **«Disponível»** — quanto ainda pode gastar: o que transitou do mês anterior + planeado − gasto.

   *Como funciona:*
   Na captura, «Contas de casa» tem planeado 100 e gasto 92,74 — parece que sobram 7,26. Mas o disponível é 29,44: 22,18 € não foram gastos em outubro e transitaram para novembro. É assim que um envelope se vai enchendo.

   Chip verde quer dizer que há dinheiro no envelope, zero cinzento — que está vazio, vermelho — que está negativo: gastou mais do que havia.

[Ecrã Plano: grupos de categorias, valores à direita, barras e linhas de gasto]

Como fica no ecrã e onde tocar está no artigo [«Plano»](#budget). Aqui ficam só as regras que os números seguem.

(€)
#### O rendimento vai para «não alocado», não para uma categoria

O ordenado não cai num envelope sozinho: vai para «não alocado», e é o utilizador que o reparte.

*Como funciona:*
No formulário de transação, o rendimento é registado por predefinição como «Receita para novembro» — ou seja, no «não alocado» deste mês. Também pode escolher «Receita para dezembro» — veja a secção [«Idade do dinheiro em pormenor»](#overview) do artigo «Resumo».

(↺)
#### O reembolso volta ao envelope

Recebeu dinheiro de volta por um artigo devolvido? Vai para a categoria de onde saiu, não para o rendimento.

*Como funciona:*
Como registar — artigo [«Formulário de transação»](#entry), secção «Reembolso por um artigo devolvido».

(⇄)
#### Uma transferência não é uma despesa

Levantou dinheiro, pagou o cartão de crédito, passou dinheiro para a poupança — o dinheiro continua a ser seu.

*Como funciona:*
Uma transferência entre contas do orçamento não toca em nenhum envelope. Só uma transferência para uma conta fora do orçamento (uma poupança, um depósito a prazo) sai dos envelopes — e aí a aplicação pede uma categoria.

### Mês após mês {#start-months}

O orçamento vive em meses. O que acontece a um envelope na passagem do mês é uma das regras principais.

(+)
#### O saldo positivo transita

Não gastou tudo? O resto passa para o mês seguinte e fica no envelope.

*Como funciona:*
É assim que se poupa para coisas grandes e irregulares: ponha 150 € em «Férias» todos os meses, não gaste — e até ao verão haverá 900 €. Também pode pôr dinheiro de lado para o futuro de uma vez: pode alocar dinheiro a qualquer mês à frente — a seta «›» no ecrã «Plano».

(−)
#### O saldo negativo volta a zero

Gastou mais do que o envelope tinha? A categoria fica vermelha. Na passagem do mês, o negativo é anulado — mas não sem deixar rasto.

*Como funciona:*
Um negativo do seu próprio dinheiro (vermelho, ícone de carteira) diminui o «não alocado» do mês seguinte: afinal, o dinheiro já foi gasto. Por isso é melhor cobrir o negativo logo, passando dinheiro de outra categoria: toque no valor vermelho no ecrã «Plano».

Um negativo no cartão de crédito (amarelo, ícone de cartão) é outra história: não come o seu dinheiro, aumenta a dívida do cartão. O «não alocado» não o desconta, mas a dívida terá de ser paga na mesma.

(≡)
#### «Orçamento do mês» no «Resumo»

Toda a contabilidade do mês numa escada: o que transitou do mês anterior, o rendimento, o alocado e o total «não alocado».

*Como funciona:*
Se o número no chip lhe parecer estranho, veja aqui: percebe de onde veio. Mais no artigo [«Resumo»](#overview).

### O cartão de crédito no orçamento {#start-credit}

O cartão de crédito é a parte menos intuitiva do método dos envelopes. A regra é só uma: uma compra com cartão de crédito gasta o dinheiro do envelope tal como uma compra com cartão de débito.

(1)
#### A compra

Comprou comida com o cartão de crédito por 35 € — o envelope «Supermercado» ficou 35 € mais magro, como sempre.

(2)
#### O dinheiro do pagamento põe-se de lado sozinho

A aplicação passa estes 35 € para o grupo «Pagamentos de cartão», para a categoria do seu cartão de crédito.

*Como funciona:*
Assim, na data do pagamento, o dinheiro para o liquidar já está separado, e não o gasta por engano. Não precisa de pôr nada de lado por si.

(3)
#### O pagamento do cartão

Pague o cartão de crédito com uma transferência da sua conta normal para o cartão. O dinheiro posto de lado vai para o pagamento.

*Como funciona:*
Como registar uma transferência — artigo [«Formulário de transação»](#entry).

### As quatro regras do método {#start-rules}

A aplicação não o obriga a segui-las — sugere-as uma de cada vez, quando a regra se torna pertinente.

(1)
#### Dê uma tarefa a cada euro

Continue a alocar dinheiro até «não alocado» chegar a zero. Dinheiro sem tarefa escapa sem se dar por isso.

(2)
#### Encare as despesas reais

O seguro uma vez por ano, a reparação do carro, as prendas de Natal — também são despesas. Ponha de lado um pouco para elas todos os meses.

*Como funciona:*
As metas «até à data» ajudam: a aplicação calcula quanto pôr por mês para chegar a tempo.

(3)
#### Adapte-se aos imprevistos

Uma despesa excedida não é um fracasso. Passe dinheiro de outro envelope e siga em frente.

*Como funciona:*
Um orçamento é um plano, não um juramento. O que importa é que os envelopes mostrem com honestidade quanto resta.

(4)
#### Envelheça o seu dinheiro

O objetivo é gastar dinheiro ganho há um mês, não ontem.

*Como funciona:*
A «Idade do dinheiro» no «Resumo» acompanha isto. Quando chegar aos 30 dias, consegue viver com o dinheiro do mês anterior: pormenores no artigo [«Resumo»](#overview).

### O zero é só o primeiro degrau {#start-ladder}

«Não alocado» a zero é um bom objetivo, mas não o último. O método vai mais longe: de «chego ao fim do mês» a «o meu dinheiro trabalha para mim». Os degraus vêm por ordem — saltá-los é arriscado: investir sem almofada significa vender os investimentos à primeira avaria do carro.

(1)
#### Cada euro tem uma tarefa

Todo o dinheiro das contas está repartido por envelopes. Sabe o que pode pagar até ao fim do mês.

**Como saber que está aqui:** «não alocado» é zero, e nenhuma categoria está vermelha.

**Como a aplicação ajuda:** o chip «Não alocado», a alocação automática, «Cobrir todos os gastos excedidos».

(2)
#### Envelopes para despesas irregulares

Seguro, reparação do carro, prendas e férias já não o apanham desprevenido: um pouco vai para eles todos os meses.

**Como saber que está aqui:** chega uma conta grande, e o dinheiro para ela já está à espera no envelope.

**Como a aplicação ajuda:** as metas «até à data» e «Por mês» calculam quanto pôr; o bloco «O que vem» no «Resumo» lembra onde falta dinheiro.

(3)
#### Um mês à frente

Gasta o dinheiro ganho há um mês. Este mês não precisa do novo ordenado — esse vai para o seguinte.

**Como saber que está aqui:** a «Idade do dinheiro» é de 30 dias ou mais.

**Como a aplicação ajuda:** a «Idade do dinheiro» no «Resumo», o rendimento «para o mês seguinte» no formulário — pormenores no artigo [«Resumo»](#overview), secção «Idade do dinheiro em pormenor».

(4)
#### Um fundo de emergência

Uma reserva de três a seis meses de despesas normais. Perder o emprego ou adoecer passa a ser um contratempo, não uma catástrofe.

**Como saber que está aqui:** a «Reserva de emergência» guarda o equivalente a vários meses de despesas.

**Como a aplicação ajuda:** uma meta «Saldo» na categoria «Reserva de emergência»; a despesa média por mês — nos relatórios e no ecrã da categoria.

(5)
#### O seu dinheiro trabalha para si

A almofada está feita, as despesas irregulares estão cobertas, está um mês à frente — e agora o excedente pode fazer mais do que ficar parado: depósitos a prazo, certificados de aforro, investimentos. O dinheiro começa a render dinheiro.

**Como saber que está aqui:** todos os meses uma parte do rendimento vai para «Investimentos», e não lhe toca para as despesas do dia a dia.

**Como a aplicação ajuda:** o grupo «Poupança» com a categoria «Investimentos»; «Pague-se primeiro» no «Resumo» mostra que percentagem do rendimento põe de lado (o normal é 10% ou mais); uma conta «Apenas acompanhamento» para um depósito ou uma conta numa corretora; «Património» no «Resumo» — como cresce tudo o que tem.

Quanto tempo leva o caminho depende do seu rendimento e dos seus hábitos. O primeiro degrau costuma ser o primeiro mês. Um mês à frente leva de três meses a um ano. O que importa é dar um passo por mês, não um salto.

Pronto para começar? A seguir — [«Primeiros passos»](#first-steps): do primeiro arranque ao primeiro mês.

## Primeiros passos {#first-steps}

Do primeiro arranque a um orçamento a funcionar: o assistente de configuração, a lista «Primeiros passos» e o que fazer no primeiro mês.

*Como funciona o próprio método está em [«Como funciona o orçamento»](start.md)*

### Primeiro arranque: como quer começar {#first-steps-welcome}

No primeiro arranque abre o assistente de configuração. O primeiro ecrã oferece três portas. O idioma pode ser mudado aqui mesmo, no botão do canto superior direito: as categorias que a aplicação sugere por predefinição também ficam nesse idioma.

[Passo 1 de 6: Bem-vindo, botão de idioma, três opções: Começar do zero, Já tenho um orçamento, Venho do YNAB]

(A)
#### «Começar do zero»

O assistente leva-o por cinco passos: moeda e nome, contas, categorias, a primeira alocação. Os passos estão explicados mais abaixo.

(B)
#### «Já tenho um orçamento»

Já tinha um orçamento noutro telemóvel ou antes de reinstalar a aplicação. Ela carrega-o da nuvem — Google Drive, Dropbox ou WebDAV — ou de um ficheiro de cópia de segurança.

*Como funciona:*
O nome não é pedido aqui: vem com o orçamento e serve de endereço da pasta dele na nuvem.

(C)
#### «Venho do YNAB»

YNAB 4 ou YNAB web: contas, categorias e histórico chegam a partir de um ficheiro.

*Como funciona:*
Primeiro a moeda e o nome, depois escolhe o ficheiro de exportação, e no fim há um glossário: como se chama aqui cada termo do YNAB. O glossário também se pode abrir mais tarde, ao importar a partir das definições.

Demora uns cinco minutos. Qualquer passo pode ser saltado — a lista «Primeiros passos» no «Resumo» lembra o que ficou por fazer.

### Começar do zero: cinco passos {#first-steps-fresh}

Em baixo, em cada passo, estão «Avançar» e «Saltar». O botão Voltar do sistema leva um passo atrás em vez de fechar a aplicação.

[Passo 2. Moeda e nome]

(•)
#### Passo 2. Moeda e nome

A aplicação preenche a moeda pelo país do telemóvel — confirme. É o símbolo em que mantém o orçamento; a aplicação não converte valores.

*Como funciona:*
Invente um nome seu: «Família», «Pessoal». Se deixar o campo vazio, o orçamento chamar-se-á «O meu orçamento». O nome aparece no cabeçalho e no nome da pasta na nuvem, por isso é fácil reconhecer o orçamento em qualquer dispositivo.

[Passo 3. Onde está o seu dinheiro]

(•)
#### Passo 3. Onde está o seu dinheiro

Adicione todos os sítios onde guarda dinheiro, com o saldo de hoje: a carteira, os cartões de todos os bancos, o cartão de crédito, a poupança.

*Como funciona:*
Deixe de fora um único cartão, e o orçamento não vai coincidir com o que tem realmente. Toque em «+» ao lado do modelo adequado — abre a folha de nova conta com o tipo já escolhido. O saldo da conta vai diretamente para «não alocado» — na captura, duas contas trouxeram 1900 €. Mais sobre contas no artigo [«Contas»](#accounts).

[Passo 4. As suas categorias]

(•)
#### Passo 4. As suas categorias

Os chips «Em que gasta» adicionam as categorias necessárias: «Carro», «Filhos», «Animais de estimação». Em baixo está a lista completa, e pode ajustá-la à sua medida.

*Como funciona:*
- toque numa categoria para lhe mudar o nome;
- a cruz remove uma categoria;
- «Adicionar categoria» está em cada grupo, «Adicionar novo grupo» está no fim;
- o lápis ao lado do nome de um grupo — mudar o nome do grupo.

A captura mostra o início da lista; ela é mais longa.

[Passo 5. Aloque o seu dinheiro]

(•)
#### Passo 5. Aloque o seu dinheiro

Reparta o «não alocado» pelos envelopes: toque no valor ao lado de uma categoria e introduza quanto está disposto a gastar nela este mês.

*Como funciona:*
Em cima vê quanto falta. Na captura, estão alocados 840 € e faltam 1060 €. Não é preciso chegar a zero aqui: comece pelo essencial — casa, comida, telemóvel — e aloque o resto mais tarde, no ecrã «Plano».

[Passo 6. Pronto]

(•)
#### Passo 6. Pronto

A regra principal mais uma vez: continue a alocar dinheiro até «não alocado» chegar a zero.

*Como funciona:*
«Abrir orçamento» leva ao ecrã «Plano». A partir daí, a aplicação dá dicas pelo caminho — uma de cada vez, quando fizer sentido.

### Depois do assistente: a lista «Primeiros passos» {#first-steps-first-steps}

No topo do «Resumo» aparece um cartão com uma lista. Nele está o que o orçamento precisa antes de poder mostrar a verdade. O assistente já marca o que fez.

[Resumo com o cartão Primeiros passos: 3 de 6, Dinheiro alocado aberto, 1900 não alocado, botão Ir para o orçamento]

1. **Dinheiro na carteira** — A carteira como conta à parte. O dinheiro vivo é o primeiro a desaparecer: sem conta própria, o orçamento afasta-se do dinheiro que tem na mão logo na primeira compra. Não usa dinheiro vivo? — «Não uso dinheiro vivo».
2. **Cartões de todos os bancos** — Todos os cartões e contas estão adicionados. Se os adicionou no assistente, o ponto já vem marcado.
3. **Categorias à sua medida** — A lista de categorias está ajustada. Passou pelo passo das categorias — está marcado. O botão abre o mesmo ecrã do assistente. Uma categoria que já tem transações não é eliminada pela cruz, mas ocultada: as transações ficam onde estão.
4. **Dinheiro alocado** — «Não alocado» chegou a zero. Até lá, o ponto mostra quanto falta e leva ao «Plano».
5. **Primeira transação** — Registou a primeira compra — o orçamento ganhou vida. O botão abre o formulário.
6. **Uma cópia fora do telemóvel** — Uma nuvem ou um ficheiro de cópia de segurança. Perdeu o telemóvel — e o orçamento não se perdeu. Botões: ligar uma nuvem ou «Cópias de segurança».

(1)
#### O que está feito leva um visto

Em cima, «3 de 6»: quantos estão feitos. Um ponto concluído é uma só linha com um visto.

(2)
#### Um ponto fica aberto

O primeiro por concluir — ou aquele em que tocou. Diz o que fazer e porquê.

(3)
#### O botão principal é uma porta

Leva diretamente para onde o ponto se resolve: o formulário de conta, o «Plano», o formulário de transação, a entrada na nuvem. Às vezes há um segundo ao lado — a sua resposta: «Não uso dinheiro vivo», «Todos adicionados», «Deixar como está».

(⋮)
#### Ocultar a lista

Menu do cartão → «Ocultar a lista» (com «Desfazer» na parte de baixo do ecrã). Quando estiver tudo feito, o cartão diz «O seu orçamento está pronto» — toque em «Entendi».

*Como funciona:*
Enquanto a lista está aberta, as dicas habituais do «Resumo» ficam caladas — para a mesma coisa não ser dita duas vezes. Para trazer todas as dicas de volta: «Definições → Ajuda e contacto → Dicas → Mostrar as dicas de novo».

Se veio do YNAB, a lista é outra: verificar os saldos das contas com o banco, o dinheiro vivo, a alocação e uma cópia de segurança — as contas e as categorias já vieram no ficheiro.

### O seu primeiro mês {#first-steps-month1}

1. **Registe cada compra** — logo, na caixa: «+ Transação», a câmara para o recibo ou o microfone. Cinco segundos agora em vez de uma noite com o extrato depois. Sem tempo? — a «Caixa de entrada» (artigo [«Formulário de transação»](#entry)).
2. **Entrou dinheiro — reparta-o.** Cada ordenado cai em «não alocado»; distribua-o pelos envelopes no ecrã «Plano».
3. **Um envelope ficou vermelho — passe dinheiro** de outro. É normal: o primeiro mês mostra sempre o que subestimou.
4. **Uma vez por semana, verifique as contas** com o banco — menu da conta, «Conciliação de saldo» (artigo [«Contas»](#accounts)).
5. **No fim do mês, veja o «Resumo»**: «Para onde foi o dinheiro», «Gastos do mês». No mês seguinte vai alocar com base na experiência.

## Um orçamento em vários dispositivos {#scenario-devices}

O telemóvel no bolso, o tablet em casa, o computador no trabalho — e o mesmo orçamento em todos. Registe uma compra na caixa, e à noite ela já está no portátil. Como configurar e o que ter em conta.

*«Definições», secção «Sincronização»*

### Para quem é {#scenario-devices-who}

##### Telemóvel e computador

As despesas pelo telemóvel, na caixa. O planeamento do mês, os relatórios e as revisões num ecrã grande. Para o computador existe a «Versão para Windows»: o mesmo orçamento, com aspeto próprio, feito para o rato. Sincroniza pelo Google Drive — se houver um computador pelo meio, escolha essa nuvem também no telemóvel.

##### Telemóvel e tablet

Repartir o ordenado pelos envelopes é confortável no tablet: o «Plano» na horizontal é uma tabela em ecrã inteiro.

##### Um telemóvel novo

O antigo avariou ou mudou de aparelho — anos de orçamento passam em dois minutos. É o mesmo cenário: o telemóvel novo é o segundo dispositivo.

Quem liga os dispositivos é a nuvem: Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, o seu próprio servidor). Cada dispositivo envia para lá as suas alterações e recebe as dos outros. Como funciona em pormenor — no artigo [«Nuvem e cópias de segurança»](#sync).

### No primeiro dispositivo {#scenario-devices-first}

Aquele em que já tem o orçamento.

1. «Definições», secção «Sincronização» → «Autorização».
2. Inicie sessão na nuvem. No Google Drive — com a conta Google que vai usar também nos outros dispositivos. No Dropbox — com o e-mail e a palavra-passe do Dropbox, não através do Google. Vai haver um computador com Windows? Escolha o Google Drive: a versão para Windows não se liga a outras nuvens.
3. Quer fechar os dados na nuvem com palavra-passe? — «Definir palavra-passe» no bloco «Encriptação da nuvem». Anote a palavra-passe: ninguém a consegue recuperar.
4. Volte ao «Resumo» e toque no ícone de sincronização no canto superior direito. O orçamento vai para a nuvem.

[Ecrã Autorização: Encriptação da nuvem, Google Drive, Dropbox, WebDAV]
«Autorização» — é aqui que se liga uma nuvem. Cada nuvem em pormenor — no artigo [«Nuvem e cópias de segurança»](sync.md#auth).

### No segundo dispositivo {#scenario-devices-second}

##### A aplicação acabou de ser instalada

1. No assistente do primeiro arranque, escolha «Já tenho um orçamento».
2. Abre «Carregar orçamento da nuvem». Ligue **a mesma** nuvem com **a mesma** conta.
3. Escolha o orçamento na lista e toque em «Carregar orçamento».
4. Se no primeiro dispositivo há palavra-passe, defina a mesma aqui.
5. Confirme a moeda: «Definições» → «Moeda do orçamento». Pormenores — [mais abaixo](#scenario-devices-per-device).

[Ecrã Carregar orçamento da nuvem: passo 1 Ligar uma nuvem, passo 2 Nome do orçamento]
«Carregar orçamento da nuvem» — primeiro a nuvem, depois um orçamento da lista.

##### A aplicação já está instalada, com um orçamento próprio

«Definições», secção «Sincronização» → «Carregar orçamento da nuvem» — e depois os mesmos passos. Ou toque no nome do orçamento no cabeçalho do «Resumo» — «Carregar orçamento da nuvem» também lá está.

*Como funciona:*
Se neste dispositivo um orçamento com o mesmo nome já tem dados próprios, na primeira sincronização a aplicação pergunta se é um só orçamento ou dois diferentes: «Da nuvem» ou «Juntar». Mais no artigo [«Nuvem e cópias de segurança»](#sync-trouble).

### O que é comum e o que cada dispositivo guarda para si {#scenario-devices-per-device}

O que sincroniza são os **dados do orçamento**. As definições de aspeto e de segurança não: cada dispositivo tem as suas.

| Comum a todos os dispositivos | À parte em cada dispositivo |
|---|---|
| Contas, os seus ícones e cores | Idioma e formatos |
| Categorias e grupos, notas das categorias | Aparência: estilo, tema, tipo de letra, cantos |
| Transações, tags, beneficiários | PIN e entrada por impressão digital |
| Valores postos de lado por mês, metas e linhas da «lista» | A palavra-passe da nuvem — mas tem de ser igual |
| Pagamentos programados | Lembretes |
| Fotos e PDF — se «Sincronizar fotos» estiver ligado | Calendário das cópias de segurança |
| | **Moeda do orçamento** |

##### Moeda do orçamento — confirme-a em cada dispositivo

O símbolo da moeda do orçamento vive no dispositivo e não vai para a nuvem. Um orçamento carregado recebe a moeda do orçamento que já estava neste dispositivo — normalmente pelo país do telemóvel. Os valores não mudam, só o símbolo ao lado deles. Símbolo errado? — «Definições» → «Moeda do orçamento».

##### Fotos de recibos

Logo após a instalação, as fotos ficam no dispositivo em que foram tiradas. Para aparecerem em todos, ligue «Sincronizar fotos» no ecrã «Sincronização» — em **cada** dispositivo.

### No dia a dia {#scenario-devices-daily}

##### Raramente vai precisar de sincronizar à mão

A aplicação sincroniza sozinha — uns segundos depois de cada vez que a abre. O número no ícone de sincronização do «Resumo» é quantas alterações suas ainda não foram para a nuvem.

##### Registou uma compra e vai guardar o telemóvel

Quando a aplicação é minimizada, o Android não a deixa continuar a trabalhar, por isso as alterações sobem na próxima vez que a abrir. Se vai sentar-se ao computador já a seguir, toque no ícone de sincronização no telemóvel para a compra já lá estar.

##### A cor do ícone de sincronização

Piscou a verde — está tudo bem. Vermelho — não resultou; uma falha isolada costuma ser só falta de rede. Se o ícone ficar vermelho, a sincronização falhou várias vezes seguidas — abra o ecrã «Sincronização», ele diz o que aconteceu.

### Erros frequentes {#scenario-devices-mistakes}

| O que aconteceu | Porquê, e o que fazer |
|---|---|
| O segundo dispositivo não tem as alterações do primeiro | Os dispositivos iniciaram sessão na nuvem com contas **diferentes** — cada um escreve na sua nuvem. Inicie sessão em todos com uma só conta. |
| «A nuvem está protegida por palavra-passe» | A palavra-passe está definida num dispositivo, e no outro não está ou é diferente. Defina **a mesma**. |
| As fotos chegaram, mas não abrem | O mesmo: a palavra-passe é diferente entre dispositivos. |
| Mudou o nome do orçamento — o segundo dispositivo deixou de ver as alterações | O nome do orçamento é o endereço da pasta dele na nuvem. Depois de mudar o nome, mude-o exatamente da mesma forma nos outros dispositivos. |
| «Conflito» | O mesmo registo foi alterado em dois dispositivos antes de sincronizarem. O cartão mostra as duas versões — escolha a que quer. |

### Sem nuvem {#scenario-devices-no-cloud}

Não quer nuvem? Pode passar o orçamento entre os seus dispositivos diretamente: como ficheiro ou por Wi-Fi na mesma rede. É uma transferência única, não uma sincronização contínua: as alterações terão de ser passadas outra vez. Serve bem para mudar para um telemóvel novo. Mais no artigo [«Nuvem e cópias de segurança»](#sync-local).

## Duas ou mais pessoas, um orçamento {#scenario-together}

Uma família com dinheiro em comum: os dois pagam, os dois registam, os dois veem quanto resta em cada envelope. Como se entender com a aplicação e um com o outro para não haver confusões nem duplicados.

*«Definições», secção «Sincronização»*

### Para quem é {#scenario-together-who}

O dinheiro é comum: os ordenados juntam-se num só bolo, e a renda, a comida e as férias saem do bolo comum. Cada um paga com o seu cartão ou em dinheiro, mas os envelopes são partilhados: os dois veem o «Supermercado», e quem chegar primeiro ao limite é quem vê o vermelho.

Se cada um tem também dinheiro pessoal que o outro não deve ver, veja o cenário [«Casal: despesas comuns e dinheiro de cada um»](#scenario-couple).

### Configuração {#scenario-together-setup}

Tecnicamente é o mesmo orçamento em vários dispositivos — os passos estão no cenário [«Um orçamento em vários dispositivos»](#scenario-devices). Há uma diferença, e é importante.

##### Uma conta de nuvem à parte — só para o orçamento

Todos os dispositivos têm de iniciar sessão na nuvem com **uma** conta. Mas iniciar sessão na conta Google pessoal do marido no telemóvel da mulher é má ideia: o telemóvel começa a sincronizar os contactos, as fotos e o e-mail dele.

Crie uma conta Google **nova** — só para o orçamento — e use-a para iniciar sessão na nuvem da aplicação em todos os dispositivos. Cada um mantém as suas contas pessoais. O mesmo para o Dropbox: um Dropbox à parte, com entrada por e-mail e palavra-passe.

##### Uma palavra-passe da nuvem para todos

Se definir uma palavra-passe, defina **a mesma** em todos os telemóveis. A palavra-passe não sincroniza: introduz-se à mão em cada dispositivo.

### Quem pagou o quê {#scenario-together-whose}

A aplicação não guarda em que telemóvel uma transação foi registada. Quem distingue as despesas é a **conta**.

##### Uma conta para cada pessoa

Dê a cada um as suas contas: «Cartão da Inês», «Cartão do Rui», «Dinheiro da Inês». Na conta em que a compra ficou registada, foi essa pessoa que pagou. Cada um verifica os saldos das contas com o próprio banco — «Conciliação de saldo» no artigo [«Contas»](#accounts).

As despesas de cada um este mês — «Transações» → «⋮» → «Filtro», filtrar por conta.

##### Se precisar de «quem deve a quem»

Num orçamento comum, normalmente não precisa: o dinheiro é de todos de qualquer forma. Mas se combinaram dividir algo a meias — uma tag com «Acerto de contas» ligado nessas compras mostra quem deve quanto a quem. Mais no artigo [«Beneficiários e tags»](#payees-tags).

### Alocar o dinheiro {#scenario-together-assign}

Repartir o ordenado pelos envelopes é mais fácil para uma pessoa — ou para duas diante do mesmo ecrã.

##### Porque não cada um no seu telemóvel

Se os dois mudarem ao mesmo tempo quanto está posto de lado na mesma categoria, vence a alteração que chegou por último à nuvem — ou a aplicação mostra um «Conflito» e pede para escolher. O valor no envelope pode não ser o combinado.

Combinem quem faz a alocação. Antes de começar, abra a aplicação e dê-lhe uns segundos para sincronizar — assim vê as últimas despesas da outra pessoa.

##### O que os dois veem

O «Não alocado», o saldo de cada envelope, «Gasto excedido» e «A acabar» no «Resumo» são comuns. Se o «Supermercado» ficar amarelo, os dois veem, e estão a falar dos mesmos números.

### Pagamentos programados {#scenario-together-scheduled}

A renda e as subscrições são comuns, e o vencimento chega aos dois telemóveis.

##### Uma pessoa confirma

Se duas pessoas tocarem em «Confirmar» no mesmo pagamento antes de os telemóveis sincronizarem, a transação fica registada **duas vezes**. Combinem quem confirma os pagamentos programados, ou deixe a aplicação sincronizar antes de confirmar. Elimine a transação a mais em «Transações».

Os lembretes de vencimento chegam aos dois telemóveis — a quem os tiver ligados. Cada um configura-os no próprio telemóvel: «Definições» → «Lembretes».

### No dia a dia {#scenario-together-daily}

##### Registou alguma coisa? Sincronize

A aplicação sincroniza quando a abre, não quando a minimiza. Registou uma compra grande e sabe que a outra pessoa vai ver o orçamento daqui a pouco? Toque no ícone de sincronização no «Resumo».

##### O lembrete da noite conta os dois

«Lembrar de adicionar os gastos» fica calado se o orçamento já tem despesas hoje — incluindo as registadas pela outra pessoa e trazidas pela sincronização. Se quiser que lembre cada um, cada um deve registar as suas despesas no próprio dia.

##### As «Transações recentes» são comuns

No «Resumo» vê o que a outra pessoa comprou: as compras dela aparecem lá depois de uma sincronização.

### Erros frequentes {#scenario-together-mistakes}

| O que aconteceu | Porquê, e o que fazer |
|---|---|
| Um telemóvel tem mais despesas do que o outro | Os telemóveis iniciaram sessão na nuvem com contas diferentes — são duas nuvens diferentes. Iniciem sessão em todos com uma só conta, à parte, para o orçamento. |
| Uma transação apareceu duas vezes | Foi registada pelos dois: por exemplo, um talão comum foi registado por quem pagou e por quem carregou os sacos. Combinem: regista quem pagou com o seu cartão. |
| Um pagamento programado ficou registado duas vezes | Os dois tocaram em «Confirmar». Elimine a transação a mais; daqui em diante uma pessoa confirma. |
| «A nuvem está protegida por palavra-passe» num telemóvel | Um telemóvel tem a palavra-passe definida, e o outro não tem nenhuma ou tem outra. Defina a mesma. |
| O símbolo da moeda é diferente entre os dois | A moeda do orçamento vive no dispositivo. Corrija em «Definições» → «Moeda do orçamento». |

## "Casal: despesas comuns e dinheiro de cada um" {#scenario-couple}

Cada um tem o seu ordenado e as suas despesas, enquanto a casa, a comida e as férias se dividem a meias. Como fazer isto na aplicação hoje, o que ela ainda não faz e como acertar contas uma vez por mês.

*a tag «comum» no formulário de transação e o bloco «Minhas tags» no «Resumo»*

### O que funciona hoje {#scenario-couple-today}

O ideal seria assim: um orçamento comum, «A nossa casa», que os dois mantêm, e mais um pessoal para cada um, que o outro não vê. Através de uma nuvem comum isso **não funciona** — o porquê está mais abaixo. Mas funciona se passarem o orçamento comum por Wi-Fi em casa.

##### Porquê

O telemóvel inicia sessão na nuvem com uma conta, e todos os orçamentos desse telemóvel sincronizam com essa nuvem. A palavra-passe da nuvem também é uma por telemóvel, não por orçamento. Por isso, um orçamento comum numa nuvem comum e um pessoal escondido do parceiro não podem viver no mesmo telemóvel: o pessoal iria para o mesmo sítio que o comum.

Há três vias que funcionam.

##### Orçamentos pessoais e uma tag «comum»

Cada um tem o seu orçamento — ninguém vê o dinheiro do outro. As despesas comuns levam uma tag, e uma vez por mês comparam e acertam. Pormenores — [mais abaixo](#scenario-couple-tag).

##### Dois orçamentos, o comum por Wi-Fi

Cada telemóvel tem o seu orçamento e o comum, «A nossa casa». Cada um tem a sua nuvem, e passam o orçamento comum um ao outro por Wi-Fi em casa. Pormenores — [mais abaixo](#scenario-couple-wifi).

##### Um orçamento comum para os dois

Todo o dinheiro num só orçamento, o dinheiro pessoal como categorias próprias. Os dois veem tudo. Bom se não têm nada a esconder um do outro. Pormenores — [mais abaixo](#scenario-couple-all-shared).

### A via da tag «comum» {#scenario-couple-tag}

Cada um tem o seu orçamento no seu telemóvel: com a sua nuvem ou sem nuvem nenhuma. Cada um regista as despesas comuns no próprio orçamento, como sempre, e põe-lhes uma tag.

##### Como configurar — cada um no seu telemóvel

1. Crie uma categoria para a sua parte das despesas comuns — por exemplo, «Família» no grupo «Despesas fixas». Todos os meses, ponha nela quanto combinaram contribuir para o bolo comum.
2. Pagou algo comum — as compras da casa, as contas? Registe a compra nesta categoria.
3. No campo «Tags», crie a tag «comum» e ponha-a em cada compra destas.
4. No «Resumo», no bloco «Minhas tags» → «⋮» → «Escolher tags…», marque «comum» e escolha o período «Total deste mês».

*Porquê uma só categoria, e não «Supermercado» e «Contas de casa»:*
O seu orçamento pessoal responde à pergunta «quanto gasto eu». A sua parte da casa comum é uma só rubrica, como a renda: «Família». Se quiser ver para onde vai o dinheiro comum, abra o ecrã da tag «comum»: lá está «Por categoria». Nesse caso, registe as despesas comuns nas categorias normais, e a tag junta-as.

### Fim do mês: quem deve a quem {#scenario-couple-month}

1. Cada um vê em «Minhas tags» quanto gastou em «comum» este mês.
2. Somem os dois valores e dividam a meio — é a parte de cada um.
3. Quem gastou menos do que a sua parte transfere a diferença para o outro.

**Exemplo.** A Inês gastou 1200 € no comum, o Rui 800 €. No total são 2000 €, portanto a parte de cada um é 1000 €. O Rui transfere 200 € para a Inês.

##### Como registar a transferência

- **Rui** — uma despesa de 200 € na categoria «Família» com a tag «comum»: é também a contribuição dele para o bolo comum.
- **Inês** — 200 € a entrar do Rui na mesma categoria «Família», com a mesma tag: o dinheiro voltou ao envelope. Como registar um reembolso para uma categoria — no artigo [«Formulário de transação»](#entry).

Nas «Minhas tags» do Rui fica 1000 €. Nas da Inês continua 1200 €: o bloco conta só as despesas. Os 1000 € dela estão no ecrã da tag «comum»: «Recebido» 200 € e «Líquido» 1000 €.

Comparem pelas «Minhas tags» **antes** da transferência — depois dela, os números já estão acertados.

*E o «Acerto de contas» na tag?:*
O «Acerto de contas» calcula «gasto menos recebido» no **seu** orçamento — é bom quando divide uma despesa com alguém que não regista no seu orçamento: uma viagem com amigos, uma prenda de grupo. Para um casal com dois orçamentos, mostra só a sua metade do quadro: a contribuição do outro não está no seu orçamento. Por isso, aqui comparem pelas «Minhas tags». Sobre o «Acerto de contas» — no artigo [«Beneficiários e tags»](#payees-tags).

### Dois orçamentos, o comum por Wi-Fi {#scenario-couple-wifi}

Cada telemóvel tem dois orçamentos: o seu e o comum, «A nossa casa». Cada um tem a sua nuvem — a sua conta, a sua palavra-passe. Os dois orçamentos vão para a nuvem do dono do telemóvel, e o outro não os vê lá. Passam um ao outro só «A nossa casa» — por Wi-Fi, quando estão os dois em casa.

##### Como configurar

1. Cada um liga uma nuvem no seu telemóvel com a sua conta, como de costume.
2. A Inês cria o orçamento «A nossa casa»: toque no nome do orçamento no cabeçalho do «Resumo» — lá estão a lista de orçamentos e um orçamento novo. O Rui cria no telemóvel dele um orçamento vazio com o mesmo nome.
3. Da primeira vez, o Rui recebe «A nossa casa» da Inês por Wi-Fi (como — mais abaixo) e escolhe «Substituir por completo»: o orçamento vazio dele passa a ser uma cópia do da Inês.

##### A troca em casa

1. **Os dois abrem «A nossa casa».** A troca acontece entre os orçamentos abertos.
2. «Definições» → «Transferência local». Inês: «Iniciar o servidor». Rui: «Digitalizar o QR» → «Receber os dados» → «Juntar».
3. Inês: «Parar o servidor».

A troca vai nos dois sentidos: o Rui recebe as alterações da Inês, e as dele vão para a Inês — tanto as transações como as fotos dos recibos. Não importa qual dos dois envia e qual recebe.

**«Ao que parece, é outro orçamento» — toque em «Cancelar».** Se um de vocês tiver aberto o próprio orçamento em vez de «A nossa casa», os dois orçamentos não têm nenhuma conta nem transação em comum, e a aplicação pergunta antes de juntar. «Continuar à mesma» despejaria as despesas pessoais no orçamento comum, e não haveria forma de as separar outra vez.

*E se os orçamentos se juntaram?:*
Separá-los à mão não é possível, mas pode repor os dois a partir de uma cópia de segurança automática — a aplicação fá-las sozinha, por predefinição de 5 em 5 dias. A troca vai nos dois sentidos, por isso são dois orçamentos estragados: o pessoal do Rui (entrou nele «A nossa casa») e «A nossa casa» da Inês (entraram nela as despesas pessoais do Rui). Cada um corrige o seu no próprio telemóvel.

1. Abra o orçamento estragado. «Definições» → «Cópias de segurança».
2. Encontre uma cópia **deste** orçamento (o nome dele está na linha da cópia) com data **anterior** à troca. Toque no ícone de relógio com seta → «Restaurar». Depois disso, **não toque em «Sincronizar»**: o orçamento juntado ainda está na nuvem.
3. Elimine o ficheiro de sincronização deste orçamento na sua nuvem — como no artigo [«Nuvem e cópias de segurança»](#sync-rollback), passos 2–4. Cada um tem a sua nuvem, e só o seu telemóvel grava este orçamento lá, por isso a parte sobre vários dispositivos não se aplica.
4. As alterações feitas depois da cópia perdem-se. As comuns podem recuperar-se: quando a Inês tiver reposto «A nossa casa», façam mais uma troca com os dois em «A nossa casa», e as alterações comuns voltam para ela a partir de «A nossa casa» do Rui — a cópia dele está limpa. As despesas pessoais registadas depois da cópia terão de ser registadas outra vez.

Antes da primeira troca vale a pena fazer cópias à mão — cada um no seu telemóvel, e dos **dois** orçamentos: a cópia é feita do orçamento aberto. Abra o seu orçamento → «Cópias de segurança» → «Criar cópia de segurança agora», depois abra «A nossa casa» e repita. Assim repõe não uma cópia automática com cinco dias, mas o estado mesmo antes da troca.

*A palavra-passe da nuvem tem de ser igual?:*
Não. A transferência por Wi-Fi é encriptada com o código de confirmação do ecrã do telemóvel que envia; a palavra-passe das cópias não entra nisso. A palavra-passe do bloco «Encriptação da nuvem» fecha só a **sua** nuvem. Só tem de ser igual quando dois telemóveis gravam na mesma nuvem — aqui as nuvens são diferentes.

*E se alguém alterou algo fora de casa?:*
Cada um tem «A nossa casa» no próprio telemóvel: registe uma compra na loja, e ela fica logo na sua cópia e na sua nuvem. Troquem em casa — e os dois ficam com tudo. Se um dos telemóveis ainda tiver uma versão mais antiga da aplicação, as alterações de quem recebe não voltam — a aplicação avisa; nesse caso troquem outra vez, invertendo os papéis. Se os dois alteraram a mesma transação, fica a alteração mais recente, como na sincronização normal.

O preço: o orçamento comum só fica em dia quando estão os dois em casa e fizeram a troca.

### Um orçamento comum para os dois {#scenario-couple-all-shared}

Se não há segredos pessoais, o mais simples é manter tudo junto — e assim veem o quadro completo e um só «não alocado» para os dois.

- Configuração — como no cenário [«Duas ou mais pessoas, um orçamento»](#scenario-together): uma conta de nuvem à parte para o orçamento, com sessão iniciada nos dois telemóveis.
- O dinheiro pessoal — como categorias próprias: «Pessoal da Inês», «Pessoal do Rui». Todos os meses entra nelas o valor combinado; como o gastar é com o dono.
- As contas — cada um tem as suas: «Cartão da Inês», «Cartão do Rui». Assim vê-se quem pagou.

O preço: os dois veem tudo — tanto as despesas das categorias «pessoais» como os saldos dos cartões.

### O que ainda não existe {#scenario-couple-not-yet}

Um orçamento comum que sincroniza sozinho pela nuvem para os dois, ao lado de orçamentos pessoais escondidos do parceiro, e passar uma despesa comum do orçamento pessoal para o comum com um toque — ainda não existem. Faremos isto quando as pessoas precisarem. Se é o seu caso, escreva na «Conversa no Telegram» («Definições», secção «Ajuda e contacto»): quanto mais mensagens destas, mais cedo.

## Trabalho independente e rendimento irregular {#scenario-freelance}

O dinheiro entra quando o cliente paga: um mês de fartura, outro de aperto. Como deixar de viver de pagamento em pagamento com um rendimento assim, pôr de lado dinheiro para os impostos e saber quanto ganha realmente.

*«Plano», «Resumo», «Relatórios» — tudo mais abaixo*

### A ideia principal {#scenario-freelance-idea}

Com ordenado, o mês é previsível: caiu no dia 5, chega até ao próximo dia 5. Um trabalhador independente não sabe de antemão o rendimento do mês — por isso não pode planear a partir dele. Planeie a partir do dinheiro que **já tem**.

##### Gaste o que ganhou antes

O mês vive do que entrou antes. O que entra agora trabalha para o mês seguinte. [Como](#scenario-freelance-last-month).

##### Amorteça com uma almofada

Um mês bom alimenta a reserva, um mês fraco tira dela. [Como](#scenario-freelance-buffer).

##### Ponha o imposto de lado logo

Uma percentagem de cada pagamento vai para um envelope próprio antes de o dinheiro ser gasto. [Como](#scenario-freelance-taxes).

### Gaste o dinheiro do mês anterior {#scenario-freelance-last-month}

Registe cada pagamento não para este mês, mas para o **seguinte**. Assim, no dia 1, o mês inteiro já está pago com dinheiro ganho, e reparte-o pelos envelopes de uma vez — não aos bocados depois de cada pagamento.

##### Como registar um pagamento

1. «+ Transação» → «+ Entradas», beneficiário — o cliente, valor.
2. Toque no campo «Categoria» — abre «Onde lançar a receita».
3. Escolha «Receita para dezembro» em vez de «Receita para novembro». Guarde.

A data da transação continua a real. Muda só o mês do orçamento em que o dinheiro aparece.

##### Por onde começar

No primeiro mês terá de gastar o que tem e ao mesmo tempo juntar para o seguinte. Comece por um pagamento ainda não alocado. Até ter o suficiente para um mês à frente, ponha pelo menos parte dele no mês seguinte: a aplicação mostra quanto já lá está no «Orçamento do mês» do «Resumo» — a linha «Orçamento de dezembro».

O objetivo é uma «Idade do dinheiro» de 30 dias ou mais: quer dizer que gasta o dinheiro do mês anterior. Mais no artigo [«Resumo»](#overview-age-month).

### Uma almofada para os meses fracos {#scenario-freelance-buffer}

Mesmo com dinheiro um mês à frente, acontecem dois meses fracos seguidos. A almofada é um envelope que o ajuda a atravessá-los.

##### Como configurar

1. A categoria «Reserva de emergência» — ou uma sua, «Almofada».
2. Uma meta «Saldo»: o valor é a sua despesa habitual de 3–6 meses. Quanto é isso — «Rendimento médio por mês» e «Tendência de gastos», mais abaixo.
3. Num mês bom, ponha na almofada tudo o que passar do habitual.

A meta «Saldo» garante que a reserva não se derrete: gastou uma parte, e a aplicação pede para a repor. Mais no artigo [«Metas»](#goals-balance).

##### Um mês fraco

Não chegou para os envelopes, e as despesas ficaram negativas. Toque no valor vermelho no «Plano» → «Cobrir de outra categoria» → na linha «Reserva de emergência», «Tirar …». O dinheiro passa da almofada para onde está o negativo. Mais no artigo [«Plano»](#budget-screen).

### Impostos — diretamente para o seu envelope {#scenario-freelance-taxes}

O imposto de um pagamento é fácil de gastar: o dinheiro está no cartão, e o imposto só se paga no trimestre seguinte.

##### Uma meta «% renda»

1. A categoria «Impostos».
2. Uma meta «% renda» — a percentagem que paga. Por baixo da percentagem, deixe «Do rendimento deste mês»: o imposto calcula-se sobre o dinheiro que entrou, não sobre a média.
3. Cada pagamento atualiza a meta sozinho: entrou mais, a meta subiu, e «faltam …» diz quanto acrescentar.

O que põe de lado acumula-se no envelope até à data do pagamento: o saldo positivo transita de mês para mês. Mais no artigo [«Metas»](#goals-percent).

*Se regista o rendimento para o mês seguinte:*
Então a meta «% renda» deste mês já se conhece no dia 1: o rendimento do mês chegou no mês anterior. É prático — o imposto põe-se de lado logo no início, juntamente com os outros envelopes.

### Entrou dinheiro — reparta-o com um toque {#scenario-freelance-income}

Repartir cada pagamento à mão cansa. A alocação automática «Por percentagem» fá-lo por si.

##### Configure uma vez

1. No «Plano», toque em «não alocado» no cabeçalho — abre «Alocação automática do orçamento».
2. «Por percentagem» → «Definir percentagens»: por exemplo, «Impostos» — 5%, «Reserva de emergência» — 20%, «Investimentos» — 10%.
3. As percentagens ficam guardadas. O que não estiver coberto por uma percentagem fica em «não alocado» — aloque-o aos envelopes do mês por si.

A partir daí: entrou dinheiro — toque em «não alocado» → «Por percentagem». A aplicação reparte exatamente o que está não alocado neste momento.

*Porquê percentagens e não valores:*
Com um rendimento irregular, um valor fixo é impossível num mês e ridículo no seguinte. A percentagem sobe e desce com o rendimento. Arredondamento — os chips «Para inteiros», «Para 10», «Para 100» na mesma folha.

### Clientes e projetos {#scenario-freelance-clients}

##### O cliente é o beneficiário

Registe cada pagamento com o cliente no campo «Beneficiário». Toque no cliente em «Definições» → «Beneficiários» — abre o ecrã dele: «Tendências de entradas» mostra quanto paga em média, e o período «Ano» mostra todos os pagamentos dele no ano. Vê quem o sustenta e quem paga duas vezes por ano. Mais no artigo [«Beneficiários e tags»](#payees-tags-payee).

##### O projeto é uma tag

Crie uma tag para o projeto: «site do café». Ponha-a tanto no pagamento do cliente como nos custos do projeto: a subscrição de um serviço, um táxi para uma reunião, um tipo de letra. O ecrã da tag mostra «Gasto», «Recebido» e «Líquido» — quanto o projeto rendeu realmente. Mais no artigo [«Beneficiários e tags»](#payees-tags).

### Pagamentos esperados {#scenario-freelance-expected}

A fatura foi emitida, e o dinheiro foi prometido até dia 15. Para não se esquecer e ver o que vem aí, crie um pagamento programado.

1. «Definições» → «Pagamentos programados» → «+ Pagamento».
2. «+ Entradas», o cliente, o valor, a data prometida para o pagamento, «Repetir» — «Uma vez».
3. O pagamento aparece em «O que vem» e no «Calendário» do «Resumo».
4. O dinheiro chegou a tempo — «Confirmar» no ecrã de confirmação. Antes do prazo — deslize a linha do pagamento para a esquerda — «Lançar». O cliente está atrasado — abra o pagamento e mude o campo «Data».

Enquanto o pagamento não for confirmado, não está no orçamento: os envelopes não se enchem com dinheiro prometido. Mais no artigo [«Pagamentos programados»](#scheduled).

### O que acompanhar {#scenario-freelance-reports}

| Onde | O que diz |
|---|---|
| «Resumo» → «Orçamento do mês» | O «Rendimento médio por mês» em 12 meses e o «Orçamento de dezembro» — quanto já tem para o mês seguinte. |
| «Resumo» → «Idade do dinheiro» | 30 dias ou mais — vive com o dinheiro do mês anterior. |
| «Resumo» → «Gastos do mês» | Se está a gastar mais do que o habitual neste momento. |
| «Relatórios» → «Receitas e despesas» | Uma tabela mês a mês: as receitas por origem — cada cliente na sua linha —, as despesas por grupo e a «Taxa de poupança». Vê tanto a sazonalidade como quem paga quanto. |
| «Relatórios» → «Tendência de gastos» | A sua despesa habitual por mês — a base para dimensionar a almofada. |
| «Relatórios» → «Fluxo de dinheiro» | Para onde foi o dinheiro ganho num período — e quanto sobrou. |
| «Relatórios» → «Idade do dinheiro» | Como cresce mês a mês a sua margem de tempo. |

Mais sobre os relatórios no artigo [«Relatórios»](#reports).

### O dinheiro do trabalho à parte {#scenario-freelance-business}

Se o trabalho tem uma conta própria e despesas próprias — serviços, equipamento, contabilista —, pode mantê-los num **segundo orçamento**, por exemplo «Trabalho». Toque no nome do orçamento no cabeçalho do «Resumo» — lá estão a troca de orçamento e um orçamento novo.

O orçamento do trabalho guarda os pagamentos e as despesas do trabalho. O que tira para viver vai como transferência para o seu cartão pessoal: no orçamento do trabalho é uma despesa, no pessoal é uma receita. Assim o orçamento pessoal vive com um valor estável todos os meses, e todos os altos e baixos ficam no orçamento do trabalho.

## De ordenado em ordenado {#scenario-paycheck}

O dinheiro acaba antes do mês, e o ordenado ainda está a uma semana. Como repartir o que tem, chegar ao próximo ordenado sem vermelho e, passo a passo, sair da corrida dos ratos.

*«Plano», «Resumo» e o ecrã da categoria — tudo mais abaixo*

### A ideia principal {#scenario-paycheck-idea}

Os envelopes não dão mais dinheiro do que o que tem. Mas mostram **de antemão** se ele chega até ao ordenado — não no último dia, mas no primeiro.

##### Aloque só o que tem

Um envelope enche-se com dinheiro que já está nas contas. Um ordenado prometido ainda não é dinheiro. [Como](#scenario-paycheck-now).

##### O essencial primeiro

Casa, comida, as deslocações para o trabalho, medicamentos, a prestação do empréstimo. Tudo o resto vem depois. [Como](#scenario-paycheck-now).

##### Um negativo não é um fracasso

Passe dinheiro de outro envelope e siga em frente. [Como](#scenario-paycheck-minus).

### Dia de pagamento — reparta logo {#scenario-paycheck-now}

Enquanto o dinheiro não está repartido, parece muito. Repartido por envelopes, diz a verdade: 200 € para a comida até dia 5, e mais nada.

##### Por ordem

1. Abra o «Plano». Em cima está «não alocado»: este dinheiro ainda não tem tarefa.
2. Primeiro encha os envelopes sem os quais não chega ao próximo ordenado: renda, contas de casa, «Supermercado», as deslocações para o trabalho, medicamentos, a prestação mínima do empréstimo.
3. Depois tudo o resto, até «não alocado» chegar a zero.
4. Não chega para tudo? Alguns envelopes ficam vazios. Não é um erro, mas uma resposta honesta: este mês não há dinheiro para isso.

Como pôr dinheiro num envelope — passo a passo no artigo [«Plano»](#budget-screen).

*O chip ficou vermelho — «Alocado em excesso»:*
Distribuiu mais do que tem nas contas. Reduza o valor posto de lado num dos envelopes — toque no valor e introduza menos. O dinheiro volta para «não alocado».

### Dois pagamentos por mês {#scenario-paycheck-two}

Dinheiro duas vezes por mês — reparte duas vezes. O primeiro pagamento vai para o que é preciso até ao segundo. O segundo vai para o resto e para o que vem depois dele.

##### As contas antes do pagamento — como pagamentos programados

Crie pagamentos programados para a renda, as contas de casa, o telemóvel: «Definições» → «Pagamentos programados» → «+ Pagamento». Aparecem no bloco «O que vem» e no «Calendário» do «Resumo», e chega um lembrete na véspera do vencimento. Vê que contas vencem antes do pagamento e quais depois — e o que cobrir com o primeiro. Mais no artigo [«Pagamentos programados»](#scheduled).

### Quanto pode gastar por dia {#scenario-paycheck-until}

##### «≈ … por dia»

Toque numa categoria no «Plano» — abre o ecrã dela. Por baixo de «Disponível» está quanto pode gastar por dia até ao fim do mês sem ficar negativo. Com 140 € no «Supermercado» e dez dias até ao fim do mês — «≈ 14,00 € por dia». Mais no artigo [«Ecrã da categoria»](#category-screen).

##### «A acabar» no «Resumo»

Ainda há dinheiro no envelope, mas está a gastar mais depressa do que o mês avança — a categoria aparece a amarelo no bloco «A acabar». É sinal para travar já, não daqui a uma semana. Mais no artigo [«Resumo»](#overview-blocks).

##### «Gastos do mês»

Um bloco no «Resumo»: se este mês está a gastar mais do que o habitual até esta data.

### Um negativo vermelho {#scenario-paycheck-minus}

Gastou mais do que o envelope tinha — o valor está vermelho. Cubra-o logo, antes de o mês acabar.

1. Toque no valor vermelho no «Plano».
2. Na folha «Gasto excedido», toque em «Cobrir de outra categoria». Abre «De onde tirar o dinheiro»: o «Não alocado» e todos os envelopes que têm dinheiro.
3. Toque em «Tirar …» ao lado de um envelope que possa dispensar. O negativo fica coberto — «Excesso coberto!».

Mais no artigo [«Plano»](#budget-screen).

*O negativo ficou até ao fim do mês:*
É anulado, mas não sem deixar rasto: o «não alocado» do mês seguinte diminui no mesmo valor. O próximo ordenado fica mais pequeno exatamente nesse negativo. Mais no artigo [«Como funciona o orçamento»](#start-months).

*Vários negativos, e há algo em «não alocado»:*
Toque em «não alocado» no cabeçalho do «Plano» → «Cobrir todos os gastos excedidos». A aplicação cobre todos os negativos do mês com o dinheiro não alocado de uma vez.

### O cartão de crédito não é a saída {#scenario-paycheck-card}

O envelope está vazio, mas o cartão de crédito tem plafond. A tentação compreende-se, mas uma compra com cartão de crédito com o envelope vazio é um negativo **amarelo**: não há dinheiro, e a dívida cresce. No mês seguinte terá de a pagar com o ordenado novo — ou seja, ele volta a ficar mais pequeno. Mais no cenário [«Cartões de crédito e dívidas»](#scenario-credit-yellow).

### Registe todos os dias {#scenario-paycheck-daily}

O envelope só diz a verdade enquanto todas as despesas estão registadas nele. Uma compra esquecida de ontem — e o «≈ … por dia» está a mentir-lhe.

- O lembrete da noite: «Definições» → «Planeamento» → «Lembretes» → «Gastos do dia» → «Lembrar de adicionar os gastos». Só chega se não registou nada nesse dia. **Logo após a instalação:** desligado.
- A forma mais rápida de registar é na caixa: [por voz](#voice) ou [com o leitor de recibos](#receipt). Sem tempo para escolher a categoria? — [«Para a caixa de entrada»](#entry-inbox), e organize à noite.

### Como sair da corrida dos ratos {#scenario-paycheck-out}

O objetivo não é só sobreviver, mas um dia viver com dinheiro ganho um mês antes. Avance degrau a degrau, um de cada vez.

(1)
##### Uma pequena almofada

A categoria «Reserva de emergência» com uma meta «Saldo» — para começar, o suficiente para pelo menos uma semana de despesas. O telemóvel avariou — o dinheiro sai daqui, não do envelope da comida. Mais no artigo [«Metas»](#goals-balance).

(2)
##### Despesas irregulares — um pouco de cada vez

O seguro, as prendas e o arranjo dos sapatos deixam de estragar o mês se puser dinheiro de lado para eles todos os meses. Uma meta «até à data» calcula quanto. Mais no cenário [«Poupar para algo grande»](#scenario-saving).

(3)
##### Dinheiro um mês à frente

Todos os meses, deixe um pouco a mais. Quando tiver juntado um mês inteiro, registe o ordenado para o mês seguinte: «Categoria» → «Receita para dezembro». A partir daí, cada mês está pago de antemão, e o dia do pagamento deixa de importar.

Quanto já tem para o mês seguinte — «Orçamento do mês» no «Resumo», a linha «Orçamento de dezembro». Como está a correr — a «Idade do dinheiro»: 30 dias ou mais quer dizer que saiu da corrida dos ratos. Mais no artigo [«Resumo»](#overview-age-month) e no artigo [«Como funciona o orçamento»](#start-ladder).

## Cartões de crédito e dívidas {#scenario-credit}

Um cartão de crédito, um crédito automóvel, uma dívida de antes da aplicação. Como configurar, como pagar para o orçamento não mentir e como ver a dívida a diminuir.

*«Contas», «Plano» → «Pagamentos de cartão», «Relatórios» → «Dívida dos cartões» e «Património»*

### Cartão de crédito {#scenario-credit-card}

A regra é só uma: uma compra com cartão de crédito gasta o dinheiro do envelope tal como uma compra com cartão de débito. A diferença está em onde esse dinheiro espera: não numa conta, mas na categoria do cartão de crédito, até pagar ao banco.

##### Como configurar

1. «Contas» → «⋮» → «Adicionar conta».
2. Tipo — «Cartão de crédito». Nome — como chama ao cartão.
3. Valor — quanto deve ao banco neste momento. Introduza-o e toque em «±» para o tornar negativo.
4. Guarde. O cartão vai para a secção «Cartões de crédito», e no «Plano» aparece no grupo «Pagamentos de cartão» uma categoria com o mesmo nome.

Não mexa nessa categoria: é por ela que a aplicação conta a dívida deste cartão. Mais no artigo [«Contas»](#accounts-screen).

##### Uma compra

Registe como sempre: conta — o cartão de crédito, categoria — o que comprou. Comprou comida por 35 € — o «Supermercado» ficou 35 € mais magro, e os mesmos 35 € passaram para a categoria do cartão de crédito, para o pagamento. Não precisa de pôr nada de lado por si.

### Dívida de antes de começar {#scenario-credit-old-debt}

A dívida inicial — 800 € no cartão desde o ano passado — a aplicação não a põe de lado sozinha: nunca houve dinheiro para ela nos envelopes.

Ponha dinheiro de lado para ela na categoria do cartão de crédito, como em qualquer envelope: no «Plano», toque no valor dela e introduza o que consegue este mês. Tudo de uma vez ou aos poucos — decide o utilizador. Enquanto não o puser de lado, não há dinheiro para a liquidar.

### O negativo amarelo {#scenario-credit-yellow}

Gastou com o cartão de crédito mais do que o envelope tinha — o valor ficou **amarelo**, com ícone de cartão. Vermelho, com ícone de carteira, é um negativo do seu próprio dinheiro.

##### O vermelho come o seu dinheiro

Um negativo no cartão de débito ou no dinheiro vivo. No fim do mês diminui o «não alocado» do mês seguinte.

##### O amarelo aumenta a dívida

Não gastou dinheiro — pediu-o emprestado. Só a parte coberta foi para a categoria do cartão de crédito; para o resto não há dinheiro para o pagamento.

##### O que fazer

Cubra um negativo amarelo como um vermelho: toque no valor → «Cobrir de outra categoria» → «Tirar …» de outro envelope. Então o dinheiro do pagamento é completado sozinho. Não conseguiu? No mês seguinte, ponha a diferença diretamente na categoria do cartão de crédito.

### O pagamento do cartão {#scenario-credit-payment}

Quanto pagar ao banco está na categoria do cartão de crédito no «Plano»: esse valor já está posto de lado para o pagamento.

1. «+ Transação», conta — o seu cartão de débito.
2. «Beneficiário» → a secção «Transferências» → o seu cartão de crédito. O cabeçalho do formulário fica cinzento, e a categoria não é necessária.
3. Valor — quanto está a pagar. Guarde.

O dinheiro no cartão de débito diminui, a dívida do cartão de crédito também, e com ela o valor posto de lado na categoria do cartão de crédito. Os envelopes não mudam: a despesa já a fez antes, quando fez as compras. Mais no artigo [«Formulário de transação»](#entry-transfer).

*Pagar tudo ou o mínimo:*
A categoria do cartão de crédito tem exatamente o que gastou com o cartão a partir dos envelopes. Pague todos os meses tudo o que está posto de lado, e não se acumula dívida nova. Pague só o mínimo, e o resto fica na categoria, à espera; o banco cobra juros sobre a dívida restante.

### Juros e comissões do cartão {#scenario-credit-card-interest}

O banco cobrou juros ou uma comissão de manutenção — isso é uma despesa.

Registe uma despesa: conta — o cartão de crédito, beneficiário — o banco, categoria — uma própria, por exemplo «Juros e comissões». O envelope diminui, e o dinheiro do pagamento é posto de lado, como em qualquer compra. Também aparece nos relatórios: quanto lhe custa este crédito.

### Empréstimo {#scenario-credit-loan}

Um crédito automóvel, um crédito à habitação, um pagamento a prestações — dinheiro que já gastou e está a devolver por partes.

##### Como configurar

1. «Contas» → «⋮» → «Adicionar conta».
2. Tipo — «Empréstimo». Valor — quanto falta pagar segundo o extrato do banco, com sinal de menos («±»).
3. A conta vai para a secção «Dívidas». Fica fora do orçamento: este dinheiro não tem envelopes, e o orçamento não toca na dívida inicial.

##### Um envelope para a prestação

Crie uma categoria para a prestação mensal — por exemplo, «Empréstimos» no grupo «Despesas fixas» — e uma meta «Por mês» com o valor da prestação. Todos os meses a meta lembra-o de pôr o dinheiro de lado. Mais no artigo [«Metas»](#goals-monthly).

### A prestação do empréstimo {#scenario-credit-loan-payment}

1. «+ Transação», conta — o cartão de onde paga.
2. «Beneficiário» → «Transferências» → a conta do empréstimo.
3. O empréstimo está fora do orçamento, por isso a aplicação pede uma categoria: escolha «Empréstimos». O dinheiro sai do envelope, e a dívida na conta do empréstimo diminui.

*O banco diz que 80 € da prestação são juros:*
Registe a prestação inteira como uma única transferência, como acima. Depois, uma vez por mês, registe os juros na própria conta do empréstimo: «Saídas», conta — o empréstimo, beneficiário — o banco, valor — os juros. A categoria não é necessária: a conta está fora do orçamento. Assim a dívida na aplicação coincide com a do banco, e o envelope «Empréstimos» entrega exatamente a sua prestação.

*Um lembrete da prestação:*
Crie um pagamento programado como transferência: «Definições» → «Pagamentos programados» → «+ Pagamento», «Beneficiário» → «Transferências» → a conta do empréstimo, categoria «Empréstimos», «Repetir» — «Mensalmente». O pagamento aparece nos ecrãs das duas contas, chega um lembrete antecipado, e «Confirmar» regista a transferência. O mesmo para o pagamento do cartão de crédito: do cartão de débito para o cartão de crédito. Mais no artigo [«Pagamentos programados»](#scheduled-new).

### Acompanhar a dívida {#scenario-credit-watch}

| Onde | O que diz |
|---|---|
| «Contas» | As secções «Cartões de crédito» e «Dívidas» — quanto deve neste momento. |
| «Plano» → «Pagamentos de cartão» | Quanto está posto de lado para liquidar cada cartão. |
| «Relatórios» → «Dívida dos cartões» | A dívida de todos os cartões de crédito mês a mês: se está a diminuir ou a crescer. Disponível se tiver um cartão de crédito. |
| «Relatórios» → «Património» | Tudo o que tem menos todas as dívidas. Cada prestação do empréstimo empurra a linha para cima. |

Mais sobre os relatórios no artigo [«Relatórios»](#reports-capital).

## Poupar para algo grande {#scenario-saving}

Um portátil, umas obras, um carro, a entrada de uma casa. Como pôr de lado um pouco de cada vez, ver se chega a tempo e não gastar a poupança por engano.

*«Plano», «Metas», o ecrã da categoria*

### Um envelope só para a compra {#scenario-saving-envelope}

O dinheiro do portátil misturado com o dinheiro para viver é o primeiro a ser gasto. Um envelope à parte protege-o: enquanto está em «Portátil», não aparece no «Supermercado».

1. No «Plano», encontre o grupo que tem «Compras grandes» e «Viagens e férias».
2. Toque em «⊕» ao lado do nome dele — uma categoria nova. Dê-lhe o nome da compra: «Portátil».
3. Ou poupe na categoria já existente «Compras grandes», se a compra for só uma.

Mais no artigo [«Plano»](#budget-screen).

### Uma meta «até à data» {#scenario-saving-goal}

Diga à aplicação quanto e até que mês — ela calcula quanto pôr por mês.

1. Toque na categoria no «Plano» → o cartão «Meta» → «Adicionar meta».
2. «Tipo de meta» — «Até à data».
3. «Valor» — o preço da compra, «Juntar até o mês» — quando precisa dele.
4. «Guardar».

Um portátil de 2400 € daqui a seis meses — a meta vai pedir 400 € por mês. Falhou um mês, e o que faltou reparte-se pelos meses restantes, por isso a prestação cresce. Pôs mais, e as seguintes diminuem. Mais no artigo [«Metas»](#goals-bydate).

*Poupar sem prazo:*
Uma meta «Saldo»: o envelope deve ter este valor, e quando não importa. Serve para «um carro novo um dia» e para uma almofada de emergência. Mais no artigo [«Metas»](#goals-balance).

### Estou a cumprir? {#scenario-saving-pace}

##### Uma estimativa rápida no ecrã da categoria

Toque na categoria — uma meta «até à data» tem um seletor por baixo da barra: «Por valor» e «Por prazo». Mexa em «Guardar por mês» — vê em que mês lá chega. Mexa no mês — vê quanto pôr. Gostou da nova data? — «Usar como prazo da meta: …». Mais no artigo [«Metas»](#goals-card).

##### Falta dinheiro este mês

No «Plano», por baixo do valor há uma bandeirinha e «faltam …». O chip «Subfinanciado» por cima da lista deixa só essas categorias. No «Resumo», o que falta aparece nos blocos «Metas» e «O que vem».

### Onde está o dinheiro {#scenario-saving-where}

A poupança fica muitas vezes numa conta à parte: uma conta poupança, um depósito a prazo, um mealheiro. A forma como essa conta está configurada decide se o dinheiro fica no envelope.

##### No orçamento — para uma compra

Uma conta do tipo «Conta bancária». Passou 400 € da conta à ordem para a poupança — o envelope «Portátil» não mudou: o dinheiro mudou de sítio, mas continua a ser seu e continua no orçamento. A meta vê-o e não volta a pedir. **Está a poupar para uma compra? Escolha esta opção.**

##### Fora do orçamento — para o património

Uma conta do tipo «Apenas acompanhamento»: investimentos, um PPR. A aplicação regista uma transferência para lá como dinheiro a sair de um envelope — pede uma categoria, e o envelope esvazia. Para uma compra isto não serve: a meta voltará a pedir dinheiro, embora o tenha.

Mais no artigo [«Contas»](#accounts-kinds).

### Várias metas ao mesmo tempo {#scenario-saving-many}

Férias, um portátil e as prendas de Natal — pode não haver dinheiro para tudo este mês.

«Plano» → «⋮» → «Alocar nas metas». A aplicação reparte o «não alocado» por todas as metas de uma vez. Não chega para tudo? As metas recebem dinheiro por ordem, de cima para baixo, tal como as categorias estão organizadas no «Plano». Mantenha o mais importante mais acima: «⋮» → «Mudar a ordem». Mais no artigo [«Metas»](#goals-allocate).

### A compra {#scenario-saving-buy}

1. Registe a compra como sempre — na categoria «Portátil». O envelope esvazia — foi para isso que poupou.
2. Saiu mais barato? O resto fica no envelope. Precisa dele noutro sítio? No «Plano», toque no valor de «Portátil» e introduza menos: a diferença volta para «não alocado».
3. Saiu mais caro? O valor fica vermelho. Toque nele → «Tirar …» de outro envelope.
4. Já não precisa da meta? «Plano» → «⋮» → «Metas» → toque na categoria → «Eliminar». O dinheiro no envelope fica. A categoria com a própria compra não se pode eliminar — só ocultar.

*Comprei com o cartão de crédito:*
Também funciona: o dinheiro de «Portátil» é posto de lado para o pagamento do cartão. Comprou a crédito ou a prestações? Isso é uma dívida; como a acompanhar está no cenário [«Cartões de crédito e dívidas»](#scenario-credit-loan).

### Quanto poupo {#scenario-saving-pay-yourself}

O bloco «Pague-se primeiro» no «Resumo» mostra que percentagem do rendimento põe de lado — no mês, em três meses e no ano. O normal é 10%. Que categorias contam como «poupado» escolhe-se em «Definições → Orçamento → Pague-se primeiro»: «Compras grandes», «Portátil», «Reserva de emergência». Mais no artigo [«Resumo»](#overview-blocks).

## Viagem com amigos {#scenario-trip}

Pagou o alojamento de quatro pessoas, um amigo pagou o jantar, a gasolina é a meias, e no estrangeiro ainda há dinheiro vivo noutra moeda. Como poupar para a viagem, ver quanto custou e não se perder em quem deve a quem.

*a tag da viagem, «Acerto de contas» no ecrã da tag, o formulário de transação*

### Antes da viagem {#scenario-trip-before}

Poupe em «Viagens e férias» com uma meta «até à data»: o valor é quanto espera gastar, o mês é quando vai viajar. A aplicação calcula a contribuição mensal. Mais no cenário [«Poupar para algo grande»](#scenario-saving-goal).

### Uma tag para a viagem {#scenario-trip-tag}

As despesas da viagem caem em categorias diferentes — «Supermercado», «Transportes», «Viagens e férias». Uma tag junta-as.

1. Logo na primeira compra da viagem, abra «Adicional» → «Tags» → escreva um nome, por exemplo «Suíça», → «Criar tag «…»».
2. Ponha esta tag em cada compra da viagem.
3. «⋮» da tag → «Mostrar em Minhas tags» — o total da viagem fica no «Resumo».

O ecrã da tag mostra «Gasto» e «Por categoria» — quanto custou a viagem e para onde foi o dinheiro. Mais no artigo [«Beneficiários e tags»](#payees-tags-tag).

### Paga por todos {#scenario-trip-pay-for-all}

Pagou o alojamento de quatro pessoas: 800 €. A sua parte é 200 €, e os outros 600 € devem voltar para si.

##### Divida o valor entre a sua parte e a dos amigos

1. Registe a compra de 800 €, conta — o seu cartão, tag — «Suíça».
2. «Categoria» → «Dividir o valor».
3. A primeira parte é «Viagens e férias», 200 €: é a sua parte.
4. A segunda parte também é «Viagens e férias», 600 €, e nela «+ tag» → uma tag nova «Suíça: amigos devem».
5. Abra o ecrã da tag «Suíça: amigos devem» → «⋮» → «Acerto de contas».

Agora o ecrã da tag diz «cobrar 600 €»: é quanto lhe devem. Mais sobre valores divididos no artigo [«Formulário de transação»](#entry-split).

*Porquê uma segunda tag, e não só uma:*
O «Acerto de contas» calcula gasto menos recebido. Se o ligasse em «Suíça», a sua própria parte também ficaria lá pendurada como «Cobrar», e o acerto nunca fecharia. Uma tag só na parte dos amigos chega a zero quando todos devolverem.

### Um amigo devolveu {#scenario-trip-paid-back}

1. «+ Transação» → «Entradas». Beneficiário — o amigo, valor — quanto devolveu, conta — onde o dinheiro chegou.
2. «Categoria» → «Para uma categoria de despesa…» → «Viagens e férias». Isto não é uma receita — é o seu dinheiro a voltar ao envelope.
3. Tags — «Suíça» e «Suíça: amigos devem».

Quando os três tiverem devolvido, o ecrã da tag «Suíça: amigos devem» diz «Quitado» a verde. E em «Suíça», o «Líquido» será 600 € menor do que o «Gasto» — no alojamento fica exatamente a sua parte. Mais no artigo [«Formulário de transação»](#entry-refund).

### Um amigo pagou {#scenario-trip-friend-paid}

Um amigo pagou o jantar, e a sua parte é 50 €. Do seu cartão ainda não saiu dinheiro — não há nada para registar.

Quando pagar ao amigo, registe nessa altura: uma despesa, beneficiário — o amigo, categoria — «Viagens e férias», tag — «Suíça». Até pagar, guarde a dívida de cabeça ou numa nota — a aplicação não acompanha a carteira dos outros.

### No estrangeiro {#scenario-trip-abroad}

##### Pagar com o seu cartão

O banco cobra o dinheiro na moeda do seu cartão. Registe o valor que o banco cobrou — vê-se na aplicação do banco. O valor em moeda local, se precisar, vai para a nota: «jantar 42 CHF».

##### Levou dinheiro vivo em moeda estrangeira

Crie uma conta «Dinheiro CHF»: «Contas» → «⋮» → «Adicionar conta», tipo «Apenas acompanhamento», «Moeda da conta» — CHF. Só uma conta fora do orçamento pode ter moeda própria. Como trabalhar com ela está mais abaixo.

##### Câmbio e despesas em dinheiro vivo

1. Trocou dinheiro — registe uma transferência do cartão para «Dinheiro CHF». Por baixo do beneficiário aparecem «Será creditado» e «Taxa»: quantos francos recebeu.
2. A conta está fora do orçamento, por isso a aplicação pede uma categoria: «Viagens e férias». O dinheiro saiu do envelope logo no câmbio.
3. Registe as despesas em dinheiro vivo em francos na conta «Dinheiro CHF» — sem categoria, o envelope já pagou. Ponha a tag «Suíça» como de costume.
4. Sobraram francos e trocou-os de volta? Uma transferência de «Dinheiro CHF» para o cartão, «Categoria» → «Para uma categoria de despesa…» → «Viagens e férias». O dinheiro volta ao envelope.

Mais sobre moedas no cenário [«Várias moedas e casos especiais»](#scenario-currencies).

### Depois da viagem {#scenario-trip-after}

- O ecrã da tag «Suíça»: o «Líquido» é quanto lhe custou a viagem depois de todas as devoluções, «Por categoria» mostra para onde foi o dinheiro. Útil quando poupar para a próxima. As despesas em francos ficam numa linha à parte: não há conversão pela taxa, e o próprio câmbio é uma transferência, por isso não entra no «Gasto».
- Já não precisa da tag na seleção? «⋮» da tag → «Ocultar da seleção». Continua nas transações.
- Sobrou dinheiro em «Viagens e férias»? Deixe-o lá até às próximas férias: o saldo positivo transita de mês para mês.

## Várias moedas e casos especiais {#scenario-currencies}

O ordenado numa moeda, a poupança noutra, um pouco de bitcoin e viagens ao estrangeiro. O que a aplicação faz com moedas, onde estão os limites e como manter as contas para os envelopes não mentirem.

*«Definições» → «Moeda do orçamento», contas fora do orçamento, uma transferência com taxa*

### A regra principal {#scenario-currencies-rule}

**Um orçamento tem uma moeda.** Todos os envelopes, todas as contas do orçamento e o «não alocado» estão nela. As outras moedas vivem em contas **fora do orçamento**: vê quanto lá está, mas esse dinheiro não é repartido pelos envelopes.

*Porque funciona assim:*
Um envelope responde a «quanto posso gastar em comida». Se tivesse euros e dólares, a resposta mudaria todos os dias com o câmbio. Uma só moeda nos envelopes — e a resposta é sempre a mesma.

### A moeda do orçamento {#scenario-currencies-budget-currency}

«Definições» → «Orçamento» → «Moeda do orçamento». A lista tem sessenta moedas, a atual na primeira linha, e uma pesquisa por nome e símbolo em cima: «zloty» encontra «Złoty».

Muda só o símbolo — a aplicação não converte valores. Se mantinha o orçamento em euros e escolher libras, 1000 € passam a ser 1000 £. Por isso a moeda escolhe-se no início, não a meio das contas.

*Um orçamento para cada moeda:*
Cada orçamento tem a sua moeda. Vive entre dois países? Pode manter dois orçamentos: «Casa» em euros e «Londres» em libras. Toque no nome do orçamento no cabeçalho do «Resumo» — lá estão a troca de orçamento e um orçamento novo; a moeda é pedida na criação.

### Uma conta noutra moeda {#scenario-currencies-foreign-account}

1. «Contas» → «⋮» → «Adicionar conta».
2. Tipo — «Apenas acompanhamento» (ou «Empréstimo», se for uma dívida). Só uma conta fora do orçamento pode ter moeda própria.
3. Na secção «Moeda da conta», toque no campo «Moeda» — abre uma lista de sessenta moedas, a mesma do orçamento: a atual na primeira linha, uma pesquisa por nome e símbolo em cima. Os nomes estão na língua do próprio país: «zloty» encontra «Złoty».
4. Criptomoeda — os chips por baixo do campo: ₿, USDT, USDC.
5. Não está lá? Escreva-a em «Ou introduza a sua (ticker)»: ETH, o ticker de uma ação ou de um fundo. Os valores da conta ficam identificados com ele.
6. Valor — quanto há na conta nessa moeda.

A conta vai para a secção «Fora do orçamento», com os valores no próprio símbolo: «1 200,00 $». Mais no artigo [«Contas»](#accounts-kinds).

### Câmbio {#scenario-currencies-exchange}

Comprou dólares com euros? É uma transferência entre as suas próprias contas, só que com taxa.

1. «+ Transação», conta — o seu cartão em euros, «Beneficiário» → «Transferências» → a conta em dólares.
2. Valor — quantos euros saíram.
3. Por baixo do beneficiário estão «Será creditado» e «Taxa». Introduza a taxa ou quantos dólares entraram — o outro é calculado. O botão ao lado da taxa inverte o sentido dela: euros por um dólar ou dólares por um euro.
4. A conta em dólares está fora do orçamento — a aplicação pede uma categoria: de que envelope saiu o dinheiro. Por exemplo, «Reserva de emergência» ou «Investimentos».

Mais no artigo [«Formulário de transação»](#entry-transfer).

*Vendeu os dólares de volta:*
Uma transferência da conta em dólares para o cartão. O campo «Categoria» abre «Onde lançar a receita»: «Receita para …» — se é dinheiro novo para distribuir, «Para uma categoria de despesa…» — se volta ao envelope de onde saiu.

### Viver num país, poupar noutro {#scenario-currencies-two-countries}

O orçamento fica na moeda em que recebe e gasta no dia a dia: euros, libras, francos. O dinheiro na terra natal, um depósito noutra moeda, dólares guardados «para uma emergência» — contas fora do orçamento, cada uma na sua moeda. Os envelopes contam aquilo de que vive, e o resto vê-se ao lado, em «Contas».

As despesas com cartão no estrangeiro registam-se no valor que o banco cobrou, na moeda do seu cartão. O valor em moeda local, se precisar, vai para a nota. Mais no cenário [«Viagem com amigos»](#scenario-trip-abroad).

### Criptomoeda {#scenario-currencies-crypto}

Uma conta fora do orçamento, o chip ₿, USDT ou USDC por baixo do campo «Moeda» — e o seletor «Criptomoeda» liga-se sozinho: «8 casas decimais». Para um ticker próprio (ETH, SOL), ligue-o à mão. Escolheu uma moeda normal da lista? O seletor desliga-se.

O número de casas decimais escolhe-se uma vez: quando a conta já tem transações, o seletor diz «Não é possível alterar: a conta tem transações».

### Moedas sem cêntimos {#scenario-currencies-no-cents}

O iene, o won e o dong não têm frações, mas a aplicação mostra «,00» na mesma. É só o aspeto: introduza números inteiros como sempre. Com a introdução «Com vírgula», 1500 é 1500, não 15,00. Como se introduzem os valores — «Definições» → «Idioma e formatos» → «Introdução do valor».

### Como se escrevem os valores {#scenario-currencies-format}

«Definições» → «Idioma e formatos» → «Formato dos valores»: o separador dos milhares e o decimal, o símbolo da moeda à esquerda ou à direita. Logo após a instalação segue o idioma da interface: em português de Portugal, «1 234,56 €». O inglês num telemóvel da Índia recebe logo lakhs e crores: «₹12,34,567.89». Mais no artigo [«Definições»](#settings-formats).

### O que falta {#scenario-currencies-not-yet}

- **Cotações da internet.** A taxa de câmbio introduz-a o utilizador, quando faz o câmbio. Isso também é uma proteção: a aplicação não pede cotações a nenhum serviço, por isso ninguém de fora fica a saber em que moedas está o seu dinheiro. Os seus dados ficam consigo — como também diz a [política de privacidade](#settings-s-about).
- **Conversão para uma só moeda.** O «Património» soma só as contas na moeda do orçamento: uma conta em dólares não entra. Em «Contas», uma secção que tem uma conta noutra moeda não mostra total — não há forma de somar euros com dólares.
- **Contas do orçamento noutra moeda.** Porquê — [mais acima](#scenario-currencies-rule).

## Resumo {#overview}

O primeiro ecrã ao abrir a aplicação: se o dinheiro chega, o que é urgente e o que vem aí — num só feed de cartões.

*O separador «Resumo» ao meio, em baixo no ecrã*

### Para que serve este ecrã {#overview-why}

O «Resumo» abre primeiro sempre que inicia a aplicação. É um olhar matinal sobre o dinheiro: está tudo bem, o que está a acabar, o que vem aí. Aqui não reparte dinheiro nem corrige transações — para isso existem o «Plano» e as «Transações». Aqui olha e decide para onde ir a seguir.

##### Está tudo bem

Se há dinheiro não alocado, onde há negativo, que envelopes se estão a esvaziar mais depressa do que o mês avança.

##### O que já aconteceu

As transações recentes, as grandes despesas, um calendário dos dias de despesa.

##### O que vem aí

Os pagamentos programados, as metas a que falta dinheiro e as despesas deste mês comparadas com o habitual.

Minimize a aplicação por mais de meio minuto, e ao voltar ela abre de novo o «Resumo». Se prefere voltar para onde estava, escolha isso em «Definições → Aparência → Voltar para».

### O que está onde no ecrã {#overview-screen}

Toque em qualquer captura para a abrir em ecrã inteiro.

[Ecrã «Resumo»: cabeçalho, o chip «Não alocado» e «Idade do dinheiro», «Transações recentes», «A acabar»]

1. **Definições** — a roda dentada. Todas as definições da aplicação: sincronização, cópias de segurança, aparência, idioma.

2. **Nome do orçamento** — toque para abrir a lista dos seus orçamentos e mudar para outro.

   *Como funciona:*
   Pode ter vários orçamentos: por exemplo, o pessoal e o da família, ou um antigo que não quer eliminar. Para criar, mudar o nome ou eliminar um orçamento — o menu «⋮» → «Orçamentos» ([mais abaixo](#overview-menu)).

3. **Sincronização** — duas setas num círculo. Toque — as suas alterações vão para a nuvem, e as dos outros dispositivos vêm para cá.

   *Como funciona:*
   O número no ícone é quantas alterações ainda não foram enviadas. Logo após uma sincronização o ícone pisca durante 15 segundos: verde — resultou, vermelho — não resultou. Mantenha o dedo nele, e a aplicação diz o que aconteceu.

   Uma falha isolada costuma ser a rede: o metro, uma casa no campo. Se falhar quatro vezes seguidas, o ícone fica vermelho com um «!» dentro até resultar. Sem nuvem ligada — o ícone fica na cor normal, sem número.

4. **O menu «⋮»** — orçamentos, escolha dos blocos, «Ocultar valores». Explicado [mais abaixo](#overview-menu).

5. **«Não alocado»** — o dinheiro que está nas contas, mas ainda não foi repartido pelos envelopes. Toque, e a aplicação sugere como o distribuir.

   *Como funciona:*
   O rótulo muda com o número:

   - **«Não alocado»** — há dinheiro para distribuir. Na captura são 300 €: entrou um ordenado, e os envelopes de novembro já estão cheios.
   - **«Tudo alocado»**, a verde — cada euro tem uma tarefa. É o objetivo.
   - **«Alocado em excesso»**, a vermelho — foi posto nos envelopes mais do que há nas contas. Tire o excesso de alguma categoria no ecrã «Plano».

   Só pode tocar quando há algo para distribuir. Abre a folha «Alocação automática do orçamento»: «Cobrir todos os gastos excedidos», «Subfinanciado», «Alocado no mês passado» e outras formas. Ao lado de cada uma está quanto levaria. Nada muda até confirmar. Mais sobre envelopes — no artigo [«Plano»](#budget).

6. **«Idade do dinheiro»** — quantos dias, em média, o seu dinheiro fica parado antes de o gastar.

   *Como funciona:*
   Na captura são 52 dias: o que gasta hoje chegou-lhe há quase dois meses. A aplicação pega nas últimas dez despesas e vê que receita pagou cada uma — o dinheiro mais antigo é gasto primeiro.

   Menos de 30 dias — vive de ordenado em ordenado, e qualquer atraso no pagamento atinge o orçamento. Mais de 30 — gasta o dinheiro do mês anterior, e o novo ordenado espera a sua vez com calma. Um negativo — foi gasto mais do que havia nas contas do orçamento. A ampulheta do ícone diz o mesmo: cheia — 30 dias ou mais, a meio — menos, vazia — negativo.

   A idade pode calcular-se de três formas, e a partir de 30 dias faz sentido viver com o dinheiro do mês anterior. Tudo isto — [mais abaixo](#overview-age).

7. **Blocos** — cartões de resumo, uns por baixo dos outros. Quais mostrar e por que ordem decide o utilizador. Cada bloco é explicado [mais abaixo](#overview-blocks).

8. **«+ Transação»** — registar uma despesa ou uma receita. Por cima — a câmara (recibo pelo código QR) e o microfone (por voz). Deslize para baixo, e os botões recolhem-se num só «+».

   *Como funciona:*
   É o mesmo formulário do ecrã [«Transações»](#transactions): todos os separadores têm uma entrada para ele.

### Os blocos por ordem {#overview-blocks}

Por baixo do chip «Não alocado» (marcas 5 e 6) vêm os cartões. Aqui estão pela ordem que têm logo após a instalação. Um bloco sem nada para mostrar esconde-se sozinho: sem tags — sem «Minhas tags», sem metas — sem «Metas».

Para tirar um bloco, voltar a mostrá-lo ou subi-lo — «⋮» → «Widgets» ([mais abaixo](#overview-menu)).

[O bloco «Transações recentes» na captura do «Resumo»]

#### Transações recentes

Os últimos cinco registos: data, beneficiário, valor, categoria e nota. Prático para verificar se tudo de ontem está registado.

*Como funciona:*
A receita leva o sinal «+», a despesa, «−». Um valor dividido («Worten» na captura) tem um ícone de garfo ao lado, e as categorias dele aparecem separadas por pontos. Há duas entradas na captura: um ordenado e 43 € do André — um amigo devolveu a metade dele da «Worten». Isto não é uma receita, mas um reembolso para o «Supermercado» (como registar — no artigo [«Formulário de transação»](#entry)).

As linhas aqui não se podem tocar. Para corrigir uma transação, abra as [«Transações»](#transactions).

[O bloco «Excessos e avisos» na captura do «Resumo»]

#### Gasto excedido e «A acabar»

Os envelopes que pedem atenção já. Toque numa linha para abrir o ecrã dessa categoria.

*Como funciona:*
- **«Gasto excedido»**, a vermelho — a categoria está negativa: gastou mais do que pôs de lado. Ícone de carteira quer dizer negativo do seu próprio dinheiro; vai tirar do «não alocado» do mês seguinte. Ícone de cartão e amarelo querem dizer negativo no cartão de crédito: passou a dívida do cartão em vez de comer o seu dinheiro. Para acabar com o negativo — no ecrã [«Plano»](#budget).
- **«A acabar»**, a amarelo — o envelope ainda tem dinheiro suficiente, mas está a gastar mais depressa do que o mês avança. A aplicação reparte o plano do mês igualmente pelos dias e dá uma margem de 15%. Na captura, hoje é 10 de novembro, e no «Supermercado» foi gasto mais do que o devido até esta data, mesmo com a margem.
- **«Tudo sob controlo»** — sem negativos, sem avisos. O bloco mostra isto em vez de ficar vazio.

As categorias com exatamente zero não aparecem aqui: o plano foi cumprido ao cêntimo.

[O bloco «Para onde foi o dinheiro» na captura do «Resumo»]

#### Para onde foi o dinheiro

As cinco categorias mais caras do mês: valor, percentagem de todas as despesas e uma barra do mesmo comprimento.

*Como funciona:*
Na captura, a «Renda» é 76% das despesas de novembro: a renda paga-se no dia 1, de uma vez, enquanto as outras despesas se vão acumulando dia a dia. Até ao fim do mês as percentagens equilibram-se.

Deslize o cartão para a direita com o dedo para ver o mês anterior, para a esquerda para o seguinte. Para voltar ao mês atual — o chip «Hoje», que aparece no cabeçalho do cartão quando foi para outro mês.

[O bloco «O que vem» na captura do «Resumo»]

#### O que vem

Os pagamentos programados mais próximos e as metas a que falta dinheiro — até seis linhas, por data.

*Como funciona:*
Um pagamento programado tem ícone de calendário, uma meta tem uma bandeirinha. Há duas metas na captura: na «Reserva de emergência» faltam 1124,53 € até ao fim de novembro, em «Viagens e férias» — 100 €. O valor a amarelo é quanto ainda falta pôr.

As linhas não se podem tocar: para pôr dinheiro numa categoria — o ecrã [«Plano»](#budget), pagamentos programados — «Definições → Planeamento».

[O bloco «Orçamento do mês» na captura do «Resumo»]

#### Orçamento do mês

De onde veio o número de «Não alocado»: uma escada do saldo do mês anterior até ao total.

*Como funciona:*
Leia de cima para baixo, como um talão:

- **Trazido de outubro** — quanto não foi alocado no mês anterior.
- **Orçamento de novembro** — o rendimento deste mês: na captura, dois ordenados de 1400 € cada.
- **Alocado em novembro** — quanto já foi repartido pelos envelopes.
- **Não alocado** — o total, o mesmo número do chip no topo do ecrã.

Por baixo da linha fica o «Planeamento»: quanto já há para dezembro, o rendimento médio por mês e quanto as suas metas pedem por mês, com a percentagem do rendimento. Às vezes aparecem mais linhas — o gasto excedido do mês anterior, dinheiro vindo das poupanças, dinheiro posto de lado para a frente; o bloco esconde as linhas vazias.

O cartão desliza para os dois lados, também para a frente: pode alocar dinheiro para dezembro já em novembro.

[O bloco «Património» na captura do «Resumo»]

#### Património

Tudo o que tem menos as dívidas — e como mudou.

*Como funciona:*
Em letra grande — o seu património hoje: 12 209,72 € na captura. À direita — quanto cresceu no período (+4343,99 € em 6 meses), em baixo — uma linha por mês e a decomposição: «Ativos» (todas as contas com saldo positivo) e «Dívidas» (cartões de crédito e empréstimos).

No «⋮» do bloco: o período — 6 meses, 12 meses, este ano ou desde sempre — e «Contas noutras moedas»: essas contas aparecem como linhas à parte na sua própria moeda, sem conversão e fora do total geral.

**Logo após a instalação:** o bloco está desligado; ligue-o em «⋮» → «Widgets».

[O bloco «Metas» na captura do «Resumo»]

#### Metas

Quantas categorias não atingem a meta este mês, e por quanto. Toque para abrir o ecrã «Metas».

*Como funciona:*
Na captura, faltam 1224,53 € a duas metas juntas. As metas definem-se no ecrã da categoria ou no ecrã «Metas»: «Reservar todos os meses», «Juntar até …», «Manter no saldo», «Percentagem do rendimento» ou «lista».

[O bloco «Pague-se primeiro» na captura do «Resumo»]

#### Pague-se primeiro

Que percentagem do rendimento põe de lado para o seu eu do futuro — num mês, três meses e um ano.

*Como funciona:*
A regra é antiga e simples: de cada ordenado, pague primeiro a si mesmo, e só depois a todos os outros. O normal é 10% do rendimento.

Na captura, em novembro estão postos de lado 11,2% — 34,00 € acima do normal. Se ficar abaixo do normal, por baixo da percentagem aparece «em falta», com um valor.

Que categorias contam como «poupado» escolhe o utilizador: «Definições → Orçamento → Pague-se primeiro». Normalmente são as poupanças: «Reserva de emergência», «Investimentos». Sem nenhuma escolhida, o bloco não aparece.

[O bloco «Grandes gastos» na captura do «Resumo»]

#### Grandes gastos

As três maiores despesas do mês — data, beneficiário, valor, categoria e nota.

*Como funciona:*
Ajuda a apanhar o que salta à vista: uma ida às compras inesperadamente cara vê-se logo, não no fim do mês.

**Logo após a instalação:** o bloco está desligado; ligue-o em «⋮» → «Widgets».

[O bloco «Calendário» na captura do «Resumo»]

#### Calendário

O mês como uma grelha de dias: quanto mais clara a célula, mais se gastou. Toque num dia para ver o que aconteceu nele.

*Como funciona:*
Um olhar pormenorizado com os modos e o menu — [mais abaixo](#overview-heatmap).

[O bloco «Minhas tags» na captura do «Resumo»]

#### Minhas tags

Até quatro tags: quanto se gastou com elas, em que período e quantas transações.

*Como funciona:*
Uma tag com «Acerto de contas» mostra à direita quanto falta cobrar ou devolver para ficar quite: na captura, «#a meias» mostra «cobrar 43,00 €»: uma compra na «Worten» foi dividida com um amigo, e ele já devolveu metade. Toque numa tag para abrir o ecrã dela. «Todas as tags ›» por baixo do bloco — a lista completa.

No «⋮» do bloco: «Escolher tags…» — que quatro mostrar e por que ordem; e o período — «Total de todo o período» ou «Total deste mês». Não escolha nada, e a aplicação mostra sozinha as tags com transações nos últimos 30 dias. Sem tags — sem bloco.

Sobre as próprias tags — no artigo [«Transações»](#transactions).

[O bloco «Gastos do mês» na captura do «Resumo»]

#### Gastos do mês

Quanto gastou desde o início do mês — comparado com quanto costuma gastar até esta data.

*Como funciona:*
Em letra grande — as despesas desde o dia 1: 1620,99 €. À direita — a diferença em relação ao habitual: +59,87 €, ou seja, um pouco mais do que o habitual. A linha forte é este mês, a fina é o habitual.

«Normalmente» é o meio dos seus meses anteriores no último ano: um mês invulgarmente caro não o desloca. O cartão desliza como «Para onde foi o dinheiro».

### O calendário em pormenor {#overview-heatmap}

O bloco mais vivo do «Resumo»: um mês inteiro num cartão. Passe os olhos — e vê que dias foram caros e quais passaram sem despesa nenhuma.

[O bloco «Calendário»: chips Despesas, Receitas, Programados, a grelha de novembro, hoje — dia 10, «3 dias sem despesas»]

(E)
#### Modos

O que colorir: «Despesas», «Receitas» ou «Programados».

*Como funciona:*
- **«Despesas»** — seis tons. A célula mais clara é o dia mais caro do mês, e cada degrau abaixo é metade. O brilho responde a «quantas vezes este dia foi mais barato do que o mais caro».
- **«Receitas»** — o mesmo para o dinheiro que entrou, a verde.
- **«Programados»** — os dias em que vencem os pagamentos programados. Um dia passado em que tudo foi registado leva um visto; onde um pagamento ficou por fazer, o número do dia fica vermelho.

No modo «Despesas», um dia futuro com um pagamento programado tem um contorno tracejado.

(F)
#### O menu do calendário

Três pontinhos no cabeçalho do cartão, à direita do mês. Define o que mais desenhar na grelha e o que mostrar na folha do dia.

*Como funciona:*
**A folha do dia** não é um item do menu. Abre quando toca num número da grelha do calendário: uma lista do que aconteceu nesse dia sobe a partir de baixo (captura [mais abaixo](#overview-day)). O menu só define o que essa folha contém.

Itens no modo «Despesas»:

- **«Receitas como pontos»** — um dia em que entrou dinheiro leva um ponto verde na célula.
- **«Dia inteiro na folha do dia»** — toque num número, e a folha do dia mostra não só as despesas, mas também as receitas desse dia: como uma linha recolhida em baixo; toque para a abrir. Desligado — a folha mostra só as despesas.

No modo «Programados» os itens são outros: mostrar os pagamentos futuros como preenchimento da célula ou como ponto, e se destacar a vermelho o número de um dia com um pagamento em atraso.

**Logo após a instalação**, «Receitas como pontos» e «Dia inteiro na folha do dia» estão desligados.

(G)
#### Hoje

O dia de hoje tem contorno.

*Como funciona:*
Deslize o calendário com o dedo para ver outro mês, para trás e para a frente sem limite: também serve de calendário normal, onde se vê em que dia da semana calha uma data. Para voltar — o chip «Hoje» no cabeçalho do cartão.

(H)
#### Dias sem despesas

Quantos dias do mês passaram sem uma única despesa. À direita — a escala de brilho.

*Como funciona:*
Uma célula vazia no passado é um dia sem despesas. Se a única coisa nesse dia foi um reembolso de uma loja, em vez do preenchimento há um anel vazio.

#### A folha do dia: toque num número do calendário {#overview-day}

Sobe uma folha a partir de baixo: a data e o total do dia no cabeçalho, e por baixo cada transação. Um valor dividido aparece em partes: na captura, «Worten» — 61 € de supermercado e 25 € de produtos de limpeza.

[Folha do dia 10 de novembro: total −43,00 €, duas partes da compra na «Worten», o reembolso do André]

Como abrir: no «Resumo», encontre o «Calendário» e toque no número do dia que quer — na captura acima é o 10, com o contorno de «hoje» (G). A folha mostra o que o calendário colore: no modo «Despesas» — as despesas do dia, em «Receitas» — o dinheiro que entrou. Para ver os dois de uma vez, ligue «Dia inteiro na folha do dia» no menu do calendário (F). Para fechar a folha, deslize-a para baixo ou toque fora dela.

No modo «Programados» a folha é outra: o que não foi registado, o que foi e o que ainda vem. Deslize um vencimento para a esquerda — «Lançar», para a direita — «Eliminar».

### Idade do dinheiro em pormenor {#overview-age}

O número no chip responde à pergunta: quantos dias ficou o meu dinheiro parado antes de o gastar. O ordenado chegou a 1 de outubro, e a 5 de novembro compra pão com o que sobrou do dinheiro de outubro — esse dinheiro tem 35 dias. A aplicação pega nas últimas dez despesas, encontra para cada uma a receita que a pagou (o dinheiro mais antigo primeiro) e mostra a média.

##### Menos de 30 dias

De ordenado em ordenado: as despesas de hoje pagam-se com o último ordenado, e qualquer atraso atinge logo.

##### 30 ou mais

Um mês à frente: gasta o dinheiro do mês anterior. É o objetivo do método — [o que fazer a seguir](#overview-age-month).

##### Um negativo

Foi gasto mais do que havia nas contas do orçamento.

#### Três formas de calcular {#overview-age-modes}

A idade do dinheiro é uma métrica discutível, e não há uma fórmula única correta para ela. Por isso a forma é escolha sua: «Definições → Orçamento → Idade do dinheiro». O número muda logo — tanto no chip como no relatório «Idade do dinheiro».

##### Clássico (YNAB FIFO) · logo após a instalação

A forma do YNAB. Não vê transferências — nem para a poupança, nem da poupança. Uma despesa para a qual não tinha dinheiro pesa exatamente −1 dia, seja de cem euros ou de dez mil.

Bom se não mexe na poupança: aí é honesto e coincide com o YNAB. Mau se vive de transferências da poupança: o dinheiro chega à conta à ordem, ele não o vê e desenha dias positivos animadores. Num orçamento real, as contas estavam 3000 € negativas, cobertas com transferências de «Investimentos» — e o Clássico mostrava +10 dias.

##### Tendo em conta as reservas · o mais próximo da verdade

Uma transferência da poupança é dinheiro a entrar no orçamento, uma transferência para a poupança é dinheiro a sair dele. Uma despesa além do que tinha mede-se em dias do seu rendimento: gastou o rendimento de uma semana além do que tinha — cerca de menos 7 dias.

O resultado é a média das últimas 10 despesas, por isso uma despesa negativa entre outras cobertas fica suavizada.

##### Com reservas e profundidade do negativo

O mesmo que a anterior enquanto o orçamento está positivo. Mas enquanto está negativo, mostra não a média, mas a profundidade do buraco: quantos dias do seu rendimento habitual vai levar a tapá-lo.

Isto já não é uma idade, mas um sinal de alarme. Prático enquanto sai do negativo: o número diminui honestamente a cada ordenado.

##### Qual escolher

O mais próximo da verdade é **«Tendo em conta as reservas»**: conta exatamente o dinheiro das suas contas do orçamento, com tudo o que veio da poupança e foi para ela. O Clássico só é honesto enquanto não mexe na poupança. A profundidade do negativo é para quem está negativo agora e quer ver quanto falta. Se não passa dinheiro para a poupança e de volta e não gasta mais do que tem, os três mostram o mesmo número.

#### Idade de 30 dias ou mais: viva com o dinheiro do mês anterior {#overview-age-month}

Como as suas despesas já são pagas pelo último ordenado, este mês não precisa do atual. Dê-o diretamente ao mês seguinte: assim cada mês começa com o dinheiro pronto, e aloca-o de antemão em vez de esperar pelo dia do pagamento.

##### Como fazer

1. Registe o ordenado como sempre: «+ Transação» → «Entradas», beneficiário, valor.
2. Toque no campo «Categoria». Abre a folha «Onde lançar a receita».
3. Escolha «Receita para dezembro» — o mês seguinte — em vez de «Receita para novembro». Guarde.

A data da transação continua a real — o dia em que o dinheiro chegou. Muda só o mês do orçamento em que aparece. Um ordenado já registado passa-se da mesma forma: abra-o e mude a categoria.

##### Por que ordenado começar

Por aquele que ainda não repartiu pelos envelopes. Passá-lo diminui o «não alocado» deste mês no valor do ordenado. Se a seguir aparecer um «Alocado em excesso» vermelho, esse dinheiro já está a trabalhar este mês: devolva o ordenado a este mês e passe o seguinte.

##### Como muda o orçamento

- **Este mês** vive do que entrou antes. O novo ordenado já não cai no «não alocado» dele.
- **O mês seguinte** recebe o dinheiro de antemão. No ecrã «Plano», avance com a seta «›» — o ordenado já está no «não alocado» dele, e pode encher os envelopes antes do dia 1. No «Resumo», no «Orçamento do mês» por baixo da linha — a linha «Orçamento de dezembro».
- **No dia 1** o mês inteiro já está pago. O dinheiro aloca-se uma vez, no início do mês, em vez de aos bocados depois de cada pagamento. «Alocado no mês passado» na alocação automática fá-lo com um toque.
- **As metas «% renda»** com base no rendimento do mês conhecem-se desde o primeiro dia: o rendimento do mês chegou no mês anterior.
- **Os relatórios** («Receitas e despesas», «Pague-se primeiro») contam esse ordenado no mês para o qual foi posto de lado.
- **A própria idade do dinheiro** não cresce por causa desta marcação: cresce quando gasta menos do que ganha. A marcação fixa a reserva — o dinheiro do mês seguinte não se dissolve neste. Até chegar o mês dela, essa receita não conta para a idade.

### O menu «⋮» {#overview-menu}

Os orçamentos, o aspeto do «Resumo» e o modo de apresentação.

[Menu «⋮» do ecrã «Resumo»: Orçamentos, Widgets, Ocultar valores, Dicas]

(A)
#### Orçamentos

Tudo sobre os orçamentos numa só folha.

*Como funciona:*
«Criar um novo orçamento», «Escolher orçamento», «Eliminar o orçamento». O último orçamento que resta não se pode eliminar — a aplicação precisa de pelo menos um. Para simplesmente mudar de orçamento, é mais rápido tocar no nome no topo do ecrã.

(B)
#### Widgets

Que blocos mostrar no «Resumo» e por que ordem.

*Como funciona:*
Visto — o bloco aparece, vazio — está oculto. Para subir ou descer um bloco, arraste-o pela pega à direita. A definição vive neste dispositivo: num tablet, o «Resumo» pode ser diferente do do telemóvel.

(C)
#### Ocultar valores

Pontos em vez de números. Para o momento em que outra pessoa pode ver o ecrã.

*Como funciona:*
Virou o telemóvel para alguém, está a tirar uma captura para o suporte, a gravar um vídeo — ligue-o, e os valores em todos os ecrãs passam a «••••». O sinal «+» ou «−» fica: diz para que lado foi o dinheiro, mas não quanto. Barras, gráficos e cores ficam como estavam.

Enquanto o modo está ligado, há um olho riscado no cabeçalho do «Resumo» — toque nele para trazer os valores de volta. Ou no mesmo «⋮» — o item agora chama-se «Mostrar valores». O modo mantém-se depois de reiniciar a aplicação.

(D)
#### Dicas

Todas as dicas deste ecrã num só sítio — e uma ligação para esta página.

[Folha «Widgets da visão geral»: blocos com vistos e pegas para arrastar]
**«Widgets».** Visto — mostrar, a pega à direita — arrastar.

### O que pode fazer no ecrã {#overview-gestures}

A maior parte das linhas do «Resumo» é só para ler. Podem tocar-se as que levam a algum lado.

| Faça isto | O que acontece |
|---|---|
| Puxe o ecrã para baixo | Recalcular todos os blocos. |
| Toque no nome do orçamento | Mudar para outro orçamento. |
| Toque em «Não alocado» | A folha «Alocação automática do orçamento» — se houver algo para distribuir. |
| Deslize um cartão para a esquerda ou para a direita | Outro mês — em «Para onde foi o dinheiro», «Orçamento do mês», «Calendário» e «Gastos do mês». No primeiro arranque, um dedo mostra este gesto sozinho. |
| Toque numa linha de gasto excedido | O [ecrã da categoria](#category): saldo, despesas, as transações do mês. |
| Toque num dia do calendário | A folha do dia: o que aconteceu nesse dia. |
| Toque em «Metas» ou numa tag | O ecrã «Metas» ou o ecrã da tag. |

## Plano {#budget}

Os seus envelopes. É aqui que decide quanto dinheiro pôr de lado para a comida, a renda e tudo o resto — e vê quanto resta em cada envelope.

*O separador «Plano» em baixo no ecrã*

### Para que serve este ecrã {#budget-why}

Imagine uma pilha de envelopes com os nomes «Supermercado», «Renda», «Contas de casa». No dia do pagamento reparte o dinheiro por eles. Quando gasta, tira-o do envelope certo. O envelope esvaziou — acabou o dinheiro para isso este mês, a não ser que passe algum de outro.

O ecrã «Plano» é essa pilha de envelopes. Cada linha é um envelope (na aplicação chama-se categoria), e o valor à direita é quanto está nele agora. A regra principal é só uma: distribua todo o seu dinheiro pelos envelopes até aparecer «Tudo alocado» no topo.

##### Repartir o ordenado

Entrou dinheiro — apareceu «não alocado» no topo. Distribua-o pelos envelopes.

##### Verificar antes de comprar

«Posso comprar uns ténis novos?» — veja o valor ao lado de «Roupas e calçados».

##### Acabar com o vermelho

Gastou mais do que pôs de lado? Passe dinheiro de outro envelope.

### O que está onde no ecrã {#budget-screen}

Toque em qualquer captura para a abrir em ecrã inteiro.

[Ecrã «Plano», agosto: «Tudo alocado», chips «Falta» e «Disponível», grupos de categorias com saldos e barras]

1. **Mês** — que mês está a repartir agora.

   *Como funciona:*
   As setas «‹» e «›» passam os meses. Toque no nome para abrir a escolha do mês, sem ter de passar um a um.

   Pode avançar sem limite — e isso é útil: em setembro já pode pôr de lado dinheiro para as prendas de dezembro. Cada mês tem os seus envelopes, e o que sobra num envelope passa sozinho para o mês seguinte.

2. **«Não alocado»** — o dinheiro que ainda não está em nenhum envelope. O número mais importante do ecrã.

   *Como funciona:*
   Chega um ordenado — cai aqui. A sua tarefa é distribuí-lo pelos envelopes até isto chegar a zero. Este sítio tem três estados:

   - **um número num chip colorido** — o dinheiro está à espera de uma tarefa. Toque no chip para abrir a alocação automática: a aplicação propõe repartir o dinheiro como no mês passado, pela média das despesas, pelas metas ou pelas suas percentagens;
   - **«✓ Tudo alocado»** — objetivo atingido: cada euro tem uma tarefa. Como na captura;
   - **«alocado em excesso» a vermelho** — pôs nos envelopes mais do que tem. Toque — e tire o excesso dos envelopes.

3. **O menu «⋮»** — metas, ordem, aspeto das linhas. Cada item é explicado [mais abaixo](#budget-menu).

4. **Chips de filtro** — mostrar só os envelopes que pedem atenção.

   *Como funciona:*
   «Excedido» — envelopes negativos. «Falta» — envelopes a que ainda falta para a meta deste mês. «Disponível» — onde há dinheiro. O número no chip é quantos envelopes destes existem; na captura, dois esperam dinheiro para chegar à meta, e dez têm dinheiro.

   Um chip com zero não aparece: se nada passou do limite, o «Excedido» simplesmente não aparece. Toque em «Todas» para voltar a ver a lista completa.

5. **Grupo** — uma prateleira de envelopes semelhantes.

   *Como funciona:*
   «Despesas fixas», «Despesas do dia a dia»… À direita — quanto há em todos os envelopes deste grupo. Toque no nome para recolher o grupo e o tirar do caminho. Mantenha o dedo para um menu: «Renomear o grupo», adicionar uma categoria ou um grupo novo, eliminar.

   Ligue «Percentagem do rendimento» no menu «⋮» — e por baixo do valor do grupo vê que percentagem do rendimento do mês pôs em todos os envelopes dele juntos. Vê-se logo que as «Despesas fixas» levam, digamos, metade do ordenado, e as «Despesas do dia a dia», um terço. A percentagem conta todos os envelopes do grupo, mesmo que o grupo esteja recolhido ou alguns envelopes estejam escondidos por um filtro.

6. **⊕ ao lado de um grupo** — um envelope novo neste grupo.

7. **Categoria** — um envelope.

   *Como funciona:*
   Toque na linha para abrir o [ecrã da categoria](#category): todas as despesas deste envelope no mês e as tendências dos meses anteriores.

   Pode deslizar a linha para a esquerda ou para a direita com o dedo — para mudar o nome, passar para outro grupo ou eliminar. Como exatamente — na secção [«O que pode fazer com uma linha»](#budget-gestures).

8. **O valor à direita** — quanto está no envelope agora. A cor dele é a principal pista do ecrã.

   *Como funciona:*
   - **Verde** — há dinheiro, pode gastar.
   - **0,00 cinzento** — o envelope está vazio. Para uma renda já paga, é normal.
   - **Vermelho, com ícone de carteira** — gastou mais do que havia. Este negativo vai comer o dinheiro do mês seguinte.
   - **Amarelo, com ícone de cartão** — também é negativo, mas pagou com cartão de crédito: a dívida do cartão cresceu, e o dinheiro do orçamento não foi tocado.

   #### Como pôr dinheiro num envelope

   1. Toque no valor à direita.
   2. Abre uma janela com um teclado. Mostra não o saldo, mas quanto já pôs de lado neste envelope este mês.
   3. Introduza o novo valor — o primeiro dígito substitui o antigo. Quer somar? Toque em «+», introduza 35 e «=».
   4. O envelope tem meta? Toque em «Para a meta: …» — o valor necessário preenche-se sozinho.
   5. Toque em «Concluir».

   O dinheiro sai do «não alocado» no topo — diminui exatamente no mesmo valor.

   #### Como acabar com um negativo vermelho

   1. Toque no valor vermelho.
   2. Abre a folha «Gasto excedido: Supermercado» com dois itens. «Alterar o orçamento» abre o teclado de valor deste envelope, para o completar com o «não alocado». «Cobrir de outra categoria» passa dinheiro de outros envelopes; mais sobre isso abaixo.
   3. Toque em «Cobrir de outra categoria». Em cima — «A cobrir: 35 €», em baixo — «De onde tirar o dinheiro»: a primeira linha é «Não alocado», depois todos os envelopes que têm dinheiro, com o saldo de cada um.
   4. Cada linha tem um botão «Tirar …»: a aplicação já calculou quanto se pode tirar dali. Toque nele ao lado de um envelope que possa dispensar. Por exemplo, «Lazer e hobbies».
   5. Abre um teclado com esse valor. Concorda — toque em «Tirar …». Quer tirar menos? Introduza o seu valor.
   6. Um envelope não chegou? Tire o resto do seguinte. Quando o negativo acabar, a folha diz «Excesso coberto!».

9. **Barra** — quanto do que pôs de lado já foi gasto.

   *Como funciona:*
   Em «Contas de casa», na captura, a barra está quase cheia: quase tudo o que foi posto de lado para o mês já se foi. Passou do fim, e a barra fica vermelha.

   Se o envelope tem meta, a barra já não mostra as despesas, mas quanto da meta está cumprido. As barras podem desligar-se no menu «⋮».

   No mês atual, a barra das despesas tem um traço vertical fino — hoje: quanto do mês já passou. Se o preenchimento passou o traço, está a gastar mais depressa do que o mês avança, e o envelope pode não durar até ao fim do mês. A barra de meta não tem esse traço.

10. **«… de … gastos»** — as despesas deste mês comparadas com o que pôs de lado este mês.

    *Como funciona:*
    «92,74 € de 100,00 € gastos» em «Contas de casa»: pôs de lado 100 €, gastou 92,74 €. Então porque é que à direita aparece 29,44, e não 7,26? Porque no envelope havia também dinheiro dos meses anteriores — o saldo acompanha o envelope.

    Pelo mesmo motivo o «Supermercado» tem uma linha vermelha — «133,28 € gasto acima de 400,00 €» — enquanto o valor à direita está verde: o plano do mês foi ultrapassado, mas a reserva dos meses anteriores cobriu o excesso. O envelope está positivo, está tudo bem.

11. **Bandeirinha da meta** — «Atingida» ou «faltam …».

    *Como funciona:*
    A meta diz ao envelope quanto deve ter: «400 € para a comida todos os meses» ou «1300 € para as férias até julho». A bandeirinha por baixo do valor mostra se a meta deste mês está cumprida, e se não, quanto falta ainda pôr. As metas definem-se no ecrã da categoria.

12. **«Hoje»** — voltar ao mês atual. Aparece quando foi para outro.

13. **Nova despesa** — os mesmos três botões das «Transações». [Mais no artigo «Transações»](#transactions)

### O menu «⋮» {#budget-menu}

Metas, a ordem dos envelopes e o que mostrar nas linhas.

[O menu «⋮» aberto do ecrã «Plano»: Metas, Alocar nas metas, Mudar a ordem, Barras de progresso, Percentagem do rendimento, Categorias ocultas, Dicas]

(A)
#### Metas

Todas as metas do orçamento num só ecrã. Mais no artigo [«Metas»](#goals).

*Como funciona:*
Vê que envelopes estão a cumprir e a quais falta. Toque numa meta para a mudar.

(B)
#### Alocar nas metas

Completar cada envelope com o que falta para a meta dele. Mais no artigo [«Metas»](#goals).

*Como funciona:*
A aplicação tira dinheiro do «não alocado» e entrega-o aos envelopes com meta — a cada um exatamente o que falta. Primeiro mostra o plano: o que vai para onde — e só depois do seu «sim» faz a alocação.

Se todas as metas do mês já estiverem cumpridas, mostra quanto cada uma tem — para ver porque é que não há nada a distribuir.

(C)
#### Mudar a ordem

Reorganizar os envelopes e os grupos.

*Como funciona:*
Aparecem pegas nas linhas — arraste por elas. É prático manter os envelopes mais usados no topo. Quando terminar, o mesmo item do menu chama-se «Concluir a ordenação».

(D)
#### Barras de progresso

Mostrar uma barra e uma linha «… de … gastos» por baixo de cada envelope.

*Como funciona:*
Desligue-as se quiser uma lista curta: ficam só os nomes e os valores. Os envelopes com meta mantêm sempre a barra — ela mostra a meta.

**Logo após a instalação:** ligado.

(E)
#### Percentagem do rendimento

Que percentagem do rendimento do mês põe de lado em cada envelope.

*Como funciona:*
Ao lado do valor aparece uma etiqueta como «12%»: a renda come 40% do rendimento, o supermercado, 15%. Cada grupo mostra a sua percentagem total por baixo do valor dele, somando todos os seus envelopes. As despesas não mudam a percentagem — só quanto põe de lado e o próprio rendimento do mês.

**De onde se calcula a percentagem.** Não de todo o dinheiro que distribui, mas da linha «Orçamento de novembro» no cartão «Orçamento do mês» do «Resumo»: o rendimento atribuído a este mês. O «Trazido de outubro» não entra nela. Distribua também a sobra do mês anterior, e as percentagens saem maiores do que realmente são, e juntas podem passar de 100%. Quanto do que alocou é rendimento deste mês e quanto é sobra — vê-se no mesmo cartão ([«Resumo»](#overview-blocks)).

**Logo após a instalação:** desligado. **Veja também:** a alocação automática «Por percentagem» — toque em «não alocado».

(F)
#### Categorias ocultas

Os envelopes que tirou de vista.

*Como funciona:*
Um envelope que tem despesas não se pode eliminar — os relatórios precisam do histórico dele. Pode ocultá-lo: desaparece da lista, e as despesas passadas ficam. Aqui volta a mostrar os envelopes ocultos.

(G)
#### Dicas

Todas as dicas deste ecrã num só sítio — e uma ligação para esta página.

### O que pode fazer com uma linha {#budget-gestures}

Não há botões «editar» e «eliminar» na linha. Em vez disso, desliza a linha do envelope para o lado com o dedo — até um botão que aparece por baixo. A primeira linha da lista mostra uma vez como é.

| Faça isto | O que acontece |
|---|---|
| Toque na linha | O [ecrã da categoria](#category): as despesas deste envelope no mês e as tendências. |
| Toque no valor | Pôr dinheiro no envelope, ou, num vermelho, acabar com o negativo. Os passos estão no item [«O valor à direita»](#budget-balance) acima. |
| Deslize para a esquerda | Aparece à direita um botão «Editar». Toque para abrir «Editar a categoria»: um nome novo e um campo «Grupo». Escolha outro grupo nele — e o envelope passa para lá, com todo o dinheiro e o histórico. |
| Deslize para a direita | Aparece à esquerda um botão vermelho «Eliminar». Um envelope vazio, sem uma única compra, é eliminado depois da pergunta «Eliminar a categoria?». Se houve despesas, a aplicação diz «Não é possível eliminar — há transações» e propõe «Ocultar»: o envelope desaparece da lista, e o histórico fica. Para voltar a mostrar um oculto — o menu «⋮» → «Categorias ocultas». |
| Mantenha o dedo num grupo | O menu do grupo: mudar o nome, adicionar uma categoria ou um grupo novo, eliminar o grupo. |

Os envelopes do grupo «Pagamentos de cartão» não deslizam: quem trata deles é o próprio cartão de crédito, e o dinheiro é posto de lado neles automaticamente.

## Metas {#goals}

Quanto dinheiro precisa cada envelope — e quanto falta ainda pôr este mês.

*«Plano» → «⋮» → «Metas»*

### Para que servem as metas {#goals-why}

Um envelope responde a «quanto está aqui». Uma meta responde a «quanto devia estar aqui». A aplicação compara os dois e diz quanto falta ainda pôr.

**«A comida leva 400 € por mês»** — uma meta «Por mês» no «Supermercado». Todos os meses a aplicação lembra-o de pôr de lado esses 400 €.

**«Férias em março, preciso de 2000 €»** — uma meta «Até à data». A aplicação reparte o valor pelos meses sozinha: tanto em novembro, tanto em dezembro.

**«A reserva de emergência deve ter 4000 €»** — uma meta «Saldo». Gastou uma parte, e a aplicação pede para a repor.

A meta em si não mexe no dinheiro: só conta. Quem põe o dinheiro no envelope é o utilizador — no ecrã «Plano» ou com um só botão, «Alocar nas metas» (mais sobre ele [mais abaixo](#goals-allocate)). Cada categoria tem uma meta.

### O que está onde no ecrã {#goals-screen}

O ecrã «Metas» abre a partir do «Plano»: «⋮» → «Metas». Tem todas as categorias com as suas metas para o mês escolhido. A captura mostra novembro no orçamento demo: cinco metas de cinco tipos.

[Ecrã Metas: mês novembro de 2026, resumo Total 5 metas, Custo mensal 2543,53, Em falta 1609,53; grupos de categorias; Supermercado — por mês 400, Atingida; Presentes — lista 175; Viagens — até à data 2000; Reserva de emergência — saldo 4000; Investimentos — % renda 280]

(1)
**Mês** — as setas «‹ ›» passam os meses, um toque no nome abre a escolha do mês. As metas calculam-se para este mês. Saia do atual, e aparece um botão «Hoje» em baixo.

(2)
**O menu «⋮»** — que categorias mostrar, barras de progresso, dicas — [mais abaixo](#goals-menu).

(3)
**Resumo** — «Total» é quantas metas há. «Custo mensal» é quanto todas as metas precisam este mês. «Em falta» é quanto ainda não foi posto.

(4)
**Grupo** — os mesmos grupos do «Plano». Por baixo do nome — quantas metas o grupo tem e quanto lhes falta, ou «tudo coberto». Um toque recolhe o grupo.

(5)
**Uma categoria sem meta** — «sem meta». Toque na linha ou no «⊕» — abre «Nova meta».

(6)
**Uma categoria com meta** — a meta inteira em três linhas. Um toque abre-a para editar.

*Como funciona:*
A primeira linha: o nome da categoria, o tipo de meta («por mês», «até à data», «saldo», «% renda», «lista») e o valor da meta. A segunda: uma barra — quanto está feito — e o estado: uma bandeirinha verde e «Atingida», ou uma bandeirinha e «faltam …» — quanto acrescentar. A terceira: a condição da meta em palavras e a percentagem feita.

Na captura, o «Supermercado» está atingido: os 400 € já estão postos de lado no envelope em novembro. E em «Viagens e férias» faltam 100 € este mês — é quanto é preciso por mês para chegar a 2000 € até março.

#### O menu «⋮» {#goals-menu}

[Menu do ecrã Metas: Todas as categorias, Apenas com metas, Subfinanciado, Barras de progresso, Dicas]

(A, B, C)
#### Que categorias mostrar

«Todas as categorias», «Apenas com metas» ou «Subfinanciado» — aquelas a cuja meta falta algo este mês. A escolha fica guardada; se nem tudo está à vista, acende-se um ponto no «⋮».

(D)
#### Barras de progresso

se mostrar barras e percentagens. Sem elas a linha fica mais curta, enquanto a meta e o valor ficam no sítio.

(E)
#### Dicas

as dicas deste ecrã em forma de lista.

### Como definir uma meta {#goals-new}

Define-se uma meta aqui, em «Metas», ou no próprio ecrã da categoria — com o botão «Adicionar meta» no cartão «Meta». É a mesma folha.

[Folha Nova meta: Tipo de meta Por mês, Valor Definir…, botão Guardar a cinzento]

[Folha Tipo de meta: Por mês, Até à data, Saldo, % renda, Lista — cada um com uma explicação]

1. Toque numa categoria sem meta. Abre «Nova meta».
2. «Tipo de meta» — toque e escolha um dos cinco. Cada um diz por baixo do nome para que serve. Qual usar quando — [mais abaixo](#goals-types).
3. «Valor» — toque e introduza-o no teclado da aplicação. Para «% renda» há «Percentagem do rendimento» em vez do valor, e para «Lista» — as linhas da lista.
4. «Até à data» tem também «Juntar até o mês» — o mês até ao qual precisa do valor inteiro.
5. «Guardar». Enquanto o valor não estiver definido, o botão fica cinzento.

**Editar ou eliminar** — toque numa categoria com meta — abre «Editar a meta» com os mesmos campos. Em baixo — «Eliminar» e «Guardar». Uma meta eliminada desaparece; o dinheiro no envelope fica.

**Uma sugestão a partir dos pagamentos programados** — se a categoria tem um pagamento programado, o cartão da meta no ecrã da categoria mostra «Do pagamento programado: …». Um pagamento todos os meses sugere «por mês» no valor dele; uma vez por ano — «juntar … até o pagamento».

### Cinco tipos de meta {#goals-types}

O tipo de meta é a regra com que a aplicação calcula «quanto é preciso este mês». Abaixo, cada regra com um exemplo da captura.

#### «Por mês» — para o que gasta todos os meses {#goals-monthly}

**Como se calcula** — todos os meses é preciso pôr de lado o mesmo valor. A meta olha para quanto pôs no envelope **este mês**, não para quanto resta nele.

*Como funciona:*
«Supermercado», 400 € por mês. Pôs 400 € em novembro — a meta está «Atingida», mesmo que metade já esteja gasta. Gastar é exatamente para o que serve este dinheiro. Pôs 270 € — «faltam 130 €».

Para o supermercado, a internet, os transportes, as subscrições.

#### «Até à data» — juntar um valor até um certo mês {#goals-bydate}

[Folha Editar a meta: Tipo de meta Até à data, Valor 2000, Juntar até o mês março de 2027]

**Como se calcula** — o que ainda falta do valor inteiro divide-se pelos meses restantes, contando este. Isso dá a contribuição do mês.

*Como funciona:*
«Viagens e férias», 2000 € até março. No início de novembro o envelope tem 750 €, por isso faltam 1250 €. Até março, contando novembro, são cinco meses — 250 € por mês. Em novembro já estão postos de lado 150 € — a meta diz «faltam 100 €».

Falhou um mês, e o que faltou reparte-se pelos restantes, por isso a contribuição cresce sozinha. Pôs mais, e as próximas contribuições diminuem.

A barra mostra outra coisa: quanto do valor inteiro já está no envelope. Na captura — 45%.

**Para quê** — férias, o seguro uma vez por ano, as prendas de Natal, umas obras na primavera — tudo o que não acontece todos os meses, mas é previsível.

#### «Saldo» — manter uma reserva {#goals-balance}

**Como se calcula** — o envelope deve ter sempre este valor. O que faltar no início do mês, é isso que a meta pede.

*Como funciona:*
«Reserva de emergência», 4000 €. O envelope tem agora 2875,47 € — a meta pede «faltam 1124,53 €». Não há prazo: complete quando puder. Tirou uma parte da reserva para uma reparação? A meta volta a pedir para a repor.

Para um fundo de emergência, o armário dos medicamentos, uma reserva para reparações do carro.

#### «% renda» — pôr de lado uma percentagem do rendimento {#goals-percent}

[Folha Editar a meta: Tipo de meta % renda, Percentagem do rendimento 10%, Do rendimento deste mês escolhido, Do rendimento médio; Rendimento de novembro 2800, Meta do mês 280]

**Como se calcula** — a meta do mês é a sua percentagem do rendimento. A aplicação mostra o valor diretamente na folha: «Rendimento de novembro: 2 800,00 € · Meta do mês: 280,00 €».

**«Do rendimento deste mês»** — calcula-se a partir do dinheiro que **já chegou**. Chegou a primeira parte do pagamento — uma meta; chegou a segunda — a meta cresceu. Enquanto não há rendimento no mês, a meta é zero e conta como cumprida. **Por predefinição:** é esta a escolhida.

**«Do rendimento médio»** — o rendimento médio dos últimos 12 meses. A meta conhece-se desde o dia 1 e não muda durante o mês — prático se recebe no fim do mês.

**Para quê** — «pôr de lado 10% de tudo o que ganho» — investimentos, poupança, donativos.

#### «Lista» — o que comprar este mês {#goals-list}

Uma meta feita de linhas: anote em que vai ser gasto o dinheiro da categoria este mês — e o valor da meta soma-se sozinho. Cada mês tem a sua lista.

[Folha Editar a meta: Tipo de meta Lista, Lista de novembro: Aniversário da mãe 100, Bolo 40 — registado 43, Colega 35 — registado 24 · 2 transações; Adicionar linha; Meta para novembro 175]

[Ecrã da categoria Presentes e festas: cartão Meta — 175 por mês, pela lista; Alocar mais 105; linhas da lista]

[Folha Linha da lista: Colega, Valor previsto 35; Registado 24 de 35, Reduzir para 24; duas transações — 20 e 4; Registar transação; Eliminar, Guardar]

**Linhas** — escolha «Lista» em «Tipo de meta», e as linhas do mês aparecem diretamente na folha. «⊕ Adicionar linha» — um nome e um valor. Em baixo — «Meta para novembro»: o total de todas as linhas. Enquanto não houver linhas, «Guardar» fica cinzento.

**No ecrã da categoria** — as linhas vivem no cartão «Meta», por baixo da barra. É aí que trabalha com elas: toque numa linha para a editar, deslize para a esquerda — «Lançar», para a direita — «Eliminar» (com «Desfazer» na mensagem em baixo).

**«Lançar»** — abre o formulário de transação normal: o valor planeado (corrija-o para o real), esta categoria, o nome da linha na nota. Depois de guardar, por baixo da linha a verde: «✓ registado 43,00 € · 13/11», enquanto o valor planeado continua à direita: na captura, o bolo estava planeado em 40 € e foi comprado por 43 €.

*Como funciona:*
Uma linha pode ser lançada de novo: uma compra às vezes são vários pagamentos — os pneus, depois a montagem. O formulário sugere o que falta do previsto, e a linha mostra o total dos lançamentos e quantos são. A folha dela tem uma ligação para cada transação e «Registar transação»; o botão «Reduzir para …» iguala o previsto ao que foi registado. Uma linha registada não pode ser passada para outro mês.

**Passar para outro mês** — mantenha o dedo numa linha para ligar a seleção. Marque as que quiser; em baixo — o total delas e «⋮»: «Passar para dezembro», «Passar para outro mês…», «Eliminar».

**Um mês novo** — a lista está vazia: «A lista de dezembro está vazia» e um botão «Copiar as linhas de novembro · valor»: as linhas do mês anterior são copiadas (sem as marcas de «registado»), e o mês anterior não muda.

### O cartão «Meta» no ecrã da categoria {#goals-card}

Toque numa categoria no «Plano» — abre [o ecrã dela](#category). O cartão «Meta» mostra a meta do mês do ecrã e diz quanto pôr.

[Ecrã da categoria Viagens e férias: resumo, cartão Meta — Juntar 2000 até março, Alocar mais 100 neste mês, seletor Por valor / Por prazo, Guardar por mês 400, cursor, Juntar até o mês Fevereiro de 2027, 1 mês antes do prazo, Usar como prazo da meta]

**Cabeçalho** — a descrição da meta e um lápis para editar. Em baixo — uma barra e «Alocar mais … neste mês» ou «A meta do mês foi cumprida».

**A estimativa «Por valor» / «Por prazo»** — para uma meta «Até à data», por baixo da barra: e se puser de lado mais ou menos? «Por valor»: mexa no cursor «Guardar por mês» — o «Juntar até o mês» por baixo dele mostra quando lá chega, e a linha de baixo diz «… meses antes do prazo», «… meses depois do prazo» ou «Mesmo dentro do prazo». «Por prazo»: mexa em «Juntar até o mês» — por baixo do cursor vê quanto pôr de lado por mês. Precisa de um valor exato? Toque em «Guardar por mês» e introduza-o no teclado.

*Como funciona:*
A estimativa não guarda nada: saia do ecrã, e fica tudo como estava. Gostou da nova data? Toque em «Usar como prazo da meta: …», e a meta fica com ela.

Na captura: pondo 400 € por mês, o dinheiro das férias fica pronto em fevereiro — um mês antes do prazo.

**Sem meta** — o cartão tem um só botão, «Adicionar meta». Se houver um pagamento programado, aparece ao lado a sugestão «Do pagamento programado: …».

### Alocar nas metas {#goals-allocate}

O ordenado chegou — reparta-o por todas as metas com um só botão. «Plano» → «⋮» → «Alocar nas metas».

[Janela Alocar nas metas: 230 para 3 categorias — Presentes e festas +105, Viagens e férias +100, Reserva de emergência +25; ficará 0,00; Cancelar, Alocar]

**O que faz** — tira dinheiro do «não alocado» e põe-no nos envelopes a cujas metas falta algo este mês. Primeiro mostra o plano — quanto vai para que envelope; «Alocar» faz, «Cancelar» não muda nada.

**Se não chegar para tudo** — as metas cobrem-se por ordem, de cima para baixo, tal como as categorias estão organizadas no «Plano», e a última recebe o que sobrar. Na captura, 230 € chegaram para «Presentes e festas» e «Viagens e férias» por inteiro, enquanto a «Reserva de emergência» recebeu 25 € de 1124,53 €. Mantenha o mais importante mais acima — a ordem muda-se no «Plano»: «⋮» → «Mudar a ordem».

**Se não houver nada para alocar** — o «não alocado» está vazio — a aplicação avisa. Não há metas — diz onde as definir. Todas as metas já estão cumpridas — mostra para cada uma quanto está posto de lado e quanto é preciso.

**O mesmo na alocação automática** — toque em «não alocado» no cabeçalho do «Plano» — o modo «Subfinanciado» faz o mesmo. E a calculadora do valor da categoria no «Plano» tem um botão «Para a meta: …» — preenche exatamente o que falta.

### Onde mais aparecem as metas {#goals-elsewhere}

A meta não se vê só aqui.

**«Plano»** — uma categoria com meta tem uma bandeirinha por baixo do valor: «Atingida» ou «faltam …», e a barra mostra a meta, não as despesas. O chip «Falta» por cima da lista deixa só as categorias a cujas metas falta algo. Mais no artigo [«Plano»](#budget).

**«Resumo»** — o bloco «Metas» mostra quantas metas há, quantas estão cumpridas e quanto é ainda preciso este mês. Mais no artigo [«Resumo»](#overview).

## Ecrã da categoria {#category}

Um envelope por inteiro: quanto tinha, quanto foi posto de lado e gasto, quanto resta e para quantos dias chega. E também a meta, uma nota, as despesas dos meses anteriores e todas as transações do mês.

*«Plano» → toque numa categoria*

### Para que serve este ecrã {#category-why}

No «Plano», uma categoria tem uma linha e um número. Aqui está tudo o que há por trás dele.

##### Chega até ao fim do mês

«Disponível» e por baixo dele «≈ … por dia»: quanto pode gastar por dia até ao fim do mês sem ficar negativo.

##### Para onde foi o dinheiro

Todas as transações desta categoria no mês, por dia. Toque em qualquer uma para abrir o cartão dela.

##### Quanto precisa realmente

As «Tendências de gastos» mostram quanto costuma sair por mês. Se puser de lado menos, todos os meses acabam negativos.

### Como abrir {#category-open}

- **«Plano»** — toque na linha de uma categoria. O ecrã abre no mês escolhido no «Plano». Isto com o telemóvel na vertical: na horizontal, tocar numa linha da tabela abre a calculadora do valor, e num tablet abre um painel à direita ([mais abaixo](#category-tablet)).
- **«Resumo»** — toque numa linha do bloco «Gasto excedido» ou «A acabar».
- **«Relatórios»** — toque numa linha da lista em «Para onde foi o dinheiro» ou num bloco em «Desvio». O ecrã abre no mês do relatório.

### O que está onde no ecrã {#category-screen}

O ecrã desliza: o resumo no topo, depois os cartões «Meta», «Nota» e «Tendências de gastos», e por baixo deles as transações do mês. Toque numa captura para a abrir em ecrã inteiro.

[Ecrã da categoria Supermercado: o mês com setas; resumo — De outubro, Planeado, Gasto, Disponível e ≈ por dia; cartão Meta — Reservar 400,00 por mês, A meta do mês foi cumprida; Nota; Tendências de gastos; Transações do mês por dia: Worten, Pingo Doce, Continente; botão Transação]

1. **Nome** — o nome da categoria. Mude-o no menu «⋮».

2. **«⋮»** — ocultar, mudar o nome ou passar para outro grupo, eliminar. Pormenores — [mais abaixo](#category-menu).

3. **Mês** — «‹ ›» passam os meses: passados e futuros, sem limite. Pormenores — [mais abaixo](#category-months).

4. **«De …»** — quanto sobrou no envelope do mês anterior.

5. **«Planeado para …»** — quanto pôs de lado neste envelope este mês. Em letra pequena por baixo do valor — que percentagem do rendimento do mês isso representa.

6. **«Gasto em …»** — quanto saiu do envelope este mês, descontados os reembolsos.

7. **«Disponível»** — quanto está no envelope agora. O mesmo número da linha da categoria no «Plano».

8. **«≈ … por dia»** — quanto pode gastar por dia até ao fim do mês. Só no mês atual e só se «Disponível» estiver acima de zero.

9. **«Meta»** — a meta da categoria este mês: quanto falta ainda pôr de lado. Mais no artigo [«Metas»](#goals-card).

10. **«Nota»** — um texto seu sobre esta categoria. Pormenores — [mais abaixo](#category-note).

11. **«Tendências de gastos»** — quanto sai em média por mês. Pormenores — [mais abaixo](#category-trends).

12. **Data** — as transações do mês por dia, as mais recentes no topo. Pormenores — [mais abaixo](#category-ops).

13. **Transação** — uma linha como nas «Transações», só que sem a categoria: aqui é só uma.

14. **«+ Transação»** — uma transação nova com a categoria já escolhida no formulário.

### O resumo: de onde vêm os números {#category-stats}

As quatro linhas do resumo formam uma só fórmula:

**«De …»** + **«Planeado»** − **«Gasto»** = **«Disponível»**

##### O positivo passa para o mês seguinte, o negativo não

Não gastou tudo? O resto fica no envelope e aparece no mês seguinte na linha «De …». Gastou mais do que havia? Este mês o «Disponível» fica vermelho. Na passagem do mês, o negativo é anulado: no mês seguinte o «De …» será 0.

*Como funciona:*
Para onde vai o negativo anulado depende de como pagou. Com dinheiro vivo ou cartão de débito, diminui o «não alocado» do mês seguinte. Com cartão de crédito, passou a dívida do cartão. Mais no artigo [«Plano»](#budget).

##### Percentagem do rendimento

Por baixo de «Planeado» — que percentagem do rendimento do mês pôs de lado neste envelope. A mesma percentagem do selo «Percentagem do rendimento» no «Plano». Sem rendimento no mês — sem percentagem. Calcula-se a partir da linha «Orçamento de …» do cartão «Orçamento do mês» — sem a sobra do mês anterior; porque é que a percentagem pode então parecer alta demais — no artigo [«Plano»](#budget-income-share).

##### «≈ … por dia»

O «Disponível» divide-se pelos dias que faltam até ao fim do mês, contando hoje, e arredonda-se para baixo — para que um dia nunca receba mais do que existe. Gastou menos hoje? Amanhã o número cresce.

### Nota {#category-note}

Escreva o que entra nesta categoria, para que está a poupar, o que foi combinado — tudo o que vai ajudar daqui a seis meses. Toque no campo «Adicionar uma nota para a categoria…» e escreva: a nota guarda-se sozinha, não há botão. Com nuvem, chega aos seus outros dispositivos.

### «Tendências de gastos» {#category-trends}

Quanto costuma sair desta categoria. Conta os 12 meses completos antes deste; o mês atual não entra porque ainda não terminou. As despesas são descontados os reembolsos.

[Cartão Tendências de gastos da categoria Compras grandes: Média num mês ativo 480, Gasto mensal médio 96, Gasto no mês anterior 0]

**«Gasto mensal médio»** — quanto sai em média por mês, contando também os meses sem despesas. É quanto vale a pena pôr de lado todos os meses para o envelope não ficar negativo.

**«Média num mês ativo»** — a média só dos meses com despesas. Aparece quando não houve despesa todos os meses: na captura, «Compras grandes» tem 480 € num mês com compra e 96 € na média de todos os meses.

**«Gasto em …»** — quanto saiu no mês anterior: compare com este.

**As percentagens por baixo dos valores** — que percentagem do rendimento isso representa: nas médias, do rendimento médio dos mesmos meses; no mês anterior, do rendimento dele.

### As transações do mês {#category-ops}

Todas as transações desta categoria no mês do ecrã, por dia: as mais recentes no topo. De um valor dividido, aparece só a parte com esta categoria — na captura, «Worten».

| Faça isto | O que acontece |
|---|---|
| Toque numa linha | O cartão da transação — o mesmo das «Transações». Mais no artigo [«Transações»](#transactions-detail). |
| Toque no círculo à direita | A marca «Contabilizado», como nas «Transações». |
| Deslize para a esquerda | «Editar» — o formulário de transação. |
| Deslize para a direita | «Eliminar» — depois de uma confirmação. Em baixo aparece «Desfazer». |

A ordem das transações dentro de um dia e o total do dia ao lado da data definem-se nas «Transações»: «⋮» → «Ordenação» e «Total do dia». Aqui são os mesmos.

### Outro mês {#category-months}

«‹» e «›» por cima do resumo passam os meses. Saia do mês atual, e em baixo à esquerda aparece «Hoje»: toque para voltar ao mês atual.

[O mesmo ecrã para o mês anterior: resumo sem a linha ≈ por dia, um botão Hoje em baixo à esquerda]

Num mês passado vê quanto havia e quanto se gastou nessa altura. Lá não há a linha «≈ … por dia»: o mês acabou. Num mês futuro vê quanto já está posto de lado para a frente.

### O menu «⋮» {#category-menu}

[Menu: Ocultar a categoria, Editar a categoria, Dicas, Eliminar a categoria]

(A)
##### «Ocultar a categoria»

A categoria desaparece do «Plano» e da lista de categorias do formulário de transação. O dinheiro e as transações ficam, e conta nos cálculos como antes. Para a voltar a mostrar — aqui mesmo: o item passa a «Mostrar a categoria». Ou «Plano» → «⋮» → «Categorias ocultas».

(B)
##### «Editar a categoria»

Uma folha com o nome e um campo «Grupo». Pormenores — [mais abaixo](#category-edit).

(C)
##### «Dicas»

As dicas deste ecrã — incluindo as que já fechou.

(D)
##### «Eliminar a categoria»

Só se a categoria não tiver nenhuma transação. Então, depois da pergunta «Eliminar a categoria?», desaparece, a meta dela também, e tudo o que estava posto de lado nela volta para «não alocado».

*Como funciona:*
Se houver transações, a aplicação diz «Não é possível eliminar — há transações» e propõe «Ocultar». Uma categoria eliminada desapareceria do histórico, e as transações dela ficariam sem envelope.

#### Mudar o nome e passar para outro grupo {#category-edit}

[Folha Editar a categoria: Nome Supermercado, Grupo Despesas do dia a dia, botões Eliminar e Guardar]

[Folha Grupo: Despesas fixas, Despesas do dia a dia, Despesas ocasionais, Poupança]

(E)
##### «Nome»

O nome novo da categoria. As transações, a meta e o dinheiro ficam com ela.

(F)
##### «Grupo»

Toque para abrir a lista de grupos. Escolha outro e toque em «Guardar»: a categoria passa para o fim desse grupo juntamente com o dinheiro e o histórico.

*Como funciona:*
As categorias do grupo «Pagamentos de cartão» não têm este campo: quem trata do grupo delas é a aplicação.

(G)
##### «Eliminar»

O mesmo que «Eliminar a categoria» no menu.

##### Como passar uma categoria para outro grupo

1. Abra a categoria: «Plano» → toque na linha dela.
2. «⋮» → «Editar a categoria».
3. Toque no campo «Grupo» e escolha um grupo.
4. «Guardar».

Pode fazer o mesmo diretamente no «Plano»: deslize a linha da categoria para a esquerda → «Editar».

### No tablet {#category-tablet}

Num tablet na horizontal, tocar numa linha do «Plano» não o tira da tabela: o resumo, a meta, a nota, as tendências e as transações da categoria aparecem à direita. O mês lá é o mesmo da tabela; não tem setas próprias.

O painel não tem menu «⋮». Para ocultar, mudar o nome ou eliminar uma categoria, use o ecrã dela: ponha o tablet na vertical e toque na linha, ou abra a categoria a partir do «Resumo» ou dos «Relatórios».

## Transações {#transactions}

Toda a história do seu dinheiro num só feed. Cada compra, cada ordenado, cada «passei algum dinheiro da conta à ordem para a poupança».

*O separador «Transações» em baixo no ecrã*

### Para que serve este ecrã {#transactions-why}

O ecrã «Plano» responde à pergunta «quanto posso ainda gastar». As «Transações» respondem a «então para onde foi, afinal». É o seu diário: tudo o que registou está aqui por dia, o dia mais recente no topo.

##### Encontrar

«Quanto custou aquele jantar em março?» — duas letras na pesquisa, e lá está.

##### Corrigir

Categoria errada, um zero a mais, um registo duplicado — deslize a linha e corrija.

##### Verificar com o banco

Marque o que já passou no cartão — e vê logo o que o banco ainda não processou.

### O que está onde no ecrã {#transactions-screen}

Toque em qualquer captura para a abrir em ecrã inteiro.

[Ecrã «Transações»: pesquisa, menu, chips do tipo de transação, o feed de transações por dia e o botão de adicionar]

1. **Pesquisa** — encontra qualquer coisa por duas letras, um valor ou datas.

   *Como funciona:*
   Escreva «conti» — o feed deixa só as idas ao Continente. A pesquisa procura em tudo: beneficiário, categoria, nota e valor. «47,55» encontra esse valor, «leite» encontra a nota «Leite, ovos, pão».

   A pesquisa percebe as datas tal como as escreve:

   - **15/08/2026** — um só dia;
   - **15/08** — esse dia em qualquer ano: «o que comprei nos aniversários anteriores?»;
   - **08/2026** — o mês de agosto inteiro;
   - **02/08/26-10/08/26** — de e até, os dois dias incluídos. Funciona também com meses: **06/2026-08/2026** — o verão inteiro.

   Entre o «de» e o «até» serve um hífen, um travessão ou um espaço — a aplicação descobre onde fica o limite. Um número sozinho, como «8», não é tratado como data: senão uma pesquisa por 8 € afogar-se-ia em todo o mês de agosto.

   Um cardinal liga a pesquisa por tags: «#fér» — tudo com a tag «férias», «#fér café» — só os cafés das férias. Duas tags separadas por um espaço — as transações que têm as duas.

2. **Beneficiários e tags** — a quem paga mais vezes e quanto.

   *Como funciona:*
   Um ecrã à parte com dois separadores. «Beneficiários» — todos a quem pagou e que lhe pagaram, com um total deste ano (o período muda no menu «⋮»). Muitas vezes é aí que descobre que as idas «rápidas» à mercearia da esquina somaram umas férias no ano.

   «Tags» — as suas etiquetas por cima das categorias: «férias», «obras», «prenda para a mãe». Toque num beneficiário ou numa tag para abrir o histórico. [O artigo «Beneficiários e tags»](#payees-tags)

3. **O menu «⋮»** — tudo o que muda o aspeto do feed. Cada item é explicado [mais abaixo](#transactions-menu).

4. **Tipo de transação** — só despesas, só receitas, com um toque.

   *Como funciona:*
   Quer ver só o dinheiro que entrou? Toque em «Receitas». As «Transferências» são quando o dinheiro só mudou de sítio entre as suas próprias contas: da conta à ordem para a poupança, para pagar o cartão de crédito. As «Notas» são registos sem valor, lembretes para si próprio.

   Toque outra vez no mesmo chip, e o feed inteiro volta.

5. **Data** — saltar para qualquer dia.

   *Como funciona:*
   Deslizar seis meses para trás com o dedo não é para todos. Toque no chip da data, escolha um dia no calendário — e o feed já lá está. Para voltar a hoje, use o botão «Hoje» em baixo à esquerda.

6. **Marcador** — um sinal colorido para si.

   *Como funciona:*
   O marcador não calcula nada — é só um sinal. Vermelho — «verificar se não cobraram duas vezes», verde — «um amigo prometeu devolver». As cores e o significado são inventados por si.

   Pode pôr um marcador no formulário de transação, ou numa dúzia de linhas de uma vez através da seleção. Um contorno cinzento quer dizer «sem marcador». A forma do marcador — um ponto, uma bandeirinha triangular ou uma bandeira ondulada — está em «Definições → Aparência».

7. **Categoria** — de que envelope saiu o dinheiro.

   *Como funciona:*
   Uma categoria é um envelope do ecrã «Plano». Uma compra no Continente com a categoria «Supermercado» diminui o envelope do supermercado: é assim que o orçamento sabe quanto ainda tem para a comida.

   O talão tinha comida e produtos de limpeza? Pode dividir o valor: cada parte vai para o seu envelope, e a linha mostra um chip para cada parte. E num ordenado, em vez da categoria aparece «Disponível neste mês»: o dinheiro chegou e está à espera de que o distribua pelos envelopes.

8. **Conta** — de onde saiu ou para onde chegou.

   *Como funciona:*
   Conta à ordem, dinheiro vivo, cartão de crédito — cada conta tem o seu ícone e a sua cor, para a reconhecer sem ler. Uma transferência tem duas linhas, uma em cada conta: numa o dinheiro saiu, na outra chegou. Por isso o título de uma transferência mostra não uma loja, mas a outra conta: «Visa» na conta à ordem, «Conta à ordem» no Visa.

9. **Contabilizado** — se coincide com o extrato. Opcional.

   *Como funciona:*
   Registou a compra logo na caixa, e o banco processou-a um ou dois dias depois. O círculo evita confusões: vazio — o banco ainda não tem esta transação, um visto — tem. Viu a compra na aplicação do banco? Toque no círculo.

   Uma vez por mês pode verificar a conta inteira. Aí os vistos passam a cadeados: «verificado, não mexo mais».

   **A marca é opcional:** não afeta o orçamento, só ajuda a verificar a conta com o banco. Se nunca a usou, ignore-a — círculos vazios não fazem mal.

10. **Nova despesa** — três botões no canto inferior direito.

    *Como funciona:*
    «+ Transação» abre um formulário vazio — o valor, a categoria e a conta preenche-os o utilizador.

    Por cima dele há dois botões redondos para não ter de escrever. O roxo é a câmara: aponte-a ao código QR do recibo, e a aplicação preenche o valor e a data sozinha (se conhecer os recibos do seu país). O verde é o microfone: diga «café 6 da conta Conta à ordem», e a aplicação preenche o valor e a conta, e também o beneficiário e a categoria se os reconhecer entre os seus. De qualquer forma abre o mesmo formulário — verifique e guarde. [O artigo «Formulário de transação»](#entry)

11. **Ícones de câmara e QR** — uma foto do recibo e um recibo eletrónico estão anexados à transação. [O que é](#transactions-badges)

12. **Ícone PDF** — um ficheiro está anexado à transação: uma conta, uma fatura, o recibo de uma loja online. [O que é](#transactions-badges)

13. **Ícone de garfo** — o valor está dividido em partes por categorias diferentes. [O que é](#transactions-badges)

14. **Cardinais — tags** — as suas etiquetas de «para quê»; uma transação pode ter várias. [O que é](#transactions-tags)

### O ecrã tem duas formas {#transactions-two-views}

Não estranhe se o seu ecrã não for igual à imagem acima. Os botões no canto inferior direito recolhem-se para não taparem as suas transações.

[Botões abertos: «+ Transação», a câmara e o microfone por cima dele]
**Acabou de abrir o ecrã.** Três botões: «+ Transação», câmara e microfone.

[Botões recolhidos: resta só o «+»]
**Deslizou o feed para baixo.** Resta só o «+» — faz o mesmo.

Para voltar a ver a câmara e o microfone, deslize o feed um pouco para cima — os botões abrem-se outra vez.

Pode tocar no «+» das duas formas: abre sempre o formulário de nova transação.

### Ícones e tags numa linha {#transactions-badges}

Os ícones pequenos ao lado de uma transação dizem que ela tem algo mais: um recibo anexado, um ficheiro ou várias categorias. Sozinhos não fazem nada — para ver o que está anexado, toque na linha.

#### Câmara — uma foto do recibo

Uma fotografia de um talão em papel, de uma etiqueta de preço ou de qualquer coisa que queira guardar junto da compra.

**Não exagere.** Anexe fotos ao que vai mesmo precisar, não a cada pão. [Porquê](#transactions-attach-weight)

*Como adicionar e para quê:*
O formulário de transação tem o campo «Fotos e PDFs». Toque em «Adicionar» e escolha «Tirar foto» ou «Escolher da galeria». Pode anexar várias fotos.

É útil quando, um mês depois, precisa de devolver algo na garantia ou de se lembrar do que tinha aquela compra de 47,55 €. A foto fica no telemóvel; para aparecer também nos seus outros dispositivos, ligue «Sincronizar fotos» nas definições de sincronização.

#### Quadrado QR — um recibo eletrónico

O código ou a ligação do recibo que a caixa emitiu.

*Como adicionar e para quê:*
Muitos recibos têm um código QR impresso em baixo — através dele pode encontrar o recibo no sistema da loja ou das Finanças. O formulário de transação tem o campo «Recibo eletrónico (URL ou código)»: cole lá a ligação, ou toque no ícone do leitor e aponte a câmara ao código QR.

Se a aplicação conhece os recibos do seu país, também confere o recibo com o formulário: preenche o valor se ainda não o introduziu, e se os valores forem diferentes, avisa e propõe corrigir. O leitor não muda a data do formulário. Um recibo de um país desconhecido é simplesmente guardado como está — e mesmo assim é útil: no cartão da transação pode copiar o código e abrir a ligação.

#### Folha «PDF» — um ficheiro anexado

Uma conta, uma fatura da luz, o recibo de uma loja online — tudo o que chega como ficheiro.

**Não exagere.** Um PDF não é comprimido ao ser adicionado — o ficheiro guarda-se tal como está. [Porquê](#transactions-attach-weight)

*Como adicionar e para quê:*
O mesmo campo «Fotos e PDFs» no formulário: «Adicionar» → «Escolher PDF». O ficheiro fica junto da transação — acabou-se andar à procura da fatura no e-mail ou nas «Transferências».

Toque num PDF anexado — em baixo aparecem «Abrir» (numa aplicação de PDF) e «Guardar em ficheiro» (uma cópia numa pasta à sua escolha).

#### Cada foto tem peso {#transactions-h-weight}

A base de dados em si não engorda com as fotos: guarda só uma ligação para o ficheiro. Mas o ficheiro vive no telemóvel e, mais importante, vai inteiro para **cada cópia de segurança**. Por predefinição guardam-se até 19 cópias — 7 frequentes e 12 mensais, no telemóvel e na nuvem.

Assim, uma única foto de recibo de 300 KB pode ocupar quase 6 MB nas cópias, e cem fotos destas, mais de meio gigabyte. Se «Sincronizar fotos» estiver ligado, cada uma viaja também para a nuvem e para os seus outros dispositivos. O mesmo com os PDF, só que esses nem são comprimidos ao serem adicionados.

**A regra é simples:** anexe o que vai precisar — um certificado de garantia, o recibo de uma compra cara, uma fatura para os seus registos. Pão e leite passam bem sem fotos. E um recibo eletrónico (QR) pesa como uma linha de texto — pode guardá-lo em todas as compras.

#### Garfo — o valor está dividido em partes

Uma compra — várias categorias. No formulário é «Dividir o valor» na lista de categorias; no cartão da transação, as partes ficam sob o título «Divisão».

*Como funciona:*
Na «Worten» da captura pagou 86 € num só pagamento, mas comprou comida e produtos de limpeza. Se registasse tudo em «Supermercado», o envelope do supermercado diminuiria 25 € a mais, enquanto «Itens de casa» ficaria intocado — e o orçamento começaria a mentir.

Por isso o valor divide-se: 61 € para «Supermercado», 25 € para «Itens de casa». No feed, uma transação destas tem um chip para cada parte, e o cartão dela tem a secção «Divisão». Pode dividir o valor no formulário de transação, ao escolher a categoria.

##### Levantar dinheiro na caixa da loja também é divisão

Paga 100 € com cartão na loja e pede 30 € em dinheiro à caixa. O banco mostra um único movimento de 100 €, mas na verdade aconteceram duas coisas: 70 € foram para compras, e 30 € só passaram do cartão para a carteira.

1. Registe uma transação de 100 € da conta «Conta à ordem» e divida o valor.
2. A primeira parte — 70 €, categoria «Supermercado».
3. A segunda parte — 30 €: na lista de categorias, deslize até à secção «Transferências» e escolha «Transferência: Dinheiro».

O feed mostra um chip «Transferência: Dinheiro», a conta «Dinheiro» sobe 30 €, e o envelope do supermercado diminui exatamente 70 €. Registe tudo em «Supermercado», e o orçamento vai pensar que comeu 30 € a mais, enquanto a carteira mostra menos do que realmente tem.

#### Uma linha de cardinais — tags

As suas etiquetas por cima das categorias: «#casa de campo», «#a meias», «#férias». Uma transação pode ter quantas quiser.

*Como funciona:*
A categoria responde a «em que gastei», e a tag responde a «para quê». Leite e pão no «Continente» são «Supermercado», mas foram comprados para a casa de campo. Ponha-lhes a tag «#casa de campo» — e depois vê de relance quanto custou o verão na casa de campo, mesmo que o dinheiro tenha ido para supermercado, combustível e materiais de construção.

O «Pingo Doce» da captura tem duas tags de uma vez: compras para a casa de campo, e pagas a meias com um amigo. Uma transação pode ter quantas tags quiser.

##### Como adicionar uma tag

1. No formulário de transação, por baixo da nota, toque no campo «Tags».
2. Abre uma lista, com as tags recentes no topo. Marque as que precisar.
3. A tag de que precisa ainda não existe? Escreva o nome dela na linha «Procurar ou criar tag» e toque em «Criar tag «…»».
4. Toque em «Concluir».

##### Onde ver depois

- **Quanto se gastou com uma tag** — o ícone «Beneficiários e tags» no cabeçalho (marca 2), o separador «Tags». Toque numa tag para abrir o ecrã dela: quanto saiu desde sempre, por categoria e por mês, e todas as transações.
- **Encontrar transações** — escreva «#» e o início da tag na pesquisa: «#casa» mostra tudo da casa de campo.
- **Quem deve a quem** — para uma tag como «#a meias», ligue «Acerto de contas» no menu «⋮» do ecrã dela. A aplicação mostra quanto falta cobrar ou devolver para ficar quite.

A tag na linha não se pode tocar — é uma etiqueta, não um botão.

Há ainda: **duas setas** — uma transferência entre as suas contas; **um calendariozinho com seta** — uma transação registada a partir de um pagamento programado; **um post-it** — uma nota: um registo sem valor, um lembrete para si próprio.

### O menu «⋮» {#transactions-menu}

Tudo aqui é sobre como mostrar o feed. Nenhum item muda ou elimina os seus registos — experimente sem receio.

[O menu «⋮» aberto: Selecionar transações, Filtro, Ordenação, Total do dia, Dicas]

(A)
#### Selecionar transações

Uma ação numa dúzia de linhas de uma vez.

*Como funciona:*
Precisa de pôr um marcador vermelho numa dúzia de compras para as verificar com o extrato? Não tem de abrir uma a uma. Ligue a seleção e marque as linhas — o total delas aparece em baixo (útil também para somar talões). Toque no «⋮» ao lado do total: pode definir uma categoria, um marcador ou a marca «contabilizado» para todas de uma vez, repeti-las com a data de hoje, passá-las para outra conta ou eliminá-las. O último item, «Limpar a seleção», sai da seleção sem mudar nada.

O atalho: mantenha o dedo em qualquer linha.

(B)
#### Filtro

Deixar no feed só o que precisa.

*Como funciona:*
Por exemplo: «despesas em cafés no mês passado, só no cartão». Pode filtrar por tipo, período, categoria, beneficiário, conta, valor e tag. Os filtros somam-se — cada um a mais estreita o feed.

Enquanto um filtro está ligado, acende-se um número no «⋮» — um lembrete de que o feed não está completo neste momento. Senão é fácil pensar que desapareceram transações.

**Logo após a instalação:** sem filtros. **Repõe-se sozinho:** quando muda de orçamento — outro orçamento tem as suas categorias e contas. **Veja também:** [o filtro dos relatórios](#reports).

(C)
#### Ordenação

Como ordenar as transações dentro de um dia.

*Como funciona:*
Os dias seguem sempre como num calendário — o mais recente no topo, e isso não muda. Mas dentro de um dia pode definir a sua ordem: as despesas grandes no topo («Decrescente»), as pequenas no topo («Crescente») ou as receitas primeiro. A ordem escolhida fica escrita no próprio item do menu — para que uma semana depois não estranhe porque é que um dia parece «baralhado».

**Logo após a instalação:** pela ordem de registo. **Funciona também:** no ecrã da conta, nas transações de uma categoria e de um beneficiário.

(D)
#### Total do dia

Quanto saiu num dia — mesmo ao lado da data.

*Como funciona:*
Ligue «Só despesas» — e à direita de cada data vê quanto gastou nesse dia. Ótimo para apanhar os dias «caros»: um sábado com mercado e cinema salta logo à vista.

«Despesas e receitas» mostra a diferença como um só número, com sinal: «−100» — o dia ficou negativo, «+1 400» — entrou um ordenado. As transferências entre as suas próprias contas e os saldos iniciais não contam: não são despesas, o dinheiro só mudou de sítio.

**Logo após a instalação:** não aparece. **Funciona também:** no ecrã da conta e nas transações de uma categoria.

(E)
#### Dicas

Todas as dicas deste ecrã num só sítio.

*Como funciona:*
Na aplicação, as dicas aparecem uma de cada vez — quando são úteis, para não o soterrar com tudo de uma vez. Aqui estão todas reunidas, mesmo as que ainda não alcançou. E no fim da lista — uma ligação para esta página.

### O que pode fazer com uma linha {#transactions-gestures}

Não há botões «editar» e «eliminar» na linha — para não atrapalharem a leitura. Em vez disso, toque na linha ou deslize-a para o lado com o dedo.

| Faça isto | O que acontece |
|---|---|
| Toque | Abre o cartão da transação: tudo sobre ela, fotos do recibo, edição. [O que tem](#transactions-detail) |
| Deslize para a esquerda | «Editar» — diretamente para o formulário. |
| Deslize para a direita | «Eliminar». Mudou de ideias? «Desfazer» fica em baixo durante uns segundos. |
| Mantenha o dedo | Liga a seleção de várias linhas — como o item [«Selecionar transações»](#transactions-select). |

#### Tocou numa transação — o que tem lá dentro {#transactions-detail}

O cartão da transação sobe a partir de baixo: tudo o que registou sobre ela, numa só folha. Nada muda até tocar em «Editar» — pode ver com calma.

[Cartão da transação «Continente»: valor, beneficiário, categoria, conta, data, recibo eletrónico, nota, tag «casa de campo», foto do recibo, botões «Repetir», «Editar», «Criar pagamento programado»]
**Uma compra com recibo e foto.**

[Cartão da divisão «Worten»: partes da divisão — Supermercado 61 € e Itens de casa 25 €]
**Um valor dividido.** Em baixo — as partes da divisão.

- **Grande no topo** — o valor com sinal: menos é despesa, mais é receita.
- **Beneficiário, categoria, conta, data** — o que registou no formulário.
- **Recibo** — o recibo eletrónico. «Copiar» põe o código na área de transferência para o colar onde precisar. Se for uma ligação, há também «Abrir» — o recibo abre no navegador.
- **Tags** — as etiquetas da transação como chips, como no feed: «#casa de campo».
- **Fotos** — miniaturas das imagens e dos PDF anexados. Toque numa imagem para a abrir em ecrã inteiro.
- **Partes da divisão** — num valor dividido: cada parte com a sua categoria, nota e valor.

##### Botões em baixo

- **«Editar»** — abrir esta transação no formulário e mudar o que quiser.
- **«Repetir»** — uma transação nova com o mesmo beneficiário, categoria e valor. Prático para o que compra muitas vezes: café, transportes, almoço.
- **«Criar pagamento programado»** — fazer desta transação um pagamento regular: renda, uma subscrição, um empréstimo. Só falta escolher de quanto em quanto tempo se repete.

Um valor dividido e uma transferência têm só «Editar»: a aplicação não os repete pela metade.

## Relatórios {#reports}

Dez relatórios: para onde vai o seu dinheiro, como mudam as despesas, de onde vem o rendimento e se o seu património está a crescer.

*O separador «Relatórios» em baixo no ecrã*

### Como funciona o separador {#reports-how}

Um relatório de cada vez no ecrã. No topo está que relatório e de que período, por baixo o próprio relatório. A aplicação lembra-se do relatório e do período: abra a «Tendência de gastos» de seis meses, e da próxima vez é ela que abre.

[Relatório Para onde foi o dinheiro de setembro — novembro: anel, total 5893, lista de categorias]

1. **Nome do relatório** — toque para abrir a lista de todos os relatórios (captura abaixo).

2. **Filtros** — o funil: período, categorias, contas, tags. O número nele é quantos filtros estão ligados.

   *Como funciona:*
   Desligue a categoria «Renda» — desaparece dos relatórios de despesas, e o quadro das despesas do dia a dia fica mais claro. Os filtros ficam guardados para cada orçamento.

3. **Período** — as setas «‹ ›» movem a janela um mês para trás ou para a frente, e um toque no rótulo abre a escolha do período: um mês, 3, 6, 12 meses, o ano até agora ou um intervalo seu.

   *Como funciona:*
   Saiu do mês atual? Ao lado aparece «Hoje», para voltar. Cada relatório tem o seu período: as despesas são práticas de ver por mês, e a tendência por ano.

4. **Vista** — alguns relatórios têm várias vistas: anel, bolhas, blocos, tabela ou gráfico. A escolha fica guardada para cada relatório.

5. **Lista** — os mesmos números em linhas: cor, nome, valor, percentagem. Toque numa linha para abrir o ecrã da categoria ou do beneficiário.

[Folha de escolha do relatório: secções Gastos, Movimentos de dinheiro, Património]
**Escolher um relatório.** Três secções — pela pergunta a que o relatório responde.

[Folha Filtros do relatório: Período, Categorias, Contas, Tags]
**Filtros do relatório.** Cada secção abre-se.

### Gastos {#reports-spending}

Para onde vai o dinheiro e como isso muda.

#### Para onde foi o dinheiro {#reports-r-spending}

As despesas do período por categoria — o principal relatório de «para onde foi tudo». Três formas de ver o mesmo: escolha a que lhe for mais clara.

[Bolhas: Renda 3600, 61%, Supermercado 886,98, 15%]
**Bolhas.** A área de uma bolha é o valor.

[Blocos: Renda, Supermercado, Compras grandes]
**Blocos.** A área de um bloco é o valor.

(•)
#### Anel, bolhas, blocos

Mude entre eles com os ícones à direita, por cima da imagem. O anel é o habitual; as bolhas e os blocos mostram melhor as categorias pequenas ao lado das grandes.

(•)
#### Toques

Toque numa fatia do anel, numa bolha ou num bloco — fica destacado, e a linha dele acende-se na lista. Um segundo toque abre o ecrã dessa categoria.

(•)
#### O que se conta

As despesas menos os reembolsos, sem as transferências entre as suas próprias contas. Na captura, saíram 5893 € em três meses, 61% dos quais para a renda.

*Como funciona:*
Quer ver as despesas do dia a dia sem a renda e as contas de casa? Tire-as no filtro «Categorias».

#### Tendência de gastos {#reports-r-trend}

Se as suas despesas estão a subir ou a descer — por mês, com a média e uma linha de tendência.

[Tendência de gastos junho — novembro: barras por mês, dinâmica, linhas de tendência e de média, Total do período 11 590,28]

(•)
#### No topo

A despesa média por mês e para onde vai: «a subir ≈ 38,20 €/mês» ou «a descer».

(•)
#### O gráfico

As barras são as despesas de cada mês. A linha com pontos é a dinâmica, a reta é a tendência, a tracejada é a média. O mês atual fica esbatido: ainda não terminou, por isso fica fora da média e da tendência.

(•)
#### A tabela «Por mês»

Cada mês e quanto se afasta da média — em euros e em percentagem. Toque num mês no gráfico, e o valor exato aparece por cima dele.

#### Exemplo: as contas de casa estão a ficar mais caras? {#reports-r-trend-example}

A tendência geral não o diz: tem todas as despesas juntas, e o crescimento de uma categoria perde-se no resto. Deixe só uma categoria no relatório.

[Filtros do relatório: Categorias 1 de 18, Desmarcar tudo, só Contas de casa marcada]
**O filtro.** Ficou uma só categoria no relatório.

[Tendência de gastos só das contas de casa: 97,27 €/mês, a descer ≈ 3,87 €/mês, outubro −20% em relação à média]
**O resultado.** A tendência só das contas de casa.

6. **«Categorias»** — na «Tendência de gastos», toque no funil no canto superior direito, depois em «Categorias»: abre uma lista de todas as categorias com caixas de seleção.

7. **«Desmarcar tudo»** — desmarca todas as categorias de uma vez, em vez de uma a uma.

8. **A categoria de que precisa** — marque «Contas de casa». Por baixo de «Categorias» aparece agora «1 de 18». Feche a folha: deslize-a para baixo ou toque fora dela.

9. **O número no funil** — quantos filtros estão ligados. Enquanto está aceso, o relatório não mostra todas as despesas.

Agora o relatório é só sobre as contas de casa: 97,27 € por mês em média, as contas estão a descer cerca de 3,87 € por mês, e outubro foi 20% mais barato do que a média. O filtro fica guardado para este relatório: da próxima vez a «Tendência de gastos» abre com ele. Para voltar a ter todas as categorias — «Selecionar tudo» ou «Limpar» na folha dos filtros.

#### Principais beneficiários {#reports-r-payees}

O mesmo que «Para onde foi o dinheiro», mas por beneficiário: a quem paga mais.

[Principais beneficiários: anel, Senhorio 3600, Continente, IKEA, Pingo Doce]

(•)
#### As mesmas três vistas

Anel, bolhas ou blocos — este relatório guarda a sua própria escolha.

(•)
#### Toques

Uma linha ou uma fatia abre o ecrã do beneficiário: todas as despesas com ele, por categoria e por mês (artigo [«Beneficiários e tags»](#payees-tags)).

#### Desvio {#reports-r-deviation}

Onde está a gastar mais ou menos do que o habitual este mês — de relance. A comparação é feita com os seus 12 meses anteriores ao período: o mês em curso é comparado com os mesmos dias dos meses anteriores, do dia 1 até à data de hoje, e um período de vários meses com um mês habitual multiplicado pelo número deles.

[Desvio de novembro: blocos por categoria, a cor mostra mais ou menos do que o habitual, resumo: Transportes +8,71, novos: Itens de casa]

(•)
#### Blocos

O tamanho de um bloco é quanto se gastou, a cor é quanto a mais (avermelhado) ou a menos (esverdeado) do que o habitual, em três degraus. Os cinzentos estão como de costume, dentro de 10%. Um contorno sem preenchimento quer dizer que a categoria apareceu pela primeira vez.

(•)
#### «O habitual»

O meio dos seus meses anteriores no ano: um mês invulgarmente caro não o desloca. No mês atual — «o habitual até esta data»: 10 de novembro é comparado com os mesmos dias dos meses anteriores.

(•)
#### O resumo em palavras

Por baixo dos blocos — «Mais que o normal», «Menos», «Novos» com os valores. «Categorias» ou «Beneficiários» — chips no topo.

#### Tags {#reports-r-tags}

Quanto saiu com cada tag — por mês, como tabela ou gráfico.

[Relatório Tags: tabela por mês — casa de campo, Juntas, Todos os gastos; secção Acertos — a meias, cobrar 43]

[Relatório Tags como gráfico: 1 de 4 no gráfico, As maiores do período]

(•)
#### A tabela

Uma linha por tag, uma coluna por mês. «Juntas» são todas as tags de uma vez: uma transação com duas tags conta nela uma só vez. «Todos os gastos» estão lá para comparar.

(•)
#### «Acertos»

As tags com «Acerto de contas» ligado, num bloco à parte: quanto cobrar ou devolver.

(•)
#### O gráfico

Até quatro tags como linhas por mês; quais — escolhe por cima do gráfico.

### Movimentos de dinheiro {#reports-flow}

De onde veio o dinheiro, para onde foi e quanto sobrou.

#### Fluxo de dinheiro {#reports-r-flow}

O caminho inteiro do dinheiro numa só imagem: das fontes de rendimento — para o orçamento — por grupo — por categoria.

[Fluxo de dinheiro: Entidade patronal → Orçamento; no topo Receita 8400, Despesa 5893, Líquido +2507, Poupança 30%]
**À esquerda** — de onde veio o dinheiro.

[Fluxo de dinheiro, a parte direita: grupos de despesas → categorias, Restante]
**Deslize para o lado** — grupos e categorias.

(•)
#### No topo

A receita, a despesa, o «líquido» (quanto sobrou) e a taxa de poupança — que percentagem do rendimento não foi gasta.

(•)
#### Fitas

A espessura de uma fita é o valor. Toque numa fita para ver o valor e a percentagem. A faixa verde «Restante» é o dinheiro que não foi para lado nenhum.

(•)
#### Como ver

A imagem é maior do que o ecrã: deslize para o lado e para baixo. O cabeçalho com os totais desliza junto com a imagem.

#### Receitas e despesas {#reports-r-ie}

A contabilidade mês a mês: quanto entrou, quanto saiu por grupo, o que sobrou.

[Receitas e despesas como tabela: Receitas, Despesas por grupo, Total, Taxa de poupança por mês]
**Tabela.**

[Receitas e despesas como gráfico: barras verdes e vermelhas por mês e uma linha do total]
**Gráfico.**

(•)
#### A tabela

As linhas são as receitas por origem e as despesas por grupo; um grupo pode abrir-se até às categorias. Em baixo — o «Total» e a «Taxa de poupança» de cada mês.

*Como funciona:*
Toque num número para abrir a lista de transações que o formam. A tabela é maior do que o ecrã — deslize para o lado.

(•)
#### O gráfico

Cada mês tem duas barras: a verde para cima — quanto dinheiro entrou, a vermelha para baixo — quanto saiu. Uma linha fina mostra o que sobrou: acima de zero, o mês acabou positivo; abaixo, gastou mais do que entrou. Por cima do gráfico há quatro números do período inteiro: receitas, despesas, total e taxa de poupança. Toque num mês, e os números mostram só esse mês; deslize o dedo, e mudam pelos meses vizinhos; toque outra vez no mesmo mês, e volta o período inteiro.

#### Idade do dinheiro {#reports-r-aom}

Como mudou a sua idade do dinheiro mês a mês.

[Idade do dinheiro: 52 dias no fim do período, uma linha por mês]

(•)
#### O número no topo

A idade no fim do período — o mesmo número do «Resumo».

(•)
#### Para quê

Vê se a sua margem está a crescer. Uma linha a subir quer dizer que está cada vez mais longe do «de ordenado em ordenado». O que significa o número e como se calcula — no artigo [«Resumo»](#overview), secção «Idade do dinheiro em pormenor».

### Património {#reports-capital}

Tudo o que tem e tudo o que deve.

#### Património {#reports-r-networth}

O total de todas as contas menos as dívidas — e como mudou.

[Património: 12 209,72 no fim do período, uma linha por mês, uma tabela por mês com setas]

(•)
#### O que entra

Todas as contas na moeda principal — tanto as do orçamento como as de fora dele (poupança, depósitos), menos os cartões de crédito e os empréstimos. As contas noutras moedas não são convertidas e não entram no total.

(•)
#### A tabela

O património no fim de cada mês, com uma seta — para cima ou para baixo.

#### Dívida dos cartões {#reports-r-carddebt}

Quanto deve nos cartões de crédito — e se a dívida está a crescer.

[Dívida dos cartões: 890,63 no fim do período, a dívida cresceu 563,13 no período]

(•)
#### O número no topo

A dívida de todos os cartões de crédito no fim do período e quanto cresceu ou diminuiu no período.

(•)
#### Quando aparece

O relatório só está na lista se tiver um cartão de crédito. Como funciona um cartão de crédito no orçamento — no artigo [«Como funciona o orçamento»](#start).

## Contas {#accounts}

Todos os sítios onde está o seu dinheiro: cartões, carteira, poupança, cartões de crédito. E quanto há em cada sítio neste momento.

*O separador «Contas» em baixo no ecrã*

### Para que serve este ecrã {#accounts-why}

Aqui vê onde está o seu dinheiro agora: quanto há na conta à ordem, quanto na carteira, quanto deve no cartão de crédito. Os envelopes do ecrã «Plano» respondem a «para quê», e as contas respondem a «onde».

##### Adicione as suas contas

Todos os sítios onde há dinheiro: os cartões de todos os bancos, a carteira, a poupança.

##### Verifique com o banco

Uma vez por semana ou por mês, confirme que a aplicação e o banco mostram o mesmo.

##### Arrume o que é antigo

Fechou um cartão? Oculte-o, e o histórico fica.

### O que está onde no ecrã {#accounts-screen}

Toque em qualquer captura para a abrir em ecrã inteiro.

[Ecrã «Contas»: secções «No orçamento», «Cartões de crédito», «Fora do orçamento» com contas e valores]

1. **Secção** — uma prateleira de contas do mesmo tipo. Toque no nome para recolher a secção.

   *Como funciona:*
   Há quatro secções, e a secção em que uma conta fica depende do tipo dela. «No orçamento» é o dinheiro que reparte pelos envelopes: conta à ordem, dinheiro vivo. «Cartões de crédito» — os cartões de crédito. «Fora do orçamento» — o que está a poupar ou só quer ter à vista: a poupança, um depósito a prazo. «Dívidas» — os empréstimos. Uma secção vazia não aparece. Mais na secção [«No orçamento ou fora do orçamento»](#accounts-kinds).

2. **Total da secção** — quanto há em todas as contas da secção.

   *Como funciona:*
   «No orçamento» na captura são 4712,98 €: é a conta à ordem e o dinheiro vivo juntos, exatamente o dinheiro que reparte pelos envelopes no ecrã «Plano». Os «Cartões de crédito» têm um total vermelho — é dívida.

3. **Conta** — uma linha é uma carteira, um cartão ou um depósito. O ícone e a cor vêm do tipo da conta.

   *Como funciona:*
   Toque na linha para abrir o ecrã da conta: todas as transações dela, como nas «Transações», mas só desta conta. Mantenha o dedo para abrir o menu da conta ([mais abaixo](#accounts-hold)). Deslize para a esquerda ou para a direita — «Editar» ou «Eliminar».

4. **Saldo** — quanto há na conta neste momento segundo os seus registos.

   *Como funciona:*
   É a soma de todas as transações da conta com o saldo inicial. Se não coincidir com o banco, uma transação foi esquecida ou registada duas vezes. Como a encontrar — [«Conciliação de saldo»](#accounts-reconcile).

5. **«Pendente»** — o total das transações que o banco ainda não processou.

   *Como funciona:*
   A conta à ordem na captura mostra −47,55 €: já registou a compra no «Continente», mas ela ainda não está no banco. Quando aparecer no extrato, marque-a com o círculo no feed (nas «Transações» — marca 9), e a linha desaparece. Enquanto houver transações destas, o saldo da aplicação e o saldo na aplicação do banco diferem com razão — exatamente nesse valor. A marca é opcional. Se não a usa, todas as transações da conta vêm parar aqui — não é um erro, a linha só não diz nada nesse caso.

6. **«Cartões de crédito»** — uma secção à parte para os cartões de crédito. O total vermelho é quanto deve ao banco. Para cada cartão de crédito, a aplicação cria sozinha uma categoria especial no ecrã «Plano» — não mexa nela.

   *Como funciona:*
   As despesas com cartão de crédito diminuem os envelopes tal como as despesas com cartão de débito. Mas o dinheiro para o pagar põe-no de lado a própria aplicação — no grupo «Pagamentos de cartão» do ecrã «Plano». O pagamento do cartão de crédito é uma transferência do seu cartão de débito para o cartão de crédito.

   **A categoria especial.** Quando cria uma conta do tipo «Cartão de crédito», a aplicação cria uma categoria com o mesmo nome do cartão no grupo «Pagamentos de cartão» do ecrã «Plano». Por baixo do nome dela aparece «Dívida do cartão …». A aplicação põe nela de lado o dinheiro do pagamento: gastou 35 € com o cartão de crédito — vieram para aqui 35 € do envelope da compra.

   **Não mexa nesta categoria** — e a aplicação nem deixa: não se lhe pode mudar o nome, eliminá-la nem passá-la para outro grupo, e não pode adicionar uma categoria sua ao grupo «Pagamentos de cartão». É por ela que a aplicação conta a dívida deste cartão. Mude o nome do cartão no ecrã «Contas» — a categoria muda o nome sozinha. Mude o cartão para outro tipo — a categoria desaparece, e o dinheiro dela volta para «não alocado».

   Uma coisa nela continua a ser sua: **a dívida que o cartão já tinha antes de começar a acompanhar**. A aplicação não põe dinheiro de lado para ela — para a liquidar, põe dinheiro nesta categoria como em qualquer envelope, aos poucos ou de uma vez.

7. **«Fora do orçamento»** — contas cujo dinheiro não é repartido pelos envelopes: a poupança, um depósito a prazo. Em que diferem — [mais abaixo](#accounts-kinds).

8. **O menu «⋮»** — adicionar uma conta e configurar o aspeto da lista. Explicado [mais abaixo](#accounts-menu).

### No orçamento ou fora do orçamento {#accounts-kinds}

A pergunta principal sobre cada conta: reparte o dinheiro dela pelos envelopes? A resposta decide onde a conta aparece neste ecrã e se o dinheiro dela chega ao ecrã «Plano».

##### No orçamento

A conta à ordem, o dinheiro vivo, um cartão de crédito — aquilo de onde gasta todos os dias. Cada euro aqui deve estar nalgum envelope. O ordenado cai na conta à ordem — vai para «não alocado».

##### Fora do orçamento

A poupança, um depósito a prazo, investimentos, um empréstimo — o que quer ver, mas não gasta todos os dias. Este dinheiro não tem envelopes. Passou dinheiro da poupança para a conta à ordem? Aparece em «não alocado», e pode distribuí-lo.

Uma conta nova vai sozinha para a sua secção, pelo tipo: «Dinheiro» e «Conta bancária» vão para «No orçamento», «Cartão de crédito» para «Cartões de crédito», «Empréstimo» para «Dívidas», «Apenas acompanhamento» para «Fora do orçamento». Os empréstimos e as contas «Apenas acompanhamento» não têm envelopes.

### O menu «⋮» {#accounts-menu}

Uma conta nova e como mostrar a lista.

[Menu «⋮» do ecrã «Contas»: Adicionar conta, Saldos correntes, Contas ocultas, Dicas]

(F)
#### Adicionar conta

Um cartão novo, uma carteira ou um depósito.

*Como funciona:*
1. Toque em «Adicionar conta».
2. Escolha um tipo: «Dinheiro», «Conta bancária», «Cartão de crédito», «Empréstimo» ou «Apenas acompanhamento». O tipo decide a secção e o ícone.
3. Introduza um nome — como chama a esta conta: «Cartão CGD», «Carteira».
4. Introduza quanto há na conta hoje — o valor da aplicação do banco ou da sua carteira.
5. Guarde. O valor passa a ser o saldo inicial. Para dinheiro vivo e conta bancária, vai diretamente para «não alocado» no ecrã «Plano» — distribua-o pelos envelopes.

(G)
#### Saldos correntes

Mostrar o saldo depois de cada transação — para todas as contas de uma vez.

*Como funciona:*
O mesmo que «Saldo corrente» no menu de uma conta, só que para todas. **Logo após a instalação:** desligado.

(H)
#### Contas ocultas

Mostrar as contas ocultas no fim da lista.

*Como funciona:*
O número entre parênteses é quantas são. Enquanto não há contas ocultas, o item fica cinzento, como na captura. Cada conta oculta na lista tem um botão «Restaurar».

(I)
#### Dicas

Todas as dicas deste ecrã num só sítio — e uma ligação para esta página.

### O que pode fazer com uma linha {#accounts-gestures}

A linha de uma conta não tem botões. Toque nela, mantenha o dedo ou deslize-a para o lado.

| Faça isto | O que acontece |
|---|---|
| Toque | O ecrã da conta: todas as transações dela, com o saldo e o «Pendente» no topo. |
| Mantenha o dedo | O menu da conta — [explicado abaixo](#accounts-hold). |
| Deslize para a esquerda | «Editar» — a folha de edição da conta: nome, tipo, aspeto. |
| Deslize para a direita | «Eliminar». Se a conta tinha transações, a aplicação propõe «Ocultar». |

#### O menu da conta — mantenha o dedo {#accounts-hold}

A linha de uma conta não tem «⋮» próprio, para não tirar espaço ao nome. O menu abre com um toque longo mesmo onde está o seu dedo. Os mesmos itens estão no «⋮» do próprio ecrã da conta.

[Menu da conta no toque longo: Conciliação de saldo, Saldo corrente, Ocultar a conta, Editar a conta, Eliminar a conta]

(A)
#### Conciliação de saldo

Verificar se a aplicação e o banco mostram o mesmo.

*Como funciona:*
1. Abra a aplicação do banco e veja quanto há na conta.
2. Em «Contas», mantenha o dedo nesta conta e escolha «Conciliação de saldo».
3. A janela diz «Na aplicação: …». Em baixo, no campo «Saldo real no banco», introduza o valor do banco e toque em «Conciliar».
4. Coincide — a aplicação diz «Saldo conciliado ✓». Todas as transações da conta até hoje levam um cadeado, e por baixo da conta aparece «Conciliado em» com a data.
5. Não coincide — a janela «O saldo não confere» mostra a diferença. Primeiro procure uma transação esquecida ou a mais. Não encontra? Toque em «Criar ajuste»: a aplicação adiciona uma transação com essa diferença, e preenche a categoria, o beneficiário e a nota por si.

As transações com cadeado contam como verificadas: editar uma pede confirmação, para que o que está conciliado não mude por engano.

(B)
#### Saldo corrente

Mostrar por baixo de cada transação desta conta quanto tinha a conta depois dela.

*Como funciona:*
Prático para encontrar onde o saldo se afastou do extrato do banco: percorra as transações e compare os saldos linha a linha. Liga-se só para esta conta; para todas de uma vez — «Saldos correntes» no menu «⋮».

(C)
#### Ocultar a conta

Tirar da lista uma conta que já não usa.

*Como funciona:*
Fechou um cartão? Não o pode eliminar — tem histórico. Uma conta oculta desaparece da lista, mas as transações dela ficam no histórico e nos relatórios. Para a voltar a mostrar: «⋮» → «Contas ocultas» — aparecem no fim da lista com um botão «Restaurar».

(D)
#### Editar a conta

Mudar o nome, o tipo, o ícone e a cor da conta, e, numa conta noutra moeda, a moeda.

*Como funciona:*
A mesma folha abre quando desliza a linha para a esquerda. Se a conta tem um saldo inicial, a folha tem uma linha «Saldo inicial» com a data e o valor — toque para abrir essa mesma transação, e corrija-a como qualquer outra.

(E)
#### Eliminar a conta

Só uma conta sem uma única transação.

*Como funciona:*
Se a conta já tem transações, a aplicação diz quantas e propõe ocultar a conta em vez de a eliminar — os relatórios e os saldos precisam do histórico. O mesmo com um deslize para a direita.

## Formulário de transação {#entry}

Como registar uma compra, uma receita, uma transferência ou uma compra repartida por várias categorias — e para que serve cada campo.

*«+ Transação» em qualquer separador*

### Para que serve este ecrã {#entry-why}

É aqui que regista tudo o que acontece ao seu dinheiro: uma compra, um ordenado, uma transferência de um cartão para outro. Quanto mais depressa registar, mais honesto é o orçamento — por isso o essencial do formulário faz-se logo na caixa, em poucos toques.

##### Abrir

«+ Transação» em qualquer separador. A partir do ecrã de uma conta ou de uma categoria, o formulário abre com elas já preenchidas. Ainda mais rápido — um widget no ecrã principal.

##### O mínimo

Valor, categoria e conta. O beneficiário, a nota e tudo o resto são opcionais.

##### Não só à mão

A câmara por cima do «+» lê o código QR do recibo, o microfone, uma frase como «café 6 Lazer e hobbies». Os dois botões abrem este mesmo formulário, já preenchido.

### O que está onde no ecrã {#entry-screen}

É assim que fica o formulário logo depois de tocar em «+». O teclado do valor abre logo: quase sempre começa pelo valor. Toque em qualquer captura para a abrir em ecrã inteiro.

[Nova transação: seletor Saídas e Entradas, valor 0,00, campos Beneficiário, Categoria, Conta, Data, teclado do valor]

1. **Fechar** — a cruz. Se já escreveu alguma coisa, a aplicação pergunta «Sair sem guardar?» — «Ficar» ou «Não guardar».

2. **«Saídas» / «Entradas»** — uma despesa ou uma receita. A escolha decide o sinal do valor e a cor do cabeçalho: avermelhado — despesa, verde — receita, cinzento — transferência.

   *Como funciona:*
   Escolha «Entradas» e um beneficiário — a aplicação põe sozinha a categoria de receita deste mês: assim um ordenado vai diretamente para «não alocado» no ecrã «Plano».

   Toque no campo «Categoria» numa receita — abre a folha «Onde lançar a receita»: «Receita para novembro», «Receita para dezembro» ou «Para uma categoria de despesa…» (um reembolso, a sua parte numa compra partilhada). O ordenado regista-se para o mês seguinte quando a sua idade do dinheiro chega aos 30 dias — porquê e o que muda está no artigo [«Resumo»](#overview), secção «Idade do dinheiro em pormenor».

3. **Valor** — introduz-se no teclado abaixo. Se o teclado estiver escondido, toque no valor para o fazer voltar.

4. **Beneficiário** — a quem pagou ou de quem veio o dinheiro: «Continente», «Entidade patronal». As transferências entre as suas próprias contas também estão aqui.

   *Como funciona:*
   Escolha um beneficiário que já registou antes — a aplicação preenche a categoria e a nota como da última vez. Só preenche os campos vazios: se já escolheu uma categoria, ela fica. Um beneficiário novo cria-se a partir da pesquisa: escreva o nome e escolha «Criar «…»». Para tirar o beneficiário de uma transação, use a cruz à direita do campo. Mais — [mais abaixo](#entry-pickers).

5. **Categoria** — o envelope de onde saiu o dinheiro. Sem ela, uma compra não diminui nenhuma linha do ecrã «Plano».

6. **Conta** — de onde saiu ou para onde chegou o dinheiro: conta à ordem, carteira, cartão de crédito. O ícone e a cor são os mesmos da lista de contas.

7. **Data** — hoje, se não lhe mexer. Toque para abrir um calendário.

   *Como funciona:*
   Uma data a mais de um mês de distância — a aplicação volta a perguntar: «A transação ficará com a data …, mais de um mês à frente. Continuar?». Isto apanha um erro de escrita no ano.

8. **Teclado do valor** — o da própria aplicação, com calculadora. Explicado [mais abaixo](#entry-keypad).

### O teclado do valor {#entry-keypad}

O teclado normal do telemóvel é desconfortável para valores: dígitos pequenos, sem operações, a vírgula escondida num segundo ecrã. O formulário tem o seu — grande e com calculadora.

(+)
#### Faz as contas

Uma conta para dois, duas compras num cartão — calcule diretamente no campo.

*Como funciona:*
Introduza 120, toque em «+», introduza 35 e toque em «=» — o valor passa a 155. «+», «−», «×» e «÷» funcionam. A operação escolhida fica destacada enquanto introduz o segundo número.

(,)
#### Vírgula ou cêntimos

Como introduzir a parte decimal, decide o utilizador.

*Como funciona:*
**Com vírgula** — como numa calculadora: 12, vírgula, 50 é 12,50. Enquanto introduz os cêntimos, a tecla da vírgula fica destacada.

**A partir dos cêntimos** — como num terminal de pagamento: 1250 é 12,50. Em vez da vírgula, o teclado tem uma tecla «00»: «3», «00», «00» é 300,00.

Mude em «Definições → Idioma e formatos → Introdução do valor». **Logo após a instalação:** com vírgula.

(⌫)
#### Apagar

Toque para apagar o último dígito. Mantenha o dedo para apagar tudo de uma vez, juntamente com uma operação começada.

(✓)
#### «Concluir»

Esconde o teclado, mostrando os outros campos e o botão «Guardar» por baixo. O botão Voltar do sistema faz o mesmo.

(✋)
#### Que mão

Os dígitos debaixo do polegar.

*Como funciona:*
«Para a mão direita» — os dígitos à direita, as operações e o «Concluir» à esquerda (como na captura). «Para a mão esquerda» — o contrário. «Definições → Idioma e formatos → Teclado do valor». **Logo após a instalação:** para a mão direita.

### Escolher o beneficiário e a categoria {#entry-pickers}

Os dois campos abrem uma lista a partir de baixo do ecrã. No topo — a pesquisa: escreva duas letras, e a lista estreita-se.

[Lista de beneficiários: pesquisa, secção Transferências com contas e saldos, Fora do orçamento, beneficiários com uma letra à esquerda]
**Beneficiário.** Primeiro as suas contas para transferências, depois os beneficiários.

[Lista de categorias: pesquisa, Dividir o valor, Usados com frequência, grupos de categorias]
**Categoria.** «Dividir o valor», as frequentes, depois todos os grupos.

(A)
#### Transferências — na lista de beneficiários

O dinheiro foi para uma conta sua? Escolha-a na secção «Transferências»: «Transferência: Visa».

*Como funciona:*
Por baixo do nome da conta está o saldo dela, para não se enganar. As contas fora do orçamento (poupança, um depósito a prazo) estão numa secção própria mais abaixo. Como funciona uma transferência — [mais abaixo](#entry-transfer).

(B)
#### Beneficiário novo

Não está na lista? Escreva o nome na pesquisa e escolha «Criar «…»».

*Como funciona:*
Não precisa de criar os beneficiários antes: a lista forma-se sozinha à medida que regista. Para mudar o nome ou eliminar — «Definições → Beneficiários».

(C)
#### «Usados com frequência»

Chips com as categorias que escolhe mais vezes. Um toque e está feito.

*Como funciona:*
A pesquisa também entende o nome do grupo. Não encontra? Escolha «Criar «…» no grupo»: a categoria nova aparece logo também no ecrã «Plano».

(D)
#### «Dividir o valor»

Uma compra — várias categorias. Explicado [mais abaixo](#entry-split).

### Uma transação preenchida {#entry-filled}

A compra no «Continente» do artigo «Transações»: com uma tag, um recibo eletrónico e uma foto. O teclado está escondido e o «Adicional» aberto — todos os campos do formulário estão à vista.

[A editar a transação Continente 47,55: campos, Adicional com a tag casa de campo, recibo, foto, Contabilizado, Marcador, Eliminar a transação, Guardar]

9. **Nota** — o que comprou ou porquê: «Leite, ovos, pão». Aparece no feed em itálico e pode ser encontrada pela pesquisa.

10. **«Adicional»** — os campos pouco usados num só cartão. Toque no cabeçalho para recolher ou abrir o cartão.

    *Como funciona:*
    Um cartão recolhido é uma só linha, com ícones à direita para os campos escondidos nele: tag, recibo, foto, «Contabilizado», marcador. Um campo preenchido está sempre à vista, mesmo num cartão recolhido. A aplicação lembra-se da sua escolha. **Logo após a instalação:** recolhido.

11. **Tags** — etiquetas por cima da categoria: «#casa de campo», «#férias». A folha de escolha — [mais abaixo](#entry-tags).

12. **Recibo eletrónico** — o código ou a ligação do recibo. O ícone do leitor à direita aponta a câmara a um código QR, o «+» adiciona mais um recibo.

    *Como funciona:*
    Se a aplicação conhece os recibos do seu país, confere o recibo com o formulário: preenche o valor se ainda não houver, e se os valores forem diferentes, mostra uma linha por baixo do campo e propõe «Corrigir». Um recibo nunca muda a data. Mais sobre recibos e fotos — no artigo [«Transações»](#transactions).

13. **Fotos e PDFs** — «Adicionar» — tirar uma foto do recibo, escolher uma foto da galeria ou um PDF. A cruz numa miniatura remove-a.

    *Como funciona:*
    Não exagere: cada foto vai para todas as cópias de segurança e, se estiver ligado, para a nuvem. Mais — no artigo [«Transações»](#transactions).

14. **«Contabilizado»** — marque quando a transação aparecer no extrato do banco. O círculo na linha do feed faz o mesmo.

    *Como funciona:*
    A marca é opcional: não afeta o orçamento, só ajuda a verificar a conta com o banco. Se nunca a usou, ignore-a — círculos vazios não fazem mal.

15. **Marcador** — um sinal colorido de «voltar a isto»: para verificar, para esperar um reembolso, para discutir. Aparece uma bandeirinha na linha do feed.

16. **Eliminar a transação** — só numa transação já registada. A aplicação volta a perguntar.

17. **«Guardar»** — registar. Sem conta ou categoria a aplicação não guarda e diz o que escolher. Um valor zero é permitido: um registo assim passa a ser uma nota-lembrete no feed.

### Uma transferência entre as suas contas {#entry-transfer}

Levantou dinheiro, pagou o cartão de crédito, passou dinheiro para um depósito — isto não é uma despesa, é dinheiro a mudar de sítio. Registe estas transações como transferências, senão o orçamento conta-as como despesas.

[Uma transferência de 300 registada como a sair da Conta à ordem: Saídas, Transferência: Visa, conta Conta à ordem, brilho vermelho]
**Forma 1.** A sair da Conta à ordem: «Saídas».

[A mesma transferência de 300 registada como a chegar ao Visa: Entradas, Transferência: Conta à ordem, conta Visa, brilho verde]
**Forma 2.** A chegar ao Visa: «Entradas».

(E)
#### Para onde — no campo «Beneficiário»

Escolha uma conta na secção «Transferências». O cabeçalho do formulário fica cinzento.

*Como funciona:*
A captura mostra o pagamento de um cartão de crédito: 300 € da «Conta à ordem» para o «Visa». No feed aparecem duas linhas: um menos na conta à ordem e um mais no cartão de crédito.

(F)
#### «Categoria não é necessária»

O dinheiro continua a ser seu — só mudou de sítio. Os envelopes do ecrã «Plano» não mudam.

*Como funciona:*
A exceção é uma transferência entre uma conta do orçamento e uma de fora dele (para a poupança, por exemplo). Aí o dinheiro sai dos envelopes ou entra neles, e a aplicação pede uma categoria.

(G)
#### «Saídas» e «Entradas» numa transferência

O sentido é do ponto de vista da conta do campo «Conta».

*Como funciona:*
**«Saídas»** — o dinheiro sai desta conta para a conta do campo «Beneficiário». Um círculo vermelho brilha suavemente atrás do valor. **«Entradas»** — o dinheiro chega a esta conta vindo da do «Beneficiário». O círculo é verde. O cabeçalho de uma transferência é cinzento de qualquer forma.

(!)
#### Uma transferência — duas formas de a registar

Um pagamento de 300 € da «Conta à ordem» para o «Visa» pode ser registado de qualquer um dos lados. O resultado é o mesmo.

*Como funciona:*
1. **A sair da conta à ordem** (captura da esquerda): «Conta» — Conta à ordem, «Beneficiário» — «Transferência: Visa», «Saídas», brilho vermelho.
2. **A chegar ao cartão de crédito** (captura da direita): «Conta» — Visa, «Beneficiário» — «Transferência: Conta à ordem», «Entradas», brilho verde.

De qualquer forma aparecem no feed as mesmas duas linhas: −300 na Conta à ordem e +300 no Visa, ambas com o ícone de transferência. Escolha o que for mais prático: está a verificar o extrato da conta à ordem — registe como a sair da conta à ordem; a aplicação do banco diz «pagamento do cartão recebido» — registe como a chegar ao cartão. A partir do ecrã de uma conta, o formulário abre sozinho com essa conta.

**Registe uma transferência uma só vez.** A aplicação adiciona o outro lado sozinha. Registe-a como a sair da conta à ordem e depois também como a chegar ao cartão de crédito, e a transferência duplica: saem 600 € da conta à ordem, e chegam 600 € ao cartão em vez de 300 €.

(H)
#### Moedas diferentes

De um cartão em euros para uma conta em dólares — o formulário propõe a conversão sozinho.

*Como funciona:*
Por baixo do beneficiário aparecem campos: «Será creditado» — quanto chega à segunda conta — e «Taxa», com um botão que inverte o sentido da taxa. Mude o valor, e o «Será creditado» é recalculado; mude a taxa — o mesmo; introduza o «Será creditado» — e a taxa é recalculada.

### Um valor dividido {#entry-split}

Uma compra — vários envelopes: na «Worten» comprou comida por 61 € e produtos de limpeza por 25 €. Registe-a como uma só transação, mas em duas categorias — assim os dois envelopes diminuem com honestidade.

[Divisão da Worten 86: Divisão, Total, Supermercado 61, Itens de casa 25, Adicionar parte]

(I)
#### «Divisão»

Aparece em vez do campo «Categoria» quando escolhe «Dividir o valor». Ao lado — o «Total» das partes.

(J)
#### Uma parte

A sua própria categoria, valor e nota. Toque na categoria ou no valor — muda só esta parte.

*Como funciona:*
Uma parte também pode ser uma transferência: pediu para levantar dinheiro na caixa da loja — 70 € para «Supermercado» e 30 € como «Transferência: Dinheiro». Um exemplo com números — no artigo [«Transações»](#transactions).

(K)
#### «+ tag»

Uma tag só para esta parte. Uma tag do campo «Tags» do formulário vale para a compra inteira de uma vez.

(L)
#### «Adicionar parte»

Mais uma linha. A cruz à direita de uma parte a mais remove-a.

(M)
#### «Cancelar»

Voltar a uma só categoria para o valor inteiro.

As partes não somam o total? Explicado [mais abaixo](#entry-split-mismatch).

#### As partes não somam o valor {#entry-split-mismatch}

Enganou-se numa parte? A aplicação não corrige em silêncio — mostra a diferença logo por baixo das partes e propõe uma forma de a fechar.

[Partes 61 e 35 com total 86: A divisão excede o total em 10, botão Aumentar para 96]
**As partes são maiores.** «Aumentar para 96,00 €».

[Partes 61 e 15 com total 86: Falta dividir 10, botão Reduzir para 76]
**As partes são menores.** «Reduzir para 76,00 €».

(N)
#### «A divisão excede o total em …» / «Falta dividir: …»

Quanto as partes estão longe do total. A linha aparece por baixo das partes sozinha enquanto edita.

*Como funciona:*
Enquanto edita, a linha é amarela — é uma dica. Toque em «Guardar» com valores que não batem certo, e a linha fica vermelha, e o formulário não guarda a transação até os valores coincidirem. O mesmo botão de correção aparece também na mensagem na parte de baixo do ecrã.

(O)
#### «Aumentar para …» / «Reduzir para …»

Um toque — e o total fica igual à soma das partes.

*Como funciona:*
À esquerda: na segunda parte introduziu 35 em vez de 25. Juntas, as partes dão 96 €, enquanto o total é 86 €: «A divisão excede o total em 10,00 €», e o botão «Aumentar para 96,00 €» soma esses 10 ao total. À direita é o contrário: 15 em vez de 25 — «Falta dividir: 10,00 €», e o botão «Reduzir para 76,00 €» tira os 10.

**O botão corrige o total, não a parte.** Se o total está certo — como no talão — e o erro foi numa parte, corrija a própria parte: toque no valor dela e introduza o certo.

### Reembolso por um artigo devolvido {#entry-refund}

Devolveu um leite fora de prazo, levou de volta um casaco que não servia — o dinheiro voltou. Isto não é uma receita: registe-o como reembolso para a mesma categoria de onde pagou.

[Folha Onde lançar a receita: Receita para novembro, Receita para dezembro, Para uma categoria de despesa]
**Passo 3.** O campo «Categoria» tem «Receita para novembro» — toque nele e escolha «Para uma categoria de despesa…».

[Um reembolso de 3,00 do Continente: Entradas, categoria Supermercado, conta Conta à ordem, nota Reembolso: leite fora de prazo]
**Pronto.** «Entradas», a loja, a categoria da compra.

(P)
#### Como registar

Um reembolso é dinheiro que veio da loja de volta para a categoria de onde saiu.

*Como funciona:*
1. «+ Transação» → «Entradas».
2. O valor do reembolso. Beneficiário — a mesma loja. Conta — para onde o dinheiro foi devolvido, normalmente o mesmo cartão.
3. Por hábito, a aplicação põe «Receita para novembro» em «Categoria» (captura da esquerda). Toque no campo «Categoria» → «Para uma categoria de despesa…» → escolha a categoria da compra: «Supermercado».
4. Nota — opcional: «Reembolso: leite fora de prazo». Guarde.

(Q)
#### O que muda

O envelope «Supermercado» é completado, o «não alocado» não.

*Como funciona:*
- No ecrã «Plano», o «Supermercado» mostra o «gasto» 3 € mais baixo, e o saldo cresce no mesmo valor.
- O «Não alocado» não muda: não ganhou esse dinheiro, recebeu de volta o seu.
- Nos ecrãs da categoria e da loja, as despesas contam-se descontados os reembolsos.
- No calendário do «Resumo», um dia só com reembolsos é marcado com um anel vazio.
- Reembolsou no cartão de crédito? A dívida do cartão diminui, e com ela o valor posto de lado para o pagar em «Pagamentos de cartão».

(R)
#### E se o registar como receita

O orçamento vai mentir duas vezes.

*Como funciona:*
A «Receita para novembro» soma 3 € ao «não alocado» como se os tivesse ganho, enquanto o «Supermercado» fica com uma compra que na verdade não aconteceu. O relatório «Receitas e despesas» mostra as receitas e as despesas maiores do que realmente são.

(S)
#### Porque não eliminar a compra

Pode eliminá-la se devolveu tudo no mesmo dia.

*Como funciona:*
Se a compra já passou no banco ou foi conciliada, ou se devolveu só uma parte, registe o reembolso como uma transação à parte. O extrato do banco vai ter duas linhas, a compra e o reembolso — deixe a aplicação ter duas também: a conciliação vai coincidir.

O dinheiro que um amigo lhe devolveu pela metade dele numa compra partilhada regista-se da mesma forma: «Entradas», do amigo, para a categoria da compra.

### Tags {#entry-tags}

O campo «Tags» no «Adicional» abre uma folha de escolha.

[Folha Tags: pesquisa Procurar ou criar tag, Recentes: casa de campo marcada, a meias]

1. Marque as tags de que precisa — as recentes estão no topo, com o número de transações à direita.
2. A que precisa não está lá? Escreva o nome dela na linha «Procurar ou criar tag» e escolha «Criar tag «…»».
3. Toque em «Concluir».

A escolha não se perde mesmo que deslize a folha para baixo. Para que servem as tags e onde ver os totais depois — no artigo [«Transações»](#transactions).

### Sem tempo? — «Para a caixa de entrada» {#entry-inbox}

Na caixa às vezes só tem um segundo: lembra-se do valor, mas não há tempo para escolher categoria e conta.

Ligue «Definições → Dados → Caixa de entrada». Agora, se o formulário tem um valor, mas não tem categoria ou conta, o botão diz **«Para a caixa de entrada»** em vez de «Guardar», e no teclado do valor guarda logo. A transação fica registada, mas com a marca «Organizar».

Enquanto houver transações destas, há uma faixa por cima da navegação e um aviso no «Resumo». Toque nela — o formulário abre-as uma a uma, pela ordem em que as registou: prático para recordar o dia loja a loja. **Logo após a instalação:** desligado.

É especialmente prático com a voz: diga a compra na caixa — e em casa organize o que a voz não reconheceu. O cenário — no artigo [«Introdução por voz»](#voice-inbox).

### O que pode fazer no formulário {#entry-gestures}

Uma pequena cábula de gestos e botões.

| Faça isto | O que acontece |
|---|---|
| Toque no valor | Voltar a ter o teclado do valor. |
| O botão Voltar do telemóvel | Primeiro esconde o teclado, à segunda sai (pergunta se há algo por guardar). |
| Mantenha o dedo no ⌫ | Apagar o valor inteiro. |
| A cruz no campo «Beneficiário» | Tirar o beneficiário da transação. |
| Toque no cabeçalho «Adicional» | Recolher ou abrir os campos pouco usados. |
| A cruz numa miniatura de foto | Tirar a imagem ou o PDF da transação. |

## Introdução por voz {#voice}

Diga a compra numa frase — «Continente 70 Supermercado» — e a aplicação abre o formulário já preenchido. Verifique e guarde.

*o botão verde do microfone por cima de «+ Transação»*

### Para quê {#voice-why}

Na caixa tem as mãos ocupadas, mas é preciso registar a compra logo, enquanto se lembra. Introduzir o valor, escolher o beneficiário, a categoria e a conta — são cinco toques. Por voz — uma frase.

A voz não regista nada sozinha. Preenche o formulário de transação, e quem guarda é o utilizador — assim um erro de reconhecimento nunca entra no orçamento sem que dê por isso.

O botão do microfone é verde, por cima de «+ Transação» no «Resumo», nas «Transações» e nos ecrãs de conta e de categoria.

### A primeira vez {#voice-first}

[Folha de introdução por voz: microfone, Diga o valor e os seus próprios nomes: categoria, loja, conta; Por exemplo: «70 Supermercado»; O que for reconhecido vai para o formulário — lá pode verificar e corrigir; botões Cancelar e Falar]

1. **O que dizer** — o valor e os seus próprios nomes: categoria, loja, conta.

2. **Exemplo** — uma frase do seu próprio orçamento: a sua categoria mais frequente e um valor típico. Repita-a — e vai funcionar.

3. **Para onde vai** — para o formulário de transação, onde pode verificar e corrigir tudo.

4. **«Falar»** — liga o microfone. Da primeira vez, a folha não o liga sozinha: leia primeiro o que dizer. A partir daí, o microfone liga-se assim que abre a folha.

A aplicação pede autorização para o microfone — autorize. Fale, depois toque em «Pronto» ou simplesmente pare de falar: a frase reconhecida aparece na folha, e o formulário abre.

### O que dizer {#voice-say}

Comece pelo valor e pela categoria, depois acrescente o resto. O exemplo por baixo do microfone cresce consigo: duas frases certas seguidas — e mostra o passo seguinte.

Os passos no orçamento demo:

| Frase | O que fica preenchido |
|---|---|
| «70 Supermercado» | Valor e categoria. |
| «Continente 70 Supermercado» | Mais o beneficiário. |
| «Continente 70 Supermercado nota Comida» | Mais uma nota: tudo depois da palavra «nota». |
| «Continente 70 Supermercado da conta Conta à ordem» | Mais a conta de onde pagou. |
| «transferência 100 da conta Conta à ordem para conta Visa» | Uma transferência entre contas. |
| «receita 1400 Entidade patronal para conta Conta à ordem» | Uma receita e a conta para onde foi o dinheiro. |

[Formulário Adicionar transação depois da frase «Continente 70 Supermercado da conta Conta à ordem»: Saídas, 70,00, Beneficiário Continente, Categoria Supermercado, Conta Conta à ordem, Data]

A captura mostra o formulário depois da frase «Continente 70 Supermercado da conta Conta à ordem». A data é hoje. Verifique e toque em «Concluir», depois em «Guardar».

##### Palavras que a aplicação percebe

- **«transferência»** — uma transferência entre contas; **«receita»** — entrou dinheiro. Sem estas palavras, a frase é uma despesa.
- **«da conta …»** ou **«do …»**, **«da …»** — de que conta sai; **«para conta …»** ou **«para …»** — para que conta vai. Pode omitir a palavra «conta».
- **«nota»** — tudo depois desta palavra passa a ser a nota. Por isso diga-a no fim.
- **«categoria …»** — se o nome de uma categoria soa como o nome de uma loja e a aplicação os confunde.

##### Valor

Em algarismos ou por extenso — o reconhecimento transforma «duzentos e cinquenta» em 250 sozinho. Os cêntimos vêm depois da vírgula: «25,50». Se a frase tiver vários números, o valor é o primeiro.

### Como se reconhecem os nomes {#voice-names}

A aplicação procura na frase os **seus** nomes: beneficiários, categorias e contas deste orçamento. Não cria novos — diga uma loja que ainda não está no orçamento, e o campo «Beneficiário» fica vazio.

##### O beneficiário traz a categoria consigo

Assim que o beneficiário é reconhecido, a categoria e a nota preenchem-se a partir das transações anteriores dele, como se o tivesse escolhido no formulário à mão. Dizer «Continente 70» chega — a categoria «Supermercado» preenche-se sozinha.

##### Quantas palavras são precisas

Para um beneficiário, basta uma palavra do nome. Uma categoria de várias palavras precisa de pelo menos duas delas — para que «Saúde e remédios» não se confunda com «Saúde». Um nome dito por inteiro é sempre reconhecido.

*Porque é que o exemplo vem do seu orçamento:*
Um exemplo com nomes inventados («Millennium 100 supermercado Leroy Merlin») ensinaria uma frase que não existe no seu orçamento: repita-a, e teria um formulário vazio. Por isso o exemplo é sempre montado com os seus próprios dados — a sua compra mais frequente, as suas contas, uma nota recente.

### Não apanhou tudo — «Para a caixa de entrada» {#voice-inbox}

A voz reconheceu o valor, mas não a categoria ou a loja. Não há tempo para resolver na caixa, e não quer perder a compra. É para isso que existe a «Caixa de entrada».

##### Registe já, organize em casa

1. Ligue uma vez «Definições → Dados → Caixa de entrada».
2. Na caixa, diga a frase como de costume. No fim, acrescente «nota» e duas palavras sobre a compra — por exemplo, «nota farmácia perto de casa». A nota fica guardada mesmo que a loja e a categoria não tenham sido reconhecidas.
3. Falta alguma coisa no formulário? Em vez de «Guardar» aparece um botão «Para a caixa de entrada», e no teclado do valor também. Toque nele — a compra fica registada e com a marca «Organizar».
4. Em casa, toque na faixa por cima da navegação ou no aviso do «Resumo». O formulário abre essas compras uma a uma, pela ordem em que as registou: «Caixa de entrada · 1 de 3». Escolha a categoria e a conta — «Guardar».

O valor, a data e tudo o que a voz conseguiu reconhecer já estão na transação — com eles e com a nota, é fácil lembrar-se da compra. Se a conta foi reconhecida, a compra já diminuiu o saldo dela, e no «Plano» fica na linha «Sem categoria» até a organizar. Se a conta não foi reconhecida, a compra espera fora do orçamento e entra nele quando escolher a conta.

*O que não vai para a «Caixa de entrada»:*
Uma transferência entre contas e um valor dividido: precisam das duas contas ou de todas as partes de uma vez. Sem valor também não vai: se a voz não apanhou o número, introduza-o no formulário. Mais sobre a «Caixa de entrada» no artigo [«Formulário de transação»](#entry-inbox).

### Se não percebeu {#voice-fail}

| Na folha | O que aconteceu |
|---|---|
| «Não entendi nada — tente de novo» | O telemóvel não reconheceu nenhuma palavra. Fale mais perto do microfone e toque em «Tentar de novo». |
| «Não reconheci nem o valor nem nenhum dos seus nomes» | A frase foi reconhecida, mas não tem número nem nenhum nome conhecido. O formulário não abre — veja o exemplo e toque em «Tentar de novo». |
| «Sem acesso ao microfone, ou o reconhecimento não está disponível…» | A aplicação não recebeu o microfone, ou o telemóvel não tem reconhecimento de fala. Verifique as autorizações da aplicação nas definições do telemóvel. |

Se não foi reconhecido nada, o exemplo na folha fica um passo mais simples. Se um nome foi reconhecido, mas o valor não, o exemplo fica igual: o mais provável é que a frase tenha sido cortada.

### Idioma {#voice-language}

A aplicação ouve no idioma da interface — o escolhido em «Definições», secção «Aparência» → «Idioma e formatos» → «Idioma da interface». Mais no artigo [«Definições»](#settings-formats). Por baixo do exemplo está escrito em que idioma está a ouvir.

##### «O idioma da interface não está instalado para o reconhecimento de voz — estou a ouvir em …»

O telemóvel não tem um modelo de reconhecimento para este idioma, por isso a aplicação ouve no idioma do telemóvel. Adicione o idioma nas definições de reconhecimento de fala do telemóvel — e a linha desaparece.

##### As palavras «transferência», «receita», «nota» — no seu idioma

Cada idioma tem as suas palavras-chave: em ucraniano «переказ», «дохід», «нотатка», em russo «перевод», «доход», «заметка». O exemplo por baixo do microfone mostra sempre as palavras do seu idioma.

## Leitor de recibos {#receipt}

Aponte a câmara ao código QR do recibo — a aplicação preenche o valor e a data, e reconhece uma loja já vista pelo NIF do vendedor, preenchendo o beneficiário, a categoria e a conta.

*o botão roxo com código QR por cima de «+ Transação»*

### Para quê {#receipt-why}

Os talões acumulam-se no bolso, e à noite é preciso lembrar-se de onde, quanto e quando. O leitor tira do recibo o valor e a data — sem gralhas nos números e com o dia real da compra, mesmo que registe o recibo no dia seguinte. O recibo fica guardado na transação como recibo eletrónico: o de papel pode ir para o lixo.

### Onde está o botão {#receipt-where}

O botão roxo com um código QR está por cima de «+ Transação» no «Resumo», nas «Transações» e nos ecrãs de conta e de categoria.

Só aparece se a aplicação conhecer os recibos do seu país:

| País | Quando aparece o botão |
|---|---|
| Ucrânia | Hryvnia no orçamento ou nalguma conta, ou o telemóvel foi comprado na Ucrânia (região UA). |
| Cazaquistão | Tenge no orçamento ou numa conta, ou a região do telemóvel é KZ. |
| Rússia | Rublo no orçamento ou numa conta. |
| Portugal | A região do telemóvel é PT, ou o idioma da aplicação é o português e há euros no orçamento ou numa conta. |

*Porquê pela moeda e não pelo idioma:*
O idioma não diz nada sobre o país onde faz compras: escreve-se em russo tanto na Ucrânia como no Cazaquistão, e os recibos lá são diferentes. Já a moeda foi o utilizador que a escolheu — e diz onde paga.

Em Portugal a aplicação lê o código QR das faturas (o código ATCUD): nele estão o valor, a data e o NIF de quem emitiu. Noutros países não há botão. Mas pode guardar o código de qualquer recibo numa transação — com o ícone do leitor no campo «Recibo eletrónico (URL ou código)» do formulário ([mais abaixo](#receipt-form)). E para ensinar a aplicação a ler os recibos do seu país, envie-nos alguns — [como](#receipt-your-country).

### Como digitalizar {#receipt-how}

[Janela A aplicação aprende com os seus recibos: o código QR só tem a data, o valor e o número da caixa; botões Cancelar e Digitalizar]

1. Toque no botão roxo.
2. Nas três primeiras vezes, a aplicação explica como aprende com os recibos (captura). Toque em «Digitalizar». Depois de reconhecer uma loja, deixa de explicar.
3. A câmara abre: «Aponte a câmara para o código QR do recibo». O código lê-se sozinho, não precisa de tocar em nada.
4. O formulário de transação abre com o valor, a data e o recibo. Verifique e toque em «Guardar».

O recibo é uma foto ou um PDF no telemóvel? Por baixo da câmara — «Escolher da galeria» e «Escolher PDF».

### O que vem do recibo {#receipt-what}

O código QR de um recibo não tem o nome da loja nem a lista de compras — só o valor, a data, o número do documento e o identificador de quem o emitiu. Por isso:

| Campo do formulário | De onde vem |
|---|---|
| Valor | Do recibo. |
| Data | Do recibo: o dia da compra, não hoje. |
| «Recibo eletrónico (URL ou código)» | O código do próprio recibo. Com ele pode abrir e copiar o recibo. |
| Beneficiário | Pelo NIF do vendedor que vem no código: quem escolheu para os recibos anteriores desta loja. |
| Categoria e nota | Pelo beneficiário — como se o tivesse escolhido no formulário à mão. |
| Conta | Aquela com que pagou nesta loja da última vez. |

*Um NIF quer dizer a mesma loja:*
Nos recibos portugueses a loja reconhece-se pelo NIF de quem emitiu a fatura: em qualquer caixa do mesmo supermercado o NIF é o mesmo. Noutros países a aplicação usa o número da caixa registadora — e com os recibos ucranianos reconhece também uma caixa vizinha da mesma loja. Se caixas vizinhas levam a beneficiários diferentes, a aplicação fica calada: mais vale escolher a loja por si do que receber a errada.

### Uma loja nova {#receipt-new-shop}

No primeiro recibo de uma loja nova, a aplicação preenche só o valor e a data — e abre logo a escolha do beneficiário.

[Folha de beneficiários sobre o formulário: pesquisa, transferências, beneficiários]

[O formulário depois da escolha: 713,00, Beneficiário Continente, Categoria Supermercado, Conta vazia, Data 9 de novembro, Recibo eletrónico com uma ligação para o recibo]

1. Encontre a loja na lista ou escreva um nome novo.
2. A categoria preenche-se sozinha se já comprou a este beneficiário antes.
3. Escolha a conta: ainda não pagou nesta loja, por isso a aplicação não a conhece.
4. «Guardar».

O próximo recibo desta loja chega com o beneficiário, a categoria e a conta já preenchidos.

### Repetições e erros {#receipt-problems}

| Mensagem | O que aconteceu |
|---|---|
| «Este recibo já foi registado» | Este mesmo recibo já está numa transação — a data e o valor estão na janela. «Editar» abre essa transação, «Adicionar mesmo assim» — uma nova, «Cancelar» — nada. |
| «Este não é um recibo que a aplicação conheça» | O código QR não é de um recibo, ou é do recibo de outro país. O formulário não abre. |
| «Este recibo não tem valor» | O código foi lido, mas não tem valor. Registe a compra com «+ Transação». |

Alguns serviços de faturação imprimem no recibo uma ligação para o seu próprio site, sem valor nem data — a aplicação não consegue ler um recibo assim.

### Um recibo de um ficheiro: «Partilhar» {#receipt-share}

O recibo chegou por e-mail, WhatsApp ou na aplicação do banco como imagem ou PDF? Toque em «Partilhar» lá e escolha «O meu orçamento».

- É encontrado um recibo conhecido — o formulário abre como depois da câmara, e a aplicação pergunta «Anexar o ficheiro à transação?». O recibo eletrónico é adicionado de qualquer forma; anexe o ficheiro se quiser ver o próprio recibo.
- O ficheiro não tem recibo, ou é um desconhecido — a aplicação diz porquê e propõe «Preencher manualmente»: o formulário abre com o ficheiro já anexado.

### Um recibo no formulário {#receipt-form}

No formulário de transação, em «Adicional», há um campo «Recibo eletrónico (URL ou código)» com um ícone de leitor. Funciona com **qualquer** código QR, em qualquer país: põe no campo o que estiver escrito no código.

Se o recibo é conhecido, a aplicação confere-o com o formulário: preenche o valor se ainda não houver, e se os valores forem diferentes, mostra a linha «O recibo tem outro valor: …» e propõe «Corrigir». Um recibo não muda a data num formulário aberto. Mais no artigo [«Formulário de transação»](#entry).

Um recibo guardado aparece como ícone na linha da transação e, no cartão da transação, como os botões «Copiar» e «Abrir». Mais no artigo [«Transações»](#transactions).

### Ensine a aplicação a ler os recibos do seu país {#receipt-your-country}

A aplicação lê um recibo sem internet: tudo o que precisa — o valor e a data — tem de estar no próprio código QR. Em muitos países é assim: o código QR de um recibo fiscal tem o valor, a data e o número da caixa. Se no seu país também é assim, podemos adicionar os recibos dele.

##### Envie 5–10 recibos

1. Junte recibos de lojas diferentes: uma cadeia de supermercados, uma farmácia, uma bomba de gasolina, uma loja pequena. Recibos eletrónicos — um PDF ou uma imagem de um e-mail — também servem.
2. Fotografe cada um de forma que o código QR e o total se vejam bem.
3. Envie-os para a «Conversa no Telegram» ou por e-mail com «Sugerir uma melhoria» — ambos em «Definições», secção «Ajuda e contacto». Indique o seu país.

São precisos vários recibos para ter a certeza de que o código é montado da mesma forma em caixas e cadeias diferentes. Um só recibo não o diz.

*O que tapar na foto:*
Precisamos só do código QR, do valor e da data. Os últimos dígitos do cartão, o nome do operador de caixa, o cartão de cliente e tudo o resto que for pessoal podem ser tapados com o dedo ou riscados — não afeta o reconhecimento.

*Quando não vai funcionar:*
Se o código QR do recibo tem só uma ligação para um site — sem valor e sem data —, os dados estão nesse site. A aplicação não vai lá: promete funcionar sem servidor e sem registo. Esses recibos ficam sem o leitor, mas pode sempre guardar o código deles no campo «Recibo eletrónico (URL ou código)».

## Widgets e atalhos {#widgets}

Botões para registar uma compra diretamente no ecrã principal do telemóvel: voz, nova transação, leitor de recibos. Um toque e está no formulário — sem abrir a aplicação nem procurar o «+».

*ecrã principal do telemóvel — «Widgets» → «O meu orçamento»; atalhos — toque longo no ícone da aplicação*

### Para quê {#widgets-why}

As compras registam-se enquanto se lembra delas: na caixa, à saída da loja. Cada toque a mais é uma desculpa para deixar «para a noite» e esquecer. Um widget no ecrã principal abre logo o que precisa: a voz, o formulário ou a câmara para um recibo.

### Cinco widgets {#widgets-widgets}

| Widget | Tamanho | O que faz |
|---|---|---|
| «Voz» | 1 célula | Um botão verde com microfone — [introdução por voz](#voice). |
| «Transação» | 1 célula | Um botão com «+» na cor de «+ Transação» — uma transação nova. |
| «Recibo» | 1 célula | Um botão roxo com código QR — [o leitor de recibos](#receipt). |
| «Botões em coluna» | 1 × 2 células | Os três botões uns por cima dos outros. |
| «Botões em linha» | 2 × 1 células | Os três botões lado a lado. |

As cores são as mesmas dos botões da aplicação: verde para a voz, roxo para os recibos.

##### O botão do recibo não é para todos

O widget separado «Recibo» é para todos. Mas nos widgets de três botões, o botão do recibo só aparece se a aplicação conhecer os recibos do seu país — pela mesma regra do botão na aplicação. A regra está no artigo [«Leitor de recibos»](#receipt-where). Caso contrário, o widget tem dois botões.

### Como adicionar um widget {#widgets-add}

1. Mantenha o dedo num sítio vazio do ecrã principal.
2. Escolha «Widgets».
3. Encontre «O meu orçamento» e o widget que quer.
4. Arraste-o para o ecrã principal.

Os nomes dos menus dependem do telemóvel: nalguns, «Widgets» está no menu do ecrã principal, noutros numa lista à parte. Os widgets «Voz», «Transação» e «Recibo» ocupam uma célula, como o ícone de uma aplicação.

### Atalhos {#widgets-shortcuts}

Um atalho é a mesma ação que um ícone normal: quem o desenha é o launcher, como os ícones das aplicações, e fica alinhado com eles em qualquer telemóvel.

1. Mantenha o dedo no ícone «O meu orçamento».
2. Aparecem «Voz» e «Transação» — toque num deles para o abrir logo.
3. Ou arraste um atalho para o ecrã principal — fica lá como ícone.

Não há atalho para recibos: um atalho não se pode esconder onde a aplicação não conhece os recibos do país. Para recibos, use o widget «Recibo».

### O que abre {#widgets-open}

| Toca em | O que acontece |
|---|---|
| «Voz» | A aplicação abre no «Resumo» com a folha de introdução por voz por cima. |
| «Transação» | O «Resumo», com o formulário de nova transação por cima. |
| «Recibo» | O «Resumo», com a câmara do leitor por cima. |

Depois de guardar, fica no «Resumo» e vê que a compra entrou no orçamento.

##### Se há um PIN definido

A aplicação pede primeiro o PIN ou a impressão digital, e logo a seguir abre o que tocou. Não precisa de tocar outra vez.

## Beneficiários e tags {#payees-tags}

A quem paga e para quê — dois recortes do seu feed de transações, ao lado das categorias.

*Um ícone no cabeçalho das «Transações»*

### Para que serve este ecrã {#payees-tags-why}

As categorias respondem a «para onde foi o dinheiro». Aqui estão outros dois recortes do mesmo feed de transações: **a quem** paga e **para quê**. Quanto foi para o «Continente» este ano, quanto custou a casa de campo, quem deve a quem numa compra partilhada.

##### Como lá chegar

O ícone «Beneficiários e tags» no cabeçalho das «Transações». Ou «Definições → Dados → Beneficiários» e «Tags». Ou «Todas as tags ›» no bloco «Minhas tags» do «Resumo».

##### Não é preciso criá-los antes

Os beneficiários e as tags aparecem sozinhos da primeira vez que os escreve no formulário de transação. Aqui vê-os, muda-lhes o nome e arruma-os.

##### Dois separadores

«Beneficiários» e «Tags». O ecrã lembra-se do separador em que saiu.

### O separador «Beneficiários» {#payees-tags-payees}

Todos a quem pagou ou de quem recebeu dinheiro. Toque em qualquer captura para a abrir em ecrã inteiro.

[Separador Beneficiários: pesquisa, Total do ano atual, Continente −1111,89, Netflix, Entidade patronal +16 800, botão Novo beneficiário]

1. **Separadores** — «Beneficiários» e «Tags».

2. **O menu «⋮»** — a ordem da lista de beneficiários e o período do total. Explicado à direita da segunda captura.

3. **Pesquisa** — escreva duas letras do nome.

4. **Beneficiário** — uma letra, o nome, à direita o total do período, por baixo do nome quantas transações houve no mesmo período e quando foi a última.

   *Como funciona:*
   O total é «líquido» e com sinal: numa loja, um menos descontados os reembolsos; numa entidade patronal, um mais. Na captura, o «Continente» custou 1111,89 € desde o início do ano, e a «Entidade patronal» trouxe 16 800 €. Estes números não têm cor de propósito: o sinal mostra o sentido.

   Toque numa linha — abre o ecrã do beneficiário ([mais abaixo](#payees-tags-payee)). Deslize para a esquerda — «Editar»: mudar o nome. Deslize para a direita — «Eliminar»: a aplicação volta a perguntar e diz quantas transações o beneficiário tem. As transações em si não desaparecem; só ficam sem beneficiário.

5. **«Total do ano atual»** — o rótulo por cima da lista: a que período se referem os números à direita. Escolha o período no menu «⋮».

6. **«+ Novo beneficiário»** — adicionar um beneficiário à mão. Normalmente não é preciso: o formulário de transação cria-o sozinho.

#### A ordem da lista {#payees-tags-sort}

[Menu de ordenação: Mais utilizados, Recentes, Ordem alfabética, Por montante, Período]

(A)
#### Mais utilizados

Os com mais transações no topo. É a definição logo após a instalação.

(B)
#### Recentes

Os com a transação mais recente no topo.

(C)
#### Ordem alfabética

Prático quando tem centenas de beneficiários.

(D)
#### Por montante

Os maiores no topo: tanto a quem mais paga como de quem mais recebe. O sinal não importa, só o tamanho.

(E)
#### Período

«Total do ano atual» (o predefinido logo após a instalação), «Total em 12 meses» ou «Total de todo o período». O período define o valor de cada linha, as «Transações: N» e as ordens «Mais utilizados» e «Por montante»; a data da última transação é sempre de todo o período. O ano começa a 1 de janeiro: a 1 de janeiro o total começa do zero.

### O ecrã do beneficiário {#payees-tags-payee}

Tudo sobre um beneficiário: quanto, em quê e quando. O «⋮» muda o nome, e o «+» em baixo começa uma transação nova com este beneficiário já preenchido.

[Ecrã do beneficiário Netflix: período novembro de 2026, Tendências de gastos, Por categoria, transações por dia]

(F)
#### Período

Começa no mês atual. As setas passam os meses, e um toque no nome abre a folha «Período»: a mesma dos «Relatórios».

*Como funciona:*
Quer ver tudo o que foi para um beneficiário num ano? Escolha um ano ou um intervalo seu, e o ecrã mostra tudo: o total, as categorias e todas as transações.

(G)
#### «Tendências de gastos»

Quanto se gastou com o beneficiário no período e quanto em média por mês.

*Como funciona:*
As despesas contam-se descontados os reembolsos. Se o beneficiário sobretudo lhe paga (uma entidade patronal, um inquilino), o bloco chama-se «Tendências de entradas» e conta as receitas.

(H)
#### «Por categoria»

Para que foi o dinheiro dado a este beneficiário. Aparece quando há duas categorias ou mais.

*Como funciona:*
Na captura, a Netflix tem duas categorias: a internet de casa em «Telefone e internet» e a subscrição em «Assinaturas».

(I)
#### Transações

Todas as transações com este beneficiário no período, por dia.

### O separador «Tags» {#payees-tags-tags}

Etiquetas por cima das categorias: «#casa de campo», «#férias», «#a meias». Como pôr uma tag numa transação — no artigo [«Transações»](#transactions).

[Separador Tags: a meias — cobrar 43, arrecadado 43 de 86; casa de campo — 118,26, duas transações]

7. **Tag** — o nome, o total em todo o período da tag, o próprio período e o número de transações. Numa tag com «Acerto de contas», o lado direito mostra quanto cobrar ou devolver.

   *Como funciona:*
   A ordem é: primeiro as tags com acerto em aberto, depois pela transação mais recente, e as tags sem transações no fim. As tags ocultas ficam reunidas num bloco à parte, «Tags ocultas», em baixo.

   Toque — o ecrã da tag ([mais abaixo](#payees-tags-tag)). Mantenha o dedo — um menu: «Renomear», «Acerto de contas», «Ocultar da seleção». Deslize para a esquerda para mudar o nome, para a direita para eliminar.

8. **«+ Nova tag»** — adicionar uma tag à mão. Normalmente as tags criam-se diretamente no formulário de transação.

### O ecrã da tag {#payees-tags-tag}

Tudo o que foi registado com uma tag — quanto, em quê e quando. É também aqui que se configura o «Acerto de contas».

[Ecrã da tag a meias: 10 de novembro, 2 transações, cobrar 43, 50% quitado, Gasto 86, Recebido 43, Por categoria, transações]

(J)
#### Período e transações

O primeiro e o último dia com transações com a tag, e quantas são. Os totais do ecrã cobrem todo o período da tag.

(K)
#### Acerto de contas

Se o «Acerto de contas» está ligado na tag: quanto falta para ficar quite, e uma barra «N% quitado».

*Como funciona:*
O acerto de contas responde a «quem deve a quem» numa despesa partilhada. A aplicação calcula: gasto menos recebido em todo o período da tag.

- **«Cobrar»** — gastou mais do que arrecadou. Na captura: uma compra de 86 € na «Worten» foi dividida com o André, ele devolveu 43 € — faltam 43 €, 50% quitado.
- **«Devolver»** — arrecadou mais do que gastou: por exemplo, todos juntaram dinheiro para uma prenda, e sobrou troco.
- **«Quitado»** a verde — está tudo certo.

Registe o dinheiro de um amigo como reembolso para a categoria da compra, com a mesma tag — como no artigo [«Formulário de transação»](#entry), secção «Reembolso por um artigo devolvido». O «Acerto de contas» não mexe no orçamento nem nos relatórios: é uma ajuda para si.

(L)
#### «Gasto» e «Recebido»

Quanto saiu e entrou com a tag. As transferências entre as suas próprias contas não entram.

(M)
#### «Por categoria»

Para que foi o dinheiro com esta tag. Uma tag numa parte de um valor dividido conta só essa parte.

(N)
#### Transações

Todas as transações com a tag, por dia.

#### O menu «⋮» da tag {#payees-tags-tag-menu}

[Menu da tag: Renomear, Mostrar em Minhas tags, Acerto de contas marcado, Ocultar da seleção, Dicas, Eliminar]

(O)
#### Renomear

O nome novo aparece em todas as transações com a tag. A aplicação não aceita um nome que já existe.

(P)
#### Mostrar em «Minhas tags»

Adicionar a tag ao bloco «Minhas tags» do «Resumo». São quatro lugares; quando estão cheios, o item fica cinzento e diz porquê: «Minhas tags já tem 4».

(Q)
#### Acerto de contas

Ligar ou desligar o cálculo de «quem deve a quem» para esta tag.

(R)
#### Ocultar da seleção

A tag desaparece da folha de escolha do formulário, mas fica nas transações. Prático para umas férias que já acabaram. Numa tag oculta, este lugar diz «Voltar à seleção».

(S)
#### Dicas

As dicas deste ecrã — e uma ligação para aqui.

(T)
#### Eliminar

A tag é retirada de todas as transações; as transações em si ficam. A aplicação volta a perguntar.

### O que pode fazer com uma linha {#payees-tags-gestures}

Não há botões nas linhas: toque, mantenha o dedo ou deslize com o dedo.

| Faça isto | O que acontece |
|---|---|
| Toque num beneficiário | O ecrã do beneficiário. |
| Deslize um beneficiário para a esquerda / direita | «Editar» (mudar o nome) / «Eliminar». |
| Toque numa tag | O ecrã da tag. |
| Mantenha o dedo numa tag | Um menu: «Renomear», «Acerto de contas», «Ocultar da seleção». |
| Deslize uma tag para a esquerda / direita | «Editar» (mudar o nome) / «Eliminar». |

## Pagamentos programados {#scheduled}

Renda, subscrições, o seu ordenado — tudo o que se repete. A aplicação lembra-se dos vencimentos, avisa-o deles e preenche sozinha o valor e a categoria. O dinheiro no orçamento só se move quando confirma o pagamento.

*«Definições» → «Planeamento» → «Pagamentos programados»*

### Para que serve este ecrã {#scheduled-why}

Metade das despesas de um mês conhece-se de antemão: a renda no dia 1, a internet no dia 5, uma subscrição no dia 11, o ordenado duas vezes por mês. Um pagamento programado é uma transação assim, escrita uma vez, com antecedência.

##### Não se esquecer

A aplicação lembra o vencimento com uma notificação — no dia do pagamento ou antes, como configurar.

##### Não escrever à mão

Chegou o vencimento — toque em «Confirmar», e a transação regista-se sozinha: valor, beneficiário, categoria, conta.

##### Ver o que vem aí

Os próximos pagamentos estão no «Resumo», no bloco «O que vem» e no «Calendário». Vê a que é que o dinheiro já está prometido.

Um pagamento programado ainda não é uma despesa. Até o confirmar, os saldos das contas e dos envelopes não mudam: só lembra e sugere.

### O que está onde no ecrã {#scheduled-screen}

Todos os pagamentos programados numa lista, o vencimento mais próximo no topo. Toque em qualquer captura para a abrir em ecrã inteiro.

[Ecrã Pagamentos programados: Entidade patronal +1400 duas vezes por mês, Senhorio −1200 mensalmente, EDP, Spotify, Netflix, um travessão −800 anualmente com um marcador vermelho e a nota Seguro do carro, botão Pagamento]

1. **Linha** — um pagamento que se repete. Está montada como a linha de uma transação: quem e quanto, categoria e conta, como se repete e quando volta a vencer.

   *Como funciona:*
   A primeira linha é o beneficiário e o valor com sinal: «−» quer dizer que o dinheiro vai sair, «+» que vai entrar. A segunda é a categoria e a conta. A terceira é a frequência e o vencimento mais próximo.

   Um pagamento sem beneficiário mostra um travessão «———» em vez do nome, e a nota fica numa quarta linha — na captura, «Seguro do carro».

   A lista ordena-se pelo vencimento mais próximo. Os pagamentos cujo vencimento já passou também estão aqui, no topo: esperam confirmação — mais sobre isso [mais abaixo](#scheduled-due).

2. **Frequência e data** — à esquerda como se repete, à direita o próximo vencimento. Depois de cada vencimento registado ou saltado, a data passa sozinha para o seguinte.

3. **Marcador** — o mesmo sinal colorido de uma transação. Quando o pagamento é registado, o marcador passa para a transação.

4. **«+ Pagamento»** — um pagamento programado novo. Os passos estão [mais abaixo](#scheduled-new).

Enquanto não há pagamentos programados, o ecrã fica vazio: «Sem pagamentos programados» e a dica «Renda, subscrições, ordenado — adicione pelo botão «Pagamento»».

### Um pagamento programado novo {#scheduled-new}

O formulário é o mesmo de uma transação normal, só que com um campo «Repetir». Tocar numa linha da lista também o abre: aí chama-se «Pagamento programado» e edita o que já existe.

[Formulário do pagamento programado: Saídas, 1200, Beneficiário Senhorio, Categoria Renda, Conta Conta à ordem, Data, Repetir Mensalmente, Nota, Adicional, Guardar]

[Folha Repetir: Uma vez, Diariamente, Semanalmente, A cada 2 semanas, Duas vezes por mês, A cada 4 semanas, Mensalmente, A cada 2 meses, A cada 3 meses, A cada 4 meses, Duas vezes por ano, Anualmente]

5. **Valor** — introduza-o no teclado da aplicação e toque em «Concluir». Por cima do valor — «− Saídas» para um pagamento e «+ Entradas» para um ordenado.

6. **Beneficiário** — a quem paga ou quem lhe paga.

7. **Categoria** — de que envelope vai sair o dinheiro. Para um ordenado — a receita do mês.

8. **Conta** — de que conta é debitado ou em que conta chega.

9. **Data** — o vencimento mais próximo. A aplicação conta os seguintes a partir dele.

10. **«Repetir»** — com que frequência: doze opções, a folha está na segunda captura.

    *Como funciona:*
    - **«Uma vez»** — um pagamento sem repetições. Depois de registado ou saltado, desaparece da lista.
    - **«Duas vezes por mês»** — no dia do vencimento e 15 dias depois: o dia 3 e o dia 18. Se o segundo dia não existir num mês, o vencimento cai no último dia do mês.
    - **«A cada 4 semanas»** — não é o mesmo que «Mensalmente»: são 13 vencimentos por ano, não 12, e a data muda de cada vez.
    - **«Mensalmente»** e com menos frequência — no mesmo dia do mês. Se esse dia não existir num mês, o vencimento cai no último dia do mês e volta no seguinte: um pagamento no dia 31 chega a 28 de fevereiro, 31 de março, 30 de abril.

11. **Tags** — as mesmas etiquetas das transações. Na captura, a renda tem a tag «casa».

12. **«Adicional»** — recibo eletrónico, fotos e PDFs, «Contabilizado» e o marcador. Na captura, um PDF do contrato de arrendamento está anexado à renda.

    *Como funciona:*
    Tudo o que preencher aqui, juntamente com as tags, vai para cada transação registada a partir deste pagamento. As tags fazem sentido aqui: cada renda cai sozinha na tag «casa». Já um anexo normalmente é preciso uma só vez: basta anexar o contrato a uma transação — quando registar o primeiro pagamento, toque em «Editar» e adicione o PDF no formulário. Anexado aqui, ficaria como ícone ao lado de cada pagamento durante anos. Preencha aqui o recibo, as fotos e os PDF só se cada transação precisar mesmo do documento.

13. **«Guardar»** — o pagamento aparece na lista. Se os lembretes estiverem ligados, a aplicação vai avisá-lo dele.

##### Como criar um pagamento

1. «Definições» → «Planeamento» → «Pagamentos programados».
2. Toque em «+ Pagamento» em baixo à direita. Abre «Novo pagamento programado».
3. Introduza o valor e toque em «Concluir».
4. Escolha o beneficiário, a categoria e a conta.
5. «Data» — o vencimento mais próximo.
6. «Repetir» — com que frequência se repete.
7. Se quiser — as tags e o «Adicional».
8. «Guardar».

##### Uma transferência programada

O pagamento do cartão de crédito, a prestação de um empréstimo, um reforço da poupança — isto é uma transferência entre as suas próprias contas. No campo «Beneficiário», escolha uma conta na secção «Transferências», e o sentido — «Saídas» ou «Entradas», como numa transferência normal.

*Uma transferência quer dizer duas contas:*
- O pagamento aparece nos ecrãs das **duas** contas, no bloco «O que vem»: como menos na conta à ordem, como mais no empréstimo.
- No ecrã de confirmação, no lembrete e no resumo da semana, tem o nome do caminho: «Conta à ordem → Empréstimo».
- «Confirmar» regista a transferência nas duas contas de uma vez, como faz o formulário.
- Contas em moedas diferentes — aparecem «Será creditado» e «Taxa» por baixo do beneficiário: introduza a taxa logo, ao criar. Quando chegar o vencimento, «Confirmar» abre o formulário com esses números — verifique a taxa do dia e guarde.
- Uma transferência para uma conta fora do orçamento (um empréstimo, um depósito) tira dinheiro de um envelope — a aplicação pede uma categoria, como numa transferência normal. Uma transferência entre contas do orçamento (conta à ordem → cartão de crédito) não precisa de categoria.
- No «Calendário» do «Resumo», o pagamento do cartão de crédito não é pintado como despesa: o dinheiro ficou no orçamento. A prestação de um empréstimo fora do orçamento é pintada.

##### O que um pagamento programado não pode ter

Um valor dividido: ao guardar, a aplicação diz «Divisões programadas ainda não têm suporte».

### A partir de uma transação existente {#scheduled-from-txn}

A forma mais rápida de criar um pagamento programado é a partir de uma transação que já registou: o formulário recebe tudo, menos a frequência.

[Folha da transação Continente: beneficiário, categoria, conta, data, recibo, foto; em baixo os botões Repetir, Editar e Criar pagamento programado]

(14)
##### «Criar pagamento programado»

1. Toque numa transação nas «Transações», no ecrã de uma conta ou de uma categoria — abre a folha da transação.
2. Em baixo — «Criar pagamento programado».
3. Abre «Novo pagamento programado» com o mesmo valor, beneficiário, categoria, conta, nota, marcador e tags. O recibo eletrónico, as fotos e PDF e o «Contabilizado» ficam vazios: cada pagamento tem os seus. Precisa de anexar, por exemplo, um contrato? Adicione-o aqui. A folha «Repetir» abre logo por cima — escolha a frequência.
4. A data preenche-se sozinha — o vencimento mais próximo depois dessa transação, mas não antes de hoje: a partir de uma transação no dia 5, um pagamento mensal começa no dia 5 do mês seguinte.
5. «Guardar».

Só uma transação normal tem o botão: um valor dividido e uma transferência não têm.

### Quando vence {#scheduled-due}

Na data do vencimento, o pagamento começa a esperar confirmação. Não se regista sozinho: a renda pode ter sido paga com um dia de atraso, e a conta da luz vem com um valor diferente todos os meses. Quem decide é o utilizador.

[Faixa no Resumo: Pagamentos programados: 2 a aguardar confirmação]
No topo do «Resumo» aparece uma faixa: «Pagamentos programados: 2 a aguardar confirmação». Toque para abrir o ecrã de confirmação.

[Ecrã de confirmação: cartões Entidade patronal +1400 e Senhorio −1200, cada um com uma data de registo e setas, Saltar, Editar, Confirmar]

[O mesmo cartão com a data deslocada um dia: rótulos adiado e reinício]

(A)
##### O cartão do pagamento

Quem, quanto, categoria, conta e frequência. O vencimento mais antigo no topo.

(B)
##### A data de registo

Começa como a data do vencimento. «‹ ›» passam-na um dia para trás ou para a frente, e um toque na data abre um calendário — um mês para cada lado. Depois de mudada, aparecem ao lado «adiado» e «reinício» (segunda captura); «reinício» repõe a data do vencimento.

(C)
##### «Confirmar»

A transação fica registada na data escolhida e aparece nas «Transações» com tudo o que o pagamento tem: tags, recibo, fotos e PDF, a marca «Contabilizado». O cartão desaparece, e o vencimento passa para o seguinte.

*Como funciona:*
O próximo vencimento conta-se a partir da data do VENCIMENTO, não da data do registo: a renda do dia 1 foi paga no dia 3 — o próximo vencimento continua a ser o dia 1. Senão o calendário escorregaria a cada atraso.

(D)
##### «Editar»

Se desta vez o valor é outro. O formulário de transação abre com os campos do pagamento — e com as tags, o recibo, as fotos e os PDF dele: ajuste e guarde — a transação fica registada, e o vencimento é fechado. Fechou o formulário sem guardar? Nada mudou.

(E)
##### «Saltar»

Desta vez não houve pagamento. Não se regista nenhuma transação, e o vencimento passa para o seguinte. Um pagamento «Uma vez» desaparece depois de saltado.

*Se se acumularam vários vencimentos:*
Não abriu a aplicação durante dois meses? Um pagamento mensal tem dois vencimentos para trás. O cartão mostra o mais antigo; confirme-o ou salte-o — aparece o seguinte, até chegar a hoje. Quando já não houver nada para resolver, o ecrã diz «Sem pagamentos para confirmar».

Uma transferência programada regista-se como transferência — nas duas contas de uma vez. Se as contas estiverem em moedas diferentes, «Confirmar» abre o formulário com os campos «Será creditado» e «Taxa» preenchidos na criação — ajuste à taxa do dia e guarde.

### Antes ou depois do vencimento {#scheduled-early-late}

O dinheiro raramente chega no dia exato. O pagamento regista-se com a data em que realmente aconteceu — e o vencimento é fechado: no dia dele não volta a aparecer, nem no ecrã de confirmação nem como lembrete.

##### O ordenado chegou 2 dias antes

O vencimento ainda não chegou, por isso não está no ecrã de confirmação.

1. «Definições» → «Planeamento» → «Pagamentos programados».
2. Deslize a linha «Entidade patronal» para a esquerda — aparece «Lançar». Toque.
3. O formulário de transação abre: valor, beneficiário, categoria, conta, tags — do pagamento, data — hoje. O dinheiro não chegou hoje? Toque no campo «Data» e escolha o dia.
4. «Guardar».

O ordenado fica registado no dia em que chegou. O vencimento é fechado: no dia dele a aplicação não lembra nem pede confirmação. O vencimento seguinte segue o calendário: duas vezes por mês — o seguinte dos dois dias, mensalmente — um mês depois do vencimento, não do dia em que o registou.

##### A renda foi paga com um dia de atraso

O vencimento já passou — o pagamento espera no ecrã de confirmação.

1. Toque na faixa «Pagamentos programados: … a aguardar confirmação» do «Resumo».
2. No cartão do pagamento, toque em «›» — a data de registo passa um dia para a frente. Toque na própria data para abrir um calendário.
3. «Confirmar».

A transação fica registada no dia em que pagou. O vencimento seguinte segue o calendário — o dia 1, não o dia 2.

##### Desta vez o valor é outro

A conta da luz é diferente todos os meses. O vencimento chegou — «Editar» no cartão do ecrã de confirmação; ainda não — «Lançar» na lista. Corrija o valor no formulário e toque em «Guardar»: a transação fica registada com o valor novo, e o pagamento programado mantém o antigo.

### O que pode fazer com uma linha {#scheduled-gestures}

Não há botões na linha. Desliza a linha para o lado com o dedo — até um botão que aparece por baixo.

[Linha EDP deslizada para a esquerda: botão Lançar]

[Linha EDP deslizada para a direita: botão vermelho Eliminar]

| Faça isto | O que acontece |
|---|---|
| Toque na linha | O formulário «Pagamento programado»: mude o valor, a data, a frequência — o que quiser. «Guardar». |
| Deslize para a esquerda | «Lançar» — registar já o vencimento mais próximo: pagou a renda adiantada, o dinheiro chegou antes. Abre um formulário de transação nova com os campos do pagamento e a data de hoje. Depois de guardar, a transação fica registada, este vencimento é fechado, e o seguinte segue o calendário. |
| Deslize para a direita | «Eliminar» — depois da pergunta «Eliminar o pagamento programado?». As transações já registadas a partir deste pagamento ficam. |

### Lembretes {#scheduled-reminders}

A aplicação lembra o vencimento com uma notificação: «Hoje: …», «Amanhã: …» ou «Em 3 dias: …». Quando lembrar — no dia do pagamento, 1, 2 ou 3 dias antes, ou uma semana antes —, a que horas e se esconder os valores no ecrã de bloqueio está em [«Definições» → «Lembretes»](#settings-reminders).

### Onde mais aparecem os pagamentos programados {#scheduled-elsewhere}

**«Resumo»** — o bloco «O que vem»: os próximos pagamentos com as datas, e o «Calendário» no modo «Programados»: os próximos vencimentos, os registados e os não registados. Mais no artigo [«Resumo»](#overview-heatmap).

**Ecrã da conta** — por cima do feed, um cartão «O que vem»: os pagamentos programados desta conta. Tocar numa linha abre «Pagamentos programados».

**«Metas»** — se uma categoria tem um pagamento programado, o cartão da meta sugere «Do pagamento programado: …». Mais no artigo [«Metas»](#goals-new).

**Resumo da semana** — se estiver ligado, inclui os próximos pagamentos programados. Mais em [«Definições» → «Lembretes»](#settings-reminders).

## Nuvem e cópias de segurança {#sync}

Como não perder o seu orçamento e como mantê-lo em vários dispositivos.

*«Definições» → secção «Sincronização»*

### Para que serve tudo isto {#sync-why}

O orçamento vive no seu telemóvel. Esta secção das definições responde a três perguntas.

**«O meu telemóvel caiu ao lago»** — três anos de orçamento não devem ir ao fundo com ele. As [cópias de segurança](#sync-backups) e a nuvem ajudam: um telemóvel novo [carrega o orçamento da nuvem](#sync-restore).

**«Mantemos o orçamento a dois»** — ou é só o utilizador, mas com um telemóvel e um computador. Todos os dispositivos olham para uma nuvem e trocam alterações: isso é a [sincronização](#sync-sync).

**«Ontem estraguei tudo»** — eliminou a conta errada, importou o ficheiro errado. A aplicação faz [cópias segundo um calendário](#sync-backups) sozinha, e pode voltar a elas.

**Por onde começar.** Bastam três passos:

1. [Ligue uma nuvem](#sync-auth) — Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, o seu próprio servidor).
2. [Defina uma palavra-passe](#sync-password) se não quiser que mais ninguém consiga ler os seus dados na nuvem. Anote-a.
3. Está feito. A sincronização e as cópias funcionam sozinhas a partir daí: sempre que abre a aplicação.

### Autorização: ligar uma nuvem {#sync-auth}

É aqui que inicia sessão numa nuvem. São três, e pode ligar uma ou várias. Na captura, o Dropbox já está ligado, enquanto o Google Drive e o WebDAV ainda não: assim vê os dois tipos de bloco.

[Ecrã Autorização: Encriptação da nuvem, Google Drive com o botão Entrar com o Google, Dropbox com uma conta ligada, WebDAV com campos de endereço, utilizador e palavra-passe]

(1)
**Encriptação da nuvem** — o mesmo bloco dos ecrãs «Sincronização» e «Cópias de segurança». A palavra-passe define-se uma vez — explicado [mais abaixo](#sync-password).

(2)
**Google Drive** — «Entrar com o Google» — e escolha uma conta. O orçamento vai para uma pasta «My budget» no seu Google Drive.

*Como funciona:*
Depois de iniciar sessão, uma placa da conta aparece no lugar do botão: nome, e-mail, hora da última sincronização e «Sair». No Google Drive a aplicação só vê o que ela própria criou: os outros ficheiros não lhe estão disponíveis.

(3)
**Dropbox** — «Entrar com o Dropbox» abre a página de início de sessão do Dropbox no navegador. Aí pode entrar de duas formas: com o e-mail e a palavra-passe do Dropbox, ou com o botão «Continuar com o Google». Autorize o acesso — e o navegador leva-o de volta à aplicação. O orçamento vai para uma pasta «My budget».

*Porque é que o e-mail e a palavra-passe do Dropbox são melhores:*
Entrar com o Google prende o Dropbox à conta Google que usou. Um segundo dispositivo, ou uma segunda pessoa com outra conta Google, pode facilmente ir parar a outro Dropbox, que não tem o seu orçamento. O e-mail e a palavra-passe do Dropbox funcionam da mesma forma em qualquer telemóvel ou computador, para qualquer pessoa com quem mantém o orçamento.

*Uma alternativa, se não voltou à aplicação:*
A entrada principal — o regresso a partir do navegador — costuma bastar. Se o navegador nunca o levar de volta à aplicação, abra «Problemas para entrar?» → «Entrar com um código (se não voltou à aplicação)»: o Dropbox mostra um código, cole-o na janela da aplicação.

A captura mostra um Dropbox ligado: uma placa da conta com «Sair» e «Sincronizar». O «Atualizar o token do Dropbox» aí também é uma alternativa: só para quando a entrada deixa de funcionar de repente.

(4)
**WebDAV** — o seu próprio servidor ou uma nuvem que fala WebDAV: Nextcloud, ownCloud, pCloud, Yandex Disk e outras. É preciso um endereço, um utilizador e uma palavra-passe — sem ter de iniciar sessão numa conta pessoal.

*Como funciona:*
Se a nuvem tiver a autenticação de dois fatores ligada, o servidor não aceita a sua palavra-passe normal: crie uma «palavra-passe de aplicação» nas definições da nuvem e introduza essa. Comece o endereço por `https://` — com `http://` o utilizador e a palavra-passe viajam como texto aberto, e a aplicação avisa.

**A regra principal: uma conta de nuvem para todos os dispositivos**

O telemóvel, o tablet e o computador que mantêm um orçamento iniciam sessão na nuvem com **a mesma** conta. Caso contrário, cada dispositivo escreve na sua própria nuvem, e não veem as alterações uns dos outros.

*E se na nossa família cada um tem a sua conta Google?:*
Crie uma **conta Google nova e à parte** para o orçamento e inicie sessão na nuvem da aplicação só com ela, em todos os dispositivos. Não inicie sessão na sua conta pessoal no telemóvel da sua mulher, nem na dela no seu: o telemóvel começa a sincronizar contactos, mensagens e fotos com essa conta, e os dados pessoais de duas pessoas misturam-se. Uma conta à parte para o orçamento só sabe do orçamento.

**Dropbox** — inicie sessão com o **e-mail e a palavra-passe** do Dropbox, não com o botão «Continuar com o Google». Entrar com o Google prende o Dropbox à conta Google que usou — e num dispositivo com outra conta Google é fácil ir parar a outro Dropbox, que não tem o seu orçamento.

**WebDAV** — o mesmo endereço, utilizador e palavra-passe em todos os dispositivos.

### Sincronização {#sync-sync}

A troca de alterações entre este dispositivo e a nuvem, e através da nuvem — com os seus outros dispositivos. Registe uma compra no telemóvel — um minuto depois está no computador.

[Ecrã Sincronização: Encriptação da nuvem, estado Sincronizado (Dropbox), escolha da nuvem Dropbox, interruptores Sincronizar fotos e Cópia de segurança automática na nuvem a partir deste dispositivo, botão Sincronizar]

(1)
**Encriptação da nuvem** — uma palavra-passe em tudo o que vai para a nuvem. Explicado [mais abaixo](#sync-password).

(2)
**Estado** — como terminou a última sincronização: «Sincronizado (Dropbox)» a verde, um erro a vermelho, com um botão «Relatar um erro».

(3)
**Nuvem** — se estiverem ligadas várias nuvens, escolha com qual sincronizar. Sem nuvem — este sítio diz «Nenhuma nuvem ligada» e indica onde ligar uma.

*Como funciona:*
Todos os dispositivos sincronizam através de UMA nuvem. A aplicação também atualiza as outras nuvens ligadas de poucos em poucos dias — caso a principal fique indisponível.

(4)
**Sincronizar fotos** — as fotos e os PDF dos recibos vão para a nuvem, para a pasta do orçamento, e aparecem nos outros dispositivos. **Logo após a instalação:** desligado.

*Como funciona:*
Sem este interruptor, as transações chegam ao segundo dispositivo com a marca de foto, mas a imagem em si não está lá. Cada foto ocupa espaço na nuvem; se só vê os recibos no telemóvel onde os fotografou, não precisa de o ligar. Com uma palavra-passe definida, as fotos sobem encriptadas.

(5)
**Cópia de segurança automática na nuvem a partir deste dispositivo** — cada cópia automática do orçamento vai também para a nuvem. **Logo após a instalação:** ligado.

*Como funciona:*
Se dois dispositivos mantêm o orçamento, ambos fazem cópias na nuvem — e fica com duplicados. Mantenha o interruptor ligado num dispositivo e desligue-o nos outros. Para a cópia na nuvem ter todas as fotos dos recibos, ligue também «Sincronizar fotos»: caso contrário entram na cópia só as fotos tiradas neste dispositivo.

(6)
**Sincronizar** — sincronizar já. Normalmente não precisa de tocar — a aplicação fá-lo sozinha, veja abaixo.

#### Quando a aplicação sincroniza sozinha {#sync-when}

**Sempre que a abre** — uns segundos depois de voltar à aplicação. Por isso quase nunca precisa de começar uma sincronização à mão.

**Não quando a minimiza** — o Android não deixa uma aplicação continuar a trabalhar depois de minimizada. As alterações feitas antes de minimizar sobem na próxima vez que a abrir. Quer enviá-las já? Toque no ícone de sincronização no «Resumo».

**O ícone no «Resumo»** — no canto superior direito. O número nele é quantas alterações ainda não foram enviadas para a nuvem. Tocar nele sincroniza já.

*Como funciona:*
Depois de cada sincronização, o ícone acende durante 15 segundos: verde (resultou) ou vermelho (não resultou). Uma falha isolada costuma ser a rede: o metro, uma casa no campo. Se quatro sincronizações seguidas falharem, o ícone fica vermelho até a próxima resultar — quer dizer que algo avariou, e vale a pena abrir este ecrã. Mantenha o dedo no ícone para ver o texto do erro.

A aplicação fica calada sobre as sincronizações automáticas. A mensagem «Sincronizado» só aparece se foi o utilizador que começou a sincronização.

#### Se algo correr mal {#sync-trouble}

No ecrã «Sincronização» aparece um cartão: o que aconteceu e o que fazer. Estes são os tipos.

**«O orçamento «…» já existe na nuvem com dados»** — com os botões «Da nuvem» e «Juntar» por baixo do cartão.

**O que aconteceu.** Ligou uma nuvem, e ela já tem um orçamento com **o mesmo nome** do orçamento deste dispositivo — e ambos já têm dados. Normalmente é um segundo telemóvel: alguém adicionou contas ou duas compras nele primeiro, e só depois ligou a nuvem do primeiro telemóvel. A aplicação não sabe se é um só orçamento ou dois diferentes com o mesmo nome, por isso não mexe em nada e espera pela sua resposta. Pergunta uma vez — na primeira sincronização deste orçamento.

**O que escolher:**

- **É um segundo dispositivo do mesmo orçamento** — toque em **«Da nuvem»**, depois em «Carregar». Este dispositivo recebe o orçamento inteiro da nuvem, e o que registou aqui perde-se — registe-o outra vez. É a resposta de que mais vai precisar.
- **Manteve de facto um orçamento em dois dispositivos em separado** e quer juntar tudo — toque em **«Juntar»**. Tudo se soma: o que registou aqui e o que está na nuvem. Mas as contas e as categorias criadas em cada dispositivo em separado ficam lado a lado — duas contas «Conta à ordem», dois beneficiários «Pastelaria da esquina» — e terá de arrumar as sobras à mão.
- **São dois orçamentos diferentes** que só têm o mesmo nome — por exemplo, o seu e o da sua mulher, ambos «O meu orçamento». Não toque em nenhum dos botões. Mude o nome do orçamento neste dispositivo: toque no nome do orçamento no cabeçalho do «Resumo» → o «⋮» ao lado deste orçamento → «Renomear». Com o nome novo, ganha a sua própria pasta na nuvem e sincroniza à parte.

Na dúvida? Faça primeiro uma cópia: «Cópias de segurança» → «Criar cópia de segurança agora» → «Dispositivo». Se a escolha estiver errada, pode voltar a ela.

**«A nuvem está protegida por palavra-passe»** — os dados na nuvem estão encriptados com uma palavra-passe definida noutro dispositivo, e aqui não está definida ou é diferente. Os dados estão intactos. «Introduzir palavra-passe» — introduza a mesma palavra-passe, e a sincronização continua.

*Como funciona:*
«Palavra-passe perdida» é o último recurso: o ficheiro na nuvem é substituído pelos dados deste dispositivo, e a encriptação é retirada. Os dados dos outros dispositivos não se perdem — as alterações deles voltam na próxima sincronização deles. Antes de substituir, a aplicação faz cópias e guarda o antigo ficheiro encriptado ao lado delas — caso se lembre da palavra-passe.

**«A nuvem não está encriptada»** — há uma palavra-passe definida neste dispositivo, mas os dados na nuvem estão abertos: a encriptação foi retirada noutro dispositivo. Decide o utilizador: «Encriptar a nuvem» — e os outros dispositivos vão precisar de introduzir a mesma palavra-passe — ou «Retirar a palavra-passe aqui».

**«O ficheiro de sincronização na nuvem está ilegível»** — o ficheiro na nuvem está danificado e não se corrige sozinho. «Reparar a nuvem» faz cópias novas do orçamento e substitui o ficheiro da nuvem pelos dados deste dispositivo.

*Como funciona:*
As alterações de outro dispositivo que ainda não tinham chegado a este ficam só no ficheiro danificado — uma cópia dele é guardada ao lado das cópias de segurança. Se o segundo dispositivo funcionar, traz os dados de volta na sua próxima sincronização.

**«Fotos da nuvem não desencriptadas: N»** — os dados chegaram, mas as fotos não: estão encriptadas com uma palavra-passe que aqui não está definida ou é diferente. Defina a mesma palavra-passe do outro dispositivo — as fotos chegam na próxima sincronização.

**«Conflito»** — o mesmo registo foi alterado em dois dispositivos. O cartão mostra em que diferem as versões: «Manter» fica com a versão deste dispositivo, «Usar» fica com a da nuvem.

### Encriptação da nuvem: a palavra-passe {#sync-password}

O bloco «Encriptação da nuvem» está em primeiro lugar nos ecrãs «Autorização», «Sincronização» e «Cópias de segurança». É uma única e mesma palavra-passe.

**O que fecha** — tudo o que vai para a nuvem: as cópias de segurança, as fotos dos recibos e o ficheiro de sincronização. A encriptação é AES-256. Sem palavra-passe, qualquer pessoa com acesso à pasta da nuvem consegue ler estes ficheiros.

**Como a definir** — toque em «Definir palavra-passe».

*Passo a passo:*
1. Abre a janela «Palavra-passe de encriptação».
2. Introduza a palavra-passe em «Palavra-passe» e de novo em «Repita a palavra-passe» — pelo menos 4 caracteres.
3. Marque «Anotei a palavra-passe num lugar seguro» — sem isso, não pode tocar em «Guardar».
4. «Guardar». O bloco passa a «A nuvem está protegida por palavra-passe».

**Nos outros dispositivos** — defina **a mesma** palavra-passe. A palavra-passe não sincroniza e não vai nem para a nuvem nem para o programador — vive só no dispositivo. Com palavras-passe diferentes, a sincronização para com o cartão «A nuvem está protegida por palavra-passe».

**Esqueça a palavra-passe, e ninguém recupera as cópias da nuvem.** Nem o utilizador, nem o programador, de forma nenhuma. Anote-a onde guarda as suas outras palavras-passe importantes.

**Mudar ou retirar** — no bloco, toque em «Editar» — «Alterar a palavra-passe» ou «Desligar a encriptação». Mude a palavra-passe em todos os dispositivos: se um ficar com a antiga, deixa de conseguir ler a nuvem.

**As cópias no telemóvel não são encriptadas** — estão ao lado da própria base de dados do orçamento, e essa está aberta. Por isso, com uma palavra-passe definida, as cópias «Dispositivo» da lista levam o rótulo «Sem encriptação» — para não pensar que está tudo fechado.

### Cópias de segurança {#sync-backups}

Uma cópia de segurança é o orçamento inteiro num momento: contas, categorias, transações, metas, pagamentos programados e fotos. A aplicação faz cópias sozinha; vem aqui quando precisa de voltar atrás.

[Ecrã Cópias de segurança: Criar cópia de segurança agora, Última cópia de segurança, Encriptação da nuvem, Agenda de cópias, filtros Todas, Dispositivo, Dropbox, uma lista de sete cópias]

(1)
**Criar cópia de segurança agora** — uma cópia já, por exemplo antes de uma importação ou de uma grande arrumação. A aplicação pergunta «Onde guardar a cópia?» — captura [mais abaixo](#sync-where).

(2)
**«Última cópia de segurança»** — quando foi feita a cópia mais recente deste orçamento. Se já foi há muito, a linha fica amarela.

(3)
**Encriptação da nuvem** — a mesma palavra-passe da «Sincronização» — [mais acima](#sync-password).

(4)
**Agenda de cópias** — com que frequência a aplicação faz cópias e quantas guarda. Toque para abrir — [mais abaixo](#sync-schedule).

(5)
**Filtros** — «Todas», «Dispositivo» e um chip para cada nuvem ligada. O número é quantas cópias há aí. Sem nuvens ligadas — sem filtros: não há nada para filtrar.

(6)
**Cópia** — data e hora, onde está, de que tipo é e de que orçamento.

*Como funciona:*
Por baixo da data — onde está («Dispositivo», «Dropbox»…) e o tipo: «Auto, frequente», «Auto, espaçada» ou «Manual». Por baixo — o nome do orçamento, quantos registos, fotos e PDF há na cópia, e o tamanho do ficheiro.

O ícone de relógio com seta — **repor o orçamento a partir desta cópia**. O caixote do lixo — eliminar a cópia (a aplicação volta a perguntar).

(7)
**O menu «⋮»** — «Restaurar de um ficheiro», «Cópia legível», «Dicas» — [mais abaixo](#sync-menu).

#### Como repor o orçamento a partir de uma cópia {#sync-back}

1. Encontre a cópia do dia de que precisa. Na dúvida? Escolha a última antes de as coisas correrem mal.
2. Toque no ícone de relógio com seta na linha dela.
3. A janela «Restaurar os dados?»: «Os dados serão restaurados … Os dados atuais serão substituídos.» — toque em «Restaurar».
4. Em baixo aparece «Restaurado de …». O orçamento está agora como estava no momento da cópia.

**Se há uma nuvem ligada, uma só restauração não chega.**

Uma cópia restaura-se para se livrar de alterações recentes: eliminou a conta errada, importou o ficheiro errado. Mas a restauração muda o orçamento só neste telemóvel. A nuvem ainda tem o orçamento com essas mesmas alterações, e ao sincronizar a aplicação junta o telemóvel e a nuvem, e vence a alteração mais recente. Toque em «Sincronizar» — e tudo aquilo de que se estava a livrar volta da nuvem em meio minuto.

Para a reposição pegar, a nuvem tem de ser substituída pelo orçamento restaurado. Como — abaixo.

#### Repor também a nuvem {#sync-rollback}

O orçamento está num só telemóvel — estes passos chegam. A ordem importa.

1. **Restaure a cópia** — os passos acima. Depois disso, **não toque em «Sincronizar»**.
2. **Saia da aplicação** com o botão Início. Enquanto a aplicação está minimizada, não sincroniza.
3. **Elimine o ficheiro de sincronização na nuvem.** Abra a nuvem num navegador: a pasta «My budget» → a pasta com o nome do orçamento → o ficheiro `ynab_budget_sync.json`. Elimine só esse — deixe as pastas das cópias e das fotos em paz. No Dropbox, a pasta «My budget» está dentro de «Aplicações» → «My Budget Envelopes».
4. **Volte à aplicação.** Uns segundos depois sincroniza sozinha, não encontra ficheiro na nuvem e põe lá o orçamento restaurado. O ecrã «Sincronização» deve dizer «Sincronizado».

*Porquê restaurar primeiro e eliminar o ficheiro depois:*
Sempre que volta à aplicação, ela sincroniza uns segundos depois. Elimine primeiro o ficheiro, e ao voltar do navegador a aplicação põe logo na nuvem o orçamento atual — ainda com aquelas alterações. Aí teria de começar tudo de novo.

#### Se vários dispositivos mantêm o orçamento {#sync-rollback-devices}

O segundo telemóvel e o computador também têm aquelas alterações. Ao sincronizar, devolvê-las-iam à nuvem, e de lá — de volta a si. Por isso cada um dos outros dispositivos tem de esquecer os seus dados e voltar a buscar o orçamento à nuvem — antes de ter oportunidade de sincronizar.

1. Reponha o orçamento e a nuvem num dispositivo — os passos acima.
2. No outro telemóvel, **ligue o modo de avião** e só depois abra a aplicação: sem rede, não sincroniza.
3. «Definições» → «Sobre» → «Redefinir todos os dados».
4. **Desligue o modo de avião.** A aplicação sincroniza e carrega da nuvem o orçamento já reposto.

Num computador — o mesmo: desligue-se da internet antes de abrir o programa, redefina os dados nas definições, volte a ligar-se. As alterações nesses dispositivos que ainda não tinham chegado à nuvem perdem-se com a redefinição.

#### Agenda de cópias {#sync-schedule}

A aplicação faz uma cópia sozinha quando chega a altura — quando abre a aplicação e quando muda para outro orçamento. Cada orçamento tem o seu calendário. Há dois tipos de cópia: as frequentes — para voltar uns dias atrás, e as espaçadas — para voltar meses atrás.

[Agenda de cópias no modo Personalizado: cópias frequentes de 5 em 5 dias, guardar 7; espaçadas uma vez por mês, guardar 12; Quão longe para trás: frequentes cerca de 35 dias, espaçadas até 12 meses]
**«Personalizado».** As mesmas escolhas do «Padrão».

**Padrão** — cópias frequentes de 5 em 5 dias, guardam-se as últimas 7 — são cerca de 35 dias para trás; espaçadas — uma vez por mês, guardam-se 12 — até um ano para trás.

**Personalizado** — frequentes — todos os dias ou de 2, 3, 5, 7 em 7 dias, guardar 3, 5, 7, 10, 14 ou 30; espaçadas — uma vez por mês ou uma vez por trimestre, guardar 3, 4, 6, 12 ou 24 — ou «Não fazer».

**«Quão longe para trás»** — a aplicação calcula quantos dias e meses para trás pode voltar com o calendário escolhido.

**Avisos** — se as cópias frequentes acabarem antes de começar uma espaçada, a aplicação mostra «Entre … e … dias pode não haver cópias» com botões que fecham o buraco. Escolha «Não fazer» para as espaçadas, e avisa que não vai haver cópias com mais de uns dias.

**As cópias antigas são eliminadas** — se reduzir quantas guardar, as cópias a mais são eliminadas na próxima cópia automática — tanto no telemóvel como na nuvem. Por isso o «Guardar» pergunta primeiro: quantas vão ser eliminadas, e a data da mais antiga.

**Cópias manuais** — guardam-se sem limite: o calendário não lhes toca. O calendário vale para este dispositivo e não sincroniza.

**A cópia automática falhou duas vezes seguidas** — aparece no «Resumo» um aviso «A cópia de segurança automática falha» com o motivo (por exemplo, falta de espaço) e um botão «Fazer cópia».

#### «Onde guardar a cópia?» {#sync-where}

«Criar cópia de segurança agora» pergunta isto.

[Folha Onde guardar a cópia: Dispositivo, Ficheiro no telemóvel, Google Drive, Dropbox, WebDAV]

**Dispositivo** — para a pasta de cópias da aplicação. A cópia aparece na lista.

**Ficheiro no telemóvel** — escolha uma pasta — por exemplo «Downloads» — e guarde a cópia como ficheiro. Pode enviá-la para si próprio ou pô-la num computador. Com uma palavra-passe definida, o ficheiro é encriptado.

**Google Drive, Dropbox, WebDAV** — a cópia vai diretamente para a nuvem. A nuvem não está ligada? A aplicação diz onde a ligar.

#### O menu «⋮» {#sync-menu}

[Menu do ecrã Cópias de segurança: Restaurar de um ficheiro, Cópia legível, Dicas]

[Folha Cópia legível: Ficheiro comprimido com fotos e PDF, Só os dados, Um ficheiro da nuvem]

(A)
#### Restaurar de um ficheiro

repor o orçamento a partir de um ficheiro de cópia que não está na lista: descarregado da nuvem, enviado para si próprio, guardado nas «Downloads».

*Como funciona:*
Servem uma cópia (`.y4zip`), uma «Cópia legível» e até o ficheiro de sincronização `ynab_budget_sync.json` descarregado da nuvem num navegador. Se o ficheiro estiver encriptado, a aplicação pede a palavra-passe. Se a cópia for de outro orçamento (sem nenhuma conta em comum), a aplicação volta a perguntar: «Ao que parece, é outro orçamento». Um ficheiro do YNAB 4 não vai aqui — passa pelo «Importar do YNAB» nas definições.

(B)
#### Cópia legível

os seus dados como um ficheiro que qualquer programa abre, sem palavra-passe. Guarde-o onde estranhos não vão olhar.

*Como funciona:*
Três opções:

- **Ficheiro comprimido com fotos e PDF** — este orçamento inteiro; qualquer programa de arquivo o abre.
- **Só os dados** — este orçamento num único ficheiro de texto; qualquer editor de texto o abre. Os recibos eletrónicos estão lá, as fotos e os PDF não.
- **Um ficheiro da nuvem** — retirar a palavra-passe e a compressão de um ficheiro de sincronização ou de uma cópia da nuvem que descarregou num navegador.

É um caminho até aos seus dados que passa por fora da aplicação: mesmo sem a aplicação, o orçamento continua a ser seu.

(C)
#### Dicas

as dicas deste ecrã em forma de lista.

### Carregar um orçamento da nuvem {#sync-restore}

Um telemóvel novo, uma reinstalação ou um segundo dispositivo. O orçamento está na nuvem com o nome dele; este ecrã encontra-o e carrega-o para aqui. A opção «Já tenho um orçamento» do assistente do primeiro arranque abre este mesmo ecrã.

[Ecrã Carregar orçamento da nuvem: passo 1 Ligue uma nuvem com um botão Ligar, passo 2 Nome do orçamento]

(1)
**Ligue uma nuvem** — a mesma do primeiro dispositivo: o mesmo Google Drive, Dropbox ou WebDAV e **a mesma conta**.

(2)
**Escolha um orçamento** — a aplicação mostra os orçamentos da nuvem com a data da última sincronização. Toque no seu e em «Carregar orçamento».

*Como funciona:*
Não há lista, ou o seu orçamento não está nela? Toque em «Escrever o nome à mão» e escreva o nome exatamente como se chama no primeiro dispositivo: o nome do orçamento é o endereço da pasta dele na nuvem. Maiúsculas e minúsculas não importam. O nome aparece no cabeçalho do «Resumo» no primeiro dispositivo.

Se este dispositivo já tem dados, a aplicação volta a perguntar: «Substituir os dados pelos da nuvem?»: tudo o que não está na nuvem perde-se.

**Palavra-passe** — se há uma palavra-passe definida no primeiro dispositivo, defina aqui a mesma. Sem ela, a sincronização para, e as fotos dos recibos chegam, mas não abrem.

### Transferência local: sem nuvem {#sync-local}

Passar um orçamento entre os seus próprios dispositivos diretamente — como ficheiro ou por Wi-Fi. Sem internet e sem contas. É uma transferência única, não uma sincronização contínua.

[Ecrã Transferência local: um bloco Ficheiro com botões Exportar e Importar, um bloco WiFi com os papéis de enviar e receber]

(1)
**Ficheiro** — «Exportar» — os dados do orçamento como ficheiro: envie-o por um mensageiro, por e-mail ou numa pen USB. No outro dispositivo — «Importar» e escolha esse ficheiro.

*Como funciona:*
A importação **junta** os dados do ficheiro com o que já existe, e se o mesmo registo for diferente, fica com a versão do ficheiro. As fotos não vão no ficheiro. Para passar tudo, incluindo as fotos — o Wi-Fi ou uma [cópia de segurança](#sync-backups) («Ficheiro comprimido com fotos e PDF»).

(2)
**WiFi (rede local)** — os dois dispositivos na mesma rede Wi-Fi. Um envia os dados, o outro recebe-os e, com «Juntar», envia de volta as suas alterações. As fotos também passam.

*Como funciona:*
1. No dispositivo que envia: «Iniciar o servidor». Aparecem um código QR e um «Código de confirmação» de 6 dígitos.
2. No que recebe: «Digitalizar o QR» — o código preenche os dois campos. Ou introduza o endereço IP e o código à mão.
3. «Receber os dados». A aplicação pergunta «Como aplicar os dados?»: «Juntar» — como uma sincronização normal nos dois sentidos: as alterações deste dispositivo também vão para o que envia, nada se perde; «Substituir por completo» — este orçamento passa a ser uma cópia exata do que envia, e tudo o que não foi sincronizado aqui perde-se. «Substituir» é para um dispositivo novo.
4. No dispositivo que envia — «Parar o servidor».

A transferência é encriptada com o código de confirmação, e o próprio código nunca vai pela rede.

## Definições {#settings}

O que faz cada linha e como está logo após a instalação.

*A roda dentada no canto superior esquerdo do «Resumo»*

As secções estão pela ordem da frequência com que precisa delas: as mais frequentes no topo.

### Planeamento {#settings-s-plan}

Tudo o que se repete: pagamentos regulares e lembretes.

[Secção Planeamento: Pagamentos programados, Lembretes]

**Pagamentos programados** — renda, subscrições, ordenado — tudo o que se repete. No dia, a aplicação propõe registar o pagamento com um toque, e «O que vem» no «Resumo» mostra os próximos.

**Lembretes** — quando e sobre o quê a aplicação o avisa. Um ecrã próprio — [mais abaixo](#settings-reminders).

#### O ecrã «Lembretes» {#settings-reminders}

[Ecrã Lembretes: Pagamentos programados, Gastos do dia, Resumo semanal, Todos os lembretes]

**Pagamentos programados** — «Quando lembrar» — no dia do pagamento, 1, 2 ou 3 dias antes, ou uma semana antes; «Hora do lembrete»; «Ocultar valores nas notificações» — o lembrete aparece no ecrã de bloqueio, e sem isto qualquer pessoa que pegue no telemóvel consegue ler o valor. **Logo após a instalação:** na véspera, às 9:00, valores visíveis.

**Gastos do dia** — «Lembrar de adicionar os gastos» — à noite, se não registou nada hoje. Se registou, fica calado. **Logo após a instalação:** desligado, às 21:00.

**Resumo semanal** — «Enviar resumo» — no último dia da semana: quanto se gastou e em quê mais, que categorias estão a acabar, que pagamentos programados vêm aí. **Logo após a instalação:** desligado.

**Todos os lembretes** — «Lembretes à hora exata». Sem autorização, o Android pode entregar um lembrete com atraso. O interruptor abre as definições do Android onde se dá essa autorização.

### Dados {#settings-s-data}

As listas do orçamento e a troca de dados com outros programas.

[Secção Dados: Beneficiários, Tags, Exportar para CSV, Importar do YNAB, Caixa de entrada]

**Beneficiários e Tags** — listas que se formam sozinhas à medida que regista transações. Tudo sobre elas — no artigo [«Beneficiários e tags»](#payees-tags).

**Exportar para CSV** — todas as transações do orçamento atual como um ficheiro de folha de cálculo — para abrir no Excel ou no Google Sheets.

*Mais:*
O ficheiro tem tudo o que uma transação tem: data, conta, beneficiário, categoria e o grupo dela, valor e moeda, «contabilizado», nota, as partes de um valor dividido, transferência, tags, marcador, recibos eletrónicos, o mês do orçamento (para um ordenado registado «para o mês seguinte» — o mês para o qual foi posto de lado), e, numa transferência entre moedas — quanto chegou, em que moeda e a que taxa. Só as fotos e os PDF não são exportados: são ficheiros no telemóvel.

Os nomes das colunas estão em inglês (`date`, `amount`, `tags`…) e não dependem do idioma da aplicação: assim as fórmulas e as tabelas dinâmicas não se estragam se mudar o idioma. Os números no ficheiro são sempre os reais, mesmo com «Ocultar valores» ligado. O separador dos campos segue o formato dos números, por isso a tabela abre em colunas, e não numa só linha.

**Importar do YNAB** — passar um orçamento do YNAB 4 (um ficheiro .y4backup) ou do YNAB web (uma exportação .zip): contas, categorias e todo o histórico. Depois da importação, um glossário mostra como se chama aqui cada termo do YNAB.

**Caixa de entrada** — na caixa, só o valor; a conta e a categoria escolhe-as depois. Como funciona — no artigo [«Formulário de transação»](#entry). **Logo após a instalação:** desligado.

### Sincronização {#settings-s-sync}

A nuvem, as cópias de segurança e a passagem de um orçamento entre dispositivos. Aqui, em resumo, o que está onde; em pormenor — o artigo [«Nuvem e cópias de segurança»](#sync).

[Secção Sincronização: Autorização, Sincronização, Cópias de segurança, Carregar orçamento da nuvem, Transferência local]

**Autorização** — ligar uma nuvem: Google Drive, Dropbox ou WebDAV. A regra principal: todos os dispositivos que mantêm este orçamento usam **a mesma conta de nuvem**, caso contrário não se veem.

*Mais:*
**Se as pessoas da família têm contas Google diferentes**, crie uma **conta Google nova e à parte** para o orçamento e inicie sessão na nuvem da aplicação só com ela, em todos os dispositivos. Não inicie sessão na sua conta pessoal no telemóvel da sua mulher, nem na dela no seu: o telemóvel começa a sincronizar contactos, mensagens e fotos com essa conta, e os dados pessoais de duas pessoas misturam-se. Uma conta à parte para o orçamento só sabe do orçamento.

**Dropbox** — inicie sessão com o **e-mail e a palavra-passe** do Dropbox, não com o botão «Continuar com o Google». Entrar com o Google prende o Dropbox à conta Google que usou — e num dispositivo com outra conta Google é fácil ir parar a outro Dropbox, que não tem o seu orçamento. O e-mail e a palavra-passe do Dropbox funcionam da mesma forma em qualquer dispositivo.

**WebDAV** — uma nuvem que o suporte (Nextcloud, ownCloud, pCloud e outras) ou o seu próprio servidor; o mesmo endereço, utilizador e pasta em todos os dispositivos.

**Sincronização** — a troca de alterações com a nuvem e com os outros dispositivos; também a palavra-passe que encripta a nuvem, e o registo da sincronização.

**Cópias de segurança** — cópias do orçamento: automáticas segundo um calendário e manuais, no telemóvel e na nuvem. Também daqui — uma «Cópia legível» como ficheiro.

**Carregar orçamento da nuvem** — um telemóvel novo ou uma reinstalação — o orçamento volta da nuvem ou de um ficheiro de cópia de segurança.

**Transferência local** — passar um orçamento entre os seus dispositivos por WiFi ou como ficheiro — sem nuvem.

### Orçamento {#settings-s-budget}

As definições do orçamento atual.

[Secção Orçamento: Moeda do orçamento, Categorias de «Pague-se primeiro», Idade do dinheiro]

**Moeda do orçamento** — o símbolo em que mantém o orçamento. Só para este orçamento; a aplicação não converte valores — muda só o símbolo.

**Categorias de «Pague-se primeiro»** — que categorias contam como «posto de lado para si» — normalmente as poupanças. Sem nenhuma escolhida, o bloco «Pague-se primeiro» não aparece no «Resumo». O que mostra — no artigo [«Resumo»](#overview).

**Idade do dinheiro** — como a calcular: três formas. Um ecrã próprio — [mais abaixo](#settings-aom).

#### O ecrã «Idade do dinheiro» {#settings-aom}

[Ecrã Como calcular a idade do dinheiro: Clássico YNAB FIFO, Tendo em conta as reservas, Com reservas e profundidade do negativo]

As três formas estão descritas no próprio ecrã. Qual é a mais próxima da verdade e porquê, com exemplos — no artigo [«Resumo»](#overview), secção «Idade do dinheiro em pormenor». Em resumo: **«Tendo em conta as reservas»** conta exatamente o dinheiro que está nas suas contas. **Logo após a instalação:** «Clássico (YNAB FIFO)».

### Segurança {#settings-s-security}

Um cadeado na aplicação.

[Secção Segurança: PIN]

**PIN** — a aplicação pede-o ao abrir. Depois de definido um PIN, aparece por baixo o «Desbloqueio biométrico» — a impressão digital ou o rosto em vez dos dígitos.

*Mais:*
Sem PIN, a biometria não se pode ligar: sem ele não há cadeado. Enquanto há um PIN, o cartão da aplicação na lista de aplicações abertas fica tapado, e olhos curiosos não veem lá os seus saldos (no Android 13 e mais recentes).

### Aparência {#settings-s-look}

Dois ecrãs: o idioma com os formatos, e todo o aspeto da aplicação.

[Secção Aparência: Idioma e formatos, Aparência]

**Idioma e formatos** — o idioma da interface, o aspeto dos valores e das datas, como introduzir um valor. O ecrã — [mais abaixo](#settings-formats).

**Aparência** — tema, estilo, tipo de letra, ícones e o aspeto de uma linha de transação. O ecrã — [mais abaixo](#settings-appearance).

#### O ecrã «Idioma e formatos» {#settings-formats}

[Ecrã Idioma e formatos: Idioma da interface, Formato dos valores, Introdução do valor, Teclado do valor, Formato de data]

**Idioma da interface** — treze idiomas; «Padrão do sistema» é o idioma do telemóvel. O idioma vive neste dispositivo e não sincroniza: o telemóvel pode estar em inglês e o computador em alemão.

**Formato dos valores** — os separadores dos milhares e decimal, de que lado fica o símbolo da moeda. Por predefinição — como é costume no idioma escolhido: «1 234 567,89 €».

**Introdução do valor** — «Com vírgula» ou «A partir dos cêntimos, como no multibanco» (1-2-5-0 quer dizer 12,50). **Logo após a instalação:** com vírgula.

**Teclado do valor** — «Para a mão direita» — os dígitos à direita, as operações à esquerda; «Para a mão esquerda» — o contrário. **Logo após a instalação:** para a mão direita.

**Formato de data** — ordem, separador, mês em número ou por extenso — 24 opções à escolha.

#### O ecrã «Aparência» {#settings-appearance}

[Ecrã Aparência: Tema, Estilo, Cantos, Cores de receitas e despesas, Tipo de letra, Densidade, Ícones, Cor dos valores, Forma do marcador, Voltar para]

**Tema** — «Sistema», «Claro» ou «Escuro». «Sistema» segue o telemóvel.

**Estilo** — o carácter de cores da aplicação: «Clássico», «Neon», «Aurora», «Ácido», «Doce», «Marshmallow», «Grafite». Cada um tem uma versão clara e uma escura.

**Cantos** — «Retos», «Normais» ou «Suaves» — os cantos dos cartões, botões e chips. Independente do estilo.

**Cores de receitas e despesas** — «Padrão» — receitas a verde, despesas a vermelho. «Reforçadas» — receitas a azul: para quem tem dificuldade em distinguir o verde do vermelho.

*Mais:*
Cerca de um homem em cada doze e uma mulher em cada duzentas veem as cores de outra forma. Há três tipos:

- **deuteranopia** — perceção mais fraca do verde; a mais comum;
- **protanopia** — perceção mais fraca do vermelho;
- **tritanopia** — o azul e o amarelo confundem-se; muito rara.

Nas duas primeiras, o verde e o vermelho fundem-se num tom acastanhado parecido, e a receita não se distingue da despesa pela cor. Ambas veem bem o azul — por isso, nas «Reforçadas», as receitas são azuis.

**O que mais a aplicação faz por estas pessoas — já, sem definição nenhuma:**

- todos os valores têm um sinal «+» ou «−»: o sentido de uma transação vê-se sem cor nenhuma (e logo após a instalação os valores das transações nem têm cor);
- a despesa excedida fala não só com a cor, mas também com um ícone: uma carteira — gastou o seu próprio dinheiro, um cartão — entrou em dívida no cartão de crédito;
- uma sincronização que falhou muda não só a cor do ícone, mas também o desenho — aparece um «!» lá dentro;
- as cores dos gráficos dos relatórios são escolhidas para que fatias vizinhas difiram também no brilho, não só no tom.

**O que mudam as «Reforçadas»:** receitas a azul em todo o lado — nos valores, no cabeçalho do formulário de receita, nos gráficos e na tabela «Receitas e despesas»; as cores dos marcadores das transações afastam-se pelo brilho; os gráficos dos relatórios e o «Fluxo de dinheiro» usam um conjunto de cores próprio. Cada conjunto é verificado com os três tipos durante o desenvolvimento.

As «Reforçadas» ajudam também quem distingue bem as cores, mas olha para o ecrã sob sol forte.

**Tipo de letra** — o do sistema ou um de sete: «Fira Sans», «Geologica», «IBM Plex Sans», «Inter», «Manrope», «Noto Sans», «Source Sans 3» — para toda a interface.

**Densidade** — «Compacta», «Normal» ou «Espaçosa» — o espaço entre as linhas e os blocos. O tamanho das letras não muda.

**Ícones** — «Normais» ou «Bicolores».

**Cor dos valores** — se colorir os valores nas listas de transações: «Sem cor», «Somente receitas» ou «Despesas e receitas».

*Mais:*
**Logo após a instalação — «Sem cor»**, e todas as capturas deste guia foram feitas assim. Porquê: o vermelho é a cor do alarme, e comprar pão não merece alarme; quando todas as linhas brilham a vermelho, a cor deixa de dizer seja o que for. O sinal mostra o sentido de uma transação: «−» para despesa, «+» para receita. Quer cor? Escolha «Despesas e receitas» ou «Somente receitas».

A despesa excedida de uma categoria, a dívida e o estado da sincronização continuam coloridos, seja qual for a escolha: aí a cor é um aviso.

**Forma do marcador** — «Ponto», «Bandeirinha triangular» ou «Bandeira ondulada» — como aparece o marcador nas linhas de transação.

**Voltar para** — «Resumo» — depois de uma pausa de mais de 30 segundos e no arranque, abre o «Resumo»; «Onde parou» — o mesmo ecrã, mesmo com um formulário aberto. O PIN é pedido nos dois casos.

### Ajuda e contacto {#settings-s-help}

As dicas e o contacto com o programador.

[Secção Ajuda e contacto: Dicas, Conversa no Telegram, Relatar um erro, Sugerir uma melhoria]

**Dicas** — todas as dicas da aplicação em lista, por ecrã. E também «Mostrar as dicas de novo». As dicas de um ecrã abrem-se também pelo item «Dicas» do menu «⋮» dele.

**Conversa no Telegram** — um grupo onde se respondem perguntas e onde pode perguntar a outros utilizadores.

**Relatar um erro** — um e-mail para o programador. As versões da aplicação e do dispositivo preenchem-se sozinhas; pode anexar o registo de eventos de «Sobre».

**Sugerir uma melhoria** — um e-mail com uma ideia: o que é incómodo agora e como gostaria que fosse.

### Sobre {#settings-s-about}

Uma linha, e por trás dela um ecrã com a versão, os documentos e os itens de serviço.

[Secção Sobre]

**Sobre** — o ecrã — [mais abaixo](#settings-about-screen).

#### O ecrã «Sobre» {#settings-about-screen}

[Ecrã Sobre: Versão, Versão para Windows, Partilhar a aplicação, Política de privacidade, Licença, Registo de eventos, Redefinir todos os dados]

**Versão** — o número da versão; toque nele para ver as «Novidades»: o que mudou nas últimas versões.

**Versão para Windows** — o mesmo orçamento num computador — na Microsoft Store.

**Partilhar a aplicação** — enviar uma ligação para a aplicação no Google Play.

**Política de privacidade e Licença** — documentos. Em resumo: os seus dados são seus, e o programador não tem acesso a eles.

**Registo de eventos** — os erros da aplicação e da sincronização. Útil se for escrever sobre um problema.

**Redefinir todos os dados** — eliminar todas as contas, categorias, transações, pagamentos programados e metas. A aplicação volta a perguntar: «Redefinir todos os dados?». Isto não se pode desfazer.

*Mais:*
Se a sincronização estiver ligada, os dados voltam da nuvem na próxima sincronização. Para eliminar de vez, desligue a nuvem ou elimine o ficheiro de sincronização nela. Antes de redefinir, faça uma cópia em «Cópias de segurança».
