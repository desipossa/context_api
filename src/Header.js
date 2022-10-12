import React, { useContext } from 'react';
import { DarkTheme } from './context';

const Header = () => {
    const { dark, setDark } = useContext(DarkTheme)
    return (
        <>
            <div className='darkBtn'>
                <label htmlFor='btn'>DARK MODE</label>
                <input type="checkbox" id="btn" onChange={() => setDark(!dark)} />
            </div>

            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui totam deserunt recusandae, laborum iure fugit cupiditate dolorum consequatur. Suscipit omnis harum officia, quis tenetur blanditiis delectus! Magnam nostrum dolorem ratione quidem quibusdam nulla numquam incidunt architecto excepturi! Quibusdam, qui accusamus.</div>
        </>

    )
}

export default Header