import "../App.css";
import { Link } from 'react-router-dom';
import { MainButton, NormButton } from '../buttons';


const HomePageView = () => {
  return (
    <div>
      <div className='header'>
        Final Project 
      </div>
      <br/><br/><br/>
      <div className='links_container'>
        <MainButton to={'/employees'} > All Employees </MainButton>
        <MainButton to={'/tasks'} > All Tasks </MainButton>
      </div>
    </div>
  );    
}




export default HomePageView;