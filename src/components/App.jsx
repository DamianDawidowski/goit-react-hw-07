 
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter'; 
import { fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';

  export const App = () => {
     
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);


    return (
      <div> 
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    );
  }
 
