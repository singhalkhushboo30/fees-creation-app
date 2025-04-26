const InputField = ({ label, placeholder }) => (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
  
  export default InputField;
  