import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
