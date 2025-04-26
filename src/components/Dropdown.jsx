const Dropdown = ({ label, options }) => (
    <div className="dropdown-field">
      <label>{label}</label>
      <select>
        <option value="">Select</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  
  export default Dropdown;
  