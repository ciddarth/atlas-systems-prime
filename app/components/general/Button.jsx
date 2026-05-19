export default function Button({ children, href = "#demo", className = "", ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-[16px] font-medium rounded-md transition-all hover:bg-[#7a0d11] hover:-translate-y-0.5  hover:shadow-[0_8px_24px_rgba(150,17,22,0.35)] whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 2l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
