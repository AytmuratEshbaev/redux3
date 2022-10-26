import { FormEvent, useState } from 'react'
import './Tag.css'
import { useDispatch } from 'react-redux';
interface ITag {
    title: string
}

const Tag = (props: ITag) => {
    let [readonly, setReadonly] = useState(true)
    let [tag, setTag] = useState(props.title ? props.title : null);
    let [oldTag, setOldTag] = useState(tag);
    let dispatch = useDispatch();
    const active = () => {
        setReadonly(false);
        setOldTag(tag);
    }
    const notActive = () => {
        setReadonly(true);
        dispatch({ type: 'RENAME', payload: { oldTag, tag } });
        
    }
    const change = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTag((e.target as HTMLInputElement).value);
    }

    const del = () => {
        dispatch({ type: 'DELETE', payload: tag });
        setTag(null);
    }

    return (
        tag
            ? <>
                <input className="tag__title" type='text' value={tag} readOnly={readonly} onClick={active} onInput={change} onBlur={notActive} id={tag}/>
                <div className="tag__edit">
                    <label onClick={active} htmlFor={tag}>Переименовать</label>
                    <button onClick={del}>Удалить</button>
                </div>
            </>
            : null
    )
}
export default Tag;