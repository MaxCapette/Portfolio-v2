import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../ui/button';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("xqazaqlp");

  return (
    <form className='form flex flex-col' onSubmit={handleSubmit}>
      <label htmlFor="email" className="">Email</label>
      <input id="email" type="email" name="email" className='inputColor' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="">Message</label>
      <textarea id="message" name="message" className='inputColor'/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button type="submit" disabled={state.submitting}>
        Envoyer
      </Button>

      {state.succeeded && <p className="text-input">Merci!</p>}
    </form>
  );
};

export default FormContact;