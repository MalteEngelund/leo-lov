import { Card } from "./components/Card/Card"
import { CardBody } from "./components/CardBody/CardBody"
import { CardFooter } from "./components/CardFooter/CardFooter"
import { CardHeader } from "./components/CardHeader/CardHeader"
import { FigureSection } from "./components/FigureSection/FigureSection"
import { Footer } from "./components/Footer/Footer"
import { FooterMain } from "./components/FooterMain/FooterMain"
import { Header } from "./components/Header/Header"
import { MainHeader } from "./components/MainHeader/MainHeader"
import { MaxWidth } from "./components/MaxWidth/MaxWidth"
import { Navbar } from "./components/Navbar/Navbar"
import { Wrapper } from "./components/Wrapper/Wrapper"
import { advoArray, teamArray } from "./data/data"



function App() {
  return(
    <>
      <Wrapper>
        <Navbar
          items={[
            { label: 'Hjem', href: '/' },
            { label: 'Advokaterne', href: '#Advokaterne' },
            { label: 'Om LeoLov', href: '#Om' },
            { label: 'Kontakt', href: '#Kontakt'}
          ]}
        />
      </Wrapper>


    <Wrapper id="headerTest">
      <MainHeader 
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="office"
        titleH1="Leo-Lov"
        titleH3="Lov og ret kan være et plaster! Hvis du ellers har knaster!"
      />


      <Wrapper id="retCards">    
      {advoArray.map((item) => {
    return (
      <Card key={item.id} >
        <CardBody>
          <h3>{item.title}</h3>
        </CardBody>
        <CardFooter>
          <p style={{textAlign: "left"}}>{item.text}</p>
        </CardFooter>
      </Card>
        )
      })}
      </Wrapper>
      </Wrapper>
      <MaxWidth>

      <FigureSection
        src="https://images.unsplash.com/photo-1616645004064-aebe96923cbb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A mountain"
        figTitle="INTET PROBLEM"
        text="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen."
        text2="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
      />
        
      <FigureSection
        src="https://images.unsplash.com/photo-1500731250117-4b0cbb8b276a?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A mountain"
        figTitle="EVIG GARANTI"
        text="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen."
        text2="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
      />


      <Wrapper id="Advokaterne">
      {teamArray.map((item) => {
        return (
          
          <Card key={item.id}>
            <CardHeader src={item.src} alt={'image_road'}/>
            <CardBody>
            <h3>{item.name}</h3>
            </CardBody>
            <CardFooter>
            <p>{item.quote}</p>
            </CardFooter>
          </Card>
          )
        })}
      </Wrapper>

      <FigureSection
        src="seymap.png"
        alt="A mountain"
        figTitle="HER BOR VI"
        text="Vi har valgt at bosætte os i solen! 
        Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. 
        “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er."
      />

        </MaxWidth>

      <FooterMain
  sections={[
    {
      title: 'Adresse',
      items: [
        { label: 'Find os her:' },
        { label: 'Maldiver rd. 22,' },
        { label: 'Seychelle Islands' },
      ],
    },
    {
      title: 'Kontakt',
      items: [
        { label: 'Kontakt os her:' },
        { label: 'email@email.dk', href: 'mailto:email@email.dk' },
        { label: 'Tlf: 0192 3023' },
      ],
    },
    {
      title: 'Politik',
      items: [
        { label: 'Vores politikker:' },
        { label: 'Privatlivspolitik', href: '#' },
        { label: 'Cookiepolitik', href: '#' },
        { label: 'Generelle betingelser', href: '#' },
      ],
    },
    {
      title: 'Sociale medier',
      items: [
        { label: 'Facebook', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
  ]}
/>

    </>
  )

}
export default App