import {
  Footer, Hero, Services,
  Work, Style, Design
} from "./sections";

import Nav from './components/Nav'

const App = () => (


  <main className="relative scroll-smooth">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Design />
    </section>
    <section className="padding">
      <Style />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <Work />
    </section>
    <section className="bg-black padding-x padding-t pb-8 ">
      <Footer />
    </section>

  </main>
);

export default App;