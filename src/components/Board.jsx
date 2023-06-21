import React from 'react'
import { useState } from 'react';

export const Board = ({emojis, setEmojis, gameState, setGameState}) => {
  const [prev, setPrev] = useState(null);

  console.log(emojis);

  const containerStyle={
    gridTemplateColumns:`repeat(${gameState.size}, auto)`
  }

  const showHide=(domObj)=>{
    console.log(domObj.children[0],domObj.children[1]);
    [domObj.children[0],domObj.children[1]].forEach(dObj=>{
        dObj.classList.toggle("hidden");
        dObj.classList.toggle("flex");

    })
}

  const handleClick=(event, emojiObj)=>{
    const id=emojiObj.id;
    if(gameState.running) return
    setGameState({...gameState,score:gameState.score+1});


    console.log(emojiObj);
    console.log(id, event.target.parentNode);

    const parent= event.target.parentNode;

    showHide(event.target.parentNode);
    if(prev) {
      console.log('második katt', emojiObj.emoji,prev.children[0].innerHTML)
      if(emojiObj.emoji==prev.children[0].innerHTML){
        setEmojis(emojis.map(obj=>obj.id==id ? {...obj, disabled:true} : obj))
        setGameState({...gameState,remaining:gameState.remaining-1});

        setPrev(null);
      }
      else{
        setGameState({...gameState,running:true});
      setTimeout(()=>{
        setGameState({...gameState,running:false})
        showHide(parent);
        showHide(prev);
        setEmojis(emojis.map(obj=>obj.id==id || obj.id==prev.id ? {...obj, disabled:false} : obj))
setPrev(null)
      },500)
      }
    } else{
      setPrev(parent)
      setEmojis(emojis.map(obj=>obj.id==id ? {...obj, disabled:true} : obj))


    }

  }


  return (
    <div className='grid border justify-center gap-1'style={containerStyle}>
      {emojis.map((obj,i)=>
      <div key={obj.id} id={obj.id} onClick={event=> obj.disabled ? null : handleClick(event, obj)}>
        <div className={gameState.size <=4 ? "s4 hidden" : "s8 hidden" }>{obj.emoji}</div>
       <div className={gameState.size <=4 ? "s4 flex" : "s8 flex" }>?</div>
     </div>
      )}
      </div>)}
  

      