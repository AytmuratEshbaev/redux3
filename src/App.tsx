import './App.css';
import { useDispatch } from 'react-redux';
import Tag from './Components/Tag';
import { FormEvent, useState } from 'react';
import store from '.';



const App = () => {
  const tags = store.getState();
  let [newTag, setNewTag] = useState('');
  const dispatch = useDispatch();
  const change = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewTag((e.target as HTMLInputElement).value);
  }

  const add = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(newTag !== '') dispatch({type: 'ADD', payload: newTag});
    setNewTag('');
  }
  
  return (
    <div className="App">
      <div className="App__info">
        <h2>Добавить</h2>
        <form className="tag__control">
          <input type="text" placeholder='Добавить' className='tag__input' value={newTag} onChange={change}/>
          <input type="submit" value="Добавить" onClick={add} />
        </form>
      </div>
      <div className="App__content">
        {
          tags.length !== 0
            ? tags.map((tag, index) =>
              <li className='tag' key={index}>
                <Tag title={tag} />
              </li>
            )
            : <div className='empty'>Пусто</div>
        }
      </div>
    </div>
  );
}

export default App;
