import React, { useState } from 'react';
import LinkEWalletScreen from './LinkEWalletScreen';
import SelectEWalletScreen from './SelectEWalletScreen';
import EnterEWalletDetailsScreen from './EnterEWalletDetailsScreen';

const LinkEWallet = () => {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <LinkEWalletScreen setStep={setStep} />;
    case 2:
      return <SelectEWalletScreen setStep={setStep} />;
    case 3:
      return <EnterEWalletDetailsScreen setStep={setStep} />;
    case 4:
      return <EnterPhBankDetailsScreen setStep={setStep} />;
    default:
      return null;
  }
};

export default LinkEWallet;
