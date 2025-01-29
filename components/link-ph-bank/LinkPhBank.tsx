import React, { useState } from 'react';
import LinkPhBankScreen from './LinkPhBankScreen';
import SelectPhBankScreen from './SelectPhBankScreen';
import EnterPhBankDetailsScreen from './EnterPhBankDetailsScreen';
import CompletePhProfileScreen from './CompletePhProfileScreen';

const LinkFiBank = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <LinkPhBankScreen setStep={setStep} />;
    case 2:
      return <CompletePhProfileScreen setStep={setStep} />;
    case 3:
      return <SelectPhBankScreen setStep={setStep} />;
    case 4:
      return <EnterPhBankDetailsScreen setStep={setStep} />;
    default:
      return null;
  }
};

export default LinkFiBank;
