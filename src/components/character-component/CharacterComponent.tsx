import {ICharacters} from "../../moduls/ICharacters.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacters,
    children: ReactNode,
}

export const CharacterComponent = ({item}: CharacterComponentProps) => {
    return (
        <div className='m-6'>
            <h3 className='text-xl'>{item.name} {item.surname}</h3>
            <img className='w-10' src={item.photo} alt={item.name}/>
            <p>{item.info}</p>
        </div>
    );
};