import Button from "./button/Button"

const Header = ({title, showAddTask, toggleShow }) => {
    
    // const handleClickUseforButtonComp = () => {
    //     console.log('objbasadasdasect');
    //   }

  return (
    <div className="header">
        <h1>{title}</h1>
        
        {/* <Button handleClickUseforButtonComp={handleClickUseforButtonComp}  myText='Show Add Task Bar' myColor='#45858C'/> */}

        <Button
        myColor={showAddTask ? "#F900BF" : "#4700D8"}
        myText={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />

    </div>
  )
}

export default Header