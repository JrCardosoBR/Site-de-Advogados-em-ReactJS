import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import ForestIcon from '@mui/icons-material/Forest';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import StoreIcon from '@mui/icons-material/Store';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

export const navlink = [
  {
    url: "/",
    text: "Inicio",
  },
  {
    url: "/about",
    text: "Sobre",
  },
  {
    url: "/services",
    text: "Serviços",
  },
  {
    url: "/lawyers",
    text: "Advogados",
  },
  {
    url: "/clients",
    text: "Clientes",
  },
  {
    url: "/lawsuits",
    text: "Processos",
  },
  {
    url: "/contact",
    text: "Contato",
  },

]
export const home = [
  {
    text: "Olá, Nós Somos",
    name: "Gotham City Advogados",
    post: "Maior Compania Advocacia de Gotham City",
    design: "Processos Trabalhista, Imobiliário, Cível, Ambientalista, Criminalista e Previdenciário",
    desc: "Nosso escritório se encontra na região de uptown em Gotham City e possui toda a estrutura necessária para atender nossos clientes e representantes com sigilo e discrição necessária.",
  },
]
export const about = [
  {
    desc: "Nosso escritório de advocacia se destaca por ter o comprometimento de prestar serviços com excelência e cuidados necessários, pois afinal de contas, estamos cuidando de assuntos que são por muitas vezes, tudo na vida de uma pessoa.",
    desc1: "O escritório foi criado para oferecer aos nossos clientes um serviço altamente personalizado e especializado, onde todos os casos são acompanhados de perto e com zelo pela sócia fundadora, possibilitando e aumentando as chances de serem desenvolvidas teses criativas e eficazes para a melhor solução das questões enfrentadas.",
    desc2: "Valorizamos cada caso, a individualidade, importância e sigilo de cada cliente, prestigiando suas escolhas e reconhecendo suas necessidades, tendo como prioridade a confiança e os relacionamentos saudáveis.",
    cover: "./images/man.jpg",
  },
]
export const services = [
  {
    id: 1,
    icon: <BusinessCenterIcon />,
    title: "Trabalhista",
    desc: "O advogado trabalhista lida com rescisão de contrato de trabalho, horas extras, férias, licenças, assédio moral, discriminação no ambiente de trabalho, direitos previdenciários, entre outras atribuições.",
  },
  {
    id: 2,
    icon: <ApartmentIcon />,
    title: "Imobiliário",
    desc: "O advogado imobiliário lida com contratos de compra e venda, aluguel de imóveis, financiamentos, regularização de imóveis e etc.",
  },
  {
    id: 3,
    icon: <PersonIcon />,
    title: "Cível",
    desc: "O advogado cível lida com questões relacionadas a contratos, posses, bens e questões familiares. ",
  },
  {
    id: 4,
    icon: <LocalPoliceIcon />,
    title: "Criminalista	",
    desc: "O advogado criminalista lida com assessoria jurídica, elaboração de defesas e recursos judiciais, negociação de acordos com o Ministério Público e representação de clientes em julgamentos e audiências.",
  },
  {
    id: 5,
    icon: <GavelIcon />,
    title: "Previdenciário",
    desc: "O advogado previdenciário lida com orientação e assessoria jurídica a segurados e beneficiários da previdência social, negociação de acordos e indenizações para segurados lesados.",
  },
  {
    id: 6,
    icon: <ForestIcon />,
    title: "Ambientalista",
    desc: "O advogado ambientalista lida com solicitação de licenciamento ambiental e reparação de danos ambientais, assessoria jurídica em projetos de impacto ambiental, ações civis públicas, ações populares e outras ações judiciais relacionadas ao meio ambiente.",
  },
]
export const project = [
  {
    id: 1,
    icon: <SentimentSatisfiedAltIcon />,
    num: "20542",
    title: "CLIENTES FELIZES",
  },
  {
    id: 2,
    icon: <ContentPasteIcon />,
    num: "18231",
    title: "PROCESSOS REALIZADOS",
  },
  {
    id: 3,
    icon: <StoreIcon />,
    num: "108",
    title: "EMPRESAS SALVAS",
  },
  {
    id: 4,
    icon: <SafetyCheckIcon />,
    num: "35",
    title: "ANOS DE MERCADO",
  },
]
export const lawyers = [
  {
    id: 1,
    cover: "../images/lawyers/BruceWayne.jpg",
    name: "OAB/SC nº 11.111",
    category: "Trabalhista",
    title: "Bruce Wayne",
  },
  {
    id: 2,
    cover: "../images/lawyers/SelinaKyle.jpg",
    name: "OAB/SC nº 22.222",
    category: "Imobiliário",
    title: "Selina Kyle",
  },
  {
    id: 3,
    cover: "../images/lawyers/JimGordon.jpg",
    name: "OAB/SC nº 33.333",
    category: "Cível",
    title: "Jim Gordon",
  },
  {
    id: 4,
    cover: "../images/lawyers/HarleyQuinn.jpg",
    name: "OAB/SC nº 44.444",
    category: "Criminalista",
    title: "Harley Quinn",
  },
  {
    id: 5,
    cover: "../images/lawyers/HarveyDent.jpg",
    name: "OAB/SC nº 55.555",
    category: "Previdenciário",
    title: "Harvey Dent",
  },
  {
    id: 6,
    cover: "../images/lawyers/PamelaLilianIsley.jpg",
    name: "OAB/SC nº 66.666",
    category: "Ambientalista",
    title: "PamelaLilianIsley",
  },
  
]
export const clients = [
  {
    id: 1,
    text: "Agradeço muito a Gotham City Advogados, me ajudaram a processar meu antigo local de trabalho por questões trabalhistas, Gotham City Advogados é de Aço!.",
    image: "./images/clients/ClarkKent.jpg",
    name: "Clark Kent",
    post: "Reporter",
  },
  {
    id: 2,
    text: "Me salvaram no meu divorcio, quase fiquei só com as roupas do corpo, mas graças a Gotham City Advogados consegui uma divisao de bens justas, Gotham City Advogados é Rapida!",
    image: "./images/clients/BarryAllen.jpg",
    name: "Barry Allen",
    post: "Cientista",
  },
  {
    id: 3,
    text: "Impediram de me mandarem para prisão depois de alguns patrimonios publicos foram destruidos, quem diria que destruir metade de uma cidade em uma luta inutil contra um alien poderia me mandar para cadeia, Gotham City Advogados é Inteligente! ",
    image: "./images/clients/LexLutor.jpg",
    name: "Lex Luthor",
    post: "Empresario",
  },
]
export const lawsuits = [
  {
    id: 1,
    title: "Planeta Diario e a Escravidão Trabalhista",
    date: "27 de Junho de 2023",
    author: "Bruce Wayne,",
    desc: "Gigante do ramo de noticias coloca seus funcionarios em extremo risco para conseguir novas noticias, alem de não pagar ferias aos funcionarios e um salario de fome.",
    cover: "./images/lawsuits/PlanetaDiario.jpg",
  },
  {
    id: 2,
    title: "Separação Por Ser Rapido de Mais",
    date: "15 de Janeiro de 2023",
    author: "Jim Gordon,",
    desc: "Marido quase perde tudo em uma separação de bens com a esposa que afirmava: ''ja que ele é rapido em tudo, pode consguir seus bens novamente em pouco tempo''.",
    cover: "./images/lawsuits/Divorcio.jpg",
  },
  {
    id: 3,
    title: "Alien Causa Danos e Culpa Empresario",
    date: "2 de Maio de 2023",
    author: "Harley Quinn,",
    desc: "Gigante do ramo de tecnologias, Lex Luthor é acusado por uma alienígena de destruir a cidade de Metroplis ao tentar mata-lo.",
    cover: "./images/lawsuits/Metropolis.jpg",
  },
]
export const contact = [
  {
    icon: <FmdGoodIcon />,
    text1: "2651 Rua Central, Predio 124",
    text2: "Gotham City, DC, 6652",
  },
  {
    icon: <SmartphoneIcon />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <MarkunreadIcon />,
    text1: "gothamcityadvogados@gmail.com",
    text2: "gothamcity-advogados@outlook.com",
  },
]
export const social = [
  {
    icon: <LinkedInIcon />,
  },
  {
    icon: <InstagramIcon />,
  },
  {
    icon: <WhatsAppIcon />,
  },
  {
    icon: <TelegramIcon />,
  },
]
