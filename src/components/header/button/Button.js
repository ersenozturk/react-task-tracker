const Button = ({toggleShow, myColor,  myText}) => {

  return (
    <div>
      <button  style={{backgroundColor: myColor }} className="btn" onClick={toggleShow}> 
        {myText}
      </button>
    </div>
  );
};

export default Button;
