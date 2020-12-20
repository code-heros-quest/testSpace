import React, { useState, useEffect } from 'react';



function Loot(props) {
    const [character, setCharacter] = useState({ stats: {health: 0, attack: 0}})
    const [tempNums, setTempNums] = useState([15, 10]);


    useEffect(() => {
        setCharacter(props.character)
    }, [props])

    const styleLoot = {
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const styleImg = {
        height: '80px',
        width: 'auto'
    }

    const style={
        display: 'inline-block',
        color: 'white',
        paddingRight: '15px'
    }

    return (
        <div id='loot-container' style={{ display: 'inline-block', float: 'right' }}>
            <h1>{character.name}</h1>
            <div >
            <h5 style={style}>Health:</h5>
            <meter min="0" low="10" optimum="25" high="18" max={character.maxHealth} value={character.stats.health} />
            </div>
            <div >
            <h5 style={style}>Attack:</h5>
            <meter min="0" low="9" optimum="23" high="17" max="27" value={character.stats.attack} />
            </div>
            {/* <h2>Health: {character.stats.health}</h2>
            <h2>Attack: {character.stats.attack}</h2> */}
            <section style={{ backgroundImage: 'url(./images/Loot.png)', backgroundSize: '100% 100%', padding: '2px 20px 2px 20px', height: '500px', width: '250px', margin: 'auto', backgroundRepeat: 'no-repeat', borderRadius: '7px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr 1fr', border: '1px solid black', backgroundColor: 'gray' }}>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/axe.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/book.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/gold.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/potion.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/sword.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/dagger.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/club.png'></img></div>
                <div style={styleLoot}><img style={styleImg} src='./images/icons/bow.png'></img></div>
            </section>
        </div>
    )
}

export default Loot;


