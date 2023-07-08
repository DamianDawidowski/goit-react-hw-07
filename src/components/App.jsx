 
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';  
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

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
 
