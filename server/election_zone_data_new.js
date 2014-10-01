// To generate this file:
// 1. Download and unzip this: http://agencia.tse.jus.br/estatistica/sead/odsele/votacao_partido_munzona/votacao_partido_munzona_2012.zip
// 2. Run this in Ruby / irb:
//      zones = []; Dir['./*.txt'].each{ |file| CSV.foreach(file, encoding: 'ISO-8859-1:UTF-8', col_sep: ';') { |row| zones << {city: row[8], electionZone: row[9], stateCode: row[5] } } }
//      File.open('zones.js', 'w') { |file| file << 'newElectionZoneData = ' + JSON.pretty_generate(zones.uniq) + ';' }

newElectionZoneData = [
  {
    "city": "RIO BRANCO",
    "electionZone": "10",
    "stateCode": "AC"
  },
  {
    "city": "MANOEL URBANO",
    "electionZone": "3",
    "stateCode": "AC"
  },
  {
    "city": "PORTO ACRE",
    "electionZone": "10",
    "stateCode": "AC"
  },
  {
    "city": "CRUZEIRO DO SUL",
    "electionZone": "4",
    "stateCode": "AC"
  },
  {
    "city": "BUJARI",
    "electionZone": "9",
    "stateCode": "AC"
  },
  {
    "city": "SANTA ROSA DO PURUS",
    "electionZone": "3",
    "stateCode": "AC"
  },
  {
    "city": "MARECHAL THAUMATURGO",
    "electionZone": "4",
    "stateCode": "AC"
  },
  {
    "city": "RIO BRANCO",
    "electionZone": "9",
    "stateCode": "AC"
  },
  {
    "city": "BRASILÉIA",
    "electionZone": "6",
    "stateCode": "AC"
  },
  {
    "city": "ACRELÂNDIA",
    "electionZone": "8",
    "stateCode": "AC"
  },
  {
    "city": "ASSIS BRASIL",
    "electionZone": "6",
    "stateCode": "AC"
  },
  {
    "city": "PLÁCIDO DE CASTRO",
    "electionZone": "8",
    "stateCode": "AC"
  },
  {
    "city": "SENA MADUREIRA",
    "electionZone": "3",
    "stateCode": "AC"
  },
  {
    "city": "PORTO WALTER",
    "electionZone": "4",
    "stateCode": "AC"
  },
  {
    "city": "MÂNCIO LIMA",
    "electionZone": "4",
    "stateCode": "AC"
  },
  {
    "city": "FEIJÓ",
    "electionZone": "7",
    "stateCode": "AC"
  },
  {
    "city": "EPITACIOLÂNDIA",
    "electionZone": "6",
    "stateCode": "AC"
  },
  {
    "city": "RIO BRANCO",
    "electionZone": "1",
    "stateCode": "AC"
  },
  {
    "city": "JORDÃO",
    "electionZone": "5",
    "stateCode": "AC"
  },
  {
    "city": "RODRIGUES ALVES",
    "electionZone": "4",
    "stateCode": "AC"
  },
  {
    "city": "TARAUACÁ",
    "electionZone": "5",
    "stateCode": "AC"
  },
  {
    "city": "CAPIXABA",
    "electionZone": "8",
    "stateCode": "AC"
  },
  {
    "city": "SENADOR GUIOMARD",
    "electionZone": "8",
    "stateCode": "AC"
  },
  {
    "city": "XAPURI",
    "electionZone": "2",
    "stateCode": "AC"
  },
  {
    "city": "PARICONHA",
    "electionZone": "39",
    "stateCode": "AL"
  },
  {
    "city": "JACUÍPE",
    "electionZone": "14",
    "stateCode": "AL"
  },
  {
    "city": "LAGOA DA CANOA",
    "electionZone": "55",
    "stateCode": "AL"
  },
  {
    "city": "IGACI",
    "electionZone": "45",
    "stateCode": "AL"
  },
  {
    "city": "CAPELA",
    "electionZone": "23",
    "stateCode": "AL"
  },
  {
    "city": "CARNEIROS",
    "electionZone": "51",
    "stateCode": "AL"
  },
  {
    "city": "BARRA DE SÃO MIGUEL",
    "electionZone": "18",
    "stateCode": "AL"
  },
  {
    "city": "TANQUE D'ARCA",
    "electionZone": "4",
    "stateCode": "AL"
  },
  {
    "city": "IGREJA NOVA",
    "electionZone": "30",
    "stateCode": "AL"
  },
  {
    "city": "INHAPI",
    "electionZone": "27",
    "stateCode": "AL"
  },
  {
    "city": "CHÃ PRETA",
    "electionZone": "5",
    "stateCode": "AL"
  },
  {
    "city": "MINADOR DO NEGRÃO",
    "electionZone": "46",
    "stateCode": "AL"
  },
  {
    "city": "CACIMBINHAS",
    "electionZone": "46",
    "stateCode": "AL"
  },
  {
    "city": "JOAQUIM GOMES",
    "electionZone": "53",
    "stateCode": "AL"
  },
  {
    "city": "PORTO CALVO",
    "electionZone": "14",
    "stateCode": "AL"
  },
  {
    "city": "BRANQUINHA",
    "electionZone": "9",
    "stateCode": "AL"
  },
  {
    "city": "COITÉ DO NÓIA",
    "electionZone": "22",
    "stateCode": "AL"
  },
  {
    "city": "SÃO SEBASTIÃO",
    "electionZone": "49",
    "stateCode": "AL"
  },
  {
    "city": "TRAIPU",
    "electionZone": "20",
    "stateCode": "AL"
  },
  {
    "city": "JUNQUEIRO",
    "electionZone": "35",
    "stateCode": "AL"
  },
  {
    "city": "PIAÇABUÇU",
    "electionZone": "38",
    "stateCode": "AL"
  },
  {
    "city": "CAJUEIRO",
    "electionZone": "23",
    "stateCode": "AL"
  },
  {
    "city": "BELO MONTE",
    "electionZone": "29",
    "stateCode": "AL"
  },
  {
    "city": "IBATEGUARA",
    "electionZone": "16",
    "stateCode": "AL"
  },
  {
    "city": "MAJOR ISIDORO",
    "electionZone": "31",
    "stateCode": "AL"
  },
  {
    "city": "UNIÃO DOS PALMARES",
    "electionZone": "21",
    "stateCode": "AL"
  },
  {
    "city": "PAULO JACINTO",
    "electionZone": "41",
    "stateCode": "AL"
  },
  {
    "city": "OLIVENÇA",
    "electionZone": "19",
    "stateCode": "AL"
  },
  {
    "city": "FLEXEIRAS",
    "electionZone": "53",
    "stateCode": "AL"
  },
  {
    "city": "CAMPO ALEGRE",
    "electionZone": "47",
    "stateCode": "AL"
  },
  {
    "city": "SANTANA DO MUNDAÚ",
    "electionZone": "21",
    "stateCode": "AL"
  },
  {
    "city": "PENEDO",
    "electionZone": "13",
    "stateCode": "AL"
  },
  {
    "city": "MARECHAL DEODORO",
    "electionZone": "26",
    "stateCode": "AL"
  },
  {
    "city": "SANTA LUZIA DO NORTE",
    "electionZone": "15",
    "stateCode": "AL"
  },
  {
    "city": "SÃO MIGUEL DOS CAMPOS",
    "electionZone": "18",
    "stateCode": "AL"
  },
  {
    "city": "PINDOBA",
    "electionZone": "43",
    "stateCode": "AL"
  },
  {
    "city": "OLHO D'ÁGUA DAS FLORES",
    "electionZone": "42",
    "stateCode": "AL"
  },
  {
    "city": "SÃO JOSÉ DA TAPERA",
    "electionZone": "51",
    "stateCode": "AL"
  },
  {
    "city": "COQUEIRO SECO",
    "electionZone": "15",
    "stateCode": "AL"
  },
  {
    "city": "POÇO DAS TRINCHEIRAS",
    "electionZone": "50",
    "stateCode": "AL"
  },
  {
    "city": "FEIRA GRANDE",
    "electionZone": "55",
    "stateCode": "AL"
  },
  {
    "city": "MARAGOGI",
    "electionZone": "25",
    "stateCode": "AL"
  },
  {
    "city": "PÃO DE AÇÚCAR",
    "electionZone": "11",
    "stateCode": "AL"
  },
  {
    "city": "OLHO D'ÁGUA DO CASADO",
    "electionZone": "32",
    "stateCode": "AL"
  },
  {
    "city": "JUNDIÁ",
    "electionZone": "14",
    "stateCode": "AL"
  },
  {
    "city": "BOCA DA MATA",
    "electionZone": "48",
    "stateCode": "AL"
  },
  {
    "city": "SÃO LUÍS DO QUITUNDE",
    "electionZone": "17",
    "stateCode": "AL"
  },
  {
    "city": "RIO LARGO",
    "electionZone": "15",
    "stateCode": "AL"
  },
  {
    "city": "OURO BRANCO",
    "electionZone": "50",
    "stateCode": "AL"
  },
  {
    "city": "ARAPIRACA",
    "electionZone": "55",
    "stateCode": "AL"
  },
  {
    "city": "MESSIAS",
    "electionZone": "9",
    "stateCode": "AL"
  },
  {
    "city": "BATALHA",
    "electionZone": "29",
    "stateCode": "AL"
  },
  {
    "city": "DOIS RIACHOS",
    "electionZone": "46",
    "stateCode": "AL"
  },
  {
    "city": "ÁGUA BRANCA",
    "electionZone": "39",
    "stateCode": "AL"
  },
  {
    "city": "SÃO JOSÉ DA LAJE",
    "electionZone": "16",
    "stateCode": "AL"
  },
  {
    "city": "PIRANHAS",
    "electionZone": "32",
    "stateCode": "AL"
  },
  {
    "city": "DELMIRO GOUVEIA",
    "electionZone": "40",
    "stateCode": "AL"
  },
  {
    "city": "MACEIÓ",
    "electionZone": "1",
    "stateCode": "AL"
  },
  {
    "city": "MACEIÓ",
    "electionZone": "2",
    "stateCode": "AL"
  },
  {
    "city": "SANTANA DO IPANEMA",
    "electionZone": "19",
    "stateCode": "AL"
  },
  {
    "city": "ARAPIRACA",
    "electionZone": "22",
    "stateCode": "AL"
  },
  {
    "city": "MACEIÓ",
    "electionZone": "3",
    "stateCode": "AL"
  },
  {
    "city": "MAR VERMELHO",
    "electionZone": "5",
    "stateCode": "AL"
  },
  {
    "city": "MACEIÓ",
    "electionZone": "54",
    "stateCode": "AL"
  },
  {
    "city": "BARRA DE SANTO ANTÔNIO",
    "electionZone": "17",
    "stateCode": "AL"
  },
  {
    "city": "PORTO REAL DO COLÉGIO",
    "electionZone": "37",
    "stateCode": "AL"
  },
  {
    "city": "JARAMATAIA",
    "electionZone": "31",
    "stateCode": "AL"
  },
  {
    "city": "TAQUARANA",
    "electionZone": "43",
    "stateCode": "AL"
  },
  {
    "city": "CANAPI",
    "electionZone": "27",
    "stateCode": "AL"
  },
  {
    "city": "MATRIZ DE CAMARAGIBE",
    "electionZone": "52",
    "stateCode": "AL"
  },
  {
    "city": "TEOTÔNIO VILELA",
    "electionZone": "35",
    "stateCode": "AL"
  },
  {
    "city": "PASSO DE CAMARAGIBE",
    "electionZone": "12",
    "stateCode": "AL"
  },
  {
    "city": "CRAÍBAS",
    "electionZone": "22",
    "stateCode": "AL"
  },
  {
    "city": "COLÔNIA LEOPOLDINA",
    "electionZone": "24",
    "stateCode": "AL"
  },
  {
    "city": "MARIBONDO",
    "electionZone": "43",
    "stateCode": "AL"
  },
  {
    "city": "SÃO BRÁS",
    "electionZone": "34",
    "stateCode": "AL"
  },
  {
    "city": "MONTEIRÓPOLIS",
    "electionZone": "42",
    "stateCode": "AL"
  },
  {
    "city": "ROTEIRO",
    "electionZone": "18",
    "stateCode": "AL"
  },
  {
    "city": "VIÇOSA",
    "electionZone": "5",
    "stateCode": "AL"
  },
  {
    "city": "PILAR",
    "electionZone": "8",
    "stateCode": "AL"
  },
  {
    "city": "SÃO MIGUEL DOS MILAGRES",
    "electionZone": "33",
    "stateCode": "AL"
  },
  {
    "city": "SENADOR RUI PALMEIRA",
    "electionZone": "51",
    "stateCode": "AL"
  },
  {
    "city": "JEQUIÁ DA PRAIA",
    "electionZone": "18",
    "stateCode": "AL"
  },
  {
    "city": "SATUBA",
    "electionZone": "15",
    "stateCode": "AL"
  },
  {
    "city": "QUEBRANGULO",
    "electionZone": "28",
    "stateCode": "AL"
  },
  {
    "city": "CAMPESTRE",
    "electionZone": "14",
    "stateCode": "AL"
  },
  {
    "city": "PALESTINA",
    "electionZone": "11",
    "stateCode": "AL"
  },
  {
    "city": "CORURIPE",
    "electionZone": "7",
    "stateCode": "AL"
  },
  {
    "city": "NOVO LINO",
    "electionZone": "24",
    "stateCode": "AL"
  },
  {
    "city": "PALMEIRA DOS ÍNDIOS",
    "electionZone": "10",
    "stateCode": "AL"
  },
  {
    "city": "MURICI",
    "electionZone": "9",
    "stateCode": "AL"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "44",
    "stateCode": "AL"
  },
  {
    "city": "GIRAU DO PONCIANO",
    "electionZone": "44",
    "stateCode": "AL"
  },
  {
    "city": "PORTO DE PEDRAS",
    "electionZone": "33",
    "stateCode": "AL"
  },
  {
    "city": "MATA GRANDE",
    "electionZone": "27",
    "stateCode": "AL"
  },
  {
    "city": "MARAVILHA",
    "electionZone": "50",
    "stateCode": "AL"
  },
  {
    "city": "PARIPUEIRA",
    "electionZone": "17",
    "stateCode": "AL"
  },
  {
    "city": "ANADIA",
    "electionZone": "4",
    "stateCode": "AL"
  },
  {
    "city": "JACARÉ DOS HOMENS",
    "electionZone": "29",
    "stateCode": "AL"
  },
  {
    "city": "ESTRELA DE ALAGOAS",
    "electionZone": "10",
    "stateCode": "AL"
  },
  {
    "city": "ATALAIA",
    "electionZone": "6",
    "stateCode": "AL"
  },
  {
    "city": "LIMOEIRO DE ANADIA",
    "electionZone": "36",
    "stateCode": "AL"
  },
  {
    "city": "BELÉM",
    "electionZone": "10",
    "stateCode": "AL"
  },
  {
    "city": "FELIZ DESERTO",
    "electionZone": "38",
    "stateCode": "AL"
  },
  {
    "city": "OLHO D'ÁGUA GRANDE",
    "electionZone": "34",
    "stateCode": "AL"
  },
  {
    "city": "JAPARATINGA",
    "electionZone": "25",
    "stateCode": "AL"
  },
  {
    "city": "NHAMUNDÁ",
    "electionZone": "43",
    "stateCode": "AM"
  },
  {
    "city": "CANUTAMA",
    "electionZone": "13",
    "stateCode": "AM"
  },
  {
    "city": "MANAQUIRI",
    "electionZone": "66",
    "stateCode": "AM"
  },
  {
    "city": "TABATINGA",
    "electionZone": "36",
    "stateCode": "AM"
  },
  {
    "city": "EIRUNEPÉ",
    "electionZone": "11",
    "stateCode": "AM"
  },
  {
    "city": "CARAUARI",
    "electionZone": "21",
    "stateCode": "AM"
  },
  {
    "city": "ATALAIA DO NORTE",
    "electionZone": "42",
    "stateCode": "AM"
  },
  {
    "city": "ITAPIRANGA",
    "electionZone": "24",
    "stateCode": "AM"
  },
  {
    "city": "CAREIRO",
    "electionZone": "23",
    "stateCode": "AM"
  },
  {
    "city": "JUTAÍ",
    "electionZone": "41",
    "stateCode": "AM"
  },
  {
    "city": "SÃO PAULO DE OLIVENÇA",
    "electionZone": "22",
    "stateCode": "AM"
  },
  {
    "city": "BOA VISTA DO RAMOS",
    "electionZone": "64",
    "stateCode": "AM"
  },
  {
    "city": "URUCARÁ",
    "electionZone": "27",
    "stateCode": "AM"
  },
  {
    "city": "HUMAITÁ",
    "electionZone": "17",
    "stateCode": "AM"
  },
  {
    "city": "SÃO GABRIEL DA CACHOEIRA",
    "electionZone": "19",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "62",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "40",
    "stateCode": "AM"
  },
  {
    "city": "SILVES",
    "electionZone": "39",
    "stateCode": "AM"
  },
  {
    "city": "APUÍ",
    "electionZone": "67",
    "stateCode": "AM"
  },
  {
    "city": "MARAÃ",
    "electionZone": "49",
    "stateCode": "AM"
  },
  {
    "city": "SÃO SEBASTIÃO DO UATUMÃ",
    "electionZone": "57",
    "stateCode": "AM"
  },
  {
    "city": "IRANDUBA",
    "electionZone": "56",
    "stateCode": "AM"
  },
  {
    "city": "BARCELOS",
    "electionZone": "18",
    "stateCode": "AM"
  },
  {
    "city": "AMATURÁ",
    "electionZone": "22",
    "stateCode": "AM"
  },
  {
    "city": "ITAMARATI",
    "electionZone": "69",
    "stateCode": "AM"
  },
  {
    "city": "TEFÉ",
    "electionZone": "9",
    "stateCode": "AM"
  },
  {
    "city": "MAUÉS",
    "electionZone": "5",
    "stateCode": "AM"
  },
  {
    "city": "ANAMÃ",
    "electionZone": "53",
    "stateCode": "AM"
  },
  {
    "city": "SANTO ANTÔNIO DO IÇÁ",
    "electionZone": "47",
    "stateCode": "AM"
  },
  {
    "city": "ANORI",
    "electionZone": "33",
    "stateCode": "AM"
  },
  {
    "city": "TAPAUÁ",
    "electionZone": "38",
    "stateCode": "AM"
  },
  {
    "city": "MANACAPURU",
    "electionZone": "6",
    "stateCode": "AM"
  },
  {
    "city": "URUCURITUBA",
    "electionZone": "25",
    "stateCode": "AM"
  },
  {
    "city": "UARINI",
    "electionZone": "9",
    "stateCode": "AM"
  },
  {
    "city": "RIO PRETO DA EVA",
    "electionZone": "52",
    "stateCode": "AM"
  },
  {
    "city": "BENJAMIN CONSTANT",
    "electionZone": "20",
    "stateCode": "AM"
  },
  {
    "city": "LÁBREA",
    "electionZone": "12",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "68",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "70",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "32",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "31",
    "stateCode": "AM"
  },
  {
    "city": "SANTA ISABEL DO RIO NEGRO",
    "electionZone": "30",
    "stateCode": "AM"
  },
  {
    "city": "BARREIRINHA",
    "electionZone": "26",
    "stateCode": "AM"
  },
  {
    "city": "BORBA",
    "electionZone": "15",
    "stateCode": "AM"
  },
  {
    "city": "CODAJÁS",
    "electionZone": "7",
    "stateCode": "AM"
  },
  {
    "city": "NOVA OLINDA DO NORTE",
    "electionZone": "28",
    "stateCode": "AM"
  },
  {
    "city": "ENVIRA",
    "electionZone": "46",
    "stateCode": "AM"
  },
  {
    "city": "JURUÁ",
    "electionZone": "50",
    "stateCode": "AM"
  },
  {
    "city": "GUAJARÁ",
    "electionZone": "45",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "59",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "63",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "37",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "65",
    "stateCode": "AM"
  },
  {
    "city": "FONTE BOA",
    "electionZone": "10",
    "stateCode": "AM"
  },
  {
    "city": "TONANTINS",
    "electionZone": "47",
    "stateCode": "AM"
  },
  {
    "city": "ITACOATIARA",
    "electionZone": "3",
    "stateCode": "AM"
  },
  {
    "city": "AUTAZES",
    "electionZone": "35",
    "stateCode": "AM"
  },
  {
    "city": "PAUINI",
    "electionZone": "44",
    "stateCode": "AM"
  },
  {
    "city": "BOCA DO ACRE",
    "electionZone": "14",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "2",
    "stateCode": "AM"
  },
  {
    "city": "PARINTINS",
    "electionZone": "4",
    "stateCode": "AM"
  },
  {
    "city": "NOVO AIRÃO",
    "electionZone": "34",
    "stateCode": "AM"
  },
  {
    "city": "ALVARÃES",
    "electionZone": "60",
    "stateCode": "AM"
  },
  {
    "city": "NOVO ARIPUANÃ",
    "electionZone": "29",
    "stateCode": "AM"
  },
  {
    "city": "PRESIDENTE FIGUEIREDO",
    "electionZone": "51",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "58",
    "stateCode": "AM"
  },
  {
    "city": "MANAUS",
    "electionZone": "1",
    "stateCode": "AM"
  },
  {
    "city": "COARI",
    "electionZone": "8",
    "stateCode": "AM"
  },
  {
    "city": "JAPURÁ",
    "electionZone": "48",
    "stateCode": "AM"
  },
  {
    "city": "IPIXUNA",
    "electionZone": "45",
    "stateCode": "AM"
  },
  {
    "city": "MANICORÉ",
    "electionZone": "16",
    "stateCode": "AM"
  },
  {
    "city": "CAAPIRANGA",
    "electionZone": "55",
    "stateCode": "AM"
  },
  {
    "city": "CAREIRO DA VÁRZEA",
    "electionZone": "61",
    "stateCode": "AM"
  },
  {
    "city": "BERURI",
    "electionZone": "54",
    "stateCode": "AM"
  },
  {
    "city": "VITÓRIA DO JARI",
    "electionZone": "13",
    "stateCode": "AP"
  },
  {
    "city": "FERREIRA GOMES",
    "electionZone": "9",
    "stateCode": "AP"
  },
  {
    "city": "MACAPÁ",
    "electionZone": "10",
    "stateCode": "AP"
  },
  {
    "city": "TARTARUGALZINHO",
    "electionZone": "8",
    "stateCode": "AP"
  },
  {
    "city": "MACAPÁ",
    "electionZone": "2",
    "stateCode": "AP"
  },
  {
    "city": "OIAPOQUE",
    "electionZone": "4",
    "stateCode": "AP"
  },
  {
    "city": "SANTANA",
    "electionZone": "6",
    "stateCode": "AP"
  },
  {
    "city": "SERRA DO NAVIO",
    "electionZone": "11",
    "stateCode": "AP"
  },
  {
    "city": "PORTO GRANDE",
    "electionZone": "12",
    "stateCode": "AP"
  },
  {
    "city": "MAZAGÃO",
    "electionZone": "5",
    "stateCode": "AP"
  },
  {
    "city": "CALÇOENE",
    "electionZone": "3",
    "stateCode": "AP"
  },
  {
    "city": "ÁGUA BRANCA DO AMAPARI",
    "electionZone": "11",
    "stateCode": "AP"
  },
  {
    "city": "ITAUBAL",
    "electionZone": "10",
    "stateCode": "AP"
  },
  {
    "city": "CUTIAS",
    "electionZone": "10",
    "stateCode": "AP"
  },
  {
    "city": "PRACUÚBA",
    "electionZone": "1",
    "stateCode": "AP"
  },
  {
    "city": "LARANJAL DO JARI",
    "electionZone": "7",
    "stateCode": "AP"
  },
  {
    "city": "AMAPÁ",
    "electionZone": "1",
    "stateCode": "AP"
  },
  {
    "city": "WANDERLEY",
    "electionZone": "98",
    "stateCode": "BA"
  },
  {
    "city": "CAPIM GROSSO",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "RIO REAL",
    "electionZone": "49",
    "stateCode": "BA"
  },
  {
    "city": "JUSSARA",
    "electionZone": "159",
    "stateCode": "BA"
  },
  {
    "city": "NOVO TRIUNFO",
    "electionZone": "82",
    "stateCode": "BA"
  },
  {
    "city": "RIO DO ANTÔNIO",
    "electionZone": "93",
    "stateCode": "BA"
  },
  {
    "city": "ARATACA",
    "electionZone": "166",
    "stateCode": "BA"
  },
  {
    "city": "UMBURANAS",
    "electionZone": "167",
    "stateCode": "BA"
  },
  {
    "city": "MILAGRES",
    "electionZone": "193",
    "stateCode": "BA"
  },
  {
    "city": "ANGICAL",
    "electionZone": "126",
    "stateCode": "BA"
  },
  {
    "city": "SANTANÓPOLIS",
    "electionZone": "74",
    "stateCode": "BA"
  },
  {
    "city": "BARRO ALTO",
    "electionZone": "174",
    "stateCode": "BA"
  },
  {
    "city": "MANOEL VITORINO",
    "electionZone": "22",
    "stateCode": "BA"
  },
  {
    "city": "ITAMARI",
    "electionZone": "151",
    "stateCode": "BA"
  },
  {
    "city": "MONTE SANTO",
    "electionZone": "50",
    "stateCode": "BA"
  },
  {
    "city": "BOTUPORÃ",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "LUÍS EDUARDO MAGALHÃES",
    "electionZone": "205",
    "stateCode": "BA"
  },
  {
    "city": "CATURAMA",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "SANTA RITA DE CÁSSIA",
    "electionZone": "97",
    "stateCode": "BA"
  },
  {
    "city": "QUEIMADAS",
    "electionZone": "106",
    "stateCode": "BA"
  },
  {
    "city": "UIBAÍ",
    "electionZone": "159",
    "stateCode": "BA"
  },
  {
    "city": "RIBEIRÃO DO LARGO",
    "electionZone": "152",
    "stateCode": "BA"
  },
  {
    "city": "CONCEIÇÃO DA FEIRA",
    "electionZone": "108",
    "stateCode": "BA"
  },
  {
    "city": "IPIAÚ",
    "electionZone": "24",
    "stateCode": "BA"
  },
  {
    "city": "PLANALTINO",
    "electionZone": "37",
    "stateCode": "BA"
  },
  {
    "city": "SOBRADINHO",
    "electionZone": "66",
    "stateCode": "BA"
  },
  {
    "city": "GENTIO DO OURO",
    "electionZone": "197",
    "stateCode": "BA"
  },
  {
    "city": "MACARANI",
    "electionZone": "91",
    "stateCode": "BA"
  },
  {
    "city": "CENTRAL",
    "electionZone": "159",
    "stateCode": "BA"
  },
  {
    "city": "CAFARNAUM",
    "electionZone": "55",
    "stateCode": "BA"
  },
  {
    "city": "MALHADA DE PEDRAS",
    "electionZone": "90",
    "stateCode": "BA"
  },
  {
    "city": "ALMADINA",
    "electionZone": "135",
    "stateCode": "BA"
  },
  {
    "city": "VERA CRUZ",
    "electionZone": "141",
    "stateCode": "BA"
  },
  {
    "city": "ITARANTIM",
    "electionZone": "91",
    "stateCode": "BA"
  },
  {
    "city": "IRAQUARA",
    "electionZone": "88",
    "stateCode": "BA"
  },
  {
    "city": "LIVRAMENTO DE NOSSA SENHORA",
    "electionZone": "101",
    "stateCode": "BA"
  },
  {
    "city": "SÃO JOSÉ DO JACUÍPE",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "ADUSTINA",
    "electionZone": "52",
    "stateCode": "BA"
  },
  {
    "city": "BAIXA GRANDE",
    "electionZone": "86",
    "stateCode": "BA"
  },
  {
    "city": "VEREDA",
    "electionZone": "148",
    "stateCode": "BA"
  },
  {
    "city": "ITAPÉ",
    "electionZone": "27",
    "stateCode": "BA"
  },
  {
    "city": "GUAJERU",
    "electionZone": "93",
    "stateCode": "BA"
  },
  {
    "city": "TANQUINHO",
    "electionZone": "156",
    "stateCode": "BA"
  },
  {
    "city": "MULUNGU DO MORRO",
    "electionZone": "55",
    "stateCode": "BA"
  },
  {
    "city": "MORPARÁ",
    "electionZone": "173",
    "stateCode": "BA"
  },
  {
    "city": "CAIRU",
    "electionZone": "31",
    "stateCode": "BA"
  },
  {
    "city": "SAPEAÇU",
    "electionZone": "184",
    "stateCode": "BA"
  },
  {
    "city": "TREMEDAL",
    "electionZone": "177",
    "stateCode": "BA"
  },
  {
    "city": "IBITITÁ",
    "electionZone": "176",
    "stateCode": "BA"
  },
  {
    "city": "MAIQUINIQUE",
    "electionZone": "91",
    "stateCode": "BA"
  },
  {
    "city": "IRECÊ",
    "electionZone": "95",
    "stateCode": "BA"
  },
  {
    "city": "SÃO JOSÉ DA VITÓRIA",
    "electionZone": "166",
    "stateCode": "BA"
  },
  {
    "city": "MIRANTE",
    "electionZone": "59",
    "stateCode": "BA"
  },
  {
    "city": "SÃO SEBASTIÃO DO PASSÉ",
    "electionZone": "128",
    "stateCode": "BA"
  },
  {
    "city": "BARRA DO ROCHA",
    "electionZone": "24",
    "stateCode": "BA"
  },
  {
    "city": "ARACATU",
    "electionZone": "90",
    "stateCode": "BA"
  },
  {
    "city": "LAMARÃO",
    "electionZone": "160",
    "stateCode": "BA"
  },
  {
    "city": "SANTA BÁRBARA",
    "electionZone": "160",
    "stateCode": "BA"
  },
  {
    "city": "ELÍSIO MEDRADO",
    "electionZone": "107",
    "stateCode": "BA"
  },
  {
    "city": "FEIRA DE SANTANA",
    "electionZone": "157",
    "stateCode": "BA"
  },
  {
    "city": "MACAJUBA",
    "electionZone": "87",
    "stateCode": "BA"
  },
  {
    "city": "SAÚDE",
    "electionZone": "115",
    "stateCode": "BA"
  },
  {
    "city": "BARRA DO MENDES",
    "electionZone": "176",
    "stateCode": "BA"
  },
  {
    "city": "IBOTIRAMA",
    "electionZone": "173",
    "stateCode": "BA"
  },
  {
    "city": "PARAMIRIM",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "MARAGOGIPE",
    "electionZone": "57",
    "stateCode": "BA"
  },
  {
    "city": "VALENTE",
    "electionZone": "120",
    "stateCode": "BA"
  },
  {
    "city": "MORRO DO CHAPÉU",
    "electionZone": "55",
    "stateCode": "BA"
  },
  {
    "city": "URUÇUCA",
    "electionZone": "198",
    "stateCode": "BA"
  },
  {
    "city": "JAGUARIPE",
    "electionZone": "30",
    "stateCode": "BA"
  },
  {
    "city": "PÉ DE SERRA",
    "electionZone": "114",
    "stateCode": "BA"
  },
  {
    "city": "PARATINGA",
    "electionZone": "173",
    "stateCode": "BA"
  },
  {
    "city": "NOVA ITARANA",
    "electionZone": "36",
    "stateCode": "BA"
  },
  {
    "city": "JUSSIAPE",
    "electionZone": "101",
    "stateCode": "BA"
  },
  {
    "city": "IGUAÍ",
    "electionZone": "146",
    "stateCode": "BA"
  },
  {
    "city": "FORMOSA DO RIO PRETO",
    "electionZone": "187",
    "stateCode": "BA"
  },
  {
    "city": "BONINAL",
    "electionZone": "105",
    "stateCode": "BA"
  },
  {
    "city": "BRUMADO",
    "electionZone": "90",
    "stateCode": "BA"
  },
  {
    "city": "MATINA",
    "electionZone": "113",
    "stateCode": "BA"
  },
  {
    "city": "NOVA CANAÃ",
    "electionZone": "146",
    "stateCode": "BA"
  },
  {
    "city": "ITABUNA",
    "electionZone": "27",
    "stateCode": "BA"
  },
  {
    "city": "ANAGÉ",
    "electionZone": "161",
    "stateCode": "BA"
  },
  {
    "city": "ICHU",
    "electionZone": "114",
    "stateCode": "BA"
  },
  {
    "city": "ITABUNA",
    "electionZone": "28",
    "stateCode": "BA"
  },
  {
    "city": "ITUBERÁ",
    "electionZone": "32",
    "stateCode": "BA"
  },
  {
    "city": "ÉRICO CARDOSO",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "ITANHÉM",
    "electionZone": "148",
    "stateCode": "BA"
  },
  {
    "city": "JUSSARI",
    "electionZone": "27",
    "stateCode": "BA"
  },
  {
    "city": "LAFAIETE COUTINHO",
    "electionZone": "37",
    "stateCode": "BA"
  },
  {
    "city": "SALINAS DA MARGARIDA",
    "electionZone": "30",
    "stateCode": "BA"
  },
  {
    "city": "CAPELA DO ALTO ALEGRE",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "CÍCERO DANTAS",
    "electionZone": "82",
    "stateCode": "BA"
  },
  {
    "city": "PEDRO ALEXANDRE",
    "electionZone": "51",
    "stateCode": "BA"
  },
  {
    "city": "ALAGOINHAS",
    "electionZone": "164",
    "stateCode": "BA"
  },
  {
    "city": "ITIRUÇU",
    "electionZone": "37",
    "stateCode": "BA"
  },
  {
    "city": "NILO PEÇANHA",
    "electionZone": "32",
    "stateCode": "BA"
  },
  {
    "city": "LENÇÓIS",
    "electionZone": "204",
    "stateCode": "BA"
  },
  {
    "city": "POTIRAGUÁ",
    "electionZone": "91",
    "stateCode": "BA"
  },
  {
    "city": "PALMEIRAS",
    "electionZone": "89",
    "stateCode": "BA"
  },
  {
    "city": "NOVA FÁTIMA",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "MANSIDÃO",
    "electionZone": "97",
    "stateCode": "BA"
  },
  {
    "city": "MALHADA",
    "electionZone": "125",
    "stateCode": "BA"
  },
  {
    "city": "IPUPIARA",
    "electionZone": "94",
    "stateCode": "BA"
  },
  {
    "city": "ARACI",
    "electionZone": "123",
    "stateCode": "BA"
  },
  {
    "city": "PRESIDENTE DUTRA",
    "electionZone": "159",
    "stateCode": "BA"
  },
  {
    "city": "IBIRAPUÃ",
    "electionZone": "153",
    "stateCode": "BA"
  },
  {
    "city": "ABAÍRA",
    "electionZone": "105",
    "stateCode": "BA"
  },
  {
    "city": "CONDE",
    "electionZone": "21",
    "stateCode": "BA"
  },
  {
    "city": "CAATIBA",
    "electionZone": "139",
    "stateCode": "BA"
  },
  {
    "city": "CANSANÇÃO",
    "electionZone": "50",
    "stateCode": "BA"
  },
  {
    "city": "FEIRA DE SANTANA",
    "electionZone": "154",
    "stateCode": "BA"
  },
  {
    "city": "RIACHÃO DAS NEVES",
    "electionZone": "182",
    "stateCode": "BA"
  },
  {
    "city": "LICÍNIO DE ALMEIDA",
    "electionZone": "93",
    "stateCode": "BA"
  },
  {
    "city": "MARACÁS",
    "electionZone": "37",
    "stateCode": "BA"
  },
  {
    "city": "RIO DO PIRES",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "IAÇU",
    "electionZone": "193",
    "stateCode": "BA"
  },
  {
    "city": "MEDEIROS NETO",
    "electionZone": "153",
    "stateCode": "BA"
  },
  {
    "city": "MARCIONÍLIO SOUZA",
    "electionZone": "193",
    "stateCode": "BA"
  },
  {
    "city": "PRESIDENTE JÂNIO QUADROS",
    "electionZone": "60",
    "stateCode": "BA"
  },
  {
    "city": "QUIXABEIRA",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "ANTÔNIO GONÇALVES",
    "electionZone": "53",
    "stateCode": "BA"
  },
  {
    "city": "TANHAÇU",
    "electionZone": "196",
    "stateCode": "BA"
  },
  {
    "city": "SENHOR DO BONFIM",
    "electionZone": "45",
    "stateCode": "BA"
  },
  {
    "city": "BAIANÓPOLIS",
    "electionZone": "98",
    "stateCode": "BA"
  },
  {
    "city": "AMÉRICA DOURADA",
    "electionZone": "199",
    "stateCode": "BA"
  },
  {
    "city": "BROTAS DE MACAÚBAS",
    "electionZone": "94",
    "stateCode": "BA"
  },
  {
    "city": "IBITIARA",
    "electionZone": "121",
    "stateCode": "BA"
  },
  {
    "city": "URANDI",
    "electionZone": "117",
    "stateCode": "BA"
  },
  {
    "city": "SÃO FÉLIX DO CORIBE",
    "electionZone": "72",
    "stateCode": "BA"
  },
  {
    "city": "JAGUARARI",
    "electionZone": "179",
    "stateCode": "BA"
  },
  {
    "city": "SÃO GONÇALO DOS CAMPOS",
    "electionZone": "108",
    "stateCode": "BA"
  },
  {
    "city": "UNA",
    "electionZone": "116",
    "stateCode": "BA"
  },
  {
    "city": "SANTA BRÍGIDA",
    "electionZone": "84",
    "stateCode": "BA"
  },
  {
    "city": "TEODORO SAMPAIO",
    "electionZone": "192",
    "stateCode": "BA"
  },
  {
    "city": "IBIASSUCÊ",
    "electionZone": "93",
    "stateCode": "BA"
  },
  {
    "city": "VARZEDO",
    "electionZone": "56",
    "stateCode": "BA"
  },
  {
    "city": "AMÉLIA RODRIGUES",
    "electionZone": "128",
    "stateCode": "BA"
  },
  {
    "city": "LAURO DE FREITAS",
    "electionZone": "180",
    "stateCode": "BA"
  },
  {
    "city": "IPECAETÁ",
    "electionZone": "143",
    "stateCode": "BA"
  },
  {
    "city": "RUY BARBOSA",
    "electionZone": "87",
    "stateCode": "BA"
  },
  {
    "city": "VITÓRIA DA CONQUISTA",
    "electionZone": "40",
    "stateCode": "BA"
  },
  {
    "city": "VITÓRIA DA CONQUISTA",
    "electionZone": "41",
    "stateCode": "BA"
  },
  {
    "city": "BARRO PRETO",
    "electionZone": "136",
    "stateCode": "BA"
  },
  {
    "city": "SAUBARA",
    "electionZone": "178",
    "stateCode": "BA"
  },
  {
    "city": "SÃO MIGUEL DAS MATAS",
    "electionZone": "36",
    "stateCode": "BA"
  },
  {
    "city": "RIACHÃO DO JACUÍPE",
    "electionZone": "114",
    "stateCode": "BA"
  },
  {
    "city": "TANQUE NOVO",
    "electionZone": "111",
    "stateCode": "BA"
  },
  {
    "city": "FEIRA DE SANTANA",
    "electionZone": "155",
    "stateCode": "BA"
  },
  {
    "city": "FEIRA DE SANTANA",
    "electionZone": "156",
    "stateCode": "BA"
  },
  {
    "city": "CANDEAL",
    "electionZone": "114",
    "stateCode": "BA"
  },
  {
    "city": "BANZAÊ",
    "electionZone": "110",
    "stateCode": "BA"
  },
  {
    "city": "ALAGOINHAS",
    "electionZone": "163",
    "stateCode": "BA"
  },
  {
    "city": "SANTA TEREZINHA",
    "electionZone": "107",
    "stateCode": "BA"
  },
  {
    "city": "LAJEDO DO TABOCAL",
    "electionZone": "37",
    "stateCode": "BA"
  },
  {
    "city": "MUCUGÊ",
    "electionZone": "119",
    "stateCode": "BA"
  },
  {
    "city": "SÃO DESIDÉRIO",
    "electionZone": "100",
    "stateCode": "BA"
  },
  {
    "city": "VALENÇA",
    "electionZone": "31",
    "stateCode": "BA"
  },
  {
    "city": "JEQUIÉ",
    "electionZone": "23",
    "stateCode": "BA"
  },
  {
    "city": "PRESIDENTE TANCREDO NEVES",
    "electionZone": "31",
    "stateCode": "BA"
  },
  {
    "city": "BREJÕES",
    "electionZone": "36",
    "stateCode": "BA"
  },
  {
    "city": "TEOFILÂNDIA",
    "electionZone": "123",
    "stateCode": "BA"
  },
  {
    "city": "PARIPIRANGA",
    "electionZone": "52",
    "stateCode": "BA"
  },
  {
    "city": "CONDEÚBA",
    "electionZone": "60",
    "stateCode": "BA"
  },
  {
    "city": "PAULO AFONSO",
    "electionZone": "84",
    "stateCode": "BA"
  },
  {
    "city": "HELIÓPOLIS",
    "electionZone": "82",
    "stateCode": "BA"
  },
  {
    "city": "CONTENDAS DO SINCORÁ",
    "electionZone": "196",
    "stateCode": "BA"
  },
  {
    "city": "CONCEIÇÃO DO COITÉ",
    "electionZone": "132",
    "stateCode": "BA"
  },
  {
    "city": "CAMPO FORMOSO",
    "electionZone": "53",
    "stateCode": "BA"
  },
  {
    "city": "GLÓRIA",
    "electionZone": "84",
    "stateCode": "BA"
  },
  {
    "city": "ABARÉ",
    "electionZone": "158",
    "stateCode": "BA"
  },
  {
    "city": "ITAPARICA",
    "electionZone": "141",
    "stateCode": "BA"
  },
  {
    "city": "AIQUARA",
    "electionZone": "147",
    "stateCode": "BA"
  },
  {
    "city": "SERRINHA",
    "electionZone": "150",
    "stateCode": "BA"
  },
  {
    "city": "CASA NOVA",
    "electionZone": "66",
    "stateCode": "BA"
  },
  {
    "city": "CHORROCHÓ",
    "electionZone": "158",
    "stateCode": "BA"
  },
  {
    "city": "ITAGUAÇU DA BAHIA",
    "electionZone": "68",
    "stateCode": "BA"
  },
  {
    "city": "TAPIRAMUTÁ",
    "electionZone": "54",
    "stateCode": "BA"
  },
  {
    "city": "JOÃO DOURADO",
    "electionZone": "199",
    "stateCode": "BA"
  },
  {
    "city": "CRUZ DAS ALMAS",
    "electionZone": "142",
    "stateCode": "BA"
  },
  {
    "city": "ITATIM",
    "electionZone": "107",
    "stateCode": "BA"
  },
  {
    "city": "TUCANO",
    "electionZone": "80",
    "stateCode": "BA"
  },
  {
    "city": "ITAPETINGA",
    "electionZone": "140",
    "stateCode": "BA"
  },
  {
    "city": "CRISÓPOLIS",
    "electionZone": "81",
    "stateCode": "BA"
  },
  {
    "city": "IBIRATAIA",
    "electionZone": "24",
    "stateCode": "BA"
  },
  {
    "city": "CARDEAL DA SILVA",
    "electionZone": "144",
    "stateCode": "BA"
  },
  {
    "city": "IBICUÍ",
    "electionZone": "146",
    "stateCode": "BA"
  },
  {
    "city": "RIACHO DE SANTANA",
    "electionZone": "113",
    "stateCode": "BA"
  },
  {
    "city": "SANTO ESTEVÃO",
    "electionZone": "143",
    "stateCode": "BA"
  },
  {
    "city": "SÃO GABRIEL",
    "electionZone": "95",
    "stateCode": "BA"
  },
  {
    "city": "XIQUE-XIQUE",
    "electionZone": "68",
    "stateCode": "BA"
  },
  {
    "city": "SANTO AMARO",
    "electionZone": "178",
    "stateCode": "BA"
  },
  {
    "city": "CARAVELAS",
    "electionZone": "202",
    "stateCode": "BA"
  },
  {
    "city": "LAPÃO",
    "electionZone": "104",
    "stateCode": "BA"
  },
  {
    "city": "PLANALTO",
    "electionZone": "139",
    "stateCode": "BA"
  },
  {
    "city": "SÃO FÉLIX",
    "electionZone": "118",
    "stateCode": "BA"
  },
  {
    "city": "ANTÔNIO CARDOSO",
    "electionZone": "143",
    "stateCode": "BA"
  },
  {
    "city": "SANTO ANTÔNIO DE JESUS",
    "electionZone": "56",
    "stateCode": "BA"
  },
  {
    "city": "GAVIÃO",
    "electionZone": "191",
    "stateCode": "BA"
  },
  {
    "city": "ITAMBÉ",
    "electionZone": "201",
    "stateCode": "BA"
  },
  {
    "city": "BONITO",
    "electionZone": "69",
    "stateCode": "BA"
  },
  {
    "city": "SANTA MARIA DA VITÓRIA",
    "electionZone": "72",
    "stateCode": "BA"
  },
  {
    "city": "SANTALUZ",
    "electionZone": "145",
    "stateCode": "BA"
  },
  {
    "city": "CARINHANHA",
    "electionZone": "125",
    "stateCode": "BA"
  },
  {
    "city": "PINDOBAÇU",
    "electionZone": "181",
    "stateCode": "BA"
  },
  {
    "city": "IGRAPIÚNA",
    "electionZone": "78",
    "stateCode": "BA"
  },
  {
    "city": "ITAQUARA",
    "electionZone": "76",
    "stateCode": "BA"
  },
  {
    "city": "SANTA LUZIA",
    "electionZone": "133",
    "stateCode": "BA"
  },
  {
    "city": "NAZARÉ",
    "electionZone": "30",
    "stateCode": "BA"
  },
  {
    "city": "OLINDINA",
    "electionZone": "81",
    "stateCode": "BA"
  },
  {
    "city": "SERRA PRETA",
    "electionZone": "194",
    "stateCode": "BA"
  },
  {
    "city": "BELMONTE",
    "electionZone": "34",
    "stateCode": "BA"
  },
  {
    "city": "FILADÉLFIA",
    "electionZone": "149",
    "stateCode": "BA"
  },
  {
    "city": "BUERAREMA",
    "electionZone": "166",
    "stateCode": "BA"
  },
  {
    "city": "JEQUIÉ",
    "electionZone": "22",
    "stateCode": "BA"
  },
  {
    "city": "PIRIPÁ",
    "electionZone": "60",
    "stateCode": "BA"
  },
  {
    "city": "CAEM",
    "electionZone": "167",
    "stateCode": "BA"
  },
  {
    "city": "ITUAÇU",
    "electionZone": "58",
    "stateCode": "BA"
  },
  {
    "city": "ÁGUA FRIA",
    "electionZone": "74",
    "stateCode": "BA"
  },
  {
    "city": "ITAPICURU",
    "electionZone": "81",
    "stateCode": "BA"
  },
  {
    "city": "MARAÚ",
    "electionZone": "138",
    "stateCode": "BA"
  },
  {
    "city": "MACURURÉ",
    "electionZone": "158",
    "stateCode": "BA"
  },
  {
    "city": "SOUTO SOARES",
    "electionZone": "174",
    "stateCode": "BA"
  },
  {
    "city": "SIMÕES FILHO",
    "electionZone": "33",
    "stateCode": "BA"
  },
  {
    "city": "CANUDOS",
    "electionZone": "102",
    "stateCode": "BA"
  },
  {
    "city": "CATU",
    "electionZone": "129",
    "stateCode": "BA"
  },
  {
    "city": "TEIXEIRA DE FREITAS",
    "electionZone": "183",
    "stateCode": "BA"
  },
  {
    "city": "PINTADAS",
    "electionZone": "62",
    "stateCode": "BA"
  },
  {
    "city": "PORTO SEGURO",
    "electionZone": "122",
    "stateCode": "BA"
  },
  {
    "city": "CORRENTINA",
    "electionZone": "124",
    "stateCode": "BA"
  },
  {
    "city": "UAUÁ",
    "electionZone": "83",
    "stateCode": "BA"
  },
  {
    "city": "BOM JESUS DA LAPA",
    "electionZone": "71",
    "stateCode": "BA"
  },
  {
    "city": "ITAPEBI",
    "electionZone": "188",
    "stateCode": "BA"
  },
  {
    "city": "MUNIZ FERREIRA",
    "electionZone": "30",
    "stateCode": "BA"
  },
  {
    "city": "COCOS",
    "electionZone": "61",
    "stateCode": "BA"
  },
  {
    "city": "JUAZEIRO",
    "electionZone": "48",
    "stateCode": "BA"
  },
  {
    "city": "FIRMINO ALVES",
    "electionZone": "137",
    "stateCode": "BA"
  },
  {
    "city": "CANDEIAS",
    "electionZone": "127",
    "stateCode": "BA"
  },
  {
    "city": "BURITIRAMA",
    "electionZone": "77",
    "stateCode": "BA"
  },
  {
    "city": "FLORESTA AZUL",
    "electionZone": "29",
    "stateCode": "BA"
  },
  {
    "city": "NOVA IBIÁ",
    "electionZone": "151",
    "stateCode": "BA"
  },
  {
    "city": "COTEGIPE",
    "electionZone": "98",
    "stateCode": "BA"
  },
  {
    "city": "ITORORÓ",
    "electionZone": "137",
    "stateCode": "BA"
  },
  {
    "city": "DIAS D'ÁVILA",
    "electionZone": "186",
    "stateCode": "BA"
  },
  {
    "city": "SANTA CRUZ CABRÁLIA",
    "electionZone": "122",
    "stateCode": "BA"
  },
  {
    "city": "ITAGI",
    "electionZone": "147",
    "stateCode": "BA"
  },
  {
    "city": "VITÓRIA DA CONQUISTA",
    "electionZone": "39",
    "stateCode": "BA"
  },
  {
    "city": "BARRA DO CHOÇA",
    "electionZone": "139",
    "stateCode": "BA"
  },
  {
    "city": "ARATUÍPE",
    "electionZone": "30",
    "stateCode": "BA"
  },
  {
    "city": "UBAÍRA",
    "electionZone": "38",
    "stateCode": "BA"
  },
  {
    "city": "DOM MACEDO COSTA",
    "electionZone": "56",
    "stateCode": "BA"
  },
  {
    "city": "SANTA INÊS",
    "electionZone": "75",
    "stateCode": "BA"
  },
  {
    "city": "PILÃO ARCADO",
    "electionZone": "195",
    "stateCode": "BA"
  },
  {
    "city": "IRAJUBA",
    "electionZone": "76",
    "stateCode": "BA"
  },
  {
    "city": "DÁRIO MEIRA",
    "electionZone": "147",
    "stateCode": "BA"
  },
  {
    "city": "JUAZEIRO",
    "electionZone": "47",
    "stateCode": "BA"
  },
  {
    "city": "WENCESLAU GUIMARÃES",
    "electionZone": "151",
    "stateCode": "BA"
  },
  {
    "city": "CASTRO ALVES",
    "electionZone": "43",
    "stateCode": "BA"
  },
  {
    "city": "ARAMARI",
    "electionZone": "163",
    "stateCode": "BA"
  },
  {
    "city": "IPIRÁ",
    "electionZone": "62",
    "stateCode": "BA"
  },
  {
    "city": "CABACEIRAS DO PARAGUAÇU",
    "electionZone": "131",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "4",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "1",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "20",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "19",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "14",
    "stateCode": "BA"
  },
  {
    "city": "POÇÕES",
    "electionZone": "59",
    "stateCode": "BA"
  },
  {
    "city": "JAGUAQUARA",
    "electionZone": "76",
    "stateCode": "BA"
  },
  {
    "city": "IBIRAPITANGA",
    "electionZone": "134",
    "stateCode": "BA"
  },
  {
    "city": "ITABERABA",
    "electionZone": "42",
    "stateCode": "BA"
  },
  {
    "city": "ITAGIBÁ",
    "electionZone": "147",
    "stateCode": "BA"
  },
  {
    "city": "COARACI",
    "electionZone": "135",
    "stateCode": "BA"
  },
  {
    "city": "POJUCA",
    "electionZone": "200",
    "stateCode": "BA"
  },
  {
    "city": "CANDIBA",
    "electionZone": "64",
    "stateCode": "BA"
  },
  {
    "city": "JANDAÍRA",
    "electionZone": "49",
    "stateCode": "BA"
  },
  {
    "city": "ITABELA",
    "electionZone": "189",
    "stateCode": "BA"
  },
  {
    "city": "MIGUEL CALMON",
    "electionZone": "103",
    "stateCode": "BA"
  },
  {
    "city": "BOM JESUS DA SERRA",
    "electionZone": "59",
    "stateCode": "BA"
  },
  {
    "city": "CRAVOLÂNDIA",
    "electionZone": "75",
    "stateCode": "BA"
  },
  {
    "city": "ARAÇÁS",
    "electionZone": "163",
    "stateCode": "BA"
  },
  {
    "city": "MURITIBA",
    "electionZone": "131",
    "stateCode": "BA"
  },
  {
    "city": "JUCURUÇU",
    "electionZone": "172",
    "stateCode": "BA"
  },
  {
    "city": "CAMAÇARI",
    "electionZone": "170",
    "stateCode": "BA"
  },
  {
    "city": "CAMAÇARI",
    "electionZone": "171",
    "stateCode": "BA"
  },
  {
    "city": "BOQUIRA",
    "electionZone": "65",
    "stateCode": "BA"
  },
  {
    "city": "ITAJUÍPE",
    "electionZone": "136",
    "stateCode": "BA"
  },
  {
    "city": "SANTANA",
    "electionZone": "99",
    "stateCode": "BA"
  },
  {
    "city": "VÁRZEA DA ROÇA",
    "electionZone": "86",
    "stateCode": "BA"
  },
  {
    "city": "REMANSO",
    "electionZone": "67",
    "stateCode": "BA"
  },
  {
    "city": "TAPEROÁ",
    "electionZone": "32",
    "stateCode": "BA"
  },
  {
    "city": "PAU BRASIL",
    "electionZone": "133",
    "stateCode": "BA"
  },
  {
    "city": "GUANAMBI",
    "electionZone": "64",
    "stateCode": "BA"
  },
  {
    "city": "BREJOLÂNDIA",
    "electionZone": "190",
    "stateCode": "BA"
  },
  {
    "city": "CONCEIÇÃO DO ALMEIDA",
    "electionZone": "184",
    "stateCode": "BA"
  },
  {
    "city": "RIBEIRA DO POMBAL",
    "electionZone": "110",
    "stateCode": "BA"
  },
  {
    "city": "CÂNDIDO SALES",
    "electionZone": "165",
    "stateCode": "BA"
  },
  {
    "city": "MADRE DE DEUS",
    "electionZone": "162",
    "stateCode": "BA"
  },
  {
    "city": "DOM BASÍLIO",
    "electionZone": "101",
    "stateCode": "BA"
  },
  {
    "city": "JACOBINA",
    "electionZone": "46",
    "stateCode": "BA"
  },
  {
    "city": "CACHOEIRA",
    "electionZone": "118",
    "stateCode": "BA"
  },
  {
    "city": "MASCOTE",
    "electionZone": "133",
    "stateCode": "BA"
  },
  {
    "city": "TEOLÂNDIA",
    "electionZone": "151",
    "stateCode": "BA"
  },
  {
    "city": "SERRA DO RAMALHO",
    "electionZone": "71",
    "stateCode": "BA"
  },
  {
    "city": "CAMAMU",
    "electionZone": "78",
    "stateCode": "BA"
  },
  {
    "city": "SANTA CRUZ DA VITÓRIA",
    "electionZone": "29",
    "stateCode": "BA"
  },
  {
    "city": "GUARATINGA",
    "electionZone": "189",
    "stateCode": "BA"
  },
  {
    "city": "GANDU",
    "electionZone": "151",
    "stateCode": "BA"
  },
  {
    "city": "RODELAS",
    "electionZone": "158",
    "stateCode": "BA"
  },
  {
    "city": "EUCLIDES DA CUNHA",
    "electionZone": "102",
    "stateCode": "BA"
  },
  {
    "city": "PONTO NOVO",
    "electionZone": "115",
    "stateCode": "BA"
  },
  {
    "city": "ITAMARAJU",
    "electionZone": "172",
    "stateCode": "BA"
  },
  {
    "city": "UBAITABA",
    "electionZone": "73",
    "stateCode": "BA"
  },
  {
    "city": "UBATÃ",
    "electionZone": "134",
    "stateCode": "BA"
  },
  {
    "city": "ILHÉUS",
    "electionZone": "26",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "17",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "10",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "16",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "3",
    "stateCode": "BA"
  },
  {
    "city": "OUROLÂNDIA",
    "electionZone": "167",
    "stateCode": "BA"
  },
  {
    "city": "CANÁPOLIS",
    "electionZone": "99",
    "stateCode": "BA"
  },
  {
    "city": "GONGOGI",
    "electionZone": "73",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "2",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "15",
    "stateCode": "BA"
  },
  {
    "city": "TERRA NOVA",
    "electionZone": "192",
    "stateCode": "BA"
  },
  {
    "city": "PRADO",
    "electionZone": "112",
    "stateCode": "BA"
  },
  {
    "city": "APORÁ",
    "electionZone": "44",
    "stateCode": "BA"
  },
  {
    "city": "CAETITÉ",
    "electionZone": "63",
    "stateCode": "BA"
  },
  {
    "city": "CAETANOS",
    "electionZone": "59",
    "stateCode": "BA"
  },
  {
    "city": "ALCOBAÇA",
    "electionZone": "112",
    "stateCode": "BA"
  },
  {
    "city": "IBICARAÍ",
    "electionZone": "29",
    "stateCode": "BA"
  },
  {
    "city": "CANAVIEIRAS",
    "electionZone": "116",
    "stateCode": "BA"
  },
  {
    "city": "NOVA SOURE",
    "electionZone": "79",
    "stateCode": "BA"
  },
  {
    "city": "LAJE",
    "electionZone": "109",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "9",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "12",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "6",
    "stateCode": "BA"
  },
  {
    "city": "ILHÉUS",
    "electionZone": "25",
    "stateCode": "BA"
  },
  {
    "city": "BIRITINGA",
    "electionZone": "150",
    "stateCode": "BA"
  },
  {
    "city": "CIPÓ",
    "electionZone": "79",
    "stateCode": "BA"
  },
  {
    "city": "CORDEIROS",
    "electionZone": "60",
    "stateCode": "BA"
  },
  {
    "city": "JABORANDI",
    "electionZone": "61",
    "stateCode": "BA"
  },
  {
    "city": "ITIÚBA",
    "electionZone": "149",
    "stateCode": "BA"
  },
  {
    "city": "BARRA",
    "electionZone": "77",
    "stateCode": "BA"
  },
  {
    "city": "CACULÉ",
    "electionZone": "93",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "13",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "11",
    "stateCode": "BA"
  },
  {
    "city": "MATA DE SÃO JOÃO",
    "electionZone": "185",
    "stateCode": "BA"
  },
  {
    "city": "SÍTIO DO MATO",
    "electionZone": "71",
    "stateCode": "BA"
  },
  {
    "city": "QUINJINGUE",
    "electionZone": "102",
    "stateCode": "BA"
  },
  {
    "city": "ACAJUTIBA",
    "electionZone": "21",
    "stateCode": "BA"
  },
  {
    "city": "SERROLÂNDIA",
    "electionZone": "167",
    "stateCode": "BA"
  },
  {
    "city": "JITAÚNA",
    "electionZone": "147",
    "stateCode": "BA"
  },
  {
    "city": "ITANAGRA",
    "electionZone": "185",
    "stateCode": "BA"
  },
  {
    "city": "MIRANGABA",
    "electionZone": "167",
    "stateCode": "BA"
  },
  {
    "city": "ESPLANADA",
    "electionZone": "21",
    "stateCode": "BA"
  },
  {
    "city": "CAMACAN",
    "electionZone": "133",
    "stateCode": "BA"
  },
  {
    "city": "SÍTIO DO QUINTO",
    "electionZone": "51",
    "stateCode": "BA"
  },
  {
    "city": "LAGOA REAL",
    "electionZone": "63",
    "stateCode": "BA"
  },
  {
    "city": "CURAÇÁ",
    "electionZone": "85",
    "stateCode": "BA"
  },
  {
    "city": "CORONEL JOÃO SÁ",
    "electionZone": "51",
    "stateCode": "BA"
  },
  {
    "city": "CALDEIRÃO GRANDE",
    "electionZone": "115",
    "stateCode": "BA"
  },
  {
    "city": "GOVERNADOR MANGABEIRA",
    "electionZone": "131",
    "stateCode": "BA"
  },
  {
    "city": "NOVA VIÇOSA",
    "electionZone": "35",
    "stateCode": "BA"
  },
  {
    "city": "ITAGIMIRIM",
    "electionZone": "188",
    "stateCode": "BA"
  },
  {
    "city": "TABOCAS DO BREJO VELHO",
    "electionZone": "190",
    "stateCode": "BA"
  },
  {
    "city": "CONCEIÇÃO DO JACUÍPE",
    "electionZone": "192",
    "stateCode": "BA"
  },
  {
    "city": "ANDORINHA",
    "electionZone": "45",
    "stateCode": "BA"
  },
  {
    "city": "PIRAÍ DO NORTE",
    "electionZone": "32",
    "stateCode": "BA"
  },
  {
    "city": "MAIRI",
    "electionZone": "86",
    "stateCode": "BA"
  },
  {
    "city": "BARREIRAS",
    "electionZone": "70",
    "stateCode": "BA"
  },
  {
    "city": "JEREMOABO",
    "electionZone": "51",
    "stateCode": "BA"
  },
  {
    "city": "RIO DE CONTAS",
    "electionZone": "101",
    "stateCode": "BA"
  },
  {
    "city": "ITACARÉ",
    "electionZone": "203",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "5",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "8",
    "stateCode": "BA"
  },
  {
    "city": "SEABRA",
    "electionZone": "88",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "18",
    "stateCode": "BA"
  },
  {
    "city": "RIBEIRA DO AMPARO",
    "electionZone": "79",
    "stateCode": "BA"
  },
  {
    "city": "CORIBE",
    "electionZone": "61",
    "stateCode": "BA"
  },
  {
    "city": "OLIVEIRA DOS BREJINHOS",
    "electionZone": "94",
    "stateCode": "BA"
  },
  {
    "city": "PEDRÃO",
    "electionZone": "74",
    "stateCode": "BA"
  },
  {
    "city": "ANTAS",
    "electionZone": "82",
    "stateCode": "BA"
  },
  {
    "city": "IBIPEBA",
    "electionZone": "176",
    "stateCode": "BA"
  },
  {
    "city": "FÁTIMA",
    "electionZone": "82",
    "stateCode": "BA"
  },
  {
    "city": "ENCRUZILHADA",
    "electionZone": "152",
    "stateCode": "BA"
  },
  {
    "city": "SÃO DOMINGOS",
    "electionZone": "120",
    "stateCode": "BA"
  },
  {
    "city": "RETIROLÂNDIA",
    "electionZone": "120",
    "stateCode": "BA"
  },
  {
    "city": "JIQUIRIÇÁ",
    "electionZone": "38",
    "stateCode": "BA"
  },
  {
    "city": "BELO CAMPO",
    "electionZone": "177",
    "stateCode": "BA"
  },
  {
    "city": "BARROCAS",
    "electionZone": "150",
    "stateCode": "BA"
  },
  {
    "city": "UTINGA",
    "electionZone": "69",
    "stateCode": "BA"
  },
  {
    "city": "ITAJU DO COLÔNIA",
    "electionZone": "137",
    "stateCode": "BA"
  },
  {
    "city": "BOA VISTA DO TUPIM",
    "electionZone": "42",
    "stateCode": "BA"
  },
  {
    "city": "MUCURI",
    "electionZone": "35",
    "stateCode": "BA"
  },
  {
    "city": "BARRA DA ESTIVA",
    "electionZone": "169",
    "stateCode": "BA"
  },
  {
    "city": "EUNÁPOLIS",
    "electionZone": "188",
    "stateCode": "BA"
  },
  {
    "city": "IGAPORÃ",
    "electionZone": "113",
    "stateCode": "BA"
  },
  {
    "city": "WAGNER",
    "electionZone": "69",
    "stateCode": "BA"
  },
  {
    "city": "SALVADOR",
    "electionZone": "7",
    "stateCode": "BA"
  },
  {
    "city": "PALMAS DE MONTE ALTO",
    "electionZone": "175",
    "stateCode": "BA"
  },
  {
    "city": "IBICOARA",
    "electionZone": "169",
    "stateCode": "BA"
  },
  {
    "city": "ANGUERA",
    "electionZone": "194",
    "stateCode": "BA"
  },
  {
    "city": "LAJEDINHO",
    "electionZone": "87",
    "stateCode": "BA"
  },
  {
    "city": "MAETINGA",
    "electionZone": "60",
    "stateCode": "BA"
  },
  {
    "city": "SEBASTIÃO LARANJEIRAS",
    "electionZone": "175",
    "stateCode": "BA"
  },
  {
    "city": "MUQUÉM DO SÃO FRANCISCO",
    "electionZone": "173",
    "stateCode": "BA"
  },
  {
    "city": "VÁRZEA DO POÇO",
    "electionZone": "86",
    "stateCode": "BA"
  },
  {
    "city": "NOVA REDENÇÃO",
    "electionZone": "119",
    "stateCode": "BA"
  },
  {
    "city": "INHAMBUPE",
    "electionZone": "44",
    "stateCode": "BA"
  },
  {
    "city": "ANDARAÍ",
    "electionZone": "119",
    "stateCode": "BA"
  },
  {
    "city": "SENTO SÉ",
    "electionZone": "96",
    "stateCode": "BA"
  },
  {
    "city": "LAJEDÃO",
    "electionZone": "153",
    "stateCode": "BA"
  },
  {
    "city": "MUNDO NOVO",
    "electionZone": "54",
    "stateCode": "BA"
  },
  {
    "city": "FEIRA DA MATA",
    "electionZone": "125",
    "stateCode": "BA"
  },
  {
    "city": "PIRITIBA",
    "electionZone": "54",
    "stateCode": "BA"
  },
  {
    "city": "MUTUÍPE",
    "electionZone": "109",
    "stateCode": "BA"
  },
  {
    "city": "CANARANA",
    "electionZone": "174",
    "stateCode": "BA"
  },
  {
    "city": "IUIU",
    "electionZone": "125",
    "stateCode": "BA"
  },
  {
    "city": "JACARACI",
    "electionZone": "92",
    "stateCode": "BA"
  },
  {
    "city": "OURIÇANGAS",
    "electionZone": "74",
    "stateCode": "BA"
  },
  {
    "city": "SÁTIRO DIAS",
    "electionZone": "44",
    "stateCode": "BA"
  },
  {
    "city": "CRISTÓPOLIS",
    "electionZone": "98",
    "stateCode": "BA"
  },
  {
    "city": "SÃO FELIPE",
    "electionZone": "184",
    "stateCode": "BA"
  },
  {
    "city": "VÁRZEA NOVA",
    "electionZone": "55",
    "stateCode": "BA"
  },
  {
    "city": "SÃO FRANCISCO DO CONDE",
    "electionZone": "162",
    "stateCode": "BA"
  },
  {
    "city": "APUAREMA",
    "electionZone": "23",
    "stateCode": "BA"
  },
  {
    "city": "BOA NOVA",
    "electionZone": "59",
    "stateCode": "BA"
  },
  {
    "city": "CORAÇÃO DE MARIA",
    "electionZone": "130",
    "stateCode": "BA"
  },
  {
    "city": "MORTUGABA",
    "electionZone": "92",
    "stateCode": "BA"
  },
  {
    "city": "ENTRE RIOS",
    "electionZone": "144",
    "stateCode": "BA"
  },
  {
    "city": "RAFAEL JAMBEIRO",
    "electionZone": "43",
    "stateCode": "BA"
  },
  {
    "city": "IRARÁ",
    "electionZone": "74",
    "stateCode": "BA"
  },
  {
    "city": "PINDAÍ",
    "electionZone": "117",
    "stateCode": "BA"
  },
  {
    "city": "CARAÍBAS",
    "electionZone": "161",
    "stateCode": "BA"
  },
  {
    "city": "CAMPO ALEGRE DE LOURDES",
    "electionZone": "67",
    "stateCode": "BA"
  },
  {
    "city": "ITAETÉ",
    "electionZone": "168",
    "stateCode": "BA"
  },
  {
    "city": "AURELINO LEAL",
    "electionZone": "73",
    "stateCode": "BA"
  },
  {
    "city": "IBIPITANGA",
    "electionZone": "65",
    "stateCode": "BA"
  },
  {
    "city": "IRAMAIA",
    "electionZone": "168",
    "stateCode": "BA"
  },
  {
    "city": "AMARGOSA",
    "electionZone": "36",
    "stateCode": "BA"
  },
  {
    "city": "NORDESTINA",
    "electionZone": "106",
    "stateCode": "BA"
  },
  {
    "city": "SERRA DOURADA",
    "electionZone": "190",
    "stateCode": "BA"
  },
  {
    "city": "MACAÚBAS",
    "electionZone": "65",
    "stateCode": "BA"
  },
  {
    "city": "CATOLÂNDIA",
    "electionZone": "100",
    "stateCode": "BA"
  },
  {
    "city": "IBIQUERA",
    "electionZone": "42",
    "stateCode": "BA"
  },
  {
    "city": "ITAPITANGA",
    "electionZone": "135",
    "stateCode": "BA"
  },
  {
    "city": "PIATÃ",
    "electionZone": "105",
    "stateCode": "BA"
  },
  {
    "city": "NOVO HORIZONTE",
    "electionZone": "121",
    "stateCode": "BA"
  },
  {
    "city": "ALTANEIRA",
    "electionZone": "53",
    "stateCode": "CE"
  },
  {
    "city": "OCARA",
    "electionZone": "67",
    "stateCode": "CE"
  },
  {
    "city": "ASSARÉ",
    "electionZone": "18",
    "stateCode": "CE"
  },
  {
    "city": "CAMOCIM",
    "electionZone": "32",
    "stateCode": "CE"
  },
  {
    "city": "MARACANAÚ",
    "electionZone": "122",
    "stateCode": "CE"
  },
  {
    "city": "DEPUTADO IRAPUAN PINHEIRO",
    "electionZone": "55",
    "stateCode": "CE"
  },
  {
    "city": "POTIRETAMA",
    "electionZone": "86",
    "stateCode": "CE"
  },
  {
    "city": "CASCAVEL",
    "electionZone": "7",
    "stateCode": "CE"
  },
  {
    "city": "GUARAMIRANGA",
    "electionZone": "77",
    "stateCode": "CE"
  },
  {
    "city": "BARREIRA",
    "electionZone": "52",
    "stateCode": "CE"
  },
  {
    "city": "FORQUILHA",
    "electionZone": "121",
    "stateCode": "CE"
  },
  {
    "city": "BOA VIAGEM",
    "electionZone": "63",
    "stateCode": "CE"
  },
  {
    "city": "REDENÇÃO",
    "electionZone": "52",
    "stateCode": "CE"
  },
  {
    "city": "IBIAPINA",
    "electionZone": "73",
    "stateCode": "CE"
  },
  {
    "city": "MARANGUAPE",
    "electionZone": "4",
    "stateCode": "CE"
  },
  {
    "city": "MARCO",
    "electionZone": "88",
    "stateCode": "CE"
  },
  {
    "city": "BARRO",
    "electionZone": "92",
    "stateCode": "CE"
  },
  {
    "city": "URUBURETAMA",
    "electionZone": "23",
    "stateCode": "CE"
  },
  {
    "city": "BELA CRUZ",
    "electionZone": "96",
    "stateCode": "CE"
  },
  {
    "city": "ALCÂNTARAS",
    "electionZone": "24",
    "stateCode": "CE"
  },
  {
    "city": "CAMPOS SALES",
    "electionZone": "38",
    "stateCode": "CE"
  },
  {
    "city": "MAURITI",
    "electionZone": "76",
    "stateCode": "CE"
  },
  {
    "city": "JUAZEIRO DO NORTE",
    "electionZone": "28",
    "stateCode": "CE"
  },
  {
    "city": "CHAVAL",
    "electionZone": "108",
    "stateCode": "CE"
  },
  {
    "city": "PALMÁCIA",
    "electionZone": "4",
    "stateCode": "CE"
  },
  {
    "city": "PENTECOSTE",
    "electionZone": "50",
    "stateCode": "CE"
  },
  {
    "city": "GROAÍRAS",
    "electionZone": "100",
    "stateCode": "CE"
  },
  {
    "city": "FORTIM",
    "electionZone": "8",
    "stateCode": "CE"
  },
  {
    "city": "BARROQUINHA",
    "electionZone": "108",
    "stateCode": "CE"
  },
  {
    "city": "SÃO LUÍS DO CURU",
    "electionZone": "107",
    "stateCode": "CE"
  },
  {
    "city": "INDEPENDÊNCIA",
    "electionZone": "39",
    "stateCode": "CE"
  },
  {
    "city": "CATARINA",
    "electionZone": "60",
    "stateCode": "CE"
  },
  {
    "city": "PARACURU",
    "electionZone": "109",
    "stateCode": "CE"
  },
  {
    "city": "HIDROLÂNDIA",
    "electionZone": "54",
    "stateCode": "CE"
  },
  {
    "city": "ITATIRA",
    "electionZone": "33",
    "stateCode": "CE"
  },
  {
    "city": "APUIARÉS",
    "electionZone": "50",
    "stateCode": "CE"
  },
  {
    "city": "SENADOR SÁ",
    "electionZone": "45",
    "stateCode": "CE"
  },
  {
    "city": "JAGUARIBE",
    "electionZone": "10",
    "stateCode": "CE"
  },
  {
    "city": "ITAREMA",
    "electionZone": "30",
    "stateCode": "CE"
  },
  {
    "city": "PEDRA BRANCA",
    "electionZone": "59",
    "stateCode": "CE"
  },
  {
    "city": "ACOPIARA",
    "electionZone": "60",
    "stateCode": "CE"
  },
  {
    "city": "MONSENHOR TABOSA",
    "electionZone": "93",
    "stateCode": "CE"
  },
  {
    "city": "FARIAS BRITO",
    "electionZone": "78",
    "stateCode": "CE"
  },
  {
    "city": "GENERAL SAMPAIO",
    "electionZone": "50",
    "stateCode": "CE"
  },
  {
    "city": "CARIRÉ",
    "electionZone": "65",
    "stateCode": "CE"
  },
  {
    "city": "PENAFORTE",
    "electionZone": "102",
    "stateCode": "CE"
  },
  {
    "city": "ARNEIROZ",
    "electionZone": "101",
    "stateCode": "CE"
  },
  {
    "city": "SANTANA DO ACARAÚ",
    "electionZone": "44",
    "stateCode": "CE"
  },
  {
    "city": "TARRAFAS",
    "electionZone": "18",
    "stateCode": "CE"
  },
  {
    "city": "SÃO BENEDITO",
    "electionZone": "22",
    "stateCode": "CE"
  },
  {
    "city": "MISSÃO VELHA",
    "electionZone": "16",
    "stateCode": "CE"
  },
  {
    "city": "PARAMOTI",
    "electionZone": "33",
    "stateCode": "CE"
  },
  {
    "city": "IBARETAMA",
    "electionZone": "6",
    "stateCode": "CE"
  },
  {
    "city": "CATUNDA",
    "electionZone": "54",
    "stateCode": "CE"
  },
  {
    "city": "GUAIÚBA",
    "electionZone": "57",
    "stateCode": "CE"
  },
  {
    "city": "ICAPUÍ",
    "electionZone": "8",
    "stateCode": "CE"
  },
  {
    "city": "IBICUITINGA",
    "electionZone": "47",
    "stateCode": "CE"
  },
  {
    "city": "PACATUBA",
    "electionZone": "57",
    "stateCode": "CE"
  },
  {
    "city": "TRAIRI",
    "electionZone": "97",
    "stateCode": "CE"
  },
  {
    "city": "SANTA QUITÉRIA",
    "electionZone": "54",
    "stateCode": "CE"
  },
  {
    "city": "RUSSAS",
    "electionZone": "9",
    "stateCode": "CE"
  },
  {
    "city": "ARARIPE",
    "electionZone": "68",
    "stateCode": "CE"
  },
  {
    "city": "CANINDÉ",
    "electionZone": "33",
    "stateCode": "CE"
  },
  {
    "city": "MILHÃ",
    "electionZone": "55",
    "stateCode": "CE"
  },
  {
    "city": "IPAPORANGA",
    "electionZone": "20",
    "stateCode": "CE"
  },
  {
    "city": "PACAJUS",
    "electionZone": "49",
    "stateCode": "CE"
  },
  {
    "city": "ARACOIABA",
    "electionZone": "67",
    "stateCode": "CE"
  },
  {
    "city": "IRACEMA",
    "electionZone": "95",
    "stateCode": "CE"
  },
  {
    "city": "PINDORETAMA",
    "electionZone": "7",
    "stateCode": "CE"
  },
  {
    "city": "CAPISTRANO",
    "electionZone": "105",
    "stateCode": "CE"
  },
  {
    "city": "PACUJÁ",
    "electionZone": "87",
    "stateCode": "CE"
  },
  {
    "city": "MORRINHOS",
    "electionZone": "44",
    "stateCode": "CE"
  },
  {
    "city": "JUCÁS",
    "electionZone": "43",
    "stateCode": "CE"
  },
  {
    "city": "PORANGA",
    "electionZone": "40",
    "stateCode": "CE"
  },
  {
    "city": "AQUIRAZ",
    "electionZone": "66",
    "stateCode": "CE"
  },
  {
    "city": "CAUCAIA",
    "electionZone": "37",
    "stateCode": "CE"
  },
  {
    "city": "MUCAMBO",
    "electionZone": "87",
    "stateCode": "CE"
  },
  {
    "city": "UBAJARA",
    "electionZone": "56",
    "stateCode": "CE"
  },
  {
    "city": "IPUEIRAS",
    "electionZone": "40",
    "stateCode": "CE"
  },
  {
    "city": "MASSAPÊ",
    "electionZone": "45",
    "stateCode": "CE"
  },
  {
    "city": "SOBRAL",
    "electionZone": "24",
    "stateCode": "CE"
  },
  {
    "city": "ORÓS",
    "electionZone": "85",
    "stateCode": "CE"
  },
  {
    "city": "MULUNGU",
    "electionZone": "89",
    "stateCode": "CE"
  },
  {
    "city": "ACARAPE",
    "electionZone": "52",
    "stateCode": "CE"
  },
  {
    "city": "CRATEÚS",
    "electionZone": "20",
    "stateCode": "CE"
  },
  {
    "city": "ALTO SANTO",
    "electionZone": "86",
    "stateCode": "CE"
  },
  {
    "city": "CROATÁ",
    "electionZone": "74",
    "stateCode": "CE"
  },
  {
    "city": "RERIUTABA",
    "electionZone": "79",
    "stateCode": "CE"
  },
  {
    "city": "JAGUARUANA",
    "electionZone": "75",
    "stateCode": "CE"
  },
  {
    "city": "MORAÚJO",
    "electionZone": "64",
    "stateCode": "CE"
  },
  {
    "city": "CAUCAIA",
    "electionZone": "120",
    "stateCode": "CE"
  },
  {
    "city": "BATURITÉ",
    "electionZone": "5",
    "stateCode": "CE"
  },
  {
    "city": "SOLONÓPOLE",
    "electionZone": "55",
    "stateCode": "CE"
  },
  {
    "city": "PARAIPABA",
    "electionZone": "36",
    "stateCode": "CE"
  },
  {
    "city": "QUIXERAMOBIM",
    "electionZone": "11",
    "stateCode": "CE"
  },
  {
    "city": "EUSÉBIO",
    "electionZone": "66",
    "stateCode": "CE"
  },
  {
    "city": "JAGUARIBARA",
    "electionZone": "72",
    "stateCode": "CE"
  },
  {
    "city": "BARBALHA",
    "electionZone": "31",
    "stateCode": "CE"
  },
  {
    "city": "CEDRO",
    "electionZone": "34",
    "stateCode": "CE"
  },
  {
    "city": "ICÓ",
    "electionZone": "15",
    "stateCode": "CE"
  },
  {
    "city": "CHORÓ",
    "electionZone": "6",
    "stateCode": "CE"
  },
  {
    "city": "ITAITINGA",
    "electionZone": "57",
    "stateCode": "CE"
  },
  {
    "city": "ITAPIPOCA",
    "electionZone": "123",
    "stateCode": "CE"
  },
  {
    "city": "TURURU",
    "electionZone": "23",
    "stateCode": "CE"
  },
  {
    "city": "AURORA",
    "electionZone": "69",
    "stateCode": "CE"
  },
  {
    "city": "ABAIARA",
    "electionZone": "26",
    "stateCode": "CE"
  },
  {
    "city": "LIMOEIRO DO NORTE",
    "electionZone": "29",
    "stateCode": "CE"
  },
  {
    "city": "JATI",
    "electionZone": "102",
    "stateCode": "CE"
  },
  {
    "city": "CARIÚS",
    "electionZone": "103",
    "stateCode": "CE"
  },
  {
    "city": "ARATUBA",
    "electionZone": "89",
    "stateCode": "CE"
  },
  {
    "city": "ANTONINA DO NORTE",
    "electionZone": "18",
    "stateCode": "CE"
  },
  {
    "city": "TIANGUÁ",
    "electionZone": "81",
    "stateCode": "CE"
  },
  {
    "city": "ACARAÚ",
    "electionZone": "30",
    "stateCode": "CE"
  },
  {
    "city": "NOVO ORIENTE",
    "electionZone": "99",
    "stateCode": "CE"
  },
  {
    "city": "TAUÁ",
    "electionZone": "19",
    "stateCode": "CE"
  },
  {
    "city": "CARIRIAÇU",
    "electionZone": "71",
    "stateCode": "CE"
  },
  {
    "city": "HORIZONTE",
    "electionZone": "49",
    "stateCode": "CE"
  },
  {
    "city": "JIJOCA DE JERICOACOARA",
    "electionZone": "30",
    "stateCode": "CE"
  },
  {
    "city": "UMARI",
    "electionZone": "58",
    "stateCode": "CE"
  },
  {
    "city": "CARIDADE",
    "electionZone": "33",
    "stateCode": "CE"
  },
  {
    "city": "TAMBORIL",
    "electionZone": "61",
    "stateCode": "CE"
  },
  {
    "city": "GUARACIABA DO NORTE",
    "electionZone": "74",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "115",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "117",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "82",
    "stateCode": "CE"
  },
  {
    "city": "VIÇOSA DO CEARÁ",
    "electionZone": "35",
    "stateCode": "CE"
  },
  {
    "city": "BEBERIBE",
    "electionZone": "84",
    "stateCode": "CE"
  },
  {
    "city": "NOVA RUSSAS",
    "electionZone": "48",
    "stateCode": "CE"
  },
  {
    "city": "CHOROZINHO",
    "electionZone": "49",
    "stateCode": "CE"
  },
  {
    "city": "QUIXADÁ",
    "electionZone": "6",
    "stateCode": "CE"
  },
  {
    "city": "JUAZEIRO DO NORTE",
    "electionZone": "119",
    "stateCode": "CE"
  },
  {
    "city": "IPU",
    "electionZone": "21",
    "stateCode": "CE"
  },
  {
    "city": "PACOTI",
    "electionZone": "77",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "114",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "112",
    "stateCode": "CE"
  },
  {
    "city": "ITAPIPOCA",
    "electionZone": "17",
    "stateCode": "CE"
  },
  {
    "city": "SOBRAL",
    "electionZone": "121",
    "stateCode": "CE"
  },
  {
    "city": "CRATO",
    "electionZone": "27",
    "stateCode": "CE"
  },
  {
    "city": "SÃO GONÇALO DO AMARANTE",
    "electionZone": "36",
    "stateCode": "CE"
  },
  {
    "city": "ITAPAGÉ",
    "electionZone": "41",
    "stateCode": "CE"
  },
  {
    "city": "IRAUÇUBA",
    "electionZone": "41",
    "stateCode": "CE"
  },
  {
    "city": "POTENGI",
    "electionZone": "68",
    "stateCode": "CE"
  },
  {
    "city": "AMONTADA",
    "electionZone": "123",
    "stateCode": "CE"
  },
  {
    "city": "JARDIM",
    "electionZone": "42",
    "stateCode": "CE"
  },
  {
    "city": "MILAGRES",
    "electionZone": "26",
    "stateCode": "CE"
  },
  {
    "city": "QUIXELÔ",
    "electionZone": "13",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "118",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "83",
    "stateCode": "CE"
  },
  {
    "city": "IPAUMIRIM",
    "electionZone": "58",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "1",
    "stateCode": "CE"
  },
  {
    "city": "SABOEIRO",
    "electionZone": "80",
    "stateCode": "CE"
  },
  {
    "city": "MIRAÍMA",
    "electionZone": "123",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "94",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "116",
    "stateCode": "CE"
  },
  {
    "city": "URUOCA",
    "electionZone": "25",
    "stateCode": "CE"
  },
  {
    "city": "MOMBAÇA",
    "electionZone": "46",
    "stateCode": "CE"
  },
  {
    "city": "IGUATU",
    "electionZone": "13",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "2",
    "stateCode": "CE"
  },
  {
    "city": "GRANJA",
    "electionZone": "25",
    "stateCode": "CE"
  },
  {
    "city": "BANABUIÚ",
    "electionZone": "6",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "113",
    "stateCode": "CE"
  },
  {
    "city": "FORTALEZA",
    "electionZone": "3",
    "stateCode": "CE"
  },
  {
    "city": "MARACANAÚ",
    "electionZone": "104",
    "stateCode": "CE"
  },
  {
    "city": "BAIXIO",
    "electionZone": "58",
    "stateCode": "CE"
  },
  {
    "city": "MARTINÓPOLE",
    "electionZone": "25",
    "stateCode": "CE"
  },
  {
    "city": "SALITRE",
    "electionZone": "38",
    "stateCode": "CE"
  },
  {
    "city": "NOVA OLINDA",
    "electionZone": "53",
    "stateCode": "CE"
  },
  {
    "city": "QUITERIANÓPOLIS",
    "electionZone": "99",
    "stateCode": "CE"
  },
  {
    "city": "AIUABA",
    "electionZone": "101",
    "stateCode": "CE"
  },
  {
    "city": "TEJUÇUOCA",
    "electionZone": "41",
    "stateCode": "CE"
  },
  {
    "city": "PALHANO",
    "electionZone": "9",
    "stateCode": "CE"
  },
  {
    "city": "SENADOR POMPEU",
    "electionZone": "12",
    "stateCode": "CE"
  },
  {
    "city": "ARACATI",
    "electionZone": "8",
    "stateCode": "CE"
  },
  {
    "city": "GRAÇA",
    "electionZone": "87",
    "stateCode": "CE"
  },
  {
    "city": "MERUOCA",
    "electionZone": "106",
    "stateCode": "CE"
  },
  {
    "city": "QUIXERÉ",
    "electionZone": "9",
    "stateCode": "CE"
  },
  {
    "city": "COREAÚ",
    "electionZone": "64",
    "stateCode": "CE"
  },
  {
    "city": "PARAMBU",
    "electionZone": "90",
    "stateCode": "CE"
  },
  {
    "city": "PIQUET CARNEIRO",
    "electionZone": "12",
    "stateCode": "CE"
  },
  {
    "city": "SÃO JOÃO DO JAGUARIBE",
    "electionZone": "91",
    "stateCode": "CE"
  },
  {
    "city": "VARJOTA",
    "electionZone": "79",
    "stateCode": "CE"
  },
  {
    "city": "PORTEIRAS",
    "electionZone": "110",
    "stateCode": "CE"
  },
  {
    "city": "CRUZ",
    "electionZone": "30",
    "stateCode": "CE"
  },
  {
    "city": "VÁRZEA ALEGRE",
    "electionZone": "62",
    "stateCode": "CE"
  },
  {
    "city": "ITAIÇABA",
    "electionZone": "75",
    "stateCode": "CE"
  },
  {
    "city": "FRECHEIRINHA",
    "electionZone": "111",
    "stateCode": "CE"
  },
  {
    "city": "PIRES FERREIRA",
    "electionZone": "21",
    "stateCode": "CE"
  },
  {
    "city": "LAVRAS DA MANGABEIRA",
    "electionZone": "14",
    "stateCode": "CE"
  },
  {
    "city": "UMIRIM",
    "electionZone": "107",
    "stateCode": "CE"
  },
  {
    "city": "ERERÊ",
    "electionZone": "95",
    "stateCode": "CE"
  },
  {
    "city": "JAGUARETAMA",
    "electionZone": "72",
    "stateCode": "CE"
  },
  {
    "city": "TABULEIRO DO NORTE",
    "electionZone": "91",
    "stateCode": "CE"
  },
  {
    "city": "ITAPIÚNA",
    "electionZone": "98",
    "stateCode": "CE"
  },
  {
    "city": "SANTANA DO CARIRI",
    "electionZone": "53",
    "stateCode": "CE"
  },
  {
    "city": "GRANJEIRO",
    "electionZone": "62",
    "stateCode": "CE"
  },
  {
    "city": "CARNAUBAL",
    "electionZone": "22",
    "stateCode": "CE"
  },
  {
    "city": "ARARENDÁ",
    "electionZone": "48",
    "stateCode": "CE"
  },
  {
    "city": "BREJO SANTO",
    "electionZone": "70",
    "stateCode": "CE"
  },
  {
    "city": "MORADA NOVA",
    "electionZone": "47",
    "stateCode": "CE"
  },
  {
    "city": "MADALENA",
    "electionZone": "63",
    "stateCode": "CE"
  },
  {
    "city": "PEREIRO",
    "electionZone": "51",
    "stateCode": "CE"
  },
  {
    "city": "GOVERNADOR LINDENBERG",
    "electionZone": "6",
    "stateCode": "ES"
  },
  {
    "city": "APIACÁ",
    "electionZone": "43",
    "stateCode": "ES"
  },
  {
    "city": "VILA VELHA",
    "electionZone": "57",
    "stateCode": "ES"
  },
  {
    "city": "SÃO ROQUE DO CANAÃ",
    "electionZone": "11",
    "stateCode": "ES"
  },
  {
    "city": "VILA PAVÃO",
    "electionZone": "30",
    "stateCode": "ES"
  },
  {
    "city": "VILA VALÉRIO",
    "electionZone": "37",
    "stateCode": "ES"
  },
  {
    "city": "PANCAS",
    "electionZone": "36",
    "stateCode": "ES"
  },
  {
    "city": "CONCEIÇÃO DA BARRA",
    "electionZone": "27",
    "stateCode": "ES"
  },
  {
    "city": "PRESIDENTE KENNEDY",
    "electionZone": "49",
    "stateCode": "ES"
  },
  {
    "city": "SOORETAMA",
    "electionZone": "25",
    "stateCode": "ES"
  },
  {
    "city": "ARACRUZ",
    "electionZone": "20",
    "stateCode": "ES"
  },
  {
    "city": "IBIRAÇU",
    "electionZone": "14",
    "stateCode": "ES"
  },
  {
    "city": "ICONHA",
    "electionZone": "35",
    "stateCode": "ES"
  },
  {
    "city": "VILA VELHA",
    "electionZone": "55",
    "stateCode": "ES"
  },
  {
    "city": "GUAÇUÍ",
    "electionZone": "13",
    "stateCode": "ES"
  },
  {
    "city": "RIO BANANAL",
    "electionZone": "51",
    "stateCode": "ES"
  },
  {
    "city": "VITÓRIA",
    "electionZone": "56",
    "stateCode": "ES"
  },
  {
    "city": "VITÓRIA",
    "electionZone": "52",
    "stateCode": "ES"
  },
  {
    "city": "LINHARES",
    "electionZone": "25",
    "stateCode": "ES"
  },
  {
    "city": "PINHEIROS",
    "electionZone": "39",
    "stateCode": "ES"
  },
  {
    "city": "ATÍLIO VIVÁCQUA",
    "electionZone": "2",
    "stateCode": "ES"
  },
  {
    "city": "SANTA TERESA",
    "electionZone": "11",
    "stateCode": "ES"
  },
  {
    "city": "ANCHIETA",
    "electionZone": "17",
    "stateCode": "ES"
  },
  {
    "city": "ALFREDO CHAVES",
    "electionZone": "12",
    "stateCode": "ES"
  },
  {
    "city": "VENDA NOVA DO IMIGRANTE",
    "electionZone": "40",
    "stateCode": "ES"
  },
  {
    "city": "MUNIZ FREIRE",
    "electionZone": "19",
    "stateCode": "ES"
  },
  {
    "city": "FUNDÃO",
    "electionZone": "14",
    "stateCode": "ES"
  },
  {
    "city": "MIMOSO DO SUL",
    "electionZone": "5",
    "stateCode": "ES"
  },
  {
    "city": "ÁGUA DOCE DO NORTE",
    "electionZone": "23",
    "stateCode": "ES"
  },
  {
    "city": "JOÃO NEIVA",
    "electionZone": "14",
    "stateCode": "ES"
  },
  {
    "city": "DOMINGOS MARTINS",
    "electionZone": "15",
    "stateCode": "ES"
  },
  {
    "city": "VARGEM ALTA",
    "electionZone": "2",
    "stateCode": "ES"
  },
  {
    "city": "MARECHAL FLORIANO",
    "electionZone": "15",
    "stateCode": "ES"
  },
  {
    "city": "PEDRO CANÁRIO",
    "electionZone": "50",
    "stateCode": "ES"
  },
  {
    "city": "SERRA",
    "electionZone": "53",
    "stateCode": "ES"
  },
  {
    "city": "JERÔNIMO MONTEIRO",
    "electionZone": "48",
    "stateCode": "ES"
  },
  {
    "city": "ALEGRE",
    "electionZone": "4",
    "stateCode": "ES"
  },
  {
    "city": "NOVA VENÉCIA",
    "electionZone": "30",
    "stateCode": "ES"
  },
  {
    "city": "BOA ESPERANÇA",
    "electionZone": "41",
    "stateCode": "ES"
  },
  {
    "city": "ITAGUAÇU",
    "electionZone": "16",
    "stateCode": "ES"
  },
  {
    "city": "MUCURICI",
    "electionZone": "31",
    "stateCode": "ES"
  },
  {
    "city": "BAIXO GUANDU",
    "electionZone": "7",
    "stateCode": "ES"
  },
  {
    "city": "MUQUI",
    "electionZone": "28",
    "stateCode": "ES"
  },
  {
    "city": "BOM JESUS DO NORTE",
    "electionZone": "44",
    "stateCode": "ES"
  },
  {
    "city": "MONTANHA",
    "electionZone": "38",
    "stateCode": "ES"
  },
  {
    "city": "VILA VELHA",
    "electionZone": "32",
    "stateCode": "ES"
  },
  {
    "city": "ECOPORANGA",
    "electionZone": "33",
    "stateCode": "ES"
  },
  {
    "city": "JAGUARÉ",
    "electionZone": "21",
    "stateCode": "ES"
  },
  {
    "city": "PONTO BELO",
    "electionZone": "31",
    "stateCode": "ES"
  },
  {
    "city": "SANTA LEOPOLDINA",
    "electionZone": "9",
    "stateCode": "ES"
  },
  {
    "city": "CACHOEIRO DE ITAPEMIRIM",
    "electionZone": "2",
    "stateCode": "ES"
  },
  {
    "city": "SERRA",
    "electionZone": "59",
    "stateCode": "ES"
  },
  {
    "city": "SERRA",
    "electionZone": "26",
    "stateCode": "ES"
  },
  {
    "city": "SÃO GABRIEL DA PALHA",
    "electionZone": "37",
    "stateCode": "ES"
  },
  {
    "city": "ITARANA",
    "electionZone": "46",
    "stateCode": "ES"
  },
  {
    "city": "IRUPI",
    "electionZone": "18",
    "stateCode": "ES"
  },
  {
    "city": "DIVINO DE SÃO LOURENÇO",
    "electionZone": "13",
    "stateCode": "ES"
  },
  {
    "city": "IÚNA",
    "electionZone": "18",
    "stateCode": "ES"
  },
  {
    "city": "CARIACICA",
    "electionZone": "54",
    "stateCode": "ES"
  },
  {
    "city": "CARIACICA",
    "electionZone": "34",
    "stateCode": "ES"
  },
  {
    "city": "VITÓRIA",
    "electionZone": "1",
    "stateCode": "ES"
  },
  {
    "city": "SÃO DOMINGOS DO NORTE",
    "electionZone": "6",
    "stateCode": "ES"
  },
  {
    "city": "IBATIBA",
    "electionZone": "18",
    "stateCode": "ES"
  },
  {
    "city": "PIÚMA",
    "electionZone": "35",
    "stateCode": "ES"
  },
  {
    "city": "ITAPEMIRIM",
    "electionZone": "22",
    "stateCode": "ES"
  },
  {
    "city": "CASTELO",
    "electionZone": "3",
    "stateCode": "ES"
  },
  {
    "city": "SÃO MATEUS",
    "electionZone": "21",
    "stateCode": "ES"
  },
  {
    "city": "BARRA DE SÃO FRANCISCO",
    "electionZone": "23",
    "stateCode": "ES"
  },
  {
    "city": "MARATAÍZES",
    "electionZone": "22",
    "stateCode": "ES"
  },
  {
    "city": "MANTENÓPOLIS",
    "electionZone": "29",
    "stateCode": "ES"
  },
  {
    "city": "SANTA MARIA DE JETIBÁ",
    "electionZone": "9",
    "stateCode": "ES"
  },
  {
    "city": "ÁGUIA BRANCA",
    "electionZone": "37",
    "stateCode": "ES"
  },
  {
    "city": "LARANJA DA TERRA",
    "electionZone": "8",
    "stateCode": "ES"
  },
  {
    "city": "COLATINA",
    "electionZone": "6",
    "stateCode": "ES"
  },
  {
    "city": "RIO NOVO DO SUL",
    "electionZone": "42",
    "stateCode": "ES"
  },
  {
    "city": "DORES DO RIO PRETO",
    "electionZone": "45",
    "stateCode": "ES"
  },
  {
    "city": "GUARAPARI",
    "electionZone": "24",
    "stateCode": "ES"
  },
  {
    "city": "CONCEIÇÃO DO CASTELO",
    "electionZone": "40",
    "stateCode": "ES"
  },
  {
    "city": "BREJETUBA",
    "electionZone": "8",
    "stateCode": "ES"
  },
  {
    "city": "MARILÂNDIA",
    "electionZone": "6",
    "stateCode": "ES"
  },
  {
    "city": "VIANA",
    "electionZone": "47",
    "stateCode": "ES"
  },
  {
    "city": "AFONSO CLÁUDIO",
    "electionZone": "8",
    "stateCode": "ES"
  },
  {
    "city": "IBITIRAMA",
    "electionZone": "4",
    "stateCode": "ES"
  },
  {
    "city": "SÃO JOSÉ DO CALÇADO",
    "electionZone": "10",
    "stateCode": "ES"
  },
  {
    "city": "ALTO RIO NOVO",
    "electionZone": "36",
    "stateCode": "ES"
  },
  {
    "city": "ISRAELÂNDIA",
    "electionZone": "120",
    "stateCode": "GO"
  },
  {
    "city": "POSSE",
    "electionZone": "29",
    "stateCode": "GO"
  },
  {
    "city": "OUVIDOR",
    "electionZone": "8",
    "stateCode": "GO"
  },
  {
    "city": "CAMPESTRE DE GOIÁS",
    "electionZone": "49",
    "stateCode": "GO"
  },
  {
    "city": "MINAÇU",
    "electionZone": "130",
    "stateCode": "GO"
  },
  {
    "city": "PIRENÓPOLIS",
    "electionZone": "26",
    "stateCode": "GO"
  },
  {
    "city": "TURVÂNIA",
    "electionZone": "115",
    "stateCode": "GO"
  },
  {
    "city": "CAMPOS VERDES",
    "electionZone": "85",
    "stateCode": "GO"
  },
  {
    "city": "TRINDADE",
    "electionZone": "49",
    "stateCode": "GO"
  },
  {
    "city": "ÁGUA FRIA DE GOIÁS",
    "electionZone": "44",
    "stateCode": "GO"
  },
  {
    "city": "AMARALINA",
    "electionZone": "88",
    "stateCode": "GO"
  },
  {
    "city": "SANTA RITA DO NOVO DESTINO",
    "electionZone": "74",
    "stateCode": "GO"
  },
  {
    "city": "SANTA BÁRBARA DE GOIÁS",
    "electionZone": "64",
    "stateCode": "GO"
  },
  {
    "city": "SANTA FÉ DE GOIÁS",
    "electionZone": "95",
    "stateCode": "GO"
  },
  {
    "city": "PORTELÂNDIA",
    "electionZone": "21",
    "stateCode": "GO"
  },
  {
    "city": "PADRE BERNARDO",
    "electionZone": "131",
    "stateCode": "GO"
  },
  {
    "city": "BURITINÓPOLIS",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "GUARAÍTA",
    "electionZone": "77",
    "stateCode": "GO"
  },
  {
    "city": "GOIÁS",
    "electionZone": "12",
    "stateCode": "GO"
  },
  {
    "city": "ANHANGÜERA",
    "electionZone": "52",
    "stateCode": "GO"
  },
  {
    "city": "HEITORAÍ",
    "electionZone": "15",
    "stateCode": "GO"
  },
  {
    "city": "ORIZONA",
    "electionZone": "23",
    "stateCode": "GO"
  },
  {
    "city": "PORTEIRÃO",
    "electionZone": "38",
    "stateCode": "GO"
  },
  {
    "city": "GOIANDIRA",
    "electionZone": "37",
    "stateCode": "GO"
  },
  {
    "city": "SÃO JOÃO D'ALIANÇA",
    "electionZone": "143",
    "stateCode": "GO"
  },
  {
    "city": "ITAPURANGA",
    "electionZone": "77",
    "stateCode": "GO"
  },
  {
    "city": "BOM JESUS DE GOIÁS",
    "electionZone": "124",
    "stateCode": "GO"
  },
  {
    "city": "BELA VISTA DE GOIÁS",
    "electionZone": "32",
    "stateCode": "GO"
  },
  {
    "city": "COCALZINHO DE GOIÁS",
    "electionZone": "9",
    "stateCode": "GO"
  },
  {
    "city": "GOIATUBA",
    "electionZone": "38",
    "stateCode": "GO"
  },
  {
    "city": "NOVA GLÓRIA",
    "electionZone": "72",
    "stateCode": "GO"
  },
  {
    "city": "SANTA HELENA DE GOIÁS",
    "electionZone": "66",
    "stateCode": "GO"
  },
  {
    "city": "IACIARA",
    "electionZone": "29",
    "stateCode": "GO"
  },
  {
    "city": "VICENTINÓPOLIS",
    "electionZone": "45",
    "stateCode": "GO"
  },
  {
    "city": "SANTO ANTÔNIO DO DESCOBERTO",
    "electionZone": "24",
    "stateCode": "GO"
  },
  {
    "city": "MONTES CLAROS DE GOIÁS",
    "electionZone": "120",
    "stateCode": "GO"
  },
  {
    "city": "ITAGUARU",
    "electionZone": "86",
    "stateCode": "GO"
  },
  {
    "city": "TAQUARAL DE GOIÁS",
    "electionZone": "114",
    "stateCode": "GO"
  },
  {
    "city": "BARRO ALTO",
    "electionZone": "142",
    "stateCode": "GO"
  },
  {
    "city": "MAIRIPOTABA",
    "electionZone": "45",
    "stateCode": "GO"
  },
  {
    "city": "MORRO AGUDO DE GOIÁS",
    "electionZone": "76",
    "stateCode": "GO"
  },
  {
    "city": "AURILÂNDIA",
    "electionZone": "59",
    "stateCode": "GO"
  },
  {
    "city": "EDÉIA",
    "electionZone": "68",
    "stateCode": "GO"
  },
  {
    "city": "MATRINCHÃ",
    "electionZone": "109",
    "stateCode": "GO"
  },
  {
    "city": "BRITÂNIA",
    "electionZone": "95",
    "stateCode": "GO"
  },
  {
    "city": "TROMBAS",
    "electionZone": "125",
    "stateCode": "GO"
  },
  {
    "city": "FORMOSO",
    "electionZone": "125",
    "stateCode": "GO"
  },
  {
    "city": "FLORES DE GOIÁS",
    "electionZone": "11",
    "stateCode": "GO"
  },
  {
    "city": "MONTIVIDIU DO NORTE",
    "electionZone": "125",
    "stateCode": "GO"
  },
  {
    "city": "PALMINÓPOLIS",
    "electionZone": "115",
    "stateCode": "GO"
  },
  {
    "city": "ARUANÃ",
    "electionZone": "110",
    "stateCode": "GO"
  },
  {
    "city": "SANTA ISABEL",
    "electionZone": "112",
    "stateCode": "GO"
  },
  {
    "city": "BURITI ALEGRE",
    "electionZone": "5",
    "stateCode": "GO"
  },
  {
    "city": "ÁGUA LIMPA",
    "electionZone": "5",
    "stateCode": "GO"
  },
  {
    "city": "NOVO BRASIL",
    "electionZone": "79",
    "stateCode": "GO"
  },
  {
    "city": "ARENÓPOLIS",
    "electionZone": "102",
    "stateCode": "GO"
  },
  {
    "city": "JAUPACI",
    "electionZone": "120",
    "stateCode": "GO"
  },
  {
    "city": "GUARANI DE GOIÁS",
    "electionZone": "29",
    "stateCode": "GO"
  },
  {
    "city": "VARJÃO",
    "electionZone": "98",
    "stateCode": "GO"
  },
  {
    "city": "MARA ROSA",
    "electionZone": "88",
    "stateCode": "GO"
  },
  {
    "city": "ITARUMÃ",
    "electionZone": "106",
    "stateCode": "GO"
  },
  {
    "city": "GUARINOS",
    "electionZone": "39",
    "stateCode": "GO"
  },
  {
    "city": "CACHOEIRA DE GOIÁS",
    "electionZone": "59",
    "stateCode": "GO"
  },
  {
    "city": "ÁGUAS LINDAS DE GOIÁS",
    "electionZone": "28",
    "stateCode": "GO"
  },
  {
    "city": "GOIANÉSIA",
    "electionZone": "74",
    "stateCode": "GO"
  },
  {
    "city": "CROMÍNIA",
    "electionZone": "45",
    "stateCode": "GO"
  },
  {
    "city": "SÃO LUÍS DE MONTES BELOS",
    "electionZone": "80",
    "stateCode": "GO"
  },
  {
    "city": "CORUMBÁ DE GOIÁS",
    "electionZone": "9",
    "stateCode": "GO"
  },
  {
    "city": "CHAPADÃO DO CÉU",
    "electionZone": "18",
    "stateCode": "GO"
  },
  {
    "city": "LUZIÂNIA",
    "electionZone": "19",
    "stateCode": "GO"
  },
  {
    "city": "LUZIÂNIA",
    "electionZone": "139",
    "stateCode": "GO"
  },
  {
    "city": "NOVA ROMA",
    "electionZone": "29",
    "stateCode": "GO"
  },
  {
    "city": "ITAGUARI",
    "electionZone": "114",
    "stateCode": "GO"
  },
  {
    "city": "PONTALINA",
    "electionZone": "45",
    "stateCode": "GO"
  },
  {
    "city": "SÃO DOMINGOS",
    "electionZone": "47",
    "stateCode": "GO"
  },
  {
    "city": "CRISTALINA",
    "electionZone": "36",
    "stateCode": "GO"
  },
  {
    "city": "APARECIDA DO RIO DOCE",
    "electionZone": "106",
    "stateCode": "GO"
  },
  {
    "city": "JOVIÂNIA",
    "electionZone": "93",
    "stateCode": "GO"
  },
  {
    "city": "MUNDO NOVO",
    "electionZone": "94",
    "stateCode": "GO"
  },
  {
    "city": "NOVO GAMA",
    "electionZone": "4",
    "stateCode": "GO"
  },
  {
    "city": "ITAPACI",
    "electionZone": "39",
    "stateCode": "GO"
  },
  {
    "city": "BALIZA",
    "electionZone": "35",
    "stateCode": "GO"
  },
  {
    "city": "CATALÃO",
    "electionZone": "8",
    "stateCode": "GO"
  },
  {
    "city": "HIDROLINA",
    "electionZone": "39",
    "stateCode": "GO"
  },
  {
    "city": "UIRAPURU",
    "electionZone": "85",
    "stateCode": "GO"
  },
  {
    "city": "PLANALTINA",
    "electionZone": "44",
    "stateCode": "GO"
  },
  {
    "city": "FAINA",
    "electionZone": "12",
    "stateCode": "GO"
  },
  {
    "city": "SÃO FRANCISCO DE GOIÁS",
    "electionZone": "17",
    "stateCode": "GO"
  },
  {
    "city": "BOM JARDIM DE GOIÁS",
    "electionZone": "35",
    "stateCode": "GO"
  },
  {
    "city": "SÃO MIGUEL DO ARAGUAIA",
    "electionZone": "94",
    "stateCode": "GO"
  },
  {
    "city": "GUAPÓ",
    "electionZone": "56",
    "stateCode": "GO"
  },
  {
    "city": "JARAGUÁ",
    "electionZone": "17",
    "stateCode": "GO"
  },
  {
    "city": "COLINAS DO SUL",
    "electionZone": "41",
    "stateCode": "GO"
  },
  {
    "city": "DIVINÓPOLIS DE GOIÁS",
    "electionZone": "47",
    "stateCode": "GO"
  },
  {
    "city": "ARAGUAPAZ",
    "electionZone": "110",
    "stateCode": "GO"
  },
  {
    "city": "CAMPOS BELOS",
    "electionZone": "105",
    "stateCode": "GO"
  },
  {
    "city": "NIQUELÂNDIA",
    "electionZone": "41",
    "stateCode": "GO"
  },
  {
    "city": "ITABERAÍ",
    "electionZone": "15",
    "stateCode": "GO"
  },
  {
    "city": "SÍTIO D'ABADIA",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "IPORÁ",
    "electionZone": "53",
    "stateCode": "GO"
  },
  {
    "city": "ALTO PARAÍSO DE GOIÁS",
    "electionZone": "143",
    "stateCode": "GO"
  },
  {
    "city": "MINEIROS",
    "electionZone": "21",
    "stateCode": "GO"
  },
  {
    "city": "PORANGATU",
    "electionZone": "55",
    "stateCode": "GO"
  },
  {
    "city": "FORMOSA",
    "electionZone": "11",
    "stateCode": "GO"
  },
  {
    "city": "MORRINHOS",
    "electionZone": "22",
    "stateCode": "GO"
  },
  {
    "city": "LAGOA SANTA",
    "electionZone": "96",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "134",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "147",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "146",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "135",
    "stateCode": "GO"
  },
  {
    "city": "INHUMAS",
    "electionZone": "13",
    "stateCode": "GO"
  },
  {
    "city": "CACHOEIRA DOURADA",
    "electionZone": "16",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "136",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "126",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "127",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "2",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "1",
    "stateCode": "GO"
  },
  {
    "city": "AMERICANO DO BRASIL",
    "electionZone": "34",
    "stateCode": "GO"
  },
  {
    "city": "PIRES DO RIO",
    "electionZone": "27",
    "stateCode": "GO"
  },
  {
    "city": "HIDROLÂNDIA",
    "electionZone": "62",
    "stateCode": "GO"
  },
  {
    "city": "ADELÂNDIA",
    "electionZone": "34",
    "stateCode": "GO"
  },
  {
    "city": "APARECIDA DE GOIÂNIA",
    "electionZone": "119",
    "stateCode": "GO"
  },
  {
    "city": "APARECIDA DE GOIÂNIA",
    "electionZone": "145",
    "stateCode": "GO"
  },
  {
    "city": "JUSSARA",
    "electionZone": "95",
    "stateCode": "GO"
  },
  {
    "city": "MONTE ALEGRE DE GOIÁS",
    "electionZone": "105",
    "stateCode": "GO"
  },
  {
    "city": "ARAGARÇAS",
    "electionZone": "35",
    "stateCode": "GO"
  },
  {
    "city": "ALVORADA DO NORTE",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "PIRANHAS",
    "electionZone": "102",
    "stateCode": "GO"
  },
  {
    "city": "GOIÂNIA",
    "electionZone": "133",
    "stateCode": "GO"
  },
  {
    "city": "VALPARAÍSO DE GOIÁS",
    "electionZone": "33",
    "stateCode": "GO"
  },
  {
    "city": "SANTA ROSA DE GOIÁS",
    "electionZone": "65",
    "stateCode": "GO"
  },
  {
    "city": "URUTAÍ",
    "electionZone": "60",
    "stateCode": "GO"
  },
  {
    "city": "CACHOEIRA ALTA",
    "electionZone": "97",
    "stateCode": "GO"
  },
  {
    "city": "CAMPO ALEGRE DE GOIÁS",
    "electionZone": "14",
    "stateCode": "GO"
  },
  {
    "city": "CÓRREGO DO OURO",
    "electionZone": "113",
    "stateCode": "GO"
  },
  {
    "city": "SIMOLÂNDIA",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "SANTA TEREZINHA DE GOIÁS",
    "electionZone": "85",
    "stateCode": "GO"
  },
  {
    "city": "CAVALCANTE",
    "electionZone": "99",
    "stateCode": "GO"
  },
  {
    "city": "BONFINÓPOLIS",
    "electionZone": "67",
    "stateCode": "GO"
  },
  {
    "city": "MOIPORÁ",
    "electionZone": "121",
    "stateCode": "GO"
  },
  {
    "city": "PARAÚNA",
    "electionZone": "43",
    "stateCode": "GO"
  },
  {
    "city": "CAMPINORTE",
    "electionZone": "50",
    "stateCode": "GO"
  },
  {
    "city": "ITAJÁ",
    "electionZone": "96",
    "stateCode": "GO"
  },
  {
    "city": "JATAÍ",
    "electionZone": "18",
    "stateCode": "GO"
  },
  {
    "city": "APARECIDA DE GOIÂNIA",
    "electionZone": "132",
    "stateCode": "GO"
  },
  {
    "city": "MOSSÂMEDES",
    "electionZone": "82",
    "stateCode": "GO"
  },
  {
    "city": "ANICUNS",
    "electionZone": "34",
    "stateCode": "GO"
  },
  {
    "city": "RIO VERDE",
    "electionZone": "140",
    "stateCode": "GO"
  },
  {
    "city": "SÃO PATRÍCIO",
    "electionZone": "100",
    "stateCode": "GO"
  },
  {
    "city": "ABADIA DE GOIÁS",
    "electionZone": "56",
    "stateCode": "GO"
  },
  {
    "city": "ITUMBIARA",
    "electionZone": "16",
    "stateCode": "GO"
  },
  {
    "city": "ITUMBIARA",
    "electionZone": "138",
    "stateCode": "GO"
  },
  {
    "city": "RIO VERDE",
    "electionZone": "30",
    "stateCode": "GO"
  },
  {
    "city": "MOZARLÂNDIA",
    "electionZone": "110",
    "stateCode": "GO"
  },
  {
    "city": "CABECEIRAS",
    "electionZone": "11",
    "stateCode": "GO"
  },
  {
    "city": "FIRMINÓPOLIS",
    "electionZone": "63",
    "stateCode": "GO"
  },
  {
    "city": "PALMEIRAS DE GOIÁS",
    "electionZone": "20",
    "stateCode": "GO"
  },
  {
    "city": "PIRACANJUBA",
    "electionZone": "25",
    "stateCode": "GO"
  },
  {
    "city": "CIDADE OCIDENTAL",
    "electionZone": "42",
    "stateCode": "GO"
  },
  {
    "city": "VIANÓPOLIS",
    "electionZone": "61",
    "stateCode": "GO"
  },
  {
    "city": "ITAPIRAPUÃ",
    "electionZone": "109",
    "stateCode": "GO"
  },
  {
    "city": "BRAZABRANTES",
    "electionZone": "101",
    "stateCode": "GO"
  },
  {
    "city": "ANÁPOLIS",
    "electionZone": "141",
    "stateCode": "GO"
  },
  {
    "city": "SANTO ANTÔNIO DE GOIÁS",
    "electionZone": "101",
    "stateCode": "GO"
  },
  {
    "city": "ESTRELA DO NORTE",
    "electionZone": "118",
    "stateCode": "GO"
  },
  {
    "city": "SANCLERLÂNDIA",
    "electionZone": "113",
    "stateCode": "GO"
  },
  {
    "city": "AVELINÓPOLIS",
    "electionZone": "103",
    "stateCode": "GO"
  },
  {
    "city": "SANTO ANTÔNIO DA BARRA",
    "electionZone": "140",
    "stateCode": "GO"
  },
  {
    "city": "ARAGOIÂNIA",
    "electionZone": "56",
    "stateCode": "GO"
  },
  {
    "city": "ANÁPOLIS",
    "electionZone": "144",
    "stateCode": "GO"
  },
  {
    "city": "SÃO SIMÃO",
    "electionZone": "83",
    "stateCode": "GO"
  },
  {
    "city": "PALESTINA DE GOIÁS",
    "electionZone": "6",
    "stateCode": "GO"
  },
  {
    "city": "PARANAIGUARA",
    "electionZone": "83",
    "stateCode": "GO"
  },
  {
    "city": "ANÁPOLIS",
    "electionZone": "137",
    "stateCode": "GO"
  },
  {
    "city": "RIO QUENTE",
    "electionZone": "7",
    "stateCode": "GO"
  },
  {
    "city": "MONTIVIDIU",
    "electionZone": "140",
    "stateCode": "GO"
  },
  {
    "city": "ACREÚNA",
    "electionZone": "128",
    "stateCode": "GO"
  },
  {
    "city": "CALDAS NOVAS",
    "electionZone": "7",
    "stateCode": "GO"
  },
  {
    "city": "SILVÂNIA",
    "electionZone": "31",
    "stateCode": "GO"
  },
  {
    "city": "CAIAPÔNIA",
    "electionZone": "6",
    "stateCode": "GO"
  },
  {
    "city": "CALDAZINHA",
    "electionZone": "40",
    "stateCode": "GO"
  },
  {
    "city": "OURO VERDE DE GOIÁS",
    "electionZone": "144",
    "stateCode": "GO"
  },
  {
    "city": "CATURAÍ",
    "electionZone": "101",
    "stateCode": "GO"
  },
  {
    "city": "GOIANÁPOLIS",
    "electionZone": "89",
    "stateCode": "GO"
  },
  {
    "city": "PETROLINA DE GOIÁS",
    "electionZone": "65",
    "stateCode": "GO"
  },
  {
    "city": "QUIRINÓPOLIS",
    "electionZone": "46",
    "stateCode": "GO"
  },
  {
    "city": "SANTA RITA DO ARAGUAIA",
    "electionZone": "21",
    "stateCode": "GO"
  },
  {
    "city": "INDIARA",
    "electionZone": "84",
    "stateCode": "GO"
  },
  {
    "city": "ANÁPOLIS",
    "electionZone": "3",
    "stateCode": "GO"
  },
  {
    "city": "SANTA CRUZ DE GOIÁS",
    "electionZone": "51",
    "stateCode": "GO"
  },
  {
    "city": "JANDAIA",
    "electionZone": "84",
    "stateCode": "GO"
  },
  {
    "city": "ABADIÂNIA",
    "electionZone": "90",
    "stateCode": "GO"
  },
  {
    "city": "DOVERLÂNDIA",
    "electionZone": "6",
    "stateCode": "GO"
  },
  {
    "city": "URUAÇU",
    "electionZone": "50",
    "stateCode": "GO"
  },
  {
    "city": "NERÓPOLIS",
    "electionZone": "54",
    "stateCode": "GO"
  },
  {
    "city": "NOVA VENEZA",
    "electionZone": "54",
    "stateCode": "GO"
  },
  {
    "city": "VILA BOA",
    "electionZone": "11",
    "stateCode": "GO"
  },
  {
    "city": "PALMELO",
    "electionZone": "51",
    "stateCode": "GO"
  },
  {
    "city": "GOIANIRA",
    "electionZone": "101",
    "stateCode": "GO"
  },
  {
    "city": "GAMELEIRA DE GOIÁS",
    "electionZone": "31",
    "stateCode": "GO"
  },
  {
    "city": "NOVA AURORA",
    "electionZone": "37",
    "stateCode": "GO"
  },
  {
    "city": "NAZÁRIO",
    "electionZone": "64",
    "stateCode": "GO"
  },
  {
    "city": "ARAÇU",
    "electionZone": "103",
    "stateCode": "GO"
  },
  {
    "city": "ITAUÇU",
    "electionZone": "57",
    "stateCode": "GO"
  },
  {
    "city": "CAMPO LIMPO DE GOIÁS",
    "electionZone": "3",
    "stateCode": "GO"
  },
  {
    "city": "FAZENDA NOVA",
    "electionZone": "79",
    "stateCode": "GO"
  },
  {
    "city": "MAMBAÍ",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "RUBIATABA",
    "electionZone": "76",
    "stateCode": "GO"
  },
  {
    "city": "JESÚPOLIS",
    "electionZone": "17",
    "stateCode": "GO"
  },
  {
    "city": "ALEXÂNIA",
    "electionZone": "87",
    "stateCode": "GO"
  },
  {
    "city": "ALTO HORIZONTE",
    "electionZone": "50",
    "stateCode": "GO"
  },
  {
    "city": "TURVELÂNDIA",
    "electionZone": "128",
    "stateCode": "GO"
  },
  {
    "city": "MAURILÂNDIA",
    "electionZone": "66",
    "stateCode": "GO"
  },
  {
    "city": "PANAMÁ",
    "electionZone": "91",
    "stateCode": "GO"
  },
  {
    "city": "CUMARI",
    "electionZone": "52",
    "stateCode": "GO"
  },
  {
    "city": "PROFESSOR JAMIL",
    "electionZone": "45",
    "stateCode": "GO"
  },
  {
    "city": "NOVO PLANALTO",
    "electionZone": "55",
    "stateCode": "GO"
  },
  {
    "city": "EDEALINA",
    "electionZone": "68",
    "stateCode": "GO"
  },
  {
    "city": "SÃO JOÃO DA PARAÚNA",
    "electionZone": "43",
    "stateCode": "GO"
  },
  {
    "city": "TERESINA DE GOIÁS",
    "electionZone": "99",
    "stateCode": "GO"
  },
  {
    "city": "CRIXÁS",
    "electionZone": "85",
    "stateCode": "GO"
  },
  {
    "city": "CASTELÂNDIA",
    "electionZone": "30",
    "stateCode": "GO"
  },
  {
    "city": "SANTA TEREZA DE GOIÁS",
    "electionZone": "125",
    "stateCode": "GO"
  },
  {
    "city": "AMORINÓPOLIS",
    "electionZone": "53",
    "stateCode": "GO"
  },
  {
    "city": "PILAR DE GOIÁS",
    "electionZone": "39",
    "stateCode": "GO"
  },
  {
    "city": "DAMIANÓPOLIS",
    "electionZone": "123",
    "stateCode": "GO"
  },
  {
    "city": "SERRANÓPOLIS",
    "electionZone": "18",
    "stateCode": "GO"
  },
  {
    "city": "DAVINÓPOLIS",
    "electionZone": "8",
    "stateCode": "GO"
  },
  {
    "city": "MIMOSO DE GOIÁS",
    "electionZone": "131",
    "stateCode": "GO"
  },
  {
    "city": "NOVA CRIXÁS",
    "electionZone": "110",
    "stateCode": "GO"
  },
  {
    "city": "RIALMA",
    "electionZone": "112",
    "stateCode": "GO"
  },
  {
    "city": "CAMPINAÇU",
    "electionZone": "130",
    "stateCode": "GO"
  },
  {
    "city": "TRÊS RANCHOS",
    "electionZone": "8",
    "stateCode": "GO"
  },
  {
    "city": "NOVA AMÉRICA",
    "electionZone": "76",
    "stateCode": "GO"
  },
  {
    "city": "VILA PROPÍCIO",
    "electionZone": "74",
    "stateCode": "GO"
  },
  {
    "city": "PEROLÂNDIA",
    "electionZone": "18",
    "stateCode": "GO"
  },
  {
    "city": "SÃO LUIZ DO NORTE",
    "electionZone": "39",
    "stateCode": "GO"
  },
  {
    "city": "CERES",
    "electionZone": "72",
    "stateCode": "GO"
  },
  {
    "city": "IPAMERI",
    "electionZone": "14",
    "stateCode": "GO"
  },
  {
    "city": "SÃO MIGUEL DO PASSA QUATRO",
    "electionZone": "61",
    "stateCode": "GO"
  },
  {
    "city": "NOVA IGUAÇU DE GOIÁS",
    "electionZone": "50",
    "stateCode": "GO"
  },
  {
    "city": "RIANÁPOLIS",
    "electionZone": "112",
    "stateCode": "GO"
  },
  {
    "city": "DAMOLÂNDIA",
    "electionZone": "13",
    "stateCode": "GO"
  },
  {
    "city": "IVOLÂNDIA",
    "electionZone": "121",
    "stateCode": "GO"
  },
  {
    "city": "TEREZÓPOLIS DE GOIÁS",
    "electionZone": "89",
    "stateCode": "GO"
  },
  {
    "city": "URUANA",
    "electionZone": "58",
    "stateCode": "GO"
  },
  {
    "city": "BURITI DE GOIÁS",
    "electionZone": "113",
    "stateCode": "GO"
  },
  {
    "city": "MUTUNÓPOLIS",
    "electionZone": "118",
    "stateCode": "GO"
  },
  {
    "city": "LEOPOLDO DE BULHÕES",
    "electionZone": "67",
    "stateCode": "GO"
  },
  {
    "city": "CEZARINA",
    "electionZone": "20",
    "stateCode": "GO"
  },
  {
    "city": "MARZAGÃO",
    "electionZone": "7",
    "stateCode": "GO"
  },
  {
    "city": "INACIOLÂNDIA",
    "electionZone": "46",
    "stateCode": "GO"
  },
  {
    "city": "CARMO DO RIO VERDE",
    "electionZone": "100",
    "stateCode": "GO"
  },
  {
    "city": "SENADOR CANEDO",
    "electionZone": "40",
    "stateCode": "GO"
  },
  {
    "city": "GOUVELÂNDIA",
    "electionZone": "46",
    "stateCode": "GO"
  },
  {
    "city": "CRISTIANÓPOLIS",
    "electionZone": "51",
    "stateCode": "GO"
  },
  {
    "city": "CAÇU",
    "electionZone": "106",
    "stateCode": "GO"
  },
  {
    "city": "ALOÂNDIA",
    "electionZone": "93",
    "stateCode": "GO"
  },
  {
    "city": "CORUMBAÍBA",
    "electionZone": "10",
    "stateCode": "GO"
  },
  {
    "city": "IPIRANGA DE GOIÁS",
    "electionZone": "72",
    "stateCode": "GO"
  },
  {
    "city": "BONÓPOLIS",
    "electionZone": "55",
    "stateCode": "GO"
  },
  {
    "city": "APORÉ",
    "electionZone": "96",
    "stateCode": "GO"
  },
  {
    "city": "DIORAMA",
    "electionZone": "53",
    "stateCode": "GO"
  },
  {
    "city": "NOVA IORQUE",
    "electionZone": "17",
    "stateCode": "MA"
  },
  {
    "city": "BARÃO DE GRAJAÚ",
    "electionZone": "21",
    "stateCode": "MA"
  },
  {
    "city": "LAGO DO JUNCO",
    "electionZone": "74",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOÃO DO CARÚ",
    "electionZone": "78",
    "stateCode": "MA"
  },
  {
    "city": "SÍTIO NOVO",
    "electionZone": "99",
    "stateCode": "MA"
  },
  {
    "city": "PORTO RICO DO MARANHÃO",
    "electionZone": "30",
    "stateCode": "MA"
  },
  {
    "city": "SUCUPIRA DO RIACHÃO",
    "electionZone": "53",
    "stateCode": "MA"
  },
  {
    "city": "CACHOEIRA GRANDE",
    "electionZone": "31",
    "stateCode": "MA"
  },
  {
    "city": "VITORINO FREIRE",
    "electionZone": "49",
    "stateCode": "MA"
  },
  {
    "city": "LAGO DA PEDRA",
    "electionZone": "74",
    "stateCode": "MA"
  },
  {
    "city": "SANTA QUITÉRIA DO MARANHÃO",
    "electionZone": "24",
    "stateCode": "MA"
  },
  {
    "city": "CANTANHEDE",
    "electionZone": "16",
    "stateCode": "MA"
  },
  {
    "city": "BENEDITO LEITE",
    "electionZone": "17",
    "stateCode": "MA"
  },
  {
    "city": "FERNANDO FALCÃO",
    "electionZone": "23",
    "stateCode": "MA"
  },
  {
    "city": "MARAJÁ DO SENA",
    "electionZone": "102",
    "stateCode": "MA"
  },
  {
    "city": "LAGOA GRANDE DO MARANHÃO",
    "electionZone": "74",
    "stateCode": "MA"
  },
  {
    "city": "CEDRAL",
    "electionZone": "30",
    "stateCode": "MA"
  },
  {
    "city": "ITAIPAVA DO GRAJAÚ",
    "electionZone": "15",
    "stateCode": "MA"
  },
  {
    "city": "ÁGUA DOCE DO MARANHÃO",
    "electionZone": "12",
    "stateCode": "MA"
  },
  {
    "city": "SÃO RAIMUNDO DO DOCA BEZERRA",
    "electionZone": "61",
    "stateCode": "MA"
  },
  {
    "city": "RAPOSA",
    "electionZone": "93",
    "stateCode": "MA"
  },
  {
    "city": "IGARAPÉ GRANDE",
    "electionZone": "67",
    "stateCode": "MA"
  },
  {
    "city": "BACABEIRA",
    "electionZone": "18",
    "stateCode": "MA"
  },
  {
    "city": "GUIMARÃES",
    "electionZone": "30",
    "stateCode": "MA"
  },
  {
    "city": "TASSO FRAGOSO",
    "electionZone": "11",
    "stateCode": "MA"
  },
  {
    "city": "MAGALHÃES DE ALMEIDA",
    "electionZone": "51",
    "stateCode": "MA"
  },
  {
    "city": "LUÍS DOMINGUES",
    "electionZone": "55",
    "stateCode": "MA"
  },
  {
    "city": "PAÇO DO LUMIAR",
    "electionZone": "93",
    "stateCode": "MA"
  },
  {
    "city": "SÃO FRANCISCO DO MARANHÃO",
    "electionZone": "21",
    "stateCode": "MA"
  },
  {
    "city": "JENIPAPO DOS VIEIRAS",
    "electionZone": "97",
    "stateCode": "MA"
  },
  {
    "city": "LAGO VERDE",
    "electionZone": "66",
    "stateCode": "MA"
  },
  {
    "city": "SÃO FRANCISCO DO BREJÃO",
    "electionZone": "71",
    "stateCode": "MA"
  },
  {
    "city": "SÃO PEDRO DA ÁGUA BRANCA",
    "electionZone": "92",
    "stateCode": "MA"
  },
  {
    "city": "SANTA INÊS",
    "electionZone": "57",
    "stateCode": "MA"
  },
  {
    "city": "URBANO SANTOS",
    "electionZone": "73",
    "stateCode": "MA"
  },
  {
    "city": "CENTRO NOVO DO MARANHÃO",
    "electionZone": "100",
    "stateCode": "MA"
  },
  {
    "city": "OLHO D'ÁGUA DAS CUNHÃS",
    "electionZone": "87",
    "stateCode": "MA"
  },
  {
    "city": "POÇÃO DE PEDRAS",
    "electionZone": "61",
    "stateCode": "MA"
  },
  {
    "city": "CAROLINA",
    "electionZone": "26",
    "stateCode": "MA"
  },
  {
    "city": "LIMA CAMPOS",
    "electionZone": "67",
    "stateCode": "MA"
  },
  {
    "city": "MILAGRES DO MARANHÃO",
    "electionZone": "24",
    "stateCode": "MA"
  },
  {
    "city": "ITINGA DO MARANHÃO",
    "electionZone": "98",
    "stateCode": "MA"
  },
  {
    "city": "MATINHA",
    "electionZone": "86",
    "stateCode": "MA"
  },
  {
    "city": "ALTAMIRA DO MARANHÃO",
    "electionZone": "49",
    "stateCode": "MA"
  },
  {
    "city": "JOSELÂNDIA",
    "electionZone": "54",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR ARCHER",
    "electionZone": "48",
    "stateCode": "MA"
  },
  {
    "city": "SÃO FÉLIX DE BALSAS",
    "electionZone": "62",
    "stateCode": "MA"
  },
  {
    "city": "BURITIRANA",
    "electionZone": "58",
    "stateCode": "MA"
  },
  {
    "city": "MATA ROMA",
    "electionZone": "42",
    "stateCode": "MA"
  },
  {
    "city": "SANTANA DO MARANHÃO",
    "electionZone": "51",
    "stateCode": "MA"
  },
  {
    "city": "ARAME",
    "electionZone": "104",
    "stateCode": "MA"
  },
  {
    "city": "NINA RODRIGUES",
    "electionZone": "50",
    "stateCode": "MA"
  },
  {
    "city": "PRESIDENTE JUSCELINO",
    "electionZone": "31",
    "stateCode": "MA"
  },
  {
    "city": "SÃO PEDRO DOS CRENTES",
    "electionZone": "82",
    "stateCode": "MA"
  },
  {
    "city": "MARACAÇUMÉ",
    "electionZone": "100",
    "stateCode": "MA"
  },
  {
    "city": "CIDELÂNDIA",
    "electionZone": "71",
    "stateCode": "MA"
  },
  {
    "city": "ALDEIAS ALTAS",
    "electionZone": "5",
    "stateCode": "MA"
  },
  {
    "city": "AXIXÁ",
    "electionZone": "31",
    "stateCode": "MA"
  },
  {
    "city": "BELA VISTA DO MARANHÃO",
    "electionZone": "57",
    "stateCode": "MA"
  },
  {
    "city": "PIO XII",
    "electionZone": "87",
    "stateCode": "MA"
  },
  {
    "city": "SÃO DOMINGOS DO AZEITÃO",
    "electionZone": "17",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOSÉ DOS BASÍLIOS",
    "electionZone": "54",
    "stateCode": "MA"
  },
  {
    "city": "BURITI BRAVO",
    "electionZone": "44",
    "stateCode": "MA"
  },
  {
    "city": "MORROS",
    "electionZone": "31",
    "stateCode": "MA"
  },
  {
    "city": "VITÓRIA DO MEARIM",
    "electionZone": "41",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS GONZAGA DO MARANHÃO",
    "electionZone": "35",
    "stateCode": "MA"
  },
  {
    "city": "ARARI",
    "electionZone": "27",
    "stateCode": "MA"
  },
  {
    "city": "BELÁGUA",
    "electionZone": "73",
    "stateCode": "MA"
  },
  {
    "city": "TUTÓIA",
    "electionZone": "40",
    "stateCode": "MA"
  },
  {
    "city": "SANTO ANTÔNIO DOS LOPES",
    "electionZone": "48",
    "stateCode": "MA"
  },
  {
    "city": "MONTES ALTOS",
    "electionZone": "103",
    "stateCode": "MA"
  },
  {
    "city": "SANTO AMARO DO MARANHÃO",
    "electionZone": "32",
    "stateCode": "MA"
  },
  {
    "city": "IGARAPÉ DO MEIO",
    "electionZone": "110",
    "stateCode": "MA"
  },
  {
    "city": "ESPERANTINÓPOLIS",
    "electionZone": "61",
    "stateCode": "MA"
  },
  {
    "city": "OLINDA NOVA DO MARANHÃO",
    "electionZone": "86",
    "stateCode": "MA"
  },
  {
    "city": "COLINAS",
    "electionZone": "29",
    "stateCode": "MA"
  },
  {
    "city": "COROATÁ",
    "electionZone": "8",
    "stateCode": "MA"
  },
  {
    "city": "PARNARAMA",
    "electionZone": "36",
    "stateCode": "MA"
  },
  {
    "city": "TUFILÂNDIA",
    "electionZone": "43",
    "stateCode": "MA"
  },
  {
    "city": "DOM PEDRO",
    "electionZone": "48",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR LUIZ ROCHA",
    "electionZone": "60",
    "stateCode": "MA"
  },
  {
    "city": "PALMEIRÂNDIA",
    "electionZone": "38",
    "stateCode": "MA"
  },
  {
    "city": "CODÓ",
    "electionZone": "7",
    "stateCode": "MA"
  },
  {
    "city": "PINHEIRO",
    "electionZone": "106",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "3",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "91",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "88",
    "stateCode": "MA"
  },
  {
    "city": "SAMBAÍBA",
    "electionZone": "34",
    "stateCode": "MA"
  },
  {
    "city": "CAJAPIÓ",
    "electionZone": "111",
    "stateCode": "MA"
  },
  {
    "city": "BREJO",
    "electionZone": "24",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR EUGÊNIO BARROS",
    "electionZone": "108",
    "stateCode": "MA"
  },
  {
    "city": "SANTA RITA",
    "electionZone": "18",
    "stateCode": "MA"
  },
  {
    "city": "ARAGUANÃ",
    "electionZone": "96",
    "stateCode": "MA"
  },
  {
    "city": "FORTALEZA DOS NOGUEIRAS",
    "electionZone": "105",
    "stateCode": "MA"
  },
  {
    "city": "LORETO",
    "electionZone": "62",
    "stateCode": "MA"
  },
  {
    "city": "ITAPECURU MIRIM",
    "electionZone": "16",
    "stateCode": "MA"
  },
  {
    "city": "MATÕES DO NORTE",
    "electionZone": "84",
    "stateCode": "MA"
  },
  {
    "city": "PARAIBANO",
    "electionZone": "59",
    "stateCode": "MA"
  },
  {
    "city": "AMARANTE DO MARANHÃO",
    "electionZone": "99",
    "stateCode": "MA"
  },
  {
    "city": "SUCUPIRA DO NORTE",
    "electionZone": "72",
    "stateCode": "MA"
  },
  {
    "city": "AFONSO CUNHA",
    "electionZone": "28",
    "stateCode": "MA"
  },
  {
    "city": "GONÇALVES DIAS",
    "electionZone": "48",
    "stateCode": "MA"
  },
  {
    "city": "PIRAPEMAS",
    "electionZone": "68",
    "stateCode": "MA"
  },
  {
    "city": "COROATÁ",
    "electionZone": "68",
    "stateCode": "MA"
  },
  {
    "city": "APICUM-AÇU",
    "electionZone": "107",
    "stateCode": "MA"
  },
  {
    "city": "SANTA FILOMENA DO MARANHÃO",
    "electionZone": "79",
    "stateCode": "MA"
  },
  {
    "city": "SERRANO DO MARANHÃO",
    "electionZone": "107",
    "stateCode": "MA"
  },
  {
    "city": "JUNCO DO MARANHÃO",
    "electionZone": "100",
    "stateCode": "MA"
  },
  {
    "city": "FORMOSA DA SERRA NEGRA",
    "electionZone": "15",
    "stateCode": "MA"
  },
  {
    "city": "SANTA LUZIA",
    "electionZone": "70",
    "stateCode": "MA"
  },
  {
    "city": "SANTA HELENA",
    "electionZone": "83",
    "stateCode": "MA"
  },
  {
    "city": "MIRANDA DO NORTE",
    "electionZone": "16",
    "stateCode": "MA"
  },
  {
    "city": "SÃO MATEUS DO MARANHÃO",
    "electionZone": "84",
    "stateCode": "MA"
  },
  {
    "city": "ANAPURUS",
    "electionZone": "24",
    "stateCode": "MA"
  },
  {
    "city": "CHAPADINHA",
    "electionZone": "42",
    "stateCode": "MA"
  },
  {
    "city": "CENTRAL DO MARANHÃO",
    "electionZone": "30",
    "stateCode": "MA"
  },
  {
    "city": "BARRA DO CORDA",
    "electionZone": "97",
    "stateCode": "MA"
  },
  {
    "city": "BALSAS",
    "electionZone": "22",
    "stateCode": "MA"
  },
  {
    "city": "CARUTAPERA",
    "electionZone": "55",
    "stateCode": "MA"
  },
  {
    "city": "PINDARÉ-MIRIM",
    "electionZone": "43",
    "stateCode": "MA"
  },
  {
    "city": "GRAJAÚ",
    "electionZone": "15",
    "stateCode": "MA"
  },
  {
    "city": "BOM LUGAR",
    "electionZone": "66",
    "stateCode": "MA"
  },
  {
    "city": "BURITI",
    "electionZone": "25",
    "stateCode": "MA"
  },
  {
    "city": "CURURUPU",
    "electionZone": "14",
    "stateCode": "MA"
  },
  {
    "city": "TURILÂNDIA",
    "electionZone": "83",
    "stateCode": "MA"
  },
  {
    "city": "LAJEADO NOVO",
    "electionZone": "46",
    "stateCode": "MA"
  },
  {
    "city": "CAXIAS",
    "electionZone": "4",
    "stateCode": "MA"
  },
  {
    "city": "CAXIAS",
    "electionZone": "5",
    "stateCode": "MA"
  },
  {
    "city": "CAXIAS",
    "electionZone": "6",
    "stateCode": "MA"
  },
  {
    "city": "PEDRO DO ROSÁRIO",
    "electionZone": "106",
    "stateCode": "MA"
  },
  {
    "city": "BOA VISTA DO GURUPI",
    "electionZone": "100",
    "stateCode": "MA"
  },
  {
    "city": "RIBAMAR FIQUENE",
    "electionZone": "103",
    "stateCode": "MA"
  },
  {
    "city": "GRAÇA ARANHA",
    "electionZone": "108",
    "stateCode": "MA"
  },
  {
    "city": "PEDREIRAS",
    "electionZone": "9",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR NEWTON BELLO",
    "electionZone": "96",
    "stateCode": "MA"
  },
  {
    "city": "PRESIDENTE MÉDICI",
    "electionZone": "80",
    "stateCode": "MA"
  },
  {
    "city": "MARANHÃOZINHO",
    "electionZone": "101",
    "stateCode": "MA"
  },
  {
    "city": "ARAIOSES",
    "electionZone": "12",
    "stateCode": "MA"
  },
  {
    "city": "ALTO ALEGRE DO PINDARÉ",
    "electionZone": "70",
    "stateCode": "MA"
  },
  {
    "city": "SATUBINHA",
    "electionZone": "87",
    "stateCode": "MA"
  },
  {
    "city": "BACURI",
    "electionZone": "107",
    "stateCode": "MA"
  },
  {
    "city": "MATÕES",
    "electionZone": "81",
    "stateCode": "MA"
  },
  {
    "city": "CAJARI",
    "electionZone": "20",
    "stateCode": "MA"
  },
  {
    "city": "SÃO RAIMUNDO DAS MANGABEIRAS",
    "electionZone": "34",
    "stateCode": "MA"
  },
  {
    "city": "TIMBIRAS",
    "electionZone": "85",
    "stateCode": "MA"
  },
  {
    "city": "NOVA OLINDA DO MARANHÃO",
    "electionZone": "80",
    "stateCode": "MA"
  },
  {
    "city": "SÃO BENTO",
    "electionZone": "38",
    "stateCode": "MA"
  },
  {
    "city": "BARREIRINHAS",
    "electionZone": "56",
    "stateCode": "MA"
  },
  {
    "city": "ZÉ DOCA",
    "electionZone": "96",
    "stateCode": "MA"
  },
  {
    "city": "ALCÂNTARA",
    "electionZone": "52",
    "stateCode": "MA"
  },
  {
    "city": "PRESIDENTE DUTRA",
    "electionZone": "54",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOÃO BATISTA",
    "electionZone": "63",
    "stateCode": "MA"
  },
  {
    "city": "ICATU",
    "electionZone": "31",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR NUNES FREIRE",
    "electionZone": "101",
    "stateCode": "MA"
  },
  {
    "city": "PASSAGEM FRANCA",
    "electionZone": "44",
    "stateCode": "MA"
  },
  {
    "city": "BOM JARDIM",
    "electionZone": "78",
    "stateCode": "MA"
  },
  {
    "city": "TURIAÇU",
    "electionZone": "39",
    "stateCode": "MA"
  },
  {
    "city": "TIMON",
    "electionZone": "19",
    "stateCode": "MA"
  },
  {
    "city": "TIMON",
    "electionZone": "94",
    "stateCode": "MA"
  },
  {
    "city": "BOM JESUS DAS SELVAS",
    "electionZone": "95",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOÃO DOS PATOS",
    "electionZone": "53",
    "stateCode": "MA"
  },
  {
    "city": "MIRADOR",
    "electionZone": "72",
    "stateCode": "MA"
  },
  {
    "city": "SENADOR ALEXANDRE COSTA",
    "electionZone": "108",
    "stateCode": "MA"
  },
  {
    "city": "VARGEM GRANDE",
    "electionZone": "50",
    "stateCode": "MA"
  },
  {
    "city": "PRIMEIRA CRUZ",
    "electionZone": "32",
    "stateCode": "MA"
  },
  {
    "city": "BARRA DO CORDA",
    "electionZone": "23",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOÃO DO SOTER",
    "electionZone": "6",
    "stateCode": "MA"
  },
  {
    "city": "CAMPESTRE DO MARANHÃO",
    "electionZone": "46",
    "stateCode": "MA"
  },
  {
    "city": "CONCEIÇÃO DO LAGO-AÇU",
    "electionZone": "13",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOSÉ DE RIBAMAR",
    "electionZone": "47",
    "stateCode": "MA"
  },
  {
    "city": "RIACHÃO",
    "electionZone": "75",
    "stateCode": "MA"
  },
  {
    "city": "PINHEIRO",
    "electionZone": "37",
    "stateCode": "MA"
  },
  {
    "city": "TRIZIDELA DO VALE",
    "electionZone": "9",
    "stateCode": "MA"
  },
  {
    "city": "ROSÁRIO",
    "electionZone": "18",
    "stateCode": "MA"
  },
  {
    "city": "LAGOA DO MATO",
    "electionZone": "44",
    "stateCode": "MA"
  },
  {
    "city": "PRESIDENTE SARNEY",
    "electionZone": "106",
    "stateCode": "MA"
  },
  {
    "city": "VILA NOVA DOS MARTÍRIOS",
    "electionZone": "92",
    "stateCode": "MA"
  },
  {
    "city": "PORTO FRANCO",
    "electionZone": "46",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "76",
    "stateCode": "MA"
  },
  {
    "city": "AÇAILÂNDIA",
    "electionZone": "71",
    "stateCode": "MA"
  },
  {
    "city": "PENALVA",
    "electionZone": "45",
    "stateCode": "MA"
  },
  {
    "city": "BERNARDO DO MEARIM",
    "electionZone": "67",
    "stateCode": "MA"
  },
  {
    "city": "VIANA",
    "electionZone": "20",
    "stateCode": "MA"
  },
  {
    "city": "JOÃO LISBOA",
    "electionZone": "58",
    "stateCode": "MA"
  },
  {
    "city": "IMPERATRIZ",
    "electionZone": "92",
    "stateCode": "MA"
  },
  {
    "city": "TUNTUM",
    "electionZone": "79",
    "stateCode": "MA"
  },
  {
    "city": "AÇAILÂNDIA",
    "electionZone": "98",
    "stateCode": "MA"
  },
  {
    "city": "SANTA INÊS",
    "electionZone": "77",
    "stateCode": "MA"
  },
  {
    "city": "BACABAL",
    "electionZone": "66",
    "stateCode": "MA"
  },
  {
    "city": "SANTA LUZIA DO PARUÁ",
    "electionZone": "80",
    "stateCode": "MA"
  },
  {
    "city": "PERITORÓ",
    "electionZone": "68",
    "stateCode": "MA"
  },
  {
    "city": "DAVINÓPOLIS",
    "electionZone": "65",
    "stateCode": "MA"
  },
  {
    "city": "ALTO ALEGRE DO MARANHÃO",
    "electionZone": "84",
    "stateCode": "MA"
  },
  {
    "city": "NOVA COLINAS",
    "electionZone": "105",
    "stateCode": "MA"
  },
  {
    "city": "SENADOR LA ROCQUE",
    "electionZone": "58",
    "stateCode": "MA"
  },
  {
    "city": "BEQUIMÃO",
    "electionZone": "37",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "2",
    "stateCode": "MA"
  },
  {
    "city": "MONÇÃO",
    "electionZone": "110",
    "stateCode": "MA"
  },
  {
    "city": "HUMBERTO DE CAMPOS",
    "electionZone": "32",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "90",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "10",
    "stateCode": "MA"
  },
  {
    "city": "BACABAL",
    "electionZone": "13",
    "stateCode": "MA"
  },
  {
    "city": "AMAPÁ DO MARANHÃO",
    "electionZone": "64",
    "stateCode": "MA"
  },
  {
    "city": "SÃO VICENTE FERRER",
    "electionZone": "111",
    "stateCode": "MA"
  },
  {
    "city": "SÃO JOÃO DO PARAÍSO",
    "electionZone": "46",
    "stateCode": "MA"
  },
  {
    "city": "GOVERNADOR EDISON LOBÃO",
    "electionZone": "103",
    "stateCode": "MA"
  },
  {
    "city": "IMPERATRIZ",
    "electionZone": "33",
    "stateCode": "MA"
  },
  {
    "city": "GODOFREDO VIANA",
    "electionZone": "64",
    "stateCode": "MA"
  },
  {
    "city": "CÂNDIDO MENDES",
    "electionZone": "64",
    "stateCode": "MA"
  },
  {
    "city": "FEIRA NOVA DO MARANHÃO",
    "electionZone": "75",
    "stateCode": "MA"
  },
  {
    "city": "IMPERATRIZ",
    "electionZone": "65",
    "stateCode": "MA"
  },
  {
    "city": "CODÓ",
    "electionZone": "69",
    "stateCode": "MA"
  },
  {
    "city": "DUQUE BACELAR",
    "electionZone": "28",
    "stateCode": "MA"
  },
  {
    "city": "CAPINZAL DO NORTE",
    "electionZone": "48",
    "stateCode": "MA"
  },
  {
    "city": "SÃO DOMINGOS DO MARANHÃO",
    "electionZone": "60",
    "stateCode": "MA"
  },
  {
    "city": "ESTREITO",
    "electionZone": "82",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "1",
    "stateCode": "MA"
  },
  {
    "city": "PASTOS BONS",
    "electionZone": "17",
    "stateCode": "MA"
  },
  {
    "city": "FORTUNA",
    "electionZone": "60",
    "stateCode": "MA"
  },
  {
    "city": "SÃO BERNARDO",
    "electionZone": "51",
    "stateCode": "MA"
  },
  {
    "city": "ANAJATUBA",
    "electionZone": "109",
    "stateCode": "MA"
  },
  {
    "city": "SÃO LUÍS",
    "electionZone": "89",
    "stateCode": "MA"
  },
  {
    "city": "BURITICUPU",
    "electionZone": "95",
    "stateCode": "MA"
  },
  {
    "city": "LAGO DOS RODRIGUES",
    "electionZone": "74",
    "stateCode": "MA"
  },
  {
    "city": "COELHO NETO",
    "electionZone": "28",
    "stateCode": "MA"
  },
  {
    "city": "MIRINZAL",
    "electionZone": "30",
    "stateCode": "MA"
  },
  {
    "city": "PRESIDENTE VARGAS",
    "electionZone": "50",
    "stateCode": "MA"
  },
  {
    "city": "PAULINO NEVES",
    "electionZone": "40",
    "stateCode": "MA"
  },
  {
    "city": "BREJO DE AREIA",
    "electionZone": "49",
    "stateCode": "MA"
  },
  {
    "city": "JATOBÁ",
    "electionZone": "29",
    "stateCode": "MA"
  },
  {
    "city": "ALTO PARNAÍBA",
    "electionZone": "11",
    "stateCode": "MA"
  },
  {
    "city": "SÃO ROBERTO",
    "electionZone": "61",
    "stateCode": "MA"
  },
  {
    "city": "PAULO RAMOS",
    "electionZone": "102",
    "stateCode": "MA"
  },
  {
    "city": "CENTRO DO GUILHERME",
    "electionZone": "101",
    "stateCode": "MA"
  },
  {
    "city": "SÃO BENEDITO DO RIO PRETO",
    "electionZone": "73",
    "stateCode": "MA"
  },
  {
    "city": "PERI MIRIM",
    "electionZone": "38",
    "stateCode": "MA"
  },
  {
    "city": "BACURITUBA",
    "electionZone": "38",
    "stateCode": "MA"
  },
  {
    "city": "GOUVEIA",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "PRATA",
    "electionZone": "229",
    "stateCode": "MG"
  },
  {
    "city": "BOCAIÚVA",
    "electionZone": "44",
    "stateCode": "MG"
  },
  {
    "city": "CORONEL PACHECO",
    "electionZone": "315",
    "stateCode": "MG"
  },
  {
    "city": "DIVINÉSIA",
    "electionZone": "275",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DE IBITIPOCA",
    "electionZone": "24",
    "stateCode": "MG"
  },
  {
    "city": "SAPUCAÍ-MIRIM",
    "electionZone": "205",
    "stateCode": "MG"
  },
  {
    "city": "TABULEIRO",
    "electionZone": "239",
    "stateCode": "MG"
  },
  {
    "city": "ALVARENGA",
    "electionZone": "89",
    "stateCode": "MG"
  },
  {
    "city": "RIO DO PRADO",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "SIMÃO PEREIRA",
    "electionZone": "173",
    "stateCode": "MG"
  },
  {
    "city": "CONTAGEM",
    "electionZone": "313",
    "stateCode": "MG"
  },
  {
    "city": "CONTAGEM",
    "electionZone": "91",
    "stateCode": "MG"
  },
  {
    "city": "GUARARÁ",
    "electionZone": "42",
    "stateCode": "MG"
  },
  {
    "city": "SANTA MARIA DO SALTO",
    "electionZone": "144",
    "stateCode": "MG"
  },
  {
    "city": "RITÁPOLIS",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "BRAÚNAS",
    "electionZone": "176",
    "stateCode": "MG"
  },
  {
    "city": "ELÓI MENDES",
    "electionZone": "105",
    "stateCode": "MG"
  },
  {
    "city": "NOVA PONTE",
    "electionZone": "340",
    "stateCode": "MG"
  },
  {
    "city": "MAMONAS",
    "electionZone": "109",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "154",
    "stateCode": "MG"
  },
  {
    "city": "JORDÂNIA",
    "electionZone": "144",
    "stateCode": "MG"
  },
  {
    "city": "JOSÉ RAYDAN",
    "electionZone": "247",
    "stateCode": "MG"
  },
  {
    "city": "ITAMARATI DE MINAS",
    "electionZone": "79",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DA APARECIDA",
    "electionZone": "77",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DE JACUTINGA",
    "electionZone": "240",
    "stateCode": "MG"
  },
  {
    "city": "ESTRELA DALVA",
    "electionZone": "292",
    "stateCode": "MG"
  },
  {
    "city": "ITAPAGIPE",
    "electionZone": "297",
    "stateCode": "MG"
  },
  {
    "city": "RAPOSOS",
    "electionZone": "194",
    "stateCode": "MG"
  },
  {
    "city": "MADRE DE DEUS DE MINAS",
    "electionZone": "14",
    "stateCode": "MG"
  },
  {
    "city": "CANAÃ",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "POUSO ALEGRE",
    "electionZone": "227",
    "stateCode": "MG"
  },
  {
    "city": "AIMORÉS",
    "electionZone": "5",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DA BELA VISTA",
    "electionZone": "248",
    "stateCode": "MG"
  },
  {
    "city": "FRUTAL",
    "electionZone": "116",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DAS MISSÕES",
    "electionZone": "166",
    "stateCode": "MG"
  },
  {
    "city": "PIRAÚBA",
    "electionZone": "124",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO ITAMBÉ",
    "electionZone": "262",
    "stateCode": "MG"
  },
  {
    "city": "DESTERRO DO MELO",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "BANDEIRA DO SUL",
    "electionZone": "62",
    "stateCode": "MG"
  },
  {
    "city": "ARICANDUVA",
    "electionZone": "135",
    "stateCode": "MG"
  },
  {
    "city": "TARUMIRIM",
    "electionZone": "267",
    "stateCode": "MG"
  },
  {
    "city": "JECEABA",
    "electionZone": "106",
    "stateCode": "MG"
  },
  {
    "city": "SERRANIA",
    "electionZone": "8",
    "stateCode": "MG"
  },
  {
    "city": "VISCONDE DO RIO BRANCO",
    "electionZone": "284",
    "stateCode": "MG"
  },
  {
    "city": "PONTO CHIQUE",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "CORONEL MURTA",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "ESTRELA DO INDAIÁ",
    "electionZone": "104",
    "stateCode": "MG"
  },
  {
    "city": "JOANÉSIA",
    "electionZone": "176",
    "stateCode": "MG"
  },
  {
    "city": "POÇOS DE CALDAS",
    "electionZone": "350",
    "stateCode": "MG"
  },
  {
    "city": "RIO VERMELHO",
    "electionZone": "294",
    "stateCode": "MG"
  },
  {
    "city": "PINGO D'ÁGUA",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "LONTRA",
    "electionZone": "255",
    "stateCode": "MG"
  },
  {
    "city": "PIRACEMA",
    "electionZone": "208",
    "stateCode": "MG"
  },
  {
    "city": "MATEUS LEME",
    "electionZone": "172",
    "stateCode": "MG"
  },
  {
    "city": "PIRAPETINGA",
    "electionZone": "292",
    "stateCode": "MG"
  },
  {
    "city": "ALTO CAPARAÓ",
    "electionZone": "168",
    "stateCode": "MG"
  },
  {
    "city": "IBITIÚRA DE MINAS",
    "electionZone": "13",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "37",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "38",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "28",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "332",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "36",
    "stateCode": "MG"
  },
  {
    "city": "MIRAÍ",
    "electionZone": "178",
    "stateCode": "MG"
  },
  {
    "city": "ALBERTINA",
    "electionZone": "146",
    "stateCode": "MG"
  },
  {
    "city": "IMBÉ DE MINAS",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "PAI PEDRO",
    "electionZone": "226",
    "stateCode": "MG"
  },
  {
    "city": "CHÁCARA",
    "electionZone": "155",
    "stateCode": "MG"
  },
  {
    "city": "BANDEIRA",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "SÃO BRÁS DO SUAÇUÍ",
    "electionZone": "106",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO GRAMA",
    "electionZone": "234",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DO ITUETO",
    "electionZone": "233",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DO PACUÍ",
    "electionZone": "94",
    "stateCode": "MG"
  },
  {
    "city": "ATALÉIA",
    "electionZone": "270",
    "stateCode": "MG"
  },
  {
    "city": "BONITO DE MINAS",
    "electionZone": "148",
    "stateCode": "MG"
  },
  {
    "city": "NOVA PORTEIRINHA",
    "electionZone": "147",
    "stateCode": "MG"
  },
  {
    "city": "ILICÍNEA",
    "electionZone": "43",
    "stateCode": "MG"
  },
  {
    "city": "FRONTEIRA",
    "electionZone": "116",
    "stateCode": "MG"
  },
  {
    "city": "IBIÁ",
    "electionZone": "126",
    "stateCode": "MG"
  },
  {
    "city": "CAMPO AZUL",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "PIRAJUBA",
    "electionZone": "82",
    "stateCode": "MG"
  },
  {
    "city": "COMENDADOR GOMES",
    "electionZone": "116",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DO PARAÍSO",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "LEANDRO FERREIRA",
    "electionZone": "219",
    "stateCode": "MG"
  },
  {
    "city": "MANTENA",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "SANTA EFIGÊNIA DE MINAS",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "BERIZAL",
    "electionZone": "266",
    "stateCode": "MG"
  },
  {
    "city": "CATUJI",
    "electionZone": "196",
    "stateCode": "MG"
  },
  {
    "city": "GAMELEIRAS",
    "electionZone": "180",
    "stateCode": "MG"
  },
  {
    "city": "FRONTEIRA DOS VALES",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "RIBEIRÃO DAS NEVES",
    "electionZone": "321",
    "stateCode": "MG"
  },
  {
    "city": "CHALÉ",
    "electionZone": "158",
    "stateCode": "MG"
  },
  {
    "city": "SALTO DA DIVISA",
    "electionZone": "144",
    "stateCode": "MG"
  },
  {
    "city": "ITAMBACURI",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "CACHOEIRA DE PAJEÚ",
    "electionZone": "213",
    "stateCode": "MG"
  },
  {
    "city": "CHAPADA DO NORTE",
    "electionZone": "177",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GERALDO DA PIEDADE",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "CABECEIRA GRANDE",
    "electionZone": "280",
    "stateCode": "MG"
  },
  {
    "city": "MARILAC",
    "electionZone": "318",
    "stateCode": "MG"
  },
  {
    "city": "CIPOTÂNEA",
    "electionZone": "11",
    "stateCode": "MG"
  },
  {
    "city": "DIVINO DAS LARANJEIRAS",
    "electionZone": "117",
    "stateCode": "MG"
  },
  {
    "city": "ITURAMA",
    "electionZone": "142",
    "stateCode": "MG"
  },
  {
    "city": "CURRAL DE DENTRO",
    "electionZone": "266",
    "stateCode": "MG"
  },
  {
    "city": "ESMERALDAS",
    "electionZone": "108",
    "stateCode": "MG"
  },
  {
    "city": "SANTA BÁRBARA DO TUGÚRIO",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "CATAS ALTAS",
    "electionZone": "245",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DA SAFIRA",
    "electionZone": "247",
    "stateCode": "MG"
  },
  {
    "city": "MOEMA",
    "electionZone": "45",
    "stateCode": "MG"
  },
  {
    "city": "FERROS",
    "electionZone": "113",
    "stateCode": "MG"
  },
  {
    "city": "VARGEM ALEGRE",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "COROACI",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "CAPETINGA",
    "electionZone": "78",
    "stateCode": "MG"
  },
  {
    "city": "PATROCÍNIO DO MURIAÉ",
    "electionZone": "111",
    "stateCode": "MG"
  },
  {
    "city": "CRUCILÂNDIA",
    "electionZone": "47",
    "stateCode": "MG"
  },
  {
    "city": "ITANHOMI",
    "electionZone": "138",
    "stateCode": "MG"
  },
  {
    "city": "CORINTO",
    "electionZone": "95",
    "stateCode": "MG"
  },
  {
    "city": "ASTOLFO DUTRA",
    "electionZone": "79",
    "stateCode": "MG"
  },
  {
    "city": "ARAPUÁ",
    "electionZone": "236",
    "stateCode": "MG"
  },
  {
    "city": "FRUTA DE LEITE",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "CAETANÓPOLIS",
    "electionZone": "206",
    "stateCode": "MG"
  },
  {
    "city": "CÁSSIA",
    "electionZone": "78",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DA MATA",
    "electionZone": "265",
    "stateCode": "MG"
  },
  {
    "city": "UBERLÂNDIA",
    "electionZone": "314",
    "stateCode": "MG"
  },
  {
    "city": "MAR DE ESPANHA",
    "electionZone": "170",
    "stateCode": "MG"
  },
  {
    "city": "SÃO MIGUEL DO ANTA",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "CRUZÍLIA",
    "electionZone": "346",
    "stateCode": "MG"
  },
  {
    "city": "CARATINGA",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "CARATINGA",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "MACHADO",
    "electionZone": "164",
    "stateCode": "MG"
  },
  {
    "city": "MINDURI",
    "electionZone": "346",
    "stateCode": "MG"
  },
  {
    "city": "ANTÔNIO CARLOS",
    "electionZone": "24",
    "stateCode": "MG"
  },
  {
    "city": "VESPASIANO",
    "electionZone": "311",
    "stateCode": "MG"
  },
  {
    "city": "BRASILÂNDIA DE MINAS",
    "electionZone": "151",
    "stateCode": "MG"
  },
  {
    "city": "PEQUI",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "MANGA",
    "electionZone": "166",
    "stateCode": "MG"
  },
  {
    "city": "CARVALHOS",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GONÇALO DO RIO PRETO",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "OLIVEIRA",
    "electionZone": "197",
    "stateCode": "MG"
  },
  {
    "city": "UBERLÂNDIA",
    "electionZone": "278",
    "stateCode": "MG"
  },
  {
    "city": "CARMÉSIA",
    "electionZone": "113",
    "stateCode": "MG"
  },
  {
    "city": "POMPÉU",
    "electionZone": "223",
    "stateCode": "MG"
  },
  {
    "city": "OLIVEIRA FORTES",
    "electionZone": "250",
    "stateCode": "MG"
  },
  {
    "city": "SANTA MARIA DO SUAÇUÍ",
    "electionZone": "247",
    "stateCode": "MG"
  },
  {
    "city": "PEDRA DO ANTA",
    "electionZone": "268",
    "stateCode": "MG"
  },
  {
    "city": "POÇO FUNDO",
    "electionZone": "221",
    "stateCode": "MG"
  },
  {
    "city": "SANTA JULIANA",
    "electionZone": "340",
    "stateCode": "MG"
  },
  {
    "city": "AMPARO DO SERRA",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "BICAS",
    "electionZone": "42",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GERALDO",
    "electionZone": "284",
    "stateCode": "MG"
  },
  {
    "city": "MENDES PIMENTEL",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "VARGEM GRANDE DO RIO PARDO",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "SANTA BÁRBARA DO MONTE VERDE",
    "electionZone": "240",
    "stateCode": "MG"
  },
  {
    "city": "GOVERNADOR VALADARES",
    "electionZone": "118",
    "stateCode": "MG"
  },
  {
    "city": "GOVERNADOR VALADARES",
    "electionZone": "318",
    "stateCode": "MG"
  },
  {
    "city": "RUBELITA",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO JACINTO",
    "electionZone": "144",
    "stateCode": "MG"
  },
  {
    "city": "PAVÃO",
    "electionZone": "270",
    "stateCode": "MG"
  },
  {
    "city": "ITUTINGA",
    "electionZone": "343",
    "stateCode": "MG"
  },
  {
    "city": "RIBEIRÃO DAS NEVES",
    "electionZone": "286",
    "stateCode": "MG"
  },
  {
    "city": "SERRA DO SALITRE",
    "electionZone": "211",
    "stateCode": "MG"
  },
  {
    "city": "RIO CASCA",
    "electionZone": "234",
    "stateCode": "MG"
  },
  {
    "city": "RIO DOCE",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "SÃO PEDRO DO SUAÇUÍ",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "FREI INOCÊNCIO",
    "electionZone": "119",
    "stateCode": "MG"
  },
  {
    "city": "PALMA",
    "electionZone": "201",
    "stateCode": "MG"
  },
  {
    "city": "ITUETA",
    "electionZone": "233",
    "stateCode": "MG"
  },
  {
    "city": "PEÇANHA",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "ITABIRINHA",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "MACHACALIS",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "IGUATAMA",
    "electionZone": "304",
    "stateCode": "MG"
  },
  {
    "city": "COIMBRA",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "URUANA DE MINAS",
    "electionZone": "320",
    "stateCode": "MG"
  },
  {
    "city": "NINHEIRA",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DA CACHOEIRA",
    "electionZone": "281",
    "stateCode": "MG"
  },
  {
    "city": "CENTRAL DE MINAS",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "VARZELÂNDIA",
    "electionZone": "255",
    "stateCode": "MG"
  },
  {
    "city": "ÁGUA COMPRIDA",
    "electionZone": "347",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DE MINAS",
    "electionZone": "75",
    "stateCode": "MG"
  },
  {
    "city": "IPANEMA",
    "electionZone": "129",
    "stateCode": "MG"
  },
  {
    "city": "SANTA VITÓRIA",
    "electionZone": "308",
    "stateCode": "MG"
  },
  {
    "city": "MALACACHETA",
    "electionZone": "165",
    "stateCode": "MG"
  },
  {
    "city": "MANHUMIRIM",
    "electionZone": "168",
    "stateCode": "MG"
  },
  {
    "city": "RIACHO DOS MACHADOS",
    "electionZone": "226",
    "stateCode": "MG"
  },
  {
    "city": "UBAPORANGA",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "CRISTIANO OTONI",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "TRÊS MARIAS",
    "electionZone": "309",
    "stateCode": "MG"
  },
  {
    "city": "CENTRALINA",
    "electionZone": "66",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO NEPOMUCENO",
    "electionZone": "258",
    "stateCode": "MG"
  },
  {
    "city": "BERILO",
    "electionZone": "177",
    "stateCode": "MG"
  },
  {
    "city": "ITANHANDU",
    "electionZone": "137",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DO MANTIMENTO",
    "electionZone": "158",
    "stateCode": "MG"
  },
  {
    "city": "UNIÃO DE MINAS",
    "electionZone": "142",
    "stateCode": "MG"
  },
  {
    "city": "JOSENÓPOLIS",
    "electionZone": "120",
    "stateCode": "MG"
  },
  {
    "city": "UBERLÂNDIA",
    "electionZone": "299",
    "stateCode": "MG"
  },
  {
    "city": "UBERLÂNDIA",
    "electionZone": "279",
    "stateCode": "MG"
  },
  {
    "city": "RIO MANSO",
    "electionZone": "47",
    "stateCode": "MG"
  },
  {
    "city": "ÁGUAS FORMOSAS",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO GARAMBÉU",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "BONFIM",
    "electionZone": "47",
    "stateCode": "MG"
  },
  {
    "city": "ITAMBÉ DO MATO DENTRO",
    "electionZone": "132",
    "stateCode": "MG"
  },
  {
    "city": "ROCHEDO DE MINAS",
    "electionZone": "258",
    "stateCode": "MG"
  },
  {
    "city": "SANTA BÁRBARA",
    "electionZone": "245",
    "stateCode": "MG"
  },
  {
    "city": "BARÃO DE COCAIS",
    "electionZone": "22",
    "stateCode": "MG"
  },
  {
    "city": "BOTELHOS",
    "electionZone": "49",
    "stateCode": "MG"
  },
  {
    "city": "INIMUTABA",
    "electionZone": "100",
    "stateCode": "MG"
  },
  {
    "city": "CAMPESTRE",
    "electionZone": "62",
    "stateCode": "MG"
  },
  {
    "city": "CÔNEGO MARINHO",
    "electionZone": "148",
    "stateCode": "MG"
  },
  {
    "city": "PITANGUI",
    "electionZone": "219",
    "stateCode": "MG"
  },
  {
    "city": "MONTE BELO",
    "electionZone": "307",
    "stateCode": "MG"
  },
  {
    "city": "BETIM",
    "electionZone": "316",
    "stateCode": "MG"
  },
  {
    "city": "SÃO TOMÁS DE AQUINO",
    "electionZone": "260",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DE CATAGUASES",
    "electionZone": "79",
    "stateCode": "MG"
  },
  {
    "city": "JENIPAPO DE MINAS",
    "electionZone": "177",
    "stateCode": "MG"
  },
  {
    "city": "AREADO",
    "electionZone": "19",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DO SAPUCAÍ",
    "electionZone": "248",
    "stateCode": "MG"
  },
  {
    "city": "SANTA BÁRBARA DO LESTE",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "JOSÉ GONÇALVES DE MINAS",
    "electionZone": "336",
    "stateCode": "MG"
  },
  {
    "city": "SÃO PEDRO DOS FERROS",
    "electionZone": "234",
    "stateCode": "MG"
  },
  {
    "city": "PIRANGUINHO",
    "electionZone": "51",
    "stateCode": "MG"
  },
  {
    "city": "LAMBARI",
    "electionZone": "159",
    "stateCode": "MG"
  },
  {
    "city": "RIO NOVO",
    "electionZone": "235",
    "stateCode": "MG"
  },
  {
    "city": "ITAPECERICA",
    "electionZone": "139",
    "stateCode": "MG"
  },
  {
    "city": "FRANCISCO DUMONT",
    "electionZone": "44",
    "stateCode": "MG"
  },
  {
    "city": "SANTA LUZIA",
    "electionZone": "312",
    "stateCode": "MG"
  },
  {
    "city": "BELO VALE",
    "electionZone": "338",
    "stateCode": "MG"
  },
  {
    "city": "INGAÍ",
    "electionZone": "343",
    "stateCode": "MG"
  },
  {
    "city": "DORES DO TURVO",
    "electionZone": "261",
    "stateCode": "MG"
  },
  {
    "city": "SERRANÓPOLIS DE MINAS",
    "electionZone": "226",
    "stateCode": "MG"
  },
  {
    "city": "UBÁ",
    "electionZone": "275",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DO GOIABAL",
    "electionZone": "251",
    "stateCode": "MG"
  },
  {
    "city": "GUIRICEMA",
    "electionZone": "284",
    "stateCode": "MG"
  },
  {
    "city": "ITAMOGI",
    "electionZone": "301",
    "stateCode": "MG"
  },
  {
    "city": "ALFENAS",
    "electionZone": "8",
    "stateCode": "MG"
  },
  {
    "city": "GUARANI",
    "electionZone": "124",
    "stateCode": "MG"
  },
  {
    "city": "UBERLÂNDIA",
    "electionZone": "335",
    "stateCode": "MG"
  },
  {
    "city": "ARINOS",
    "electionZone": "320",
    "stateCode": "MG"
  },
  {
    "city": "PRESIDENTE BERNARDES",
    "electionZone": "217",
    "stateCode": "MG"
  },
  {
    "city": "TAQUARAÇU DE MINAS",
    "electionZone": "56",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DEL REI",
    "electionZone": "328",
    "stateCode": "MG"
  },
  {
    "city": "MORRO DO PILAR",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "ITAÚ DE MINAS",
    "electionZone": "293",
    "stateCode": "MG"
  },
  {
    "city": "MIRADOURO",
    "electionZone": "290",
    "stateCode": "MG"
  },
  {
    "city": "OLARIA",
    "electionZone": "162",
    "stateCode": "MG"
  },
  {
    "city": "GALILÉIA",
    "electionZone": "117",
    "stateCode": "MG"
  },
  {
    "city": "CATUTI",
    "electionZone": "226",
    "stateCode": "MG"
  },
  {
    "city": "JOAQUIM FELÍCIO",
    "electionZone": "54",
    "stateCode": "MG"
  },
  {
    "city": "ALPERCATA",
    "electionZone": "119",
    "stateCode": "MG"
  },
  {
    "city": "LAGAMAR",
    "electionZone": "230",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA DOURADA",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "FRANCISCO BADARÓ",
    "electionZone": "177",
    "stateCode": "MG"
  },
  {
    "city": "DORES DE CAMPOS",
    "electionZone": "228",
    "stateCode": "MG"
  },
  {
    "city": "ALVORADA DE MINAS",
    "electionZone": "262",
    "stateCode": "MG"
  },
  {
    "city": "CARNEIRINHO",
    "electionZone": "142",
    "stateCode": "MG"
  },
  {
    "city": "CAMPINA VERDE",
    "electionZone": "63",
    "stateCode": "MG"
  },
  {
    "city": "MARIANA",
    "electionZone": "171",
    "stateCode": "MG"
  },
  {
    "city": "NOVA ERA",
    "electionZone": "193",
    "stateCode": "MG"
  },
  {
    "city": "CANDEIAS",
    "electionZone": "296",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DO JACURI",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "GUARACIAMA",
    "electionZone": "44",
    "stateCode": "MG"
  },
  {
    "city": "MEDINA",
    "electionZone": "175",
    "stateCode": "MG"
  },
  {
    "city": "JUVENÍLIA",
    "electionZone": "342",
    "stateCode": "MG"
  },
  {
    "city": "RIO PRETO",
    "electionZone": "240",
    "stateCode": "MG"
  },
  {
    "city": "LARANJAL",
    "electionZone": "187",
    "stateCode": "MG"
  },
  {
    "city": "PAINEIRAS",
    "electionZone": "1",
    "stateCode": "MG"
  },
  {
    "city": "PERDÕES",
    "electionZone": "216",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DO MANHUAÇU",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "BOM JESUS DO GALHO",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "BUENO BRANDÃO",
    "electionZone": "53",
    "stateCode": "MG"
  },
  {
    "city": "MATIAS BARBOSA",
    "electionZone": "173",
    "stateCode": "MG"
  },
  {
    "city": "VIRGINÓPOLIS",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "RIO POMBA",
    "electionZone": "239",
    "stateCode": "MG"
  },
  {
    "city": "SETUBINHA",
    "electionZone": "165",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOAQUIM DE BICAS",
    "electionZone": "41",
    "stateCode": "MG"
  },
  {
    "city": "PAIVA",
    "electionZone": "250",
    "stateCode": "MG"
  },
  {
    "city": "MUNHOZ",
    "electionZone": "53",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO MONTE",
    "electionZone": "249",
    "stateCode": "MG"
  },
  {
    "city": "ÁGUAS VERMELHAS",
    "electionZone": "213",
    "stateCode": "MG"
  },
  {
    "city": "PASSABÉM",
    "electionZone": "132",
    "stateCode": "MG"
  },
  {
    "city": "CANA VERDE",
    "electionZone": "216",
    "stateCode": "MG"
  },
  {
    "city": "CATAGUASES",
    "electionZone": "79",
    "stateCode": "MG"
  },
  {
    "city": "GUIDOVAL",
    "electionZone": "275",
    "stateCode": "MG"
  },
  {
    "city": "IGARAPÉ",
    "electionZone": "41",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "26",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "331",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "32",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "31",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "33",
    "stateCode": "MG"
  },
  {
    "city": "PADRE PARAÍSO",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "VIEIRAS",
    "electionZone": "290",
    "stateCode": "MG"
  },
  {
    "city": "CAMPO FLORIDO",
    "electionZone": "326",
    "stateCode": "MG"
  },
  {
    "city": "ERVÁLIA",
    "electionZone": "107",
    "stateCode": "MG"
  },
  {
    "city": "TAPIRAÍ",
    "electionZone": "21",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO MANHUAÇU",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "CHAPADA GAÚCHA",
    "electionZone": "320",
    "stateCode": "MG"
  },
  {
    "city": "VARGINHA",
    "electionZone": "281",
    "stateCode": "MG"
  },
  {
    "city": "GUAPÉ",
    "electionZone": "122",
    "stateCode": "MG"
  },
  {
    "city": "BETIM",
    "electionZone": "40",
    "stateCode": "MG"
  },
  {
    "city": "JAPONVAR",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "ABRE CAMPO",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "DOM BOSCO",
    "electionZone": "329",
    "stateCode": "MG"
  },
  {
    "city": "RAUL SOARES",
    "electionZone": "231",
    "stateCode": "MG"
  },
  {
    "city": "CAMACHO",
    "electionZone": "139",
    "stateCode": "MG"
  },
  {
    "city": "BELMIRO BRAGA",
    "electionZone": "152",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO PARAÍSO",
    "electionZone": "130",
    "stateCode": "MG"
  },
  {
    "city": "MONTE AZUL",
    "electionZone": "180",
    "stateCode": "MG"
  },
  {
    "city": "RIO ESPERA",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "PRESIDENTE KUBITSCHEK",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "MURIAÉ",
    "electionZone": "187",
    "stateCode": "MG"
  },
  {
    "city": "DESCOBERTO",
    "electionZone": "258",
    "stateCode": "MG"
  },
  {
    "city": "DONA EUSÉBIA",
    "electionZone": "79",
    "stateCode": "MG"
  },
  {
    "city": "MATIPÓ",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "SENHORA DO PORTO",
    "electionZone": "121",
    "stateCode": "MG"
  },
  {
    "city": "RESPLENDOR",
    "electionZone": "233",
    "stateCode": "MG"
  },
  {
    "city": "SÃO TIAGO",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "MORADA NOVA DE MINAS",
    "electionZone": "186",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DOS OUROS",
    "electionZone": "300",
    "stateCode": "MG"
  },
  {
    "city": "INDAIABIRA",
    "electionZone": "266",
    "stateCode": "MG"
  },
  {
    "city": "ORATÓRIOS",
    "electionZone": "224",
    "stateCode": "MG"
  },
  {
    "city": "IPABA",
    "electionZone": "348",
    "stateCode": "MG"
  },
  {
    "city": "ALTO JEQUITIBÁ",
    "electionZone": "168",
    "stateCode": "MG"
  },
  {
    "city": "VAZANTE",
    "electionZone": "295",
    "stateCode": "MG"
  },
  {
    "city": "JAÍBA",
    "electionZone": "166",
    "stateCode": "MG"
  },
  {
    "city": "NEPOMUCENO",
    "electionZone": "192",
    "stateCode": "MG"
  },
  {
    "city": "JOÃO MONLEVADE",
    "electionZone": "150",
    "stateCode": "MG"
  },
  {
    "city": "PEDRA DO INDAIÁ",
    "electionZone": "249",
    "stateCode": "MG"
  },
  {
    "city": "NOVA BELÉM",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "CAPELINHA",
    "electionZone": "67",
    "stateCode": "MG"
  },
  {
    "city": "PERDIZES",
    "electionZone": "291",
    "stateCode": "MG"
  },
  {
    "city": "MEDEIROS",
    "electionZone": "21",
    "stateCode": "MG"
  },
  {
    "city": "ESTRELA DO SUL",
    "electionZone": "110",
    "stateCode": "MG"
  },
  {
    "city": "IBIAÍ",
    "electionZone": "94",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA GRANDE",
    "electionZone": "230",
    "stateCode": "MG"
  },
  {
    "city": "ALÉM PARAÍBA",
    "electionZone": "7",
    "stateCode": "MG"
  },
  {
    "city": "ARAPORÃ",
    "electionZone": "274",
    "stateCode": "MG"
  },
  {
    "city": "CRISTÁLIA",
    "electionZone": "120",
    "stateCode": "MG"
  },
  {
    "city": "RIO ACIMA",
    "electionZone": "194",
    "stateCode": "MG"
  },
  {
    "city": "IPATINGA",
    "electionZone": "130",
    "stateCode": "MG"
  },
  {
    "city": "IPATINGA",
    "electionZone": "131",
    "stateCode": "MG"
  },
  {
    "city": "CARANDAÍ",
    "electionZone": "68",
    "stateCode": "MG"
  },
  {
    "city": "MONTE CARMELO",
    "electionZone": "181",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO AMPARO",
    "electionZone": "46",
    "stateCode": "MG"
  },
  {
    "city": "ITAMONTE",
    "electionZone": "306",
    "stateCode": "MG"
  },
  {
    "city": "IBIRACI",
    "electionZone": "127",
    "stateCode": "MG"
  },
  {
    "city": "ARAPONGA",
    "electionZone": "107",
    "stateCode": "MG"
  },
  {
    "city": "DIVISÓPOLIS",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "SOLEDADE DE MINAS",
    "electionZone": "259",
    "stateCode": "MG"
  },
  {
    "city": "ARCEBURGO",
    "electionZone": "182",
    "stateCode": "MG"
  },
  {
    "city": "CONGONHAS DO NORTE",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "CONGONHAL",
    "electionZone": "227",
    "stateCode": "MG"
  },
  {
    "city": "UNAÍ",
    "electionZone": "280",
    "stateCode": "MG"
  },
  {
    "city": "GLAUCILÂNDIA",
    "electionZone": "325",
    "stateCode": "MG"
  },
  {
    "city": "PIUMHI",
    "electionZone": "220",
    "stateCode": "MG"
  },
  {
    "city": "JABOTICATUBAS",
    "electionZone": "143",
    "stateCode": "MG"
  },
  {
    "city": "PLANURA",
    "electionZone": "116",
    "stateCode": "MG"
  },
  {
    "city": "MERCÊS",
    "electionZone": "289",
    "stateCode": "MG"
  },
  {
    "city": "BELA VISTA DE MINAS",
    "electionZone": "193",
    "stateCode": "MG"
  },
  {
    "city": "SANTA CRUZ DE SALINAS",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "LIMA DUARTE",
    "electionZone": "162",
    "stateCode": "MG"
  },
  {
    "city": "CAMBUÍ",
    "electionZone": "59",
    "stateCode": "MG"
  },
  {
    "city": "LUISLÂNDIA",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "LIMEIRA DO OESTE",
    "electionZone": "142",
    "stateCode": "MG"
  },
  {
    "city": "JANAÚBA",
    "electionZone": "147",
    "stateCode": "MG"
  },
  {
    "city": "GUAXUPÉ",
    "electionZone": "125",
    "stateCode": "MG"
  },
  {
    "city": "PIAU",
    "electionZone": "235",
    "stateCode": "MG"
  },
  {
    "city": "CLARO DOS POÇÕES",
    "electionZone": "184",
    "stateCode": "MG"
  },
  {
    "city": "CONTAGEM",
    "electionZone": "93",
    "stateCode": "MG"
  },
  {
    "city": "MONTES CLAROS",
    "electionZone": "185",
    "stateCode": "MG"
  },
  {
    "city": "DIVINOLÂNDIA DE MINAS",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "PEDRA DOURADA",
    "electionZone": "271",
    "stateCode": "MG"
  },
  {
    "city": "RIACHINHO",
    "electionZone": "329",
    "stateCode": "MG"
  },
  {
    "city": "SENADOR CORTES",
    "electionZone": "170",
    "stateCode": "MG"
  },
  {
    "city": "TAPIRA",
    "electionZone": "17",
    "stateCode": "MG"
  },
  {
    "city": "BORDA DA MATA",
    "electionZone": "48",
    "stateCode": "MG"
  },
  {
    "city": "SÃO FRANCISCO DE SALES",
    "electionZone": "297",
    "stateCode": "MG"
  },
  {
    "city": "CACHOEIRA DE MINAS",
    "electionZone": "300",
    "stateCode": "MG"
  },
  {
    "city": "IPIAÇU",
    "electionZone": "302",
    "stateCode": "MG"
  },
  {
    "city": "JUATUBA",
    "electionZone": "172",
    "stateCode": "MG"
  },
  {
    "city": "TOMBOS",
    "electionZone": "271",
    "stateCode": "MG"
  },
  {
    "city": "OLÍMPIO NORONHA",
    "electionZone": "159",
    "stateCode": "MG"
  },
  {
    "city": "BAEPENDI",
    "electionZone": "20",
    "stateCode": "MG"
  },
  {
    "city": "CUPARAQUE",
    "electionZone": "89",
    "stateCode": "MG"
  },
  {
    "city": "BARROSO",
    "electionZone": "344",
    "stateCode": "MG"
  },
  {
    "city": "MONTE ALEGRE DE MINAS",
    "electionZone": "179",
    "stateCode": "MG"
  },
  {
    "city": "PRESIDENTE OLEGÁRIO",
    "electionZone": "230",
    "stateCode": "MG"
  },
  {
    "city": "DOM CAVATI",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "SETE LAGOAS",
    "electionZone": "263",
    "stateCode": "MG"
  },
  {
    "city": "ARAGUARI",
    "electionZone": "16",
    "stateCode": "MG"
  },
  {
    "city": "SÃO FRANCISCO DO GLÓRIA",
    "electionZone": "69",
    "stateCode": "MG"
  },
  {
    "city": "CARANGOLA",
    "electionZone": "69",
    "stateCode": "MG"
  },
  {
    "city": "MATOZINHOS",
    "electionZone": "174",
    "stateCode": "MG"
  },
  {
    "city": "CAMANDUCAIA",
    "electionZone": "58",
    "stateCode": "MG"
  },
  {
    "city": "MONTES CLAROS",
    "electionZone": "184",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DA VARGINHA",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "CALDAS",
    "electionZone": "57",
    "stateCode": "MG"
  },
  {
    "city": "PALMÓPOLIS",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "CONFINS",
    "electionZone": "215",
    "stateCode": "MG"
  },
  {
    "city": "IBERTIOGA",
    "electionZone": "24",
    "stateCode": "MG"
  },
  {
    "city": "CÓRREGO NOVO",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "PARAISÓPOLIS",
    "electionZone": "205",
    "stateCode": "MG"
  },
  {
    "city": "CONTAGEM",
    "electionZone": "90",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DA BARRA",
    "electionZone": "10",
    "stateCode": "MG"
  },
  {
    "city": "DIVISA ALEGRE",
    "electionZone": "213",
    "stateCode": "MG"
  },
  {
    "city": "CONSELHEIRO LAFAIETE",
    "electionZone": "87",
    "stateCode": "MG"
  },
  {
    "city": "CAPITÃO ANDRADE",
    "electionZone": "138",
    "stateCode": "MG"
  },
  {
    "city": "TEÓFILO OTONI",
    "electionZone": "269",
    "stateCode": "MG"
  },
  {
    "city": "BUENÓPOLIS",
    "electionZone": "54",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA SANTA",
    "electionZone": "157",
    "stateCode": "MG"
  },
  {
    "city": "ITABIRA",
    "electionZone": "132",
    "stateCode": "MG"
  },
  {
    "city": "BOM JESUS DO AMPARO",
    "electionZone": "22",
    "stateCode": "MG"
  },
  {
    "city": "LEOPOLDINA",
    "electionZone": "161",
    "stateCode": "MG"
  },
  {
    "city": "ABAETÉ",
    "electionZone": "1",
    "stateCode": "MG"
  },
  {
    "city": "ALMENARA",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DO MATO DENTRO",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "URUCÂNIA",
    "electionZone": "339",
    "stateCode": "MG"
  },
  {
    "city": "RESSAQUINHA",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "AÇUCENA",
    "electionZone": "3",
    "stateCode": "MG"
  },
  {
    "city": "SIMONÉSIA",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "CAETÉ",
    "electionZone": "56",
    "stateCode": "MG"
  },
  {
    "city": "IBIRITÉ",
    "electionZone": "351",
    "stateCode": "MG"
  },
  {
    "city": "CAMPANHA",
    "electionZone": "61",
    "stateCode": "MG"
  },
  {
    "city": "PERIQUITO",
    "electionZone": "318",
    "stateCode": "MG"
  },
  {
    "city": "SETE LAGOAS",
    "electionZone": "322",
    "stateCode": "MG"
  },
  {
    "city": "ITUIUTABA",
    "electionZone": "141",
    "stateCode": "MG"
  },
  {
    "city": "JACUTINGA",
    "electionZone": "146",
    "stateCode": "MG"
  },
  {
    "city": "ARCOS",
    "electionZone": "18",
    "stateCode": "MG"
  },
  {
    "city": "LUISBURGO",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "SERRO",
    "electionZone": "262",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO DESERTO",
    "electionZone": "173",
    "stateCode": "MG"
  },
  {
    "city": "PERDIGÃO",
    "electionZone": "298",
    "stateCode": "MG"
  },
  {
    "city": "ICARAÍ DE MINAS",
    "electionZone": "252",
    "stateCode": "MG"
  },
  {
    "city": "FORMIGA",
    "electionZone": "114",
    "stateCode": "MG"
  },
  {
    "city": "SARDOÁ",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "SABARÁ",
    "electionZone": "241",
    "stateCode": "MG"
  },
  {
    "city": "BETIM",
    "electionZone": "319",
    "stateCode": "MG"
  },
  {
    "city": "ITAOBIM",
    "electionZone": "175",
    "stateCode": "MG"
  },
  {
    "city": "REDUTO",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "ANDRADAS",
    "electionZone": "13",
    "stateCode": "MG"
  },
  {
    "city": "SÃO LOURENÇO",
    "electionZone": "259",
    "stateCode": "MG"
  },
  {
    "city": "ITAPEVA",
    "electionZone": "58",
    "stateCode": "MG"
  },
  {
    "city": "ARAXÁ",
    "electionZone": "17",
    "stateCode": "MG"
  },
  {
    "city": "UBAÍ",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "ITAIPÉ",
    "electionZone": "196",
    "stateCode": "MG"
  },
  {
    "city": "COLUNA",
    "electionZone": "257",
    "stateCode": "MG"
  },
  {
    "city": "BURITIS",
    "electionZone": "324",
    "stateCode": "MG"
  },
  {
    "city": "DELFINÓPOLIS",
    "electionZone": "78",
    "stateCode": "MG"
  },
  {
    "city": "ALVINÓPOLIS",
    "electionZone": "12",
    "stateCode": "MG"
  },
  {
    "city": "SANTOS DUMONT",
    "electionZone": "250",
    "stateCode": "MG"
  },
  {
    "city": "ITAJUBÁ",
    "electionZone": "134",
    "stateCode": "MG"
  },
  {
    "city": "SERICITA",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "DIVINÓPOLIS",
    "electionZone": "103",
    "stateCode": "MG"
  },
  {
    "city": "DIVINÓPOLIS",
    "electionZone": "102",
    "stateCode": "MG"
  },
  {
    "city": "CORONEL FABRICIANO",
    "electionZone": "97",
    "stateCode": "MG"
  },
  {
    "city": "PIRAPORA",
    "electionZone": "218",
    "stateCode": "MG"
  },
  {
    "city": "IRAÍ DE MINAS",
    "electionZone": "181",
    "stateCode": "MG"
  },
  {
    "city": "BOM SUCESSO",
    "electionZone": "46",
    "stateCode": "MG"
  },
  {
    "city": "ITACARAMBI",
    "electionZone": "148",
    "stateCode": "MG"
  },
  {
    "city": "PESCADOR",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "PASSA VINTE",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DO RIO CLARO",
    "electionZone": "77",
    "stateCode": "MG"
  },
  {
    "city": "AIURUOCA",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "PATOS DE MINAS",
    "electionZone": "330",
    "stateCode": "MG"
  },
  {
    "city": "DIOGO DE VASCONCELOS",
    "electionZone": "171",
    "stateCode": "MG"
  },
  {
    "city": "PATOS DE MINAS",
    "electionZone": "210",
    "stateCode": "MG"
  },
  {
    "city": "VÁRZEA DA PALMA",
    "electionZone": "310",
    "stateCode": "MG"
  },
  {
    "city": "LADAINHA",
    "electionZone": "270",
    "stateCode": "MG"
  },
  {
    "city": "BELO ORIENTE",
    "electionZone": "3",
    "stateCode": "MG"
  },
  {
    "city": "CANTAGALO",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "GURINHATÃ",
    "electionZone": "141",
    "stateCode": "MG"
  },
  {
    "city": "ALPINÓPOLIS",
    "electionZone": "10",
    "stateCode": "MG"
  },
  {
    "city": "EWBANK DA CÂMARA",
    "electionZone": "250",
    "stateCode": "MG"
  },
  {
    "city": "JAPARAÍBA",
    "electionZone": "156",
    "stateCode": "MG"
  },
  {
    "city": "MARLIÉRIA",
    "electionZone": "98",
    "stateCode": "MG"
  },
  {
    "city": "ITACAMBIRA",
    "electionZone": "325",
    "stateCode": "MG"
  },
  {
    "city": "AGUANIL",
    "electionZone": "64",
    "stateCode": "MG"
  },
  {
    "city": "UBERABA",
    "electionZone": "347",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GONÇALO DO ABAETÉ",
    "electionZone": "210",
    "stateCode": "MG"
  },
  {
    "city": "GRÃO MOGOL",
    "electionZone": "120",
    "stateCode": "MG"
  },
  {
    "city": "MIRABELA",
    "electionZone": "185",
    "stateCode": "MG"
  },
  {
    "city": "ANGELÂNDIA",
    "electionZone": "67",
    "stateCode": "MG"
  },
  {
    "city": "CONQUISTA",
    "electionZone": "86",
    "stateCode": "MG"
  },
  {
    "city": "PIMENTA",
    "electionZone": "114",
    "stateCode": "MG"
  },
  {
    "city": "CARAÍ",
    "electionZone": "196",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO PARAÍSO",
    "electionZone": "260",
    "stateCode": "MG"
  },
  {
    "city": "BOA ESPERANÇA",
    "electionZone": "43",
    "stateCode": "MG"
  },
  {
    "city": "FRANCISCO SÁ",
    "electionZone": "115",
    "stateCode": "MG"
  },
  {
    "city": "CRISTAIS",
    "electionZone": "64",
    "stateCode": "MG"
  },
  {
    "city": "ESPINOSA",
    "electionZone": "109",
    "stateCode": "MG"
  },
  {
    "city": "MUZAMBINHO",
    "electionZone": "189",
    "stateCode": "MG"
  },
  {
    "city": "NAZARENO",
    "electionZone": "328",
    "stateCode": "MG"
  },
  {
    "city": "DELTA",
    "electionZone": "276",
    "stateCode": "MG"
  },
  {
    "city": "BURITIZEIRO",
    "electionZone": "218",
    "stateCode": "MG"
  },
  {
    "city": "POUSO ALTO",
    "electionZone": "259",
    "stateCode": "MG"
  },
  {
    "city": "VIÇOSA",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "BOM DESPACHO",
    "electionZone": "45",
    "stateCode": "MG"
  },
  {
    "city": "OURO PRETO",
    "electionZone": "200",
    "stateCode": "MG"
  },
  {
    "city": "BARBACENA",
    "electionZone": "23",
    "stateCode": "MG"
  },
  {
    "city": "DIAMANTINA",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "MARIA DA FÉ",
    "electionZone": "99",
    "stateCode": "MG"
  },
  {
    "city": "SÃO VICENTE DE MINAS",
    "electionZone": "14",
    "stateCode": "MG"
  },
  {
    "city": "BARRA LONGA",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "155",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "349",
    "stateCode": "MG"
  },
  {
    "city": "CRISÓLITA",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "OURO FINO",
    "electionZone": "199",
    "stateCode": "MG"
  },
  {
    "city": "RECREIO",
    "electionZone": "161",
    "stateCode": "MG"
  },
  {
    "city": "BRASÍLIA DE MINAS",
    "electionZone": "50",
    "stateCode": "MG"
  },
  {
    "city": "VEREDINHA",
    "electionZone": "336",
    "stateCode": "MG"
  },
  {
    "city": "VERÍSSIMO",
    "electionZone": "277",
    "stateCode": "MG"
  },
  {
    "city": "MONTE FORMOSO",
    "electionZone": "149",
    "stateCode": "MG"
  },
  {
    "city": "PIRANGA",
    "electionZone": "217",
    "stateCode": "MG"
  },
  {
    "city": "POCRANE",
    "electionZone": "129",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DEL REI",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "MONTES CLAROS",
    "electionZone": "317",
    "stateCode": "MG"
  },
  {
    "city": "RIO PARDO DE MINAS",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "ABADIA DOS DOURADOS",
    "electionZone": "96",
    "stateCode": "MG"
  },
  {
    "city": "MATIAS CARDOSO",
    "electionZone": "166",
    "stateCode": "MG"
  },
  {
    "city": "BAMBUÍ",
    "electionZone": "21",
    "stateCode": "MG"
  },
  {
    "city": "PAULA CÂNDIDO",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "IJACI",
    "electionZone": "160",
    "stateCode": "MG"
  },
  {
    "city": "CURVELO",
    "electionZone": "100",
    "stateCode": "MG"
  },
  {
    "city": "BRUMADINHO",
    "electionZone": "52",
    "stateCode": "MG"
  },
  {
    "city": "SARZEDO",
    "electionZone": "288",
    "stateCode": "MG"
  },
  {
    "city": "SANTA MARIA DE ITABIRA",
    "electionZone": "132",
    "stateCode": "MG"
  },
  {
    "city": "IBIRITÉ",
    "electionZone": "288",
    "stateCode": "MG"
  },
  {
    "city": "PEDRA AZUL",
    "electionZone": "213",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO EVANGELISTA",
    "electionZone": "257",
    "stateCode": "MG"
  },
  {
    "city": "CAPITÃO ENÉAS",
    "electionZone": "115",
    "stateCode": "MG"
  },
  {
    "city": "PEDRO LEOPOLDO",
    "electionZone": "215",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO JACARÉ",
    "electionZone": "64",
    "stateCode": "MG"
  },
  {
    "city": "PASSOS",
    "electionZone": "209",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "153",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "152",
    "stateCode": "MG"
  },
  {
    "city": "CAMBUQUIRA",
    "electionZone": "60",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DOS MONTES",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DO ORIENTE",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "CORAÇÃO DE JESUS",
    "electionZone": "94",
    "stateCode": "MG"
  },
  {
    "city": "OURO BRANCO",
    "electionZone": "198",
    "stateCode": "MG"
  },
  {
    "city": "INHAÚMA",
    "electionZone": "322",
    "stateCode": "MG"
  },
  {
    "city": "SETE LAGOAS",
    "electionZone": "264",
    "stateCode": "MG"
  },
  {
    "city": "OLHOS D'ÁGUA",
    "electionZone": "44",
    "stateCode": "MG"
  },
  {
    "city": "PRUDENTE DE MORAIS",
    "electionZone": "174",
    "stateCode": "MG"
  },
  {
    "city": "TUPACIGUARA",
    "electionZone": "274",
    "stateCode": "MG"
  },
  {
    "city": "ARAÇUAÍ",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "UBERABA",
    "electionZone": "277",
    "stateCode": "MG"
  },
  {
    "city": "UBERABA",
    "electionZone": "326",
    "stateCode": "MG"
  },
  {
    "city": "MARAVILHAS",
    "electionZone": "219",
    "stateCode": "MG"
  },
  {
    "city": "SÃO ROMÃO",
    "electionZone": "285",
    "stateCode": "MG"
  },
  {
    "city": "SACRAMENTO",
    "electionZone": "243",
    "stateCode": "MG"
  },
  {
    "city": "JAMPRUCA",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "PAINS",
    "electionZone": "18",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DO PARÁ",
    "electionZone": "219",
    "stateCode": "MG"
  },
  {
    "city": "JEQUITINHONHA",
    "electionZone": "149",
    "stateCode": "MG"
  },
  {
    "city": "COROMANDEL",
    "electionZone": "96",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "39",
    "stateCode": "MG"
  },
  {
    "city": "ENGENHEIRO NAVARRO",
    "electionZone": "44",
    "stateCode": "MG"
  },
  {
    "city": "FUNILÂNDIA",
    "electionZone": "264",
    "stateCode": "MG"
  },
  {
    "city": "PEDRINÓPOLIS",
    "electionZone": "291",
    "stateCode": "MG"
  },
  {
    "city": "CAXAMBU",
    "electionZone": "80",
    "stateCode": "MG"
  },
  {
    "city": "TURMALINA",
    "electionZone": "336",
    "stateCode": "MG"
  },
  {
    "city": "DIVINO",
    "electionZone": "70",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GONÇALO DO RIO ABAIXO",
    "electionZone": "245",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "34",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "334",
    "stateCode": "MG"
  },
  {
    "city": "CACHOEIRA DA PRATA",
    "electionZone": "322",
    "stateCode": "MG"
  },
  {
    "city": "URUCUIA",
    "electionZone": "320",
    "stateCode": "MG"
  },
  {
    "city": "PATROCÍNIO",
    "electionZone": "211",
    "stateCode": "MG"
  },
  {
    "city": "COQUEIRAL",
    "electionZone": "43",
    "stateCode": "MG"
  },
  {
    "city": "NATALÂNDIA",
    "electionZone": "329",
    "stateCode": "MG"
  },
  {
    "city": "PASSA QUATRO",
    "electionZone": "207",
    "stateCode": "MG"
  },
  {
    "city": "SÃO FRANCISCO DE PAULA",
    "electionZone": "197",
    "stateCode": "MG"
  },
  {
    "city": "MONTE SANTO DE MINAS",
    "electionZone": "182",
    "stateCode": "MG"
  },
  {
    "city": "GOIABEIRA",
    "electionZone": "89",
    "stateCode": "MG"
  },
  {
    "city": "JUIZ DE FORA",
    "electionZone": "315",
    "stateCode": "MG"
  },
  {
    "city": "ITATIAIUÇU",
    "electionZone": "140",
    "stateCode": "MG"
  },
  {
    "city": "PARÁ DE MINAS",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "MONTALVÂNIA",
    "electionZone": "342",
    "stateCode": "MG"
  },
  {
    "city": "ITAÚNA",
    "electionZone": "140",
    "stateCode": "MG"
  },
  {
    "city": "ANDRELÂNDIA",
    "electionZone": "14",
    "stateCode": "MG"
  },
  {
    "city": "PARACATU",
    "electionZone": "203",
    "stateCode": "MG"
  },
  {
    "city": "RIBEIRÃO VERMELHO",
    "electionZone": "160",
    "stateCode": "MG"
  },
  {
    "city": "EXTREMA",
    "electionZone": "112",
    "stateCode": "MG"
  },
  {
    "city": "JEQUITIBÁ",
    "electionZone": "264",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA DA PRATA",
    "electionZone": "156",
    "stateCode": "MG"
  },
  {
    "city": "MATO VERDE",
    "electionZone": "180",
    "stateCode": "MG"
  },
  {
    "city": "UBERABA",
    "electionZone": "276",
    "stateCode": "MG"
  },
  {
    "city": "MANHUAÇU",
    "electionZone": "167",
    "stateCode": "MG"
  },
  {
    "city": "SERITINGA",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "SANTO HIPÓLITO",
    "electionZone": "95",
    "stateCode": "MG"
  },
  {
    "city": "BOTUMIRIM",
    "electionZone": "120",
    "stateCode": "MG"
  },
  {
    "city": "SANTA LUZIA",
    "electionZone": "246",
    "stateCode": "MG"
  },
  {
    "city": "JURAMENTO",
    "electionZone": "325",
    "stateCode": "MG"
  },
  {
    "city": "NOVA RESENDE",
    "electionZone": "195",
    "stateCode": "MG"
  },
  {
    "city": "GOVERNADOR VALADARES",
    "electionZone": "119",
    "stateCode": "MG"
  },
  {
    "city": "GUARANÉSIA",
    "electionZone": "123",
    "stateCode": "MG"
  },
  {
    "city": "ITABIRITO",
    "electionZone": "133",
    "stateCode": "MG"
  },
  {
    "city": "NOVA UNIÃO",
    "electionZone": "56",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DA MATA",
    "electionZone": "74",
    "stateCode": "MG"
  },
  {
    "city": "VIRGEM DA LAPA",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "ESPERA FELIZ",
    "electionZone": "303",
    "stateCode": "MG"
  },
  {
    "city": "OURO VERDE DE MINAS",
    "electionZone": "270",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DE MINAS",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "JOAÍMA",
    "electionZone": "149",
    "stateCode": "MG"
  },
  {
    "city": "ARACITABA",
    "electionZone": "250",
    "stateCode": "MG"
  },
  {
    "city": "ÁGUA BOA",
    "electionZone": "67",
    "stateCode": "MG"
  },
  {
    "city": "BOM REPOUSO",
    "electionZone": "59",
    "stateCode": "MG"
  },
  {
    "city": "SENADOR MODESTINO GONÇALVES",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "FELIXLÂNDIA",
    "electionZone": "100",
    "stateCode": "MG"
  },
  {
    "city": "MONTES CLAROS",
    "electionZone": "325",
    "stateCode": "MG"
  },
  {
    "city": "MUTUM",
    "electionZone": "188",
    "stateCode": "MG"
  },
  {
    "city": "TRÊS CORAÇÕES",
    "electionZone": "272",
    "stateCode": "MG"
  },
  {
    "city": "MARTINHO CAMPOS",
    "electionZone": "341",
    "stateCode": "MG"
  },
  {
    "city": "FARIA LEMOS",
    "electionZone": "69",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GONÇALO DO SAPUCAÍ",
    "electionZone": "253",
    "stateCode": "MG"
  },
  {
    "city": "IPATINGA",
    "electionZone": "348",
    "stateCode": "MG"
  },
  {
    "city": "POÇOS DE CALDAS",
    "electionZone": "222",
    "stateCode": "MG"
  },
  {
    "city": "PAPAGAIOS",
    "electionZone": "219",
    "stateCode": "MG"
  },
  {
    "city": "NOVA LIMA",
    "electionZone": "194",
    "stateCode": "MG"
  },
  {
    "city": "TAIOBEIRAS",
    "electionZone": "266",
    "stateCode": "MG"
  },
  {
    "city": "BALDIM",
    "electionZone": "264",
    "stateCode": "MG"
  },
  {
    "city": "PEDRA BONITA",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "CORDISBURGO",
    "electionZone": "206",
    "stateCode": "MG"
  },
  {
    "city": "MATA VERDE",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "CÓRREGO FUNDO",
    "electionZone": "114",
    "stateCode": "MG"
  },
  {
    "city": "JEQUERI",
    "electionZone": "339",
    "stateCode": "MG"
  },
  {
    "city": "LUZ",
    "electionZone": "163",
    "stateCode": "MG"
  },
  {
    "city": "CAREAÇU",
    "electionZone": "253",
    "stateCode": "MG"
  },
  {
    "city": "VERMELHO NOVO",
    "electionZone": "231",
    "stateCode": "MG"
  },
  {
    "city": "MATERLÂNDIA",
    "electionZone": "242",
    "stateCode": "MG"
  },
  {
    "city": "MONTE SIÃO",
    "electionZone": "183",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DA PONTE",
    "electionZone": "255",
    "stateCode": "MG"
  },
  {
    "city": "INHAPIM",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "PIEDADE DE CARATINGA",
    "electionZone": "71",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO RIO VERDE",
    "electionZone": "259",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DO RIO VERDE",
    "electionZone": "84",
    "stateCode": "MG"
  },
  {
    "city": "FRANCISCÓPOLIS",
    "electionZone": "165",
    "stateCode": "MG"
  },
  {
    "city": "JOÃO PINHEIRO",
    "electionZone": "151",
    "stateCode": "MG"
  },
  {
    "city": "NANUQUE",
    "electionZone": "190",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GONÇALO DO PARÁ",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "SERRA DOS AIMORÉS",
    "electionZone": "190",
    "stateCode": "MG"
  },
  {
    "city": "LASSANCE",
    "electionZone": "310",
    "stateCode": "MG"
  },
  {
    "city": "PARAOPEBA",
    "electionZone": "206",
    "stateCode": "MG"
  },
  {
    "city": "NOVA SERRANA",
    "electionZone": "298",
    "stateCode": "MG"
  },
  {
    "city": "TRÊS PONTAS",
    "electionZone": "273",
    "stateCode": "MG"
  },
  {
    "city": "IAPU",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "CLARAVAL",
    "electionZone": "127",
    "stateCode": "MG"
  },
  {
    "city": "MINAS NOVAS",
    "electionZone": "177",
    "stateCode": "MG"
  },
  {
    "city": "JANUÁRIA",
    "electionZone": "148",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO RETIRO",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "PIRANGUÇU",
    "electionZone": "134",
    "stateCode": "MG"
  },
  {
    "city": "GONÇALVES",
    "electionZone": "205",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "27",
    "stateCode": "MG"
  },
  {
    "city": "BARÃO DE MONTE ALTO",
    "electionZone": "201",
    "stateCode": "MG"
  },
  {
    "city": "BOCAINA DE MINAS",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "35",
    "stateCode": "MG"
  },
  {
    "city": "MONTEZUMA",
    "electionZone": "237",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DO CAJURU",
    "electionZone": "287",
    "stateCode": "MG"
  },
  {
    "city": "ENTRE RIOS DE MINAS",
    "electionZone": "106",
    "stateCode": "MG"
  },
  {
    "city": "CARANAÍBA",
    "electionZone": "68",
    "stateCode": "MG"
  },
  {
    "city": "RUBIM",
    "electionZone": "9",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "29",
    "stateCode": "MG"
  },
  {
    "city": "CARBONITA",
    "electionZone": "135",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DA VARGEM",
    "electionZone": "273",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "30",
    "stateCode": "MG"
  },
  {
    "city": "PRATÁPOLIS",
    "electionZone": "293",
    "stateCode": "MG"
  },
  {
    "city": "NAQUE",
    "electionZone": "3",
    "stateCode": "MG"
  },
  {
    "city": "DESTERRO DE ENTRE RIOS",
    "electionZone": "106",
    "stateCode": "MG"
  },
  {
    "city": "CONSELHEIRO PENA",
    "electionZone": "89",
    "stateCode": "MG"
  },
  {
    "city": "CRISTINA",
    "electionZone": "99",
    "stateCode": "MG"
  },
  {
    "city": "BRAZÓPOLIS",
    "electionZone": "51",
    "stateCode": "MG"
  },
  {
    "city": "SENHORA DE OLIVEIRA",
    "electionZone": "217",
    "stateCode": "MG"
  },
  {
    "city": "ARAÚJOS",
    "electionZone": "298",
    "stateCode": "MG"
  },
  {
    "city": "PORTEIRINHA",
    "electionZone": "226",
    "stateCode": "MG"
  },
  {
    "city": "FELÍCIO DOS SANTOS",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "ONÇA DE PITANGUI",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "JESUÂNIA",
    "electionZone": "159",
    "stateCode": "MG"
  },
  {
    "city": "UMBURATIBA",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DO MANTENINHA",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "FLORESTAL",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "LUMINÁRIAS",
    "electionZone": "160",
    "stateCode": "MG"
  },
  {
    "city": "BELO HORIZONTE",
    "electionZone": "333",
    "stateCode": "MG"
  },
  {
    "city": "BOM JESUS DA PENHA",
    "electionZone": "195",
    "stateCode": "MG"
  },
  {
    "city": "SENHORA DOS REMÉDIOS",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "CHIADOR",
    "electionZone": "170",
    "stateCode": "MG"
  },
  {
    "city": "PORTO FIRME",
    "electionZone": "217",
    "stateCode": "MG"
  },
  {
    "city": "SILVEIRÂNIA",
    "electionZone": "239",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DO DIVINO",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "JEQUITAÍ",
    "electionZone": "218",
    "stateCode": "MG"
  },
  {
    "city": "ALAGOA",
    "electionZone": "306",
    "stateCode": "MG"
  },
  {
    "city": "ITAVERAVA",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "IGARATINGA",
    "electionZone": "202",
    "stateCode": "MG"
  },
  {
    "city": "SÃO FÉLIX DE MINAS",
    "electionZone": "169",
    "stateCode": "MG"
  },
  {
    "city": "CAPIM BRANCO",
    "electionZone": "174",
    "stateCode": "MG"
  },
  {
    "city": "DOM SILVÉRIO",
    "electionZone": "12",
    "stateCode": "MG"
  },
  {
    "city": "CARRANCAS",
    "electionZone": "343",
    "stateCode": "MG"
  },
  {
    "city": "MORRO DA GARÇA",
    "electionZone": "100",
    "stateCode": "MG"
  },
  {
    "city": "ARAÇAÍ",
    "electionZone": "206",
    "stateCode": "MG"
  },
  {
    "city": "COUTO DE MAGALHÃES DE MINAS",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "MOEDA",
    "electionZone": "338",
    "stateCode": "MG"
  },
  {
    "city": "IPUIÚNA",
    "electionZone": "345",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DO ALEGRE",
    "electionZone": "214",
    "stateCode": "MG"
  },
  {
    "city": "GUARDA-MOR",
    "electionZone": "295",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO DA LAGOA",
    "electionZone": "94",
    "stateCode": "MG"
  },
  {
    "city": "CEDRO DO ABAETÉ",
    "electionZone": "1",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO ANTA",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "GUANHÃES",
    "electionZone": "121",
    "stateCode": "MG"
  },
  {
    "city": "NACIP RAYDAN",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "HELIODORA",
    "electionZone": "191",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DO RIACHO",
    "electionZone": "143",
    "stateCode": "MG"
  },
  {
    "city": "SENADOR AMARAL",
    "electionZone": "59",
    "stateCode": "MG"
  },
  {
    "city": "SANTA CRUZ DO ESCALVADO",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "CAIANA",
    "electionZone": "303",
    "stateCode": "MG"
  },
  {
    "city": "FORTALEZA DE MINAS",
    "electionZone": "145",
    "stateCode": "MG"
  },
  {
    "city": "CAJURI",
    "electionZone": "282",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DAS ALAGOAS",
    "electionZone": "82",
    "stateCode": "MG"
  },
  {
    "city": "ALTEROSA",
    "electionZone": "19",
    "stateCode": "MG"
  },
  {
    "city": "GUARACIABA",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "SÃO ROQUE DE MINAS",
    "electionZone": "323",
    "stateCode": "MG"
  },
  {
    "city": "PATIS",
    "electionZone": "185",
    "stateCode": "MG"
  },
  {
    "city": "DIVISA NOVA",
    "electionZone": "55",
    "stateCode": "MG"
  },
  {
    "city": "SANTA HELENA DE MINAS",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "ARANTINA",
    "electionZone": "14",
    "stateCode": "MG"
  },
  {
    "city": "PASSA TEMPO",
    "electionZone": "208",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DA BARRA DE MINAS",
    "electionZone": "328",
    "stateCode": "MG"
  },
  {
    "city": "TOCOS DO MOJI",
    "electionZone": "48",
    "stateCode": "MG"
  },
  {
    "city": "CAMPO DO MEIO",
    "electionZone": "65",
    "stateCode": "MG"
  },
  {
    "city": "BUGRE",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "MATHIAS LOBATO",
    "electionZone": "119",
    "stateCode": "MG"
  },
  {
    "city": "DOURADOQUARA",
    "electionZone": "181",
    "stateCode": "MG"
  },
  {
    "city": "TAPARUBA",
    "electionZone": "129",
    "stateCode": "MG"
  },
  {
    "city": "DORES DO INDAIÁ",
    "electionZone": "104",
    "stateCode": "MG"
  },
  {
    "city": "CLÁUDIO",
    "electionZone": "81",
    "stateCode": "MG"
  },
  {
    "city": "DELFIM MOREIRA",
    "electionZone": "134",
    "stateCode": "MG"
  },
  {
    "city": "DURANDÉ",
    "electionZone": "168",
    "stateCode": "MG"
  },
  {
    "city": "PEDRAS DE MARIA DA CRUZ",
    "electionZone": "148",
    "stateCode": "MG"
  },
  {
    "city": "CONGONHAS",
    "electionZone": "85",
    "stateCode": "MG"
  },
  {
    "city": "TIRADENTES",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "PRATINHA",
    "electionZone": "126",
    "stateCode": "MG"
  },
  {
    "city": "RESENDE COSTA",
    "electionZone": "232",
    "stateCode": "MG"
  },
  {
    "city": "PEQUERI",
    "electionZone": "42",
    "stateCode": "MG"
  },
  {
    "city": "CACHOEIRA DOURADA",
    "electionZone": "302",
    "stateCode": "MG"
  },
  {
    "city": "FREI LAGONEGRO",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "MARMELÓPOLIS",
    "electionZone": "134",
    "stateCode": "MG"
  },
  {
    "city": "CAPELA NOVA",
    "electionZone": "68",
    "stateCode": "MG"
  },
  {
    "city": "PEDRO TEIXEIRA",
    "electionZone": "162",
    "stateCode": "MG"
  },
  {
    "city": "GONZAGA",
    "electionZone": "283",
    "stateCode": "MG"
  },
  {
    "city": "SOBRÁLIA",
    "electionZone": "267",
    "stateCode": "MG"
  },
  {
    "city": "PAULISTAS",
    "electionZone": "242",
    "stateCode": "MG"
  },
  {
    "city": "BIQUINHAS",
    "electionZone": "186",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO MARANHÃO",
    "electionZone": "247",
    "stateCode": "MG"
  },
  {
    "city": "NOVA MÓDICA",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "PADRE CARVALHO",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "CRUZEIRO DA FORTALEZA",
    "electionZone": "211",
    "stateCode": "MG"
  },
  {
    "city": "VIRGÍNIA",
    "electionZone": "137",
    "stateCode": "MG"
  },
  {
    "city": "EUGENÓPOLIS",
    "electionZone": "111",
    "stateCode": "MG"
  },
  {
    "city": "SALINAS",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "ACAIACA",
    "electionZone": "225",
    "stateCode": "MG"
  },
  {
    "city": "ENGENHEIRO CALDAS",
    "electionZone": "267",
    "stateCode": "MG"
  },
  {
    "city": "DATAS",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "BERTÓPOLIS",
    "electionZone": "4",
    "stateCode": "MG"
  },
  {
    "city": "IBIRACATU",
    "electionZone": "255",
    "stateCode": "MG"
  },
  {
    "city": "DORES DE GUANHÃES",
    "electionZone": "121",
    "stateCode": "MG"
  },
  {
    "city": "SILVIANÓPOLIS",
    "electionZone": "265",
    "stateCode": "MG"
  },
  {
    "city": "MÁRIO CAMPOS",
    "electionZone": "288",
    "stateCode": "MG"
  },
  {
    "city": "PRESIDENTE JUSCELINO",
    "electionZone": "100",
    "stateCode": "MG"
  },
  {
    "city": "ITINGA",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "CANÁPOLIS",
    "electionZone": "66",
    "stateCode": "MG"
  },
  {
    "city": "MONJOLOS",
    "electionZone": "101",
    "stateCode": "MG"
  },
  {
    "city": "MIRAVÂNIA",
    "electionZone": "166",
    "stateCode": "MG"
  },
  {
    "city": "FERNANDES TOURINHO",
    "electionZone": "267",
    "stateCode": "MG"
  },
  {
    "city": "CAMPOS GERAIS",
    "electionZone": "65",
    "stateCode": "MG"
  },
  {
    "city": "FORMOSO",
    "electionZone": "324",
    "stateCode": "MG"
  },
  {
    "city": "TOCANTINS",
    "electionZone": "275",
    "stateCode": "MG"
  },
  {
    "city": "SERRA AZUL DE MINAS",
    "electionZone": "262",
    "stateCode": "MG"
  },
  {
    "city": "SENADOR JOSÉ BENTO",
    "electionZone": "227",
    "stateCode": "MG"
  },
  {
    "city": "SÃO DOMINGOS DAS DORES",
    "electionZone": "128",
    "stateCode": "MG"
  },
  {
    "city": "TEIXEIRAS",
    "electionZone": "268",
    "stateCode": "MG"
  },
  {
    "city": "BRÁS PIRES",
    "electionZone": "261",
    "stateCode": "MG"
  },
  {
    "city": "QUARTEL GERAL",
    "electionZone": "104",
    "stateCode": "MG"
  },
  {
    "city": "SANTA FÉ DE MINAS",
    "electionZone": "285",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DE IPANEMA",
    "electionZone": "129",
    "stateCode": "MG"
  },
  {
    "city": "CATAS ALTAS DA NORUEGA",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "VOLTA GRANDE",
    "electionZone": "7",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO RIO ABAIXO",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "LAVRAS",
    "electionZone": "160",
    "stateCode": "MG"
  },
  {
    "city": "SANTO ANTÔNIO DO AVENTUREIRO",
    "electionZone": "7",
    "stateCode": "MG"
  },
  {
    "city": "PRADOS",
    "electionZone": "228",
    "stateCode": "MG"
  },
  {
    "city": "PARAGUAÇU",
    "electionZone": "204",
    "stateCode": "MG"
  },
  {
    "city": "DOM VIÇOSO",
    "electionZone": "75",
    "stateCode": "MG"
  },
  {
    "city": "ITAMARANDIBA",
    "electionZone": "135",
    "stateCode": "MG"
  },
  {
    "city": "CASCALHO RICO",
    "electionZone": "110",
    "stateCode": "MG"
  },
  {
    "city": "SENADOR FIRMINO",
    "electionZone": "261",
    "stateCode": "MG"
  },
  {
    "city": "SABINÓPOLIS",
    "electionZone": "242",
    "stateCode": "MG"
  },
  {
    "city": "JACINTO",
    "electionZone": "144",
    "stateCode": "MG"
  },
  {
    "city": "CORONEL XAVIER CHAVES",
    "electionZone": "232",
    "stateCode": "MG"
  },
  {
    "city": "LIBERDADE",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "ESPÍRITO SANTO DO DOURADO",
    "electionZone": "265",
    "stateCode": "MG"
  },
  {
    "city": "SÃO DOMINGOS DO PRATA",
    "electionZone": "251",
    "stateCode": "MG"
  },
  {
    "city": "DOM JOAQUIM",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "RIO PARANAÍBA",
    "electionZone": "236",
    "stateCode": "MG"
  },
  {
    "city": "NOVORIZONTE",
    "electionZone": "244",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOSÉ DA LAPA",
    "electionZone": "311",
    "stateCode": "MG"
  },
  {
    "city": "SÃO BENTO ABADE",
    "electionZone": "272",
    "stateCode": "MG"
  },
  {
    "city": "SEM PEIXE",
    "electionZone": "12",
    "stateCode": "MG"
  },
  {
    "city": "POTÉ",
    "electionZone": "270",
    "stateCode": "MG"
  },
  {
    "city": "BIAS FORTES",
    "electionZone": "24",
    "stateCode": "MG"
  },
  {
    "city": "COMERCINHO",
    "electionZone": "175",
    "stateCode": "MG"
  },
  {
    "city": "SERRANOS",
    "electionZone": "6",
    "stateCode": "MG"
  },
  {
    "city": "FAMA",
    "electionZone": "204",
    "stateCode": "MG"
  },
  {
    "city": "CAPITÓLIO",
    "electionZone": "220",
    "stateCode": "MG"
  },
  {
    "city": "CONTAGEM",
    "electionZone": "92",
    "stateCode": "MG"
  },
  {
    "city": "FREI GASPAR",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "VIRGOLÂNDIA",
    "electionZone": "212",
    "stateCode": "MG"
  },
  {
    "city": "AUGUSTO DE LIMA",
    "electionZone": "54",
    "stateCode": "MG"
  },
  {
    "city": "CONSOLAÇÃO",
    "electionZone": "205",
    "stateCode": "MG"
  },
  {
    "city": "SANTA CRUZ DE MINAS",
    "electionZone": "256",
    "stateCode": "MG"
  },
  {
    "city": "FERVEDOURO",
    "electionZone": "69",
    "stateCode": "MG"
  },
  {
    "city": "SANTA MARGARIDA",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "ESTIVA",
    "electionZone": "227",
    "stateCode": "MG"
  },
  {
    "city": "NATÉRCIA",
    "electionZone": "191",
    "stateCode": "MG"
  },
  {
    "city": "CARVALHÓPOLIS",
    "electionZone": "164",
    "stateCode": "MG"
  },
  {
    "city": "PIEDADE DE PONTE NOVA",
    "electionZone": "339",
    "stateCode": "MG"
  },
  {
    "city": "CARLOS CHAGAS",
    "electionZone": "73",
    "stateCode": "MG"
  },
  {
    "city": "INDIANÓPOLIS",
    "electionZone": "16",
    "stateCode": "MG"
  },
  {
    "city": "RODEIRO",
    "electionZone": "275",
    "stateCode": "MG"
  },
  {
    "city": "ENTRE FOLHAS",
    "electionZone": "72",
    "stateCode": "MG"
  },
  {
    "city": "CAMPANÁRIO",
    "electionZone": "136",
    "stateCode": "MG"
  },
  {
    "city": "CARMÓPOLIS DE MINAS",
    "electionZone": "197",
    "stateCode": "MG"
  },
  {
    "city": "ROMARIA",
    "electionZone": "181",
    "stateCode": "MG"
  },
  {
    "city": "TIMÓTEO",
    "electionZone": "98",
    "stateCode": "MG"
  },
  {
    "city": "JACUÍ",
    "electionZone": "145",
    "stateCode": "MG"
  },
  {
    "city": "TIROS",
    "electionZone": "337",
    "stateCode": "MG"
  },
  {
    "city": "FORTUNA DE MINAS",
    "electionZone": "322",
    "stateCode": "MG"
  },
  {
    "city": "SÃO FRANCISCO",
    "electionZone": "252",
    "stateCode": "MG"
  },
  {
    "city": "VARJÃO DE MINAS",
    "electionZone": "210",
    "stateCode": "MG"
  },
  {
    "city": "ORIZÂNIA",
    "electionZone": "70",
    "stateCode": "MG"
  },
  {
    "city": "SÃO PEDRO DA UNIÃO",
    "electionZone": "125",
    "stateCode": "MG"
  },
  {
    "city": "CABO VERDE",
    "electionZone": "55",
    "stateCode": "MG"
  },
  {
    "city": "CAPINÓPOLIS",
    "electionZone": "302",
    "stateCode": "MG"
  },
  {
    "city": "LEME DO PRADO",
    "electionZone": "336",
    "stateCode": "MG"
  },
  {
    "city": "MARTINS SOARES",
    "electionZone": "168",
    "stateCode": "MG"
  },
  {
    "city": "PONTE NOVA",
    "electionZone": "224",
    "stateCode": "MG"
  },
  {
    "city": "JURUAIA",
    "electionZone": "189",
    "stateCode": "MG"
  },
  {
    "city": "NOVO CRUZEIRO",
    "electionZone": "196",
    "stateCode": "MG"
  },
  {
    "city": "INCONFIDENTES",
    "electionZone": "199",
    "stateCode": "MG"
  },
  {
    "city": "ARGIRITA",
    "electionZone": "161",
    "stateCode": "MG"
  },
  {
    "city": "GUIMARÂNIA",
    "electionZone": "211",
    "stateCode": "MG"
  },
  {
    "city": "SANTANA DE PIRAPAMA",
    "electionZone": "264",
    "stateCode": "MG"
  },
  {
    "city": "CAPARAÓ",
    "electionZone": "303",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GOTARDO",
    "electionZone": "254",
    "stateCode": "MG"
  },
  {
    "city": "CAMPO BELO",
    "electionZone": "64",
    "stateCode": "MG"
  },
  {
    "city": "CAMPOS ALTOS",
    "electionZone": "327",
    "stateCode": "MG"
  },
  {
    "city": "GOIANÁ",
    "electionZone": "235",
    "stateCode": "MG"
  },
  {
    "city": "PINTÓPOLIS",
    "electionZone": "252",
    "stateCode": "MG"
  },
  {
    "city": "CÓRREGO DANTA",
    "electionZone": "163",
    "stateCode": "MG"
  },
  {
    "city": "SÃO THOMÉ DAS LETRAS",
    "electionZone": "272",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO RIO PRETO",
    "electionZone": "83",
    "stateCode": "MG"
  },
  {
    "city": "PEDRALVA",
    "electionZone": "214",
    "stateCode": "MG"
  },
  {
    "city": "TOLEDO",
    "electionZone": "112",
    "stateCode": "MG"
  },
  {
    "city": "CÓRREGO DO BOM JESUS",
    "electionZone": "59",
    "stateCode": "MG"
  },
  {
    "city": "IBITURUNA",
    "electionZone": "46",
    "stateCode": "MG"
  },
  {
    "city": "ITAGUARA",
    "electionZone": "305",
    "stateCode": "MG"
  },
  {
    "city": "ANTÔNIO PRADO DE MINAS",
    "electionZone": "111",
    "stateCode": "MG"
  },
  {
    "city": "MESQUITA",
    "electionZone": "176",
    "stateCode": "MG"
  },
  {
    "city": "MONSENHOR PAULO",
    "electionZone": "61",
    "stateCode": "MG"
  },
  {
    "city": "QUELUZITO",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "TURVOLÂNDIA",
    "electionZone": "265",
    "stateCode": "MG"
  },
  {
    "city": "ALFREDO VASCONCELOS",
    "electionZone": "25",
    "stateCode": "MG"
  },
  {
    "city": "CARMO DO PARANAÍBA",
    "electionZone": "76",
    "stateCode": "MG"
  },
  {
    "city": "ROSÁRIO DA LIMEIRA",
    "electionZone": "187",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DA VARGEM ALEGRE",
    "electionZone": "178",
    "stateCode": "MG"
  },
  {
    "city": "SÃO GERALDO DO BAIXIO",
    "electionZone": "117",
    "stateCode": "MG"
  },
  {
    "city": "FELISBURGO",
    "electionZone": "149",
    "stateCode": "MG"
  },
  {
    "city": "LAMIM",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA FORMOSA",
    "electionZone": "330",
    "stateCode": "MG"
  },
  {
    "city": "CASA GRANDE",
    "electionZone": "88",
    "stateCode": "MG"
  },
  {
    "city": "LAJINHA",
    "electionZone": "158",
    "stateCode": "MG"
  },
  {
    "city": "ALTO RIO DOCE",
    "electionZone": "11",
    "stateCode": "MG"
  },
  {
    "city": "VERDELÂNDIA",
    "electionZone": "147",
    "stateCode": "MG"
  },
  {
    "city": "DIONÍSIO",
    "electionZone": "251",
    "stateCode": "MG"
  },
  {
    "city": "CAPUTIRA",
    "electionZone": "2",
    "stateCode": "MG"
  },
  {
    "city": "BOM JARDIM DE MINAS",
    "electionZone": "14",
    "stateCode": "MG"
  },
  {
    "city": "PIEDADE DOS GERAIS",
    "electionZone": "47",
    "stateCode": "MG"
  },
  {
    "city": "MARIPÁ DE MINAS",
    "electionZone": "42",
    "stateCode": "MG"
  },
  {
    "city": "CONCEIÇÃO DAS PEDRAS",
    "electionZone": "191",
    "stateCode": "MG"
  },
  {
    "city": "WENCESLAU BRAZ",
    "electionZone": "134",
    "stateCode": "MG"
  },
  {
    "city": "ITUMIRIM",
    "electionZone": "343",
    "stateCode": "MG"
  },
  {
    "city": "SÃO SEBASTIÃO DO OESTE",
    "electionZone": "139",
    "stateCode": "MG"
  },
  {
    "city": "VARGEM BONITA",
    "electionZone": "323",
    "stateCode": "MG"
  },
  {
    "city": "TUMIRITINGA",
    "electionZone": "89",
    "stateCode": "MG"
  },
  {
    "city": "BONFINÓPOLIS DE MINAS",
    "electionZone": "329",
    "stateCode": "MG"
  },
  {
    "city": "LAGOA DOS PATOS",
    "electionZone": "94",
    "stateCode": "MG"
  },
  {
    "city": "NOVO ORIENTE DE MINAS",
    "electionZone": "269",
    "stateCode": "MG"
  },
  {
    "city": "ANTÔNIO DIAS",
    "electionZone": "97",
    "stateCode": "MG"
  },
  {
    "city": "GRUPIARA",
    "electionZone": "110",
    "stateCode": "MG"
  },
  {
    "city": "SÃO JOÃO BATISTA DO GLÓRIA",
    "electionZone": "209",
    "stateCode": "MG"
  },
  {
    "city": "CORDISLÂNDIA",
    "electionZone": "253",
    "stateCode": "MG"
  },
  {
    "city": "SANTA ROSA DA SERRA",
    "electionZone": "327",
    "stateCode": "MG"
  },
  {
    "city": "PIEDADE DO RIO GRANDE",
    "electionZone": "24",
    "stateCode": "MG"
  },
  {
    "city": "DORESÓPOLIS",
    "electionZone": "220",
    "stateCode": "MG"
  },
  {
    "city": "SANTA RITA DE CALDAS",
    "electionZone": "345",
    "stateCode": "MG"
  },
  {
    "city": "PONTO DOS VOLANTES",
    "electionZone": "15",
    "stateCode": "MG"
  },
  {
    "city": "JAGUARAÇU",
    "electionZone": "98",
    "stateCode": "MG"
  },
  {
    "city": "MATUTINA",
    "electionZone": "254",
    "stateCode": "MG"
  },
  {
    "city": "SERRA DA SAUDADE",
    "electionZone": "104",
    "stateCode": "MG"
  },
  {
    "city": "RIO PIRACICABA",
    "electionZone": "238",
    "stateCode": "MG"
  },
  {
    "city": "DEODÁPOLIS",
    "electionZone": "39",
    "stateCode": "MS"
  },
  {
    "city": "AMAMBAI",
    "electionZone": "1",
    "stateCode": "MS"
  },
  {
    "city": "VICENTINA",
    "electionZone": "4",
    "stateCode": "MS"
  },
  {
    "city": "NAVIRAÍ",
    "electionZone": "2",
    "stateCode": "MS"
  },
  {
    "city": "BELA VISTA",
    "electionZone": "17",
    "stateCode": "MS"
  },
  {
    "city": "DOURADINA",
    "electionZone": "18",
    "stateCode": "MS"
  },
  {
    "city": "SETE QUEDAS",
    "electionZone": "46",
    "stateCode": "MS"
  },
  {
    "city": "NIOAQUE",
    "electionZone": "45",
    "stateCode": "MS"
  },
  {
    "city": "JARAGUARI",
    "electionZone": "34",
    "stateCode": "MS"
  },
  {
    "city": "CAMAPUÃ",
    "electionZone": "14",
    "stateCode": "MS"
  },
  {
    "city": "NOVA ALVORADA DO SUL",
    "electionZone": "11",
    "stateCode": "MS"
  },
  {
    "city": "TACURU",
    "electionZone": "25",
    "stateCode": "MS"
  },
  {
    "city": "AQUIDAUANA",
    "electionZone": "10",
    "stateCode": "MS"
  },
  {
    "city": "COXIM",
    "electionZone": "12",
    "stateCode": "MS"
  },
  {
    "city": "DOURADOS",
    "electionZone": "43",
    "stateCode": "MS"
  },
  {
    "city": "CAARAPÓ",
    "electionZone": "28",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "53",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "36",
    "stateCode": "MS"
  },
  {
    "city": "INOCÊNCIA",
    "electionZone": "42",
    "stateCode": "MS"
  },
  {
    "city": "PONTA PORÃ",
    "electionZone": "52",
    "stateCode": "MS"
  },
  {
    "city": "MARACAJU",
    "electionZone": "16",
    "stateCode": "MS"
  },
  {
    "city": "RIO BRILHANTE",
    "electionZone": "11",
    "stateCode": "MS"
  },
  {
    "city": "FIGUEIRÃO",
    "electionZone": "38",
    "stateCode": "MS"
  },
  {
    "city": "ANTÔNIO JOÃO",
    "electionZone": "52",
    "stateCode": "MS"
  },
  {
    "city": "MUNDO NOVO",
    "electionZone": "33",
    "stateCode": "MS"
  },
  {
    "city": "PORTO MURTINHO",
    "electionZone": "20",
    "stateCode": "MS"
  },
  {
    "city": "JUTI",
    "electionZone": "28",
    "stateCode": "MS"
  },
  {
    "city": "ITAQUIRAÍ",
    "electionZone": "2",
    "stateCode": "MS"
  },
  {
    "city": "RIO NEGRO",
    "electionZone": "37",
    "stateCode": "MS"
  },
  {
    "city": "BONITO",
    "electionZone": "30",
    "stateCode": "MS"
  },
  {
    "city": "BRASILÂNDIA",
    "electionZone": "41",
    "stateCode": "MS"
  },
  {
    "city": "CARACOL",
    "electionZone": "17",
    "stateCode": "MS"
  },
  {
    "city": "SONORA",
    "electionZone": "26",
    "stateCode": "MS"
  },
  {
    "city": "COSTA RICA",
    "electionZone": "38",
    "stateCode": "MS"
  },
  {
    "city": "CASSILÂNDIA",
    "electionZone": "3",
    "stateCode": "MS"
  },
  {
    "city": "RIO VERDE DE MATO GROSSO",
    "electionZone": "21",
    "stateCode": "MS"
  },
  {
    "city": "JAPORÃ",
    "electionZone": "33",
    "stateCode": "MS"
  },
  {
    "city": "SANTA RITA DO PARDO",
    "electionZone": "41",
    "stateCode": "MS"
  },
  {
    "city": "JATEÍ",
    "electionZone": "4",
    "stateCode": "MS"
  },
  {
    "city": "PARANHOS",
    "electionZone": "46",
    "stateCode": "MS"
  },
  {
    "city": "ELDORADO",
    "electionZone": "33",
    "stateCode": "MS"
  },
  {
    "city": "SIDROLÂNDIA",
    "electionZone": "31",
    "stateCode": "MS"
  },
  {
    "city": "CORONEL SAPUCAIA",
    "electionZone": "1",
    "stateCode": "MS"
  },
  {
    "city": "IGUATEMI",
    "electionZone": "25",
    "stateCode": "MS"
  },
  {
    "city": "GLÓRIA DE DOURADOS",
    "electionZone": "39",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "8",
    "stateCode": "MS"
  },
  {
    "city": "CORGUINHO",
    "electionZone": "37",
    "stateCode": "MS"
  },
  {
    "city": "ITAPORÃ",
    "electionZone": "43",
    "stateCode": "MS"
  },
  {
    "city": "BANDEIRANTES",
    "electionZone": "34",
    "stateCode": "MS"
  },
  {
    "city": "JARDIM",
    "electionZone": "22",
    "stateCode": "MS"
  },
  {
    "city": "ROCHEDO",
    "electionZone": "37",
    "stateCode": "MS"
  },
  {
    "city": "FÁTIMA DO SUL",
    "electionZone": "4",
    "stateCode": "MS"
  },
  {
    "city": "ALCINÓPOLIS",
    "electionZone": "12",
    "stateCode": "MS"
  },
  {
    "city": "LADÁRIO",
    "electionZone": "50",
    "stateCode": "MS"
  },
  {
    "city": "SELVÍRIA",
    "electionZone": "9",
    "stateCode": "MS"
  },
  {
    "city": "CORUMBÁ",
    "electionZone": "50",
    "stateCode": "MS"
  },
  {
    "city": "CORUMBÁ",
    "electionZone": "7",
    "stateCode": "MS"
  },
  {
    "city": "TRÊS LAGOAS",
    "electionZone": "51",
    "stateCode": "MS"
  },
  {
    "city": "TERENOS",
    "electionZone": "54",
    "stateCode": "MS"
  },
  {
    "city": "CHAPADÃO DO SUL",
    "electionZone": "48",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "35",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "44",
    "stateCode": "MS"
  },
  {
    "city": "DOIS IRMÃOS DO BURITI",
    "electionZone": "49",
    "stateCode": "MS"
  },
  {
    "city": "ANASTÁCIO",
    "electionZone": "49",
    "stateCode": "MS"
  },
  {
    "city": "APARECIDA DO TABOADO",
    "electionZone": "24",
    "stateCode": "MS"
  },
  {
    "city": "PONTA PORÃ",
    "electionZone": "19",
    "stateCode": "MS"
  },
  {
    "city": "BATAYPORÃ",
    "electionZone": "5",
    "stateCode": "MS"
  },
  {
    "city": "ANAURILÂNDIA",
    "electionZone": "47",
    "stateCode": "MS"
  },
  {
    "city": "IVINHEMA",
    "electionZone": "27",
    "stateCode": "MS"
  },
  {
    "city": "PARANAÍBA",
    "electionZone": "13",
    "stateCode": "MS"
  },
  {
    "city": "NOVO HORIZONTE DO SUL",
    "electionZone": "27",
    "stateCode": "MS"
  },
  {
    "city": "ANGÉLICA",
    "electionZone": "27",
    "stateCode": "MS"
  },
  {
    "city": "NOVA ANDRADINA",
    "electionZone": "5",
    "stateCode": "MS"
  },
  {
    "city": "MIRANDA",
    "electionZone": "15",
    "stateCode": "MS"
  },
  {
    "city": "BODOQUENA",
    "electionZone": "15",
    "stateCode": "MS"
  },
  {
    "city": "PEDRO GOMES",
    "electionZone": "29",
    "stateCode": "MS"
  },
  {
    "city": "SÃO GABRIEL DO OESTE",
    "electionZone": "40",
    "stateCode": "MS"
  },
  {
    "city": "ÁGUA CLARA",
    "electionZone": "23",
    "stateCode": "MS"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "54",
    "stateCode": "MS"
  },
  {
    "city": "PARAÍSO DAS ÁGUAS",
    "electionZone": "38",
    "stateCode": "MS"
  },
  {
    "city": "TRÊS LAGOAS",
    "electionZone": "9",
    "stateCode": "MS"
  },
  {
    "city": "BATAGUASSU",
    "electionZone": "6",
    "stateCode": "MS"
  },
  {
    "city": "TAQUARUSSU",
    "electionZone": "5",
    "stateCode": "MS"
  },
  {
    "city": "DOURADOS",
    "electionZone": "18",
    "stateCode": "MS"
  },
  {
    "city": "ARAL MOREIRA",
    "electionZone": "19",
    "stateCode": "MS"
  },
  {
    "city": "GUIA LOPES DA LAGUNA",
    "electionZone": "22",
    "stateCode": "MS"
  },
  {
    "city": "RIBAS DO RIO PARDO",
    "electionZone": "32",
    "stateCode": "MS"
  },
  {
    "city": "LAGUNA CARAPÃ",
    "electionZone": "19",
    "stateCode": "MS"
  },
  {
    "city": "CANARANA",
    "electionZone": "31",
    "stateCode": "MT"
  },
  {
    "city": "CÁCERES",
    "electionZone": "6",
    "stateCode": "MT"
  },
  {
    "city": "SÃO FÉLIX DO ARAGUAIA",
    "electionZone": "15",
    "stateCode": "MT"
  },
  {
    "city": "ALTA FLORESTA",
    "electionZone": "24",
    "stateCode": "MT"
  },
  {
    "city": "TAPURAH",
    "electionZone": "21",
    "stateCode": "MT"
  },
  {
    "city": "PARANAÍTA",
    "electionZone": "24",
    "stateCode": "MT"
  },
  {
    "city": "CARLINDA",
    "electionZone": "24",
    "stateCode": "MT"
  },
  {
    "city": "JURUENA",
    "electionZone": "48",
    "stateCode": "MT"
  },
  {
    "city": "VILA RICA",
    "electionZone": "16",
    "stateCode": "MT"
  },
  {
    "city": "NOVA MARILÂNDIA",
    "electionZone": "17",
    "stateCode": "MT"
  },
  {
    "city": "VÁRZEA GRANDE",
    "electionZone": "20",
    "stateCode": "MT"
  },
  {
    "city": "LUCAS DO RIO VERDE",
    "electionZone": "21",
    "stateCode": "MT"
  },
  {
    "city": "JUSCIMEIRA",
    "electionZone": "14",
    "stateCode": "MT"
  },
  {
    "city": "SORRISO",
    "electionZone": "43",
    "stateCode": "MT"
  },
  {
    "city": "NOVA MARINGÁ",
    "electionZone": "29",
    "stateCode": "MT"
  },
  {
    "city": "SANTA CRUZ DO XINGU",
    "electionZone": "16",
    "stateCode": "MT"
  },
  {
    "city": "INDIAVAÍ",
    "electionZone": "41",
    "stateCode": "MT"
  },
  {
    "city": "ARAPUTANGA",
    "electionZone": "41",
    "stateCode": "MT"
  },
  {
    "city": "PORTO ESPERIDIÃO",
    "electionZone": "18",
    "stateCode": "MT"
  },
  {
    "city": "GUIRATINGA",
    "electionZone": "2",
    "stateCode": "MT"
  },
  {
    "city": "QUERÊNCIA",
    "electionZone": "31",
    "stateCode": "MT"
  },
  {
    "city": "CAMPO VERDE",
    "electionZone": "12",
    "stateCode": "MT"
  },
  {
    "city": "NOVA MUTUM",
    "electionZone": "5",
    "stateCode": "MT"
  },
  {
    "city": "ÁGUA BOA",
    "electionZone": "30",
    "stateCode": "MT"
  },
  {
    "city": "JACIARA",
    "electionZone": "14",
    "stateCode": "MT"
  },
  {
    "city": "NOVA MONTE VERDE",
    "electionZone": "50",
    "stateCode": "MT"
  },
  {
    "city": "VERA",
    "electionZone": "22",
    "stateCode": "MT"
  },
  {
    "city": "FELIZ NATAL",
    "electionZone": "22",
    "stateCode": "MT"
  },
  {
    "city": "RONDONÓPOLIS",
    "electionZone": "45",
    "stateCode": "MT"
  },
  {
    "city": "RONDONÓPOLIS",
    "electionZone": "46",
    "stateCode": "MT"
  },
  {
    "city": "CHAPADA DOS GUIMARÃES",
    "electionZone": "34",
    "stateCode": "MT"
  },
  {
    "city": "PONTE BRANCA",
    "electionZone": "8",
    "stateCode": "MT"
  },
  {
    "city": "NORTELÂNDIA",
    "electionZone": "17",
    "stateCode": "MT"
  },
  {
    "city": "RIBEIRÃO CASCALHEIRA",
    "electionZone": "53",
    "stateCode": "MT"
  },
  {
    "city": "SÃO PEDRO DA CIPA",
    "electionZone": "14",
    "stateCode": "MT"
  },
  {
    "city": "VALE DE SÃO DOMINGOS",
    "electionZone": "25",
    "stateCode": "MT"
  },
  {
    "city": "SÃO JOSÉ DO XINGU",
    "electionZone": "16",
    "stateCode": "MT"
  },
  {
    "city": "NOBRES",
    "electionZone": "3",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "51",
    "stateCode": "MT"
  },
  {
    "city": "RIBEIRÃOZINHO",
    "electionZone": "47",
    "stateCode": "MT"
  },
  {
    "city": "JANGADA",
    "electionZone": "3",
    "stateCode": "MT"
  },
  {
    "city": "SANTO ANTÔNIO DO LESTE",
    "electionZone": "40",
    "stateCode": "MT"
  },
  {
    "city": "CURVELÂNDIA",
    "electionZone": "18",
    "stateCode": "MT"
  },
  {
    "city": "TANGARÁ DA SERRA",
    "electionZone": "19",
    "stateCode": "MT"
  },
  {
    "city": "PORTO DOS GAÚCHOS",
    "electionZone": "27",
    "stateCode": "MT"
  },
  {
    "city": "GENERAL CARNEIRO",
    "electionZone": "47",
    "stateCode": "MT"
  },
  {
    "city": "ALTO BOA VISTA",
    "electionZone": "15",
    "stateCode": "MT"
  },
  {
    "city": "LUCIARA",
    "electionZone": "15",
    "stateCode": "MT"
  },
  {
    "city": "BOM JESUS DO ARAGUAIA",
    "electionZone": "53",
    "stateCode": "MT"
  },
  {
    "city": "NOVO SÃO JOAQUIM",
    "electionZone": "26",
    "stateCode": "MT"
  },
  {
    "city": "RONDOLÂNDIA",
    "electionZone": "61",
    "stateCode": "MT"
  },
  {
    "city": "PLANALTO DA SERRA",
    "electionZone": "34",
    "stateCode": "MT"
  },
  {
    "city": "TORIXORÉU",
    "electionZone": "47",
    "stateCode": "MT"
  },
  {
    "city": "SANTA TEREZINHA",
    "electionZone": "16",
    "stateCode": "MT"
  },
  {
    "city": "COCALINHO",
    "electionZone": "30",
    "stateCode": "MT"
  },
  {
    "city": "ALTO TAQUARI",
    "electionZone": "8",
    "stateCode": "MT"
  },
  {
    "city": "RIO BRANCO",
    "electionZone": "52",
    "stateCode": "MT"
  },
  {
    "city": "DOM AQUINO",
    "electionZone": "12",
    "stateCode": "MT"
  },
  {
    "city": "JUARA",
    "electionZone": "27",
    "stateCode": "MT"
  },
  {
    "city": "CANABRAVA DO NORTE",
    "electionZone": "28",
    "stateCode": "MT"
  },
  {
    "city": "NOVA NAZARÉ",
    "electionZone": "30",
    "stateCode": "MT"
  },
  {
    "city": "NOVA GUARITA",
    "electionZone": "33",
    "stateCode": "MT"
  },
  {
    "city": "NOSSA SENHORA DO LIVRAMENTO",
    "electionZone": "58",
    "stateCode": "MT"
  },
  {
    "city": "ARIPUANÃ",
    "electionZone": "11",
    "stateCode": "MT"
  },
  {
    "city": "JUÍNA",
    "electionZone": "35",
    "stateCode": "MT"
  },
  {
    "city": "CONQUISTA D'OESTE",
    "electionZone": "61",
    "stateCode": "MT"
  },
  {
    "city": "BARRA DO GARÇAS",
    "electionZone": "47",
    "stateCode": "MT"
  },
  {
    "city": "NOVA OLÍMPIA",
    "electionZone": "13",
    "stateCode": "MT"
  },
  {
    "city": "ACORIZAL",
    "electionZone": "39",
    "stateCode": "MT"
  },
  {
    "city": "NOVO MUNDO",
    "electionZone": "44",
    "stateCode": "MT"
  },
  {
    "city": "SINOP",
    "electionZone": "22",
    "stateCode": "MT"
  },
  {
    "city": "SINOP",
    "electionZone": "32",
    "stateCode": "MT"
  },
  {
    "city": "VÁRZEA GRANDE",
    "electionZone": "58",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "54",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "37",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "39",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "55",
    "stateCode": "MT"
  },
  {
    "city": "PRIMAVERA DO LESTE",
    "electionZone": "40",
    "stateCode": "MT"
  },
  {
    "city": "NOVA BRASILÂNDIA",
    "electionZone": "34",
    "stateCode": "MT"
  },
  {
    "city": "VÁRZEA GRANDE",
    "electionZone": "49",
    "stateCode": "MT"
  },
  {
    "city": "ITIQUIRA",
    "electionZone": "36",
    "stateCode": "MT"
  },
  {
    "city": "SÃO JOSÉ DO RIO CLARO",
    "electionZone": "29",
    "stateCode": "MT"
  },
  {
    "city": "ALTO ARAGUAIA",
    "electionZone": "8",
    "stateCode": "MT"
  },
  {
    "city": "RONDONÓPOLIS",
    "electionZone": "10",
    "stateCode": "MT"
  },
  {
    "city": "MARCELÂNDIA",
    "electionZone": "23",
    "stateCode": "MT"
  },
  {
    "city": "SÃO JOSÉ DO POVO",
    "electionZone": "45",
    "stateCode": "MT"
  },
  {
    "city": "NOVA SANTA HELENA",
    "electionZone": "23",
    "stateCode": "MT"
  },
  {
    "city": "ALTO GARÇAS",
    "electionZone": "8",
    "stateCode": "MT"
  },
  {
    "city": "CAMPO NOVO DO PARECIS",
    "electionZone": "60",
    "stateCode": "MT"
  },
  {
    "city": "VILA BELA DA SANTÍSSIMA TRINDADE",
    "electionZone": "25",
    "stateCode": "MT"
  },
  {
    "city": "SÃO JOSÉ DOS QUATRO MARCOS",
    "electionZone": "18",
    "stateCode": "MT"
  },
  {
    "city": "PARANATINGA",
    "electionZone": "57",
    "stateCode": "MT"
  },
  {
    "city": "ARAGUAINHA",
    "electionZone": "8",
    "stateCode": "MT"
  },
  {
    "city": "NOVA BANDEIRANTES",
    "electionZone": "50",
    "stateCode": "MT"
  },
  {
    "city": "PONTES E LACERDA",
    "electionZone": "25",
    "stateCode": "MT"
  },
  {
    "city": "NOVA XAVANTINA",
    "electionZone": "26",
    "stateCode": "MT"
  },
  {
    "city": "COMODORO",
    "electionZone": "61",
    "stateCode": "MT"
  },
  {
    "city": "POCONÉ",
    "electionZone": "4",
    "stateCode": "MT"
  },
  {
    "city": "POXORÉU",
    "electionZone": "40",
    "stateCode": "MT"
  },
  {
    "city": "COTRIGUAÇU",
    "electionZone": "48",
    "stateCode": "MT"
  },
  {
    "city": "ITANHANGÁ",
    "electionZone": "21",
    "stateCode": "MT"
  },
  {
    "city": "PEDRA PRETA",
    "electionZone": "46",
    "stateCode": "MT"
  },
  {
    "city": "MATUPÁ",
    "electionZone": "33",
    "stateCode": "MT"
  },
  {
    "city": "BARRA DO BUGRES",
    "electionZone": "13",
    "stateCode": "MT"
  },
  {
    "city": "GUARANTÃ DO NORTE",
    "electionZone": "44",
    "stateCode": "MT"
  },
  {
    "city": "DENISE",
    "electionZone": "13",
    "stateCode": "MT"
  },
  {
    "city": "SANTO ANTÔNIO DO LEVERGER",
    "electionZone": "38",
    "stateCode": "MT"
  },
  {
    "city": "NOVA LACERDA",
    "electionZone": "61",
    "stateCode": "MT"
  },
  {
    "city": "PONTAL DO ARAGUAIA",
    "electionZone": "9",
    "stateCode": "MT"
  },
  {
    "city": "ITAÚBA",
    "electionZone": "23",
    "stateCode": "MT"
  },
  {
    "city": "BARRA DO GARÇAS",
    "electionZone": "9",
    "stateCode": "MT"
  },
  {
    "city": "ARAGUAIANA",
    "electionZone": "9",
    "stateCode": "MT"
  },
  {
    "city": "GLÓRIA D'OESTE",
    "electionZone": "18",
    "stateCode": "MT"
  },
  {
    "city": "CUIABÁ",
    "electionZone": "1",
    "stateCode": "MT"
  },
  {
    "city": "ROSÁRIO OESTE",
    "electionZone": "3",
    "stateCode": "MT"
  },
  {
    "city": "NOVO HORIZONTE DO NORTE",
    "electionZone": "27",
    "stateCode": "MT"
  },
  {
    "city": "BARÃO DE MELGAÇO",
    "electionZone": "38",
    "stateCode": "MT"
  },
  {
    "city": "COLÍDER",
    "electionZone": "23",
    "stateCode": "MT"
  },
  {
    "city": "LAMBARI D'OESTE",
    "electionZone": "52",
    "stateCode": "MT"
  },
  {
    "city": "TABAPORÃ",
    "electionZone": "27",
    "stateCode": "MT"
  },
  {
    "city": "PEIXOTO DE AZEVEDO",
    "electionZone": "33",
    "stateCode": "MT"
  },
  {
    "city": "NOVO SANTO ANTÔNIO",
    "electionZone": "15",
    "stateCode": "MT"
  },
  {
    "city": "COLNIZA",
    "electionZone": "11",
    "stateCode": "MT"
  },
  {
    "city": "SANTA RITA DO TRIVELATO",
    "electionZone": "5",
    "stateCode": "MT"
  },
  {
    "city": "SANTO AFONSO",
    "electionZone": "17",
    "stateCode": "MT"
  },
  {
    "city": "SANTA CARMEM",
    "electionZone": "22",
    "stateCode": "MT"
  },
  {
    "city": "NOVA CANAÃ DO NORTE",
    "electionZone": "23",
    "stateCode": "MT"
  },
  {
    "city": "CAMPOS DE JÚLIO",
    "electionZone": "42",
    "stateCode": "MT"
  },
  {
    "city": "SERRA NOVA DOURADA",
    "electionZone": "53",
    "stateCode": "MT"
  },
  {
    "city": "ARENÁPOLIS",
    "electionZone": "17",
    "stateCode": "MT"
  },
  {
    "city": "DIAMANTINO",
    "electionZone": "7",
    "stateCode": "MT"
  },
  {
    "city": "GAÚCHA DO NORTE",
    "electionZone": "57",
    "stateCode": "MT"
  },
  {
    "city": "APIACÁS",
    "electionZone": "50",
    "stateCode": "MT"
  },
  {
    "city": "BRASNORTE",
    "electionZone": "56",
    "stateCode": "MT"
  },
  {
    "city": "IPIRANGA DO NORTE",
    "electionZone": "43",
    "stateCode": "MT"
  },
  {
    "city": "RESERVA DO CABAÇAL",
    "electionZone": "41",
    "stateCode": "MT"
  },
  {
    "city": "TESOURO",
    "electionZone": "2",
    "stateCode": "MT"
  },
  {
    "city": "CASTANHEIRA",
    "electionZone": "35",
    "stateCode": "MT"
  },
  {
    "city": "CONFRESA",
    "electionZone": "28",
    "stateCode": "MT"
  },
  {
    "city": "JAURU",
    "electionZone": "41",
    "stateCode": "MT"
  },
  {
    "city": "ALTO PARAGUAI",
    "electionZone": "7",
    "stateCode": "MT"
  },
  {
    "city": "CAMPINÁPOLIS",
    "electionZone": "26",
    "stateCode": "MT"
  },
  {
    "city": "SAPEZAL",
    "electionZone": "42",
    "stateCode": "MT"
  },
  {
    "city": "MIRASSOL D'OESTE",
    "electionZone": "18",
    "stateCode": "MT"
  },
  {
    "city": "NOVA UBIRATÃ",
    "electionZone": "43",
    "stateCode": "MT"
  },
  {
    "city": "TERRA NOVA DO NORTE",
    "electionZone": "33",
    "stateCode": "MT"
  },
  {
    "city": "SALTO DO CÉU",
    "electionZone": "52",
    "stateCode": "MT"
  },
  {
    "city": "FIGUEIRÓPOLIS D'OESTE",
    "electionZone": "41",
    "stateCode": "MT"
  },
  {
    "city": "CLÁUDIA",
    "electionZone": "32",
    "stateCode": "MT"
  },
  {
    "city": "PORTO ALEGRE DO NORTE",
    "electionZone": "28",
    "stateCode": "MT"
  },
  {
    "city": "PORTO ESTRELA",
    "electionZone": "13",
    "stateCode": "MT"
  },
  {
    "city": "UNIÃO DO SUL",
    "electionZone": "32",
    "stateCode": "MT"
  },
  {
    "city": "BRASIL NOVO",
    "electionZone": "18",
    "stateCode": "PA"
  },
  {
    "city": "MARAPANIM",
    "electionZone": "32",
    "stateCode": "PA"
  },
  {
    "city": "SANTARÉM",
    "electionZone": "104",
    "stateCode": "PA"
  },
  {
    "city": "SANTARÉM",
    "electionZone": "20",
    "stateCode": "PA"
  },
  {
    "city": "FARO",
    "electionZone": "89",
    "stateCode": "PA"
  },
  {
    "city": "RURÓPOLIS",
    "electionZone": "68",
    "stateCode": "PA"
  },
  {
    "city": "ÁGUA AZUL DO NORTE",
    "electionZone": "61",
    "stateCode": "PA"
  },
  {
    "city": "AURORA DO PARÁ",
    "electionZone": "49",
    "stateCode": "PA"
  },
  {
    "city": "URUARÁ",
    "electionZone": "79",
    "stateCode": "PA"
  },
  {
    "city": "MELGAÇO",
    "electionZone": "99",
    "stateCode": "PA"
  },
  {
    "city": "GURUPÁ",
    "electionZone": "26",
    "stateCode": "PA"
  },
  {
    "city": "IGARAPÉ-MIRI",
    "electionZone": "6",
    "stateCode": "PA"
  },
  {
    "city": "TOMÉ-AÇU",
    "electionZone": "39",
    "stateCode": "PA"
  },
  {
    "city": "QUATIPURU",
    "electionZone": "63",
    "stateCode": "PA"
  },
  {
    "city": "MAGALHÃES BARATA",
    "electionZone": "5",
    "stateCode": "PA"
  },
  {
    "city": "ALTAMIRA",
    "electionZone": "18",
    "stateCode": "PA"
  },
  {
    "city": "TERRA ALTA",
    "electionZone": "9",
    "stateCode": "PA"
  },
  {
    "city": "BAIÃO",
    "electionZone": "35",
    "stateCode": "PA"
  },
  {
    "city": "SANTA ISABEL DO PARÁ",
    "electionZone": "36",
    "stateCode": "PA"
  },
  {
    "city": "NOVO PROGRESSO",
    "electionZone": "91",
    "stateCode": "PA"
  },
  {
    "city": "ALENQUER",
    "electionZone": "21",
    "stateCode": "PA"
  },
  {
    "city": "TRACUATEUA",
    "electionZone": "13",
    "stateCode": "PA"
  },
  {
    "city": "CURUÇÁ",
    "electionZone": "9",
    "stateCode": "PA"
  },
  {
    "city": "OEIRAS DO PARÁ",
    "electionZone": "45",
    "stateCode": "PA"
  },
  {
    "city": "CASTANHAL",
    "electionZone": "4",
    "stateCode": "PA"
  },
  {
    "city": "ELDORADO DOS CARAJÁS",
    "electionZone": "58",
    "stateCode": "PA"
  },
  {
    "city": "PRIMAVERA",
    "electionZone": "63",
    "stateCode": "PA"
  },
  {
    "city": "ÓBIDOS",
    "electionZone": "22",
    "stateCode": "PA"
  },
  {
    "city": "TRAIRÃO",
    "electionZone": "34",
    "stateCode": "PA"
  },
  {
    "city": "BENEVIDES",
    "electionZone": "36",
    "stateCode": "PA"
  },
  {
    "city": "SALINÓPOLIS",
    "electionZone": "64",
    "stateCode": "PA"
  },
  {
    "city": "COLARES",
    "electionZone": "8",
    "stateCode": "PA"
  },
  {
    "city": "SALVATERRA",
    "electionZone": "3",
    "stateCode": "PA"
  },
  {
    "city": "SANTA BÁRBARA DO PARÁ",
    "electionZone": "36",
    "stateCode": "PA"
  },
  {
    "city": "SANTARÉM NOVO",
    "electionZone": "33",
    "stateCode": "PA"
  },
  {
    "city": "CHAVES",
    "electionZone": "17",
    "stateCode": "PA"
  },
  {
    "city": "SANTANA DO ARAGUAIA",
    "electionZone": "46",
    "stateCode": "PA"
  },
  {
    "city": "CURUÁ",
    "electionZone": "21",
    "stateCode": "PA"
  },
  {
    "city": "BAGRE",
    "electionZone": "15",
    "stateCode": "PA"
  },
  {
    "city": "SENADOR JOSÉ PORFÍRIO",
    "electionZone": "54",
    "stateCode": "PA"
  },
  {
    "city": "CACHOEIRA DO ARARI",
    "electionZone": "2",
    "stateCode": "PA"
  },
  {
    "city": "ANAPU",
    "electionZone": "80",
    "stateCode": "PA"
  },
  {
    "city": "SANTA MARIA DAS BARREIRAS",
    "electionZone": "24",
    "stateCode": "PA"
  },
  {
    "city": "LIMOEIRO DO AJURU",
    "electionZone": "88",
    "stateCode": "PA"
  },
  {
    "city": "SANTA LUZIA DO PARÁ",
    "electionZone": "41",
    "stateCode": "PA"
  },
  {
    "city": "ANAJÁS",
    "electionZone": "90",
    "stateCode": "PA"
  },
  {
    "city": "MARACANÃ",
    "electionZone": "31",
    "stateCode": "PA"
  },
  {
    "city": "TERRA SANTA",
    "electionZone": "89",
    "stateCode": "PA"
  },
  {
    "city": "SANTA CRUZ DO ARARI",
    "electionZone": "2",
    "stateCode": "PA"
  },
  {
    "city": "CACHOEIRA DO PIRIÁ",
    "electionZone": "14",
    "stateCode": "PA"
  },
  {
    "city": "DOM ELISEU",
    "electionZone": "84",
    "stateCode": "PA"
  },
  {
    "city": "BREVES",
    "electionZone": "15",
    "stateCode": "PA"
  },
  {
    "city": "TUCUMÃ",
    "electionZone": "74",
    "stateCode": "PA"
  },
  {
    "city": "RIO MARIA",
    "electionZone": "60",
    "stateCode": "PA"
  },
  {
    "city": "SÃO DOMINGOS DO CAPIM",
    "electionZone": "50",
    "stateCode": "PA"
  },
  {
    "city": "AFUÁ",
    "electionZone": "16",
    "stateCode": "PA"
  },
  {
    "city": "FLORESTA DO ARAGUAIA",
    "electionZone": "24",
    "stateCode": "PA"
  },
  {
    "city": "VIGIA",
    "electionZone": "8",
    "stateCode": "PA"
  },
  {
    "city": "IPIXUNA DO PARÁ",
    "electionZone": "49",
    "stateCode": "PA"
  },
  {
    "city": "AUGUSTO CORRÊA",
    "electionZone": "52",
    "stateCode": "PA"
  },
  {
    "city": "JACUNDÁ",
    "electionZone": "69",
    "stateCode": "PA"
  },
  {
    "city": "IGARAPÉ-AÇU",
    "electionZone": "5",
    "stateCode": "PA"
  },
  {
    "city": "MOJUÍ DOS CAMPOS",
    "electionZone": "20",
    "stateCode": "PA"
  },
  {
    "city": "ITUPIRANGA",
    "electionZone": "56",
    "stateCode": "PA"
  },
  {
    "city": "SANTA MARIA DO PARÁ",
    "electionZone": "67",
    "stateCode": "PA"
  },
  {
    "city": "PEIXE-BOI",
    "electionZone": "66",
    "stateCode": "PA"
  },
  {
    "city": "SOURE",
    "electionZone": "3",
    "stateCode": "PA"
  },
  {
    "city": "NOVO REPARTIMENTO",
    "electionZone": "101",
    "stateCode": "PA"
  },
  {
    "city": "MARITUBA",
    "electionZone": "43",
    "stateCode": "PA"
  },
  {
    "city": "INHANGAPI",
    "electionZone": "47",
    "stateCode": "PA"
  },
  {
    "city": "BANNACH",
    "electionZone": "60",
    "stateCode": "PA"
  },
  {
    "city": "SÃO FRANCISCO DO PARÁ",
    "electionZone": "47",
    "stateCode": "PA"
  },
  {
    "city": "CURIONÓPOLIS",
    "electionZone": "58",
    "stateCode": "PA"
  },
  {
    "city": "ACARÁ",
    "electionZone": "94",
    "stateCode": "PA"
  },
  {
    "city": "GOIANÉSIA DO PARÁ",
    "electionZone": "69",
    "stateCode": "PA"
  },
  {
    "city": "CAPITÃO POÇO",
    "electionZone": "70",
    "stateCode": "PA"
  },
  {
    "city": "MOJU",
    "electionZone": "37",
    "stateCode": "PA"
  },
  {
    "city": "BUJARU",
    "electionZone": "87",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "96",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "77",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "29",
    "stateCode": "PA"
  },
  {
    "city": "PACAJÁ",
    "electionZone": "80",
    "stateCode": "PA"
  },
  {
    "city": "BRAGANÇA",
    "electionZone": "13",
    "stateCode": "PA"
  },
  {
    "city": "GARRAFÃO DO NORTE",
    "electionZone": "81",
    "stateCode": "PA"
  },
  {
    "city": "SÃO GERALDO DO ARAGUAIA",
    "electionZone": "62",
    "stateCode": "PA"
  },
  {
    "city": "PARAGOMINAS",
    "electionZone": "42",
    "stateCode": "PA"
  },
  {
    "city": "VITÓRIA DO XINGU",
    "electionZone": "18",
    "stateCode": "PA"
  },
  {
    "city": "XINGUARA",
    "electionZone": "61",
    "stateCode": "PA"
  },
  {
    "city": "CAPANEMA",
    "electionZone": "25",
    "stateCode": "PA"
  },
  {
    "city": "ALMEIRIM",
    "electionZone": "55",
    "stateCode": "PA"
  },
  {
    "city": "PIÇARRA",
    "electionZone": "62",
    "stateCode": "PA"
  },
  {
    "city": "BELTERRA",
    "electionZone": "104",
    "stateCode": "PA"
  },
  {
    "city": "CONCÓRDIA DO PARÁ",
    "electionZone": "87",
    "stateCode": "PA"
  },
  {
    "city": "SAPUCAIA",
    "electionZone": "61",
    "stateCode": "PA"
  },
  {
    "city": "BREU BRANCO",
    "electionZone": "103",
    "stateCode": "PA"
  },
  {
    "city": "MUANÁ",
    "electionZone": "10",
    "stateCode": "PA"
  },
  {
    "city": "PAU D'ARCO",
    "electionZone": "59",
    "stateCode": "PA"
  },
  {
    "city": "BOM JESUS DO TOCANTINS",
    "electionZone": "100",
    "stateCode": "PA"
  },
  {
    "city": "BREJO GRANDE DO ARAGUAIA",
    "electionZone": "57",
    "stateCode": "PA"
  },
  {
    "city": "BARCARENA",
    "electionZone": "65",
    "stateCode": "PA"
  },
  {
    "city": "BONITO",
    "electionZone": "11",
    "stateCode": "PA"
  },
  {
    "city": "SÃO JOÃO DO ARAGUAIA",
    "electionZone": "57",
    "stateCode": "PA"
  },
  {
    "city": "REDENÇÃO",
    "electionZone": "59",
    "stateCode": "PA"
  },
  {
    "city": "MEDICILÂNDIA",
    "electionZone": "85",
    "stateCode": "PA"
  },
  {
    "city": "SANTARÉM",
    "electionZone": "83",
    "stateCode": "PA"
  },
  {
    "city": "PARAUAPEBAS",
    "electionZone": "75",
    "stateCode": "PA"
  },
  {
    "city": "ANANINDEUA",
    "electionZone": "72",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "98",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "97",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "28",
    "stateCode": "PA"
  },
  {
    "city": "VISEU",
    "electionZone": "14",
    "stateCode": "PA"
  },
  {
    "city": "CONCEIÇÃO DO ARAGUAIA",
    "electionZone": "24",
    "stateCode": "PA"
  },
  {
    "city": "CURRALINHO",
    "electionZone": "86",
    "stateCode": "PA"
  },
  {
    "city": "TAILÂNDIA",
    "electionZone": "93",
    "stateCode": "PA"
  },
  {
    "city": "ITAITUBA",
    "electionZone": "34",
    "stateCode": "PA"
  },
  {
    "city": "PLACAS",
    "electionZone": "68",
    "stateCode": "PA"
  },
  {
    "city": "MONTE ALEGRE",
    "electionZone": "19",
    "stateCode": "PA"
  },
  {
    "city": "SÃO FÉLIX DO XINGU",
    "electionZone": "53",
    "stateCode": "PA"
  },
  {
    "city": "CAMETÁ",
    "electionZone": "12",
    "stateCode": "PA"
  },
  {
    "city": "ANANINDEUA",
    "electionZone": "43",
    "stateCode": "PA"
  },
  {
    "city": "NOVA TIMBOTEUA",
    "electionZone": "33",
    "stateCode": "PA"
  },
  {
    "city": "CANAÃ DOS CARAJÁS",
    "electionZone": "75",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "73",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "1",
    "stateCode": "PA"
  },
  {
    "city": "AVEIRO",
    "electionZone": "34",
    "stateCode": "PA"
  },
  {
    "city": "SÃO CAETANO DE ODIVELAS",
    "electionZone": "8",
    "stateCode": "PA"
  },
  {
    "city": "PRAINHA",
    "electionZone": "92",
    "stateCode": "PA"
  },
  {
    "city": "SANTO ANTÔNIO DO TAUÁ",
    "electionZone": "8",
    "stateCode": "PA"
  },
  {
    "city": "MARABÁ",
    "electionZone": "100",
    "stateCode": "PA"
  },
  {
    "city": "SÃO MIGUEL DO GUAMÁ",
    "electionZone": "11",
    "stateCode": "PA"
  },
  {
    "city": "TUCURUÍ",
    "electionZone": "40",
    "stateCode": "PA"
  },
  {
    "city": "MÃE DO RIO",
    "electionZone": "49",
    "stateCode": "PA"
  },
  {
    "city": "SÃO SEBASTIÃO DA BOA VISTA",
    "electionZone": "48",
    "stateCode": "PA"
  },
  {
    "city": "SÃO DOMINGOS DO ARAGUAIA",
    "electionZone": "57",
    "stateCode": "PA"
  },
  {
    "city": "CUMARU DO NORTE",
    "electionZone": "59",
    "stateCode": "PA"
  },
  {
    "city": "ORIXIMINÁ",
    "electionZone": "38",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "95",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "76",
    "stateCode": "PA"
  },
  {
    "city": "BELÉM",
    "electionZone": "30",
    "stateCode": "PA"
  },
  {
    "city": "SÃO JOÃO DA PONTA",
    "electionZone": "8",
    "stateCode": "PA"
  },
  {
    "city": "ABAETETUBA",
    "electionZone": "7",
    "stateCode": "PA"
  },
  {
    "city": "NOVA ESPERANÇA DO PIRIÁ",
    "electionZone": "81",
    "stateCode": "PA"
  },
  {
    "city": "PONTA DE PEDRAS",
    "electionZone": "27",
    "stateCode": "PA"
  },
  {
    "city": "OURILÂNDIA DO NORTE",
    "electionZone": "74",
    "stateCode": "PA"
  },
  {
    "city": "JURUTI",
    "electionZone": "22",
    "stateCode": "PA"
  },
  {
    "city": "OURÉM",
    "electionZone": "41",
    "stateCode": "PA"
  },
  {
    "city": "IRITUIA",
    "electionZone": "71",
    "stateCode": "PA"
  },
  {
    "city": "NOVA IPIXUNA",
    "electionZone": "23",
    "stateCode": "PA"
  },
  {
    "city": "SÃO JOÃO DE PIRABAS",
    "electionZone": "63",
    "stateCode": "PA"
  },
  {
    "city": "RONDON DO PARÁ",
    "electionZone": "51",
    "stateCode": "PA"
  },
  {
    "city": "PALESTINA DO PARÁ",
    "electionZone": "57",
    "stateCode": "PA"
  },
  {
    "city": "MARABÁ",
    "electionZone": "23",
    "stateCode": "PA"
  },
  {
    "city": "PORTO DE MOZ",
    "electionZone": "82",
    "stateCode": "PA"
  },
  {
    "city": "PORTEL",
    "electionZone": "44",
    "stateCode": "PA"
  },
  {
    "city": "ABEL FIGUEIREDO",
    "electionZone": "51",
    "stateCode": "PA"
  },
  {
    "city": "MOCAJUBA",
    "electionZone": "78",
    "stateCode": "PA"
  },
  {
    "city": "JACAREACANGA",
    "electionZone": "102",
    "stateCode": "PA"
  },
  {
    "city": "ULIANÓPOLIS",
    "electionZone": "84",
    "stateCode": "PA"
  },
  {
    "city": "AGUIAR",
    "electionZone": "66",
    "stateCode": "PB"
  },
  {
    "city": "BREJO DO CRUZ",
    "electionZone": "38",
    "stateCode": "PB"
  },
  {
    "city": "ITATUBA",
    "electionZone": "8",
    "stateCode": "PB"
  },
  {
    "city": "GUARABIRA",
    "electionZone": "10",
    "stateCode": "PB"
  },
  {
    "city": "MARIZÓPOLIS",
    "electionZone": "35",
    "stateCode": "PB"
  },
  {
    "city": "POÇO DE JOSÉ DE MOURA",
    "electionZone": "37",
    "stateCode": "PB"
  },
  {
    "city": "MONTADAS",
    "electionZone": "19",
    "stateCode": "PB"
  },
  {
    "city": "BOQUEIRÃO",
    "electionZone": "62",
    "stateCode": "PB"
  },
  {
    "city": "AREIA",
    "electionZone": "11",
    "stateCode": "PB"
  },
  {
    "city": "NOVA OLINDA",
    "electionZone": "66",
    "stateCode": "PB"
  },
  {
    "city": "CACIMBAS",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "ÁGUA BRANCA",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOÃO DO TIGRE",
    "electionZone": "29",
    "stateCode": "PB"
  },
  {
    "city": "BREJO DOS SANTOS",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "CARRAPATEIRA",
    "electionZone": "40",
    "stateCode": "PB"
  },
  {
    "city": "CAPIM",
    "electionZone": "7",
    "stateCode": "PB"
  },
  {
    "city": "IBIARA",
    "electionZone": "41",
    "stateCode": "PB"
  },
  {
    "city": "APARECIDA",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "LAGOA SECA",
    "electionZone": "71",
    "stateCode": "PB"
  },
  {
    "city": "BARRA DE SÃO MIGUEL",
    "electionZone": "21",
    "stateCode": "PB"
  },
  {
    "city": "ALGODÃO DE JANDAÍRA",
    "electionZone": "67",
    "stateCode": "PB"
  },
  {
    "city": "ESPERANÇA",
    "electionZone": "19",
    "stateCode": "PB"
  },
  {
    "city": "VÁRZEA",
    "electionZone": "26",
    "stateCode": "PB"
  },
  {
    "city": "DESTERRO",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "JOCA CLAUDINO",
    "electionZone": "53",
    "stateCode": "PB"
  },
  {
    "city": "MONTE HOREBE",
    "electionZone": "39",
    "stateCode": "PB"
  },
  {
    "city": "EMAS",
    "electionZone": "32",
    "stateCode": "PB"
  },
  {
    "city": "SERRARIA",
    "electionZone": "12",
    "stateCode": "PB"
  },
  {
    "city": "VISTA SERRANA",
    "electionZone": "51",
    "stateCode": "PB"
  },
  {
    "city": "RIACHÃO DO BACAMARTE",
    "electionZone": "8",
    "stateCode": "PB"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "56",
    "stateCode": "PB"
  },
  {
    "city": "SÃO SEBASTIÃO DO UMBUZEIRO",
    "electionZone": "29",
    "stateCode": "PB"
  },
  {
    "city": "BERNARDINO BATISTA",
    "electionZone": "37",
    "stateCode": "PB"
  },
  {
    "city": "DAMIÃO",
    "electionZone": "24",
    "stateCode": "PB"
  },
  {
    "city": "SÃO BENTO",
    "electionZone": "69",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DE ESPINHARAS",
    "electionZone": "28",
    "stateCode": "PB"
  },
  {
    "city": "FREI MARTINHO",
    "electionZone": "25",
    "stateCode": "PB"
  },
  {
    "city": "PATOS",
    "electionZone": "28",
    "stateCode": "PB"
  },
  {
    "city": "IMACULADA",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DE CAIANA",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "MATO GROSSO",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "JERICÓ",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "BARAÚNA",
    "electionZone": "25",
    "stateCode": "PB"
  },
  {
    "city": "RIACHO DOS CAVALOS",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "JUNCO DO SERIDÓ",
    "electionZone": "26",
    "stateCode": "PB"
  },
  {
    "city": "TACIMA",
    "electionZone": "20",
    "stateCode": "PB"
  },
  {
    "city": "AREIAL",
    "electionZone": "19",
    "stateCode": "PB"
  },
  {
    "city": "CUBATI",
    "electionZone": "23",
    "stateCode": "PB"
  },
  {
    "city": "OLHO D'ÁGUA",
    "electionZone": "32",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DOS CORDEIROS",
    "electionZone": "58",
    "stateCode": "PB"
  },
  {
    "city": "CASSERENGUE",
    "electionZone": "48",
    "stateCode": "PB"
  },
  {
    "city": "PIANCÓ",
    "electionZone": "32",
    "stateCode": "PB"
  },
  {
    "city": "PIRPIRITUBA",
    "electionZone": "47",
    "stateCode": "PB"
  },
  {
    "city": "SANTANA DOS GARROTES",
    "electionZone": "66",
    "stateCode": "PB"
  },
  {
    "city": "BELÉM DO BREJO DO CRUZ",
    "electionZone": "38",
    "stateCode": "PB"
  },
  {
    "city": "LAGOA",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "RIACHÃO DO POÇO",
    "electionZone": "4",
    "stateCode": "PB"
  },
  {
    "city": "SANTA HELENA",
    "electionZone": "37",
    "stateCode": "PB"
  },
  {
    "city": "PATOS",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "AMPARO",
    "electionZone": "43",
    "stateCode": "PB"
  },
  {
    "city": "FAGUNDES",
    "electionZone": "59",
    "stateCode": "PB"
  },
  {
    "city": "ALAGOINHA",
    "electionZone": "46",
    "stateCode": "PB"
  },
  {
    "city": "TENÓRIO",
    "electionZone": "56",
    "stateCode": "PB"
  },
  {
    "city": "CAMPINA GRANDE",
    "electionZone": "17",
    "stateCode": "PB"
  },
  {
    "city": "CAJAZEIRAS",
    "electionZone": "42",
    "stateCode": "PB"
  },
  {
    "city": "CAJAZEIRAS",
    "electionZone": "68",
    "stateCode": "PB"
  },
  {
    "city": "CAAPORÃ",
    "electionZone": "73",
    "stateCode": "PB"
  },
  {
    "city": "CRUZ DO ESPÍRITO SANTO",
    "electionZone": "3",
    "stateCode": "PB"
  },
  {
    "city": "SANTA INÊS",
    "electionZone": "41",
    "stateCode": "PB"
  },
  {
    "city": "ITABAIANA",
    "electionZone": "6",
    "stateCode": "PB"
  },
  {
    "city": "PICUÍ",
    "electionZone": "25",
    "stateCode": "PB"
  },
  {
    "city": "LIVRAMENTO",
    "electionZone": "27",
    "stateCode": "PB"
  },
  {
    "city": "INGÁ",
    "electionZone": "8",
    "stateCode": "PB"
  },
  {
    "city": "GURJÃO",
    "electionZone": "22",
    "stateCode": "PB"
  },
  {
    "city": "CONGO",
    "electionZone": "43",
    "stateCode": "PB"
  },
  {
    "city": "CONCEIÇÃO",
    "electionZone": "41",
    "stateCode": "PB"
  },
  {
    "city": "LUCENA",
    "electionZone": "2",
    "stateCode": "PB"
  },
  {
    "city": "POCINHOS",
    "electionZone": "50",
    "stateCode": "PB"
  },
  {
    "city": "ALCANTIL",
    "electionZone": "62",
    "stateCode": "PB"
  },
  {
    "city": "CALDAS BRANDÃO",
    "electionZone": "75",
    "stateCode": "PB"
  },
  {
    "city": "SOBRADO",
    "electionZone": "4",
    "stateCode": "PB"
  },
  {
    "city": "IGARACY",
    "electionZone": "66",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOÃO DO CARIRI",
    "electionZone": "22",
    "stateCode": "PB"
  },
  {
    "city": "UIRAÚNA",
    "electionZone": "53",
    "stateCode": "PB"
  },
  {
    "city": "SANTA TERESINHA",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "MARI",
    "electionZone": "4",
    "stateCode": "PB"
  },
  {
    "city": "COXIXOLA",
    "electionZone": "58",
    "stateCode": "PB"
  },
  {
    "city": "GADO BRAVO",
    "electionZone": "49",
    "stateCode": "PB"
  },
  {
    "city": "MALTA",
    "electionZone": "51",
    "stateCode": "PB"
  },
  {
    "city": "CABEDELO",
    "electionZone": "57",
    "stateCode": "PB"
  },
  {
    "city": "ARAÇAGI",
    "electionZone": "10",
    "stateCode": "PB"
  },
  {
    "city": "BOA VISTA",
    "electionZone": "72",
    "stateCode": "PB"
  },
  {
    "city": "POMBAL",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "MAMANGUAPE",
    "electionZone": "7",
    "stateCode": "PB"
  },
  {
    "city": "PARARI",
    "electionZone": "58",
    "stateCode": "PB"
  },
  {
    "city": "RIACHÃO",
    "electionZone": "20",
    "stateCode": "PB"
  },
  {
    "city": "BOA VENTURA",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "SÃO BENTINHO",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "SÃO FRANCISCO",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "COREMAS",
    "electionZone": "52",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOÃO DO RIO DO PEIXE",
    "electionZone": "37",
    "stateCode": "PB"
  },
  {
    "city": "JOÃO PESSOA",
    "electionZone": "64",
    "stateCode": "PB"
  },
  {
    "city": "ASSUNÇÃO",
    "electionZone": "27",
    "stateCode": "PB"
  },
  {
    "city": "PILÕEZINHOS",
    "electionZone": "10",
    "stateCode": "PB"
  },
  {
    "city": "QUEIMADAS",
    "electionZone": "59",
    "stateCode": "PB"
  },
  {
    "city": "PEDRAS DE FOGO",
    "electionZone": "44",
    "stateCode": "PB"
  },
  {
    "city": "SOUSA",
    "electionZone": "35",
    "stateCode": "PB"
  },
  {
    "city": "SOUSA",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "ALAGOA GRANDE",
    "electionZone": "9",
    "stateCode": "PB"
  },
  {
    "city": "TEIXEIRA",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "JOÃO PESSOA",
    "electionZone": "77",
    "stateCode": "PB"
  },
  {
    "city": "NATUBA",
    "electionZone": "18",
    "stateCode": "PB"
  },
  {
    "city": "SUMÉ",
    "electionZone": "43",
    "stateCode": "PB"
  },
  {
    "city": "JOÃO PESSOA",
    "electionZone": "70",
    "stateCode": "PB"
  },
  {
    "city": "JOÃO PESSOA",
    "electionZone": "76",
    "stateCode": "PB"
  },
  {
    "city": "REMÍGIO",
    "electionZone": "67",
    "stateCode": "PB"
  },
  {
    "city": "BONITO DE SANTA FÉ",
    "electionZone": "39",
    "stateCode": "PB"
  },
  {
    "city": "ITAPORANGA",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "PRATA",
    "electionZone": "74",
    "stateCode": "PB"
  },
  {
    "city": "PITIMBU",
    "electionZone": "73",
    "stateCode": "PB"
  },
  {
    "city": "CAMPINA GRANDE",
    "electionZone": "72",
    "stateCode": "PB"
  },
  {
    "city": "ARARA",
    "electionZone": "12",
    "stateCode": "PB"
  },
  {
    "city": "JUAZEIRINHO",
    "electionZone": "56",
    "stateCode": "PB"
  },
  {
    "city": "CATOLÉ DO ROCHA",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "SANTA RITA",
    "electionZone": "2",
    "stateCode": "PB"
  },
  {
    "city": "QUIXABA",
    "electionZone": "28",
    "stateCode": "PB"
  },
  {
    "city": "CONDE",
    "electionZone": "73",
    "stateCode": "PB"
  },
  {
    "city": "PEDRA BRANCA",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "CAMPINA GRANDE",
    "electionZone": "16",
    "stateCode": "PB"
  },
  {
    "city": "ALAGOA NOVA",
    "electionZone": "13",
    "stateCode": "PB"
  },
  {
    "city": "SOLÂNEA",
    "electionZone": "48",
    "stateCode": "PB"
  },
  {
    "city": "CATINGUEIRA",
    "electionZone": "32",
    "stateCode": "PB"
  },
  {
    "city": "TAPEROÁ",
    "electionZone": "27",
    "stateCode": "PB"
  },
  {
    "city": "UMBUZEIRO",
    "electionZone": "18",
    "stateCode": "PB"
  },
  {
    "city": "BAÍA DA TRAIÇÃO",
    "electionZone": "55",
    "stateCode": "PB"
  },
  {
    "city": "SERRA DA RAIZ",
    "electionZone": "15",
    "stateCode": "PB"
  },
  {
    "city": "PILAR",
    "electionZone": "5",
    "stateCode": "PB"
  },
  {
    "city": "BELÉM",
    "electionZone": "54",
    "stateCode": "PB"
  },
  {
    "city": "NOVA FLORESTA",
    "electionZone": "24",
    "stateCode": "PB"
  },
  {
    "city": "PILÕES",
    "electionZone": "45",
    "stateCode": "PB"
  },
  {
    "city": "BANANEIRAS",
    "electionZone": "14",
    "stateCode": "PB"
  },
  {
    "city": "RIO TINTO",
    "electionZone": "55",
    "stateCode": "PB"
  },
  {
    "city": "SALGADINHO",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "VIEIRÓPOLIS",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "CAIÇARA",
    "electionZone": "15",
    "stateCode": "PB"
  },
  {
    "city": "DIAMANTE",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "JOÃO PESSOA",
    "electionZone": "1",
    "stateCode": "PB"
  },
  {
    "city": "CONDADO",
    "electionZone": "51",
    "stateCode": "PB"
  },
  {
    "city": "CUITEGI",
    "electionZone": "45",
    "stateCode": "PB"
  },
  {
    "city": "JURIPIRANGA",
    "electionZone": "6",
    "stateCode": "PB"
  },
  {
    "city": "OURO VELHO",
    "electionZone": "74",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DE PIRANHAS",
    "electionZone": "40",
    "stateCode": "PB"
  },
  {
    "city": "MASSARANDUBA",
    "electionZone": "16",
    "stateCode": "PB"
  },
  {
    "city": "AROEIRAS",
    "electionZone": "49",
    "stateCode": "PB"
  },
  {
    "city": "MARCAÇÃO",
    "electionZone": "55",
    "stateCode": "PB"
  },
  {
    "city": "SOSSÊGO",
    "electionZone": "24",
    "stateCode": "PB"
  },
  {
    "city": "BAYEUX",
    "electionZone": "61",
    "stateCode": "PB"
  },
  {
    "city": "SAPÉ",
    "electionZone": "4",
    "stateCode": "PB"
  },
  {
    "city": "PUXINANÃ",
    "electionZone": "50",
    "stateCode": "PB"
  },
  {
    "city": "JUAREZ TÁVORA",
    "electionZone": "9",
    "stateCode": "PB"
  },
  {
    "city": "MONTEIRO",
    "electionZone": "29",
    "stateCode": "PB"
  },
  {
    "city": "PRINCESA ISABEL",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "PEDRO RÉGIS",
    "electionZone": "60",
    "stateCode": "PB"
  },
  {
    "city": "CACIMBA DE AREIA",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "SÃO DOMINGOS DO CARIRI",
    "electionZone": "21",
    "stateCode": "PB"
  },
  {
    "city": "SERTÃOZINHO",
    "electionZone": "47",
    "stateCode": "PB"
  },
  {
    "city": "SANTANA DE MANGUEIRA",
    "electionZone": "41",
    "stateCode": "PB"
  },
  {
    "city": "PASSAGEM",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "MATURÉIA",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "LASTRO",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "SANTA LUZIA",
    "electionZone": "26",
    "stateCode": "PB"
  },
  {
    "city": "CARAÚBAS",
    "electionZone": "22",
    "stateCode": "PB"
  },
  {
    "city": "MÃE D'ÁGUA",
    "electionZone": "30",
    "stateCode": "PB"
  },
  {
    "city": "PEDRA LAVRADA",
    "electionZone": "25",
    "stateCode": "PB"
  },
  {
    "city": "SÃO MAMEDE",
    "electionZone": "26",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DO SABUGI",
    "electionZone": "26",
    "stateCode": "PB"
  },
  {
    "city": "NAZAREZINHO",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "CUITÉ",
    "electionZone": "24",
    "stateCode": "PB"
  },
  {
    "city": "BARRA DE SANTA ROSA",
    "electionZone": "24",
    "stateCode": "PB"
  },
  {
    "city": "MATINHAS",
    "electionZone": "13",
    "stateCode": "PB"
  },
  {
    "city": "MULUNGU",
    "electionZone": "46",
    "stateCode": "PB"
  },
  {
    "city": "SERRA REDONDA",
    "electionZone": "8",
    "stateCode": "PB"
  },
  {
    "city": "JURU",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "ARARUNA",
    "electionZone": "20",
    "stateCode": "PB"
  },
  {
    "city": "SOLEDADE",
    "electionZone": "23",
    "stateCode": "PB"
  },
  {
    "city": "CABACEIRAS",
    "electionZone": "21",
    "stateCode": "PB"
  },
  {
    "city": "BARRA DE SANTANA",
    "electionZone": "62",
    "stateCode": "PB"
  },
  {
    "city": "SERRA BRANCA",
    "electionZone": "58",
    "stateCode": "PB"
  },
  {
    "city": "BORBOREMA",
    "electionZone": "14",
    "stateCode": "PB"
  },
  {
    "city": "LOGRADOURO",
    "electionZone": "15",
    "stateCode": "PB"
  },
  {
    "city": "CAMPINA GRANDE",
    "electionZone": "71",
    "stateCode": "PB"
  },
  {
    "city": "SÃO MIGUEL DE TAIPU",
    "electionZone": "5",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DO BONFIM",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "SANTA CRUZ",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "CATURITÉ",
    "electionZone": "62",
    "stateCode": "PB"
  },
  {
    "city": "DONA INÊS",
    "electionZone": "14",
    "stateCode": "PB"
  },
  {
    "city": "JACARAÚ",
    "electionZone": "60",
    "stateCode": "PB"
  },
  {
    "city": "SANTA CECÍLIA",
    "electionZone": "18",
    "stateCode": "PB"
  },
  {
    "city": "SERRA GRANDE",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "DUAS ESTRADAS",
    "electionZone": "47",
    "stateCode": "PB"
  },
  {
    "city": "CAJAZEIRINHAS",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "CUITÉ DE MAMANGUAPE",
    "electionZone": "7",
    "stateCode": "PB"
  },
  {
    "city": "SÃO SEBASTIÃO DE LAGOA DE ROÇA",
    "electionZone": "13",
    "stateCode": "PB"
  },
  {
    "city": "RIACHO DE SANTO ANTÔNIO",
    "electionZone": "62",
    "stateCode": "PB"
  },
  {
    "city": "MATARACA",
    "electionZone": "7",
    "stateCode": "PB"
  },
  {
    "city": "SALGADO DE SÃO FÉLIX",
    "electionZone": "6",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DOS RAMOS",
    "electionZone": "5",
    "stateCode": "PB"
  },
  {
    "city": "CAMALAÚ",
    "electionZone": "29",
    "stateCode": "PB"
  },
  {
    "city": "ZABELÊ",
    "electionZone": "29",
    "stateCode": "PB"
  },
  {
    "city": "CURRAL VELHO",
    "electionZone": "33",
    "stateCode": "PB"
  },
  {
    "city": "POÇO DANTAS",
    "electionZone": "53",
    "stateCode": "PB"
  },
  {
    "city": "TAVARES",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "GURINHÉM",
    "electionZone": "75",
    "stateCode": "PB"
  },
  {
    "city": "SÃO VICENTE DO SERIDÓ",
    "electionZone": "23",
    "stateCode": "PB"
  },
  {
    "city": "MANAÍRA",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DA LAGOA TAPADA",
    "electionZone": "63",
    "stateCode": "PB"
  },
  {
    "city": "AREIA DE BARAÚNAS",
    "electionZone": "65",
    "stateCode": "PB"
  },
  {
    "city": "TRIUNFO",
    "electionZone": "37",
    "stateCode": "PB"
  },
  {
    "city": "MOGEIRO",
    "electionZone": "6",
    "stateCode": "PB"
  },
  {
    "city": "CACIMBA DE DENTRO",
    "electionZone": "20",
    "stateCode": "PB"
  },
  {
    "city": "ALHANDRA",
    "electionZone": "73",
    "stateCode": "PB"
  },
  {
    "city": "ITAPOROROCA",
    "electionZone": "7",
    "stateCode": "PB"
  },
  {
    "city": "BOM SUCESSO",
    "electionZone": "36",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DO BREJO DO CRUZ",
    "electionZone": "38",
    "stateCode": "PB"
  },
  {
    "city": "PAULISTA",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "NOVA PALMEIRA",
    "electionZone": "25",
    "stateCode": "PB"
  },
  {
    "city": "CURRAL DE CIMA",
    "electionZone": "60",
    "stateCode": "PB"
  },
  {
    "city": "OLIVEDOS",
    "electionZone": "23",
    "stateCode": "PB"
  },
  {
    "city": "BOM JESUS",
    "electionZone": "42",
    "stateCode": "PB"
  },
  {
    "city": "LAGOA DE DENTRO",
    "electionZone": "60",
    "stateCode": "PB"
  },
  {
    "city": "CACHOEIRA DOS ÍNDIOS",
    "electionZone": "68",
    "stateCode": "PB"
  },
  {
    "city": "SÃO JOSÉ DE PRINCESA",
    "electionZone": "34",
    "stateCode": "PB"
  },
  {
    "city": "SÃO DOMINGOS DE POMBAL",
    "electionZone": "31",
    "stateCode": "PB"
  },
  {
    "city": "IGUARACI",
    "electionZone": "66",
    "stateCode": "PE"
  },
  {
    "city": "CORRENTES",
    "electionZone": "59",
    "stateCode": "PE"
  },
  {
    "city": "BOM CONSELHO",
    "electionZone": "61",
    "stateCode": "PE"
  },
  {
    "city": "SÃO BENEDITO DO SUL",
    "electionZone": "47",
    "stateCode": "PE"
  },
  {
    "city": "SIRINHAÉM",
    "electionZone": "22",
    "stateCode": "PE"
  },
  {
    "city": "SALGUEIRO",
    "electionZone": "75",
    "stateCode": "PE"
  },
  {
    "city": "ÁGUA PRETA",
    "electionZone": "38",
    "stateCode": "PE"
  },
  {
    "city": "SAIRÉ",
    "electionZone": "132",
    "stateCode": "PE"
  },
  {
    "city": "OROBÓ",
    "electionZone": "96",
    "stateCode": "PE"
  },
  {
    "city": "ALTINHO",
    "electionZone": "48",
    "stateCode": "PE"
  },
  {
    "city": "LAGOA DE ITAENGA",
    "electionZone": "17",
    "stateCode": "PE"
  },
  {
    "city": "OROCÓ",
    "electionZone": "77",
    "stateCode": "PE"
  },
  {
    "city": "CEDRO",
    "electionZone": "76",
    "stateCode": "PE"
  },
  {
    "city": "PETROLÂNDIA",
    "electionZone": "70",
    "stateCode": "PE"
  },
  {
    "city": "CANHOTINHO",
    "electionZone": "53",
    "stateCode": "PE"
  },
  {
    "city": "RIACHO DAS ALMAS",
    "electionZone": "97",
    "stateCode": "PE"
  },
  {
    "city": "LAGOA DO OURO",
    "electionZone": "59",
    "stateCode": "PE"
  },
  {
    "city": "BREJO DA MADRE DE DEUS",
    "electionZone": "54",
    "stateCode": "PE"
  },
  {
    "city": "INAJÁ",
    "electionZone": "63",
    "stateCode": "PE"
  },
  {
    "city": "CARUARU",
    "electionZone": "105",
    "stateCode": "PE"
  },
  {
    "city": "ITAPISSUMA",
    "electionZone": "131",
    "stateCode": "PE"
  },
  {
    "city": "PAUDALHO",
    "electionZone": "17",
    "stateCode": "PE"
  },
  {
    "city": "INGAZEIRA",
    "electionZone": "50",
    "stateCode": "PE"
  },
  {
    "city": "ILHA DE ITAMARACÁ",
    "electionZone": "131",
    "stateCode": "PE"
  },
  {
    "city": "BEZERROS",
    "electionZone": "35",
    "stateCode": "PE"
  },
  {
    "city": "PALMARES",
    "electionZone": "37",
    "stateCode": "PE"
  },
  {
    "city": "BUENOS AIRES",
    "electionZone": "23",
    "stateCode": "PE"
  },
  {
    "city": "LAGOA GRANDE",
    "electionZone": "81",
    "stateCode": "PE"
  },
  {
    "city": "TUPARETAMA",
    "electionZone": "68",
    "stateCode": "PE"
  },
  {
    "city": "MARAIAL",
    "electionZone": "139",
    "stateCode": "PE"
  },
  {
    "city": "DORMENTES",
    "electionZone": "107",
    "stateCode": "PE"
  },
  {
    "city": "CARPINA",
    "electionZone": "20",
    "stateCode": "PE"
  },
  {
    "city": "JUREMA",
    "electionZone": "124",
    "stateCode": "PE"
  },
  {
    "city": "SERTÂNIA",
    "electionZone": "62",
    "stateCode": "PE"
  },
  {
    "city": "SALOÁ",
    "electionZone": "136",
    "stateCode": "PE"
  },
  {
    "city": "PALMEIRINA",
    "electionZone": "110",
    "stateCode": "PE"
  },
  {
    "city": "PAULISTA",
    "electionZone": "146",
    "stateCode": "PE"
  },
  {
    "city": "LIMOEIRO",
    "electionZone": "24",
    "stateCode": "PE"
  },
  {
    "city": "LIMOEIRO",
    "electionZone": "103",
    "stateCode": "PE"
  },
  {
    "city": "BONITO",
    "electionZone": "39",
    "stateCode": "PE"
  },
  {
    "city": "CUMARU",
    "electionZone": "126",
    "stateCode": "PE"
  },
  {
    "city": "TAQUARITINGA DO NORTE",
    "electionZone": "51",
    "stateCode": "PE"
  },
  {
    "city": "SÃO JOSÉ DO BELMONTE",
    "electionZone": "74",
    "stateCode": "PE"
  },
  {
    "city": "CARNAÍBA",
    "electionZone": "98",
    "stateCode": "PE"
  },
  {
    "city": "AFRÂNIO",
    "electionZone": "107",
    "stateCode": "PE"
  },
  {
    "city": "TRINDADE",
    "electionZone": "133",
    "stateCode": "PE"
  },
  {
    "city": "POMBOS",
    "electionZone": "102",
    "stateCode": "PE"
  },
  {
    "city": "CARNAUBEIRA DA PENHA",
    "electionZone": "72",
    "stateCode": "PE"
  },
  {
    "city": "SÃO JOSÉ DO EGITO",
    "electionZone": "68",
    "stateCode": "PE"
  },
  {
    "city": "VICÊNCIA",
    "electionZone": "93",
    "stateCode": "PE"
  },
  {
    "city": "TRIUNFO",
    "electionZone": "69",
    "stateCode": "PE"
  },
  {
    "city": "ÁGUAS BELAS",
    "electionZone": "64",
    "stateCode": "PE"
  },
  {
    "city": "ALIANÇA",
    "electionZone": "32",
    "stateCode": "PE"
  },
  {
    "city": "ARAÇOIABA",
    "electionZone": "85",
    "stateCode": "PE"
  },
  {
    "city": "LAGOA DO CARRO",
    "electionZone": "20",
    "stateCode": "PE"
  },
  {
    "city": "SANTA TEREZINHA",
    "electionZone": "68",
    "stateCode": "PE"
  },
  {
    "city": "BELÉM DE SÃO FRANCISCO",
    "electionZone": "73",
    "stateCode": "PE"
  },
  {
    "city": "QUIPAPÁ",
    "electionZone": "47",
    "stateCode": "PE"
  },
  {
    "city": "POÇÃO",
    "electionZone": "113",
    "stateCode": "PE"
  },
  {
    "city": "TACARATU",
    "electionZone": "89",
    "stateCode": "PE"
  },
  {
    "city": "PETROLINA",
    "electionZone": "144",
    "stateCode": "PE"
  },
  {
    "city": "RIO FORMOSO",
    "electionZone": "26",
    "stateCode": "PE"
  },
  {
    "city": "VERTENTES",
    "electionZone": "46",
    "stateCode": "PE"
  },
  {
    "city": "CARUARU",
    "electionZone": "106",
    "stateCode": "PE"
  },
  {
    "city": "XEXÉU",
    "electionZone": "38",
    "stateCode": "PE"
  },
  {
    "city": "MORENO",
    "electionZone": "14",
    "stateCode": "PE"
  },
  {
    "city": "BUÍQUE",
    "electionZone": "60",
    "stateCode": "PE"
  },
  {
    "city": "CABO DE SANTO AGOSTINHO",
    "electionZone": "121",
    "stateCode": "PE"
  },
  {
    "city": "TAMANDARÉ",
    "electionZone": "26",
    "stateCode": "PE"
  },
  {
    "city": "CATENDE",
    "electionZone": "43",
    "stateCode": "PE"
  },
  {
    "city": "PESQUEIRA",
    "electionZone": "55",
    "stateCode": "PE"
  },
  {
    "city": "CHÃ GRANDE",
    "electionZone": "30",
    "stateCode": "PE"
  },
  {
    "city": "BETÂNIA",
    "electionZone": "108",
    "stateCode": "PE"
  },
  {
    "city": "BELO JARDIM",
    "electionZone": "45",
    "stateCode": "PE"
  },
  {
    "city": "LAJEDO",
    "electionZone": "94",
    "stateCode": "PE"
  },
  {
    "city": "OLINDA",
    "electionZone": "100",
    "stateCode": "PE"
  },
  {
    "city": "CHÃ DE ALEGRIA",
    "electionZone": "21",
    "stateCode": "PE"
  },
  {
    "city": "SANTA MARIA DA BOA VISTA",
    "electionZone": "81",
    "stateCode": "PE"
  },
  {
    "city": "BREJÃO",
    "electionZone": "92",
    "stateCode": "PE"
  },
  {
    "city": "JABOATÃO DOS GUARARAPES",
    "electionZone": "11",
    "stateCode": "PE"
  },
  {
    "city": "JABOATÃO DOS GUARARAPES",
    "electionZone": "118",
    "stateCode": "PE"
  },
  {
    "city": "JOAQUIM NABUCO",
    "electionZone": "111",
    "stateCode": "PE"
  },
  {
    "city": "GOIANA",
    "electionZone": "104",
    "stateCode": "PE"
  },
  {
    "city": "JUPI",
    "electionZone": "92",
    "stateCode": "PE"
  },
  {
    "city": "MACHADOS",
    "electionZone": "33",
    "stateCode": "PE"
  },
  {
    "city": "CACHOEIRINHA",
    "electionZone": "115",
    "stateCode": "PE"
  },
  {
    "city": "IPOJUCA",
    "electionZone": "16",
    "stateCode": "PE"
  },
  {
    "city": "JABOATÃO DOS GUARARAPES",
    "electionZone": "147",
    "stateCode": "PE"
  },
  {
    "city": "FLORESTA",
    "electionZone": "72",
    "stateCode": "PE"
  },
  {
    "city": "ITAÍBA",
    "electionZone": "143",
    "stateCode": "PE"
  },
  {
    "city": "TACAIMBÓ",
    "electionZone": "44",
    "stateCode": "PE"
  },
  {
    "city": "ITAMBÉ",
    "electionZone": "27",
    "stateCode": "PE"
  },
  {
    "city": "BOM JARDIM",
    "electionZone": "33",
    "stateCode": "PE"
  },
  {
    "city": "SÃO JOÃO",
    "electionZone": "116",
    "stateCode": "PE"
  },
  {
    "city": "JABOATÃO DOS GUARARAPES",
    "electionZone": "101",
    "stateCode": "PE"
  },
  {
    "city": "CAETÉS",
    "electionZone": "130",
    "stateCode": "PE"
  },
  {
    "city": "PRIMAVERA",
    "electionZone": "142",
    "stateCode": "PE"
  },
  {
    "city": "ESCADA",
    "electionZone": "19",
    "stateCode": "PE"
  },
  {
    "city": "EXU",
    "electionZone": "79",
    "stateCode": "PE"
  },
  {
    "city": "ARARIPINA",
    "electionZone": "84",
    "stateCode": "PE"
  },
  {
    "city": "CALUMBI",
    "electionZone": "67",
    "stateCode": "PE"
  },
  {
    "city": "AMARAJI",
    "electionZone": "31",
    "stateCode": "PE"
  },
  {
    "city": "VERTENTE DO LÉRIO",
    "electionZone": "34",
    "stateCode": "PE"
  },
  {
    "city": "AGRESTINA",
    "electionZone": "86",
    "stateCode": "PE"
  },
  {
    "city": "CARUARU",
    "electionZone": "41",
    "stateCode": "PE"
  },
  {
    "city": "AFOGADOS DA INGAZEIRA",
    "electionZone": "66",
    "stateCode": "PE"
  },
  {
    "city": "RIBEIRÃO",
    "electionZone": "28",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "5",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "148",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "6",
    "stateCode": "PE"
  },
  {
    "city": "SÃO JOSÉ DA COROA GRANDE",
    "electionZone": "42",
    "stateCode": "PE"
  },
  {
    "city": "PARNAMIRIM",
    "electionZone": "78",
    "stateCode": "PE"
  },
  {
    "city": "CAMARAGIBE",
    "electionZone": "127",
    "stateCode": "PE"
  },
  {
    "city": "JOÃO ALFREDO",
    "electionZone": "88",
    "stateCode": "PE"
  },
  {
    "city": "GARANHUNS",
    "electionZone": "92",
    "stateCode": "PE"
  },
  {
    "city": "GARANHUNS",
    "electionZone": "56",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "8",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "4",
    "stateCode": "PE"
  },
  {
    "city": "PARANATAMA",
    "electionZone": "92",
    "stateCode": "PE"
  },
  {
    "city": "SANTA CRUZ DO CAPIBARIBE",
    "electionZone": "109",
    "stateCode": "PE"
  },
  {
    "city": "ABREU E LIMA",
    "electionZone": "119",
    "stateCode": "PE"
  },
  {
    "city": "NAZARÉ DA MATA",
    "electionZone": "23",
    "stateCode": "PE"
  },
  {
    "city": "GAMELEIRA",
    "electionZone": "29",
    "stateCode": "PE"
  },
  {
    "city": "IBIMIRIM",
    "electionZone": "128",
    "stateCode": "PE"
  },
  {
    "city": "OURICURI",
    "electionZone": "82",
    "stateCode": "PE"
  },
  {
    "city": "CUPIRA",
    "electionZone": "95",
    "stateCode": "PE"
  },
  {
    "city": "MANARI",
    "electionZone": "63",
    "stateCode": "PE"
  },
  {
    "city": "BREJINHO",
    "electionZone": "99",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "149",
    "stateCode": "PE"
  },
  {
    "city": "IATI",
    "electionZone": "64",
    "stateCode": "PE"
  },
  {
    "city": "CONDADO",
    "electionZone": "125",
    "stateCode": "PE"
  },
  {
    "city": "GLÓRIA DO GOITÁ",
    "electionZone": "21",
    "stateCode": "PE"
  },
  {
    "city": "CUSTÓDIA",
    "electionZone": "65",
    "stateCode": "PE"
  },
  {
    "city": "SÃO CAITANO",
    "electionZone": "44",
    "stateCode": "PE"
  },
  {
    "city": "TABIRA",
    "electionZone": "50",
    "stateCode": "PE"
  },
  {
    "city": "CABO DE SANTO AGOSTINHO",
    "electionZone": "15",
    "stateCode": "PE"
  },
  {
    "city": "VERDEJANTE",
    "electionZone": "114",
    "stateCode": "PE"
  },
  {
    "city": "GOIANA",
    "electionZone": "25",
    "stateCode": "PE"
  },
  {
    "city": "FREI MIGUELINHO",
    "electionZone": "140",
    "stateCode": "PE"
  },
  {
    "city": "PANELAS",
    "electionZone": "49",
    "stateCode": "PE"
  },
  {
    "city": "OLINDA",
    "electionZone": "117",
    "stateCode": "PE"
  },
  {
    "city": "TORITAMA",
    "electionZone": "112",
    "stateCode": "PE"
  },
  {
    "city": "ARCOVERDE",
    "electionZone": "57",
    "stateCode": "PE"
  },
  {
    "city": "IBIRAJUBA",
    "electionZone": "138",
    "stateCode": "PE"
  },
  {
    "city": "ITAQUITINGA",
    "electionZone": "125",
    "stateCode": "PE"
  },
  {
    "city": "OLINDA",
    "electionZone": "10",
    "stateCode": "PE"
  },
  {
    "city": "TUPANATINGA",
    "electionZone": "60",
    "stateCode": "PE"
  },
  {
    "city": "MACAPARANA",
    "electionZone": "90",
    "stateCode": "PE"
  },
  {
    "city": "IGARASSU",
    "electionZone": "85",
    "stateCode": "PE"
  },
  {
    "city": "TRACUNHAÉM",
    "electionZone": "23",
    "stateCode": "PE"
  },
  {
    "city": "BELÉM DE MARIA",
    "electionZone": "122",
    "stateCode": "PE"
  },
  {
    "city": "CORTÊS",
    "electionZone": "28",
    "stateCode": "PE"
  },
  {
    "city": "PETROLINA",
    "electionZone": "145",
    "stateCode": "PE"
  },
  {
    "city": "IPUBI",
    "electionZone": "129",
    "stateCode": "PE"
  },
  {
    "city": "PASSIRA",
    "electionZone": "91",
    "stateCode": "PE"
  },
  {
    "city": "BARREIROS",
    "electionZone": "42",
    "stateCode": "PE"
  },
  {
    "city": "PETROLINA",
    "electionZone": "83",
    "stateCode": "PE"
  },
  {
    "city": "SÃO LOURENÇO DA MATA",
    "electionZone": "13",
    "stateCode": "PE"
  },
  {
    "city": "TEREZINHA",
    "electionZone": "61",
    "stateCode": "PE"
  },
  {
    "city": "GRAVATÁ",
    "electionZone": "30",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "9",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "1",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "2",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "151",
    "stateCode": "PE"
  },
  {
    "city": "VITÓRIA DE SANTO ANTÃO",
    "electionZone": "18",
    "stateCode": "PE"
  },
  {
    "city": "MIRANDIBA",
    "electionZone": "74",
    "stateCode": "PE"
  },
  {
    "city": "SALGADINHO",
    "electionZone": "88",
    "stateCode": "PE"
  },
  {
    "city": "CASINHAS",
    "electionZone": "34",
    "stateCode": "PE"
  },
  {
    "city": "CAPOEIRAS",
    "electionZone": "130",
    "stateCode": "PE"
  },
  {
    "city": "VITÓRIA DE SANTO ANTÃO",
    "electionZone": "102",
    "stateCode": "PE"
  },
  {
    "city": "JUCATI",
    "electionZone": "92",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "150",
    "stateCode": "PE"
  },
  {
    "city": "ALAGOINHA",
    "electionZone": "55",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "3",
    "stateCode": "PE"
  },
  {
    "city": "CALÇADO",
    "electionZone": "94",
    "stateCode": "PE"
  },
  {
    "city": "SANTA FILOMENA",
    "electionZone": "82",
    "stateCode": "PE"
  },
  {
    "city": "RECIFE",
    "electionZone": "7",
    "stateCode": "PE"
  },
  {
    "city": "FERREIROS",
    "electionZone": "27",
    "stateCode": "PE"
  },
  {
    "city": "ITACURUBA",
    "electionZone": "73",
    "stateCode": "PE"
  },
  {
    "city": "ITAPETIM",
    "electionZone": "99",
    "stateCode": "PE"
  },
  {
    "city": "LAGOA DOS GATOS",
    "electionZone": "122",
    "stateCode": "PE"
  },
  {
    "city": "BODOCÓ",
    "electionZone": "80",
    "stateCode": "PE"
  },
  {
    "city": "PAULISTA",
    "electionZone": "12",
    "stateCode": "PE"
  },
  {
    "city": "SÃO JOAQUIM DO MONTE",
    "electionZone": "40",
    "stateCode": "PE"
  },
  {
    "city": "SANHARÓ",
    "electionZone": "123",
    "stateCode": "PE"
  },
  {
    "city": "TIMBAÚBA",
    "electionZone": "36",
    "stateCode": "PE"
  },
  {
    "city": "JATAÚBA",
    "electionZone": "134",
    "stateCode": "PE"
  },
  {
    "city": "ANGELIM",
    "electionZone": "87",
    "stateCode": "PE"
  },
  {
    "city": "GRANITO",
    "electionZone": "80",
    "stateCode": "PE"
  },
  {
    "city": "QUIXABA",
    "electionZone": "98",
    "stateCode": "PE"
  },
  {
    "city": "CAMOCIM DE SÃO FÉLIX",
    "electionZone": "132",
    "stateCode": "PE"
  },
  {
    "city": "CAMUTANGA",
    "electionZone": "27",
    "stateCode": "PE"
  },
  {
    "city": "SOLIDÃO",
    "electionZone": "50",
    "stateCode": "PE"
  },
  {
    "city": "SERRA TALHADA",
    "electionZone": "71",
    "stateCode": "PE"
  },
  {
    "city": "SURUBIM",
    "electionZone": "34",
    "stateCode": "PE"
  },
  {
    "city": "FEIRA NOVA",
    "electionZone": "135",
    "stateCode": "PE"
  },
  {
    "city": "PEDRA",
    "electionZone": "58",
    "stateCode": "PE"
  },
  {
    "city": "CABROBÓ",
    "electionZone": "77",
    "stateCode": "PE"
  },
  {
    "city": "SÃO VICENTE FÉRRER",
    "electionZone": "141",
    "stateCode": "PE"
  },
  {
    "city": "BARRA DE GUABIRABA",
    "electionZone": "39",
    "stateCode": "PE"
  },
  {
    "city": "SERRITA",
    "electionZone": "76",
    "stateCode": "PE"
  },
  {
    "city": "JAQUEIRA",
    "electionZone": "139",
    "stateCode": "PE"
  },
  {
    "city": "FLORES",
    "electionZone": "67",
    "stateCode": "PE"
  },
  {
    "city": "SANTA MARIA DO CAMBUCÁ",
    "electionZone": "140",
    "stateCode": "PE"
  },
  {
    "city": "SÃO BENTO DO UNA",
    "electionZone": "52",
    "stateCode": "PE"
  },
  {
    "city": "VENTUROSA",
    "electionZone": "120",
    "stateCode": "PE"
  },
  {
    "city": "SANTA CRUZ DA BAIXA VERDE",
    "electionZone": "69",
    "stateCode": "PE"
  },
  {
    "city": "SANTA CRUZ",
    "electionZone": "82",
    "stateCode": "PE"
  },
  {
    "city": "JATOBÁ",
    "electionZone": "70",
    "stateCode": "PE"
  },
  {
    "city": "MOREILÂNDIA",
    "electionZone": "137",
    "stateCode": "PE"
  },
  {
    "city": "TERRA NOVA",
    "electionZone": "78",
    "stateCode": "PE"
  },
  {
    "city": "WALL FERRAZ",
    "electionZone": "66",
    "stateCode": "PI"
  },
  {
    "city": "SANTO INÁCIO DO PIAUÍ",
    "electionZone": "81",
    "stateCode": "PI"
  },
  {
    "city": "ISAÍAS COELHO",
    "electionZone": "37",
    "stateCode": "PI"
  },
  {
    "city": "GUARIBAS",
    "electionZone": "79",
    "stateCode": "PI"
  },
  {
    "city": "LAGOA DE SÃO FRANCISCO",
    "electionZone": "12",
    "stateCode": "PI"
  },
  {
    "city": "FLORES DO PIAUÍ",
    "electionZone": "72",
    "stateCode": "PI"
  },
  {
    "city": "PAJEÚ DO PIAUÍ",
    "electionZone": "36",
    "stateCode": "PI"
  },
  {
    "city": "BELA VISTA DO PIAUÍ",
    "electionZone": "37",
    "stateCode": "PI"
  },
  {
    "city": "CAXINGÓ",
    "electionZone": "33",
    "stateCode": "PI"
  },
  {
    "city": "SÃO MIGUEL DO TAPUIO",
    "electionZone": "39",
    "stateCode": "PI"
  },
  {
    "city": "SÃO LUIS DO PIAUÍ",
    "electionZone": "93",
    "stateCode": "PI"
  },
  {
    "city": "SÃO MIGUEL DA BAIXA GRANDE",
    "electionZone": "76",
    "stateCode": "PI"
  },
  {
    "city": "DOM INOCÊNCIO",
    "electionZone": "13",
    "stateCode": "PI"
  },
  {
    "city": "SEBASTIÃO BARROS",
    "electionZone": "22",
    "stateCode": "PI"
  },
  {
    "city": "HUGO NAPOLEÃO",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "ALAGOINHA DO PIAUÍ",
    "electionZone": "29",
    "stateCode": "PI"
  },
  {
    "city": "PIRACURUCA",
    "electionZone": "21",
    "stateCode": "PI"
  },
  {
    "city": "SANTA CRUZ DO PIAUÍ",
    "electionZone": "66",
    "stateCode": "PI"
  },
  {
    "city": "PORTO ALEGRE DO PIAUÍ",
    "electionZone": "78",
    "stateCode": "PI"
  },
  {
    "city": "BATALHA",
    "electionZone": "45",
    "stateCode": "PI"
  },
  {
    "city": "BOA HORA",
    "electionZone": "6",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DA CANABRAVA",
    "electionZone": "93",
    "stateCode": "PI"
  },
  {
    "city": "BAIXA GRANDE DO RIBEIRO",
    "electionZone": "44",
    "stateCode": "PI"
  },
  {
    "city": "SEBASTIÃO LEAL",
    "electionZone": "28",
    "stateCode": "PI"
  },
  {
    "city": "JOÃO COSTA",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "COCAL",
    "electionZone": "53",
    "stateCode": "PI"
  },
  {
    "city": "GUADALUPE",
    "electionZone": "46",
    "stateCode": "PI"
  },
  {
    "city": "FRANCINÓPOLIS",
    "electionZone": "74",
    "stateCode": "PI"
  },
  {
    "city": "LAGOA DO BARRO DO PIAUÍ",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "CAJUEIRO DA PRAIA",
    "electionZone": "91",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOSÉ DO DIVINO",
    "electionZone": "21",
    "stateCode": "PI"
  },
  {
    "city": "VILA NOVA DO PIAUÍ",
    "electionZone": "68",
    "stateCode": "PI"
  },
  {
    "city": "PAU D'ARCO DO PIAUÍ",
    "electionZone": "32",
    "stateCode": "PI"
  },
  {
    "city": "NAZARÉ DO PIAUÍ",
    "electionZone": "60",
    "stateCode": "PI"
  },
  {
    "city": "OEIRAS",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOSÉ DO PIAUÍ",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "PRATA DO PIAUÍ",
    "electionZone": "76",
    "stateCode": "PI"
  },
  {
    "city": "SÃO PEDRO DO PIAUÍ",
    "electionZone": "30",
    "stateCode": "PI"
  },
  {
    "city": "INHUMA",
    "electionZone": "64",
    "stateCode": "PI"
  },
  {
    "city": "VÁRZEA GRANDE",
    "electionZone": "82",
    "stateCode": "PI"
  },
  {
    "city": "FARTURA DO PIAUÍ",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "NOVA SANTA RITA",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "RIO GRANDE DO PIAUÍ",
    "electionZone": "72",
    "stateCode": "PI"
  },
  {
    "city": "SANTA ROSA DO PIAUÍ",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "DEMERVAL LOBÃO",
    "electionZone": "54",
    "stateCode": "PI"
  },
  {
    "city": "CURRAL NOVO DO PIAUÍ",
    "electionZone": "56",
    "stateCode": "PI"
  },
  {
    "city": "MILTON BRANDÃO",
    "electionZone": "12",
    "stateCode": "PI"
  },
  {
    "city": "REDENÇÃO DO GURGUÉIA",
    "electionZone": "15",
    "stateCode": "PI"
  },
  {
    "city": "ANTÔNIO ALMEIDA",
    "electionZone": "78",
    "stateCode": "PI"
  },
  {
    "city": "BARRO DURO",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "ÁGUA BRANCA",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "TAMBORIL DO PIAUÍ",
    "electionZone": "36",
    "stateCode": "PI"
  },
  {
    "city": "ITAUEIRA",
    "electionZone": "72",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DA VARJOTA",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "SOCORRO DO PIAUÍ",
    "electionZone": "73",
    "stateCode": "PI"
  },
  {
    "city": "CAMPO ALEGRE DO FIDALGO",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "FRONTEIRAS",
    "electionZone": "40",
    "stateCode": "PI"
  },
  {
    "city": "JÚLIO BORGES",
    "electionZone": "51",
    "stateCode": "PI"
  },
  {
    "city": "OLHO D'ÁGUA DO PIAUÍ",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "VERA MENDES",
    "electionZone": "57",
    "stateCode": "PI"
  },
  {
    "city": "PEDRO LAURENTINO",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "BOCAINA",
    "electionZone": "93",
    "stateCode": "PI"
  },
  {
    "city": "CURRAIS",
    "electionZone": "15",
    "stateCode": "PI"
  },
  {
    "city": "SIMPLÍCIO MENDES",
    "electionZone": "37",
    "stateCode": "PI"
  },
  {
    "city": "MIGUEL ALVES",
    "electionZone": "17",
    "stateCode": "PI"
  },
  {
    "city": "LAGOINHA DO PIAUÍ",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "ANÍSIO DE ABREU",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "JARDIM DO MULATO",
    "electionZone": "84",
    "stateCode": "PI"
  },
  {
    "city": "PAES LANDIM",
    "electionZone": "83",
    "stateCode": "PI"
  },
  {
    "city": "SÃO BRAZ DO PIAUÍ",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "DIRCEU ARCOVERDE",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "COCAL DOS ALVES",
    "electionZone": "53",
    "stateCode": "PI"
  },
  {
    "city": "BELÉM DO PIAUÍ",
    "electionZone": "68",
    "stateCode": "PI"
  },
  {
    "city": "PARNAGUÁ",
    "electionZone": "26",
    "stateCode": "PI"
  },
  {
    "city": "LUIS CORREIA",
    "electionZone": "91",
    "stateCode": "PI"
  },
  {
    "city": "BETÂNIA DO PIAUÍ",
    "electionZone": "38",
    "stateCode": "PI"
  },
  {
    "city": "BENEDITINOS",
    "electionZone": "47",
    "stateCode": "PI"
  },
  {
    "city": "BREJO DO PIAUÍ",
    "electionZone": "36",
    "stateCode": "PI"
  },
  {
    "city": "CONCEIÇÃO DO CANINDÉ",
    "electionZone": "50",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DA FRONTEIRA",
    "electionZone": "21",
    "stateCode": "PI"
  },
  {
    "city": "PALMEIRA DO PIAUÍ",
    "electionZone": "59",
    "stateCode": "PI"
  },
  {
    "city": "NOVO ORIENTE DO PIAUÍ",
    "electionZone": "18",
    "stateCode": "PI"
  },
  {
    "city": "FRANCISCO AYRES",
    "electionZone": "77",
    "stateCode": "PI"
  },
  {
    "city": "CORONEL JOSÉ DIAS",
    "electionZone": "13",
    "stateCode": "PI"
  },
  {
    "city": "ALEGRETE DO PIAUÍ",
    "electionZone": "40",
    "stateCode": "PI"
  },
  {
    "city": "BARREIRAS DO PIAUÍ",
    "electionZone": "35",
    "stateCode": "PI"
  },
  {
    "city": "CANTO DO BURITI",
    "electionZone": "36",
    "stateCode": "PI"
  },
  {
    "city": "MORRO CABEÇA NO TEMPO",
    "electionZone": "88",
    "stateCode": "PI"
  },
  {
    "city": "CURIMATÁ",
    "electionZone": "51",
    "stateCode": "PI"
  },
  {
    "city": "CANAVIEIRA",
    "electionZone": "25",
    "stateCode": "PI"
  },
  {
    "city": "SÃO FRANCISCO DO PIAUÍ",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "ALVORADA DO GURGUÉIA",
    "electionZone": "59",
    "stateCode": "PI"
  },
  {
    "city": "IPIRANGA DO PIAUÍ",
    "electionZone": "89",
    "stateCode": "PI"
  },
  {
    "city": "PAVUSSU",
    "electionZone": "72",
    "stateCode": "PI"
  },
  {
    "city": "URUÇUÍ",
    "electionZone": "14",
    "stateCode": "PI"
  },
  {
    "city": "ELISEU MARTINS",
    "electionZone": "90",
    "stateCode": "PI"
  },
  {
    "city": "CURRALINHOS",
    "electionZone": "58",
    "stateCode": "PI"
  },
  {
    "city": "MORRO DO CHAPÉU DO PIAUÍ",
    "electionZone": "41",
    "stateCode": "PI"
  },
  {
    "city": "ASSUNÇÃO DO PIAUÍ",
    "electionZone": "39",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DO PIAUÍ",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "CAPITÃO DE CAMPOS",
    "electionZone": "71",
    "stateCode": "PI"
  },
  {
    "city": "PIO IX",
    "electionZone": "29",
    "stateCode": "PI"
  },
  {
    "city": "SÃO GONÇALO DO GURGUÉIA",
    "electionZone": "35",
    "stateCode": "PI"
  },
  {
    "city": "CAPITÃO GERVÁSIO OLIVEIRA",
    "electionZone": "20",
    "stateCode": "PI"
  },
  {
    "city": "CARAÚBAS DO PIAUÍ",
    "electionZone": "33",
    "stateCode": "PI"
  },
  {
    "city": "RIBEIRA DO PIAUÍ",
    "electionZone": "73",
    "stateCode": "PI"
  },
  {
    "city": "ARRAIAL",
    "electionZone": "77",
    "stateCode": "PI"
  },
  {
    "city": "MIGUEL LEÃO",
    "electionZone": "58",
    "stateCode": "PI"
  },
  {
    "city": "MANOEL EMÍDIO",
    "electionZone": "67",
    "stateCode": "PI"
  },
  {
    "city": "PATOS DO PIAUÍ",
    "electionZone": "19",
    "stateCode": "PI"
  },
  {
    "city": "SANTO ANTÔNIO DE LISBOA",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "MATIAS OLÍMPIO",
    "electionZone": "80",
    "stateCode": "PI"
  },
  {
    "city": "PIRIPIRI",
    "electionZone": "11",
    "stateCode": "PI"
  },
  {
    "city": "ITAINÓPOLIS",
    "electionZone": "57",
    "stateCode": "PI"
  },
  {
    "city": "BARRAS",
    "electionZone": "6",
    "stateCode": "PI"
  },
  {
    "city": "PALMEIRAIS",
    "electionZone": "31",
    "stateCode": "PI"
  },
  {
    "city": "FLORIANO",
    "electionZone": "61",
    "stateCode": "PI"
  },
  {
    "city": "FLORIANO",
    "electionZone": "9",
    "stateCode": "PI"
  },
  {
    "city": "PEDRO II",
    "electionZone": "12",
    "stateCode": "PI"
  },
  {
    "city": "JERUMENHA",
    "electionZone": "25",
    "stateCode": "PI"
  },
  {
    "city": "MONTE ALEGRE DO PIAUÍ",
    "electionZone": "94",
    "stateCode": "PI"
  },
  {
    "city": "AGRICOLÂNDIA",
    "electionZone": "30",
    "stateCode": "PI"
  },
  {
    "city": "PAULISTANA",
    "electionZone": "38",
    "stateCode": "PI"
  },
  {
    "city": "NAZÁRIA",
    "electionZone": "97",
    "stateCode": "PI"
  },
  {
    "city": "PARNAÍBA",
    "electionZone": "4",
    "stateCode": "PI"
  },
  {
    "city": "ALTO LONGÁ",
    "electionZone": "42",
    "stateCode": "PI"
  },
  {
    "city": "ILHA GRANDE",
    "electionZone": "4",
    "stateCode": "PI"
  },
  {
    "city": "PORTO",
    "electionZone": "49",
    "stateCode": "PI"
  },
  {
    "city": "SÃO RAIMUNDO NONATO",
    "electionZone": "13",
    "stateCode": "PI"
  },
  {
    "city": "MONSENHOR GIL",
    "electionZone": "58",
    "stateCode": "PI"
  },
  {
    "city": "ESPERANTINA",
    "electionZone": "41",
    "stateCode": "PI"
  },
  {
    "city": "JUAZEIRO DO PIAUÍ",
    "electionZone": "34",
    "stateCode": "PI"
  },
  {
    "city": "SANTO ANTÔNIO DOS MILAGRES",
    "electionZone": "70",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DA SERRA",
    "electionZone": "34",
    "stateCode": "PI"
  },
  {
    "city": "PICOS",
    "electionZone": "10",
    "stateCode": "PI"
  },
  {
    "city": "PICOS",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "AROAZES",
    "electionZone": "92",
    "stateCode": "PI"
  },
  {
    "city": "JOAQUIM PIRES",
    "electionZone": "85",
    "stateCode": "PI"
  },
  {
    "city": "AMARANTE",
    "electionZone": "8",
    "stateCode": "PI"
  },
  {
    "city": "SÃO FRANCISCO DE ASSIS DO PIAUÍ",
    "electionZone": "50",
    "stateCode": "PI"
  },
  {
    "city": "ACAUÃ",
    "electionZone": "38",
    "stateCode": "PI"
  },
  {
    "city": "SANTANA DO PIAUÍ",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "SÃO LOURENÇO DO PIAUÍ",
    "electionZone": "13",
    "stateCode": "PI"
  },
  {
    "city": "BOQUEIRÃO DO PIAUÍ",
    "electionZone": "71",
    "stateCode": "PI"
  },
  {
    "city": "VALENÇA DO PIAUÍ",
    "electionZone": "18",
    "stateCode": "PI"
  },
  {
    "city": "PARNAÍBA",
    "electionZone": "3",
    "stateCode": "PI"
  },
  {
    "city": "CABECEIRAS DO PIAUÍ",
    "electionZone": "6",
    "stateCode": "PI"
  },
  {
    "city": "JOCA MARQUES",
    "electionZone": "27",
    "stateCode": "PI"
  },
  {
    "city": "JAICÓS",
    "electionZone": "19",
    "stateCode": "PI"
  },
  {
    "city": "ANGICAL DO PIAUÍ",
    "electionZone": "84",
    "stateCode": "PI"
  },
  {
    "city": "MADEIRO",
    "electionZone": "27",
    "stateCode": "PI"
  },
  {
    "city": "TANQUE DO PIAUÍ",
    "electionZone": "82",
    "stateCode": "PI"
  },
  {
    "city": "BURITI DOS LOPES",
    "electionZone": "33",
    "stateCode": "PI"
  },
  {
    "city": "CAMPO MAIOR",
    "electionZone": "96",
    "stateCode": "PI"
  },
  {
    "city": "LAGOA ALEGRE",
    "electionZone": "16",
    "stateCode": "PI"
  },
  {
    "city": "ALTOS",
    "electionZone": "32",
    "stateCode": "PI"
  },
  {
    "city": "JATOBÁ DO PIAUÍ",
    "electionZone": "7",
    "stateCode": "PI"
  },
  {
    "city": "CAMPO MAIOR",
    "electionZone": "7",
    "stateCode": "PI"
  },
  {
    "city": "TERESINA",
    "electionZone": "97",
    "stateCode": "PI"
  },
  {
    "city": "TERESINA",
    "electionZone": "1",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOÃO DO ARRAIAL",
    "electionZone": "80",
    "stateCode": "PI"
  },
  {
    "city": "TERESINA",
    "electionZone": "98",
    "stateCode": "PI"
  },
  {
    "city": "UNIÃO",
    "electionZone": "16",
    "stateCode": "PI"
  },
  {
    "city": "CORRENTE",
    "electionZone": "22",
    "stateCode": "PI"
  },
  {
    "city": "CRISTINO CASTRO",
    "electionZone": "59",
    "stateCode": "PI"
  },
  {
    "city": "SIGEFREDO PACHECO",
    "electionZone": "7",
    "stateCode": "PI"
  },
  {
    "city": "BOM PRINCÍPIO DO PIAUÍ",
    "electionZone": "33",
    "stateCode": "PI"
  },
  {
    "city": "TERESINA",
    "electionZone": "2",
    "stateCode": "PI"
  },
  {
    "city": "LUZILÂNDIA",
    "electionZone": "27",
    "stateCode": "PI"
  },
  {
    "city": "BONFIM DO PIAUÍ",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "NOSSA SENHORA DOS REMÉDIOS",
    "electionZone": "86",
    "stateCode": "PI"
  },
  {
    "city": "REGENERAÇÃO",
    "electionZone": "43",
    "stateCode": "PI"
  },
  {
    "city": "CRISTALÂNDIA DO PIAUÍ",
    "electionZone": "69",
    "stateCode": "PI"
  },
  {
    "city": "MARCOS PARENTE",
    "electionZone": "87",
    "stateCode": "PI"
  },
  {
    "city": "COLÔNIA DO GURGUÉIA",
    "electionZone": "90",
    "stateCode": "PI"
  },
  {
    "city": "GEMINIANO",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "RIBEIRO GONÇALVES",
    "electionZone": "44",
    "stateCode": "PI"
  },
  {
    "city": "BOM JESUS",
    "electionZone": "15",
    "stateCode": "PI"
  },
  {
    "city": "MURICI DOS PORTELAS",
    "electionZone": "85",
    "stateCode": "PI"
  },
  {
    "city": "SIMÕES",
    "electionZone": "56",
    "stateCode": "PI"
  },
  {
    "city": "VÁRZEA BRANCA",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "BRASILEIRA",
    "electionZone": "11",
    "stateCode": "PI"
  },
  {
    "city": "CAJAZEIRAS DO PIAUÍ",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "SÃO FÉLIX DO PIAUÍ",
    "electionZone": "76",
    "stateCode": "PI"
  },
  {
    "city": "CAMPINAS DO PIAUÍ",
    "electionZone": "81",
    "stateCode": "PI"
  },
  {
    "city": "NOSSA SENHORA DE NAZARÉ",
    "electionZone": "96",
    "stateCode": "PI"
  },
  {
    "city": "DOM EXPEDITO LOPES",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "BURITI DOS MONTES",
    "electionZone": "34",
    "stateCode": "PI"
  },
  {
    "city": "AROEIRAS DO ITAIM",
    "electionZone": "10",
    "stateCode": "PI"
  },
  {
    "city": "LANDRI SALES",
    "electionZone": "75",
    "stateCode": "PI"
  },
  {
    "city": "COCAL DE TELHA",
    "electionZone": "71",
    "stateCode": "PI"
  },
  {
    "city": "LAGOA DO PIAUÍ",
    "electionZone": "54",
    "stateCode": "PI"
  },
  {
    "city": "FLORESTA DO PIAUÍ",
    "electionZone": "81",
    "stateCode": "PI"
  },
  {
    "city": "ELESBÃO VELOSO",
    "electionZone": "48",
    "stateCode": "PI"
  },
  {
    "city": "PASSAGEM FRANCA DO PIAUÍ",
    "electionZone": "52",
    "stateCode": "PI"
  },
  {
    "city": "SÃO MIGUEL DO FIDALGO",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "COIVARAS",
    "electionZone": "32",
    "stateCode": "PI"
  },
  {
    "city": "SANTA FILOMENA",
    "electionZone": "23",
    "stateCode": "PI"
  },
  {
    "city": "FRANCISCO MACEDO",
    "electionZone": "68",
    "stateCode": "PI"
  },
  {
    "city": "GILBUÉS",
    "electionZone": "35",
    "stateCode": "PI"
  },
  {
    "city": "LAGOA DO SÍTIO",
    "electionZone": "18",
    "stateCode": "PI"
  },
  {
    "city": "SANTA CRUZ DOS MILAGRES",
    "electionZone": "76",
    "stateCode": "PI"
  },
  {
    "city": "DOMINGOS MOURÃO",
    "electionZone": "12",
    "stateCode": "PI"
  },
  {
    "city": "JUREMA",
    "electionZone": "95",
    "stateCode": "PI"
  },
  {
    "city": "PADRE MARCOS",
    "electionZone": "68",
    "stateCode": "PI"
  },
  {
    "city": "SANTA LUZ",
    "electionZone": "59",
    "stateCode": "PI"
  },
  {
    "city": "MONSENHOR HIPÓLITO",
    "electionZone": "65",
    "stateCode": "PI"
  },
  {
    "city": "CARIDADE DO PIAUÍ",
    "electionZone": "56",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JULIÃO",
    "electionZone": "40",
    "stateCode": "PI"
  },
  {
    "city": "RIACHO FRIO",
    "electionZone": "26",
    "stateCode": "PI"
  },
  {
    "city": "PIMENTEIRAS",
    "electionZone": "55",
    "stateCode": "PI"
  },
  {
    "city": "JACOBINA DO PIAUÍ",
    "electionZone": "38",
    "stateCode": "PI"
  },
  {
    "city": "NOVO SANTO ANTÔNIO",
    "electionZone": "42",
    "stateCode": "PI"
  },
  {
    "city": "BERTOLÍNIA",
    "electionZone": "28",
    "stateCode": "PI"
  },
  {
    "city": "JOSÉ DE FREITAS",
    "electionZone": "24",
    "stateCode": "PI"
  },
  {
    "city": "BARRA D'ALCÂNTARA",
    "electionZone": "82",
    "stateCode": "PI"
  },
  {
    "city": "CAMPO LARGO DO PIAUÍ",
    "electionZone": "49",
    "stateCode": "PI"
  },
  {
    "city": "CASTELO DO PIAUÍ",
    "electionZone": "34",
    "stateCode": "PI"
  },
  {
    "city": "MARCOLÂNDIA",
    "electionZone": "68",
    "stateCode": "PI"
  },
  {
    "city": "CARACOL",
    "electionZone": "79",
    "stateCode": "PI"
  },
  {
    "city": "SÃO GONÇALO DO PIAUÍ",
    "electionZone": "70",
    "stateCode": "PI"
  },
  {
    "city": "TERESINA",
    "electionZone": "63",
    "stateCode": "PI"
  },
  {
    "city": "PAQUETÁ",
    "electionZone": "10",
    "stateCode": "PI"
  },
  {
    "city": "SÃO JOSÉ DO PEIXE",
    "electionZone": "60",
    "stateCode": "PI"
  },
  {
    "city": "FRANCISCO SANTOS",
    "electionZone": "65",
    "stateCode": "PI"
  },
  {
    "city": "CALDEIRÃO GRANDE DO PIAUÍ",
    "electionZone": "40",
    "stateCode": "PI"
  },
  {
    "city": "AVELINO LOPES",
    "electionZone": "88",
    "stateCode": "PI"
  },
  {
    "city": "COLÔNIA DO PIAUÍ",
    "electionZone": "5",
    "stateCode": "PI"
  },
  {
    "city": "QUEIMADA NOVA",
    "electionZone": "38",
    "stateCode": "PI"
  },
  {
    "city": "CAMPO GRANDE DO PIAUÍ",
    "electionZone": "19",
    "stateCode": "PI"
  },
  {
    "city": "SUSSUAPARA",
    "electionZone": "62",
    "stateCode": "PI"
  },
  {
    "city": "MASSAPÊ DO PIAUÍ",
    "electionZone": "19",
    "stateCode": "PI"
  },
  {
    "city": "DIAMANTE DO NORTE",
    "electionZone": "96",
    "stateCode": "PR"
  },
  {
    "city": "CORBÉLIA",
    "electionZone": "126",
    "stateCode": "PR"
  },
  {
    "city": "CRUZEIRO DO OESTE",
    "electionZone": "86",
    "stateCode": "PR"
  },
  {
    "city": "JABOTI",
    "electionZone": "19",
    "stateCode": "PR"
  },
  {
    "city": "BELA VISTA DA CAROBA",
    "electionZone": "107",
    "stateCode": "PR"
  },
  {
    "city": "PINHAIS",
    "electionZone": "187",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOSÉ DOS PINHAIS",
    "electionZone": "200",
    "stateCode": "PR"
  },
  {
    "city": "OURO VERDE DO OESTE",
    "electionZone": "148",
    "stateCode": "PR"
  },
  {
    "city": "NOSSA SENHORA DAS GRAÇAS",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "WENCESLAU BRAZ",
    "electionZone": "20",
    "stateCode": "PR"
  },
  {
    "city": "SARANDI",
    "electionZone": "206",
    "stateCode": "PR"
  },
  {
    "city": "SABÁUDIA",
    "electionZone": "180",
    "stateCode": "PR"
  },
  {
    "city": "AMAPORÃ",
    "electionZone": "138",
    "stateCode": "PR"
  },
  {
    "city": "SULINA",
    "electionZone": "103",
    "stateCode": "PR"
  },
  {
    "city": "GUAMIRANGA",
    "electionZone": "29",
    "stateCode": "PR"
  },
  {
    "city": "MATO RICO",
    "electionZone": "38",
    "stateCode": "PR"
  },
  {
    "city": "RIO BRANCO DO IVAÍ",
    "electionZone": "136",
    "stateCode": "PR"
  },
  {
    "city": "CONSELHEIRO MAIRINCK",
    "electionZone": "79",
    "stateCode": "PR"
  },
  {
    "city": "PORTO AMAZONAS",
    "electionZone": "13",
    "stateCode": "PR"
  },
  {
    "city": "GUARATUBA",
    "electionZone": "161",
    "stateCode": "PR"
  },
  {
    "city": "ITAPEJARA D'OESTE",
    "electionZone": "151",
    "stateCode": "PR"
  },
  {
    "city": "IVAÍ",
    "electionZone": "29",
    "stateCode": "PR"
  },
  {
    "city": "NOVA ESPERANÇA",
    "electionZone": "71",
    "stateCode": "PR"
  },
  {
    "city": "GODOY MOREIRA",
    "electionZone": "132",
    "stateCode": "PR"
  },
  {
    "city": "QUERÊNCIA DO NORTE",
    "electionZone": "85",
    "stateCode": "PR"
  },
  {
    "city": "SENGÉS",
    "electionZone": "54",
    "stateCode": "PR"
  },
  {
    "city": "BOA ESPERANÇA DO IGUAÇU",
    "electionZone": "115",
    "stateCode": "PR"
  },
  {
    "city": "SALTO DO LONTRA",
    "electionZone": "162",
    "stateCode": "PR"
  },
  {
    "city": "GUARACI",
    "electionZone": "64",
    "stateCode": "PR"
  },
  {
    "city": "FLORESTÓPOLIS",
    "electionZone": "65",
    "stateCode": "PR"
  },
  {
    "city": "LINDOESTE",
    "electionZone": "143",
    "stateCode": "PR"
  },
  {
    "city": "MATINHOS",
    "electionZone": "194",
    "stateCode": "PR"
  },
  {
    "city": "SÃO PEDRO DO IGUAÇU",
    "electionZone": "148",
    "stateCode": "PR"
  },
  {
    "city": "PORTO RICO",
    "electionZone": "85",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "146",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "157",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "42",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "190",
    "stateCode": "PR"
  },
  {
    "city": "MERCEDES",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "SÃO MANOEL DO PARANÁ",
    "electionZone": "149",
    "stateCode": "PR"
  },
  {
    "city": "FLÓRIDA",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "PONTA GROSSA",
    "electionZone": "139",
    "stateCode": "PR"
  },
  {
    "city": "PINHAL DE SÃO BENTO",
    "electionZone": "83",
    "stateCode": "PR"
  },
  {
    "city": "MARUMBI",
    "electionZone": "70",
    "stateCode": "PR"
  },
  {
    "city": "SANTO ANTÔNIO DO SUDOESTE",
    "electionZone": "83",
    "stateCode": "PR"
  },
  {
    "city": "RONDON",
    "electionZone": "127",
    "stateCode": "PR"
  },
  {
    "city": "BALSA NOVA",
    "electionZone": "182",
    "stateCode": "PR"
  },
  {
    "city": "SERRANÓPOLIS DO IGUAÇU",
    "electionZone": "114",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOSÉ DA BOA VISTA",
    "electionZone": "20",
    "stateCode": "PR"
  },
  {
    "city": "BOCAIÚVA DO SUL",
    "electionZone": "48",
    "stateCode": "PR"
  },
  {
    "city": "PITANGUEIRAS",
    "electionZone": "59",
    "stateCode": "PR"
  },
  {
    "city": "GOIOERÊ",
    "electionZone": "92",
    "stateCode": "PR"
  },
  {
    "city": "NOVA FÁTIMA",
    "electionZone": "108",
    "stateCode": "PR"
  },
  {
    "city": "MANOEL RIBAS",
    "electionZone": "196",
    "stateCode": "PR"
  },
  {
    "city": "PONTA GROSSA",
    "electionZone": "15",
    "stateCode": "PR"
  },
  {
    "city": "PONTA GROSSA",
    "electionZone": "197",
    "stateCode": "PR"
  },
  {
    "city": "FERNANDES PINHEIRO",
    "electionZone": "53",
    "stateCode": "PR"
  },
  {
    "city": "MARINGÁ",
    "electionZone": "193",
    "stateCode": "PR"
  },
  {
    "city": "SALTO DO ITARARÉ",
    "electionZone": "21",
    "stateCode": "PR"
  },
  {
    "city": "FLOR DA SERRA DO SUL",
    "electionZone": "131",
    "stateCode": "PR"
  },
  {
    "city": "JESUÍTAS",
    "electionZone": "120",
    "stateCode": "PR"
  },
  {
    "city": "SANTA INÊS",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "ALTO PARANÁ",
    "electionZone": "87",
    "stateCode": "PR"
  },
  {
    "city": "INDIANÓPOLIS",
    "electionZone": "149",
    "stateCode": "PR"
  },
  {
    "city": "SANTA MÔNICA",
    "electionZone": "94",
    "stateCode": "PR"
  },
  {
    "city": "MIRADOR",
    "electionZone": "100",
    "stateCode": "PR"
  },
  {
    "city": "BRAGANEY",
    "electionZone": "126",
    "stateCode": "PR"
  },
  {
    "city": "MARIPÁ",
    "electionZone": "124",
    "stateCode": "PR"
  },
  {
    "city": "RESERVA DO IGUAÇU",
    "electionZone": "160",
    "stateCode": "PR"
  },
  {
    "city": "SANTA CECÍLIA DO PAVÃO",
    "electionZone": "63",
    "stateCode": "PR"
  },
  {
    "city": "SANTA ISABEL DO IVAÍ",
    "electionZone": "94",
    "stateCode": "PR"
  },
  {
    "city": "ANTONINA",
    "electionZone": "6",
    "stateCode": "PR"
  },
  {
    "city": "SÃO SEBASTIÃO DA AMOREIRA",
    "electionZone": "35",
    "stateCode": "PR"
  },
  {
    "city": "BOM JESUS DO SUL",
    "electionZone": "131",
    "stateCode": "PR"
  },
  {
    "city": "ROSÁRIO DO IVAÍ",
    "electionZone": "136",
    "stateCode": "PR"
  },
  {
    "city": "PATO BRAGADO",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "PINHAIS",
    "electionZone": "188",
    "stateCode": "PR"
  },
  {
    "city": "PRESIDENTE CASTELO BRANCO",
    "electionZone": "71",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOÃO DO CAIUÁ",
    "electionZone": "87",
    "stateCode": "PR"
  },
  {
    "city": "XAMBRÊ",
    "electionZone": "117",
    "stateCode": "PR"
  },
  {
    "city": "NOVA OLÍMPIA",
    "electionZone": "127",
    "stateCode": "PR"
  },
  {
    "city": "BRASILÂNDIA DO SUL",
    "electionZone": "128",
    "stateCode": "PR"
  },
  {
    "city": "VERÊ",
    "electionZone": "115",
    "stateCode": "PR"
  },
  {
    "city": "PALMITAL",
    "electionZone": "134",
    "stateCode": "PR"
  },
  {
    "city": "SANTA HELENA",
    "electionZone": "129",
    "stateCode": "PR"
  },
  {
    "city": "NOVA ALIANÇA DO IVAÍ",
    "electionZone": "138",
    "stateCode": "PR"
  },
  {
    "city": "RANCHO ALEGRE D'OESTE",
    "electionZone": "92",
    "stateCode": "PR"
  },
  {
    "city": "NOVA CANTU",
    "electionZone": "169",
    "stateCode": "PR"
  },
  {
    "city": "ESPIGÃO ALTO DO IGUAÇU",
    "electionZone": "163",
    "stateCode": "PR"
  },
  {
    "city": "ARAPONGAS",
    "electionZone": "180",
    "stateCode": "PR"
  },
  {
    "city": "TUNAS DO PARANÁ",
    "electionZone": "48",
    "stateCode": "PR"
  },
  {
    "city": "NOVO ITACOLOMI",
    "electionZone": "150",
    "stateCode": "PR"
  },
  {
    "city": "TEIXEIRA SOARES",
    "electionZone": "53",
    "stateCode": "PR"
  },
  {
    "city": "IMBITUVA",
    "electionZone": "29",
    "stateCode": "PR"
  },
  {
    "city": "PIRAÍ DO SUL",
    "electionZone": "27",
    "stateCode": "PR"
  },
  {
    "city": "CHOPINZINHO",
    "electionZone": "103",
    "stateCode": "PR"
  },
  {
    "city": "ITAIPULÂNDIA",
    "electionZone": "122",
    "stateCode": "PR"
  },
  {
    "city": "LARANJAL",
    "electionZone": "134",
    "stateCode": "PR"
  },
  {
    "city": "CANTAGALO",
    "electionZone": "203",
    "stateCode": "PR"
  },
  {
    "city": "TAMBOARA",
    "electionZone": "138",
    "stateCode": "PR"
  },
  {
    "city": "TRÊS BARRAS DO PARANÁ",
    "electionZone": "166",
    "stateCode": "PR"
  },
  {
    "city": "LEÓPOLIS",
    "electionZone": "26",
    "stateCode": "PR"
  },
  {
    "city": "COLOMBO",
    "electionZone": "49",
    "stateCode": "PR"
  },
  {
    "city": "CORUMBATAÍ DO SUL",
    "electionZone": "133",
    "stateCode": "PR"
  },
  {
    "city": "MALLET",
    "electionZone": "37",
    "stateCode": "PR"
  },
  {
    "city": "SAUDADE DO IGUAÇU",
    "electionZone": "103",
    "stateCode": "PR"
  },
  {
    "city": "ITAMBÉ",
    "electionZone": "81",
    "stateCode": "PR"
  },
  {
    "city": "IVATUBA",
    "electionZone": "154",
    "stateCode": "PR"
  },
  {
    "city": "LUNARDELLI",
    "electionZone": "132",
    "stateCode": "PR"
  },
  {
    "city": "LIDIANÓPOLIS",
    "electionZone": "152",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOÃO",
    "electionZone": "103",
    "stateCode": "PR"
  },
  {
    "city": "BELA VISTA DO PARAÍSO",
    "electionZone": "77",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOÃO DO TRIUNFO",
    "electionZone": "52",
    "stateCode": "PR"
  },
  {
    "city": "CLEVELÂNDIA",
    "electionZone": "47",
    "stateCode": "PR"
  },
  {
    "city": "TOLEDO",
    "electionZone": "148",
    "stateCode": "PR"
  },
  {
    "city": "TOLEDO",
    "electionZone": "75",
    "stateCode": "PR"
  },
  {
    "city": "ADRIANÓPOLIS",
    "electionZone": "48",
    "stateCode": "PR"
  },
  {
    "city": "ALTO PARAÍSO",
    "electionZone": "172",
    "stateCode": "PR"
  },
  {
    "city": "LAPA",
    "electionZone": "10",
    "stateCode": "PR"
  },
  {
    "city": "MARQUINHO",
    "electionZone": "45",
    "stateCode": "PR"
  },
  {
    "city": "RESERVA",
    "electionZone": "39",
    "stateCode": "PR"
  },
  {
    "city": "TURVO",
    "electionZone": "44",
    "stateCode": "PR"
  },
  {
    "city": "CRUZEIRO DO SUL",
    "electionZone": "91",
    "stateCode": "PR"
  },
  {
    "city": "TAPEJARA",
    "electionZone": "86",
    "stateCode": "PR"
  },
  {
    "city": "ABATIÁ",
    "electionZone": "82",
    "stateCode": "PR"
  },
  {
    "city": "REBOUÇAS",
    "electionZone": "62",
    "stateCode": "PR"
  },
  {
    "city": "CASCAVEL",
    "electionZone": "68",
    "stateCode": "PR"
  },
  {
    "city": "ITAMBARACÁ",
    "electionZone": "57",
    "stateCode": "PR"
  },
  {
    "city": "CAMBIRA",
    "electionZone": "150",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOÃO DO IVAÍ",
    "electionZone": "132",
    "stateCode": "PR"
  },
  {
    "city": "JAPIRA",
    "electionZone": "79",
    "stateCode": "PR"
  },
  {
    "city": "IBEMA",
    "electionZone": "166",
    "stateCode": "PR"
  },
  {
    "city": "PRADO FERREIRA",
    "electionZone": "65",
    "stateCode": "PR"
  },
  {
    "city": "ITAÚNA DO SUL",
    "electionZone": "96",
    "stateCode": "PR"
  },
  {
    "city": "QUITANDINHA",
    "electionZone": "11",
    "stateCode": "PR"
  },
  {
    "city": "TELÊMACO BORBA",
    "electionZone": "111",
    "stateCode": "PR"
  },
  {
    "city": "GUAPOREMA",
    "electionZone": "127",
    "stateCode": "PR"
  },
  {
    "city": "JACAREZINHO",
    "electionZone": "24",
    "stateCode": "PR"
  },
  {
    "city": "SANTA FÉ",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "JANDAIA DO SUL",
    "electionZone": "70",
    "stateCode": "PR"
  },
  {
    "city": "RIO AZUL",
    "electionZone": "62",
    "stateCode": "PR"
  },
  {
    "city": "PARAÍSO DO NORTE",
    "electionZone": "100",
    "stateCode": "PR"
  },
  {
    "city": "ANAHY",
    "electionZone": "126",
    "stateCode": "PR"
  },
  {
    "city": "JURANDA",
    "electionZone": "98",
    "stateCode": "PR"
  },
  {
    "city": "SANTA AMÉLIA",
    "electionZone": "58",
    "stateCode": "PR"
  },
  {
    "city": "ARAUCÁRIA",
    "electionZone": "50",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JORGE DO PATROCÍNIO",
    "electionZone": "123",
    "stateCode": "PR"
  },
  {
    "city": "SANTA IZABEL DO OESTE",
    "electionZone": "130",
    "stateCode": "PR"
  },
  {
    "city": "TOMAZINA",
    "electionZone": "19",
    "stateCode": "PR"
  },
  {
    "city": "TAPIRA",
    "electionZone": "127",
    "stateCode": "PR"
  },
  {
    "city": "TERRA RICA",
    "electionZone": "105",
    "stateCode": "PR"
  },
  {
    "city": "ENTRE RIOS DO OESTE",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO DO TENENTE",
    "electionZone": "11",
    "stateCode": "PR"
  },
  {
    "city": "SÃO MIGUEL DO IGUAÇU",
    "electionZone": "122",
    "stateCode": "PR"
  },
  {
    "city": "CAMPINA DA LAGOA",
    "electionZone": "169",
    "stateCode": "PR"
  },
  {
    "city": "ASSAÍ",
    "electionZone": "35",
    "stateCode": "PR"
  },
  {
    "city": "DIAMANTE DO SUL",
    "electionZone": "112",
    "stateCode": "PR"
  },
  {
    "city": "CARLÓPOLIS",
    "electionZone": "56",
    "stateCode": "PR"
  },
  {
    "city": "PAULA FREITAS",
    "electionZone": "33",
    "stateCode": "PR"
  },
  {
    "city": "CALIFÓRNIA",
    "electionZone": "76",
    "stateCode": "PR"
  },
  {
    "city": "RIO BONITO DO IGUAÇU",
    "electionZone": "45",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "175",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "177",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "145",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "1",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "174",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "4",
    "stateCode": "PR"
  },
  {
    "city": "MARECHAL CÂNDIDO RONDON",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "PINHÃO",
    "electionZone": "160",
    "stateCode": "PR"
  },
  {
    "city": "MARIALVA",
    "electionZone": "81",
    "stateCode": "PR"
  },
  {
    "city": "ARAPUÃ",
    "electionZone": "93",
    "stateCode": "PR"
  },
  {
    "city": "SANTA TEREZINHA DE ITAIPU",
    "electionZone": "205",
    "stateCode": "PR"
  },
  {
    "city": "CONGONHINHAS",
    "electionZone": "99",
    "stateCode": "PR"
  },
  {
    "city": "GUAÍRA",
    "electionZone": "90",
    "stateCode": "PR"
  },
  {
    "city": "INAJÁ",
    "electionZone": "91",
    "stateCode": "PR"
  },
  {
    "city": "NOVA AMÉRICA DA COLINA",
    "electionZone": "35",
    "stateCode": "PR"
  },
  {
    "city": "VIRMOND",
    "electionZone": "203",
    "stateCode": "PR"
  },
  {
    "city": "FAZENDA RIO GRANDE",
    "electionZone": "144",
    "stateCode": "PR"
  },
  {
    "city": "SÃO CARLOS DO IVAÍ",
    "electionZone": "100",
    "stateCode": "PR"
  },
  {
    "city": "PAULO FRONTIN",
    "electionZone": "37",
    "stateCode": "PR"
  },
  {
    "city": "ARARUNA",
    "electionZone": "74",
    "stateCode": "PR"
  },
  {
    "city": "GUAIRAÇÁ",
    "electionZone": "105",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO MOURÃO",
    "electionZone": "31",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO MOURÃO",
    "electionZone": "183",
    "stateCode": "PR"
  },
  {
    "city": "COLOMBO",
    "electionZone": "186",
    "stateCode": "PR"
  },
  {
    "city": "CERRO AZUL",
    "electionZone": "7",
    "stateCode": "PR"
  },
  {
    "city": "RIO BRANCO DO SUL",
    "electionZone": "156",
    "stateCode": "PR"
  },
  {
    "city": "MARIA HELENA",
    "electionZone": "142",
    "stateCode": "PR"
  },
  {
    "city": "MARINGÁ",
    "electionZone": "66",
    "stateCode": "PR"
  },
  {
    "city": "MARINGÁ",
    "electionZone": "192",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JERÔNIMO DA SERRA",
    "electionZone": "63",
    "stateCode": "PR"
  },
  {
    "city": "MARINGÁ",
    "electionZone": "154",
    "stateCode": "PR"
  },
  {
    "city": "QUEDAS DO IGUAÇU",
    "electionZone": "163",
    "stateCode": "PR"
  },
  {
    "city": "GRANDES RIOS",
    "electionZone": "136",
    "stateCode": "PR"
  },
  {
    "city": "QUATIGUÁ",
    "electionZone": "55",
    "stateCode": "PR"
  },
  {
    "city": "SANTO ANTÔNIO DO PARAÍSO",
    "electionZone": "99",
    "stateCode": "PR"
  },
  {
    "city": "RIBEIRÃO CLARO",
    "electionZone": "23",
    "stateCode": "PR"
  },
  {
    "city": "SIQUEIRA CAMPOS",
    "electionZone": "21",
    "stateCode": "PR"
  },
  {
    "city": "APUCARANA",
    "electionZone": "179",
    "stateCode": "PR"
  },
  {
    "city": "APUCARANA",
    "electionZone": "150",
    "stateCode": "PR"
  },
  {
    "city": "OURIZONA",
    "electionZone": "102",
    "stateCode": "PR"
  },
  {
    "city": "ALTÔNIA",
    "electionZone": "123",
    "stateCode": "PR"
  },
  {
    "city": "PALOTINA",
    "electionZone": "124",
    "stateCode": "PR"
  },
  {
    "city": "TUNEIRAS DO OESTE",
    "electionZone": "86",
    "stateCode": "PR"
  },
  {
    "city": "DOUTOR CAMARGO",
    "electionZone": "193",
    "stateCode": "PR"
  },
  {
    "city": "PINHALÃO",
    "electionZone": "19",
    "stateCode": "PR"
  },
  {
    "city": "CASCAVEL",
    "electionZone": "185",
    "stateCode": "PR"
  },
  {
    "city": "JAGUARIAÍVA",
    "electionZone": "18",
    "stateCode": "PR"
  },
  {
    "city": "CARAMBEÍ",
    "electionZone": "16",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO LARGO",
    "electionZone": "9",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO LARGO",
    "electionZone": "182",
    "stateCode": "PR"
  },
  {
    "city": "IVAIPORÃ",
    "electionZone": "93",
    "stateCode": "PR"
  },
  {
    "city": "RANCHO ALEGRE",
    "electionZone": "84",
    "stateCode": "PR"
  },
  {
    "city": "JARDIM ALEGRE",
    "electionZone": "152",
    "stateCode": "PR"
  },
  {
    "city": "PRUDENTÓPOLIS",
    "electionZone": "30",
    "stateCode": "PR"
  },
  {
    "city": "CAPITÃO LEÔNIDAS MARQUES",
    "electionZone": "165",
    "stateCode": "PR"
  },
  {
    "city": "CONTENDA",
    "electionZone": "10",
    "stateCode": "PR"
  },
  {
    "city": "SAPOPEMA",
    "electionZone": "119",
    "stateCode": "PR"
  },
  {
    "city": "GOIOXIM",
    "electionZone": "203",
    "stateCode": "PR"
  },
  {
    "city": "BOA VENTURA DE SÃO ROQUE",
    "electionZone": "38",
    "stateCode": "PR"
  },
  {
    "city": "PARANACITY",
    "electionZone": "91",
    "stateCode": "PR"
  },
  {
    "city": "CASCAVEL",
    "electionZone": "143",
    "stateCode": "PR"
  },
  {
    "city": "AMPÉRE",
    "electionZone": "130",
    "stateCode": "PR"
  },
  {
    "city": "PARANAPOEMA",
    "electionZone": "91",
    "stateCode": "PR"
  },
  {
    "city": "JARDIM OLINDA",
    "electionZone": "91",
    "stateCode": "PR"
  },
  {
    "city": "FÊNIX",
    "electionZone": "116",
    "stateCode": "PR"
  },
  {
    "city": "CIDADE GAÚCHA",
    "electionZone": "127",
    "stateCode": "PR"
  },
  {
    "city": "MANDIRITUBA",
    "electionZone": "144",
    "stateCode": "PR"
  },
  {
    "city": "APUCARANA",
    "electionZone": "28",
    "stateCode": "PR"
  },
  {
    "city": "PRIMEIRO DE MAIO",
    "electionZone": "104",
    "stateCode": "PR"
  },
  {
    "city": "QUARTO CENTENÁRIO",
    "electionZone": "92",
    "stateCode": "PR"
  },
  {
    "city": "CIANORTE",
    "electionZone": "88",
    "stateCode": "PR"
  },
  {
    "city": "CAMPINA GRANDE DO SUL",
    "electionZone": "195",
    "stateCode": "PR"
  },
  {
    "city": "QUINTA DO SOL",
    "electionZone": "116",
    "stateCode": "PR"
  },
  {
    "city": "ITAPERUÇU",
    "electionZone": "156",
    "stateCode": "PR"
  },
  {
    "city": "PRANCHITA",
    "electionZone": "83",
    "stateCode": "PR"
  },
  {
    "city": "PONTA GROSSA",
    "electionZone": "198",
    "stateCode": "PR"
  },
  {
    "city": "AGUDOS DO SUL",
    "electionZone": "144",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "3",
    "stateCode": "PR"
  },
  {
    "city": "ALVORADA DO SUL",
    "electionZone": "77",
    "stateCode": "PR"
  },
  {
    "city": "MARINGÁ",
    "electionZone": "137",
    "stateCode": "PR"
  },
  {
    "city": "CASTRO",
    "electionZone": "16",
    "stateCode": "PR"
  },
  {
    "city": "PALMEIRA",
    "electionZone": "13",
    "stateCode": "PR"
  },
  {
    "city": "SANTANA DO ITARARÉ",
    "electionZone": "20",
    "stateCode": "PR"
  },
  {
    "city": "IBIPORÃ",
    "electionZone": "80",
    "stateCode": "PR"
  },
  {
    "city": "PARANAGUÁ",
    "electionZone": "158",
    "stateCode": "PR"
  },
  {
    "city": "ASSIS CHATEAUBRIAND",
    "electionZone": "113",
    "stateCode": "PR"
  },
  {
    "city": "JATAIZINHO",
    "electionZone": "84",
    "stateCode": "PR"
  },
  {
    "city": "PEABIRU",
    "electionZone": "74",
    "stateCode": "PR"
  },
  {
    "city": "MOREIRA SALES",
    "electionZone": "92",
    "stateCode": "PR"
  },
  {
    "city": "ROLÂNDIA",
    "electionZone": "59",
    "stateCode": "PR"
  },
  {
    "city": "ARAPONGAS",
    "electionZone": "61",
    "stateCode": "PR"
  },
  {
    "city": "CAMBARÁ",
    "electionZone": "25",
    "stateCode": "PR"
  },
  {
    "city": "MORRETES",
    "electionZone": "51",
    "stateCode": "PR"
  },
  {
    "city": "BOM SUCESSO",
    "electionZone": "70",
    "stateCode": "PR"
  },
  {
    "city": "ENÉAS MARQUES",
    "electionZone": "140",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "2",
    "stateCode": "PR"
  },
  {
    "city": "TERRA ROXA",
    "electionZone": "125",
    "stateCode": "PR"
  },
  {
    "city": "FOZ DO JORDÃO",
    "electionZone": "44",
    "stateCode": "PR"
  },
  {
    "city": "CÂNDIDO DE ABREU",
    "electionZone": "106",
    "stateCode": "PR"
  },
  {
    "city": "SERTANÓPOLIS",
    "electionZone": "40",
    "stateCode": "PR"
  },
  {
    "city": "PARANAVAÍ",
    "electionZone": "138",
    "stateCode": "PR"
  },
  {
    "city": "PARANAVAÍ",
    "electionZone": "72",
    "stateCode": "PR"
  },
  {
    "city": "PAIÇANDU",
    "electionZone": "154",
    "stateCode": "PR"
  },
  {
    "city": "TERRA BOA",
    "electionZone": "173",
    "stateCode": "PR"
  },
  {
    "city": "VITORINO",
    "electionZone": "151",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOSÉ DOS PINHAIS",
    "electionZone": "199",
    "stateCode": "PR"
  },
  {
    "city": "CORONEL DOMINGOS SOARES",
    "electionZone": "32",
    "stateCode": "PR"
  },
  {
    "city": "NOVA AURORA",
    "electionZone": "120",
    "stateCode": "PR"
  },
  {
    "city": "PIÊN",
    "electionZone": "11",
    "stateCode": "PR"
  },
  {
    "city": "IPIRANGA",
    "electionZone": "36",
    "stateCode": "PR"
  },
  {
    "city": "CANDÓI",
    "electionZone": "44",
    "stateCode": "PR"
  },
  {
    "city": "PEROBAL",
    "electionZone": "142",
    "stateCode": "PR"
  },
  {
    "city": "FOZ DO IGUAÇU",
    "electionZone": "147",
    "stateCode": "PR"
  },
  {
    "city": "MAMBORÊ",
    "electionZone": "170",
    "stateCode": "PR"
  },
  {
    "city": "PIRAQUARA",
    "electionZone": "155",
    "stateCode": "PR"
  },
  {
    "city": "CORNÉLIO PROCÓPIO",
    "electionZone": "26",
    "stateCode": "PR"
  },
  {
    "city": "CORONEL VIVIDA",
    "electionZone": "101",
    "stateCode": "PR"
  },
  {
    "city": "SANTA MARIANA",
    "electionZone": "109",
    "stateCode": "PR"
  },
  {
    "city": "GUARANIAÇU",
    "electionZone": "112",
    "stateCode": "PR"
  },
  {
    "city": "FAXINAL",
    "electionZone": "110",
    "stateCode": "PR"
  },
  {
    "city": "FLORESTA",
    "electionZone": "192",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOSÉ DOS PINHAIS",
    "electionZone": "8",
    "stateCode": "PR"
  },
  {
    "city": "NOVA PRATA DO IGUAÇU",
    "electionZone": "162",
    "stateCode": "PR"
  },
  {
    "city": "FRANCISCO BELTRÃO",
    "electionZone": "69",
    "stateCode": "PR"
  },
  {
    "city": "PITANGA",
    "electionZone": "38",
    "stateCode": "PR"
  },
  {
    "city": "JUSSARA",
    "electionZone": "149",
    "stateCode": "PR"
  },
  {
    "city": "PALMAS",
    "electionZone": "32",
    "stateCode": "PR"
  },
  {
    "city": "ORTIGUEIRA",
    "electionZone": "167",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "178",
    "stateCode": "PR"
  },
  {
    "city": "CURITIBA",
    "electionZone": "176",
    "stateCode": "PR"
  },
  {
    "city": "BITURUNA",
    "electionZone": "153",
    "stateCode": "PR"
  },
  {
    "city": "RONCADOR",
    "electionZone": "141",
    "stateCode": "PR"
  },
  {
    "city": "JUNDIAÍ DO SUL",
    "electionZone": "82",
    "stateCode": "PR"
  },
  {
    "city": "CRUZ MACHADO",
    "electionZone": "153",
    "stateCode": "PR"
  },
  {
    "city": "FORMOSA DO OESTE",
    "electionZone": "120",
    "stateCode": "PR"
  },
  {
    "city": "MUNHOZ DE MELO",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "UMUARAMA",
    "electionZone": "202",
    "stateCode": "PR"
  },
  {
    "city": "BARBOSA FERRAZ",
    "electionZone": "133",
    "stateCode": "PR"
  },
  {
    "city": "PÉROLA",
    "electionZone": "135",
    "stateCode": "PR"
  },
  {
    "city": "IGUARAÇU",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "SALGADO FILHO",
    "electionZone": "131",
    "stateCode": "PR"
  },
  {
    "city": "CAFEZAL DO SUL",
    "electionZone": "97",
    "stateCode": "PR"
  },
  {
    "city": "ICARAÍMA",
    "electionZone": "172",
    "stateCode": "PR"
  },
  {
    "city": "MAUÁ DA SERRA",
    "electionZone": "76",
    "stateCode": "PR"
  },
  {
    "city": "QUATRO BARRAS",
    "electionZone": "195",
    "stateCode": "PR"
  },
  {
    "city": "RIO NEGRO",
    "electionZone": "11",
    "stateCode": "PR"
  },
  {
    "city": "LARANJEIRAS DO SUL",
    "electionZone": "45",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO MAGRO",
    "electionZone": "171",
    "stateCode": "PR"
  },
  {
    "city": "IPORÃ",
    "electionZone": "97",
    "stateCode": "PR"
  },
  {
    "city": "DOIS VIZINHOS",
    "electionZone": "115",
    "stateCode": "PR"
  },
  {
    "city": "ATALAIA",
    "electionZone": "71",
    "stateCode": "PR"
  },
  {
    "city": "PATO BRANCO",
    "electionZone": "73",
    "stateCode": "PR"
  },
  {
    "city": "GENERAL CARNEIRO",
    "electionZone": "153",
    "stateCode": "PR"
  },
  {
    "city": "BARRACÃO",
    "electionZone": "131",
    "stateCode": "PR"
  },
  {
    "city": "ALMIRANTE TAMANDARÉ",
    "electionZone": "171",
    "stateCode": "PR"
  },
  {
    "city": "PARANAGUÁ",
    "electionZone": "5",
    "stateCode": "PR"
  },
  {
    "city": "CAMBÉ",
    "electionZone": "181",
    "stateCode": "PR"
  },
  {
    "city": "MANGUEIRINHA",
    "electionZone": "168",
    "stateCode": "PR"
  },
  {
    "city": "NOVA LONDRINA",
    "electionZone": "96",
    "stateCode": "PR"
  },
  {
    "city": "MEDIANEIRA",
    "electionZone": "114",
    "stateCode": "PR"
  },
  {
    "city": "DIAMANTE D'OESTE",
    "electionZone": "129",
    "stateCode": "PR"
  },
  {
    "city": "VERA CRUZ DO OESTE",
    "electionZone": "118",
    "stateCode": "PR"
  },
  {
    "city": "FAROL",
    "electionZone": "31",
    "stateCode": "PR"
  },
  {
    "city": "ALTO PIQUIRI",
    "electionZone": "128",
    "stateCode": "PR"
  },
  {
    "city": "FRANCISCO ALVES",
    "electionZone": "97",
    "stateCode": "PR"
  },
  {
    "city": "TIBAGI",
    "electionZone": "17",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JORGE D'OESTE",
    "electionZone": "115",
    "stateCode": "PR"
  },
  {
    "city": "SÃO TOMÉ",
    "electionZone": "149",
    "stateCode": "PR"
  },
  {
    "city": "MANDAGUARI",
    "electionZone": "60",
    "stateCode": "PR"
  },
  {
    "city": "FOZ DO IGUAÇU",
    "electionZone": "205",
    "stateCode": "PR"
  },
  {
    "city": "UNIÃO DA VITÓRIA",
    "electionZone": "33",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "189",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "41",
    "stateCode": "PR"
  },
  {
    "city": "FOZ DO IGUAÇU",
    "electionZone": "204",
    "stateCode": "PR"
  },
  {
    "city": "MARILENA",
    "electionZone": "96",
    "stateCode": "PR"
  },
  {
    "city": "LOBATO",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "UBIRATÃ",
    "electionZone": "98",
    "stateCode": "PR"
  },
  {
    "city": "SANTA MARIA DO OESTE",
    "electionZone": "38",
    "stateCode": "PR"
  },
  {
    "city": "ANDIRÁ",
    "electionZone": "57",
    "stateCode": "PR"
  },
  {
    "city": "SANTA TEREZA DO OESTE",
    "electionZone": "68",
    "stateCode": "PR"
  },
  {
    "city": "IMBAÚ",
    "electionZone": "111",
    "stateCode": "PR"
  },
  {
    "city": "LUPIONÓPOLIS",
    "electionZone": "159",
    "stateCode": "PR"
  },
  {
    "city": "IRACEMA DO OESTE",
    "electionZone": "120",
    "stateCode": "PR"
  },
  {
    "city": "PONTA GROSSA",
    "electionZone": "14",
    "stateCode": "PR"
  },
  {
    "city": "PONTAL DO PARANÁ",
    "electionZone": "194",
    "stateCode": "PR"
  },
  {
    "city": "FOZ DO IGUAÇU",
    "electionZone": "46",
    "stateCode": "PR"
  },
  {
    "city": "CASCAVEL",
    "electionZone": "184",
    "stateCode": "PR"
  },
  {
    "city": "RAMILÂNDIA",
    "electionZone": "118",
    "stateCode": "PR"
  },
  {
    "city": "IBAITI",
    "electionZone": "79",
    "stateCode": "PR"
  },
  {
    "city": "LONDRINA",
    "electionZone": "191",
    "stateCode": "PR"
  },
  {
    "city": "TOLEDO",
    "electionZone": "201",
    "stateCode": "PR"
  },
  {
    "city": "CAMBÉ",
    "electionZone": "78",
    "stateCode": "PR"
  },
  {
    "city": "BANDEIRANTES",
    "electionZone": "58",
    "stateCode": "PR"
  },
  {
    "city": "CENTENÁRIO DO SUL",
    "electionZone": "159",
    "stateCode": "PR"
  },
  {
    "city": "PLANALTINA DO PARANÁ",
    "electionZone": "94",
    "stateCode": "PR"
  },
  {
    "city": "GUAPIRAMA",
    "electionZone": "55",
    "stateCode": "PR"
  },
  {
    "city": "HONÓRIO SERPA",
    "electionZone": "168",
    "stateCode": "PR"
  },
  {
    "city": "ALTAMIRA DO PARANÁ",
    "electionZone": "169",
    "stateCode": "PR"
  },
  {
    "city": "GUARAPUAVA",
    "electionZone": "43",
    "stateCode": "PR"
  },
  {
    "city": "MATELÂNDIA",
    "electionZone": "118",
    "stateCode": "PR"
  },
  {
    "city": "MARILUZ",
    "electionZone": "86",
    "stateCode": "PR"
  },
  {
    "city": "FIGUEIRA",
    "electionZone": "119",
    "stateCode": "PR"
  },
  {
    "city": "ENGENHEIRO BELTRÃO",
    "electionZone": "116",
    "stateCode": "PR"
  },
  {
    "city": "SANTO ANTÔNIO DA PLATINA",
    "electionZone": "22",
    "stateCode": "PR"
  },
  {
    "city": "TIJUCAS DO SUL",
    "electionZone": "199",
    "stateCode": "PR"
  },
  {
    "city": "TUPÃSSI",
    "electionZone": "113",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JOSÉ DAS PALMEIRAS",
    "electionZone": "129",
    "stateCode": "PR"
  },
  {
    "city": "TAMARANA",
    "electionZone": "146",
    "stateCode": "PR"
  },
  {
    "city": "RENASCENÇA",
    "electionZone": "140",
    "stateCode": "PR"
  },
  {
    "city": "IGUATU",
    "electionZone": "126",
    "stateCode": "PR"
  },
  {
    "city": "BARRA DO JACARÉ",
    "electionZone": "57",
    "stateCode": "PR"
  },
  {
    "city": "LUIZIANA",
    "electionZone": "31",
    "stateCode": "PR"
  },
  {
    "city": "BORRAZÓPOLIS",
    "electionZone": "110",
    "stateCode": "PR"
  },
  {
    "city": "PÉROLA D'OESTE",
    "electionZone": "107",
    "stateCode": "PR"
  },
  {
    "city": "BOA ESPERANÇA",
    "electionZone": "170",
    "stateCode": "PR"
  },
  {
    "city": "CAFELÂNDIA",
    "electionZone": "126",
    "stateCode": "PR"
  },
  {
    "city": "COLORADO",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "CÉU AZUL",
    "electionZone": "118",
    "stateCode": "PR"
  },
  {
    "city": "DOUTOR ULYSSES",
    "electionZone": "7",
    "stateCode": "PR"
  },
  {
    "city": "LOANDA",
    "electionZone": "85",
    "stateCode": "PR"
  },
  {
    "city": "PLANALTO",
    "electionZone": "107",
    "stateCode": "PR"
  },
  {
    "city": "RIBEIRÃO DO PINHAL",
    "electionZone": "82",
    "stateCode": "PR"
  },
  {
    "city": "MANDAGUAÇU",
    "electionZone": "102",
    "stateCode": "PR"
  },
  {
    "city": "ÂNGULO",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "MISSAL",
    "electionZone": "114",
    "stateCode": "PR"
  },
  {
    "city": "BOA VISTA DA APARECIDA",
    "electionZone": "165",
    "stateCode": "PR"
  },
  {
    "city": "VENTANIA",
    "electionZone": "17",
    "stateCode": "PR"
  },
  {
    "city": "GUARAPUAVA",
    "electionZone": "44",
    "stateCode": "PR"
  },
  {
    "city": "UNIFLOR",
    "electionZone": "71",
    "stateCode": "PR"
  },
  {
    "city": "IVATÉ",
    "electionZone": "172",
    "stateCode": "PR"
  },
  {
    "city": "ARAPOTI",
    "electionZone": "164",
    "stateCode": "PR"
  },
  {
    "city": "CATANDUVAS",
    "electionZone": "166",
    "stateCode": "PR"
  },
  {
    "city": "CRUZEIRO DO IGUAÇU",
    "electionZone": "115",
    "stateCode": "PR"
  },
  {
    "city": "SANTO INÁCIO",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "BOM SUCESSO DO SUL",
    "electionZone": "73",
    "stateCode": "PR"
  },
  {
    "city": "NOVA SANTA ROSA",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "GUARAQUEÇABA",
    "electionZone": "6",
    "stateCode": "PR"
  },
  {
    "city": "PORECATU",
    "electionZone": "65",
    "stateCode": "PR"
  },
  {
    "city": "SÃO PEDRO DO PARANÁ",
    "electionZone": "85",
    "stateCode": "PR"
  },
  {
    "city": "ANTONIO OLINTO",
    "electionZone": "12",
    "stateCode": "PR"
  },
  {
    "city": "JAGUAPITÃ",
    "electionZone": "64",
    "stateCode": "PR"
  },
  {
    "city": "MARIÓPOLIS",
    "electionZone": "47",
    "stateCode": "PR"
  },
  {
    "city": "SÃO JORGE DO IVAÍ",
    "electionZone": "102",
    "stateCode": "PR"
  },
  {
    "city": "CAPANEMA",
    "electionZone": "107",
    "stateCode": "PR"
  },
  {
    "city": "JANIÓPOLIS",
    "electionZone": "183",
    "stateCode": "PR"
  },
  {
    "city": "CAMPO BONITO",
    "electionZone": "112",
    "stateCode": "PR"
  },
  {
    "city": "NOVA ESPERANÇA DO SUDOESTE",
    "electionZone": "162",
    "stateCode": "PR"
  },
  {
    "city": "MARILÂNDIA DO SUL",
    "electionZone": "76",
    "stateCode": "PR"
  },
  {
    "city": "INÁCIO MARTINS",
    "electionZone": "34",
    "stateCode": "PR"
  },
  {
    "city": "ESPERANÇA NOVA",
    "electionZone": "135",
    "stateCode": "PR"
  },
  {
    "city": "QUATRO PONTES",
    "electionZone": "121",
    "stateCode": "PR"
  },
  {
    "city": "KALORÉ",
    "electionZone": "70",
    "stateCode": "PR"
  },
  {
    "city": "CURIÚVA",
    "electionZone": "119",
    "stateCode": "PR"
  },
  {
    "city": "REALEZA",
    "electionZone": "130",
    "stateCode": "PR"
  },
  {
    "city": "SÃO PEDRO DO IVAÍ",
    "electionZone": "70",
    "stateCode": "PR"
  },
  {
    "city": "URAÍ",
    "electionZone": "84",
    "stateCode": "PR"
  },
  {
    "city": "NOVA LARANJEIRAS",
    "electionZone": "45",
    "stateCode": "PR"
  },
  {
    "city": "SANTA CRUZ DE MONTE CASTELO",
    "electionZone": "85",
    "stateCode": "PR"
  },
  {
    "city": "NOVA TEBAS",
    "electionZone": "196",
    "stateCode": "PR"
  },
  {
    "city": "JOAQUIM TÁVORA",
    "electionZone": "55",
    "stateCode": "PR"
  },
  {
    "city": "IRATI",
    "electionZone": "34",
    "stateCode": "PR"
  },
  {
    "city": "MANFRINÓPOLIS",
    "electionZone": "131",
    "stateCode": "PR"
  },
  {
    "city": "JAPURÁ",
    "electionZone": "149",
    "stateCode": "PR"
  },
  {
    "city": "SANTO ANTONIO DO CAIUÁ",
    "electionZone": "87",
    "stateCode": "PR"
  },
  {
    "city": "ITAGUAJÉ",
    "electionZone": "95",
    "stateCode": "PR"
  },
  {
    "city": "IRETAMA",
    "electionZone": "141",
    "stateCode": "PR"
  },
  {
    "city": "MARMELEIRO",
    "electionZone": "140",
    "stateCode": "PR"
  },
  {
    "city": "UMUARAMA",
    "electionZone": "89",
    "stateCode": "PR"
  },
  {
    "city": "ASTORGA",
    "electionZone": "67",
    "stateCode": "PR"
  },
  {
    "city": "PORTO BARREIRO",
    "electionZone": "45",
    "stateCode": "PR"
  },
  {
    "city": "RIO BOM",
    "electionZone": "76",
    "stateCode": "PR"
  },
  {
    "city": "CRUZMALTINA",
    "electionZone": "110",
    "stateCode": "PR"
  },
  {
    "city": "CAMPINA DO SIMÃO",
    "electionZone": "44",
    "stateCode": "PR"
  },
  {
    "city": "NOVA SANTA BÁRBARA",
    "electionZone": "63",
    "stateCode": "PR"
  },
  {
    "city": "PORTO VITÓRIA",
    "electionZone": "153",
    "stateCode": "PR"
  },
  {
    "city": "DOURADINA",
    "electionZone": "142",
    "stateCode": "PR"
  },
  {
    "city": "SANTA LÚCIA",
    "electionZone": "165",
    "stateCode": "PR"
  },
  {
    "city": "FLORAÍ",
    "electionZone": "71",
    "stateCode": "PR"
  },
  {
    "city": "ARIRANHA DO IVAÍ",
    "electionZone": "152",
    "stateCode": "PR"
  },
  {
    "city": "CAFEARA",
    "electionZone": "159",
    "stateCode": "PR"
  },
  {
    "city": "SERTANEJA",
    "electionZone": "26",
    "stateCode": "PR"
  },
  {
    "city": "SÃO MATEUS DO SUL",
    "electionZone": "12",
    "stateCode": "PR"
  },
  {
    "city": "MIRASELVA",
    "electionZone": "65",
    "stateCode": "PR"
  },
  {
    "city": "MANGARATIBA",
    "electionZone": "54",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "66",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "78",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "194",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "126",
    "stateCode": "RJ"
  },
  {
    "city": "QUATIS",
    "electionZone": "183",
    "stateCode": "RJ"
  },
  {
    "city": "RIO CLARO",
    "electionZone": "108",
    "stateCode": "RJ"
  },
  {
    "city": "SANTO ANTÔNIO DE PÁDUA",
    "electionZone": "34",
    "stateCode": "RJ"
  },
  {
    "city": "MACUCO",
    "electionZone": "52",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "128",
    "stateCode": "RJ"
  },
  {
    "city": "CACHOEIRAS DE MACACU",
    "electionZone": "49",
    "stateCode": "RJ"
  },
  {
    "city": "CANTAGALO",
    "electionZone": "101",
    "stateCode": "RJ"
  },
  {
    "city": "BELFORD ROXO",
    "electionZone": "154",
    "stateCode": "RJ"
  },
  {
    "city": "PATY DO ALFERES",
    "electionZone": "48",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO FIDÉLIS",
    "electionZone": "35",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA FRIBURGO",
    "electionZone": "26",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "98",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "249",
    "stateCode": "RJ"
  },
  {
    "city": "BOM JARDIM",
    "electionZone": "42",
    "stateCode": "RJ"
  },
  {
    "city": "PARAÍBA DO SUL",
    "electionZone": "28",
    "stateCode": "RJ"
  },
  {
    "city": "TERESÓPOLIS",
    "electionZone": "38",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DA BARRA",
    "electionZone": "37",
    "stateCode": "RJ"
  },
  {
    "city": "ANGRA DOS REIS",
    "electionZone": "147",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "228",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "245",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "246",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "233",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "9",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "191",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "21",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "190",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "240",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "236",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "161",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "165",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "163",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "124",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "210",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "171",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "169",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "166",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "176",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "125",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "20",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "6",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "122",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "218",
    "stateCode": "RJ"
  },
  {
    "city": "MENDES",
    "electionZone": "56",
    "stateCode": "RJ"
  },
  {
    "city": "CASIMIRO DE ABREU",
    "electionZone": "50",
    "stateCode": "RJ"
  },
  {
    "city": "ITAPERUNA",
    "electionZone": "107",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "133",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "87",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "135",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "137",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "69",
    "stateCode": "RJ"
  },
  {
    "city": "ITATIAIA",
    "electionZone": "198",
    "stateCode": "RJ"
  },
  {
    "city": "CORDEIRO",
    "electionZone": "52",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "88",
    "stateCode": "RJ"
  },
  {
    "city": "MIRACEMA",
    "electionZone": "112",
    "stateCode": "RJ"
  },
  {
    "city": "CARDOSO MOREIRA",
    "electionZone": "141",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "162",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "235",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "16",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "23",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "252",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "13",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "237",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "211",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "189",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "209",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "229",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "22",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "117",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "213",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "177",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "25",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "234",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "19",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "134",
    "stateCode": "RJ"
  },
  {
    "city": "VASSOURAS",
    "electionZone": "41",
    "stateCode": "RJ"
  },
  {
    "city": "PORTO REAL",
    "electionZone": "183",
    "stateCode": "RJ"
  },
  {
    "city": "ENGENHEIRO PAULO DE FRONTIN",
    "electionZone": "74",
    "stateCode": "RJ"
  },
  {
    "city": "BELFORD ROXO",
    "electionZone": "153",
    "stateCode": "RJ"
  },
  {
    "city": "BARRA DO PIRAÍ",
    "electionZone": "93",
    "stateCode": "RJ"
  },
  {
    "city": "PETRÓPOLIS",
    "electionZone": "226",
    "stateCode": "RJ"
  },
  {
    "city": "PETRÓPOLIS",
    "electionZone": "29",
    "stateCode": "RJ"
  },
  {
    "city": "PETRÓPOLIS",
    "electionZone": "85",
    "stateCode": "RJ"
  },
  {
    "city": "PETRÓPOLIS",
    "electionZone": "65",
    "stateCode": "RJ"
  },
  {
    "city": "TRÊS RIOS",
    "electionZone": "174",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "129",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "250",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "36",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "132",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "136",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "157",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "159",
    "stateCode": "RJ"
  },
  {
    "city": "NILÓPOLIS",
    "electionZone": "80",
    "stateCode": "RJ"
  },
  {
    "city": "NILÓPOLIS",
    "electionZone": "201",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "79",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "77",
    "stateCode": "RJ"
  },
  {
    "city": "ARARUAMA",
    "electionZone": "92",
    "stateCode": "RJ"
  },
  {
    "city": "BARRA MANSA",
    "electionZone": "203",
    "stateCode": "RJ"
  },
  {
    "city": "BARRA MANSA",
    "electionZone": "91",
    "stateCode": "RJ"
  },
  {
    "city": "ITALVA",
    "electionZone": "141",
    "stateCode": "RJ"
  },
  {
    "city": "CAMBUCI",
    "electionZone": "97",
    "stateCode": "RJ"
  },
  {
    "city": "TRAJANO DE MORAIS",
    "electionZone": "39",
    "stateCode": "RJ"
  },
  {
    "city": "APERIBÉ",
    "electionZone": "34",
    "stateCode": "RJ"
  },
  {
    "city": "SAQUAREMA",
    "electionZone": "62",
    "stateCode": "RJ"
  },
  {
    "city": "NILÓPOLIS",
    "electionZone": "44",
    "stateCode": "RJ"
  },
  {
    "city": "IGUABA GRANDE",
    "electionZone": "181",
    "stateCode": "RJ"
  },
  {
    "city": "BOM JESUS DO ITABAPOANA",
    "electionZone": "95",
    "stateCode": "RJ"
  },
  {
    "city": "JAPERI",
    "electionZone": "139",
    "stateCode": "RJ"
  },
  {
    "city": "GUAPIMIRIM",
    "electionZone": "149",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "127",
    "stateCode": "RJ"
  },
  {
    "city": "VALENÇA",
    "electionZone": "111",
    "stateCode": "RJ"
  },
  {
    "city": "RESENDE",
    "electionZone": "198",
    "stateCode": "RJ"
  },
  {
    "city": "VOLTA REDONDA",
    "electionZone": "47",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA FRIBURGO",
    "electionZone": "81",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA FRIBURGO",
    "electionZone": "222",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "156",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "27",
    "stateCode": "RJ"
  },
  {
    "city": "VARRE-SAI",
    "electionZone": "43",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DAS OSTRAS",
    "electionZone": "184",
    "stateCode": "RJ"
  },
  {
    "city": "ARMAÇÃO DOS BÚZIOS",
    "electionZone": "172",
    "stateCode": "RJ"
  },
  {
    "city": "MESQUITA",
    "electionZone": "83",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "68",
    "stateCode": "RJ"
  },
  {
    "city": "VOLTA REDONDA",
    "electionZone": "202",
    "stateCode": "RJ"
  },
  {
    "city": "MARICÁ",
    "electionZone": "55",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO PEDRO DA ALDEIA",
    "electionZone": "59",
    "stateCode": "RJ"
  },
  {
    "city": "PARATY",
    "electionZone": "57",
    "stateCode": "RJ"
  },
  {
    "city": "ARRAIAL DO CABO",
    "electionZone": "146",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "71",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "86",
    "stateCode": "RJ"
  },
  {
    "city": "NATIVIDADE",
    "electionZone": "43",
    "stateCode": "RJ"
  },
  {
    "city": "BARRA MANSA",
    "electionZone": "94",
    "stateCode": "RJ"
  },
  {
    "city": "RESENDE",
    "electionZone": "31",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOSÉ DO VALE DO RIO PRETO",
    "electionZone": "196",
    "stateCode": "RJ"
  },
  {
    "city": "MACAÉ",
    "electionZone": "109",
    "stateCode": "RJ"
  },
  {
    "city": "MACAÉ",
    "electionZone": "254",
    "stateCode": "RJ"
  },
  {
    "city": "SAPUCAIA",
    "electionZone": "61",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "187",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "46",
    "stateCode": "RJ"
  },
  {
    "city": "CONCEIÇÃO DE MACABU",
    "electionZone": "51",
    "stateCode": "RJ"
  },
  {
    "city": "QUEIMADOS",
    "electionZone": "138",
    "stateCode": "RJ"
  },
  {
    "city": "PIRAÍ",
    "electionZone": "30",
    "stateCode": "RJ"
  },
  {
    "city": "ITABORAÍ",
    "electionZone": "104",
    "stateCode": "RJ"
  },
  {
    "city": "ITABORAÍ",
    "electionZone": "151",
    "stateCode": "RJ"
  },
  {
    "city": "BELFORD ROXO",
    "electionZone": "155",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "84",
    "stateCode": "RJ"
  },
  {
    "city": "DUAS BARRAS",
    "electionZone": "53",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "89",
    "stateCode": "RJ"
  },
  {
    "city": "CABO FRIO",
    "electionZone": "96",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "82",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "182",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "204",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "232",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "230",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "168",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "24",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "5",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "179",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "119",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "215",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "18",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "244",
    "stateCode": "RJ"
  },
  {
    "city": "PARACAMBI",
    "electionZone": "70",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "144",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "115",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "114",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "143",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "103",
    "stateCode": "RJ"
  },
  {
    "city": "VOLTA REDONDA",
    "electionZone": "131",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO FRANCISCO DE ITABAPOANA",
    "electionZone": "130",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "75",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO GONÇALO",
    "electionZone": "197",
    "stateCode": "RJ"
  },
  {
    "city": "TRÊS RIOS",
    "electionZone": "40",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DAS FLORES",
    "electionZone": "58",
    "stateCode": "RJ"
  },
  {
    "city": "SILVA JARDIM",
    "electionZone": "63",
    "stateCode": "RJ"
  },
  {
    "city": "VOLTA REDONDA",
    "electionZone": "90",
    "stateCode": "RJ"
  },
  {
    "city": "ITAOCARA",
    "electionZone": "106",
    "stateCode": "RJ"
  },
  {
    "city": "MESQUITA",
    "electionZone": "150",
    "stateCode": "RJ"
  },
  {
    "city": "COMENDADOR LEVY GASPARIAN",
    "electionZone": "40",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "140",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "72",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "173",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "242",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "238",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "167",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "216",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "121",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "12",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "175",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "188",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "8",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "11",
    "stateCode": "RJ"
  },
  {
    "city": "QUISSAMÃ",
    "electionZone": "255",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "186",
    "stateCode": "RJ"
  },
  {
    "city": "ANGRA DOS REIS",
    "electionZone": "116",
    "stateCode": "RJ"
  },
  {
    "city": "CARMO",
    "electionZone": "102",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "99",
    "stateCode": "RJ"
  },
  {
    "city": "ITAGUAÍ",
    "electionZone": "105",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "76",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "199",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOÃO DE MERITI",
    "electionZone": "145",
    "stateCode": "RJ"
  },
  {
    "city": "MAGÉ",
    "electionZone": "148",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "142",
    "stateCode": "RJ"
  },
  {
    "city": "TANGUÁ",
    "electionZone": "151",
    "stateCode": "RJ"
  },
  {
    "city": "LAJE DO MURIAÉ",
    "electionZone": "73",
    "stateCode": "RJ"
  },
  {
    "city": "SEROPÉDICA",
    "electionZone": "225",
    "stateCode": "RJ"
  },
  {
    "city": "CARAPEBUS",
    "electionZone": "255",
    "stateCode": "RJ"
  },
  {
    "city": "PETRÓPOLIS",
    "electionZone": "227",
    "stateCode": "RJ"
  },
  {
    "city": "MAGÉ",
    "electionZone": "110",
    "stateCode": "RJ"
  },
  {
    "city": "SANTA MARIA MADALENA",
    "electionZone": "33",
    "stateCode": "RJ"
  },
  {
    "city": "MIGUEL PEREIRA",
    "electionZone": "48",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "206",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "15",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "158",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "1",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "160",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "17",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "178",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "2",
    "stateCode": "RJ"
  },
  {
    "city": "DUQUE DE CAXIAS",
    "electionZone": "200",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "170",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "4",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "10",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "164",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "243",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "220",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "231",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "180",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "14",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "3",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "214",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "185",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "212",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "207",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "219",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "193",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "192",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "205",
    "stateCode": "RJ"
  },
  {
    "city": "BELFORD ROXO",
    "electionZone": "152",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "7",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "120",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "208",
    "stateCode": "RJ"
  },
  {
    "city": "CAMPOS DOS GOYTACAZES",
    "electionZone": "100",
    "stateCode": "RJ"
  },
  {
    "city": "NOVA IGUAÇU",
    "electionZone": "67",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "241",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "217",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO SEBASTIÃO DO ALTO",
    "electionZone": "60",
    "stateCode": "RJ"
  },
  {
    "city": "SÃO JOSÉ DE UBÁ",
    "electionZone": "107",
    "stateCode": "RJ"
  },
  {
    "city": "NITERÓI",
    "electionZone": "113",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "118",
    "stateCode": "RJ"
  },
  {
    "city": "RIO DE JANEIRO",
    "electionZone": "123",
    "stateCode": "RJ"
  },
  {
    "city": "CABO FRIO",
    "electionZone": "256",
    "stateCode": "RJ"
  },
  {
    "city": "TERESÓPOLIS",
    "electionZone": "195",
    "stateCode": "RJ"
  },
  {
    "city": "AREAL",
    "electionZone": "174",
    "stateCode": "RJ"
  },
  {
    "city": "SUMIDOURO",
    "electionZone": "64",
    "stateCode": "RJ"
  },
  {
    "city": "NILÓPOLIS",
    "electionZone": "221",
    "stateCode": "RJ"
  },
  {
    "city": "PORCIÚNCULA",
    "electionZone": "45",
    "stateCode": "RJ"
  },
  {
    "city": "PINHEIRAL",
    "electionZone": "30",
    "stateCode": "RJ"
  },
  {
    "city": "RIO BONITO",
    "electionZone": "32",
    "stateCode": "RJ"
  },
  {
    "city": "SERRA CAIADA",
    "electionZone": "53",
    "stateCode": "RN"
  },
  {
    "city": "ASSÚ",
    "electionZone": "29",
    "stateCode": "RN"
  },
  {
    "city": "TABOLEIRO GRANDE",
    "electionZone": "63",
    "stateCode": "RN"
  },
  {
    "city": "PENDÊNCIAS",
    "electionZone": "47",
    "stateCode": "RN"
  },
  {
    "city": "MOSSORÓ",
    "electionZone": "33",
    "stateCode": "RN"
  },
  {
    "city": "LAGOA DE PEDRAS",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "UMARIZAL",
    "electionZone": "39",
    "stateCode": "RN"
  },
  {
    "city": "IPUEIRA",
    "electionZone": "65",
    "stateCode": "RN"
  },
  {
    "city": "BOA SAÚDE",
    "electionZone": "53",
    "stateCode": "RN"
  },
  {
    "city": "JANDAÍRA",
    "electionZone": "10",
    "stateCode": "RN"
  },
  {
    "city": "LAGOA SALGADA",
    "electionZone": "44",
    "stateCode": "RN"
  },
  {
    "city": "SANTANA DO SERIDÓ",
    "electionZone": "24",
    "stateCode": "RN"
  },
  {
    "city": "CORONEL EZEQUIEL",
    "electionZone": "68",
    "stateCode": "RN"
  },
  {
    "city": "SÃO MIGUEL",
    "electionZone": "43",
    "stateCode": "RN"
  },
  {
    "city": "SANTO ANTÔNIO",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "PARNAMIRIM",
    "electionZone": "50",
    "stateCode": "RN"
  },
  {
    "city": "TIMBAÚBA DOS BATISTAS",
    "electionZone": "45",
    "stateCode": "RN"
  },
  {
    "city": "TENENTE ANANIAS",
    "electionZone": "60",
    "stateCode": "RN"
  },
  {
    "city": "PAU DOS FERROS",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "MARTINS",
    "electionZone": "38",
    "stateCode": "RN"
  },
  {
    "city": "TANGARÁ",
    "electionZone": "53",
    "stateCode": "RN"
  },
  {
    "city": "AFONSO BEZERRA",
    "electionZone": "54",
    "stateCode": "RN"
  },
  {
    "city": "SANTANA DO MATOS",
    "electionZone": "28",
    "stateCode": "RN"
  },
  {
    "city": "NATAL",
    "electionZone": "3",
    "stateCode": "RN"
  },
  {
    "city": "NATAL",
    "electionZone": "4",
    "stateCode": "RN"
  },
  {
    "city": "GROSSOS",
    "electionZone": "32",
    "stateCode": "RN"
  },
  {
    "city": "IELMO MARINHO",
    "electionZone": "5",
    "stateCode": "RN"
  },
  {
    "city": "UPANEMA",
    "electionZone": "49",
    "stateCode": "RN"
  },
  {
    "city": "SANTA CRUZ",
    "electionZone": "16",
    "stateCode": "RN"
  },
  {
    "city": "SÃO RAFAEL",
    "electionZone": "64",
    "stateCode": "RN"
  },
  {
    "city": "EQUADOR",
    "electionZone": "24",
    "stateCode": "RN"
  },
  {
    "city": "ITAÚ",
    "electionZone": "35",
    "stateCode": "RN"
  },
  {
    "city": "JOÃO CÂMARA",
    "electionZone": "10",
    "stateCode": "RN"
  },
  {
    "city": "JARDIM DO SERIDÓ",
    "electionZone": "23",
    "stateCode": "RN"
  },
  {
    "city": "FRUTUOSO GOMES",
    "electionZone": "55",
    "stateCode": "RN"
  },
  {
    "city": "PASSA E FICA",
    "electionZone": "12",
    "stateCode": "RN"
  },
  {
    "city": "BENTO FERNANDES",
    "electionZone": "10",
    "stateCode": "RN"
  },
  {
    "city": "MACAÍBA",
    "electionZone": "5",
    "stateCode": "RN"
  },
  {
    "city": "LAJES",
    "electionZone": "17",
    "stateCode": "RN"
  },
  {
    "city": "MONTANHAS",
    "electionZone": "12",
    "stateCode": "RN"
  },
  {
    "city": "NOVA CRUZ",
    "electionZone": "12",
    "stateCode": "RN"
  },
  {
    "city": "POÇO BRANCO",
    "electionZone": "62",
    "stateCode": "RN"
  },
  {
    "city": "LAGOA NOVA",
    "electionZone": "20",
    "stateCode": "RN"
  },
  {
    "city": "SERRA DO MEL",
    "electionZone": "34",
    "stateCode": "RN"
  },
  {
    "city": "SÃO BENTO DO TRAIRÍ",
    "electionZone": "68",
    "stateCode": "RN"
  },
  {
    "city": "CAICÓ",
    "electionZone": "25",
    "stateCode": "RN"
  },
  {
    "city": "LAGOA D'ANTA",
    "electionZone": "12",
    "stateCode": "RN"
  },
  {
    "city": "SANTA MARIA",
    "electionZone": "8",
    "stateCode": "RN"
  },
  {
    "city": "PASSAGEM",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "CAMPO REDONDO",
    "electionZone": "68",
    "stateCode": "RN"
  },
  {
    "city": "NATAL",
    "electionZone": "69",
    "stateCode": "RN"
  },
  {
    "city": "RIO DO FOGO",
    "electionZone": "6",
    "stateCode": "RN"
  },
  {
    "city": "JAÇANÃ",
    "electionZone": "68",
    "stateCode": "RN"
  },
  {
    "city": "FLORÂNIA",
    "electionZone": "21",
    "stateCode": "RN"
  },
  {
    "city": "SERRA NEGRA DO NORTE",
    "electionZone": "26",
    "stateCode": "RN"
  },
  {
    "city": "OURO BRANCO",
    "electionZone": "23",
    "stateCode": "RN"
  },
  {
    "city": "JANDUÍS",
    "electionZone": "58",
    "stateCode": "RN"
  },
  {
    "city": "BAÍA FORMOSA",
    "electionZone": "11",
    "stateCode": "RN"
  },
  {
    "city": "BOM JESUS",
    "electionZone": "5",
    "stateCode": "RN"
  },
  {
    "city": "TAIPU",
    "electionZone": "46",
    "stateCode": "RN"
  },
  {
    "city": "CARNAUBAIS",
    "electionZone": "29",
    "stateCode": "RN"
  },
  {
    "city": "SÃO FRANCISCO DO OESTE",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "CAMPO GRANDE",
    "electionZone": "31",
    "stateCode": "RN"
  },
  {
    "city": "SÃO TOMÉ",
    "electionZone": "19",
    "stateCode": "RN"
  },
  {
    "city": "VENHA-VER",
    "electionZone": "43",
    "stateCode": "RN"
  },
  {
    "city": "JARDIM DE ANGICOS",
    "electionZone": "10",
    "stateCode": "RN"
  },
  {
    "city": "AREIA BRANCA",
    "electionZone": "32",
    "stateCode": "RN"
  },
  {
    "city": "FERNANDO PEDROZA",
    "electionZone": "18",
    "stateCode": "RN"
  },
  {
    "city": "PORTO DO MANGUE",
    "electionZone": "29",
    "stateCode": "RN"
  },
  {
    "city": "SENADOR GEORGINO AVELINO",
    "electionZone": "66",
    "stateCode": "RN"
  },
  {
    "city": "CERRO CORÁ",
    "electionZone": "20",
    "stateCode": "RN"
  },
  {
    "city": "BARCELONA",
    "electionZone": "19",
    "stateCode": "RN"
  },
  {
    "city": "SERRINHA DOS PINTOS",
    "electionZone": "38",
    "stateCode": "RN"
  },
  {
    "city": "MESSIAS TARGINO",
    "electionZone": "37",
    "stateCode": "RN"
  },
  {
    "city": "VILA FLOR",
    "electionZone": "11",
    "stateCode": "RN"
  },
  {
    "city": "MONTE ALEGRE",
    "electionZone": "44",
    "stateCode": "RN"
  },
  {
    "city": "TENENTE LAURENTINO CRUZ",
    "electionZone": "21",
    "stateCode": "RN"
  },
  {
    "city": "PUREZA",
    "electionZone": "6",
    "stateCode": "RN"
  },
  {
    "city": "PARAÚ",
    "electionZone": "31",
    "stateCode": "RN"
  },
  {
    "city": "RIACHO DE SANTANA",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "SENADOR ELÓI DE SOUZA",
    "electionZone": "53",
    "stateCode": "RN"
  },
  {
    "city": "PILÕES",
    "electionZone": "41",
    "stateCode": "RN"
  },
  {
    "city": "PARAZINHO",
    "electionZone": "10",
    "stateCode": "RN"
  },
  {
    "city": "PEDRA PRETA",
    "electionZone": "17",
    "stateCode": "RN"
  },
  {
    "city": "APODI",
    "electionZone": "35",
    "stateCode": "RN"
  },
  {
    "city": "MACAU",
    "electionZone": "30",
    "stateCode": "RN"
  },
  {
    "city": "NATAL",
    "electionZone": "1",
    "stateCode": "RN"
  },
  {
    "city": "MOSSORÓ",
    "electionZone": "34",
    "stateCode": "RN"
  },
  {
    "city": "SÃO BENTO DO NORTE",
    "electionZone": "52",
    "stateCode": "RN"
  },
  {
    "city": "FELIPE GUERRA",
    "electionZone": "35",
    "stateCode": "RN"
  },
  {
    "city": "TIBAU",
    "electionZone": "32",
    "stateCode": "RN"
  },
  {
    "city": "PEDRO AVELINO",
    "electionZone": "48",
    "stateCode": "RN"
  },
  {
    "city": "TIBAU DO SUL",
    "electionZone": "9",
    "stateCode": "RN"
  },
  {
    "city": "SÃO JOSÉ DE MIPIBU",
    "electionZone": "7",
    "stateCode": "RN"
  },
  {
    "city": "NATAL",
    "electionZone": "2",
    "stateCode": "RN"
  },
  {
    "city": "EXTREMOZ",
    "electionZone": "6",
    "stateCode": "RN"
  },
  {
    "city": "ESPÍRITO SANTO",
    "electionZone": "9",
    "stateCode": "RN"
  },
  {
    "city": "NÍSIA FLORESTA",
    "electionZone": "67",
    "stateCode": "RN"
  },
  {
    "city": "CEARÁ-MIRIM",
    "electionZone": "6",
    "stateCode": "RN"
  },
  {
    "city": "VERA CRUZ",
    "electionZone": "44",
    "stateCode": "RN"
  },
  {
    "city": "GOVERNADOR DIX-SEPT ROSADO",
    "electionZone": "57",
    "stateCode": "RN"
  },
  {
    "city": "LAJES PINTADAS",
    "electionZone": "68",
    "stateCode": "RN"
  },
  {
    "city": "LUCRÉCIA",
    "electionZone": "55",
    "stateCode": "RN"
  },
  {
    "city": "IPANGUAÇU",
    "electionZone": "29",
    "stateCode": "RN"
  },
  {
    "city": "LAGOA DE VELHOS",
    "electionZone": "19",
    "stateCode": "RN"
  },
  {
    "city": "ANGICOS",
    "electionZone": "18",
    "stateCode": "RN"
  },
  {
    "city": "CANGUARETAMA",
    "electionZone": "11",
    "stateCode": "RN"
  },
  {
    "city": "ALTO DO RODRIGUES",
    "electionZone": "47",
    "stateCode": "RN"
  },
  {
    "city": "SERRINHA",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "JAPI",
    "electionZone": "16",
    "stateCode": "RN"
  },
  {
    "city": "GALINHOS",
    "electionZone": "52",
    "stateCode": "RN"
  },
  {
    "city": "SÃO JOSÉ DO CAMPESTRE",
    "electionZone": "15",
    "stateCode": "RN"
  },
  {
    "city": "ALEXANDRIA",
    "electionZone": "41",
    "stateCode": "RN"
  },
  {
    "city": "JOSÉ DA PENHA",
    "electionZone": "42",
    "stateCode": "RN"
  },
  {
    "city": "CARAÚBAS",
    "electionZone": "36",
    "stateCode": "RN"
  },
  {
    "city": "PATU",
    "electionZone": "37",
    "stateCode": "RN"
  },
  {
    "city": "TRIUNFO POTIGUAR",
    "electionZone": "31",
    "stateCode": "RN"
  },
  {
    "city": "FRANCISCO DANTAS",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "GOIANINHA",
    "electionZone": "9",
    "stateCode": "RN"
  },
  {
    "city": "ÁGUA NOVA",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "JARDIM DE PIRANHAS",
    "electionZone": "59",
    "stateCode": "RN"
  },
  {
    "city": "ARÊS",
    "electionZone": "66",
    "stateCode": "RN"
  },
  {
    "city": "BREJINHO",
    "electionZone": "44",
    "stateCode": "RN"
  },
  {
    "city": "LUÍS GOMES",
    "electionZone": "42",
    "stateCode": "RN"
  },
  {
    "city": "PORTALEGRE",
    "electionZone": "63",
    "stateCode": "RN"
  },
  {
    "city": "MAXARANGUAPE",
    "electionZone": "6",
    "stateCode": "RN"
  },
  {
    "city": "GUAMARÉ",
    "electionZone": "30",
    "stateCode": "RN"
  },
  {
    "city": "CAIÇARA DO RIO DO VENTO",
    "electionZone": "17",
    "stateCode": "RN"
  },
  {
    "city": "MAJOR SALES",
    "electionZone": "42",
    "stateCode": "RN"
  },
  {
    "city": "SÃO JOÃO DO SABUGI",
    "electionZone": "65",
    "stateCode": "RN"
  },
  {
    "city": "SÃO GONÇALO DO AMARANTE",
    "electionZone": "51",
    "stateCode": "RN"
  },
  {
    "city": "MONTE DAS GAMELEIRAS",
    "electionZone": "15",
    "stateCode": "RN"
  },
  {
    "city": "PEDRO VELHO",
    "electionZone": "61",
    "stateCode": "RN"
  },
  {
    "city": "SEVERIANO MELO",
    "electionZone": "35",
    "stateCode": "RN"
  },
  {
    "city": "MARCELINO VIEIRA",
    "electionZone": "60",
    "stateCode": "RN"
  },
  {
    "city": "OLHO D'ÁGUA DO BORGES",
    "electionZone": "39",
    "stateCode": "RN"
  },
  {
    "city": "PEDRA GRANDE",
    "electionZone": "52",
    "stateCode": "RN"
  },
  {
    "city": "ENCANTO",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "SÃO MIGUEL DO GOSTOSO",
    "electionZone": "14",
    "stateCode": "RN"
  },
  {
    "city": "JUNDIÁ",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "ALMINO AFONSO",
    "electionZone": "55",
    "stateCode": "RN"
  },
  {
    "city": "CAIÇARA DO NORTE",
    "electionZone": "52",
    "stateCode": "RN"
  },
  {
    "city": "VIÇOSA",
    "electionZone": "63",
    "stateCode": "RN"
  },
  {
    "city": "BODÓ",
    "electionZone": "28",
    "stateCode": "RN"
  },
  {
    "city": "SÍTIO NOVO",
    "electionZone": "53",
    "stateCode": "RN"
  },
  {
    "city": "SÃO PEDRO",
    "electionZone": "8",
    "stateCode": "RN"
  },
  {
    "city": "TOUROS",
    "electionZone": "14",
    "stateCode": "RN"
  },
  {
    "city": "ANTÔNIO MARTINS",
    "electionZone": "38",
    "stateCode": "RN"
  },
  {
    "city": "ITAJÁ",
    "electionZone": "29",
    "stateCode": "RN"
  },
  {
    "city": "RODOLFO FERNANDES",
    "electionZone": "35",
    "stateCode": "RN"
  },
  {
    "city": "RIACHO DA CRUZ",
    "electionZone": "63",
    "stateCode": "RN"
  },
  {
    "city": "PARANÁ",
    "electionZone": "42",
    "stateCode": "RN"
  },
  {
    "city": "VÁRZEA",
    "electionZone": "13",
    "stateCode": "RN"
  },
  {
    "city": "CRUZETA",
    "electionZone": "56",
    "stateCode": "RN"
  },
  {
    "city": "SÃO JOSÉ DO SERIDÓ",
    "electionZone": "56",
    "stateCode": "RN"
  },
  {
    "city": "SÃO PAULO DO POTENGI",
    "electionZone": "8",
    "stateCode": "RN"
  },
  {
    "city": "CURRAIS NOVOS",
    "electionZone": "20",
    "stateCode": "RN"
  },
  {
    "city": "BARAÚNA",
    "electionZone": "33",
    "stateCode": "RN"
  },
  {
    "city": "CARNAÚBA DOS DANTAS",
    "electionZone": "22",
    "stateCode": "RN"
  },
  {
    "city": "JOÃO DIAS",
    "electionZone": "41",
    "stateCode": "RN"
  },
  {
    "city": "SÃO VICENTE",
    "electionZone": "21",
    "stateCode": "RN"
  },
  {
    "city": "PARELHAS",
    "electionZone": "24",
    "stateCode": "RN"
  },
  {
    "city": "RAFAEL FERNANDES",
    "electionZone": "40",
    "stateCode": "RN"
  },
  {
    "city": "RIACHUELO",
    "electionZone": "8",
    "stateCode": "RN"
  },
  {
    "city": "DOUTOR SEVERIANO",
    "electionZone": "43",
    "stateCode": "RN"
  },
  {
    "city": "SÃO FERNANDO",
    "electionZone": "45",
    "stateCode": "RN"
  },
  {
    "city": "SERRA DE SÃO BENTO",
    "electionZone": "15",
    "stateCode": "RN"
  },
  {
    "city": "CORONEL JOÃO PESSOA",
    "electionZone": "43",
    "stateCode": "RN"
  },
  {
    "city": "RAFAEL GODEIRO",
    "electionZone": "55",
    "stateCode": "RN"
  },
  {
    "city": "RUY BARBOSA",
    "electionZone": "19",
    "stateCode": "RN"
  },
  {
    "city": "JUCURUTU",
    "electionZone": "27",
    "stateCode": "RN"
  },
  {
    "city": "ACARI",
    "electionZone": "22",
    "stateCode": "RN"
  },
  {
    "city": "RIO CRESPO",
    "electionZone": "26",
    "stateCode": "RO"
  },
  {
    "city": "SÃO FRANCISCO DO GUAPORÉ",
    "electionZone": "5",
    "stateCode": "RO"
  },
  {
    "city": "CHUPINGUAIA",
    "electionZone": "4",
    "stateCode": "RO"
  },
  {
    "city": "SERINGUEIRAS",
    "electionZone": "35",
    "stateCode": "RO"
  },
  {
    "city": "VILHENA",
    "electionZone": "4",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "22",
    "stateCode": "RO"
  },
  {
    "city": "CABIXI",
    "electionZone": "8",
    "stateCode": "RO"
  },
  {
    "city": "CORUMBIARA",
    "electionZone": "16",
    "stateCode": "RO"
  },
  {
    "city": "MONTE NEGRO",
    "electionZone": "25",
    "stateCode": "RO"
  },
  {
    "city": "ESPIGÃO DO OESTE",
    "electionZone": "12",
    "stateCode": "RO"
  },
  {
    "city": "MINISTRO ANDREAZZA",
    "electionZone": "31",
    "stateCode": "RO"
  },
  {
    "city": "CANDEIAS DO JAMARI",
    "electionZone": "24",
    "stateCode": "RO"
  },
  {
    "city": "NOVA MAMORÉ",
    "electionZone": "1",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "6",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "21",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "2",
    "stateCode": "RO"
  },
  {
    "city": "ARIQUEMES",
    "electionZone": "25",
    "stateCode": "RO"
  },
  {
    "city": "CACOAL",
    "electionZone": "31",
    "stateCode": "RO"
  },
  {
    "city": "CACOAL",
    "electionZone": "11",
    "stateCode": "RO"
  },
  {
    "city": "CAMPO NOVO DE RONDÔNIA",
    "electionZone": "34",
    "stateCode": "RO"
  },
  {
    "city": "THEOBROMA",
    "electionZone": "27",
    "stateCode": "RO"
  },
  {
    "city": "PIMENTA BUENO",
    "electionZone": "9",
    "stateCode": "RO"
  },
  {
    "city": "URUPÁ",
    "electionZone": "18",
    "stateCode": "RO"
  },
  {
    "city": "CEREJEIRAS",
    "electionZone": "16",
    "stateCode": "RO"
  },
  {
    "city": "OURO PRETO DO OESTE",
    "electionZone": "28",
    "stateCode": "RO"
  },
  {
    "city": "MIRANTE DA SERRA",
    "electionZone": "13",
    "stateCode": "RO"
  },
  {
    "city": "ALTO PARAÍSO",
    "electionZone": "26",
    "stateCode": "RO"
  },
  {
    "city": "ARIQUEMES",
    "electionZone": "7",
    "stateCode": "RO"
  },
  {
    "city": "OURO PRETO DO OESTE",
    "electionZone": "13",
    "stateCode": "RO"
  },
  {
    "city": "ROLIM DE MOURA",
    "electionZone": "15",
    "stateCode": "RO"
  },
  {
    "city": "JARU",
    "electionZone": "10",
    "stateCode": "RO"
  },
  {
    "city": "COSTA MARQUES",
    "electionZone": "5",
    "stateCode": "RO"
  },
  {
    "city": "ALTO ALEGRE DOS PARECIS",
    "electionZone": "19",
    "stateCode": "RO"
  },
  {
    "city": "JARU",
    "electionZone": "27",
    "stateCode": "RO"
  },
  {
    "city": "CASTANHEIRAS",
    "electionZone": "15",
    "stateCode": "RO"
  },
  {
    "city": "JI-PARANÁ",
    "electionZone": "30",
    "stateCode": "RO"
  },
  {
    "city": "JI-PARANÁ",
    "electionZone": "3",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "23",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "24",
    "stateCode": "RO"
  },
  {
    "city": "SÃO MIGUEL DO GUAPORÉ",
    "electionZone": "35",
    "stateCode": "RO"
  },
  {
    "city": "CUJUBIM",
    "electionZone": "26",
    "stateCode": "RO"
  },
  {
    "city": "NOVA BRASILÂNDIA DO OESTE",
    "electionZone": "33",
    "stateCode": "RO"
  },
  {
    "city": "NOVO HORIZONTE DO OESTE",
    "electionZone": "15",
    "stateCode": "RO"
  },
  {
    "city": "NOVA UNIÃO",
    "electionZone": "28",
    "stateCode": "RO"
  },
  {
    "city": "PORTO VELHO",
    "electionZone": "20",
    "stateCode": "RO"
  },
  {
    "city": "PRESIDENTE MÉDICI",
    "electionZone": "14",
    "stateCode": "RO"
  },
  {
    "city": "ROLIM DE MOURA",
    "electionZone": "29",
    "stateCode": "RO"
  },
  {
    "city": "GOVERNADOR JORGE TEIXEIRA",
    "electionZone": "27",
    "stateCode": "RO"
  },
  {
    "city": "SÃO FELIPE DO OESTE",
    "electionZone": "19",
    "stateCode": "RO"
  },
  {
    "city": "VALE DO PARAÍSO",
    "electionZone": "28",
    "stateCode": "RO"
  },
  {
    "city": "ALVORADA DO OESTE",
    "electionZone": "18",
    "stateCode": "RO"
  },
  {
    "city": "COLORADO DO OESTE",
    "electionZone": "8",
    "stateCode": "RO"
  },
  {
    "city": "CACAULÂNDIA",
    "electionZone": "26",
    "stateCode": "RO"
  },
  {
    "city": "MACHADINHO DO OESTE",
    "electionZone": "32",
    "stateCode": "RO"
  },
  {
    "city": "ALTA FLORESTA DO OESTE",
    "electionZone": "17",
    "stateCode": "RO"
  },
  {
    "city": "SANTA LUZIA DO OESTE",
    "electionZone": "19",
    "stateCode": "RO"
  },
  {
    "city": "PRIMAVERA DE RONDÔNIA",
    "electionZone": "9",
    "stateCode": "RO"
  },
  {
    "city": "BURITIS",
    "electionZone": "34",
    "stateCode": "RO"
  },
  {
    "city": "VALE DO ANARI",
    "electionZone": "32",
    "stateCode": "RO"
  },
  {
    "city": "ITAPUÃ DO OESTE",
    "electionZone": "24",
    "stateCode": "RO"
  },
  {
    "city": "TEIXEIRÓPOLIS",
    "electionZone": "28",
    "stateCode": "RO"
  },
  {
    "city": "PIMENTEIRAS DO OESTE",
    "electionZone": "16",
    "stateCode": "RO"
  },
  {
    "city": "PARECIS",
    "electionZone": "19",
    "stateCode": "RO"
  },
  {
    "city": "GUAJARÁ-MIRIM",
    "electionZone": "1",
    "stateCode": "RO"
  },
  {
    "city": "SÃO LUIZ",
    "electionZone": "4",
    "stateCode": "RR"
  },
  {
    "city": "BOA VISTA",
    "electionZone": "5",
    "stateCode": "RR"
  },
  {
    "city": "BONFIM",
    "electionZone": "3",
    "stateCode": "RR"
  },
  {
    "city": "MUCAJAÍ",
    "electionZone": "6",
    "stateCode": "RR"
  },
  {
    "city": "CARACARAÍ",
    "electionZone": "2",
    "stateCode": "RR"
  },
  {
    "city": "PACARAIMA",
    "electionZone": "7",
    "stateCode": "RR"
  },
  {
    "city": "ALTO ALEGRE",
    "electionZone": "3",
    "stateCode": "RR"
  },
  {
    "city": "IRACEMA",
    "electionZone": "6",
    "stateCode": "RR"
  },
  {
    "city": "NORMANDIA",
    "electionZone": "3",
    "stateCode": "RR"
  },
  {
    "city": "RORAINÓPOLIS",
    "electionZone": "8",
    "stateCode": "RR"
  },
  {
    "city": "CANTÁ",
    "electionZone": "3",
    "stateCode": "RR"
  },
  {
    "city": "CAROEBE",
    "electionZone": "4",
    "stateCode": "RR"
  },
  {
    "city": "UIRAMUTÃ",
    "electionZone": "7",
    "stateCode": "RR"
  },
  {
    "city": "AMAJARI",
    "electionZone": "7",
    "stateCode": "RR"
  },
  {
    "city": "BOA VISTA",
    "electionZone": "1",
    "stateCode": "RR"
  },
  {
    "city": "SÃO JOÃO DA BALIZA",
    "electionZone": "4",
    "stateCode": "RR"
  },
  {
    "city": "QUATRO IRMÃOS",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "160",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "113",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "112",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "161",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "2",
    "stateCode": "RS"
  },
  {
    "city": "CAIBATÉ",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "PAVERAMA",
    "electionZone": "125",
    "stateCode": "RS"
  },
  {
    "city": "JABOTICABA",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "SALDANHA MARINHO",
    "electionZone": "115",
    "stateCode": "RS"
  },
  {
    "city": "GLORINHA",
    "electionZone": "71",
    "stateCode": "RS"
  },
  {
    "city": "BOM PROGRESSO",
    "electionZone": "86",
    "stateCode": "RS"
  },
  {
    "city": "CRISTAL DO SUL",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "CANOAS",
    "electionZone": "66",
    "stateCode": "RS"
  },
  {
    "city": "ALVORADA",
    "electionZone": "124",
    "stateCode": "RS"
  },
  {
    "city": "VITÓRIA DAS MISSÕES",
    "electionZone": "45",
    "stateCode": "RS"
  },
  {
    "city": "COQUEIROS DO SUL",
    "electionZone": "15",
    "stateCode": "RS"
  },
  {
    "city": "IMIGRANTE",
    "electionZone": "125",
    "stateCode": "RS"
  },
  {
    "city": "SAPUCAIA DO SUL",
    "electionZone": "126",
    "stateCode": "RS"
  },
  {
    "city": "MONTAURI",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "PINHAL",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "MARQUES DE SOUZA",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "FORTALEZA DOS VALOS",
    "electionZone": "17",
    "stateCode": "RS"
  },
  {
    "city": "GRAVATAÍ",
    "electionZone": "173",
    "stateCode": "RS"
  },
  {
    "city": "CORONEL BARROS",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "FAXINALZINHO",
    "electionZone": "168",
    "stateCode": "RS"
  },
  {
    "city": "DEZESSEIS DE NOVEMBRO",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "PINHEIRO MACHADO",
    "electionZone": "35",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS ARROIOS",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "TAQUARUÇU DO SUL",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "CAXIAS DO SUL",
    "electionZone": "16",
    "stateCode": "RS"
  },
  {
    "city": "CAXIAS DO SUL",
    "electionZone": "169",
    "stateCode": "RS"
  },
  {
    "city": "CAIÇARA",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "MATO LEITÃO",
    "electionZone": "93",
    "stateCode": "RS"
  },
  {
    "city": "CONSTANTINA",
    "electionZone": "146",
    "stateCode": "RS"
  },
  {
    "city": "SÃO PEDRO DO BUTIÁ",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "CAXIAS DO SUL",
    "electionZone": "136",
    "stateCode": "RS"
  },
  {
    "city": "NOVA BOA VISTA",
    "electionZone": "83",
    "stateCode": "RS"
  },
  {
    "city": "CAÇAPAVA DO SUL",
    "electionZone": "9",
    "stateCode": "RS"
  },
  {
    "city": "TUPANCIRETÃ",
    "electionZone": "87",
    "stateCode": "RS"
  },
  {
    "city": "POÇO DAS ANTAS",
    "electionZone": "125",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "159",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS DE MAIO",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "ROLADOR",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "SERTÃO",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "GUABIJU",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "VISTA ALEGRE",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JORGE",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "ESTEIO",
    "electionZone": "97",
    "stateCode": "RS"
  },
  {
    "city": "DOIS LAJEADOS",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "ALVORADA",
    "electionZone": "74",
    "stateCode": "RS"
  },
  {
    "city": "CORONEL PILAR",
    "electionZone": "98",
    "stateCode": "RS"
  },
  {
    "city": "ITATI",
    "electionZone": "77",
    "stateCode": "RS"
  },
  {
    "city": "DAVID CANABARRO",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "VERANÓPOLIS",
    "electionZone": "88",
    "stateCode": "RS"
  },
  {
    "city": "COTIPORÃ",
    "electionZone": "88",
    "stateCode": "RS"
  },
  {
    "city": "EREBANGO",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "PONTÃO",
    "electionZone": "33",
    "stateCode": "RS"
  },
  {
    "city": "TUPANDI",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "CAMPESTRE DA SERRA",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "SÉRIO",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "CAMAQUÃ",
    "electionZone": "12",
    "stateCode": "RS"
  },
  {
    "city": "NOVA RAMADA",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "VANINI",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "MARIANO MORO",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "GARIBALDI",
    "electionZone": "98",
    "stateCode": "RS"
  },
  {
    "city": "PASSO DO SOBRADO",
    "electionZone": "162",
    "stateCode": "RS"
  },
  {
    "city": "LAGOA VERMELHA",
    "electionZone": "28",
    "stateCode": "RS"
  },
  {
    "city": "CASCA",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "SENADOR SALGADO FILHO",
    "electionZone": "127",
    "stateCode": "RS"
  },
  {
    "city": "LINHA NOVA",
    "electionZone": "165",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO INHACORÁ",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "GRAMADO DOS LOUREIROS",
    "electionZone": "99",
    "stateCode": "RS"
  },
  {
    "city": "CAMPO BOM",
    "electionZone": "105",
    "stateCode": "RS"
  },
  {
    "city": "ENTRE RIOS DO SUL",
    "electionZone": "168",
    "stateCode": "RS"
  },
  {
    "city": "VERA CRUZ",
    "electionZone": "162",
    "stateCode": "RS"
  },
  {
    "city": "CANGUÇU",
    "electionZone": "14",
    "stateCode": "RS"
  },
  {
    "city": "SÃO FRANCISCO DE PAULA",
    "electionZone": "48",
    "stateCode": "RS"
  },
  {
    "city": "BARÃO DE COTEGIPE",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "SANTO EXPEDITO DO SUL",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "SETE DE SETEMBRO",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "ALEGRIA",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "JACUTINGA",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "CATUÍPE",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOÃO DO POLÊSINE",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "MATO QUEIMADO",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "SERAFINA CORRÊA",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "HERVAL",
    "electionZone": "92",
    "stateCode": "RS"
  },
  {
    "city": "VICENTE DUTRA",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "MUITOS CAPÕES",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "IBIRAIARAS",
    "electionZone": "28",
    "stateCode": "RS"
  },
  {
    "city": "COLORADO",
    "electionZone": "109",
    "stateCode": "RS"
  },
  {
    "city": "PEJUÇARA",
    "electionZone": "17",
    "stateCode": "RS"
  },
  {
    "city": "ALECRIM",
    "electionZone": "102",
    "stateCode": "RS"
  },
  {
    "city": "TUNAS",
    "electionZone": "154",
    "stateCode": "RS"
  },
  {
    "city": "SÃO VENDELINO",
    "electionZone": "165",
    "stateCode": "RS"
  },
  {
    "city": "FLORIANO PEIXOTO",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "TRIUNFO",
    "electionZone": "133",
    "stateCode": "RS"
  },
  {
    "city": "VISTA ALEGRE DO PRATA",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "IGREJINHA",
    "electionZone": "149",
    "stateCode": "RS"
  },
  {
    "city": "LAVRAS DO SUL",
    "electionZone": "9",
    "stateCode": "RS"
  },
  {
    "city": "AJURICABA",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "DOIS IRMÃOS",
    "electionZone": "153",
    "stateCode": "RS"
  },
  {
    "city": "NOVA ARAÇÁ",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "MATO CASTELHANO",
    "electionZone": "128",
    "stateCode": "RS"
  },
  {
    "city": "CERRO BRANCO",
    "electionZone": "10",
    "stateCode": "RS"
  },
  {
    "city": "ITAPUCA",
    "electionZone": "145",
    "stateCode": "RS"
  },
  {
    "city": "ROLANTE",
    "electionZone": "55",
    "stateCode": "RS"
  },
  {
    "city": "CAMPINAS DO SUL",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "ESTRELA",
    "electionZone": "21",
    "stateCode": "RS"
  },
  {
    "city": "SEGREDO",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "SAPIRANGA",
    "electionZone": "131",
    "stateCode": "RS"
  },
  {
    "city": "GENERAL CÂMARA",
    "electionZone": "50",
    "stateCode": "RS"
  },
  {
    "city": "LAJEADO DO BUGRE",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "PLANALTO",
    "electionZone": "144",
    "stateCode": "RS"
  },
  {
    "city": "TRAVESSEIRO",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "BOA VISTA DO SUL",
    "electionZone": "98",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "114",
    "stateCode": "RS"
  },
  {
    "city": "SARANDI",
    "electionZone": "83",
    "stateCode": "RS"
  },
  {
    "city": "SAPUCAIA DO SUL",
    "electionZone": "108",
    "stateCode": "RS"
  },
  {
    "city": "NOVO TIRADENTES",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "ESTAÇÃO",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS CACHOEIRAS",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "VILA LÂNGARO",
    "electionZone": "100",
    "stateCode": "RS"
  },
  {
    "city": "BARÃO",
    "electionZone": "152",
    "stateCode": "RS"
  },
  {
    "city": "CRUZEIRO DO SUL",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "BOM PRINCÍPIO",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO DO MEIO",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "TABAÍ",
    "electionZone": "56",
    "stateCode": "RS"
  },
  {
    "city": "RODEIO BONITO",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "LAGOA BONITA DO SUL",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "VISTA GAÚCHA",
    "electionZone": "101",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO SUL",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "MAXIMILIANO DE ALMEIDA",
    "electionZone": "95",
    "stateCode": "RS"
  },
  {
    "city": "VIADUTOS",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "PINHAL DA SERRA",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "COLINAS",
    "electionZone": "21",
    "stateCode": "RS"
  },
  {
    "city": "SANTO CRISTO",
    "electionZone": "102",
    "stateCode": "RS"
  },
  {
    "city": "PARAÍ",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "AGUDO",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "CIRÍACO",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "BOA VISTA DO INCRA",
    "electionZone": "17",
    "stateCode": "RS"
  },
  {
    "city": "SALVADOR DO SUL",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "BOQUEIRÃO DO LEÃO",
    "electionZone": "93",
    "stateCode": "RS"
  },
  {
    "city": "CARLOS BARBOSA",
    "electionZone": "152",
    "stateCode": "RS"
  },
  {
    "city": "ACEGUÁ",
    "electionZone": "7",
    "stateCode": "RS"
  },
  {
    "city": "SANTA VITÓRIA DO PALMAR",
    "electionZone": "43",
    "stateCode": "RS"
  },
  {
    "city": "ENGENHO VELHO",
    "electionZone": "146",
    "stateCode": "RS"
  },
  {
    "city": "CERRO GRANDE DO SUL",
    "electionZone": "84",
    "stateCode": "RS"
  },
  {
    "city": "SEBERI",
    "electionZone": "132",
    "stateCode": "RS"
  },
  {
    "city": "MAÇAMBARÁ",
    "electionZone": "24",
    "stateCode": "RS"
  },
  {
    "city": "TUPANCI DO SUL",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "RIO PARDO",
    "electionZone": "38",
    "stateCode": "RS"
  },
  {
    "city": "GRAVATAÍ",
    "electionZone": "71",
    "stateCode": "RS"
  },
  {
    "city": "TRINDADE DO SUL",
    "electionZone": "99",
    "stateCode": "RS"
  },
  {
    "city": "VILA NOVA DO SUL",
    "electionZone": "82",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "111",
    "stateCode": "RS"
  },
  {
    "city": "CHARQUEADAS",
    "electionZone": "50",
    "stateCode": "RS"
  },
  {
    "city": "BUTIÁ",
    "electionZone": "116",
    "stateCode": "RS"
  },
  {
    "city": "BARÃO DO TRIUNFO",
    "electionZone": "50",
    "stateCode": "RS"
  },
  {
    "city": "BALNEÁRIO PINHAL",
    "electionZone": "110",
    "stateCode": "RS"
  },
  {
    "city": "CANDELÁRIA",
    "electionZone": "13",
    "stateCode": "RS"
  },
  {
    "city": "SÃO MARCOS",
    "electionZone": "137",
    "stateCode": "RS"
  },
  {
    "city": "ROCA SALES",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "HARMONIA",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "MORRINHOS DO SUL",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "ALEGRETE",
    "electionZone": "5",
    "stateCode": "RS"
  },
  {
    "city": "GRAMADO",
    "electionZone": "106",
    "stateCode": "RS"
  },
  {
    "city": "ANTÔNIO PRADO",
    "electionZone": "6",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO DO TIGRE",
    "electionZone": "154",
    "stateCode": "RS"
  },
  {
    "city": "RIO DOS ÍNDIOS",
    "electionZone": "99",
    "stateCode": "RS"
  },
  {
    "city": "ALTO FELIZ",
    "electionZone": "165",
    "stateCode": "RS"
  },
  {
    "city": "SANTO AUGUSTO",
    "electionZone": "107",
    "stateCode": "RS"
  },
  {
    "city": "NOVA PÁDUA",
    "electionZone": "68",
    "stateCode": "RS"
  },
  {
    "city": "MIRAGUAÍ",
    "electionZone": "101",
    "stateCode": "RS"
  },
  {
    "city": "PALMARES DO SUL",
    "electionZone": "156",
    "stateCode": "RS"
  },
  {
    "city": "SALTO DO JACUÍ",
    "electionZone": "154",
    "stateCode": "RS"
  },
  {
    "city": "PORTO MAUÁ",
    "electionZone": "42",
    "stateCode": "RS"
  },
  {
    "city": "IJUÍ",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "SÃO VICENTE DO SUL",
    "electionZone": "69",
    "stateCode": "RS"
  },
  {
    "city": "ERNESTINA",
    "electionZone": "128",
    "stateCode": "RS"
  },
  {
    "city": "NOVO HAMBURGO",
    "electionZone": "172",
    "stateCode": "RS"
  },
  {
    "city": "CAMPINA DAS MISSÕES",
    "electionZone": "166",
    "stateCode": "RS"
  },
  {
    "city": "FAGUNDES VARELA",
    "electionZone": "88",
    "stateCode": "RS"
  },
  {
    "city": "SÃO VALENTIM",
    "electionZone": "168",
    "stateCode": "RS"
  },
  {
    "city": "ARVOREZINHA",
    "electionZone": "145",
    "stateCode": "RS"
  },
  {
    "city": "CHIAPETTA",
    "electionZone": "107",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS PASSOS",
    "electionZone": "86",
    "stateCode": "RS"
  },
  {
    "city": "NOVA PETRÓPOLIS",
    "electionZone": "129",
    "stateCode": "RS"
  },
  {
    "city": "SANTA MARIA",
    "electionZone": "41",
    "stateCode": "RS"
  },
  {
    "city": "SANTA MARIA",
    "electionZone": "147",
    "stateCode": "RS"
  },
  {
    "city": "PEDRO OSÓRIO",
    "electionZone": "123",
    "stateCode": "RS"
  },
  {
    "city": "CAPÃO DA CANOA",
    "electionZone": "150",
    "stateCode": "RS"
  },
  {
    "city": "CACHOEIRINHA",
    "electionZone": "139",
    "stateCode": "RS"
  },
  {
    "city": "CRISSIUMAL",
    "electionZone": "91",
    "stateCode": "RS"
  },
  {
    "city": "SÃO LEOPOLDO",
    "electionZone": "73",
    "stateCode": "RS"
  },
  {
    "city": "BAGÉ",
    "electionZone": "7",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO HERVAL",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "CRUZ ALTA",
    "electionZone": "17",
    "stateCode": "RS"
  },
  {
    "city": "CANOAS",
    "electionZone": "170",
    "stateCode": "RS"
  },
  {
    "city": "CANOAS",
    "electionZone": "134",
    "stateCode": "RS"
  },
  {
    "city": "SANANDUVA",
    "electionZone": "95",
    "stateCode": "RS"
  },
  {
    "city": "SOBRADINHO",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "PARECI NOVO",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "BRAGA",
    "electionZone": "140",
    "stateCode": "RS"
  },
  {
    "city": "MONTE BELO DO SUL",
    "electionZone": "8",
    "stateCode": "RS"
  },
  {
    "city": "TRAMANDAÍ",
    "electionZone": "110",
    "stateCode": "RS"
  },
  {
    "city": "VIAMÃO",
    "electionZone": "72",
    "stateCode": "RS"
  },
  {
    "city": "SAGRADA FAMÍLIA",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "RELVADO",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "MARATÁ",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "URUGUAIANA",
    "electionZone": "57",
    "stateCode": "RS"
  },
  {
    "city": "FREDERICO WESTPHALEN",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "SÃO VALENTIM DO SUL",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "SANTA CRUZ DO SUL",
    "electionZone": "162",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO DOS RATOS",
    "electionZone": "50",
    "stateCode": "RS"
  },
  {
    "city": "PARAÍSO DO SUL",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "SENTINELA DO SUL",
    "electionZone": "84",
    "stateCode": "RS"
  },
  {
    "city": "NOVO HAMBURGO",
    "electionZone": "76",
    "stateCode": "RS"
  },
  {
    "city": "CACIQUE DOBLE",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "MINAS DO LEÃO",
    "electionZone": "116",
    "stateCode": "RS"
  },
  {
    "city": "SÃO PEDRO DA SERRA",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "VENÂNCIO AIRES",
    "electionZone": "93",
    "stateCode": "RS"
  },
  {
    "city": "TUCUNDUVA",
    "electionZone": "120",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO NORTE",
    "electionZone": "130",
    "stateCode": "RS"
  },
  {
    "city": "ELDORADO DO SUL",
    "electionZone": "90",
    "stateCode": "RS"
  },
  {
    "city": "ÁGUA SANTA",
    "electionZone": "100",
    "stateCode": "RS"
  },
  {
    "city": "PRESIDENTE LUCENA",
    "electionZone": "118",
    "stateCode": "RS"
  },
  {
    "city": "SEVERIANO DE ALMEIDA",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "DOM PEDRITO",
    "electionZone": "18",
    "stateCode": "RS"
  },
  {
    "city": "COXILHA",
    "electionZone": "33",
    "stateCode": "RS"
  },
  {
    "city": "CAPITÃO",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "FARROUPILHA",
    "electionZone": "61",
    "stateCode": "RS"
  },
  {
    "city": "CERRO LARGO",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "SANTA CLARA DO SUL",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "MARAU",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "PANAMBI",
    "electionZone": "115",
    "stateCode": "RS"
  },
  {
    "city": "INHACORÁ",
    "electionZone": "107",
    "stateCode": "RS"
  },
  {
    "city": "TERRA DE AREIA",
    "electionZone": "77",
    "stateCode": "RS"
  },
  {
    "city": "BOA VISTA DO CADEADO",
    "electionZone": "17",
    "stateCode": "RS"
  },
  {
    "city": "TORRES",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "HUMAITÁ",
    "electionZone": "91",
    "stateCode": "RS"
  },
  {
    "city": "TUPARENDI",
    "electionZone": "42",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS PALMEIRAS",
    "electionZone": "167",
    "stateCode": "RS"
  },
  {
    "city": "DILERMANDO DE AGUIAR",
    "electionZone": "81",
    "stateCode": "RS"
  },
  {
    "city": "PEDRAS ALTAS",
    "electionZone": "35",
    "stateCode": "RS"
  },
  {
    "city": "NOVA ALVORADA",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "PAROBÉ",
    "electionZone": "55",
    "stateCode": "RS"
  },
  {
    "city": "SÃO PAULO DAS MISSÕES",
    "electionZone": "166",
    "stateCode": "RS"
  },
  {
    "city": "NOVO BARREIRO",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "ENCANTADO",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "SÃO SEPÉ",
    "electionZone": "82",
    "stateCode": "RS"
  },
  {
    "city": "SÃO MARTINHO",
    "electionZone": "107",
    "stateCode": "RS"
  },
  {
    "city": "BARRACÃO",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "SANTO ANTÔNIO DO PALMA",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "SÃO LEOPOLDO",
    "electionZone": "51",
    "stateCode": "RS"
  },
  {
    "city": "SOLEDADE",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "LAJEADO",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "IMBÉ",
    "electionZone": "110",
    "stateCode": "RS"
  },
  {
    "city": "SANTA TEREZA",
    "electionZone": "8",
    "stateCode": "RS"
  },
  {
    "city": "CRISTAL",
    "electionZone": "12",
    "stateCode": "RS"
  },
  {
    "city": "RIOZINHO",
    "electionZone": "55",
    "stateCode": "RS"
  },
  {
    "city": "RIO GRANDE",
    "electionZone": "37",
    "stateCode": "RS"
  },
  {
    "city": "RIO GRANDE",
    "electionZone": "163",
    "stateCode": "RS"
  },
  {
    "city": "ESPUMOSO",
    "electionZone": "4",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "158",
    "stateCode": "RS"
  },
  {
    "city": "PELOTAS",
    "electionZone": "164",
    "stateCode": "RS"
  },
  {
    "city": "VACARIA",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "CACHOEIRINHA",
    "electionZone": "143",
    "stateCode": "RS"
  },
  {
    "city": "ROSÁRIO DO SUL",
    "electionZone": "39",
    "stateCode": "RS"
  },
  {
    "city": "IRAÍ",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "SANTA MARIA",
    "electionZone": "135",
    "stateCode": "RS"
  },
  {
    "city": "VILA FLORES",
    "electionZone": "88",
    "stateCode": "RS"
  },
  {
    "city": "ENCRUZILHADA DO SUL",
    "electionZone": "19",
    "stateCode": "RS"
  },
  {
    "city": "SÃO PEDRO DO SUL",
    "electionZone": "81",
    "stateCode": "RS"
  },
  {
    "city": "GRAMADO XAVIER",
    "electionZone": "40",
    "stateCode": "RS"
  },
  {
    "city": "CHAPADA",
    "electionZone": "15",
    "stateCode": "RS"
  },
  {
    "city": "BARROS CASSAL",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DAS MISSÕES",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO DO SAL",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "CIDREIRA",
    "electionZone": "110",
    "stateCode": "RS"
  },
  {
    "city": "COQUEIRO BAIXO",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "SANTA CRUZ DO SUL",
    "electionZone": "40",
    "stateCode": "RS"
  },
  {
    "city": "PALMEIRA DAS MISSÕES",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "SANTO ÂNGELO",
    "electionZone": "45",
    "stateCode": "RS"
  },
  {
    "city": "LAGOÃO",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "ITAARA",
    "electionZone": "135",
    "stateCode": "RS"
  },
  {
    "city": "NONOAI",
    "electionZone": "99",
    "stateCode": "RS"
  },
  {
    "city": "NOVA BRÉSCIA",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "CENTENÁRIO",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JERÔNIMO",
    "electionZone": "50",
    "stateCode": "RS"
  },
  {
    "city": "IBARAMA",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "IBIRUBÁ",
    "electionZone": "121",
    "stateCode": "RS"
  },
  {
    "city": "CAPELA DE SANTANA",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "ARATIBA",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "SÃO LOURENÇO DO SUL",
    "electionZone": "80",
    "stateCode": "RS"
  },
  {
    "city": "CACHOEIRA DO SUL",
    "electionZone": "10",
    "stateCode": "RS"
  },
  {
    "city": "BOA VISTA DO BURICÁ",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "PELOTAS",
    "electionZone": "60",
    "stateCode": "RS"
  },
  {
    "city": "PELOTAS",
    "electionZone": "34",
    "stateCode": "RS"
  },
  {
    "city": "HORIZONTINA",
    "electionZone": "120",
    "stateCode": "RS"
  },
  {
    "city": "ESTÂNCIA VELHA",
    "electionZone": "118",
    "stateCode": "RS"
  },
  {
    "city": "MONTENEGRO",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "GUAÍBA",
    "electionZone": "90",
    "stateCode": "RS"
  },
  {
    "city": "CANELA",
    "electionZone": "65",
    "stateCode": "RS"
  },
  {
    "city": "NOVO CABRAIS",
    "electionZone": "10",
    "stateCode": "RS"
  },
  {
    "city": "SÃO MARTINHO DA SERRA",
    "electionZone": "41",
    "stateCode": "RS"
  },
  {
    "city": "SÃO BORJA",
    "electionZone": "47",
    "stateCode": "RS"
  },
  {
    "city": "BARRA DO GUARITA",
    "electionZone": "101",
    "stateCode": "RS"
  },
  {
    "city": "SANTO ANTÔNIO DA PATRULHA",
    "electionZone": "46",
    "stateCode": "RS"
  },
  {
    "city": "CHUÍ",
    "electionZone": "43",
    "stateCode": "RS"
  },
  {
    "city": "REDENTORA",
    "electionZone": "140",
    "stateCode": "RS"
  },
  {
    "city": "BENTO GONÇALVES",
    "electionZone": "8",
    "stateCode": "RS"
  },
  {
    "city": "MACHADINHO",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "RESTINGA SÊCA",
    "electionZone": "157",
    "stateCode": "RS"
  },
  {
    "city": "NOVA HARTZ",
    "electionZone": "131",
    "stateCode": "RS"
  },
  {
    "city": "BARRA DO QUARAÍ",
    "electionZone": "57",
    "stateCode": "RS"
  },
  {
    "city": "RONDINHA",
    "electionZone": "167",
    "stateCode": "RS"
  },
  {
    "city": "SANTA ROSA",
    "electionZone": "42",
    "stateCode": "RS"
  },
  {
    "city": "TENENTE PORTELA",
    "electionZone": "101",
    "stateCode": "RS"
  },
  {
    "city": "SALVADOR DAS MISSÕES",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "TAPES",
    "electionZone": "84",
    "stateCode": "RS"
  },
  {
    "city": "PORTO ALEGRE",
    "electionZone": "1",
    "stateCode": "RS"
  },
  {
    "city": "VIAMÃO",
    "electionZone": "59",
    "stateCode": "RS"
  },
  {
    "city": "TAPEJARA",
    "electionZone": "100",
    "stateCode": "RS"
  },
  {
    "city": "TIO HUGO",
    "electionZone": "117",
    "stateCode": "RS"
  },
  {
    "city": "CHUVISCA",
    "electionZone": "12",
    "stateCode": "RS"
  },
  {
    "city": "SÃO SEBASTIÃO DO CAÍ",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "JÚLIO DE CASTILHOS",
    "electionZone": "27",
    "stateCode": "RS"
  },
  {
    "city": "PASSO FUNDO",
    "electionZone": "128",
    "stateCode": "RS"
  },
  {
    "city": "GAURAMA",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "SANTA MARGARIDA DO SUL",
    "electionZone": "49",
    "stateCode": "RS"
  },
  {
    "city": "CARAZINHO",
    "electionZone": "15",
    "stateCode": "RS"
  },
  {
    "city": "CANOAS",
    "electionZone": "171",
    "stateCode": "RS"
  },
  {
    "city": "QUINZE DE NOVEMBRO",
    "electionZone": "121",
    "stateCode": "RS"
  },
  {
    "city": "NICOLAU VERGUEIRO",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "BARRA DO RIBEIRO",
    "electionZone": "151",
    "stateCode": "RS"
  },
  {
    "city": "ENTRE-IJUÍS",
    "electionZone": "45",
    "stateCode": "RS"
  },
  {
    "city": "FORMIGUEIRO",
    "electionZone": "82",
    "stateCode": "RS"
  },
  {
    "city": "SÃO DOMINGOS DO SUL",
    "electionZone": "138",
    "stateCode": "RS"
  },
  {
    "city": "CAMBARÁ DO SUL",
    "electionZone": "48",
    "stateCode": "RS"
  },
  {
    "city": "CAPÃO DO LEÃO",
    "electionZone": "164",
    "stateCode": "RS"
  },
  {
    "city": "PIRATINI",
    "electionZone": "78",
    "stateCode": "RS"
  },
  {
    "city": "ITAQUI",
    "electionZone": "24",
    "stateCode": "RS"
  },
  {
    "city": "PANTANO GRANDE",
    "electionZone": "38",
    "stateCode": "RS"
  },
  {
    "city": "SANTANA DO LIVRAMENTO",
    "electionZone": "30",
    "stateCode": "RS"
  },
  {
    "city": "BAGÉ",
    "electionZone": "142",
    "stateCode": "RS"
  },
  {
    "city": "ERECHIM",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "TURUÇU",
    "electionZone": "60",
    "stateCode": "RS"
  },
  {
    "city": "SERTÃO SANTANA",
    "electionZone": "151",
    "stateCode": "RS"
  },
  {
    "city": "BOZANO",
    "electionZone": "23",
    "stateCode": "RS"
  },
  {
    "city": "PROGRESSO",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "MARIANA PIMENTEL",
    "electionZone": "151",
    "stateCode": "RS"
  },
  {
    "city": "IVORÁ",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS COROAS",
    "electionZone": "149",
    "stateCode": "RS"
  },
  {
    "city": "JAGUARÃO",
    "electionZone": "25",
    "stateCode": "RS"
  },
  {
    "city": "PORTÃO",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "GUAPORÉ",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "ARARICÁ",
    "electionZone": "131",
    "stateCode": "RS"
  },
  {
    "city": "QUEVEDOS",
    "electionZone": "81",
    "stateCode": "RS"
  },
  {
    "city": "CACEQUI",
    "electionZone": "69",
    "stateCode": "RS"
  },
  {
    "city": "UNISTALDA",
    "electionZone": "44",
    "stateCode": "RS"
  },
  {
    "city": "LIBERATO SALZANO",
    "electionZone": "146",
    "stateCode": "RS"
  },
  {
    "city": "JARI",
    "electionZone": "87",
    "stateCode": "RS"
  },
  {
    "city": "CAMARGO",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "TRÊS FORQUILHAS",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "NOVA ROMA DO SUL",
    "electionZone": "6",
    "stateCode": "RS"
  },
  {
    "city": "FAZENDA VILANOVA",
    "electionZone": "21",
    "stateCode": "RS"
  },
  {
    "city": "CAPÃO DO CIPÓ",
    "electionZone": "44",
    "stateCode": "RS"
  },
  {
    "city": "PORTO LUCENA",
    "electionZone": "102",
    "stateCode": "RS"
  },
  {
    "city": "SÃO PEDRO DAS MISSÕES",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "ESMERALDA",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "ERECHIM",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "DOM PEDRO DE ALCÂNTARA",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "DOUTOR RICARDO",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "CORONEL BICACO",
    "electionZone": "140",
    "stateCode": "RS"
  },
  {
    "city": "MUÇUM",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "BROCHIER",
    "electionZone": "31",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DOS AUSENTES",
    "electionZone": "63",
    "stateCode": "RS"
  },
  {
    "city": "NOVA PALMA",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "JAGUARI",
    "electionZone": "26",
    "stateCode": "RS"
  },
  {
    "city": "GUARANI DAS MISSÕES",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "CAMPO NOVO",
    "electionZone": "140",
    "stateCode": "RS"
  },
  {
    "city": "FAXINAL DO SOTURNO",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "POUSO NOVO",
    "electionZone": "104",
    "stateCode": "RS"
  },
  {
    "city": "CÂNDIDO GODÓI",
    "electionZone": "166",
    "stateCode": "RS"
  },
  {
    "city": "AUGUSTO PESTANA",
    "electionZone": "155",
    "stateCode": "RS"
  },
  {
    "city": "CAPÃO BONITO DO SUL",
    "electionZone": "28",
    "stateCode": "RS"
  },
  {
    "city": "ÁUREA",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "MARCELINO RAMOS",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "MOSTARDAS",
    "electionZone": "122",
    "stateCode": "RS"
  },
  {
    "city": "IBIAÇÁ",
    "electionZone": "95",
    "stateCode": "RS"
  },
  {
    "city": "LAGOA DOS TRÊS CANTOS",
    "electionZone": "109",
    "stateCode": "RS"
  },
  {
    "city": "MANOEL VIANA",
    "electionZone": "79",
    "stateCode": "RS"
  },
  {
    "city": "ARAMBARÉ",
    "electionZone": "12",
    "stateCode": "RS"
  },
  {
    "city": "DOIS IRMÃOS DAS MISSÕES",
    "electionZone": "132",
    "stateCode": "RS"
  },
  {
    "city": "VESPASIANO CORRÊA",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "ESTRELA VELHA",
    "electionZone": "154",
    "stateCode": "RS"
  },
  {
    "city": "SANTO ANTÔNIO DO PLANALTO",
    "electionZone": "15",
    "stateCode": "RS"
  },
  {
    "city": "SÃO FRANCISCO DE ASSIS",
    "electionZone": "79",
    "stateCode": "RS"
  },
  {
    "city": "WESTFÁLIA",
    "electionZone": "125",
    "stateCode": "RS"
  },
  {
    "city": "SANTO ANTÔNIO DAS MISSÕES",
    "electionZone": "141",
    "stateCode": "RS"
  },
  {
    "city": "CAPIVARI DO SUL",
    "electionZone": "156",
    "stateCode": "RS"
  },
  {
    "city": "PAULO BENTO",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "CASEIROS",
    "electionZone": "28",
    "stateCode": "RS"
  },
  {
    "city": "SANTANA DA BOA VISTA",
    "electionZone": "9",
    "stateCode": "RS"
  },
  {
    "city": "SANTA MARIA DO HERVAL",
    "electionZone": "153",
    "stateCode": "RS"
  },
  {
    "city": "ROQUE GONZALES",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "QUARAÍ",
    "electionZone": "36",
    "stateCode": "RS"
  },
  {
    "city": "BENJAMIN CONSTANT DO SUL",
    "electionZone": "168",
    "stateCode": "RS"
  },
  {
    "city": "SEDE NOVA",
    "electionZone": "91",
    "stateCode": "RS"
  },
  {
    "city": "CHARRUA",
    "electionZone": "100",
    "stateCode": "RS"
  },
  {
    "city": "HERVEIRAS",
    "electionZone": "40",
    "stateCode": "RS"
  },
  {
    "city": "MAMPITUBA",
    "electionZone": "85",
    "stateCode": "RS"
  },
  {
    "city": "TOROPI",
    "electionZone": "81",
    "stateCode": "RS"
  },
  {
    "city": "BOA VISTA DAS MISSÕES",
    "electionZone": "32",
    "stateCode": "RS"
  },
  {
    "city": "ERVAL GRANDE",
    "electionZone": "168",
    "stateCode": "RS"
  },
  {
    "city": "NOVA CANDELÁRIA",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "CERRITO",
    "electionZone": "123",
    "stateCode": "RS"
  },
  {
    "city": "BOM RETIRO DO SUL",
    "electionZone": "21",
    "stateCode": "RS"
  },
  {
    "city": "CANDIOTA",
    "electionZone": "142",
    "stateCode": "RS"
  },
  {
    "city": "CERRO GRANDE",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "CRUZALTENSE",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "GENTIL",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "CANUDOS DO VALE",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "VILA MARIA",
    "electionZone": "62",
    "stateCode": "RS"
  },
  {
    "city": "IPIRANGA DO SUL",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "CARAÁ",
    "electionZone": "46",
    "stateCode": "RS"
  },
  {
    "city": "DOM FELICIANO",
    "electionZone": "12",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO GRANDE",
    "electionZone": "92",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO HORTÊNCIO",
    "electionZone": "11",
    "stateCode": "RS"
  },
  {
    "city": "NOVA SANTA RITA",
    "electionZone": "170",
    "stateCode": "RS"
  },
  {
    "city": "ILÓPOLIS",
    "electionZone": "145",
    "stateCode": "RS"
  },
  {
    "city": "NOVA PRATA",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "BOSSOROCA",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "GETÚLIO VARGAS",
    "electionZone": "70",
    "stateCode": "RS"
  },
  {
    "city": "SELBACH",
    "electionZone": "109",
    "stateCode": "RS"
  },
  {
    "city": "BARRA DO RIO AZUL",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "SÃO VALÉRIO DO SUL",
    "electionZone": "107",
    "stateCode": "RS"
  },
  {
    "city": "PORTO XAVIER",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "JAQUIRANA",
    "electionZone": "63",
    "stateCode": "RS"
  },
  {
    "city": "PAIM FILHO",
    "electionZone": "95",
    "stateCode": "RS"
  },
  {
    "city": "NOVA BASSANO",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "GARRUCHOS",
    "electionZone": "141",
    "stateCode": "RS"
  },
  {
    "city": "PROTÁSIO ALVES",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "PASSO FUNDO",
    "electionZone": "33",
    "stateCode": "RS"
  },
  {
    "city": "IVOTI",
    "electionZone": "118",
    "stateCode": "RS"
  },
  {
    "city": "NÃO-ME-TOQUE",
    "electionZone": "117",
    "stateCode": "RS"
  },
  {
    "city": "ANDRÉ DA ROCHA",
    "electionZone": "75",
    "stateCode": "RS"
  },
  {
    "city": "FONTOURA XAVIER",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "SANTIAGO",
    "electionZone": "44",
    "stateCode": "RS"
  },
  {
    "city": "SANTA CECÍLIA DO SUL",
    "electionZone": "100",
    "stateCode": "RS"
  },
  {
    "city": "AMETISTA DO SUL",
    "electionZone": "64",
    "stateCode": "RS"
  },
  {
    "city": "FLORES DA CUNHA",
    "electionZone": "68",
    "stateCode": "RS"
  },
  {
    "city": "ARROIO DO PADRE",
    "electionZone": "34",
    "stateCode": "RS"
  },
  {
    "city": "INDEPENDÊNCIA",
    "electionZone": "89",
    "stateCode": "RS"
  },
  {
    "city": "UBIRETAMA",
    "electionZone": "96",
    "stateCode": "RS"
  },
  {
    "city": "CAMPOS BORGES",
    "electionZone": "4",
    "stateCode": "RS"
  },
  {
    "city": "XANGRI-LÁ",
    "electionZone": "150",
    "stateCode": "RS"
  },
  {
    "city": "FELIZ",
    "electionZone": "165",
    "stateCode": "RS"
  },
  {
    "city": "TAQUARI",
    "electionZone": "56",
    "stateCode": "RS"
  },
  {
    "city": "PUTINGA",
    "electionZone": "145",
    "stateCode": "RS"
  },
  {
    "city": "ALPESTRE",
    "electionZone": "144",
    "stateCode": "RS"
  },
  {
    "city": "PASSA SETE",
    "electionZone": "53",
    "stateCode": "RS"
  },
  {
    "city": "MORRO REDONDO",
    "electionZone": "164",
    "stateCode": "RS"
  },
  {
    "city": "LINDOLFO COLLOR",
    "electionZone": "118",
    "stateCode": "RS"
  },
  {
    "city": "GIRUÁ",
    "electionZone": "127",
    "stateCode": "RS"
  },
  {
    "city": "BARRA FUNDA",
    "electionZone": "83",
    "stateCode": "RS"
  },
  {
    "city": "NOVA ESPERANÇA DO SUL",
    "electionZone": "26",
    "stateCode": "RS"
  },
  {
    "city": "PIRAPÓ",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "MORRO REUTER",
    "electionZone": "153",
    "stateCode": "RS"
  },
  {
    "city": "PINTO BANDEIRA",
    "electionZone": "8",
    "stateCode": "RS"
  },
  {
    "city": "VALE VERDE",
    "electionZone": "162",
    "stateCode": "RS"
  },
  {
    "city": "SÃO NICOLAU",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "PORTO VERA CRUZ",
    "electionZone": "102",
    "stateCode": "RS"
  },
  {
    "city": "PINHAL GRANDE",
    "electionZone": "27",
    "stateCode": "RS"
  },
  {
    "city": "PALMITINHO",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "ESPERANÇA DO SUL",
    "electionZone": "86",
    "stateCode": "RS"
  },
  {
    "city": "NOVO MACHADO",
    "electionZone": "120",
    "stateCode": "RS"
  },
  {
    "city": "JACUIZINHO",
    "electionZone": "154",
    "stateCode": "RS"
  },
  {
    "city": "DONA FRANCISCA",
    "electionZone": "119",
    "stateCode": "RS"
  },
  {
    "city": "TIRADENTES DO SUL",
    "electionZone": "86",
    "stateCode": "RS"
  },
  {
    "city": "VALE REAL",
    "electionZone": "165",
    "stateCode": "RS"
  },
  {
    "city": "AMARAL FERRADOR",
    "electionZone": "19",
    "stateCode": "RS"
  },
  {
    "city": "VALE DO SOL",
    "electionZone": "162",
    "stateCode": "RS"
  },
  {
    "city": "SÃO MIGUEL DAS MISSÕES",
    "electionZone": "45",
    "stateCode": "RS"
  },
  {
    "city": "RONDA ALTA",
    "electionZone": "167",
    "stateCode": "RS"
  },
  {
    "city": "PICADA CAFÉ",
    "electionZone": "129",
    "stateCode": "RS"
  },
  {
    "city": "SINIMBU",
    "electionZone": "40",
    "stateCode": "RS"
  },
  {
    "city": "OSÓRIO",
    "electionZone": "77",
    "stateCode": "RS"
  },
  {
    "city": "IPÊ",
    "electionZone": "6",
    "stateCode": "RS"
  },
  {
    "city": "SILVEIRA MARTINS",
    "electionZone": "147",
    "stateCode": "RS"
  },
  {
    "city": "NOVO XINGU",
    "electionZone": "146",
    "stateCode": "RS"
  },
  {
    "city": "TEUTÔNIA",
    "electionZone": "125",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOÃO DA URTIGA",
    "electionZone": "95",
    "stateCode": "RS"
  },
  {
    "city": "ITACURUBI",
    "electionZone": "44",
    "stateCode": "RS"
  },
  {
    "city": "CONDOR",
    "electionZone": "115",
    "stateCode": "RS"
  },
  {
    "city": "VICTOR GRAEFF",
    "electionZone": "117",
    "stateCode": "RS"
  },
  {
    "city": "TAVARES",
    "electionZone": "122",
    "stateCode": "RS"
  },
  {
    "city": "TAQUARA",
    "electionZone": "55",
    "stateCode": "RS"
  },
  {
    "city": "MAQUINÉ",
    "electionZone": "77",
    "stateCode": "RS"
  },
  {
    "city": "SANTA BÁRBARA DO SUL",
    "electionZone": "115",
    "stateCode": "RS"
  },
  {
    "city": "ITATIBA DO SUL",
    "electionZone": "20",
    "stateCode": "RS"
  },
  {
    "city": "ANTA GORDA",
    "electionZone": "67",
    "stateCode": "RS"
  },
  {
    "city": "MATA",
    "electionZone": "69",
    "stateCode": "RS"
  },
  {
    "city": "DOUTOR MAURÍCIO CARDOSO",
    "electionZone": "120",
    "stateCode": "RS"
  },
  {
    "city": "ALTO ALEGRE",
    "electionZone": "4",
    "stateCode": "RS"
  },
  {
    "city": "SÃO GABRIEL",
    "electionZone": "49",
    "stateCode": "RS"
  },
  {
    "city": "TAPERA",
    "electionZone": "109",
    "stateCode": "RS"
  },
  {
    "city": "SÃO LUIZ GONZAGA",
    "electionZone": "52",
    "stateCode": "RS"
  },
  {
    "city": "HULHA NEGRA",
    "electionZone": "142",
    "stateCode": "RS"
  },
  {
    "city": "PINHEIRINHO DO VALE",
    "electionZone": "94",
    "stateCode": "RS"
  },
  {
    "city": "UNIÃO DA SERRA",
    "electionZone": "22",
    "stateCode": "RS"
  },
  {
    "city": "DERRUBADAS",
    "electionZone": "101",
    "stateCode": "RS"
  },
  {
    "city": "FORQUETINHA",
    "electionZone": "29",
    "stateCode": "RS"
  },
  {
    "city": "BOM JESUS",
    "electionZone": "63",
    "stateCode": "RS"
  },
  {
    "city": "JÓIA",
    "electionZone": "155",
    "stateCode": "RS"
  },
  {
    "city": "ALMIRANTE TAMANDARÉ DO SUL",
    "electionZone": "15",
    "stateCode": "RS"
  },
  {
    "city": "ERVAL SECO",
    "electionZone": "132",
    "stateCode": "RS"
  },
  {
    "city": "EUGÊNIO DE CASTRO",
    "electionZone": "45",
    "stateCode": "RS"
  },
  {
    "city": "MORMAÇO",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "PONTE PRETA",
    "electionZone": "148",
    "stateCode": "RS"
  },
  {
    "city": "MULITERNO",
    "electionZone": "28",
    "stateCode": "RS"
  },
  {
    "city": "MONTE ALEGRE DOS CAMPOS",
    "electionZone": "58",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOSÉ DO OURO",
    "electionZone": "103",
    "stateCode": "RS"
  },
  {
    "city": "CARLOS GOMES",
    "electionZone": "3",
    "stateCode": "RS"
  },
  {
    "city": "IBIRAPUITÃ",
    "electionZone": "54",
    "stateCode": "RS"
  },
  {
    "city": "SÃO JOÃO DO ITAPERIÚ",
    "electionZone": "80",
    "stateCode": "SC"
  },
  {
    "city": "BOM RETIRO",
    "electionZone": "4",
    "stateCode": "SC"
  },
  {
    "city": "PORTO BELO",
    "electionZone": "91",
    "stateCode": "SC"
  },
  {
    "city": "ANCHIETA",
    "electionZone": "82",
    "stateCode": "SC"
  },
  {
    "city": "BOMBINHAS",
    "electionZone": "91",
    "stateCode": "SC"
  },
  {
    "city": "TROMBUDO CENTRAL",
    "electionZone": "57",
    "stateCode": "SC"
  },
  {
    "city": "XANXERÊ",
    "electionZone": "43",
    "stateCode": "SC"
  },
  {
    "city": "SANTA TEREZINHA",
    "electionZone": "38",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOSÉ DO CEDRO",
    "electionZone": "72",
    "stateCode": "SC"
  },
  {
    "city": "PRINCESA",
    "electionZone": "72",
    "stateCode": "SC"
  },
  {
    "city": "CELSO RAMOS",
    "electionZone": "52",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOSÉ",
    "electionZone": "84",
    "stateCode": "SC"
  },
  {
    "city": "INDAIAL",
    "electionZone": "15",
    "stateCode": "SC"
  },
  {
    "city": "ÁGUAS DE CHAPECÓ",
    "electionZone": "70",
    "stateCode": "SC"
  },
  {
    "city": "CURITIBANOS",
    "electionZone": "11",
    "stateCode": "SC"
  },
  {
    "city": "JOINVILLE",
    "electionZone": "19",
    "stateCode": "SC"
  },
  {
    "city": "JOINVILLE",
    "electionZone": "96",
    "stateCode": "SC"
  },
  {
    "city": "JOINVILLE",
    "electionZone": "76",
    "stateCode": "SC"
  },
  {
    "city": "ZORTÉA",
    "electionZone": "7",
    "stateCode": "SC"
  },
  {
    "city": "CORREIA PINTO",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "ÁGUA DOCE",
    "electionZone": "85",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOÃO DO OESTE",
    "electionZone": "65",
    "stateCode": "SC"
  },
  {
    "city": "CHAPECÓ",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "ENTRE RIOS",
    "electionZone": "48",
    "stateCode": "SC"
  },
  {
    "city": "CAMPO BELO DO SUL",
    "electionZone": "52",
    "stateCode": "SC"
  },
  {
    "city": "NOVA TRENTO",
    "electionZone": "53",
    "stateCode": "SC"
  },
  {
    "city": "CHAPADÃO DO LAGEADO",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "SEARA",
    "electionZone": "61",
    "stateCode": "SC"
  },
  {
    "city": "MORRO DA FUMAÇA",
    "electionZone": "34",
    "stateCode": "SC"
  },
  {
    "city": "IBIRAMA",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "CAXAMBU DO SUL",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "BLUMENAU",
    "electionZone": "3",
    "stateCode": "SC"
  },
  {
    "city": "PRESIDENTE NEREU",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "GUARACIABA",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "IÇARA",
    "electionZone": "79",
    "stateCode": "SC"
  },
  {
    "city": "TIGRINHOS",
    "electionZone": "58",
    "stateCode": "SC"
  },
  {
    "city": "TREVISO",
    "electionZone": "92",
    "stateCode": "SC"
  },
  {
    "city": "CAMBORIÚ",
    "electionZone": "103",
    "stateCode": "SC"
  },
  {
    "city": "MACIEIRA",
    "electionZone": "6",
    "stateCode": "SC"
  },
  {
    "city": "SERRA ALTA",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "OURO VERDE",
    "electionZone": "71",
    "stateCode": "SC"
  },
  {
    "city": "XAVANTINA",
    "electionZone": "61",
    "stateCode": "SC"
  },
  {
    "city": "PETROLÂNDIA",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "TIMBÓ GRANDE",
    "electionZone": "51",
    "stateCode": "SC"
  },
  {
    "city": "SALTO VELOSO",
    "electionZone": "36",
    "stateCode": "SC"
  },
  {
    "city": "PLANALTO ALEGRE",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "RODEIO",
    "electionZone": "15",
    "stateCode": "SC"
  },
  {
    "city": "IRATI",
    "electionZone": "78",
    "stateCode": "SC"
  },
  {
    "city": "IBICARÉ",
    "electionZone": "85",
    "stateCode": "SC"
  },
  {
    "city": "BOM JESUS DO OESTE",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "RANCHO QUEIMADO",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "NOVO HORIZONTE",
    "electionZone": "49",
    "stateCode": "SC"
  },
  {
    "city": "BOM JESUS",
    "electionZone": "43",
    "stateCode": "SC"
  },
  {
    "city": "GOVERNADOR CELSO RAMOS",
    "electionZone": "2",
    "stateCode": "SC"
  },
  {
    "city": "ALFREDO WAGNER",
    "electionZone": "4",
    "stateCode": "SC"
  },
  {
    "city": "ALTO BELA VISTA",
    "electionZone": "9",
    "stateCode": "SC"
  },
  {
    "city": "ITAJAÍ",
    "electionZone": "97",
    "stateCode": "SC"
  },
  {
    "city": "RIO NEGRINHO",
    "electionZone": "74",
    "stateCode": "SC"
  },
  {
    "city": "LEBON RÉGIS",
    "electionZone": "77",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO ARROIO DO SILVA",
    "electionZone": "1",
    "stateCode": "SC"
  },
  {
    "city": "LUÍS ALVES",
    "electionZone": "64",
    "stateCode": "SC"
  },
  {
    "city": "ERVAL VELHO",
    "electionZone": "85",
    "stateCode": "SC"
  },
  {
    "city": "JOINVILLE",
    "electionZone": "95",
    "stateCode": "SC"
  },
  {
    "city": "SIDERÓPOLIS",
    "electionZone": "92",
    "stateCode": "SC"
  },
  {
    "city": "SALTINHO",
    "electionZone": "69",
    "stateCode": "SC"
  },
  {
    "city": "MODELO",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "TANGARÁ",
    "electionZone": "47",
    "stateCode": "SC"
  },
  {
    "city": "ARROIO TRINTA",
    "electionZone": "36",
    "stateCode": "SC"
  },
  {
    "city": "PENHA",
    "electionZone": "68",
    "stateCode": "SC"
  },
  {
    "city": "OTACÍLIO COSTA",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "RIO DO CAMPO",
    "electionZone": "46",
    "stateCode": "SC"
  },
  {
    "city": "FLORIANÓPOLIS",
    "electionZone": "13",
    "stateCode": "SC"
  },
  {
    "city": "FLORIANÓPOLIS",
    "electionZone": "100",
    "stateCode": "SC"
  },
  {
    "city": "FLORIANÓPOLIS",
    "electionZone": "12",
    "stateCode": "SC"
  },
  {
    "city": "LAGES",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "GUATAMBÚ",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "LEOBERTO LEAL",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "SÃO BENTO DO SUL",
    "electionZone": "30",
    "stateCode": "SC"
  },
  {
    "city": "LACERDÓPOLIS",
    "electionZone": "37",
    "stateCode": "SC"
  },
  {
    "city": "JOAÇABA",
    "electionZone": "18",
    "stateCode": "SC"
  },
  {
    "city": "LAJEADO GRANDE",
    "electionZone": "48",
    "stateCode": "SC"
  },
  {
    "city": "URUPEMA",
    "electionZone": "28",
    "stateCode": "SC"
  },
  {
    "city": "JARAGUÁ DO SUL",
    "electionZone": "87",
    "stateCode": "SC"
  },
  {
    "city": "BANDEIRANTE",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "IMBUIA",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "GARUVA",
    "electionZone": "105",
    "stateCode": "SC"
  },
  {
    "city": "JOINVILLE",
    "electionZone": "105",
    "stateCode": "SC"
  },
  {
    "city": "CONCÓRDIA",
    "electionZone": "9",
    "stateCode": "SC"
  },
  {
    "city": "OURO",
    "electionZone": "37",
    "stateCode": "SC"
  },
  {
    "city": "ITAIÓPOLIS",
    "electionZone": "38",
    "stateCode": "SC"
  },
  {
    "city": "CAMPO ERÊ",
    "electionZone": "69",
    "stateCode": "SC"
  },
  {
    "city": "GALVÃO",
    "electionZone": "75",
    "stateCode": "SC"
  },
  {
    "city": "TRÊS BARRAS",
    "electionZone": "8",
    "stateCode": "SC"
  },
  {
    "city": "TAIÓ",
    "electionZone": "46",
    "stateCode": "SC"
  },
  {
    "city": "ITUPORANGA",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO RINCÃO",
    "electionZone": "79",
    "stateCode": "SC"
  },
  {
    "city": "PINHALZINHO",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "XAXIM",
    "electionZone": "48",
    "stateCode": "SC"
  },
  {
    "city": "RIO DO OESTE",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "URUBICI",
    "electionZone": "59",
    "stateCode": "SC"
  },
  {
    "city": "BIGUAÇU",
    "electionZone": "2",
    "stateCode": "SC"
  },
  {
    "city": "CORUPÁ",
    "electionZone": "87",
    "stateCode": "SC"
  },
  {
    "city": "BRUNÓPOLIS",
    "electionZone": "7",
    "stateCode": "SC"
  },
  {
    "city": "PRAIA GRANDE",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "ANITÁPOLIS",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "PONTE ALTA DO NORTE",
    "electionZone": "11",
    "stateCode": "SC"
  },
  {
    "city": "MASSARANDUBA",
    "electionZone": "60",
    "stateCode": "SC"
  },
  {
    "city": "PRESIDENTE GETÚLIO",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "PERITIBA",
    "electionZone": "9",
    "stateCode": "SC"
  },
  {
    "city": "JARAGUÁ DO SUL",
    "electionZone": "17",
    "stateCode": "SC"
  },
  {
    "city": "CUNHA PORÃ",
    "electionZone": "83",
    "stateCode": "SC"
  },
  {
    "city": "CAPINZAL",
    "electionZone": "37",
    "stateCode": "SC"
  },
  {
    "city": "LAGUNA",
    "electionZone": "20",
    "stateCode": "SC"
  },
  {
    "city": "WITMARSUM",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "DONA EMMA",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "BENEDITO NOVO",
    "electionZone": "32",
    "stateCode": "SC"
  },
  {
    "city": "NAVEGANTES",
    "electionZone": "16",
    "stateCode": "SC"
  },
  {
    "city": "ABELARDO LUZ",
    "electionZone": "71",
    "stateCode": "SC"
  },
  {
    "city": "VIDEIRA",
    "electionZone": "36",
    "stateCode": "SC"
  },
  {
    "city": "CAMPOS NOVOS",
    "electionZone": "7",
    "stateCode": "SC"
  },
  {
    "city": "TIMBÉ DO SUL",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "MONTE CASTELO",
    "electionZone": "81",
    "stateCode": "SC"
  },
  {
    "city": "ERMO",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "LAGES",
    "electionZone": "21",
    "stateCode": "SC"
  },
  {
    "city": "LAGES",
    "electionZone": "104",
    "stateCode": "SC"
  },
  {
    "city": "BLUMENAU",
    "electionZone": "89",
    "stateCode": "SC"
  },
  {
    "city": "BLUMENAU",
    "electionZone": "88",
    "stateCode": "SC"
  },
  {
    "city": "SANTA ROSA DE LIMA",
    "electionZone": "44",
    "stateCode": "SC"
  },
  {
    "city": "ITÁ",
    "electionZone": "61",
    "stateCode": "SC"
  },
  {
    "city": "IRANI",
    "electionZone": "90",
    "stateCode": "SC"
  },
  {
    "city": "SÃO CARLOS",
    "electionZone": "70",
    "stateCode": "SC"
  },
  {
    "city": "IOMERÊ",
    "electionZone": "36",
    "stateCode": "SC"
  },
  {
    "city": "BOTUVERÁ",
    "electionZone": "5",
    "stateCode": "SC"
  },
  {
    "city": "AURORA",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "SÃO DOMINGOS",
    "electionZone": "75",
    "stateCode": "SC"
  },
  {
    "city": "SCHROEDER",
    "electionZone": "60",
    "stateCode": "SC"
  },
  {
    "city": "SANTA CECÍLIA",
    "electionZone": "51",
    "stateCode": "SC"
  },
  {
    "city": "HERVAL D'OESTE",
    "electionZone": "85",
    "stateCode": "SC"
  },
  {
    "city": "PALHOÇA",
    "electionZone": "24",
    "stateCode": "SC"
  },
  {
    "city": "PEDRAS GRANDES",
    "electionZone": "33",
    "stateCode": "SC"
  },
  {
    "city": "GRÃO-PARÁ",
    "electionZone": "44",
    "stateCode": "SC"
  },
  {
    "city": "BARRA VELHA",
    "electionZone": "80",
    "stateCode": "SC"
  },
  {
    "city": "SANTO AMARO DA IMPERATRIZ",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO BARRA DO SUL",
    "electionZone": "27",
    "stateCode": "SC"
  },
  {
    "city": "MARACAJÁ",
    "electionZone": "1",
    "stateCode": "SC"
  },
  {
    "city": "TIJUCAS",
    "electionZone": "31",
    "stateCode": "SC"
  },
  {
    "city": "TUBARÃO",
    "electionZone": "33",
    "stateCode": "SC"
  },
  {
    "city": "FLORIANÓPOLIS",
    "electionZone": "101",
    "stateCode": "SC"
  },
  {
    "city": "CANELINHA",
    "electionZone": "31",
    "stateCode": "SC"
  },
  {
    "city": "POMERODE",
    "electionZone": "55",
    "stateCode": "SC"
  },
  {
    "city": "CRICIÚMA",
    "electionZone": "92",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOAQUIM",
    "electionZone": "28",
    "stateCode": "SC"
  },
  {
    "city": "CAMPO ALEGRE",
    "electionZone": "30",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO CAMBORIÚ",
    "electionZone": "103",
    "stateCode": "SC"
  },
  {
    "city": "CAÇADOR",
    "electionZone": "6",
    "stateCode": "SC"
  },
  {
    "city": "PAULO LOPES",
    "electionZone": "24",
    "stateCode": "SC"
  },
  {
    "city": "PASSOS MAIA",
    "electionZone": "63",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOÃO DO SUL",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "GUARAMIRIM",
    "electionZone": "60",
    "stateCode": "SC"
  },
  {
    "city": "MATOS COSTA",
    "electionZone": "25",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOÃO BATISTA",
    "electionZone": "53",
    "stateCode": "SC"
  },
  {
    "city": "PALMITOS",
    "electionZone": "41",
    "stateCode": "SC"
  },
  {
    "city": "ITAPEMA",
    "electionZone": "91",
    "stateCode": "SC"
  },
  {
    "city": "ARARANGUÁ",
    "electionZone": "1",
    "stateCode": "SC"
  },
  {
    "city": "MARAVILHA",
    "electionZone": "58",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO PIÇARRAS",
    "electionZone": "68",
    "stateCode": "SC"
  },
  {
    "city": "NOVA ITABERABA",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "RIO DOS CEDROS",
    "electionZone": "32",
    "stateCode": "SC"
  },
  {
    "city": "ARABUTÃ",
    "electionZone": "90",
    "stateCode": "SC"
  },
  {
    "city": "PAPANDUVA",
    "electionZone": "81",
    "stateCode": "SC"
  },
  {
    "city": "ANGELINA",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "DOUTOR PEDRINHO",
    "electionZone": "32",
    "stateCode": "SC"
  },
  {
    "city": "CRICIÚMA",
    "electionZone": "98",
    "stateCode": "SC"
  },
  {
    "city": "CRICIÚMA",
    "electionZone": "10",
    "stateCode": "SC"
  },
  {
    "city": "TUBARÃO",
    "electionZone": "99",
    "stateCode": "SC"
  },
  {
    "city": "JACINTO MACHADO",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "JAGUARUNA",
    "electionZone": "33",
    "stateCode": "SC"
  },
  {
    "city": "IPIRA",
    "electionZone": "37",
    "stateCode": "SC"
  },
  {
    "city": "PASSO DE TORRES",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "SOMBRIO",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "POUSO REDONDO",
    "electionZone": "57",
    "stateCode": "SC"
  },
  {
    "city": "MELEIRO",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOSÉ",
    "electionZone": "29",
    "stateCode": "SC"
  },
  {
    "city": "IMBITUBA",
    "electionZone": "73",
    "stateCode": "SC"
  },
  {
    "city": "FREI ROGÉRIO",
    "electionZone": "11",
    "stateCode": "SC"
  },
  {
    "city": "CAPIVARI DE BAIXO",
    "electionZone": "99",
    "stateCode": "SC"
  },
  {
    "city": "RIO DO SUL",
    "electionZone": "26",
    "stateCode": "SC"
  },
  {
    "city": "PIRATUBA",
    "electionZone": "37",
    "stateCode": "SC"
  },
  {
    "city": "CHAPECÓ",
    "electionZone": "94",
    "stateCode": "SC"
  },
  {
    "city": "GUABIRUBA",
    "electionZone": "5",
    "stateCode": "SC"
  },
  {
    "city": "FRAIBURGO",
    "electionZone": "77",
    "stateCode": "SC"
  },
  {
    "city": "BRUSQUE",
    "electionZone": "86",
    "stateCode": "SC"
  },
  {
    "city": "BRUSQUE",
    "electionZone": "5",
    "stateCode": "SC"
  },
  {
    "city": "VIDAL RAMOS",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "MONTE CARLO",
    "electionZone": "77",
    "stateCode": "SC"
  },
  {
    "city": "QUILOMBO",
    "electionZone": "78",
    "stateCode": "SC"
  },
  {
    "city": "SÃO BONIFÁCIO",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "MAJOR VIEIRA",
    "electionZone": "8",
    "stateCode": "SC"
  },
  {
    "city": "SÃO BERNARDINO",
    "electionZone": "69",
    "stateCode": "SC"
  },
  {
    "city": "AGROLÂNDIA",
    "electionZone": "57",
    "stateCode": "SC"
  },
  {
    "city": "IRINEÓPOLIS",
    "electionZone": "25",
    "stateCode": "SC"
  },
  {
    "city": "SAUDADES",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "ILHOTA",
    "electionZone": "64",
    "stateCode": "SC"
  },
  {
    "city": "MONDAÍ",
    "electionZone": "40",
    "stateCode": "SC"
  },
  {
    "city": "ABDON BATISTA",
    "electionZone": "52",
    "stateCode": "SC"
  },
  {
    "city": "RIO FORTUNA",
    "electionZone": "44",
    "stateCode": "SC"
  },
  {
    "city": "JUPIÁ",
    "electionZone": "49",
    "stateCode": "SC"
  },
  {
    "city": "SÃO JOSÉ DO CERRITO",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "ARAQUARI",
    "electionZone": "27",
    "stateCode": "SC"
  },
  {
    "city": "SÃO MARTINHO",
    "electionZone": "99",
    "stateCode": "SC"
  },
  {
    "city": "GRAVATAL",
    "electionZone": "99",
    "stateCode": "SC"
  },
  {
    "city": "TUNÁPOLIS",
    "electionZone": "65",
    "stateCode": "SC"
  },
  {
    "city": "MAREMA",
    "electionZone": "48",
    "stateCode": "SC"
  },
  {
    "city": "ASCURRA",
    "electionZone": "15",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO CAMBORIÚ",
    "electionZone": "56",
    "stateCode": "SC"
  },
  {
    "city": "SUL BRASIL",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "VARGEM",
    "electionZone": "7",
    "stateCode": "SC"
  },
  {
    "city": "NOVA ERECHIM",
    "electionZone": "66",
    "stateCode": "SC"
  },
  {
    "city": "ÁGUAS MORNAS",
    "electionZone": "67",
    "stateCode": "SC"
  },
  {
    "city": "APIÚNA",
    "electionZone": "15",
    "stateCode": "SC"
  },
  {
    "city": "BOCAINA DO SUL",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "LAURO MÜLLER",
    "electionZone": "23",
    "stateCode": "SC"
  },
  {
    "city": "IPORÃ DO OESTE",
    "electionZone": "40",
    "stateCode": "SC"
  },
  {
    "city": "ITAPOÁ",
    "electionZone": "105",
    "stateCode": "SC"
  },
  {
    "city": "SÃO CRISTÓVÃO DO SUL",
    "electionZone": "11",
    "stateCode": "SC"
  },
  {
    "city": "SÃO FRANCISCO DO SUL",
    "electionZone": "27",
    "stateCode": "SC"
  },
  {
    "city": "DIONÍSIO CERQUEIRA",
    "electionZone": "50",
    "stateCode": "SC"
  },
  {
    "city": "PONTE SERRADA",
    "electionZone": "63",
    "stateCode": "SC"
  },
  {
    "city": "GAROPABA",
    "electionZone": "73",
    "stateCode": "SC"
  },
  {
    "city": "TIMBÓ",
    "electionZone": "32",
    "stateCode": "SC"
  },
  {
    "city": "CATANDUVAS",
    "electionZone": "18",
    "stateCode": "SC"
  },
  {
    "city": "ANITA GARIBALDI",
    "electionZone": "52",
    "stateCode": "SC"
  },
  {
    "city": "MAJOR GERCINO",
    "electionZone": "53",
    "stateCode": "SC"
  },
  {
    "city": "PARAÍSO",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "MORRO GRANDE",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "SANTA HELENA",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "LUZERNA",
    "electionZone": "18",
    "stateCode": "SC"
  },
  {
    "city": "ÁGUAS FRIAS",
    "electionZone": "94",
    "stateCode": "SC"
  },
  {
    "city": "BELMONTE",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "ROMELÂNDIA",
    "electionZone": "82",
    "stateCode": "SC"
  },
  {
    "city": "MIRIM DOCE",
    "electionZone": "46",
    "stateCode": "SC"
  },
  {
    "city": "SANTIAGO DO SUL",
    "electionZone": "78",
    "stateCode": "SC"
  },
  {
    "city": "VARGEÃO",
    "electionZone": "63",
    "stateCode": "SC"
  },
  {
    "city": "IPUAÇU",
    "electionZone": "71",
    "stateCode": "SC"
  },
  {
    "city": "FLOR DO SERTÃO",
    "electionZone": "58",
    "stateCode": "SC"
  },
  {
    "city": "SALETE",
    "electionZone": "46",
    "stateCode": "SC"
  },
  {
    "city": "ITAJAÍ",
    "electionZone": "16",
    "stateCode": "SC"
  },
  {
    "city": "ATALANTA",
    "electionZone": "39",
    "stateCode": "SC"
  },
  {
    "city": "MAFRA",
    "electionZone": "22",
    "stateCode": "SC"
  },
  {
    "city": "FORMOSA DO SUL",
    "electionZone": "78",
    "stateCode": "SC"
  },
  {
    "city": "COCAL DO SUL",
    "electionZone": "34",
    "stateCode": "SC"
  },
  {
    "city": "SÃO MIGUEL DO OESTE",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "LAURENTINO",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "CONCÓRDIA",
    "electionZone": "90",
    "stateCode": "SC"
  },
  {
    "city": "AGRONÔMICA",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "SANGÃO",
    "electionZone": "33",
    "stateCode": "SC"
  },
  {
    "city": "GUARUJÁ DO SUL",
    "electionZone": "72",
    "stateCode": "SC"
  },
  {
    "city": "URUSSANGA",
    "electionZone": "34",
    "stateCode": "SC"
  },
  {
    "city": "JOSÉ BOITEUX",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "IMARUÍ",
    "electionZone": "62",
    "stateCode": "SC"
  },
  {
    "city": "RIQUEZA",
    "electionZone": "40",
    "stateCode": "SC"
  },
  {
    "city": "ANTÔNIO CARLOS",
    "electionZone": "2",
    "stateCode": "SC"
  },
  {
    "city": "IPUMIRIM",
    "electionZone": "90",
    "stateCode": "SC"
  },
  {
    "city": "CUNHATAÍ",
    "electionZone": "70",
    "stateCode": "SC"
  },
  {
    "city": "SÃO LOURENÇO DO OESTE",
    "electionZone": "49",
    "stateCode": "SC"
  },
  {
    "city": "SANTA TEREZINHA DO PROGRESSO",
    "electionZone": "69",
    "stateCode": "SC"
  },
  {
    "city": "GASPAR",
    "electionZone": "64",
    "stateCode": "SC"
  },
  {
    "city": "IBIAM",
    "electionZone": "47",
    "stateCode": "SC"
  },
  {
    "city": "ARMAZÉM",
    "electionZone": "99",
    "stateCode": "SC"
  },
  {
    "city": "RIO DAS ANTAS",
    "electionZone": "6",
    "stateCode": "SC"
  },
  {
    "city": "ITAPIRANGA",
    "electionZone": "65",
    "stateCode": "SC"
  },
  {
    "city": "DESCANSO",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "TURVO",
    "electionZone": "42",
    "stateCode": "SC"
  },
  {
    "city": "SÃO LUDGERO",
    "electionZone": "44",
    "stateCode": "SC"
  },
  {
    "city": "CANOINHAS",
    "electionZone": "8",
    "stateCode": "SC"
  },
  {
    "city": "PESCARIA BRAVA",
    "electionZone": "20",
    "stateCode": "SC"
  },
  {
    "city": "SANTA ROSA DO SUL",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "PORTO UNIÃO",
    "electionZone": "25",
    "stateCode": "SC"
  },
  {
    "city": "PALMEIRA",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "BOM JARDIM DA SERRA",
    "electionZone": "28",
    "stateCode": "SC"
  },
  {
    "city": "FORQUILHINHA",
    "electionZone": "98",
    "stateCode": "SC"
  },
  {
    "city": "JABORÁ",
    "electionZone": "18",
    "stateCode": "SC"
  },
  {
    "city": "CORONEL MARTINS",
    "electionZone": "75",
    "stateCode": "SC"
  },
  {
    "city": "LONTRAS",
    "electionZone": "102",
    "stateCode": "SC"
  },
  {
    "city": "PAINEL",
    "electionZone": "93",
    "stateCode": "SC"
  },
  {
    "city": "PONTE ALTA",
    "electionZone": "11",
    "stateCode": "SC"
  },
  {
    "city": "VARGEM BONITA",
    "electionZone": "18",
    "stateCode": "SC"
  },
  {
    "city": "UNIÃO DO OESTE",
    "electionZone": "94",
    "stateCode": "SC"
  },
  {
    "city": "TREZE TÍLIAS",
    "electionZone": "85",
    "stateCode": "SC"
  },
  {
    "city": "ORLEANS",
    "electionZone": "23",
    "stateCode": "SC"
  },
  {
    "city": "FAXINAL DOS GUEDES",
    "electionZone": "43",
    "stateCode": "SC"
  },
  {
    "city": "PAIAL",
    "electionZone": "61",
    "stateCode": "SC"
  },
  {
    "city": "CORONEL FREITAS",
    "electionZone": "94",
    "stateCode": "SC"
  },
  {
    "city": "BRAÇO DO TROMBUDO",
    "electionZone": "57",
    "stateCode": "SC"
  },
  {
    "city": "PINHEIRO PRETO",
    "electionZone": "47",
    "stateCode": "SC"
  },
  {
    "city": "CERRO NEGRO",
    "electionZone": "52",
    "stateCode": "SC"
  },
  {
    "city": "PALMA SOLA",
    "electionZone": "50",
    "stateCode": "SC"
  },
  {
    "city": "ARVOREDO",
    "electionZone": "61",
    "stateCode": "SC"
  },
  {
    "city": "SÃO MIGUEL DA BOA VISTA",
    "electionZone": "58",
    "stateCode": "SC"
  },
  {
    "city": "TREZE DE MAIO",
    "electionZone": "33",
    "stateCode": "SC"
  },
  {
    "city": "IRACEMINHA",
    "electionZone": "58",
    "stateCode": "SC"
  },
  {
    "city": "SÃO PEDRO DE ALCÂNTARA",
    "electionZone": "29",
    "stateCode": "SC"
  },
  {
    "city": "BALNEÁRIO GAIVOTA",
    "electionZone": "54",
    "stateCode": "SC"
  },
  {
    "city": "CAPÃO ALTO",
    "electionZone": "104",
    "stateCode": "SC"
  },
  {
    "city": "JARDINÓPOLIS",
    "electionZone": "94",
    "stateCode": "SC"
  },
  {
    "city": "BARRA BONITA",
    "electionZone": "45",
    "stateCode": "SC"
  },
  {
    "city": "CORDILHEIRA ALTA",
    "electionZone": "35",
    "stateCode": "SC"
  },
  {
    "city": "BELA VISTA DO TOLDO",
    "electionZone": "8",
    "stateCode": "SC"
  },
  {
    "city": "CALMON",
    "electionZone": "6",
    "stateCode": "SC"
  },
  {
    "city": "CAIBI",
    "electionZone": "41",
    "stateCode": "SC"
  },
  {
    "city": "RIO RUFINO",
    "electionZone": "59",
    "stateCode": "SC"
  },
  {
    "city": "VITOR MEIRELES",
    "electionZone": "14",
    "stateCode": "SC"
  },
  {
    "city": "NOVA VENEZA",
    "electionZone": "98",
    "stateCode": "SC"
  },
  {
    "city": "BRAÇO DO NORTE",
    "electionZone": "44",
    "stateCode": "SC"
  },
  {
    "city": "LINDÓIA DO SUL",
    "electionZone": "90",
    "stateCode": "SC"
  },
  {
    "city": "PRESIDENTE CASTELO BRANCO",
    "electionZone": "9",
    "stateCode": "SC"
  },
  {
    "city": "SALGADO",
    "electionZone": "31",
    "stateCode": "SE"
  },
  {
    "city": "SANTA LUZIA DO ITANHY",
    "electionZone": "35",
    "stateCode": "SE"
  },
  {
    "city": "SIRIRI",
    "electionZone": "16",
    "stateCode": "SE"
  },
  {
    "city": "CANHOBA",
    "electionZone": "3",
    "stateCode": "SE"
  },
  {
    "city": "JAPOATÃ",
    "electionZone": "15",
    "stateCode": "SE"
  },
  {
    "city": "ITAPORANGA D'AJUDA",
    "electionZone": "31",
    "stateCode": "SE"
  },
  {
    "city": "NOSSA SENHORA APARECIDA",
    "electionZone": "26",
    "stateCode": "SE"
  },
  {
    "city": "TELHA",
    "electionZone": "25",
    "stateCode": "SE"
  },
  {
    "city": "ESTÂNCIA",
    "electionZone": "6",
    "stateCode": "SE"
  },
  {
    "city": "ARACAJU",
    "electionZone": "2",
    "stateCode": "SE"
  },
  {
    "city": "NOSSA SENHORA DE LOURDES",
    "electionZone": "8",
    "stateCode": "SE"
  },
  {
    "city": "ARACAJU",
    "electionZone": "27",
    "stateCode": "SE"
  },
  {
    "city": "ARACAJU",
    "electionZone": "36",
    "stateCode": "SE"
  },
  {
    "city": "ILHA DAS FLORES",
    "electionZone": "32",
    "stateCode": "SE"
  },
  {
    "city": "NOSSA SENHORA DO SOCORRO",
    "electionZone": "34",
    "stateCode": "SE"
  },
  {
    "city": "AMPARO DE SÃO FRANCISCO",
    "electionZone": "25",
    "stateCode": "SE"
  },
  {
    "city": "SANTANA DO SÃO FRANCISCO",
    "electionZone": "15",
    "stateCode": "SE"
  },
  {
    "city": "GARARU",
    "electionZone": "8",
    "stateCode": "SE"
  },
  {
    "city": "CEDRO DE SÃO JOÃO",
    "electionZone": "25",
    "stateCode": "SE"
  },
  {
    "city": "RIACHÃO DO DANTAS",
    "electionZone": "4",
    "stateCode": "SE"
  },
  {
    "city": "ITABI",
    "electionZone": "8",
    "stateCode": "SE"
  },
  {
    "city": "PIRAMBU",
    "electionZone": "11",
    "stateCode": "SE"
  },
  {
    "city": "FEIRA NOVA",
    "electionZone": "17",
    "stateCode": "SE"
  },
  {
    "city": "SIMÃO DIAS",
    "electionZone": "22",
    "stateCode": "SE"
  },
  {
    "city": "NOSSA SENHORA DAS DORES",
    "electionZone": "16",
    "stateCode": "SE"
  },
  {
    "city": "LARANJEIRAS",
    "electionZone": "13",
    "stateCode": "SE"
  },
  {
    "city": "UMBAÚBA",
    "electionZone": "35",
    "stateCode": "SE"
  },
  {
    "city": "POÇO REDONDO",
    "electionZone": "28",
    "stateCode": "SE"
  },
  {
    "city": "GENERAL MAYNARD",
    "electionZone": "14",
    "stateCode": "SE"
  },
  {
    "city": "ARAUÁ",
    "electionZone": "4",
    "stateCode": "SE"
  },
  {
    "city": "DIVINA PASTORA",
    "electionZone": "20",
    "stateCode": "SE"
  },
  {
    "city": "PINHÃO",
    "electionZone": "7",
    "stateCode": "SE"
  },
  {
    "city": "MOITA BONITA",
    "electionZone": "26",
    "stateCode": "SE"
  },
  {
    "city": "PROPRIÁ",
    "electionZone": "19",
    "stateCode": "SE"
  },
  {
    "city": "AREIA BRANCA",
    "electionZone": "13",
    "stateCode": "SE"
  },
  {
    "city": "ARACAJU",
    "electionZone": "1",
    "stateCode": "SE"
  },
  {
    "city": "SÃO MIGUEL DO ALEIXO",
    "electionZone": "26",
    "stateCode": "SE"
  },
  {
    "city": "RIACHUELO",
    "electionZone": "20",
    "stateCode": "SE"
  },
  {
    "city": "PACATUBA",
    "electionZone": "32",
    "stateCode": "SE"
  },
  {
    "city": "ITABAIANINHA",
    "electionZone": "10",
    "stateCode": "SE"
  },
  {
    "city": "SÃO CRISTÓVÃO",
    "electionZone": "21",
    "stateCode": "SE"
  },
  {
    "city": "RIBEIRÓPOLIS",
    "electionZone": "26",
    "stateCode": "SE"
  },
  {
    "city": "CARMÓPOLIS",
    "electionZone": "11",
    "stateCode": "SE"
  },
  {
    "city": "CRISTINÁPOLIS",
    "electionZone": "30",
    "stateCode": "SE"
  },
  {
    "city": "FREI PAULO",
    "electionZone": "7",
    "stateCode": "SE"
  },
  {
    "city": "PEDRA MOLE",
    "electionZone": "7",
    "stateCode": "SE"
  },
  {
    "city": "CUMBE",
    "electionZone": "16",
    "stateCode": "SE"
  },
  {
    "city": "GRACCHO CARDOSO",
    "electionZone": "3",
    "stateCode": "SE"
  },
  {
    "city": "INDIAROBA",
    "electionZone": "35",
    "stateCode": "SE"
  },
  {
    "city": "CARIRA",
    "electionZone": "29",
    "stateCode": "SE"
  },
  {
    "city": "POÇO VERDE",
    "electionZone": "33",
    "stateCode": "SE"
  },
  {
    "city": "NEÓPOLIS",
    "electionZone": "15",
    "stateCode": "SE"
  },
  {
    "city": "CAPELA",
    "electionZone": "5",
    "stateCode": "SE"
  },
  {
    "city": "TOMAR DO GERU",
    "electionZone": "30",
    "stateCode": "SE"
  },
  {
    "city": "LAGARTO",
    "electionZone": "12",
    "stateCode": "SE"
  },
  {
    "city": "MURIBECA",
    "electionZone": "5",
    "stateCode": "SE"
  },
  {
    "city": "CANINDÉ DE SÃO FRANCISCO",
    "electionZone": "28",
    "stateCode": "SE"
  },
  {
    "city": "AQUIDABÃ",
    "electionZone": "3",
    "stateCode": "SE"
  },
  {
    "city": "ROSÁRIO DO CATETE",
    "electionZone": "14",
    "stateCode": "SE"
  },
  {
    "city": "BARRA DOS COQUEIROS",
    "electionZone": "36",
    "stateCode": "SE"
  },
  {
    "city": "BREJO GRANDE",
    "electionZone": "32",
    "stateCode": "SE"
  },
  {
    "city": "ITABAIANA",
    "electionZone": "9",
    "stateCode": "SE"
  },
  {
    "city": "TOBIAS BARRETO",
    "electionZone": "23",
    "stateCode": "SE"
  },
  {
    "city": "PEDRINHAS",
    "electionZone": "4",
    "stateCode": "SE"
  },
  {
    "city": "PORTO DA FOLHA",
    "electionZone": "18",
    "stateCode": "SE"
  },
  {
    "city": "NOSSA SENHORA DA GLÓRIA",
    "electionZone": "17",
    "stateCode": "SE"
  },
  {
    "city": "SANTO AMARO DAS BROTAS",
    "electionZone": "14",
    "stateCode": "SE"
  },
  {
    "city": "MACAMBIRA",
    "electionZone": "24",
    "stateCode": "SE"
  },
  {
    "city": "CAMPO DO BRITO",
    "electionZone": "24",
    "stateCode": "SE"
  },
  {
    "city": "MARUIM",
    "electionZone": "14",
    "stateCode": "SE"
  },
  {
    "city": "SÃO DOMINGOS",
    "electionZone": "24",
    "stateCode": "SE"
  },
  {
    "city": "JAPARATUBA",
    "electionZone": "11",
    "stateCode": "SE"
  },
  {
    "city": "SÃO FRANCISCO",
    "electionZone": "25",
    "stateCode": "SE"
  },
  {
    "city": "MALHADOR",
    "electionZone": "20",
    "stateCode": "SE"
  },
  {
    "city": "MALHADA DOS BOIS",
    "electionZone": "25",
    "stateCode": "SE"
  },
  {
    "city": "BOQUIM",
    "electionZone": "4",
    "stateCode": "SE"
  },
  {
    "city": "MONTE ALEGRE DE SERGIPE",
    "electionZone": "18",
    "stateCode": "SE"
  },
  {
    "city": "SANTA ROSA DE LIMA",
    "electionZone": "20",
    "stateCode": "SE"
  },
  {
    "city": "MAUÁ",
    "electionZone": "364",
    "stateCode": "SP"
  },
  {
    "city": "MAUÁ",
    "electionZone": "217",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO DOS ÍNDIOS",
    "electionZone": "117",
    "stateCode": "SP"
  },
  {
    "city": "TUPÃ",
    "electionZone": "143",
    "stateCode": "SP"
  },
  {
    "city": "TAIAÇU",
    "electionZone": "61",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "176",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "394",
    "stateCode": "SP"
  },
  {
    "city": "MONTEIRO LOBATO",
    "electionZone": "282",
    "stateCode": "SP"
  },
  {
    "city": "CACHOEIRA PAULISTA",
    "electionZone": "145",
    "stateCode": "SP"
  },
  {
    "city": "TARABAI",
    "electionZone": "261",
    "stateCode": "SP"
  },
  {
    "city": "ALTINÓPOLIS",
    "electionZone": "202",
    "stateCode": "SP"
  },
  {
    "city": "ITIRAPINA",
    "electionZone": "245",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DOS CAMPOS",
    "electionZone": "412",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DOS CAMPOS",
    "electionZone": "127",
    "stateCode": "SP"
  },
  {
    "city": "PEREIRAS",
    "electionZone": "41",
    "stateCode": "SP"
  },
  {
    "city": "AREALVA",
    "electionZone": "300",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANTÔNIO DE POSSE",
    "electionZone": "333",
    "stateCode": "SP"
  },
  {
    "city": "SANTA ROSA DE VITERBO",
    "electionZone": "173",
    "stateCode": "SP"
  },
  {
    "city": "RIO CLARO",
    "electionZone": "110",
    "stateCode": "SP"
  },
  {
    "city": "RIO CLARO",
    "electionZone": "288",
    "stateCode": "SP"
  },
  {
    "city": "VARGEM GRANDE PAULISTA",
    "electionZone": "286",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "356",
    "stateCode": "SP"
  },
  {
    "city": "ESTIVA GERBI",
    "electionZone": "216",
    "stateCode": "SP"
  },
  {
    "city": "MAUÁ",
    "electionZone": "365",
    "stateCode": "SP"
  },
  {
    "city": "SÃO SEBASTIÃO",
    "electionZone": "132",
    "stateCode": "SP"
  },
  {
    "city": "TREMEMBÉ",
    "electionZone": "314",
    "stateCode": "SP"
  },
  {
    "city": "ENGENHEIRO COELHO",
    "electionZone": "75",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "271",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "357",
    "stateCode": "SP"
  },
  {
    "city": "BOM SUCESSO DE ITARARÉ",
    "electionZone": "57",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "343",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "137",
    "stateCode": "SP"
  },
  {
    "city": "JACAREÍ",
    "electionZone": "62",
    "stateCode": "SP"
  },
  {
    "city": "BARUERI",
    "electionZone": "386",
    "stateCode": "SP"
  },
  {
    "city": "CORONEL MACEDO",
    "electionZone": "236",
    "stateCode": "SP"
  },
  {
    "city": "JAMBEIRO",
    "electionZone": "29",
    "stateCode": "SP"
  },
  {
    "city": "EMBU DAS ARTES",
    "electionZone": "391",
    "stateCode": "SP"
  },
  {
    "city": "PARDINHO",
    "electionZone": "26",
    "stateCode": "SP"
  },
  {
    "city": "CRISTAIS PAULISTA",
    "electionZone": "240",
    "stateCode": "SP"
  },
  {
    "city": "BOFETE",
    "electionZone": "41",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "4",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "3",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "408",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "328",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "248",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "375",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "250",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "254",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "280",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "352",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "421",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "376",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "257",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "381",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "20",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "422",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "372",
    "stateCode": "SP"
  },
  {
    "city": "BOTUCATU",
    "electionZone": "26",
    "stateCode": "SP"
  },
  {
    "city": "PIRACICABA",
    "electionZone": "270",
    "stateCode": "SP"
  },
  {
    "city": "ARAÇARIGUAMA",
    "electionZone": "131",
    "stateCode": "SP"
  },
  {
    "city": "MAUÁ",
    "electionZone": "339",
    "stateCode": "SP"
  },
  {
    "city": "PIEDADE",
    "electionZone": "89",
    "stateCode": "SP"
  },
  {
    "city": "ANALÂNDIA",
    "electionZone": "245",
    "stateCode": "SP"
  },
  {
    "city": "BARBOSA",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "BARUERI",
    "electionZone": "199",
    "stateCode": "SP"
  },
  {
    "city": "ITU",
    "electionZone": "59",
    "stateCode": "SP"
  },
  {
    "city": "ÁGUAS DE SÃO PEDRO",
    "electionZone": "130",
    "stateCode": "SP"
  },
  {
    "city": "SANTA ALBERTINA",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "TURIÚBA",
    "electionZone": "214",
    "stateCode": "SP"
  },
  {
    "city": "SANTA GERTRUDES",
    "electionZone": "245",
    "stateCode": "SP"
  },
  {
    "city": "SÃO LOURENÇO DA SERRA",
    "electionZone": "201",
    "stateCode": "SP"
  },
  {
    "city": "ARAÇATUBA",
    "electionZone": "299",
    "stateCode": "SP"
  },
  {
    "city": "ARAÇATUBA",
    "electionZone": "11",
    "stateCode": "SP"
  },
  {
    "city": "ITAPIRAPUÃ PAULISTA",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "SOROCABA",
    "electionZone": "342",
    "stateCode": "SP"
  },
  {
    "city": "PARAÍSO",
    "electionZone": "171",
    "stateCode": "SP"
  },
  {
    "city": "TAUBATÉ",
    "electionZone": "407",
    "stateCode": "SP"
  },
  {
    "city": "TAUBATÉ",
    "electionZone": "141",
    "stateCode": "SP"
  },
  {
    "city": "BAURU",
    "electionZone": "300",
    "stateCode": "SP"
  },
  {
    "city": "BAURU",
    "electionZone": "23",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "277",
    "stateCode": "SP"
  },
  {
    "city": "TAMBAÚ",
    "electionZone": "198",
    "stateCode": "SP"
  },
  {
    "city": "MOCOCA",
    "electionZone": "73",
    "stateCode": "SP"
  },
  {
    "city": "PARIQUERA-AÇU",
    "electionZone": "228",
    "stateCode": "SP"
  },
  {
    "city": "MONGAGUÁ",
    "electionZone": "189",
    "stateCode": "SP"
  },
  {
    "city": "TUIUTI",
    "electionZone": "298",
    "stateCode": "SP"
  },
  {
    "city": "PARANAPUÃ",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "IGARATÁ",
    "electionZone": "115",
    "stateCode": "SP"
  },
  {
    "city": "ITAOCA",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "ARCO-ÍRIS",
    "electionZone": "143",
    "stateCode": "SP"
  },
  {
    "city": "MARAPOAMA",
    "electionZone": "79",
    "stateCode": "SP"
  },
  {
    "city": "BOCAINA",
    "electionZone": "241",
    "stateCode": "SP"
  },
  {
    "city": "SÃO CAETANO DO SUL",
    "electionZone": "166",
    "stateCode": "SP"
  },
  {
    "city": "SÃO CAETANO DO SUL",
    "electionZone": "269",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "327",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "253",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "326",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "404",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "251",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "346",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "252",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "351",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "371",
    "stateCode": "SP"
  },
  {
    "city": "FRANCISCO MORATO",
    "electionZone": "367",
    "stateCode": "SP"
  },
  {
    "city": "PINHALZINHO",
    "electionZone": "298",
    "stateCode": "SP"
  },
  {
    "city": "NOVO HORIZONTE",
    "electionZone": "79",
    "stateCode": "SP"
  },
  {
    "city": "SUZANÁPOLIS",
    "electionZone": "88",
    "stateCode": "SP"
  },
  {
    "city": "AGUDOS",
    "electionZone": "7",
    "stateCode": "SP"
  },
  {
    "city": "PRATÂNIA",
    "electionZone": "129",
    "stateCode": "SP"
  },
  {
    "city": "SALTO",
    "electionZone": "221",
    "stateCode": "SP"
  },
  {
    "city": "GÁLIA",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "ASPÁSIA",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "RIFAINA",
    "electionZone": "155",
    "stateCode": "SP"
  },
  {
    "city": "BARRA BONITA",
    "electionZone": "200",
    "stateCode": "SP"
  },
  {
    "city": "SANTANA DE PARNAÍBA",
    "electionZone": "386",
    "stateCode": "SP"
  },
  {
    "city": "ITAPUÍ",
    "electionZone": "241",
    "stateCode": "SP"
  },
  {
    "city": "ITAPEVA",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PIRES",
    "electionZone": "382",
    "stateCode": "SP"
  },
  {
    "city": "BARRETOS",
    "electionZone": "21",
    "stateCode": "SP"
  },
  {
    "city": "MONTE ALEGRE DO SUL",
    "electionZone": "8",
    "stateCode": "SP"
  },
  {
    "city": "GUAREÍ",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "MARACAÍ",
    "electionZone": "363",
    "stateCode": "SP"
  },
  {
    "city": "TAPIRATIBA",
    "electionZone": "30",
    "stateCode": "SP"
  },
  {
    "city": "DIVINOLÂNDIA",
    "electionZone": "366",
    "stateCode": "SP"
  },
  {
    "city": "GENERAL SALGADO",
    "electionZone": "168",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO RIO PRETO",
    "electionZone": "125",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO RIO PRETO",
    "electionZone": "267",
    "stateCode": "SP"
  },
  {
    "city": "ORIENTE",
    "electionZone": "180",
    "stateCode": "SP"
  },
  {
    "city": "CAPELA DO ALTO",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "CABREÚVA",
    "electionZone": "59",
    "stateCode": "SP"
  },
  {
    "city": "ELISIÁRIO",
    "electionZone": "40",
    "stateCode": "SP"
  },
  {
    "city": "ITAÍ",
    "electionZone": "301",
    "stateCode": "SP"
  },
  {
    "city": "SALESÓPOLIS",
    "electionZone": "112",
    "stateCode": "SP"
  },
  {
    "city": "CARAPICUÍBA",
    "electionZone": "303",
    "stateCode": "SP"
  },
  {
    "city": "TABOÃO DA SERRA",
    "electionZone": "324",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "398",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "392",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "390",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "353",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "403",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "349",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "420",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "255",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "2",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "374",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "348",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "325",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "418",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "5",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "373",
    "stateCode": "SP"
  },
  {
    "city": "MARIÁPOLIS",
    "electionZone": "157",
    "stateCode": "SP"
  },
  {
    "city": "BERNARDINO DE CAMPOS",
    "electionZone": "114",
    "stateCode": "SP"
  },
  {
    "city": "COSMORAMA",
    "electionZone": "138",
    "stateCode": "SP"
  },
  {
    "city": "SANTA RITA D'OESTE",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "PAULÍNIA",
    "electionZone": "323",
    "stateCode": "SP"
  },
  {
    "city": "MARÍLIA",
    "electionZone": "70",
    "stateCode": "SP"
  },
  {
    "city": "MIGUELÓPOLIS",
    "electionZone": "208",
    "stateCode": "SP"
  },
  {
    "city": "JUNDIAÍ",
    "electionZone": "424",
    "stateCode": "SP"
  },
  {
    "city": "ONDA VERDE",
    "electionZone": "78",
    "stateCode": "SP"
  },
  {
    "city": "CAIUÁ",
    "electionZone": "102",
    "stateCode": "SP"
  },
  {
    "city": "NOVA EUROPA",
    "electionZone": "239",
    "stateCode": "SP"
  },
  {
    "city": "FRANCO DA ROCHA",
    "electionZone": "192",
    "stateCode": "SP"
  },
  {
    "city": "JUMIRIM",
    "electionZone": "142",
    "stateCode": "SP"
  },
  {
    "city": "ANGATUBA",
    "electionZone": "215",
    "stateCode": "SP"
  },
  {
    "city": "FRANCA",
    "electionZone": "291",
    "stateCode": "SP"
  },
  {
    "city": "GUAIMBÉ",
    "electionZone": "160",
    "stateCode": "SP"
  },
  {
    "city": "COLÔMBIA",
    "electionZone": "21",
    "stateCode": "SP"
  },
  {
    "city": "NOVA GRANADA",
    "electionZone": "78",
    "stateCode": "SP"
  },
  {
    "city": "APARECIDA D'OESTE",
    "electionZone": "232",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "6",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "259",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "405",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "320",
    "stateCode": "SP"
  },
  {
    "city": "PENÁPOLIS",
    "electionZone": "87",
    "stateCode": "SP"
  },
  {
    "city": "IPORANGA",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "MIRA ESTRELA",
    "electionZone": "224",
    "stateCode": "SP"
  },
  {
    "city": "SARUTAIÁ",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "TATUÍ",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "SÃO FRANCISCO",
    "electionZone": "232",
    "stateCode": "SP"
  },
  {
    "city": "BANANAL",
    "electionZone": "18",
    "stateCode": "SP"
  },
  {
    "city": "BENTO DE ABREU",
    "electionZone": "146",
    "stateCode": "SP"
  },
  {
    "city": "GUARANTÃ",
    "electionZone": "31",
    "stateCode": "SP"
  },
  {
    "city": "COTIA",
    "electionZone": "286",
    "stateCode": "SP"
  },
  {
    "city": "COTIA",
    "electionZone": "227",
    "stateCode": "SP"
  },
  {
    "city": "IEPÊ",
    "electionZone": "106",
    "stateCode": "SP"
  },
  {
    "city": "INDAIATUBA",
    "electionZone": "211",
    "stateCode": "SP"
  },
  {
    "city": "ITAQUAQUECETUBA",
    "electionZone": "377",
    "stateCode": "SP"
  },
  {
    "city": "VERA CRUZ",
    "electionZone": "180",
    "stateCode": "SP"
  },
  {
    "city": "ITAJU",
    "electionZone": "19",
    "stateCode": "SP"
  },
  {
    "city": "BASTOS",
    "electionZone": "184",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DOS CAMPOS",
    "electionZone": "411",
    "stateCode": "SP"
  },
  {
    "city": "BEBEDOURO",
    "electionZone": "24",
    "stateCode": "SP"
  },
  {
    "city": "JUNDIAÍ",
    "electionZone": "65",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO BARREIRO",
    "electionZone": "18",
    "stateCode": "SP"
  },
  {
    "city": "IPUÃ",
    "electionZone": "123",
    "stateCode": "SP"
  },
  {
    "city": "BAURU",
    "electionZone": "387",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "108",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "293",
    "stateCode": "SP"
  },
  {
    "city": "BARIRI",
    "electionZone": "19",
    "stateCode": "SP"
  },
  {
    "city": "PARISI",
    "electionZone": "147",
    "stateCode": "SP"
  },
  {
    "city": "UBATUBA",
    "electionZone": "144",
    "stateCode": "SP"
  },
  {
    "city": "SUMARÉ",
    "electionZone": "362",
    "stateCode": "SP"
  },
  {
    "city": "CONCHAS",
    "electionZone": "41",
    "stateCode": "SP"
  },
  {
    "city": "IPIGUÁ",
    "electionZone": "268",
    "stateCode": "SP"
  },
  {
    "city": "FERRAZ DE VASCONCELOS",
    "electionZone": "401",
    "stateCode": "SP"
  },
  {
    "city": "UNIÃO PAULISTA",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "JUNDIAÍ",
    "electionZone": "281",
    "stateCode": "SP"
  },
  {
    "city": "QUINTANA",
    "electionZone": "99",
    "stateCode": "SP"
  },
  {
    "city": "JOSÉ BONIFÁCIO",
    "electionZone": "64",
    "stateCode": "SP"
  },
  {
    "city": "CESÁRIO LANGE",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "PARAGUAÇU PAULISTA",
    "electionZone": "12",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "275",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "33",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "379",
    "stateCode": "SP"
  },
  {
    "city": "FRANCA",
    "electionZone": "46",
    "stateCode": "SP"
  },
  {
    "city": "CÁSSIA DOS COQUEIROS",
    "electionZone": "32",
    "stateCode": "SP"
  },
  {
    "city": "MAIRINQUE",
    "electionZone": "131",
    "stateCode": "SP"
  },
  {
    "city": "PERUÍBE",
    "electionZone": "295",
    "stateCode": "SP"
  },
  {
    "city": "NUPORANGA",
    "electionZone": "235",
    "stateCode": "SP"
  },
  {
    "city": "SANTA BÁRBARA D'OESTE",
    "electionZone": "186",
    "stateCode": "SP"
  },
  {
    "city": "IBIRÁ",
    "electionZone": "179",
    "stateCode": "SP"
  },
  {
    "city": "ITARARÉ",
    "electionZone": "57",
    "stateCode": "SP"
  },
  {
    "city": "EMBU DAS ARTES",
    "electionZone": "341",
    "stateCode": "SP"
  },
  {
    "city": "ORINDIÚVA",
    "electionZone": "164",
    "stateCode": "SP"
  },
  {
    "city": "PEDRO DE TOLEDO",
    "electionZone": "295",
    "stateCode": "SP"
  },
  {
    "city": "MOGI MIRIM",
    "electionZone": "75",
    "stateCode": "SP"
  },
  {
    "city": "MAIRIPORÃ",
    "electionZone": "237",
    "stateCode": "SP"
  },
  {
    "city": "GUAPIARA",
    "electionZone": "37",
    "stateCode": "SP"
  },
  {
    "city": "SÃO VICENTE",
    "electionZone": "340",
    "stateCode": "SP"
  },
  {
    "city": "VALENTIM GENTIL",
    "electionZone": "147",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE PRUDENTE",
    "electionZone": "101",
    "stateCode": "SP"
  },
  {
    "city": "ESPÍRITO SANTO DO PINHAL",
    "electionZone": "91",
    "stateCode": "SP"
  },
  {
    "city": "INÚBIA PAULISTA",
    "electionZone": "69",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE PRUDENTE",
    "electionZone": "402",
    "stateCode": "SP"
  },
  {
    "city": "PAULISTÂNIA",
    "electionZone": "7",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PIRES",
    "electionZone": "183",
    "stateCode": "SP"
  },
  {
    "city": "NOVA ODESSA",
    "electionZone": "292",
    "stateCode": "SP"
  },
  {
    "city": "ILHABELA",
    "electionZone": "132",
    "stateCode": "SP"
  },
  {
    "city": "NAZARÉ PAULISTA",
    "electionZone": "16",
    "stateCode": "SP"
  },
  {
    "city": "BOM JESUS DOS PERDÕES",
    "electionZone": "16",
    "stateCode": "SP"
  },
  {
    "city": "PINDAMONHANGABA",
    "electionZone": "90",
    "stateCode": "SP"
  },
  {
    "city": "POLONI",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "DOLCINÓPOLIS",
    "electionZone": "233",
    "stateCode": "SP"
  },
  {
    "city": "POTIM",
    "electionZone": "190",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANTÔNIO DO JARDIM",
    "electionZone": "91",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO RIO PRETO",
    "electionZone": "312",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO RIO PRETO",
    "electionZone": "268",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PEDRO",
    "electionZone": "130",
    "stateCode": "SP"
  },
  {
    "city": "ARARAQUARA",
    "electionZone": "13",
    "stateCode": "SP"
  },
  {
    "city": "PIRACICABA",
    "electionZone": "93",
    "stateCode": "SP"
  },
  {
    "city": "UBIRAJARA",
    "electionZone": "159",
    "stateCode": "SP"
  },
  {
    "city": "DRACENA",
    "electionZone": "149",
    "stateCode": "SP"
  },
  {
    "city": "SUZANO",
    "electionZone": "181",
    "stateCode": "SP"
  },
  {
    "city": "LUPÉRCIO",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "ITIRAPUÃ",
    "electionZone": "85",
    "stateCode": "SP"
  },
  {
    "city": "PEDERNEIRAS",
    "electionZone": "86",
    "stateCode": "SP"
  },
  {
    "city": "VALPARAÍSO",
    "electionZone": "146",
    "stateCode": "SP"
  },
  {
    "city": "BURITIZAL",
    "electionZone": "50",
    "stateCode": "SP"
  },
  {
    "city": "SERTÃOZINHO",
    "electionZone": "135",
    "stateCode": "SP"
  },
  {
    "city": "GUARANI D'OESTE",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "156",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "262",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "306",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "264",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "307",
    "stateCode": "SP"
  },
  {
    "city": "DIADEMA",
    "electionZone": "222",
    "stateCode": "SP"
  },
  {
    "city": "TAQUARAL",
    "electionZone": "98",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "315",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "213",
    "stateCode": "SP"
  },
  {
    "city": "CACONDE",
    "electionZone": "30",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOÃO DE IRACEMA",
    "electionZone": "168",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "309",
    "stateCode": "SP"
  },
  {
    "city": "BORBOREMA",
    "electionZone": "55",
    "stateCode": "SP"
  },
  {
    "city": "ROSANA",
    "electionZone": "330",
    "stateCode": "SP"
  },
  {
    "city": "CAJAMAR",
    "electionZone": "354",
    "stateCode": "SP"
  },
  {
    "city": "IACANGA",
    "electionZone": "49",
    "stateCode": "SP"
  },
  {
    "city": "RANCHARIA",
    "electionZone": "106",
    "stateCode": "SP"
  },
  {
    "city": "MACATUBA",
    "electionZone": "86",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "274",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "174",
    "stateCode": "SP"
  },
  {
    "city": "JACUPIRANGA",
    "electionZone": "228",
    "stateCode": "SP"
  },
  {
    "city": "MOGI DAS CRUZES",
    "electionZone": "319",
    "stateCode": "SP"
  },
  {
    "city": "LENÇÓIS PAULISTA",
    "electionZone": "161",
    "stateCode": "SP"
  },
  {
    "city": "CASTILHO",
    "electionZone": "9",
    "stateCode": "SP"
  },
  {
    "city": "ESTRELA DO NORTE",
    "electionZone": "261",
    "stateCode": "SP"
  },
  {
    "city": "TARUMÃ",
    "electionZone": "15",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "414",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "409",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "283",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "284",
    "stateCode": "SP"
  },
  {
    "city": "FLÓRIDA PAULISTA",
    "electionZone": "157",
    "stateCode": "SP"
  },
  {
    "city": "PORTO FELIZ",
    "electionZone": "100",
    "stateCode": "SP"
  },
  {
    "city": "ARUJÁ",
    "electionZone": "335",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "305",
    "stateCode": "SP"
  },
  {
    "city": "ALTAIR",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "SEBASTIANÓPOLIS DO SUL",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "RESTINGA",
    "electionZone": "240",
    "stateCode": "SP"
  },
  {
    "city": "BARRA DO CHAPÉU",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "CAPÃO BONITO",
    "electionZone": "37",
    "stateCode": "SP"
  },
  {
    "city": "JABOTICABAL",
    "electionZone": "61",
    "stateCode": "SP"
  },
  {
    "city": "SANTA CRUZ DA ESPERANÇA",
    "electionZone": "32",
    "stateCode": "SP"
  },
  {
    "city": "MAGDA",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "SABINO",
    "electionZone": "297",
    "stateCode": "SP"
  },
  {
    "city": "POTIRENDABA",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "PIRATININGA",
    "electionZone": "97",
    "stateCode": "SP"
  },
  {
    "city": "PITANGUEIRAS",
    "electionZone": "98",
    "stateCode": "SP"
  },
  {
    "city": "ARAÇOIABA DA SERRA",
    "electionZone": "294",
    "stateCode": "SP"
  },
  {
    "city": "PIRAJU",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "TABAPUÃ",
    "electionZone": "179",
    "stateCode": "SP"
  },
  {
    "city": "ELIAS FAUSTO",
    "electionZone": "358",
    "stateCode": "SP"
  },
  {
    "city": "JANDIRA",
    "electionZone": "304",
    "stateCode": "SP"
  },
  {
    "city": "SUZANO",
    "electionZone": "415",
    "stateCode": "SP"
  },
  {
    "city": "IGARAÇU DO TIETÊ",
    "electionZone": "200",
    "stateCode": "SP"
  },
  {
    "city": "ICÉM",
    "electionZone": "78",
    "stateCode": "SP"
  },
  {
    "city": "CÂNDIDO RODRIGUES",
    "electionZone": "139",
    "stateCode": "SP"
  },
  {
    "city": "SÃO VICENTE",
    "electionZone": "177",
    "stateCode": "SP"
  },
  {
    "city": "CAFELÂNDIA",
    "electionZone": "31",
    "stateCode": "SP"
  },
  {
    "city": "MIRANTE DO PARANAPANEMA",
    "electionZone": "238",
    "stateCode": "SP"
  },
  {
    "city": "PORANGABA",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "SANTA CRUZ DA CONCEIÇÃO",
    "electionZone": "188",
    "stateCode": "SP"
  },
  {
    "city": "LOURDES",
    "electionZone": "214",
    "stateCode": "SP"
  },
  {
    "city": "GARÇA",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "CANANÉIA",
    "electionZone": "36",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DOS CAMPOS",
    "electionZone": "282",
    "stateCode": "SP"
  },
  {
    "city": "GUARUJÁ",
    "electionZone": "310",
    "stateCode": "SP"
  },
  {
    "city": "GUARUJÁ",
    "electionZone": "212",
    "stateCode": "SP"
  },
  {
    "city": "MIRASSOLÂNDIA",
    "electionZone": "72",
    "stateCode": "SP"
  },
  {
    "city": "PONTES GESTAL",
    "electionZone": "224",
    "stateCode": "SP"
  },
  {
    "city": "VOTUPORANGA",
    "electionZone": "147",
    "stateCode": "SP"
  },
  {
    "city": "IRACEMÁPOLIS",
    "electionZone": "243",
    "stateCode": "SP"
  },
  {
    "city": "BOITUVA",
    "electionZone": "369",
    "stateCode": "SP"
  },
  {
    "city": "TIETÊ",
    "electionZone": "142",
    "stateCode": "SP"
  },
  {
    "city": "MOGI DAS CRUZES",
    "electionZone": "74",
    "stateCode": "SP"
  },
  {
    "city": "PORTO FERREIRA",
    "electionZone": "194",
    "stateCode": "SP"
  },
  {
    "city": "APARECIDA",
    "electionZone": "190",
    "stateCode": "SP"
  },
  {
    "city": "BARRA DO TURVO",
    "electionZone": "228",
    "stateCode": "SP"
  },
  {
    "city": "MOMBUCA",
    "electionZone": "38",
    "stateCode": "SP"
  },
  {
    "city": "SUMARÉ",
    "electionZone": "230",
    "stateCode": "SP"
  },
  {
    "city": "CONCHAL",
    "electionZone": "75",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO DO SUL",
    "electionZone": "313",
    "stateCode": "SP"
  },
  {
    "city": "BERTIOGA",
    "electionZone": "272",
    "stateCode": "SP"
  },
  {
    "city": "VOTORANTIM",
    "electionZone": "220",
    "stateCode": "SP"
  },
  {
    "city": "QUADRA",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "TEJUPÁ",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "CAIEIRAS",
    "electionZone": "192",
    "stateCode": "SP"
  },
  {
    "city": "PROMISSÃO",
    "electionZone": "103",
    "stateCode": "SP"
  },
  {
    "city": "COSMÓPOLIS",
    "electionZone": "360",
    "stateCode": "SP"
  },
  {
    "city": "PIRACAIA",
    "electionZone": "92",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "263",
    "stateCode": "SP"
  },
  {
    "city": "SANTANA DA PONTE PENSA",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "AMERICANA",
    "electionZone": "384",
    "stateCode": "SP"
  },
  {
    "city": "VIRADOURO",
    "electionZone": "203",
    "stateCode": "SP"
  },
  {
    "city": "ITAPIRA",
    "electionZone": "54",
    "stateCode": "SP"
  },
  {
    "city": "REGISTRO",
    "electionZone": "172",
    "stateCode": "SP"
  },
  {
    "city": "CASA BRANCA",
    "electionZone": "39",
    "stateCode": "SP"
  },
  {
    "city": "SÃO ROQUE",
    "electionZone": "131",
    "stateCode": "SP"
  },
  {
    "city": "GUARACI",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRA",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "ILHA COMPRIDA",
    "electionZone": "51",
    "stateCode": "SP"
  },
  {
    "city": "ITAPEVI",
    "electionZone": "359",
    "stateCode": "SP"
  },
  {
    "city": "CARAPICUÍBA",
    "electionZone": "388",
    "stateCode": "SP"
  },
  {
    "city": "MINEIROS DO TIETÊ",
    "electionZone": "241",
    "stateCode": "SP"
  },
  {
    "city": "SANTA ADÉLIA",
    "electionZone": "111",
    "stateCode": "SP"
  },
  {
    "city": "ÁGUAS DE SANTA BÁRBARA",
    "electionZone": "205",
    "stateCode": "SP"
  },
  {
    "city": "NARANDIBA",
    "electionZone": "261",
    "stateCode": "SP"
  },
  {
    "city": "URUPÊS",
    "electionZone": "207",
    "stateCode": "SP"
  },
  {
    "city": "SANTOS",
    "electionZone": "272",
    "stateCode": "SP"
  },
  {
    "city": "PIRAJUÍ",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "AMERICANA",
    "electionZone": "158",
    "stateCode": "SP"
  },
  {
    "city": "AGUAÍ",
    "electionZone": "334",
    "stateCode": "SP"
  },
  {
    "city": "SETE BARRAS",
    "electionZone": "172",
    "stateCode": "SP"
  },
  {
    "city": "EUCLIDES DA CUNHA PAULISTA",
    "electionZone": "330",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "308",
    "stateCode": "SP"
  },
  {
    "city": "PRACINHA",
    "electionZone": "69",
    "stateCode": "SP"
  },
  {
    "city": "CLEMENTINA",
    "electionZone": "25",
    "stateCode": "SP"
  },
  {
    "city": "SANTA BRANCA",
    "electionZone": "112",
    "stateCode": "SP"
  },
  {
    "city": "VINHEDO",
    "electionZone": "345",
    "stateCode": "SP"
  },
  {
    "city": "JUQUITIBA",
    "electionZone": "201",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "249",
    "stateCode": "SP"
  },
  {
    "city": "ALUMÍNIO",
    "electionZone": "131",
    "stateCode": "SP"
  },
  {
    "city": "PALESTINA",
    "electionZone": "231",
    "stateCode": "SP"
  },
  {
    "city": "OUROESTE",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BENTO DO SAPUCAÍ",
    "electionZone": "120",
    "stateCode": "SP"
  },
  {
    "city": "GABRIEL MONTEIRO",
    "electionZone": "210",
    "stateCode": "SP"
  },
  {
    "city": "JUNQUEIRÓPOLIS",
    "electionZone": "196",
    "stateCode": "SP"
  },
  {
    "city": "AVANHANDAVA",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "MURUTINGA DO SUL",
    "electionZone": "9",
    "stateCode": "SP"
  },
  {
    "city": "BÁLSAMO",
    "electionZone": "72",
    "stateCode": "SP"
  },
  {
    "city": "CATANDUVA",
    "electionZone": "40",
    "stateCode": "SP"
  },
  {
    "city": "PIRAPORA DO BOM JESUS",
    "electionZone": "386",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "389",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "1",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "260",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "397",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "258",
    "stateCode": "SP"
  },
  {
    "city": "DIRCE REIS",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "MARÍLIA",
    "electionZone": "400",
    "stateCode": "SP"
  },
  {
    "city": "CAMPOS DO JORDÃO",
    "electionZone": "35",
    "stateCode": "SP"
  },
  {
    "city": "SANTOS",
    "electionZone": "118",
    "stateCode": "SP"
  },
  {
    "city": "SANTOS",
    "electionZone": "273",
    "stateCode": "SP"
  },
  {
    "city": "AVARÉ",
    "electionZone": "17",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANTÔNIO DA ALEGRIA",
    "electionZone": "202",
    "stateCode": "SP"
  },
  {
    "city": "FLOREAL",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "LUTÉCIA",
    "electionZone": "12",
    "stateCode": "SP"
  },
  {
    "city": "POÁ",
    "electionZone": "219",
    "stateCode": "SP"
  },
  {
    "city": "RIOLÂNDIA",
    "electionZone": "164",
    "stateCode": "SP"
  },
  {
    "city": "MACEDÔNIA",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "SAGRES",
    "electionZone": "163",
    "stateCode": "SP"
  },
  {
    "city": "CABRÁLIA PAULISTA",
    "electionZone": "97",
    "stateCode": "SP"
  },
  {
    "city": "PIQUETE",
    "electionZone": "337",
    "stateCode": "SP"
  },
  {
    "city": "SÃO LUÍS DO PARAITINGA",
    "electionZone": "128",
    "stateCode": "SP"
  },
  {
    "city": "JÚLIO MESQUITA",
    "electionZone": "31",
    "stateCode": "SP"
  },
  {
    "city": "ASSIS",
    "electionZone": "15",
    "stateCode": "SP"
  },
  {
    "city": "CUBATÃO",
    "electionZone": "119",
    "stateCode": "SP"
  },
  {
    "city": "REGINÓPOLIS",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "BRAÚNA",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "DIADEMA",
    "electionZone": "329",
    "stateCode": "SP"
  },
  {
    "city": "VISTA ALEGRE DO ALTO",
    "electionZone": "76",
    "stateCode": "SP"
  },
  {
    "city": "PIRASSUNUNGA",
    "electionZone": "96",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BERNARDO DO CAMPO",
    "electionZone": "296",
    "stateCode": "SP"
  },
  {
    "city": "OSVALDO CRUZ",
    "electionZone": "163",
    "stateCode": "SP"
  },
  {
    "city": "PRAIA GRANDE",
    "electionZone": "406",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "423",
    "stateCode": "SP"
  },
  {
    "city": "ALFREDO MARCONDES",
    "electionZone": "182",
    "stateCode": "SP"
  },
  {
    "city": "GUZOLÂNDIA",
    "electionZone": "225",
    "stateCode": "SP"
  },
  {
    "city": "POMPÉIA",
    "electionZone": "99",
    "stateCode": "SP"
  },
  {
    "city": "CUNHA",
    "electionZone": "43",
    "stateCode": "SP"
  },
  {
    "city": "LEME",
    "electionZone": "188",
    "stateCode": "SP"
  },
  {
    "city": "JALES",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "CATIGUÁ",
    "electionZone": "179",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DO RIO PARDO",
    "electionZone": "124",
    "stateCode": "SP"
  },
  {
    "city": "JARINU",
    "electionZone": "16",
    "stateCode": "SP"
  },
  {
    "city": "LAGOINHA",
    "electionZone": "128",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "383",
    "stateCode": "SP"
  },
  {
    "city": "PRADÓPOLIS",
    "electionZone": "197",
    "stateCode": "SP"
  },
  {
    "city": "PONTAL",
    "electionZone": "135",
    "stateCode": "SP"
  },
  {
    "city": "ANHUMAS",
    "electionZone": "182",
    "stateCode": "SP"
  },
  {
    "city": "PEDREIRA",
    "electionZone": "333",
    "stateCode": "SP"
  },
  {
    "city": "JABORANDI",
    "electionZone": "178",
    "stateCode": "SP"
  },
  {
    "city": "ORLÂNDIA",
    "electionZone": "81",
    "stateCode": "SP"
  },
  {
    "city": "ITATIBA",
    "electionZone": "58",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "266",
    "stateCode": "SP"
  },
  {
    "city": "BOA ESPERANÇA DO SUL",
    "electionZone": "107",
    "stateCode": "SP"
  },
  {
    "city": "ELDORADO",
    "electionZone": "148",
    "stateCode": "SP"
  },
  {
    "city": "DUARTINA",
    "electionZone": "159",
    "stateCode": "SP"
  },
  {
    "city": "SÃO MANUEL",
    "electionZone": "129",
    "stateCode": "SP"
  },
  {
    "city": "SALTO GRANDE",
    "electionZone": "313",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE EPITÁCIO",
    "electionZone": "195",
    "stateCode": "SP"
  },
  {
    "city": "SÃO SEBASTIÃO DA GRAMA",
    "electionZone": "366",
    "stateCode": "SP"
  },
  {
    "city": "CERQUILHO",
    "electionZone": "355",
    "stateCode": "SP"
  },
  {
    "city": "FARTURA",
    "electionZone": "234",
    "stateCode": "SP"
  },
  {
    "city": "CANAS",
    "electionZone": "68",
    "stateCode": "SP"
  },
  {
    "city": "QUEIROZ",
    "electionZone": "99",
    "stateCode": "SP"
  },
  {
    "city": "IGARAPAVA",
    "electionZone": "50",
    "stateCode": "SP"
  },
  {
    "city": "TAQUARIVAÍ",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "ATIBAIA",
    "electionZone": "16",
    "stateCode": "SP"
  },
  {
    "city": "NOVAIS",
    "electionZone": "179",
    "stateCode": "SP"
  },
  {
    "city": "TACIBA",
    "electionZone": "167",
    "stateCode": "SP"
  },
  {
    "city": "PINDORAMA",
    "electionZone": "179",
    "stateCode": "SP"
  },
  {
    "city": "JAÚ",
    "electionZone": "63",
    "stateCode": "SP"
  },
  {
    "city": "HORTOLÂNDIA",
    "electionZone": "361",
    "stateCode": "SP"
  },
  {
    "city": "SANTA LÚCIA",
    "electionZone": "239",
    "stateCode": "SP"
  },
  {
    "city": "SALES OLIVEIRA",
    "electionZone": "235",
    "stateCode": "SP"
  },
  {
    "city": "SERRA AZUL",
    "electionZone": "193",
    "stateCode": "SP"
  },
  {
    "city": "PIRASSUNUNGA",
    "electionZone": "311",
    "stateCode": "SP"
  },
  {
    "city": "CAJURU",
    "electionZone": "32",
    "stateCode": "SP"
  },
  {
    "city": "SÃO SIMÃO",
    "electionZone": "133",
    "stateCode": "SP"
  },
  {
    "city": "APIAÍ",
    "electionZone": "10",
    "stateCode": "SP"
  },
  {
    "city": "ADOLFO",
    "electionZone": "64",
    "stateCode": "SP"
  },
  {
    "city": "CAÇAPAVA",
    "electionZone": "29",
    "stateCode": "SP"
  },
  {
    "city": "TAQUARITUBA",
    "electionZone": "236",
    "stateCode": "SP"
  },
  {
    "city": "UBARANA",
    "electionZone": "64",
    "stateCode": "SP"
  },
  {
    "city": "TAGUAÍ",
    "electionZone": "234",
    "stateCode": "SP"
  },
  {
    "city": "CARAGUATATUBA",
    "electionZone": "206",
    "stateCode": "SP"
  },
  {
    "city": "PEDREGULHO",
    "electionZone": "155",
    "stateCode": "SP"
  },
  {
    "city": "FLORÍNEA",
    "electionZone": "15",
    "stateCode": "SP"
  },
  {
    "city": "JUQUIÁ",
    "electionZone": "223",
    "stateCode": "SP"
  },
  {
    "city": "NEVES PAULISTA",
    "electionZone": "72",
    "stateCode": "SP"
  },
  {
    "city": "SANTA CRUZ DO RIO PARDO",
    "electionZone": "114",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOAQUIM DA BARRA",
    "electionZone": "123",
    "stateCode": "SP"
  },
  {
    "city": "LUÍS ANTÔNIO",
    "electionZone": "133",
    "stateCode": "SP"
  },
  {
    "city": "BROTAS",
    "electionZone": "28",
    "stateCode": "SP"
  },
  {
    "city": "LUCÉLIA",
    "electionZone": "69",
    "stateCode": "SP"
  },
  {
    "city": "SÃO CARLOS",
    "electionZone": "410",
    "stateCode": "SP"
  },
  {
    "city": "IBIRAREMA",
    "electionZone": "83",
    "stateCode": "SP"
  },
  {
    "city": "DIADEMA",
    "electionZone": "426",
    "stateCode": "SP"
  },
  {
    "city": "ÁLVARES MACHADO",
    "electionZone": "182",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "322",
    "stateCode": "SP"
  },
  {
    "city": "LORENA",
    "electionZone": "68",
    "stateCode": "SP"
  },
  {
    "city": "MONTE ALTO",
    "electionZone": "76",
    "stateCode": "SP"
  },
  {
    "city": "TABATINGA",
    "electionZone": "49",
    "stateCode": "SP"
  },
  {
    "city": "SANTÓPOLIS DO AGUAPEÍ",
    "electionZone": "25",
    "stateCode": "SP"
  },
  {
    "city": "SALES",
    "electionZone": "207",
    "stateCode": "SP"
  },
  {
    "city": "BRAGANÇA PAULISTA",
    "electionZone": "27",
    "stateCode": "SP"
  },
  {
    "city": "GUARATINGUETÁ",
    "electionZone": "316",
    "stateCode": "SP"
  },
  {
    "city": "PEDRA BELA",
    "electionZone": "298",
    "stateCode": "SP"
  },
  {
    "city": "CAPIVARI",
    "electionZone": "38",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO GRANDE",
    "electionZone": "37",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "395",
    "stateCode": "SP"
  },
  {
    "city": "SERRA NEGRA",
    "electionZone": "134",
    "stateCode": "SP"
  },
  {
    "city": "NOVA INDEPENDÊNCIA",
    "electionZone": "9",
    "stateCode": "SP"
  },
  {
    "city": "VALINHOS",
    "electionZone": "34",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANTÔNIO DO PINHAL",
    "electionZone": "120",
    "stateCode": "SP"
  },
  {
    "city": "GUARÁ",
    "electionZone": "338",
    "stateCode": "SP"
  },
  {
    "city": "SERRANA",
    "electionZone": "109",
    "stateCode": "SP"
  },
  {
    "city": "DOURADO",
    "electionZone": "107",
    "stateCode": "SP"
  },
  {
    "city": "MOGI DAS CRUZES",
    "electionZone": "287",
    "stateCode": "SP"
  },
  {
    "city": "JOANÓPOLIS",
    "electionZone": "92",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOSÉ DA BELA VISTA",
    "electionZone": "240",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO BONITO",
    "electionZone": "107",
    "stateCode": "SP"
  },
  {
    "city": "SANTA FÉ DO SUL",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "MONTE MOR",
    "electionZone": "358",
    "stateCode": "SP"
  },
  {
    "city": "RINÓPOLIS",
    "electionZone": "184",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "279",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "393",
    "stateCode": "SP"
  },
  {
    "city": "IBIÚNA",
    "electionZone": "191",
    "stateCode": "SP"
  },
  {
    "city": "LINS",
    "electionZone": "297",
    "stateCode": "SP"
  },
  {
    "city": "LINS",
    "electionZone": "67",
    "stateCode": "SP"
  },
  {
    "city": "TORRINHA",
    "electionZone": "28",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "378",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINAS",
    "electionZone": "380",
    "stateCode": "SP"
  },
  {
    "city": "ADAMANTINA",
    "electionZone": "157",
    "stateCode": "SP"
  },
  {
    "city": "IPAUSSU",
    "electionZone": "114",
    "stateCode": "SP"
  },
  {
    "city": "MONTE APRAZÍVEL",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "PACAEMBU",
    "electionZone": "154",
    "stateCode": "SP"
  },
  {
    "city": "BRODOWSKI",
    "electionZone": "22",
    "stateCode": "SP"
  },
  {
    "city": "SARAPUÍ",
    "electionZone": "52",
    "stateCode": "SP"
  },
  {
    "city": "RIO GRANDE DA SERRA",
    "electionZone": "382",
    "stateCode": "SP"
  },
  {
    "city": "VÁRZEA PAULISTA",
    "electionZone": "242",
    "stateCode": "SP"
  },
  {
    "city": "MATÃO",
    "electionZone": "170",
    "stateCode": "SP"
  },
  {
    "city": "DOIS CÓRREGOS",
    "electionZone": "45",
    "stateCode": "SP"
  },
  {
    "city": "BARRINHA",
    "electionZone": "135",
    "stateCode": "SP"
  },
  {
    "city": "SANTA RITA DO PASSA QUATRO",
    "electionZone": "116",
    "stateCode": "SP"
  },
  {
    "city": "COROADOS",
    "electionZone": "25",
    "stateCode": "SP"
  },
  {
    "city": "CAMPO LIMPO PAULISTA",
    "electionZone": "344",
    "stateCode": "SP"
  },
  {
    "city": "CRUZÁLIA",
    "electionZone": "363",
    "stateCode": "SP"
  },
  {
    "city": "MOGI GUAÇU",
    "electionZone": "216",
    "stateCode": "SP"
  },
  {
    "city": "MIRACATU",
    "electionZone": "218",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOÃO DA BOA VISTA",
    "electionZone": "122",
    "stateCode": "SP"
  },
  {
    "city": "ITAPETININGA",
    "electionZone": "52",
    "stateCode": "SP"
  },
  {
    "city": "ARIRANHA",
    "electionZone": "111",
    "stateCode": "SP"
  },
  {
    "city": "IPEÚNA",
    "electionZone": "245",
    "stateCode": "SP"
  },
  {
    "city": "LIMEIRA",
    "electionZone": "66",
    "stateCode": "SP"
  },
  {
    "city": "IBATÉ",
    "electionZone": "410",
    "stateCode": "SP"
  },
  {
    "city": "TAQUARITINGA",
    "electionZone": "139",
    "stateCode": "SP"
  },
  {
    "city": "GUARAREMA",
    "electionZone": "319",
    "stateCode": "SP"
  },
  {
    "city": "EMBU-GUAÇU",
    "electionZone": "370",
    "stateCode": "SP"
  },
  {
    "city": "REGENTE FEIJÓ",
    "electionZone": "167",
    "stateCode": "SP"
  },
  {
    "city": "TANABI",
    "electionZone": "138",
    "stateCode": "SP"
  },
  {
    "city": "GUAÍRA",
    "electionZone": "169",
    "stateCode": "SP"
  },
  {
    "city": "BORÁ",
    "electionZone": "12",
    "stateCode": "SP"
  },
  {
    "city": "URÂNIA",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "MOTUCA",
    "electionZone": "385",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANASTÁCIO",
    "electionZone": "117",
    "stateCode": "SP"
  },
  {
    "city": "BURITAMA",
    "electionZone": "214",
    "stateCode": "SP"
  },
  {
    "city": "GAVIÃO PEIXOTO",
    "electionZone": "385",
    "stateCode": "SP"
  },
  {
    "city": "PANORAMA",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "OURO VERDE",
    "electionZone": "149",
    "stateCode": "SP"
  },
  {
    "city": "ITUPEVA",
    "electionZone": "65",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "347",
    "stateCode": "SP"
  },
  {
    "city": "PAULO DE FARIA",
    "electionZone": "164",
    "stateCode": "SP"
  },
  {
    "city": "ILHA SOLTEIRA",
    "electionZone": "368",
    "stateCode": "SP"
  },
  {
    "city": "CRUZEIRO",
    "electionZone": "42",
    "stateCode": "SP"
  },
  {
    "city": "TIMBURI",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "ITANHAÉM",
    "electionZone": "189",
    "stateCode": "SP"
  },
  {
    "city": "MORUNGABA",
    "electionZone": "58",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "413",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "350",
    "stateCode": "SP"
  },
  {
    "city": "ARARAQUARA",
    "electionZone": "385",
    "stateCode": "SP"
  },
  {
    "city": "PAULICÉIA",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "QUATÁ",
    "electionZone": "104",
    "stateCode": "SP"
  },
  {
    "city": "LARANJAL PAULISTA",
    "electionZone": "209",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "285",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "331",
    "stateCode": "SP"
  },
  {
    "city": "SUD MENNUCCI",
    "electionZone": "88",
    "stateCode": "SP"
  },
  {
    "city": "PONTALINDA",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "BADY BASSITT",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "FLORA RICA",
    "electionZone": "154",
    "stateCode": "SP"
  },
  {
    "city": "BATATAIS",
    "electionZone": "22",
    "stateCode": "SP"
  },
  {
    "city": "IRAPUÃ",
    "electionZone": "207",
    "stateCode": "SP"
  },
  {
    "city": "AMPARO",
    "electionZone": "8",
    "stateCode": "SP"
  },
  {
    "city": "TUPI PAULISTA",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "URU",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "NIPOÃ",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "NHANDEARA",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "AREIÓPOLIS",
    "electionZone": "129",
    "stateCode": "SP"
  },
  {
    "city": "TORRE DE PEDRA",
    "electionZone": "140",
    "stateCode": "SP"
  },
  {
    "city": "RIVERSUL",
    "electionZone": "56",
    "stateCode": "SP"
  },
  {
    "city": "IPERÓ",
    "electionZone": "369",
    "stateCode": "SP"
  },
  {
    "city": "CAIABU",
    "electionZone": "167",
    "stateCode": "SP"
  },
  {
    "city": "LIMEIRA",
    "electionZone": "399",
    "stateCode": "SP"
  },
  {
    "city": "MARABÁ PAULISTA",
    "electionZone": "102",
    "stateCode": "SP"
  },
  {
    "city": "PARANAPANEMA",
    "electionZone": "301",
    "stateCode": "SP"
  },
  {
    "city": "OURINHOS",
    "electionZone": "82",
    "stateCode": "SP"
  },
  {
    "city": "INDIANA",
    "electionZone": "71",
    "stateCode": "SP"
  },
  {
    "city": "CERQUEIRA CÉSAR",
    "electionZone": "205",
    "stateCode": "SP"
  },
  {
    "city": "IARAS",
    "electionZone": "205",
    "stateCode": "SP"
  },
  {
    "city": "ESTRELA D'OESTE",
    "electionZone": "233",
    "stateCode": "SP"
  },
  {
    "city": "RIO DAS PEDRAS",
    "electionZone": "244",
    "stateCode": "SP"
  },
  {
    "city": "SÃO CARLOS",
    "electionZone": "121",
    "stateCode": "SP"
  },
  {
    "city": "RUBINÉIA",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "TRÊS FRONTEIRAS",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "ESPÍRITO SANTO DO TURVO",
    "electionZone": "114",
    "stateCode": "SP"
  },
  {
    "city": "FERNANDÓPOLIS",
    "electionZone": "150",
    "stateCode": "SP"
  },
  {
    "city": "NOVA CANAÃ PAULISTA",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "IGUAPE",
    "electionZone": "51",
    "stateCode": "SP"
  },
  {
    "city": "DUMONT",
    "electionZone": "109",
    "stateCode": "SP"
  },
  {
    "city": "ITAPURA",
    "electionZone": "88",
    "stateCode": "SP"
  },
  {
    "city": "CHARQUEADA",
    "electionZone": "244",
    "stateCode": "SP"
  },
  {
    "city": "GUAPIAÇU",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "MANDURI",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "ÁGUAS DE LINDÓIA",
    "electionZone": "134",
    "stateCode": "SP"
  },
  {
    "city": "PEREIRA BARRETO",
    "electionZone": "88",
    "stateCode": "SP"
  },
  {
    "city": "ANDRADINA",
    "electionZone": "9",
    "stateCode": "SP"
  },
  {
    "city": "UCHOA",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "OLÍMPIA",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "CEDRAL",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOÃO DAS DUAS PONTES",
    "electionZone": "233",
    "stateCode": "SP"
  },
  {
    "city": "TURMALINA",
    "electionZone": "233",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANDRÉ",
    "electionZone": "321",
    "stateCode": "SP"
  },
  {
    "city": "LOUVEIRA",
    "electionZone": "345",
    "stateCode": "SP"
  },
  {
    "city": "PIRAPOZINHO",
    "electionZone": "261",
    "stateCode": "SP"
  },
  {
    "city": "AREIAS",
    "electionZone": "105",
    "stateCode": "SP"
  },
  {
    "city": "MORRO AGUDO",
    "electionZone": "336",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO PRETO",
    "electionZone": "265",
    "stateCode": "SP"
  },
  {
    "city": "GUATAPARÁ",
    "electionZone": "293",
    "stateCode": "SP"
  },
  {
    "city": "ECHAPORÃ",
    "electionZone": "290",
    "stateCode": "SP"
  },
  {
    "city": "SANTA ISABEL",
    "electionZone": "115",
    "stateCode": "SP"
  },
  {
    "city": "DESCALVADO",
    "electionZone": "44",
    "stateCode": "SP"
  },
  {
    "city": "MARTINÓPOLIS",
    "electionZone": "71",
    "stateCode": "SP"
  },
  {
    "city": "BOREBI",
    "electionZone": "161",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "332",
    "stateCode": "SP"
  },
  {
    "city": "BURI",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "RUBIÁCEA",
    "electionZone": "151",
    "stateCode": "SP"
  },
  {
    "city": "PIQUEROBI",
    "electionZone": "117",
    "stateCode": "SP"
  },
  {
    "city": "CRAVINHOS",
    "electionZone": "193",
    "stateCode": "SP"
  },
  {
    "city": "ÓLEO",
    "electionZone": "94",
    "stateCode": "SP"
  },
  {
    "city": "EMILIANÓPOLIS",
    "electionZone": "165",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "246",
    "stateCode": "SP"
  },
  {
    "city": "PILAR DO SUL",
    "electionZone": "89",
    "stateCode": "SP"
  },
  {
    "city": "RINCÃO",
    "electionZone": "239",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "185",
    "stateCode": "SP"
  },
  {
    "city": "GETULINA",
    "electionZone": "160",
    "stateCode": "SP"
  },
  {
    "city": "GUARULHOS",
    "electionZone": "278",
    "stateCode": "SP"
  },
  {
    "city": "SANTA MARIA DA SERRA",
    "electionZone": "130",
    "stateCode": "SP"
  },
  {
    "city": "MIRANDÓPOLIS",
    "electionZone": "153",
    "stateCode": "SP"
  },
  {
    "city": "JOÃO RAMALHO",
    "electionZone": "104",
    "stateCode": "SP"
  },
  {
    "city": "ITATINGA",
    "electionZone": "26",
    "stateCode": "SP"
  },
  {
    "city": "CAJATI",
    "electionZone": "228",
    "stateCode": "SP"
  },
  {
    "city": "CAJOBI",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "SANTA SALETE",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "VARGEM",
    "electionZone": "298",
    "stateCode": "SP"
  },
  {
    "city": "NOVA LUZITÂNIA",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "OSASCO",
    "electionZone": "276",
    "stateCode": "SP"
  },
  {
    "city": "CANITAR",
    "electionZone": "313",
    "stateCode": "SP"
  },
  {
    "city": "SEVERÍNIA",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "EMBAÚBA",
    "electionZone": "80",
    "stateCode": "SP"
  },
  {
    "city": "SANTA ERNESTINA",
    "electionZone": "139",
    "stateCode": "SP"
  },
  {
    "city": "JACAREÍ",
    "electionZone": "396",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "256",
    "stateCode": "SP"
  },
  {
    "city": "ITOBI",
    "electionZone": "39",
    "stateCode": "SP"
  },
  {
    "city": "MENDONÇA",
    "electionZone": "64",
    "stateCode": "SP"
  },
  {
    "city": "ITAJOBI",
    "electionZone": "79",
    "stateCode": "SP"
  },
  {
    "city": "SANTA CRUZ DAS PALMEIRAS",
    "electionZone": "113",
    "stateCode": "SP"
  },
  {
    "city": "PIRANGI",
    "electionZone": "76",
    "stateCode": "SP"
  },
  {
    "city": "GUARARAPES",
    "electionZone": "151",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "247",
    "stateCode": "SP"
  },
  {
    "city": "MESÓPOLIS",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "PLANALTO",
    "electionZone": "214",
    "stateCode": "SP"
  },
  {
    "city": "JERIQUARA",
    "electionZone": "155",
    "stateCode": "SP"
  },
  {
    "city": "PRAIA GRANDE",
    "electionZone": "317",
    "stateCode": "SP"
  },
  {
    "city": "ITAPECERICA DA SERRA",
    "electionZone": "201",
    "stateCode": "SP"
  },
  {
    "city": "OSCAR BRESSANE",
    "electionZone": "12",
    "stateCode": "SP"
  },
  {
    "city": "PALMARES PAULISTA",
    "electionZone": "111",
    "stateCode": "SP"
  },
  {
    "city": "SALTO DE PIRAPORA",
    "electionZone": "294",
    "stateCode": "SP"
  },
  {
    "city": "TAIÚVA",
    "electionZone": "61",
    "stateCode": "SP"
  },
  {
    "city": "AURIFLAMA",
    "electionZone": "225",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE BERNARDES",
    "electionZone": "165",
    "stateCode": "SP"
  },
  {
    "city": "OCAUÇU",
    "electionZone": "180",
    "stateCode": "SP"
  },
  {
    "city": "NATIVIDADE DA SERRA",
    "electionZone": "84",
    "stateCode": "SP"
  },
  {
    "city": "PATROCÍNIO PAULISTA",
    "electionZone": "85",
    "stateCode": "SP"
  },
  {
    "city": "ZACARIAS",
    "electionZone": "214",
    "stateCode": "SP"
  },
  {
    "city": "MIRASSOL",
    "electionZone": "72",
    "stateCode": "SP"
  },
  {
    "city": "VARGEM GRANDE DO SUL",
    "electionZone": "229",
    "stateCode": "SP"
  },
  {
    "city": "SANTA MERCEDES",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "JARDINÓPOLIS",
    "electionZone": "204",
    "stateCode": "SP"
  },
  {
    "city": "ÁGUAS DA PRATA",
    "electionZone": "122",
    "stateCode": "SP"
  },
  {
    "city": "PALMEIRA D'OESTE",
    "electionZone": "232",
    "stateCode": "SP"
  },
  {
    "city": "QUELUZ",
    "electionZone": "105",
    "stateCode": "SP"
  },
  {
    "city": "AMÉRICO BRASILIENSE",
    "electionZone": "239",
    "stateCode": "SP"
  },
  {
    "city": "PALMITAL",
    "electionZone": "83",
    "stateCode": "SP"
  },
  {
    "city": "JAGUARIÚNA",
    "electionZone": "333",
    "stateCode": "SP"
  },
  {
    "city": "REDENÇÃO DA SERRA",
    "electionZone": "314",
    "stateCode": "SP"
  },
  {
    "city": "ALAMBARI",
    "electionZone": "52",
    "stateCode": "SP"
  },
  {
    "city": "CÂNDIDO MOTA",
    "electionZone": "226",
    "stateCode": "SP"
  },
  {
    "city": "PEDRINHAS PAULISTA",
    "electionZone": "363",
    "stateCode": "SP"
  },
  {
    "city": "TEODORO SAMPAIO",
    "electionZone": "330",
    "stateCode": "SP"
  },
  {
    "city": "SANTO ANTÔNIO DO ARACANGUÁ",
    "electionZone": "299",
    "stateCode": "SP"
  },
  {
    "city": "NOVA GUATAPORANGA",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "TAPIRAÍ",
    "electionZone": "89",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PAULO",
    "electionZone": "417",
    "stateCode": "SP"
  },
  {
    "city": "CORUMBATAÍ",
    "electionZone": "245",
    "stateCode": "SP"
  },
  {
    "city": "SALMOURÃO",
    "electionZone": "163",
    "stateCode": "SP"
  },
  {
    "city": "GUARAÇAÍ",
    "electionZone": "153",
    "stateCode": "SP"
  },
  {
    "city": "SÃO MIGUEL ARCANJO",
    "electionZone": "318",
    "stateCode": "SP"
  },
  {
    "city": "MACAUBAL",
    "electionZone": "77",
    "stateCode": "SP"
  },
  {
    "city": "PIACATU",
    "electionZone": "210",
    "stateCode": "SP"
  },
  {
    "city": "PARAIBUNA",
    "electionZone": "84",
    "stateCode": "SP"
  },
  {
    "city": "ARANDU",
    "electionZone": "301",
    "stateCode": "SP"
  },
  {
    "city": "INDIAPORÃ",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "GUARATINGUETÁ",
    "electionZone": "48",
    "stateCode": "SP"
  },
  {
    "city": "BARÃO DE ANTONINA",
    "electionZone": "56",
    "stateCode": "SP"
  },
  {
    "city": "DOBRADA",
    "electionZone": "170",
    "stateCode": "SP"
  },
  {
    "city": "CHAVANTES",
    "electionZone": "313",
    "stateCode": "SP"
  },
  {
    "city": "ITARIRI",
    "electionZone": "295",
    "stateCode": "SP"
  },
  {
    "city": "ÁLVARES FLORENCE",
    "electionZone": "147",
    "stateCode": "SP"
  },
  {
    "city": "GUAIÇARA",
    "electionZone": "67",
    "stateCode": "SP"
  },
  {
    "city": "BILAC",
    "electionZone": "210",
    "stateCode": "SP"
  },
  {
    "city": "FERNÃO",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "TRABIJU",
    "electionZone": "107",
    "stateCode": "SP"
  },
  {
    "city": "ARARAS",
    "electionZone": "14",
    "stateCode": "SP"
  },
  {
    "city": "FERNANDO PRESTES",
    "electionZone": "139",
    "stateCode": "SP"
  },
  {
    "city": "ANHEMBI",
    "electionZone": "41",
    "stateCode": "SP"
  },
  {
    "city": "CAMPOS NOVOS PAULISTA",
    "electionZone": "83",
    "stateCode": "SP"
  },
  {
    "city": "MONTE AZUL PAULISTA",
    "electionZone": "171",
    "stateCode": "SP"
  },
  {
    "city": "SÃO PEDRO DO TURVO",
    "electionZone": "114",
    "stateCode": "SP"
  },
  {
    "city": "LINDÓIA",
    "electionZone": "134",
    "stateCode": "SP"
  },
  {
    "city": "TERRA ROXA",
    "electionZone": "203",
    "stateCode": "SP"
  },
  {
    "city": "LAVÍNIA",
    "electionZone": "153",
    "stateCode": "SP"
  },
  {
    "city": "ITAPORANGA",
    "electionZone": "56",
    "stateCode": "SP"
  },
  {
    "city": "ITAQUAQUECETUBA",
    "electionZone": "419",
    "stateCode": "SP"
  },
  {
    "city": "SOCORRO",
    "electionZone": "136",
    "stateCode": "SP"
  },
  {
    "city": "AVAÍ",
    "electionZone": "300",
    "stateCode": "SP"
  },
  {
    "city": "LUIZIÂNIA",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "NANTES",
    "electionZone": "106",
    "stateCode": "SP"
  },
  {
    "city": "ÁLVARO DE CARVALHO",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "SANDOVALINA",
    "electionZone": "261",
    "stateCode": "SP"
  },
  {
    "city": "IACRI",
    "electionZone": "184",
    "stateCode": "SP"
  },
  {
    "city": "ASSIS",
    "electionZone": "290",
    "stateCode": "SP"
  },
  {
    "city": "JACI",
    "electionZone": "72",
    "stateCode": "SP"
  },
  {
    "city": "PLATINA",
    "electionZone": "83",
    "stateCode": "SP"
  },
  {
    "city": "CARDOSO",
    "electionZone": "224",
    "stateCode": "SP"
  },
  {
    "city": "MERIDIANO",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "PARAPUÃ",
    "electionZone": "163",
    "stateCode": "SP"
  },
  {
    "city": "HERCULÂNDIA",
    "electionZone": "184",
    "stateCode": "SP"
  },
  {
    "city": "BIRITIBA MIRIM",
    "electionZone": "319",
    "stateCode": "SP"
  },
  {
    "city": "TABOÃO DA SERRA",
    "electionZone": "416",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO BRANCO",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "RAFARD",
    "electionZone": "38",
    "stateCode": "SP"
  },
  {
    "city": "ARTUR NOGUEIRA",
    "electionZone": "75",
    "stateCode": "SP"
  },
  {
    "city": "LUCIANÓPOLIS",
    "electionZone": "159",
    "stateCode": "SP"
  },
  {
    "city": "SILVEIRAS",
    "electionZone": "145",
    "stateCode": "SP"
  },
  {
    "city": "MONTE CASTELO",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "BORACÉIA",
    "electionZone": "86",
    "stateCode": "SP"
  },
  {
    "city": "GASTÃO VIDIGAL",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "SANTA CLARA D'OESTE",
    "electionZone": "187",
    "stateCode": "SP"
  },
  {
    "city": "HOLAMBRA",
    "electionZone": "75",
    "stateCode": "SP"
  },
  {
    "city": "ARAPEÍ",
    "electionZone": "18",
    "stateCode": "SP"
  },
  {
    "city": "BALBINOS",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "PEDRANÓPOLIS",
    "electionZone": "302",
    "stateCode": "SP"
  },
  {
    "city": "ITUVERAVA",
    "electionZone": "60",
    "stateCode": "SP"
  },
  {
    "city": "BIRIGUI",
    "electionZone": "25",
    "stateCode": "SP"
  },
  {
    "city": "IRAPURU",
    "electionZone": "154",
    "stateCode": "SP"
  },
  {
    "city": "ITÁPOLIS",
    "electionZone": "55",
    "stateCode": "SP"
  },
  {
    "city": "ITABERÁ",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "POPULINA",
    "electionZone": "233",
    "stateCode": "SP"
  },
  {
    "city": "SANTO EXPEDITO",
    "electionZone": "182",
    "stateCode": "SP"
  },
  {
    "city": "LAVRINHAS",
    "electionZone": "42",
    "stateCode": "SP"
  },
  {
    "city": "GLICÉRIO",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "BREJO ALEGRE",
    "electionZone": "25",
    "stateCode": "SP"
  },
  {
    "city": "AMÉRICO DE CAMPOS",
    "electionZone": "138",
    "stateCode": "SP"
  },
  {
    "city": "SALTINHO",
    "electionZone": "270",
    "stateCode": "SP"
  },
  {
    "city": "IBITINGA",
    "electionZone": "49",
    "stateCode": "SP"
  },
  {
    "city": "VITÓRIA BRASIL",
    "electionZone": "152",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE ALVES",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "NOVA CASTILHO",
    "electionZone": "168",
    "stateCode": "SP"
  },
  {
    "city": "NOVA CAMPINA",
    "electionZone": "53",
    "stateCode": "SP"
  },
  {
    "city": "ALVINLÂNDIA",
    "electionZone": "47",
    "stateCode": "SP"
  },
  {
    "city": "ARAMINA",
    "electionZone": "50",
    "stateCode": "SP"
  },
  {
    "city": "PRESIDENTE VENCESLAU",
    "electionZone": "102",
    "stateCode": "SP"
  },
  {
    "city": "NOVA ALIANÇA",
    "electionZone": "126",
    "stateCode": "SP"
  },
  {
    "city": "RIBEIRÃO CORRENTE",
    "electionZone": "240",
    "stateCode": "SP"
  },
  {
    "city": "COLINA",
    "electionZone": "178",
    "stateCode": "SP"
  },
  {
    "city": "ROSEIRA",
    "electionZone": "190",
    "stateCode": "SP"
  },
  {
    "city": "GUARIBA",
    "electionZone": "197",
    "stateCode": "SP"
  },
  {
    "city": "CORDEIRÓPOLIS",
    "electionZone": "243",
    "stateCode": "SP"
  },
  {
    "city": "MARINÓPOLIS",
    "electionZone": "232",
    "stateCode": "SP"
  },
  {
    "city": "PONGAÍ",
    "electionZone": "95",
    "stateCode": "SP"
  },
  {
    "city": "CAMPINA DO MONTE ALEGRE",
    "electionZone": "215",
    "stateCode": "SP"
  },
  {
    "city": "SÃO JOÃO DO PAU D'ALHO",
    "electionZone": "175",
    "stateCode": "SP"
  },
  {
    "city": "ALTO ALEGRE",
    "electionZone": "289",
    "stateCode": "SP"
  },
  {
    "city": "MONÇÕES",
    "electionZone": "162",
    "stateCode": "SP"
  },
  {
    "city": "SÃO BENTO DO TOCANTINS",
    "electionZone": "10",
    "stateCode": "TO"
  },
  {
    "city": "PALMEIRÓPOLIS",
    "electionZone": "18",
    "stateCode": "TO"
  },
  {
    "city": "CARRASCO BONITO",
    "electionZone": "21",
    "stateCode": "TO"
  },
  {
    "city": "CENTENÁRIO",
    "electionZone": "33",
    "stateCode": "TO"
  },
  {
    "city": "PORTO ALEGRE DO TOCANTINS",
    "electionZone": "25",
    "stateCode": "TO"
  },
  {
    "city": "AXIXÁ DO TOCANTINS",
    "electionZone": "11",
    "stateCode": "TO"
  },
  {
    "city": "CAMPOS LINDOS",
    "electionZone": "32",
    "stateCode": "TO"
  },
  {
    "city": "JAÚ DO TOCANTINS",
    "electionZone": "20",
    "stateCode": "TO"
  },
  {
    "city": "MAURILÂNDIA DO TOCANTINS",
    "electionZone": "11",
    "stateCode": "TO"
  },
  {
    "city": "AURORA DO TOCANTINS",
    "electionZone": "17",
    "stateCode": "TO"
  },
  {
    "city": "JUARINA",
    "electionZone": "4",
    "stateCode": "TO"
  },
  {
    "city": "LUZINÓPOLIS",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "NOVO ALEGRE",
    "electionZone": "22",
    "stateCode": "TO"
  },
  {
    "city": "SAMPAIO",
    "electionZone": "21",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUACEMA",
    "electionZone": "24",
    "stateCode": "TO"
  },
  {
    "city": "LAGOA DO TOCANTINS",
    "electionZone": "35",
    "stateCode": "TO"
  },
  {
    "city": "SÃO MIGUEL DO TOCANTINS",
    "electionZone": "11",
    "stateCode": "TO"
  },
  {
    "city": "PIUM",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "PORTO NACIONAL",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "LAJEADO",
    "electionZone": "5",
    "stateCode": "TO"
  },
  {
    "city": "ESPERANTINA",
    "electionZone": "10",
    "stateCode": "TO"
  },
  {
    "city": "BANDEIRANTES DO TOCANTINS",
    "electionZone": "31",
    "stateCode": "TO"
  },
  {
    "city": "TOCANTINÓPOLIS",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "NOVA ROSALÂNDIA",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "RIO DOS BOIS",
    "electionZone": "28",
    "stateCode": "TO"
  },
  {
    "city": "PARANÃ",
    "electionZone": "18",
    "stateCode": "TO"
  },
  {
    "city": "COUTO DE MAGALHÃES",
    "electionZone": "16",
    "stateCode": "TO"
  },
  {
    "city": "COMBINADO",
    "electionZone": "22",
    "stateCode": "TO"
  },
  {
    "city": "RIO SONO",
    "electionZone": "23",
    "stateCode": "TO"
  },
  {
    "city": "IPUEIRAS",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "SANTA RITA DO TOCANTINS",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "ALIANÇA DO TOCANTINS",
    "electionZone": "2",
    "stateCode": "TO"
  },
  {
    "city": "PALMAS",
    "electionZone": "29",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUATINS",
    "electionZone": "10",
    "stateCode": "TO"
  },
  {
    "city": "DARCINÓPOLIS",
    "electionZone": "27",
    "stateCode": "TO"
  },
  {
    "city": "GOIANORTE",
    "electionZone": "16",
    "stateCode": "TO"
  },
  {
    "city": "BOM JESUS DO TOCANTINS",
    "electionZone": "23",
    "stateCode": "TO"
  },
  {
    "city": "CHAPADA DA NATIVIDADE",
    "electionZone": "19",
    "stateCode": "TO"
  },
  {
    "city": "MONTE DO CARMO",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "WANDERLÂNDIA",
    "electionZone": "27",
    "stateCode": "TO"
  },
  {
    "city": "PIRAQUÊ",
    "electionZone": "27",
    "stateCode": "TO"
  },
  {
    "city": "DUERÉ",
    "electionZone": "15",
    "stateCode": "TO"
  },
  {
    "city": "CHAPADA DE AREIA",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "MONTE SANTO DO TOCANTINS",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "LIZARDA",
    "electionZone": "35",
    "stateCode": "TO"
  },
  {
    "city": "PONTE ALTA DO BOM JESUS",
    "electionZone": "17",
    "stateCode": "TO"
  },
  {
    "city": "ITAGUATINS",
    "electionZone": "11",
    "stateCode": "TO"
  },
  {
    "city": "GURUPI",
    "electionZone": "2",
    "stateCode": "TO"
  },
  {
    "city": "CONCEIÇÃO DO TOCANTINS",
    "electionZone": "19",
    "stateCode": "TO"
  },
  {
    "city": "LAGOA DA CONFUSÃO",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "ALVORADA",
    "electionZone": "14",
    "stateCode": "TO"
  },
  {
    "city": "RIO DA CONCEIÇÃO",
    "electionZone": "25",
    "stateCode": "TO"
  },
  {
    "city": "NAZARÉ",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "TAGUATINGA",
    "electionZone": "17",
    "stateCode": "TO"
  },
  {
    "city": "DIANÓPOLIS",
    "electionZone": "25",
    "stateCode": "TO"
  },
  {
    "city": "BARRA DO OURO",
    "electionZone": "32",
    "stateCode": "TO"
  },
  {
    "city": "AGUIARNÓPOLIS",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "PRESIDENTE KENNEDY",
    "electionZone": "6",
    "stateCode": "TO"
  },
  {
    "city": "PEDRO AFONSO",
    "electionZone": "23",
    "stateCode": "TO"
  },
  {
    "city": "TALISMÃ",
    "electionZone": "14",
    "stateCode": "TO"
  },
  {
    "city": "PUGMIL",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "ITAPIRATINS",
    "electionZone": "33",
    "stateCode": "TO"
  },
  {
    "city": "MARIANÓPOLIS DO TOCANTINS",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "RECURSOLÂNDIA",
    "electionZone": "33",
    "stateCode": "TO"
  },
  {
    "city": "ITACAJÁ",
    "electionZone": "33",
    "stateCode": "TO"
  },
  {
    "city": "TUPIRAMA",
    "electionZone": "23",
    "stateCode": "TO"
  },
  {
    "city": "BURITI DO TOCANTINS",
    "electionZone": "10",
    "stateCode": "TO"
  },
  {
    "city": "PEIXE",
    "electionZone": "20",
    "stateCode": "TO"
  },
  {
    "city": "MIRANORTE",
    "electionZone": "28",
    "stateCode": "TO"
  },
  {
    "city": "NOVO JARDIM",
    "electionZone": "25",
    "stateCode": "TO"
  },
  {
    "city": "ANGICO",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "SANDOLÂNDIA",
    "electionZone": "30",
    "stateCode": "TO"
  },
  {
    "city": "PEQUIZEIRO",
    "electionZone": "16",
    "stateCode": "TO"
  },
  {
    "city": "BREJINHO DE NAZARÉ",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUAÇU",
    "electionZone": "30",
    "stateCode": "TO"
  },
  {
    "city": "BARROLÂNDIA",
    "electionZone": "28",
    "stateCode": "TO"
  },
  {
    "city": "CACHOEIRINHA",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "FIGUEIRÓPOLIS",
    "electionZone": "14",
    "stateCode": "TO"
  },
  {
    "city": "SANTA MARIA DO TOCANTINS",
    "electionZone": "23",
    "stateCode": "TO"
  },
  {
    "city": "COLINAS DO TOCANTINS",
    "electionZone": "4",
    "stateCode": "TO"
  },
  {
    "city": "CRIXÁS DO TOCANTINS",
    "electionZone": "2",
    "stateCode": "TO"
  },
  {
    "city": "CARMOLÂNDIA",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUANÃ",
    "electionZone": "12",
    "stateCode": "TO"
  },
  {
    "city": "DIVINÓPOLIS DO TOCANTINS",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUAÍNA",
    "electionZone": "1",
    "stateCode": "TO"
  },
  {
    "city": "XAMBIOÁ",
    "electionZone": "12",
    "stateCode": "TO"
  },
  {
    "city": "ANANÁS",
    "electionZone": "12",
    "stateCode": "TO"
  },
  {
    "city": "RIACHINHO",
    "electionZone": "12",
    "stateCode": "TO"
  },
  {
    "city": "AUGUSTINÓPOLIS",
    "electionZone": "21",
    "stateCode": "TO"
  },
  {
    "city": "MURICILÂNDIA",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "FÁTIMA",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "ARRAIAS",
    "electionZone": "22",
    "stateCode": "TO"
  },
  {
    "city": "NOVA OLINDA",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "OLIVEIRA DE FÁTIMA",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "PARAÍSO DO TOCANTINS",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "ARAGOMINAS",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "PALMEIRANTE",
    "electionZone": "8",
    "stateCode": "TO"
  },
  {
    "city": "PONTE ALTA DO TOCANTINS",
    "electionZone": "26",
    "stateCode": "TO"
  },
  {
    "city": "SÍTIO NOVO DO TOCANTINS",
    "electionZone": "11",
    "stateCode": "TO"
  },
  {
    "city": "MIRACEMA DO TOCANTINS",
    "electionZone": "5",
    "stateCode": "TO"
  },
  {
    "city": "BRASILÂNDIA DO TOCANTINS",
    "electionZone": "4",
    "stateCode": "TO"
  },
  {
    "city": "SÃO SEBASTIÃO DO TOCANTINS",
    "electionZone": "21",
    "stateCode": "TO"
  },
  {
    "city": "BABAÇULÂNDIA",
    "electionZone": "8",
    "stateCode": "TO"
  },
  {
    "city": "SUCUPIRA",
    "electionZone": "20",
    "stateCode": "TO"
  },
  {
    "city": "NOVO ACORDO",
    "electionZone": "35",
    "stateCode": "TO"
  },
  {
    "city": "FILADÉLFIA",
    "electionZone": "8",
    "stateCode": "TO"
  },
  {
    "city": "NATIVIDADE",
    "electionZone": "19",
    "stateCode": "TO"
  },
  {
    "city": "SANTA ROSA DO TOCANTINS",
    "electionZone": "19",
    "stateCode": "TO"
  },
  {
    "city": "PAU D'ARCO",
    "electionZone": "31",
    "stateCode": "TO"
  },
  {
    "city": "CARIRI DO TOCANTINS",
    "electionZone": "2",
    "stateCode": "TO"
  },
  {
    "city": "CASEARA",
    "electionZone": "24",
    "stateCode": "TO"
  },
  {
    "city": "ARAGUAÍNA",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "PINDORAMA DO TOCANTINS",
    "electionZone": "26",
    "stateCode": "TO"
  },
  {
    "city": "LAVANDEIRA",
    "electionZone": "17",
    "stateCode": "TO"
  },
  {
    "city": "PRAIA NORTE",
    "electionZone": "21",
    "stateCode": "TO"
  },
  {
    "city": "SANTA TEREZA DO TOCANTINS",
    "electionZone": "35",
    "stateCode": "TO"
  },
  {
    "city": "ARAPOEMA",
    "electionZone": "31",
    "stateCode": "TO"
  },
  {
    "city": "SANTA TEREZINHA DO TOCANTINS",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "SÃO VALÉRIO DA NATIVIDADE",
    "electionZone": "20",
    "stateCode": "TO"
  },
  {
    "city": "APARECIDA DO RIO NEGRO",
    "electionZone": "35",
    "stateCode": "TO"
  },
  {
    "city": "GOIATINS",
    "electionZone": "32",
    "stateCode": "TO"
  },
  {
    "city": "FORMOSO DO ARAGUAIA",
    "electionZone": "15",
    "stateCode": "TO"
  },
  {
    "city": "TAIPAS DO TOCANTINS",
    "electionZone": "25",
    "stateCode": "TO"
  },
  {
    "city": "SÃO SALVADOR DO TOCANTINS",
    "electionZone": "18",
    "stateCode": "TO"
  },
  {
    "city": "SILVANÓPOLIS",
    "electionZone": "3",
    "stateCode": "TO"
  },
  {
    "city": "ABREULÂNDIA",
    "electionZone": "7",
    "stateCode": "TO"
  },
  {
    "city": "BERNARDO SAYÃO",
    "electionZone": "4",
    "stateCode": "TO"
  },
  {
    "city": "GUARAÍ",
    "electionZone": "6",
    "stateCode": "TO"
  },
  {
    "city": "TOCANTÍNIA",
    "electionZone": "5",
    "stateCode": "TO"
  },
  {
    "city": "ITAPORÃ DO TOCANTINS",
    "electionZone": "16",
    "stateCode": "TO"
  },
  {
    "city": "CRISTALÂNDIA",
    "electionZone": "13",
    "stateCode": "TO"
  },
  {
    "city": "DOIS IRMÃOS DO TOCANTINS",
    "electionZone": "28",
    "stateCode": "TO"
  },
  {
    "city": "SANTA FÉ DO ARAGUAIA",
    "electionZone": "34",
    "stateCode": "TO"
  },
  {
    "city": "ALMAS",
    "electionZone": "19",
    "stateCode": "TO"
  },
  {
    "city": "PALMEIRAS DO TOCANTINS",
    "electionZone": "9",
    "stateCode": "TO"
  },
  {
    "city": "FORTALEZA DO TABOCÃO",
    "electionZone": "6",
    "stateCode": "TO"
  },
  {
    "city": "MATEIROS",
    "electionZone": "26",
    "stateCode": "TO"
  },
  {
    "city": "COLMÉIA",
    "electionZone": "16",
    "stateCode": "TO"
  },
  {
    "city": "TUPIRATINS",
    "electionZone": "6",
    "stateCode": "TO"
  },
  {
    "city": "SÃO FÉLIX DO TOCANTINS",
    "electionZone": "35",
    "stateCode": "TO"
  }
];
