'use client';
import { SnackbarProvider } from 'notistack';
import ContactForm from './elements/ContactForm';

const Contact = () => {
  return (
    <section className="c-space space-bettwen-projects space-bettwen-section grid place-items-center" id="contact">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ContactForm />
      </SnackbarProvider>
    </section>
  );
};

export default Contact;
