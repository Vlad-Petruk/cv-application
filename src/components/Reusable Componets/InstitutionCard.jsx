function InstitutionCard({ text, handleClick }) {
  return (
    <div className="institution-card" onClick={handleClick}>
      {text}
    </div>
  );
}

export default InstitutionCard;
