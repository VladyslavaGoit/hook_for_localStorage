import { useEffect } from 'react';
import { useState } from 'react';

const Form = () => {
  const useLocalStorage = key => {
    const [state, setState] = useState(
      () => JSON.parse(window.localStorage.getItem(key)) ?? ''
    );
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  };

  const [query, setQuery] = useLocalStorage('query');
  const [name, setName] = useLocalStorage('name');
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'query':
        setQuery(value);
        break;
      default:
        return;
    }
  };

  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        name="query"
        placeholder="Search images and photos"
        value={query}
      />
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
    </form>
  );
};

export default Form;
