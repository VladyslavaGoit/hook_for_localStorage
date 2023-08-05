import useLocalStorage from '../../CastomHooks/useLocalStorage';

const Form = () => {
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
