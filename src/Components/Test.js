import { React, useRef, useState } from 'react';
import Nav from './Nav';

const Test = () => {
    // Parti JS
    // déclarative
    let compteur = 10;

    //code fonctionel
    const [decount, setDecount] = useState(compteur);
    const inputEl = useRef();
    const [inputValue, setInputValue] = useState('');

    const decompte = ()=>{
        if(decount <= 0){
            setDecount(compteur);
        }else{
            setDecount(decount - 1);
        }
    }
    const showValue = (e)=>{
        
        e.preventDefault();
        setInputValue(inputEl.current.value);
    
    }

    return (
        // Html (JSX)
        <div>
            <header>
                <h1>Page test</h1>
                <Nav/>
            </header>
            <main>
                <section>
                <button onClick={decompte}>Decompte</button>
                <p >{decount}</p>
                </section>

                <section>
                    <h2>show value</h2>
                    <form action="" onSubmit={showValue}>
                        <label htmlFor="text">Ecrivez votre texte</label>
                        <input type="text" ref={inputEl}  name="text" id="text" />
                        <input type="submit" name="submit" id="submit" />
                    </form>
                    <span>{inputValue}</span>
                </section>
            </main>
        </div>
    );
};

export default Test;