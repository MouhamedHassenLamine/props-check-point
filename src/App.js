import './App.css';
import {Myprofile,HandleName} from './profile/Myprofile'
import man from './profile/img/man.jpg'
function App() {
  return (
    <>
    <HandleName name='Mouhamed Hassen'></HandleName>
    <Myprofile fullName="Mouhamed Hassen Lamine" bio="Mouhamed Hassen is a software engineer with over 10 years of experience in developing cutting-edge applications for web and mobile platforms. He holds a Bachelor's degree in Computer Science from XYZ University and has a deep expertise in Java, Python, and JavaScript." profession="Web developer" Email="hassenlamine3@gmail.com" Phone_number="97213689"> <img src={man} alt="Lamine" /></Myprofile>
    </>

  );
}

export default App;
