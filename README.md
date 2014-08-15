# Nós Fiscais — Mobilizando para fiscalizar

[**Nós Fiscais**][1] é uma aplicação web do [Você Fiscal][2] em Meteor JS para facilitar a mobilização de cidadãos no dia das eleições de 2014 (5 de outubro).

O **Você Fiscal** é o projeto de fiscalização das eleições. O **vocefiscal-android** é o aplicativo Android para tirar fotos de Boletins de Urna. E o **Nós Fiscais** é um canal para as pessoas se encontrarem e unirem esforços para fazer a coisa acontecer localmente.

## Estrutura

A ideia do projeto é se orientar em torno de três eixos:

1. Localidades, incluindo zonas eleitorais
2. Pessoas (usuários)
3. Grupos

A parte de localidades é o que está no ar. Foi feito da maneira mais gambiarrenta possível para ter algo da porta para fora.

Atualmente é apenas um JSON de zonas eleitorais que gera uma árvore de localidades (região > estado > município > zona) e embute uma thread do Disqus na página correspondente. É um jeito rápido de criar um pseudo-fórum com estruturas arbitrárias.

O próximo passo é ter contas de usuários para as pessoas "assumirem" zonas eleitorais (i.e., se comprometerem a fiscalizá-las com o Você Fiscal no dia da eleição). Isso é muito importante para sabermos onde falta mais gente e assim direcionar os esforços de divulgação.

A terceira parte é fazer um esquema simples de criação de grupos, a la Folding@Home, para pessoas juntarem amigos, colegas de trabalho, etc. e formarem equipes para competir. Dá para ter estatísticas de quantidade de seções cobertas por grupo. E se o usuário associar o BU ao grupo na hora de submeter as fotos, podemos mostrar estatísticas sobre quais grupos registraram mais BUs. Competições do tipo USP vs Unicamp, Emacs vs vi, etc. nesse contexto colaborativo é muito legal.

## Como contribuir

* Entre no https://comunidade.vocefiscal.org.
* Apresente-se.
* Se precisar de ajuda ou dúvida com algo que quer contribuir, fique à vontade para perguntar.
* Mande pull requests.
* Submeta bug reports nas issues ou pegue alguma tarefa que estiver sendo planejada por lá.

A licença é Apache v2.

[1]: http://nosfiscais.vocefiscal.org
[2]: http://www.vocefiscal.org
