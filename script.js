function carregaDicionario() {

  var biografias = {

    bio01: {
      nome: "Angela Davis",
      imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
      descricao:
        "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
      citacao:
        "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
    },

    bio02: {
      nome: "Antonieta de Barros",
      imagem: "https://i.postimg.cc/13mzBK2m/antonieta-retrato.jpg",
      descricao:
        "O ingresso da educadora Antonieta de Barros na política começa concomitantemente ao sufrágio feminino no Brasil. Conquistado em 1932, o direito ao voto estendido às mulheres foi consolidado na Constituição em 1934, ano em que Barros se tornou suplente do Partido Liberal Catarinense (PLC). Como o engenheiro agrônomo Leônidas Coelho de Souza não pôde assumir o cargo, a educadora cumpriu o mandato de 1935 a 1937, tornando-se a primeira deputada de Santa Catarina e a primeira deputada negra do Brasil. Em 19 de julho de 1937, conquistou outro feito: tornou-se a primeira mulher a presidir uma sessão da Assembleia Legislativa no Brasil. Também fundou o jornal A Semana, em que publicava seus artigos sobre educação e desigualdade racial e de gênero.",
      citacao:
        "A educadora Antonieta de Barros foi uma importante política na luta contra o racismo e o machismo na região Sul.",
    },

    bio03: {
      nome: "Carolina de Jesus",
      imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
      descricao:
        "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
      citacao:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
    },

    bio04: {
      nome: "Conceição Evaristo",
      imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
      descricao:
        "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
      citacao:
        "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
    },

    bio05: {
      nome: "Dandara dos Palmares",
      imagem: "https://i.postimg.cc/3whdsTkT/pasted-image-0.png",
      descricao:
        "Líder feminina do Quilombo dos Palmares, Dandara era companheira de Zumbi dos Palmares, com quem teria tido três filhos. Ao longo de décadas, a matriarca participou de decisões políticas e militares em prol da luta pela abolição da escravatura e assumiu o compromisso de lutar pela liberdade das cerca de 30 mil pessoas que chegaram a compor o quilombo. Resistiu ao poder do colonizadores europeus até sua morte: acredita-se que ela teria se jogado de uma pedreira para que as forças militares que tomaram o quilombo no fim do século 17 não a capturassem e a escravizassem novamente.",
      citacao:
        "Dandara dos Palmares, mulher forte e guerreira que lutou até o fim, por um ideal, por um povo e por si mesma."
    },

    bio06: {
      nome: "Lélia Gonzalez",
      imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
      descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
      citacao:
        "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
    },

    bio07: {
      nome: "Marielle Franco",
      imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
      descricao:
        "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",
      citacao:
        "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
    },

    bio08: {
      nome: "Rosa Parks",
      imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
      descricao:
        "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
      citacao:
        "Você nunca deve ter medo do que está fazendo quando está certo.",
    },
  };

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML += 
    '<div class="card">' +
    '<img src="' + biografias[bio].imagem + '" />' +
    '<details>' + '<summary>' + biografias[bio].nome +
    '</summary>' +
    '<p>' + biografias[bio].descricao + '</p>' +
    '<blockquote>' + '<em>' + '<q>' + biografias[bio].citacao +
    '</q>' + '</em>' + '</blockquote>' + '</details>' + '</div>'
  }
}

carregaDicionario();