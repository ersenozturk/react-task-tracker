const Button = ({handleClickUseforButtonComp, myColor,  myText}) => {




  return (
    <div>
      <button  style={{backgroundColor: myColor }} className="btn" onClick={handleClickUseforButtonComp}> 
        {myText}
      </button>
    </div>
  );
};

export default Button;
