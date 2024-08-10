import React, { useState } from 'react';
import FormOne from './FormOne';

const CaseDataEntry = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 'भाग ५ गुन्हांची नोंद':
        return <FormOne/>
      case 'भाग ६ गुन्हांची नोंद':
        return <FormOne/>
      case 'दारूबंदी गुन्हांची नोंद':
        return <FormOne/>
      case 'कोर्टाकडून आलेल्या केसेसची नोंद':
        return <FormOne/>
      case 'अकस्मात मृत्यू नोंद':
        return <div>Form for अकस्मात मृत्यू नोंद</div>;
      case 'मोटार अपघात नोंद':
        return <div>Form for मोटार अपघात नोंद</div>;
      case 'वरिष्ट अर्ज नोंद':
        return <div>Form for वरिष्ट अर्ज नोंद</div>;
      case 'स्थानिक अर्ज नोंद':
        return <div>Form for स्थानिक अर्ज नोंद</div>;
      case 'प्रति.कार्य.सी.आर.पी.सी. १०७':
        return <div>Form for प्रति.कार्य.सी.आर.पी.सी. १०७</div>;
      case 'प्रति.कार्य.सी.आर.पी.सी. १०९':
        return <div>Form for प्रति.कार्य.सी.आर.पी.सी. १०९</div>;
      case 'सी.आर.पी.सी. कलम ११०':
        return <div>Form for सी.आर.पी.सी. कलम ११०</div>;
      case 'प्रति कार्य सी.आर.पी.सी.':
        return <div>Form for प्रति कार्य सी.आर.पी.सी.</div>;
      case 'हदपार नोंद':
        return <div>Form for हदपार नोंद</div>;
      case 'अग्नि उपद्रव नोंद':
        return <div>Form for अग्नि उपद्रव नोंद</div>;
      case 'मिसिंग नोंद':
        return <div>Form for मिसिंग नोंद</div>;
      case 'गहाळ मालाची नोंद':
        return <div>Form for गहाळ मालाची नोंद</div>;
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
            <option value="प्रति.कार्य.सी.आर.पी.सी. १०७">प्रति.कार्य.सी.आर.पी.सी. १०७</option>
            <option value="प्रति.कार्य.सी.आर.पी.सी. १०९">प्रति.कार्य.सी.आर.पी.सी. १०९</option>
            <option value="सी.आर.पी.सी. कलम ११०">सी.आर.पी.सी. कलम ११०</option>
            <option value="प्रति कार्य सी.आर.पी.सी.">प्रति कार्य सी.आर.पी.सी.</option>
            <option value="हदपार नोंद">हदपार नोंद</option>
            <option value="अग्नि उपद्रव नोंद">अग्नि उपद्रव नोंद</option>
            <option value="मिसिंग नोंद">मिसिंग नोंद</option>
            <option value="गहाळ मालाची नोंद">गहाळ मालाची नोंद</option>
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
