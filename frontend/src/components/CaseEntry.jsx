import React, { useState } from 'react';
import FormOne from './FormOne';
import FormOneSix from './FormOneSix';
import FormOneDaru from './FormOneDaru';
import FormOneCase from './FormOneCase';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFourSthanic from './FormFourSthanic';
import FormFive from './FormFive';
import FormFiveOneNine from './FormFiveOneNine';
import FormFiveOneTen from './FormFiveOneTen';
import FormFiveCRPC from './FormFiveCRPC';
import FormSix from './FormSix';
import FormSeven from './FormSeven';
import FormEight from './FormEight';
import FormNine from './FormNine';

const CaseDataEntry = () => {
  const [selectedOption, setSelectedOption] = useState('');
  

  const handleSelectionChange = (e) => {
    setSelectedOption(e.target.value);
    
  };

  const onSubmit = ()=>{
    setSelectedOption('')
  }

  const renderForm = () => {
    switch (selectedOption) {
      case 'भाग ५ गुन्हांची नोंद':
        return <FormOne onSubmit={onSubmit}/>
      case 'भाग ६ गुन्हांची नोंद':
        return <FormOneSix onSubmit={onSubmit} />
      case 'दारूबंदी गुन्हांची नोंद':
        return <FormOneDaru onSubmit={onSubmit} />
      case 'कोर्टाकडून आलेल्या केसेसची नोंद':
        return <FormOneCase onSubmit={onSubmit} />
      case 'अकस्मात मृत्यू नोंद':
        return <FormTwo onSubmit={onSubmit} />
      case 'मोटार अपघात नोंद':
        return <FormThree onSubmit={onSubmit} />
      case 'वरिष्ट अर्ज नोंद':
        return <FormFour onSubmit={onSubmit} />
      case 'स्थानिक अर्ज नोंद':
        return <FormFourSthanic onSubmit={onSubmit} />
      case 'प्रति.कार्य.बी.एन.एस.एस १२६':
        return <FormFive onSubmit={onSubmit} />
      case 'प्रति.कार्य.बी.एन.एस.एस १२८':
        return <FormFiveOneNine onSubmit={onSubmit} />
      case 'प्रति.कार्य.बी.एन.एस.एस १२९':
        return <FormFiveOneTen onSubmit={onSubmit} />
      case 'प्रति कार्य बी.एन.एस.एस':
        return <FormFiveCRPC onSubmit={onSubmit} />
      case 'हदपार नोंद':
        return <FormSix onSubmit={onSubmit} />
      case 'अग्नि उपद्रव नोंद':
        return <FormSeven onSubmit={onSubmit} />
      case 'मिसिंग नोंद':
        return <FormEight onSubmit={onSubmit} />
      case 'गहाळ मालाची नोंद':
        return <FormNine onSubmit={onSubmit} />
      case 'इतर':
          return <FormFour onSubmit={onSubmit} />
      default:
        return null;
    }
  };



  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Case Data Entry</h1>

        <div className="mb-4">
          <label htmlFor="case-select" className="block text-lg font-medium text-gray-700 mb-2">
            Select a Case Type:
          </label>
          <select
            id="case-select"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={selectedOption}
            onChange={handleSelectionChange}
          >
            <option value="">Select an option</option>
            <option value="भाग ५ गुन्हांची नोंद">भाग ५ गुन्हांची नोंद</option>
            <option value="भाग ६ गुन्हांची नोंद">भाग ६ गुन्हांची नोंद</option>
            <option value="दारूबंदी गुन्हांची नोंद">दारूंदी गुन्हांची नोंद</option>
            <option value="कोर्टाकडून आलेल्या केसेसची नोंद">कोर्टाकडून आलेल्या केसेसची नोंद</option>
            <option value="अकस्मात मृत्यू नोंद">अकस्मात मृत्यू नोंद</option>
            <option value="मोटार अपघात नोंद">मोटार अपघात नोंद</option>
            <option value="वरिष्ट अर्ज नोंद">वरिष्ट अर्ज नोंद</option>
            <option value="स्थानिक अर्ज नोंद">स्थानिक अर्ज नोंद</option>
            <option value="प्रति.कार्य.बी.एन.एस.एस १२६">प्रति.कार्य.बी.एन.एस.एस १२६</option>
            <option value="प्रति.कार्य.बी.एन.एस.एस १२८">प्रति.कार्य.बी.एन.एस.एस १२८</option>
            <option value="प्रति.कार्य.बी.एन.एस.एस १२९">प्रति.कार्य.बी.एन.एस.एस १२९</option>
            <option value="प्रति कार्य बी.एन.एस.एस">प्रति कार्य बी.एन.एस.एस</option>
            <option value="हदपार नोंद">हदपार नोंद</option>
            <option value="अग्नि उपद्रव नोंद">अग्नि उपद्रव नोंद</option>
            <option value="मिसिंग नोंद">मिसिंग नोंद</option>
            <option value="गहाळ मालाची नोंद">गहाळ मालाची नोंद</option>
            <option value="गहाळ मालाची नोंद">इतर</option>
          </select>
        </div>

        {/* Render the form based on the selected option */}
       
      </div>
      {renderForm() && (
          <div className="mt-6">
            {renderForm()}
          </div>
        )}
    </div>
  );
};

export default CaseDataEntry;

