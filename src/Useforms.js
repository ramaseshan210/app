import React from 'react'

const Useforms =()=> {
     const [namme, setName] = React.useState(false);

     const resetName = () =>{
        

         if(namme===true)
         {
             setName(false);
            console.log("running");
    

         }
         else if(namme===false){
             setName(true);
             console.log("jumping");
             
                  
         }
     };

    return (
        <div>
            <h1>welcome {namme}</h1>
            <button onClick={resetName}>Reset</button>
        </div>
    )
}

export default Useforms
