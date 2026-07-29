export default function Button({ children, variant = "primary", ...props }) {
  const base = "rounded-lg px-6 py-3 font-medium transition duration-300";

  const styles = {
    primary: "bg-[var(--color-primary)] text-white hover:opacity-90",

    secondary:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",

    accent: "bg-[var(--color-accent)] text-white hover:opacity-90",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
