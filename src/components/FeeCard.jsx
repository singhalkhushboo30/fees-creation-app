const FeeCard = ({ name, status, active }) => (
    <div className={`fee-card ${active ? 'active' : ''}`}>
      <h4>{name}</h4>
      {status && <span className="status">{status}</span>}
    </div>
  );
  
  export default FeeCard;
  