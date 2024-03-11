import React, {ChangeEvent, MouseEvent, FocusEvent} from 'react';

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }
    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Name changed");
    }
    const focusLostHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
        console.log("focus were blured")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed " + event.currentTarget.value)
    }

    return (
        <div>
            <textarea onChange={onNameChanged}
                      onBlur={focusLostHandler}>Kirill</textarea>
            <input onChange={onAgeChanged}/>
            <button name={"search"} onClick={search}>search</button>
        </div>
    );
}