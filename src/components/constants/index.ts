import githubWhiteLogo from '@assets/hamburgerIcons/github-white-logo.svg';
import githubBlackLogo from '@assets/hamburgerIcons/github-black-logo.svg';
import instagramWhiteLogo from '@assets/hamburgerIcons/instagram-white-logo.png';
import instagramBlackLogo from '@assets/hamburgerIcons/instagram-black-logo.svg';
import linkedinWhiteLogo from '@assets/hamburgerIcons/linkedin-white-logo.png';
import linkedinBlackLogo from '@assets/hamburgerIcons/linkedin-black-logo.svg';
import exposureWhiteLogo from '@assets/hamburgerIcons/exposure-white-logo.png';
import exposureBlackLogo from '@assets/hamburgerIcons/exposure-black-logo.png';
import reactLogo from '@assets/technologiesIcons/react_logo.svg';
import reactNativeLogo from '@assets/technologiesIcons/react_native_logo.svg';
import mongoDbLogo from '@assets/technologiesIcons/mongodb_logo.png';
import nodejsLogo from '@assets/technologiesIcons/nodejs_logo.svg';
import pythonLogo from '@assets/technologiesIcons/python_logo.svg';
import mySqlLogo from '@assets/technologiesIcons/mysql_logo.png';
import javaScriptLogo from '@assets/technologiesIcons/javascript_logo.png';
import cssLogo from '@assets/technologiesIcons/css_logo.png';
import rubyOnRailsLogo from '@assets/technologiesIcons/ruby_on_rails_logo.png';
import cSharpLogo from '@assets/technologiesIcons/csharp_logo.png';
import scrumLogo from '@assets/technologiesIcons/scrum_logo.png';
import htmlLogo from '@assets/technologiesIcons/html_logo.svg';
import agileLogo from '@assets/technologiesIcons/agile_logo.png';
import jiraLogo from '@assets/technologiesIcons/jira_logo.svg';
import powerBiLogo from '@assets/technologiesIcons/power_bi_logo.png';
import googleDataStudioLogo from '@assets/technologiesIcons/google_data_studio_logo.png';
import sparkLogo from '@assets/technologiesIcons/spark_logo.svg';

