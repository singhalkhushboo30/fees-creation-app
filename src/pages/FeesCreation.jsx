import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import InputField from '../components/InputField';
import FeeCard from '../components/FeeCard';
import TabNavigation from '../components/TabNavigation';
import FeeRow from '../components/FeeRow';
//import './FeesCreation.css';

const FeesCreation = () => {
  const [semester, setSemester] = useState(1);
  const [fees, setFees] = useState([
    { name: 'Tuition Fee', amount: 30000 },
    { name: 'Lab Fee', amount: 10000 },
    { name: 'Sports Fee', amount: 10000 },
  ]);

  const total = fees.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="fees-container">
      <h1>Fees Creation</h1>

      <InputField label="Name a Fees Creation" placeholder="Type something..." />
      <Dropdown label="Program Level" options={['UG', 'PG']} />
      <Dropdown label="Program Type" options={['Full-Time', 'Part-Time']} />
      <Dropdown label="Program Name" options={['B.Sc', 'M.Sc']} />

      <h3>Program Run in Colleges</h3>
      <div className="college-cards">
        <FeeCard name="College A" status="Pending" />
        <FeeCard name="College B" active />
        <FeeCard name="College C" status="Pending" />
      </div>

      <TabNavigation activeTab={semester} onTabChange={setSemester} />

      <div className="fee-template">
        <Dropdown label="Select Fees Payment Templates" options={['Template 1', 'Template 2']} />
        {fees.map((fee, idx) => (
          <FeeRow key={idx} name={fee.name} amount={fee.amount} />
        ))}
      </div>

      <div className="total-amount">
        <h4>Total Fees Amount: ₹{total.toLocaleString()}</h4>
      </div>
    </div>
  );
};

export default FeesCreation;
