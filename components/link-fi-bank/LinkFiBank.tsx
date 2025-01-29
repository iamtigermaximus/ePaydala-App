import React, { useState } from 'react';
import CompleteProfileScreen from './CompleteFiProfileScreen';
import SelectFiBankScreen from './SelectFiBankScreen';
import LinkFiBankScreen from './LinkFiBankScreen';
import EnterFiBankDetailsScreen from './EnterFiBankDetailsScreen';

const LinkFiBank = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <LinkFiBankScreen setStep={setStep} />;
    case 2:
      return <CompleteProfileScreen setStep={setStep} />;
    case 3:
      return <SelectFiBankScreen setStep={setStep} />;
    case 4:
      return <EnterFiBankDetailsScreen setStep={setStep} />;
    default:
      return null;
  }
};

export default LinkFiBank;