export const portfolioContent = {
  infos: ["+55 (19) 99540-9950", "/","bruno@brunodeabisogni.website"],
  home: [['Eu sou, Gerente de Produto','Projetos Concluídos'
  ,'Pódios em Hackathons'],["I'm, Product Manager","Completed Projects",
  "Hackathons Podiums"]],
  hamburgerOptions: [["Home", "Experiências",
  "Tecnologias","Minha Carreira","Prêmios","Fale Conosco"],["Home", "Experiences",
  "Technologies","My Career","Awards","Contact Us"]],
  socialMedias: (color:string) => ([
      {
        url: "https://github.com/brunobisognidev",
        logo: color === 'white'? githubWhiteLogo : githubBlackLogo,
        alt: 'Github Logo'
      },
      {
        url: "https://www.instagram.com/brunobisogni2/",
        logo: color === 'white' ? instagramWhiteLogo : instagramBlackLogo,
        alt: 'Instagram Logo'
      },
      {
        url: "https://www.linkedin.com/in/brunobisogni/",
        logo: color === 'white' ? linkedinWhiteLogo : linkedinBlackLogo,
        alt: 'Linkedin Logo'
      },
      {
        url: "https://brunobisogni.exposure.co/",
        logo: color === 'white' ? exposureWhiteLogo : exposureBlackLogo,
        alt: 'Exposure Logo'
      }
    ]),
    experiences: {
      partOne: [['Anos de Experiência',`Especialista em Desenvolvimento
    e Gestão de Projetos Digitais.`],['Years of Experience',`Development Specialist
    and Digital Project Management.`]],
    partTwo: [[
      {title: 'Projetos Web & Mobile',description:`Desenvolvo projetos web e mobile,
      oferecendo soluções inovadoras que proporcionam experiências excepcionais
      aos usuários. Minha expertise abrange desde a concepção até a
      implementação, resultando em produtos de alta qualidade e impacto positivo
      nos negócios.`},{title: 'Gerenciamento do Produto',
      description: `Experiência em gerenciamento de produto, desde o
      levantamento de requisitos até o lançamento no mercado. Utilizo
      estratégias ágeis e colaborativas para garantir o alinhamento entre
      equipes, o sucesso do produto e a satisfação dos clientes.`},
      {title: 'Líder Técnico',description: `Experiência em liderar
       equipes multidisciplinares de desenvolvedores de tecnologia na
       implantação de novos produtos e participação em hackathons. Oriento
       equipes para o sucesso resultando em entregas bem-sucedidas e superação
       das expectativas. `}],[{title: 'Web & Mobile Projects',description: `I
       develop web and mobile projects, offering innovative solutions that
       provide exceptional experiences to users. My expertise spans from
       conception to implementation, resulting in high-quality products
       that have a positive impact on businesses.`},
    {title: 'Product Management',description: `I have experience in product
    management, from gathering requirements to market launch. I utilize agile
    and collaborative strategies to ensure alignment between teams, product
    success, and customer satisfaction.`},
    {title:'Tech Leader',description: `I have experience leading
    multidisciplinary teams of technology developers in the implementation of
    new products and participation in hackathons. I guide teams towards success,
     resulting in successful deliveries and exceeding expectations.`}]]
  },
    technologiesTimeline: [
      {
        area:"BACKEND",
        images:[
          {src: pythonLogo, alt:'python-logo'},
          {src: cSharpLogo, alt:"c-sharp-logo"},
          {src: rubyOnRailsLogo, alt:'ruby-on-rails-logo'},
          {src: mongoDbLogo, alt:'mongodb-logo'},
          {src: mySqlLogo, alt:'mysql-logo'},
          {src: nodejsLogo, alt: 'node-logo'}
        ],
      },
      {
        area:"SOFTWARE",
        images:[
          {src: scrumLogo, alt:"scrum-logo"},
          {src: agileLogo, alt:"agile-logo"},
          {src: jiraLogo, alt:"jira-logo"},
          {src: powerBiLogo, alt:"power-bi-logo"},
          {src: googleDataStudioLogo, alt:"google-data-studio-logo"},
          {src: sparkLogo, alt:"spark-logo"},
        ],
      },
      {
        area:"FRONTEND",
        images:[
          {src: cssLogo, alt:'css-logo'},
          {src: htmlLogo, alt:'html-logo'},
          {src: javaScriptLogo, alt:"javascript-logo"},
          {src: reactLogo, alt:'react-logo'},
          {src: reactNativeLogo, alt:'react-native-logo'},

        ],
      },
    ],
    careerTimeline: [
      [
        [{
          date:'Mar/2014 - Out/2016',
          name: "CTO e CMO - ABCE Service",
          description: `Liderei e conduzi com paixão o time que desbravou o
          universo da mídia digital, guiando a transição da mídia offline para
          o online, dando vida ao Social Ball e as soluções tecnológicas para
          clientes de médio e grande porte.`
        },
        {
          date:'Mai/2017 - Fev/2018',
          name: "CFO - VirtualLight",
          description: `Mergulhei nas profundezas do mundo financeiro e do
          marketing, liderando o time de criação de produtos e vendas. Fui o
          elo entre a empresa e os investidores, tracei métricas, KPIs e
          demonstrei os resultados do apoio que recebíamos.`
        }],
        [{
            date:'Jul/2019 - Set/2019',
            name: "CTO - Food Finder",
            description: `Fui o arquiteto tecnológico que deu vida ao Food Finder.
            Como CTO, construí uma ponte de conexão entre o sistema Food Finder e
            uma grande marca varejista, tecendo uma teia de integração que trouxe
            sabores irresistíveis aos consumidores.`
          },
          {
            date:'Set/2019 - Mar/2020',
            name: "CTO - Levoo Same Day Delivery",
            description: `Gerenciei o projeto de criação do sistema de afiliados
            da Levoo, além da integração do sistema Levoo com a plataforma de
            entrega de um banco brasileiro de médio porte. Também liderei a
            equipe de manutenção e desenvolvimento do sistema Levoo.`
          }],
          [{
            date:'Dez/2019 - Set/2020',
            name: "CTO e CMO - Elaroye Consultoria de criação e desenvolvimento de Ecommerce",
            description: `Com paixão e dedicação, conduzi o time de tecnologia
            que desbravava territórios inexplorados, criando o primeiro clube
            de assinatura de produtos de matriz africana do Brasil.`
            },
          {
            date:'Nov/2021 - Jan/2022',
            name: "Gerente de Marketing - MyBox Marcenaria Moderna",
            description: `Fui responsável por liderar e desenvolver estratégias de
            marketing inovadoras que impulsionam o crescimento e o
            reconhecimento da marca com segmentação do publico alvo e campanhas
            eficazes.`
          }],
        [{
          date:'Jun/2022 - Jan/2023',
          name: "Analista Sênior de Insights do Cliente - Wtime",
          description: `Desbravei os segredos ocultos dos planos de fidelidade
          e cashback das grandes empresas, com o Power BI e Google BigQuery,
          revelei insights profundos e desvendei oportunidades preciosas além
          de criar dashboards que eram de encantar os olhos.`
        }],
      ],
      [
        [{
          date:'Mar/2014 - Oct/2016',
          name: "CTO e CMO - ABCE Service",
          description: `I led and passionately guided the team that explored the
          realm of digital media, guiding the transition from offline to online,
          bringing to life the Social Ball and technological solutions for medium
          and large clients.`
        },
        {
          date:'May/2017 - Feb/2018',
          name: "CFO - VirtualLight",
          description: `I delved into the depths of the financial and marketing
          world, leading the product creation and sales team. I served as the
          link between the company and the investors, outlining metrics, KPIs,
          and demonstrating the results of the support we received.`
        }],
        [{
            date:'Jul/2019 - Sep/2019',
            name: "CTO - Food Finder",
            description: `I was the technological architect who brought Food
            Finder to life. As the CTO, I built a bridge of connection between
            the Food Finder system and a major retail brand, weaving a web of
            integration that brought irresistible flavors to consumers.`
          },
          {
            date:'Sep/2019 - Mar/2020',
            name: "CTO - Levoo Same Day Delivery",
            description: `I managed the project for the creation of Levoo's
            affiliate system, as well as the integration of the Levoo system
            with the delivery platform of a medium-sized Brazilian bank.
            I also led the maintenance and development team of the Levoo system.`
          }],
          [{
            date:'Dec/2019 - Sep/2020',
            name: "CTO e CMO - Elaroye Consultancy specializing in eCommerce creation and development",
            description: `With passion and dedication, I led the technology team
            that ventured into unexplored territories, creating the first
            subscription club for African heritage products in Brazil.`
            },
          {
            date:'Nov/2021 - Jan/2022',
            name: "Gerente de Marketing - MyBox Modern Carpentry",
            description: `I was responsible for leading and developing
            innovative marketing strategies that drive brand growth and
            recognition through targeted audience segmentation and effective
            campaigns.`
          }],
        [{
          date:'Jun/2022 - Jan/2023',
          name: "Senior Customer Insights Analyst - Wtime",
          description: `I unraveled the hidden secrets of loyalty programs and
          cashback offered by major companies, using Power BI and Google
          BigQuery. I revealed profound insights and uncovered valuable
          opportunities, while creating visually captivating dashboards
          that were a feast for the eyes.`
        }],
      ],
    ],
    awards: [
      [
        [{
        date:'Out/2019',
        name: "Terceiro lugar no Hackathon Future Law.",
        description: `Criação de um app que convertia contratos normal para o
        padrão de contratos juridicos 4.0.`
        },
        {
        date:'Jul/2019',
        name: "Primeiro Lugar no Hack in Sampa 3.",
        description: `Criação de app que por meio de reconhecimento de imagem
        informava em tempo real a lotação dos ônibus do município de são paulo. 
        `
        }],
        [{
          date:'Mai/2019',
          name: "Segundo lugar no Hackathon varejo 2.0.",
          description: `Criação de um app de realidade aumentada que mostrava o 
          melhor caminho das lojas para que o usuário pudesse melhor se locomover
          pensando em critério de vendas com adicional de um jogo.`
        },
        {
          date:'Mai/2019',
          name: "Segundo lugar Hackathon Shopping Dom Pedro.",
          description: `Criação de uma wallet app com créditos para que os 
          funcionários do shopping pudessem juntar pontos e trocar por produtos no
          fim do ano.`
        }],
        [{
        date:'Jul/2018',
        name: "Primeiro lugar no Angel Hack.",
        description: `Criação de um chatbot que ajudava pessoas de terceira
        idade de forma automatiza a ter informações relevantes em seu feed.`
        },
        {
        date:'Mai/2018',
        name: "Segundo lugar no Hack and Bike.",
        description: `Criação de um PWA  para facilitar o deslocamento na
        cidade de São Paulo e reduzindo os custo de transporte.`
        }],
        [{
          date:'Ago/2017',
          name: "Primeiro lugar Hackathon Agitech.",
          description: `Criação de um jogo chamado Groove City, um SimCity que
          auxilia o jogador no controle das finanças.`
        },
        {
          date:'Jun/2017',
          name: "Primeiro lugar no Segundo Hackathon IMA.",
          description: `Criação de um app agenda para o SUS que de forma intuitiva
          ajuda os usuários a marcarem e controlarem todo procedimento necessário
          possibilitando uma organização e diminuição na fila do SUS.`
        }],
        [{
        date:'Mai/2017',
        name: "Segundo lugar no Hackathon Assertiva.",
        description: `Criação de um app que filtra os usuários para o 
        varejista ter maior sucesso na venda de seus produtos.`
        }],
      ],
      [
        [{
        date:'Oct/2019',
        name: "Third place in Future Law Hackathon.",
        description: `Creation of an app that converts normal juridic contracts to
        juridic contracts standard 4.0.`
        },
        {
        date:'Jul/2019',
        name: "First Place Hack in Sampa 3.",
        description: `Creation of an app that through image recognition reported
        in real time the capacity of buses in the São Paulo city. 
        `
        }],
        [{
          date:'May/2019',
          name: "Second place in Hackathon varejo 2.0.",
          description: `Creation of an augmented reality app that showed the best 
          path in the store that the user could take to better move around 
          thinking in boost the store selling with a plus of game.`
        },
        {
          date:'May/2019',
          name: "Second place in Hackathon Shopping Dom Pedro.",
          description: `Creation of an app wallet that provides to employees
          some credits, that credits can be stored to trade for in the end of year 
          some product in the shopping.`
        }],
        [{
          date:'Jul/2018',
          name: "First place in Angel Hack.",
          description: `Creation of a chatbot that automatically helped elderly
          people to have relevant information in their feed.`
        },
        {
          date:'May/2018',
          name: "Second place in Hack and Bike.",
          description: `Creation of an PWA  that facilitates the locomotion in
          the São Paulo city and reduces transportation costs.`
        }],
        [{
          date:'Aug/2017',
          name: "First place in Agitech Hackathon.",
          description: `Creation of a game called Groove City, that likes a 
          SimCity, but the difference is that game helps the player to control
          his finances.`
        },
        {
          date:'Jun/2017',
          name: "First place in Second Hackathon IMA.",
          description: `Creation of a schedule app for the SUS that intuitively
          helps the user to schedule and control all the necessary processes
          enabling the organization and reduction of the SUS queue.`
        },
      ],
      [{
        date:'May/2017',
        name: "Second place in Hackathon Assertiva.",
        description: `Creation of an app that filter the users for the
        retailer to have more success sales.`
      }],
    ]
  ],
}
