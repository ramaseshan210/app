import React,{useState} from 'react'
import './Forms.css'
import Switch from '@material-ui/core/Switch';




function Use() {
 
  
const [state, setstate] = useState({
    colour:"",
    label:"",
    border: 0,
    check:false,
    load:false ,

}
   );   
 const [condition,setCond] = useState(0);

 


  const handle =(event)=>{
    console.log(event.target.value)
  setstate({
    ...state,
     [event.target.name]:event.target.value,
  });
};  



 const getValue = (event) => {
            
         
    if(state.check===false)
    { 
      setstate({
          ...state,
          [event.target.name]:true,
        
      });
    }
    else
        {
          
         setstate({
             ...state,
            [event.target.name]:false,
            
         });  
         
         }     
            
        
        };


      const loadValue= (event)=>{
       
            if(state.check===false)
            {
               if(state.load===false)
               {
                   setstate({
                       ...state,
                       [event.target.name]:true,
                     
    
                   });
                  setCond(1);
                   console.log(condition);
                }
                else
                   {
                       setstate({
                           ...state,
                           [event.target.name]:false,
                       });
                       setCond(0);
                       console.log(condition);
                   }
    
                }
                
                else if(state.check===true)
                {
                    if(state.load===true)
                    {
                        setstate({
                            ...state,
                            [event.target.name]:false,
                        });
                        setCond(0);
                    }
                    else if(state.load===false)
                    {
                        setstate({
                            ...state,
                            [event.target.name]:true
                        });
                      setCond(1)
                    }
                }
               };


     

    return (
        <div>
            <div className="body">

                   
            <div className="container">

                <div className="lbn">
                <label>input</label>
                <input type="text" name="colour"value={state.colour} onChange={handle}></input></div>

                <div className="lbn">
                <label>label</label>
                <input type="text"  name="label"value={state.label} onChange={handle}></input></div>

                <div className="lbn">
                <label>border radius</label>
                <input type="number"  name="border"value={state.border} onChange={handle}></input></div>
                
        
                  
                <div className="lbn">
                <Switch 
                color="primary"
                size ="small"
                checked={state.check}
                name="check"
                onChange={getValue}/>
                </div>
                <div className="lbn">
                <Switch     
                color="primary"
                size ="small"
                checked={state.load}
                name="load"  
                onChange={loadValue}/>
                </div>
            </div>
            <div className="side">
            <button disabled={ condition===1 ? state.load : state.check} style={{ borderRadius: `${state.border}px`, backgroundColor: state.colour}}>{state.label}</button>
            </div>
       
        </div>
          
        </div>
        
    )
}

export default Use
