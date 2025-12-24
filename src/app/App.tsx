import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';
import { Info } from './components/info';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Info />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
