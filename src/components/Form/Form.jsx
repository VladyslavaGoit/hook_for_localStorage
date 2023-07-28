import { useEffect } from 'react';
import { useState } from 'react';

const Form = () => {
  const [query, setQuery] = useState(
    JSON.parse(window.localStorage.getItem('query')) ?? ''
  );
  const handleChange = event => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem('query', JSON.stringify(query));
  }, [query]);
  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        name="login"
        placeholder="Search images and photos"
        value={query}
      />
    </form>
  );
};

export default Form;
