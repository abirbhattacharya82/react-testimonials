import Testimonials from './Components/Testimonials';
import './App.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
function App() {
  return (
    <div className="App">
      <Testimonials items={[[img1,"Name One","Designation One","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deleniti nihil rem, vero totam doloremque."],[img2,"Name Two","Designation Two","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deleniti nihil rem, vero totam doloremque."],[img3,"Name Three","Designation One","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deleniti nihil rem, vero totam doloremque."],[img1,"Name One","Designation One","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deleniti nihil rem, vero totam doloremque."],[img1,"Name One","Designation One","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deleniti nihil rem, vero totam doloremque."]]} />
      
    </div>
  );
}

export default App;
