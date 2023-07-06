import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'; 
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';
 
import {selectContacts } from 'redux/selectors';

export const ContactForm = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();


 const handleFormSubmit = event => {
    event.preventDefault();
    let nameAlreadyOnList = false;
    const form = event.target;
 
    const number = event.target.number.value; 
    const name = event.target.name.value;
    const toLowerCase = name.toLowerCase();
    const newContact = ({ 
     id: nanoid(), 
      name:name, 
      number: number });

      contacts.forEach(({ name }) => {
        if (name.toLowerCase() === toLowerCase) {
          alert(`${name} is currently in contacts`);
          nameAlreadyOnList = true;
          form.reset();
        }
      });

      if (nameAlreadyOnList) return;
 
      dispatch(addNewContact(newContact));

      form.reset();
  };
 
    return (
      <form className={css.form} onSubmit={handleFormSubmit}>
        <h1>Phonebook</h1>
        <div className={css.container}>
          <label className={css.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            className={css.formImput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.formLabel}>Number</label>
          <input
            type="tel"
            name="number"
            className={css.formImput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  } 
 