import { ImageWithFallback } from "./custom/ImageWithFallback";
import logo1 from "../../assets/icons/environment_logo.png";
import logo2 from "../../assets/icons/homemade_logo.png";
import logo3 from "../../assets/icons/timeless_logo.png";

import infoImage1 from "../../assets/bgimage_alt.jpeg";
import infoImage2 from "../../assets/bgimgnew.webp";

export function Info() {
  return (
    <section id='info' className='py-16 sm:py-24 md:py-32 bg-neutral-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Heading */}
        <div className='text-center mb-16 md:mb-24'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4'>Historien om mit keramik</h2>
          <p className='text-neutral-600 max-w-2xl mx-auto'>At skabe skønhed fra jord og ild</p>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24'>
          <div className='order-2 md:order-1'>
            <h3 className='mb-4 text-neutral-900'>Processen</h3>
            <p className='text-neutral-700 mb-4'>
              Hvert stykke begynder som råt ler, omhyggeligt formet på drejeskiven eller bygget i hånden med
              traditionelle teknikker, der er gået i arv gennem generationer. Keramikkens kunst kræver tålmodighed,
              dygtighed og en indgående forståelse af materialet.
            </p>
            <p className='text-neutral-700 mb-4'>
              Efter den indledende formgivning tørrer hvert stykke langsomt for at undgå revner og derefter brændes det
              i skrøbe (bisque) for at hærde leret. Glasurer påføres omhyggeligt i hånden, og hver enkelt glasur blandes
              i mit værksted for at opnå unikke farver og teksturer.
            </p>
            <p className='text-neutral-700'>
              Den afsluttende brænding forvandler glasuren og leret til et permanent bånd og skaber funktionel kunst,
              der kan holde i generationer. Hvert stykke bærer de subtile spor af sin håndlavede oprindelse, hvilket gør
              hvert enkelt stykke helt unikt.
            </p>
          </div>
          <div className='order-1 md:order-2'>
            <div className='aspect-[4/5] bg-neutral-200 overflow-hidden'>
              <ImageWithFallback src={infoImage1} alt='Ceramic making process' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        {/* Materials Section */}
        <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <div>
            <div className='aspect-[4/5] bg-neutral-200 overflow-hidden'>
              <ImageWithFallback src={infoImage2} alt='Natural materials' className='w-full h-full object-cover' />
            </div>
          </div>
          <div>
            <h3 className='mb-4 text-neutral-900'>Naturlige Materialer</h3>
            <p className='text-neutral-700 mb-4'>
              Vi arbejder udelukkende med naturlige, bæredygtigt fremskaffede materialer. Vores lerblandinger er
              omhyggeligt udvalgt for deres unikke egenskaber og bearbejdelighed, hver især egnet til forskellige former
              og funktioner.
            </p>
            <p className='text-neutral-700 mb-4'>
              Fra glat porcelæn til rustikt stentøj tilfører hver lertype sit eget præg på det færdige stykke. Vores
              glasurer er formuleret med naturlige mineraler og oxider, hvilket skaber farver, der spænder fra afdæmpede
              jordtoner til dybe, rige nuancer.
            </p>
            <p className='text-neutral-700'>
              Vi tror på at skabe værker, der ikke kun er smukke, men også ansvarlige, og som respekterer både
              håndværkstraditionen og vores miljø.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className='mt-16 md:mt-24 grid sm:grid-cols-3 gap-8 md:gap-12'>
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center'>
              <span className='text-2xl'>
                <ImageWithFallback src={logo1} alt='Bæredygtigt' />
              </span>
            </div>
            <h4 className='mb-2 text-neutral-900'>Bæredygtigt</h4>
            <p className='text-neutral-600'>Miljøbevidste materialer og metoder</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center'>
              <span className='text-2xl'>
                <ImageWithFallback src={logo2} alt='Håndlavet' />
              </span>
            </div>
            <h4 className='mb-2 text-neutral-900'>Håndlavet</h4>
            <p className='text-neutral-600'>Hvert stykke er individuelt lavet med omhu og opmærksomhed</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center'>
              <span className='text-2xl'>
                <ImageWithFallback src={logo3} alt='Tidløst' />
              </span>
            </div>
            <h4 className='mb-2 text-neutral-900'>Tidløst</h4>
            <p className='text-neutral-600'>Klassiske designs, der holder længere end trends</p>
          </div>
        </div>
      </div>
    </section>
  );
}
