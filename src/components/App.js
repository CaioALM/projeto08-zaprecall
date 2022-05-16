import React from 'react';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';

export default function App() {
    const [hidden,setHidden] = React.useState(false); 
    return (
        <>
            <StartScreen hidden={hidden} setHidden={setHidden} />
            <PlayScreen hidden={hidden} />
        </>
    )
}