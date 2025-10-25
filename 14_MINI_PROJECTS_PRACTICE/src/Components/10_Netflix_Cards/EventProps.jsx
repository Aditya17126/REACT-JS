import React from 'react'

function EventProps() {

   const handleWelcomeUser = function(user){
     alert(`Hey ${user} Billionaire`);
   }
  
    const handleHover = ()=>{
      alert(`Thanks for hovering me !! `)
    }
  return (
    <>
      <WelcomeUser onButtonClick={() => handleWelcomeUser('Aditya')} onMouseEnter={handleHover}/>
    </>
  )
}

export default EventProps

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;

  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
     onButtonClick();
  };
  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};