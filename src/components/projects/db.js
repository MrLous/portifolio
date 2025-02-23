import { FaHtml5, FaCss3Alt, FaPhp, FaJsSquare, FaMountain, FaReact, FaRProject, FaPython, FaFigma, FaNodeJs} from "react-icons/fa";
import { SiPowerbi, SiMysql, SiGodotengine, SiTableau } from "react-icons/si";
// https://react-icons.github.io/react-icons/

import LeadingPage from '../../image/Projetos/Leading Page.png'
import crud from '../../image/Projetos/C.R.U.D.png'
import terminal from '../../image/Projetos/Terminal de Retirada.png'
import graduacaoIOT from '../../pdf/CERTIFICADO BTIIC.pdf'
import Logounivesp from '../../image/Univesp.png'
import dataAny from '../../image/Cursos/dataAny.png'
import front from '../../image/Cursos/front.png'
import devgames from '../../image/Cursos/games.png'
import powerBi from '../../image/Cursos/power-bi.png'
import detona from '../../image/Games/detona.PNG'
import piano from '../../image/Games/PIANO.PNG'
import cardJKP from '../../image/Games/card.png'
import memory from '../../image/Games/memory.png'
import backEnd from '../../image/Cursos/backEnd.png'

//Variaveis de Inico.
const iconSize = 30;

const iconHTML = <FaHtml5 color='#E54D26' size={iconSize}/>;
const iconCSS = <FaCss3Alt color='#2684C4' size={iconSize}/>;
const iconJavaScripit = <FaJsSquare color='#E9CA32' size={iconSize}/>;
const iconPHP = <FaPhp color='#2684C4' size={iconSize}/>;
const iconInkscap = <FaMountain color='#E2E7E2' size={iconSize}/>;
const iconFigma = <FaFigma color='#EE1892' size={iconSize} />;
const iconReact = <FaReact color='#8ED487' size={iconSize}/>;
const iconSQL = <SiMysql color='#2684C4' size={iconSize}/>;
const iconR = <FaRProject color='#2684C4' size={iconSize}/>;
const iconPython = <FaPython color='#2684C4' size={iconSize}/>;
const iconPowerBi = <SiPowerbi color='#E9CA32' size={iconSize}/>;
const iconGodot = <SiGodotengine color='#2684C4' size={iconSize}/>;
const iconTableu = <SiTableau color='#E2E7E2' size={iconSize}/>;
const iconNodeJs = <FaNodeJs color='#57a545' size={iconSize}/>

