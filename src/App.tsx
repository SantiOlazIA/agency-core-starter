import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
