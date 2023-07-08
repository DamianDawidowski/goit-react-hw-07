import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'; 
import {selectContacts, selectFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
  
export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
 
  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactsSingle} key={id}>
            <p className={css.contactsInfo}>{name}</p>
            <p className={css.contactsInfo}> {number}</p>
            <button
              onClick={() => {
                removeContact(id);
              }}
              className={css.contactsBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
 