const db = [
    {
        "title": "Leading Page",
        "tech": [iconHTML, iconCSS],
        "descripion": "Desenvolvimento de uma Leading Page para formação pela escola DNC         ",
        "repo": "https://github.com/MrLous/ProjetoDNC01",
        "site": "https://projetolearningdnc.netlify.app/",
        "class": "Projetos",
        "image": LeadingPage
    },{
        "title": "C.R.U.D",
        "tech": [iconHTML, iconCSS, iconPHP, iconInkscap],
        "descripion": "Gerenciador de tarefas simples com controle de status e dinamico         ",
        "repo": "https://github.com/MrLous/crud-task",
        "site": " ",
        "class": "Projetos",
        "image": crud
    },{ 
        "title": "Terminal de Retirada",
        "tech": [iconHTML, iconCSS, iconJavaScripit, iconInkscap],
        "descripion": "Terminal de Retirada para movimentação de peças do almoxarifado          ",
        "repo": "https://github.com/MrLous/Terminal_Simples-sheetMonkey",
        "site": "https://terminal-danplas.netlify.app/",
        "class": "Projetos",
        "image": terminal
    },{ 
        "title": "Engenharia da Computação                                ",
        "tech": "",
        "descripion": "Formação Oferecida pela escola Univesp, com 4400h, Previsão Ago/2026",
        "repo": "https://univesp.br/",
        "site": "https://univesp.br/",
        "class": "Graduação",
        "image": Logounivesp
    },{ 
        "title": "Bacharelado em Tecnologia da Informação",
        "tech": "",
        "descripion": "Formação Oferecida pela escola Univesp, com 2600h, concluído Ago/2024",
        "repo": graduacaoIOT,
        "site": "https://univesp.br/",
        "class": "Graduação",
        "image": Logounivesp
    },{ 
        "title": "Front-End com React.js",
        "tech": [iconHTML, iconCSS, iconJavaScripit,iconFigma, iconReact],
        "descripion": "Curso Oferecido pela escola DNC, com 40h, concluído DEZ/2023.           ",
        "repo": "https://ed.escoladnc.com/formacoes-g/?utm_source=adwords&utm_medium=paid&utm_campaign=hr-ga-geral-312-1&utm_content=hr-ga-geral-312-1-1&utm_term=dnc&utm_term=dnc&utm_campaign=%5B312%5D%5BOP%5D%5BHR%5D%5BGeral%5D%5BSearch%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=1620955800&hsa_cam=21542018591&hsa_grp=165520193733&hsa_ad=708070867381&hsa_src=g&hsa_tgt=kwd-13228606&hsa_kw=dnc&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnaiD7UCZ5hkR3JIZNTEGqbqESuXYBWI0-u-9_vwGGrvjVihKQkzRqhoCSEUQAvD_BwE",
        "site": front,
        "class": "Cursos",
        "image": front
    },{ 
        "title": "Desenvolvedor de Jogos",
        "tech": [iconHTML, iconCSS, iconJavaScripit, iconInkscap,iconGodot],
        "descripion": "Curso Oferecido pela escola DIO, com 77h, concluído DEZ/2023.          ",
        "repo": "https://www.dio.me/",
        "site": devgames,
        "class": "Cursos",
        "image": devgames
    },{ 
        "title": "Data Analytics",
        "tech": [iconSQL, iconR, iconTableu],
        "descripion": "Curso Oferecido pela escola Coursera/Google, com 120h, concluído MAR/2023.",
        "repo": "https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_LATAM_coursera_FTCOF_courseraplus&campaignid=20844412474&adgroupid=159999536361&device=c&keyword=coursera&matchtype=b&network=g&devicemodel=&adposition=&creativeid=683667892738&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JndRXMNurKZ5rzi6_MuY-QhXaQG6Rpofo18cfEa0Qhuj1f6fWjWGfChoCYm4QAvD_BwE",
        "site": dataAny,
        "class": "Cursos",
        "image": dataAny
    },{ 
        "title": "Data Analytics com Power-Bi",
        "tech": [iconSQL, iconR, iconPython, iconPowerBi],
        "descripion": "Curso Oferecido pela escola DIO, com 82h, concluído  SET/2024." ,
        "repo": "https://www.dio.me/",
        "site": powerBi,
        "class": "Cursos",
        "image": powerBi
    },{ 
        "title": "Jogo da Memóra",
        "tech": [iconHTML, iconCSS, iconJavaScripit, iconInkscap],
        "descripion": "Game para Testa sua memoria, tier um print e compartilhe seu melhro tempo",
        "repo": "https://github.com/MrLous/memory-game",
        "site": "https://memory-card-dio.netlify.app",
        "class": "Games",
        "image": memory
    },{ 
        "title": "Piano Digital",
        "tech": [iconHTML, iconCSS, iconJavaScripit],
        "descripion": "Simulador para praticar em qualquer lugar.                               ",
        "repo": "https://github.com/MrLous/piano-digital",
        "site": "https://mrlous.github.io/piano-digital/",
        "class": "Games",
        "image": piano
    },{ 
        "title": "Detona Ralph",
        "tech": [iconHTML, iconCSS, iconJavaScripit, iconInkscap],
        "descripion": "Game para aliviar do stres do dia a dia.                                 ",
        "repo": "https://github.com/MrLous/crud-task",
        "site": "https://sprightly-bienenstitch-4aaaf2.netlify.app",
        "class": "Games",
        "image": detona
    },{ 
        "title": "Card Game",
        "tech": [iconHTML, iconCSS, iconJavaScripit, iconInkscap],
        "descripion": "Game para testar sua mente e coração, mas é só um jokenpo mesmo.          ",
        "repo": "https://github.com/MrLous/Card-Game",
        "site": "https://mrlous.github.io/Card-Game/",
        "class": "Games",
        "image": cardJKP
    },{ 
        "title": "Back-end Node.js",
        "tech": [iconJavaScripit, iconNodeJs],
        "descripion": "Curso Oferecido pela escola ADA, com 15h, concluído Jan/2025.             ",
        "repo": backEnd,
        "site": "https://ada.tech/",
        "class": "Cursos",
        "image": backEnd
    }
    
]

export default db;