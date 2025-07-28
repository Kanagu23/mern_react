 import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const Card = ({
  title = 'Default Title',
  description = 'Default description.',
  image,
}) => {
  

  const {theme,setTheme}=useContext(ThemeContext)
  
 const darkMode=theme=="dark"
  const cardStyle = {
    maxWidth: '300px',
    backgroundColor: darkMode ? '#2c2c2c' : '#fff',
    color: darkMode ? '#f0f0f0' : '#000',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    border: darkMode ? '1px solid #444' : '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: darkMode ? '#ccc' : '#555',
  };

  return (
    <>
        <button onClick={()=>{
      setTheme((prev)=>prev=="dark"?"light":"dark")
    }}>Change Mode</button>
     <div style={cardStyle}>
      {image && <img src={image} alt={title} style={imageStyle} />}
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
    </>
   
  );
};

export default Card;
