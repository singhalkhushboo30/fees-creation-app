const FeeRow = ({ name, amount }) => (
    <div className="fee-row">
      <input type="text" value={name} readOnly />
      <input type="number" value={amount} readOnly />
    </div>
  );
  
  export default FeeRow;
  