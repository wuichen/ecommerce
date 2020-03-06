import React, { useState } from 'react';

import Button from '../components/Button';
import Layout from '../components/Layout';
import TextInput from '../components/TextInput';
import { useForm, FormContextProvider } from '../context/FormContext';
import { masks } from '../services/maskService';
import {
  cardValidation,
  personalDataValidation,
  addressValidation,
} from '../services/validationService';

const CreditCardForm = () => {
  const { handleChange, handleBlur, values, errors, touched, submitForm } = useForm();
  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      <TextInput
        id="fullName"
        placeholder="Full Name"
        label="Full Name"
        value={values.fullName}
        onChange={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        error={touched['fullName'] ? errors['fullName'] : null}
      />
      <TextInput
        id="cardNumber"
        placeholder="0000 0000 0000 0000"
        label="Card Number"
        maxLength={19}
        formatText={current => masks.cardNumber(current, values.cardNumber)}
        value={values.cardNumber}
        onChange={handleChange('cardNumber')}
        onBlur={handleBlur('cardNumber')}
        error={touched['cardNumber'] ? errors['cardNumber'] : null}
      />
      <div className="w-full  max-w-lg flex flex-wrap">
        <div className="w-full sm:w-2/3 sm:pr-4">
          <TextInput
            id="expirationDate"
            placeholder="00/00/0000"
            label="Expiration Date"
            maxLength={10}
            formatText={current => masks.data(current, values.expirationDate)}
            value={values.expirationDate}
            onChange={handleChange('expirationDate')}
            onBlur={handleBlur('expirationDate')}
            error={touched['expirationDate'] ? errors['expirationDate'] : null}
          />
        </div>
        <div className="w-full sm:w-1/3">
          <TextInput
            id="cvv"
            placeholder="000"
            label="CVV"
            maxLength={3}
            value={values.cvv}
            onChange={handleChange('cvv')}
            onBlur={handleBlur('cvv')}
            error={touched['cvv'] ? errors['cvv'] : null}
          />
        </div>
      </div>
      <Button text="Next" onClick={submitForm} />
    </div>
  );
};

const PersonalDataForm = () => {
  const { handleChange, handleBlur, values, errors, touched, submitForm } = useForm();
  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      <TextInput
        id="fullName"
        placeholder="Full Name"
        label="Full Name"
        value={values.fullName}
        onChange={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        error={touched['fullName'] ? errors['fullName'] : null}
      />
      <TextInput
        id="cpf"
        placeholder="000.000.000-00"
        label="CPF"
        maxLength={14}
        formatText={current => masks.cpf(current, values.cpf)}
        value={values.cpf}
        onChange={handleChange('cpf')}
        onBlur={handleBlur('cpf')}
        error={touched['cpf'] ? errors['cpf'] : null}
      />
      <TextInput
        id="email"
        placeholder="name@provider.com"
        label="E-mail"
        value={values.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        error={touched['email'] ? errors['email'] : null}
      />
      <TextInput
        id="phone"
        placeholder="(00) 0 0000-0000"
        label="Phone Number"
        formatText={current => masks.celular(current, values.phone)}
        maxLength={17}
        value={values.phone}
        onChange={handleChange('phone')}
        onBlur={handleBlur('phone')}
        error={touched['phone'] ? errors['phone'] : null}
      />
      <TextInput
        id="birthdate"
        placeholder="00/00/0000"
        label="Birthdate"
        maxLength={10}
        formatText={current => masks.data(current, values.birthdate)}
        value={values.birthdate}
        onChange={handleChange('birthdate')}
        onBlur={handleBlur('birthdate')}
        error={touched['birthdate'] ? errors['birthdate'] : null}
      />
      <Button text="Next" onClick={submitForm} />
    </div>
  );
};

const AddressForm = () => {
  const { handleChange, handleBlur, values, errors, touched, submitForm } = useForm();
  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      <TextInput
        id="zipCode"
        placeholder="00000-000"
        label="CEP"
        maxLength={9}
        value={values.zipCode}
        formatText={current => masks.cep(current, values.zipCode)}
        onChange={handleChange('zipCode')}
        onBlur={handleBlur('zipCode')}
        error={touched['zipCode'] ? errors['zipCode'] : null}
      />
      <div className="w-full  max-w-lg flex flex-wrap">
        <div className="w-full sm:w-2/3 sm:pr-4">
          <TextInput
            id="street"
            placeholder="Street"
            label="Street"
            value={values.street}
            onChange={handleChange('street')}
            onBlur={handleBlur('street')}
            error={touched['street'] ? errors['street'] : null}
          />
        </div>
        <div className="w-full sm:w-1/3">
          <TextInput
            id="number"
            placeholder="0000"
            label="Number"
            value={values.number}
            onChange={handleChange('number')}
            onBlur={handleBlur('number')}
            error={touched['number'] ? errors['number'] : null}
          />
        </div>
      </div>
      <TextInput
        id="neighborhood"
        placeholder="Neighborhood"
        label="Neighborhood"
        value={values.neighborhood}
        onChange={handleChange('neighborhood')}
        onBlur={handleBlur('neighborhood')}
        error={touched['neighborhood'] ? errors['neighborhood'] : null}
      />

      <div className="w-full  max-w-lg flex flex-wrap">
        <div className="w-full sm:w-2/3 sm:pr-4">
          <TextInput
            id="city"
            placeholder="City"
            label="City"
            value={values.city}
            onChange={handleChange('city')}
            onBlur={handleBlur('city')}
            error={touched['city'] ? errors['city'] : null}
          />
        </div>
        <div className="w-full sm:w-1/3">
          <TextInput
            id="state"
            placeholder="State"
            label="State"
            value={values.state}
            onChange={handleChange('state')}
            onBlur={handleBlur('state')}
            error={touched['state'] ? errors['state'] : null}
          />
        </div>
      </div>
      <Button text="Next" onClick={submitForm} />
    </div>
  );
};

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [creditCardData] = useState({
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [personalData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    phone: '',
    birthdate: '',
  });

  const [addressData] = useState({
    zipCode: '',
    street: '',
    neighborhood: '',
    number: '',
    state: '',
    city: '',
  });

  const handleSubmit = data => {
    console.log(data);
    setStep(step => step + 1);
  };

  return (
    <Layout>
      {step === 0 && (
        <FormContextProvider
          initialValues={personalData}
          onSubmit={handleSubmit}
          validationSchema={personalDataValidation}
        >
          <PersonalDataForm />
        </FormContextProvider>
      )}

      {step === 1 && (
        <FormContextProvider
          initialValues={creditCardData}
          onSubmit={handleSubmit}
          validationSchema={cardValidation}
        >
          <CreditCardForm />
        </FormContextProvider>
      )}

      {step === 2 && (
        <FormContextProvider
          initialValues={addressData}
          onSubmit={handleSubmit}
          validationSchema={addressValidation}
        >
          <AddressForm />
        </FormContextProvider>
      )}
    </Layout>
  );
};

export default Checkout;