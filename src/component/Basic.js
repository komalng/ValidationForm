import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform';
import Joi from "@hapi/joi";

const schema = Joi.object({
  username: Joi.string().required()
});

const Ap = () => {
  const { register, handleSubmit } = useForm({
    resolver: joiResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
    
      <input type="submit" />
    </form>
  );
};


export default Ap;