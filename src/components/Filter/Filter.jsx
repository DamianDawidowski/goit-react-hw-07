import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
 

export const Filter = () => {
 
    const dispatch = useDispatch();
  
    const onChange = ev => {
      const filter = ev.target.value.toLowerCase();
      dispatch(setFilter(filter));
    };
  

    return (
      <div className={css.filter}>
        <h2>Contacts</h2>
        <div className={css.contactsLabel}>Find contacts by name</div>
        <input
          type="text"
          name="filter"
          className={css.filterInput} 
          onChange={onChange}
        />
      </div>
    );
  }
 