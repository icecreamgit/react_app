import React, {FC, useState, useEffect, useContext} from 'react';
import './MainCard.css'

interface IMainCard {
    width?: string,
    height?: string,
    children?: React.ReactNode,
    handleConsoleLogNum: (id: number) => void
};


const MainCard: FC<IMainCard> = ({width, height, children, handleConsoleLogNum}) => {
    const [value, setValue] = React.useState(1);
    return (
        <div>
            <div className='MainCard-div'
                onClick={() => {
                        handleConsoleLogNum(1);
                        setValue(value + 1);
                    }
                }>
                <span>
                    Добро пожаловать на мой маленький, ещё юный сайт!
                </span>
            </div>
        </div>
        
    );
}



export default MainCard;