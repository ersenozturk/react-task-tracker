import Button from "./button/Button"

const Header = ({title}) => {
    
    const handleClickUseforButtonComp = () => {
        console.log('objbasadasdasect');
      }

  return (
    <div className="header">
        <h1>{title}</h1>
        <Button handleClickUseforButtonComp={handleClickUseforButtonComp}  myText='Show Add Task Bar' myColor='#45858C'/>

    </div>
  )
}

export default Header