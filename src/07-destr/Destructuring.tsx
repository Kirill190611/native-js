import React, {useState} from 'react';

type StreetProps = {
    title: string
}

type AddressProps = {
    street: StreetProps
}

type LessonsProps = {
    title: string
}

export type ManProps = {
    name: string
    age: number
    lessons: Array<LessonsProps>
    address: AddressProps
}

type PropsType = {
    title: string
    man: ManProps
    food: Array<string>
    car: { model: string }
}

function useKirillState(m: string) {
    return [m, function (){}]
}

function useKirillState2(m: string) {
    return {
        message: m,
        setMessage: function(){},
    }
}


export const Destructuring: React.FC<PropsType> = ({title, man: {name}, ...props}) => {
    // const {title, man: {name}, ...rest} = props;

    const [message, setMessage] = useState("hello")

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{props.car.model}</div>
            <div>{props.food}</div>
        </div>
    );
};
