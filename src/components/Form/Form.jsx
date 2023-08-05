import useLocalStorage from '../../CastomHooks/useLocalStorage';
import css from './Form.module.css';

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
    <form className={css.searchForm}>
      <label className={css['searchForm-label']}>
        Images
        <input
          className={css['searchForm-input']}
          onChange={handleChange}
          type="text"
          name="query"
          placeholder="Search images and photos"
          value={query}
        />
      </label>
      <label className={css['searchForm-label']}>
        Name
        <input
          className={css['searchForm-input']}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Input your name"
          value={name}
        />
      </label>
    </form>
  );
};

export default Form;
