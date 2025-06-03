import React, { useState } from 'react';
import './About.css'
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [login , setlogin] = useState(true);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/Signup'); 
  };
  

  return (
      <div className="content">
       <h1>Welcome To E-book</h1>
       <p>Discover a world of knowledge and imagination with Book Mart, your go-to platform for buying books online. From bestselling novels and inspiring biographies to academic textbooks and children’s stories, we have something for every reader. Enjoy a seamless shopping experience with easy navigation, secure payments, and fast delivery. Whether you're a student, a book lover, or just exploring, Book Mart brings the joy of reading right to your fingertips.</p>
       <div className="images">
        <img src={book1} alt="Action" />
        <img src={book2} alt="comedy" />
        <img src={book3} alt="thriller" />
        <img src={book4} alt="suspense" />
       </div>
        <div className="register">
          <button
           onClick={()=>handleRegisterClick()}>
            Register
          </button>
        </div>
      </div> 
  );
};

export default Home;