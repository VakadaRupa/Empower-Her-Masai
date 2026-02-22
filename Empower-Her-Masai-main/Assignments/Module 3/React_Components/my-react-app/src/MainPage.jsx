import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function MainPage() {
  const pageContainerStyle = {
    fontFamily: 'Arial, sans-serif'
  };
  
  return (
    <div style={pageContainerStyle}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainPage;