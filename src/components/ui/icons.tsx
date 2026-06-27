export function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M16 8.178c0-.658-.054-1.138-.172-1.636H8.163v2.97h4.499c-.091.737-.581 1.848-1.67 2.595l-.015.099 2.424 1.84.168.016c1.542-1.395 2.43-3.45 2.43-5.884" fill="#4285F4" />
      <path d="M8.163 16c2.204 0 4.054-.711 5.406-1.938l-2.577-1.955c-.69.47-1.614.8-2.83.8-2.158 0-3.99-1.396-4.643-3.325l-.096.008-2.52 1.911-.033.09C2.213 14.204 4.97 16 8.163 16" fill="#34A853" />
      <path d="M3.52 9.582c-.173-.498-.273-1.031-.273-1.582s.1-1.084.273-1.582l-.005-.106-2.551-1.842-.084.04C.317 5.493 0 6.711 0 8c0 1.289.317 2.507.87 3.591l2.649-2.009" fill="#FBBC05" />
      <path d="M8.163 3.093c1.533 0 2.567.65 3.157 1.192l2.304-2.204C12.209.79 10.367 0 8.163 0 4.97 0 2.213 1.796.87 4.409l2.645 2.009c.662-1.929 2.494-3.325 4.648-3.325" fill="#EB4335" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
    </svg>
  );
}

export function CheckRoundIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l6.59-6.59L17 7l-8 8z" />
    </svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M15.5 11.5l-3-1.5c-.5-.2-1-.1-1.3.3l-1.5 2c-2.1-1.1-3.8-2.8-4.9-4.9l2-1.5c.4-.3.5-.8.3-1.3L7.5 2c-.2-.5-.7-.8-1.2-.8H2C1.3 1.2.8 1.8 1 2.5 2.3 7.4 6.6 11.7 11.5 13c.7.2 1.3-.3 1.3-1v-3.8c0-.5-.3-1-.8-1.2z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4.5 13.5L9 9V3h1.5v5.25L15 12.75l-1.5 1.5z" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 1C5.14 1 2 4.14 2 8c0 5.25 7 9 7 9s7-3.75 7-9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

export function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M16 3H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 3l-6 4.5L3 6V5l6 4.5L15 5v1z" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.93 0-3.67-.79-4.94-2.06.16-1.65 3.3-2.56 4.94-2.56s4.78.91 4.94 2.56A6.96 6.96 0 0 1 7 13z" />
    </svg>
  );
}

export function TimeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.5 9.5L6.5 6V2.5h1v3l3.5 3-.5 1z" />
    </svg>
  );
}
