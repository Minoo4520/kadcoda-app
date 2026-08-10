export default function Logo({ secondary = false }) {
  return (
    <div className="max-w-120 md:max-w-160">
      {secondary ? (
        <img src="/logo-secondary.png" alt="logo" />
      ) : (
        <img src="/logo.png" alt="logo" />
      )}
    </div>
  );
}
