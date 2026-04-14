const regras = [
    /* ================= 3. NOME NO JOGO (NICKNAME) ================= */
    { codigo: "NAME1", nome: "Nickname fora do padrão", palavras: ["name1", "nick", "nickname", "rp", "nrp"], punicao: "Mudança forçada do nickname", tempo: "Imediato", obs: "Uso de nickname que não seja referente a Role Play." },
    { codigo: "NAME2", nome: "Nickname ofensivo", palavras: ["name2", "ofensivo", "palavrão", "nick ofensivo"], punicao: "Mudança forçada do nickname", tempo: "Imediato", obs: "Utilizar nicknames que sejam ofensivos NRP." },

    /* ================= 4. CONTAS ================= */
    { codigo: "AC1", nome: "Venda de conta", palavras: ["ac1", "vender", "venda", "comprar conta", "site terceiro"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Venda ou tentativa de venda de conta em sites de terceiros ou servidores OneState." },
    { codigo: "AC2", nome: "Transferência de conta", palavras: ["ac2", "transferir", "passar conta", "doar conta"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Transferir ou tentar transferir o registro de uma conta." },
    { codigo: "AC3", nome: "Multi-contas (+3)", palavras: ["ac3", "mais de 3", "contas", "dispositivo", "fake"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Criação de mais de 3 contas no mesmo dispositivo. Punição aplicada a partir da 4ª conta." },
    { codigo: "AC4", nome: "Hack de contas", palavras: ["ac4", "hackear", "roubar conta", "acesso não autorizado", "senha"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Hackear ou obter acesso não autorizado à conta de outro jogador." },
    { codigo: "AC5", nome: "RMT (Dinheiro Real)", palavras: ["ac5", "rmt", "dinheiro real", "vender itens", "trocar dinheiro"], punicao: "Banimento permanente", tempo: "Permanente", obs: "Vender, anunciar, trocar ou comprar itens/dinheiro do jogo por dinheiro real." },

    /* ================= 5. REGRAS DE ROLE PLAY (RP) ================= */
    { codigo: "RP1", nome: "DeathMatch (DM)", palavras: ["rp1", "dm", "matar", "socar", "atirar", "sem motivo"], punicao: "Prisão", tempo: "20 minutos", obs: "Causar dano ou matar um personagem sem motivos de RP." },
    { codigo: "RP2", nome: "DeathMatch Auto (DMAuto)", palavras: ["rp2", "dmauto", "quebrar carro", "destruir veiculo"], punicao: "Prisão", tempo: "20 minutos", obs: "Causar dano ou destruir um veículo sem motivos de RP." },
    { codigo: "RP3", nome: "Poder NÃO RP (NP)", palavras: ["rp3", "np", "powergaming", "fisico", "superman"], punicao: "Prisão", tempo: "15 minutos", obs: "Uso de capacidades físicas além das características do personagem (PowerGaming)." },
    { codigo: "RP4", nome: "Non RolePlay (NRP)", palavras: ["rp4", "nrp", "logica", "irrealista"], punicao: "Prisão", tempo: "15 minutos", obs: "Romper a lógica do RP e das ações do personagem criando situações pouco realistas." },
    { codigo: "RP5", nome: "Meta Gaming (MG)", palavras: ["rp5", "mg", "metagaming", "info real", "vida real", "discord"], punicao: "Mute ou Prisão", tempo: "30m Mute a 60m Prisão", obs: "Usar informações do mundo real dentro do roleplay." },
    { codigo: "RP6", nome: "Abandono de RP", palavras: ["rp6", "fuga", "sair rp", "desviar", "zona verde"], punicao: "Prisão", tempo: "30 a 60 minutos", obs: "Tentar desviar do processo de RP para ganho pessoal ou fugir para zona verde em perseguição." },
    { codigo: "RP7", nome: "RP Benefício Próprio", palavras: ["rp7", "me", "do", "try", "beneficio", "manipular"], punicao: "Prisão", tempo: "20 minutos", obs: "Uso desigual do RP em favor próprio utilizando comandos /me, /do ou /try." },
    { codigo: "RP8", nome: "AFK", palavras: ["rp8", "afk", "parado", "inatividade", "dormindo"], punicao: "Kick (Desconexão)", tempo: "Imediato", obs: "Quando não há atividade do jogador por mais de 5 minutos." },
    { codigo: "RP9", nome: "DriveBy (DB)", palavras: ["rp9", "db", "atropelar", "matar carro", "veiculo"], punicao: "Prisão", tempo: "60 minutos", obs: "Causar dano ou matar um personagem utilizando um veículo." },
    { codigo: "RP9.1", nome: "Mass DriveBy (DB)", palavras: ["rp9.1", "mass db", "atropelar varios", "vários"], punicao: "Banimento", tempo: "12 horas", obs: "Causar dano ou matar vários jogadores usando qualquer veículo." },
    { codigo: "RP10", nome: "Repeat Kill (RK)", palavras: ["rp10", "rk", "voltar", "vingança", "morte"], punicao: "Prisão", tempo: "90 minutos", obs: "Matar/perseguir após morte ou retornar ao local da morte antes de 15 min." },
    { codigo: "RP11", nome: "Áreas Protegidas", palavras: ["rp11", "zona verde", "hospital", "trabalho", "safezone"], punicao: "Prisão", tempo: "30 a 60 minutos", obs: "Crimes em zonas verdes, de trabalho ou veículos de trabalho." },
    { codigo: "RP12", nome: "Sequestro NRP", palavras: ["rp12", "sequestro", "irrealista", "50%"], punicao: "Prisão", tempo: "30 minutos", obs: "Sequestro irrealista (ex: mais sequestrados que 50% dos sequestradores)." },
    { codigo: "RP13", nome: "Faction NRP", palavras: ["rp13", "policia", "exercito", "facção", "exoneração"], punicao: "Exoneração + Prisão/Ban", tempo: "30m a 3 dias", obs: "Comportamento fora do RP em facções (ex: policial soltando preso ilegalmente)." },
    { codigo: "RP14", nome: "Assédio/Importunação", palavras: ["rp14", "sexual", "lgbt", "insulto", "assedio"], punicao: "Mute ou Banimento", tempo: "60m a 30 dias", obs: "Ação sexual não consensual, insultos étnicos ou atenção excessiva." },
    { codigo: "RP15", nome: "Interrupção Policia/Exército", palavras: ["rp15", "copbait", "provocar", "atrapalhar"], punicao: "Prisão", tempo: "30 minutos", obs: "Provocar intencionalmente forças de segurança ou perturbar operações." },
    { codigo: "RP16", nome: "Crime contra Emergência", palavras: ["rp16", "medico", "ems", "samu", "bombeiro"], punicao: "Prisão ou Banimento", tempo: "90m a 12 horas", obs: "Qualquer ato criminoso contra pessoal de emergência médica." },

    /* ================= 6. CHAT E COMUNICAÇÃO ================= */
    { codigo: "CHAT1", nome: "Insulto a Jogadores", palavras: ["chat1", "xingar", "insulto", "ofensa"], punicao: "Banimento", tempo: "1 dia", obs: "Insultar jogadores sem razão válida dentro do RP." },
    { codigo: "CHAT2", nome: "Insulto a Familiares", palavras: ["chat2", "mãe", "pai", "familia"], punicao: "Mute ou Banimento", tempo: "240m a 3 dias", obs: "Mencionar ou insultar familiares de forma negativa." },
    { codigo: "CHAT3", nome: "Discriminação", palavras: ["chat3", "preconceito", "racismo", "religião", "sexo"], punicao: "Mute ou Banimento", tempo: "240m a 3 dias", obs: "Insultos a país, religião, gênero ou orientação sexual." },
    { codigo: "CHAT4", nome: "Insulto à Administração", palavras: ["chat4", "staff", "adm", "administração"], punicao: "Mute ou Banimento", tempo: "240m a 7 dias", obs: "Insultar representantes da administração direta ou veladamente." },
    { codigo: "CHAT5", nome: "Flood", palavras: ["chat5", "flood", "spam", "repetir"], punicao: "Mute (Voz/Texto)", tempo: "10 minutos", obs: "Spam no chat ou uso de macros." },
    { codigo: "CHAT6", nome: "Flood no Report", palavras: ["chat6", "spam report", "feedback"], punicao: "Mute", tempo: "10 a 30 minutos", obs: "Fazer flood no sistema de Report ou feedback." },
    { codigo: "CHAT7", nome: "Publicidade", palavras: ["chat7", "divulgar", "link", "outro servidor"], punicao: "Bloqueio de conta", tempo: "10 dias", obs: "Publicidade não autorizada de recursos de terceiros." },
    { codigo: "CHAT8", nome: "Música/Ruído no Voz", palavras: ["chat8", "musica", "som", "ruido", "gritar"], punicao: "Mute (Voz/Texto)", tempo: "60 minutos", obs: "Obstrução da comunicação por música ou ruídos." },
    { codigo: "CHAT9", nome: "Fake ADM/Empresa", palavras: ["chat9", "fingir adm", "staff falso", "se passar"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Impersonar representantes da Administração ou Chillbase." },
    { codigo: "CHAT10", nome: "Enganar Jogadores", palavras: ["chat10", "golpe", "scam", "ludibriar"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Enganar ou iludir jogadores de qualquer forma." },
    { codigo: "CHAT11", nome: "Enganar Administração", palavras: ["chat11", "mentir staff", "mentira"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Enganar qualquer representante da Administração." },
    { codigo: "CHAT12", nome: "Difamação do Projeto", palavras: ["chat12", "falar mal", "reputação", "integridade"], punicao: "Bloqueio", tempo: "até 30 dias", obs: "Atacar ou descreditar o projeto OneState em público." },
    { codigo: "CHAT13", nome: "Ameaças OOC", palavras: ["chat13", "ameaça real", "vida real", "off"], punicao: "Bloqueio", tempo: "10 dias", obs: "Ameaças à integridade física de alguém na vida real." },
    { codigo: "CHAT14", nome: "Influência NRP", palavras: ["chat14", "induzir", "provocar erro"], punicao: "Bloqueio", tempo: "12 horas", obs: "Provocar terceiros a quebrarem regras para gerar banimento." },
    { codigo: "CHAT15", nome: "Comportamento Tóxico", palavras: ["chat15", "toxico", "hostil", "atitude"], punicao: "Banimento", tempo: "1 a 3 dias", obs: "Comportamento tóxico ou hostil contra jogadores ou ADM." },
    { codigo: "CHAT16", nome: "Idioma Oficial", palavras: ["chat16", "portugues", "lingua", "idioma"], punicao: "Mute ou Banimento", tempo: "10m a 12 horas", obs: "Não usar o idioma oficial da região (exceto pequenos grupos privados)." },
    { codigo: "CHAT17", nome: "Doxxing/Dados Pessoais", palavras: ["chat17", "doxxing", "vazar", "foto", "endereco"], punicao: "Banimento permanente", tempo: "Permanente", obs: "Divulgação de informações pessoais ou materiais privados de outros." },

    /* ================= TCHAT (CHAT DE NEGOCIAÇÃO) ================= */
    { codigo: "TCHAT1", nome: "Fuga de Tópico (Trade)", palavras: ["tchat1", "trade", "negociação", "assunto fora"], punicao: "Mute", tempo: "10 a 60 minutos", obs: "Enviar mensagens no chat de negociação que não estão relacionadas ao comércio." },
    { codigo: "TCHAT2", nome: "Propaganda Enganosa", palavras: ["tchat2", "enganosa", "mentira trade"], punicao: "Mute (Texto/Voz)", tempo: "10 minutos", obs: "Anúncio enganoso ou de bens que não estejam no jogo." },
    { codigo: "TCHAT3", nome: "Spam/Flood no Trade", palavras: ["tchat3", "spam trade", "flood trade"], punicao: "Mute (Texto/Voz)", tempo: "5 minutos", obs: "Spammar ou floodar o chat de comércio repetidamente." },

    /* ================= 7. INFRAÇÕES GRAVES ================= */
    { codigo: "ABUSE1", nome: "Abuso de Bugs/Mods", palavras: ["abuse1", "bug", "vulnerabilidade", "atirar parede"], punicao: "Banimento", tempo: "1 a 30 dias", obs: "Usar erros do jogo para vantagem (ex: comer em combate, sair em cena)." },
    { codigo: "ABUSE2", nome: "Abuso de AFK (Farming)", palavras: ["abuse2", "macro", "clicker", "farmar"], punicao: "Banimento", tempo: "3 dias", obs: "Usar programas ou erros para evitar kick por inatividade e ganhar vantagem." },
    { codigo: "ABUSE3", nome: "Não observância (Reincidência)", palavras: ["abuse3", "reincidente", "repetição", "5 vezes"], punicao: "Bloqueio", tempo: "3 a 30 dias", obs: "Violação sistemática e repetida (5 ocorrências)." },
    { codigo: "ABUSE3.1", nome: "Violação Extrema", palavras: ["abuse3.1", "extremo", "perda conta"], punicao: "Banimento permanente", tempo: "Permanente", obs: "Violações repetidas do ABUSE3 (3 vezes)." },
    { codigo: "ABUSE4", nome: "Interrupção Evento Larga Escala", palavras: ["abuse4", "atrapalhar evento", "obstruir"], punicao: "Banimento", tempo: "12 horas", obs: "Quebra de RP em eventos que envolvem muitos jogadores." },
    { codigo: "ABUSE5", nome: "Bloqueio de Pontos", palavras: ["abuse5", "bloquear entrada", "marcador"], punicao: "Prisão", tempo: "10 a 60 minutos", obs: "Interferir intencionalmente no acesso a edifícios ou marcadores de trabalho." },
    { codigo: "ALERT1", nome: "Evasão de Punição", palavras: ["alert1", "burlar ban", "evasão"], punicao: "Banimento", tempo: "14 dias a Perm", obs: "Tentar burlar ou evitar um banimento aplicado." },
    { codigo: "ALERT2", nome: "Dano ao Servidor", palavras: ["alert2", "estabilidade", "derrubar", "economia"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Atos com intenção de causar danos significativos à economia ou estabilidade." },
    { codigo: "ALERT3", nome: "Cheats/Hacks", palavras: ["alert3", "cheater", "modificar arquivo", "software"], punicao: "Bloqueio permanente", tempo: "Permanente", obs: "Uso de software de terceiros para obter vantagens ou modificar dados." },
    { codigo: "ALERT4", nome: "Dano à Economia", palavras: ["alert4", "limite", "transferencia", "dinheiro"], punicao: "Remoção bens ou Ban", tempo: "até Permanente", obs: "Transferência de valores acima dos limites estabelecidos." },
    { codigo: "ALERT5", nome: "Difamação Externa", palavras: ["alert5", "discord oficial", "moral", "integridade"], punicao: "Banimento permanente", tempo: "Permanente", obs: "Atacar o projeto ou membros em canais externos (Discord, Redes)." },
    { codigo: "ALERT6", nome: "Divulgação de Terceiros", palavras: ["alert6", "propaganda", "outros jogos"], punicao: "Banimento", tempo: "1 dia a Perm", obs: "Promover ou fazer propaganda de serviços/jogos externos." },

    /* ================= 8. MÍDIA E 9. GANGUES ================= */
    { codigo: "MEDIA1", nome: "Stream Sniping", palavras: ["media1", "live", "streamer", "filmagem"], punicao: "Banimento", tempo: "1 hora a 24 horas", obs: "Assediar criador de conteúdo em live ou sabotar filmagem." },
    { codigo: "CLAN2", nome: "Bloqueio Entrada QG", palavras: ["clan2", "marcador qg", "entrada"], punicao: "Prisão", tempo: "30 minutos", obs: "Bloquear marcador de entrada dos QGs das gangues." },
    { codigo: "CLAN5", nome: "Abuso de Taser", palavras: ["clan5", "taser", "mais de duas"], punicao: "Prisão", tempo: "60 minutos", obs: "Uso do taser por mais de duas vezes na mesma ocasião pelo mesmo jogador." },
    { codigo: "CLAN5.1", nome: "Taser em Segurança", palavras: ["clan5.1", "taser policia", "taser exercito"], punicao: "Prisão", tempo: "90 minutos", obs: "Usar taser para retirar policial/militar do carro sem motivo RP." },
    { codigo: "CLAN6", nome: "Assassinato no QG", palavras: ["clan6", "matar qg", "entrada qg"], punicao: "Prisão", tempo: "40 minutos", obs: "Matar jogadores na entrada/saída ou atirar de dentro para fora." },
    { codigo: "CLAN8", nome: "Atividade Ilegal Área Verde", palavras: ["clan8", "assalto zona verde", "tiroteio safe"], punicao: "Prisão", tempo: "60 minutos", obs: "Atividade criminal nas áreas verdes (tiroteios, assaltos, sequestros)." },
    { codigo: "CLAN9", nome: "Taser Veículo Trabalho", palavras: ["clan9", "taser trabalho", "carro trampo"], punicao: "Prisão", tempo: "90 minutos", obs: "Uso de taser em jogadores dentro de veículos de trabalho." },
    { codigo: "CLAN10", nome: "Abuso de Moedas de Gangue", palavras: ["clan10", "bug moeda", "moeda gangue", "metodo desonesto"], punicao: "Exclusão da Gangue + Recolhimento de bens", tempo: "Imediato", obs: "Uso de bugs ou métodos desonestos para adquirir moedas da gangue." }
];
