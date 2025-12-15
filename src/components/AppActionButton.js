export default function AppActionButton({ label, onClick, disabled }) {
  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
