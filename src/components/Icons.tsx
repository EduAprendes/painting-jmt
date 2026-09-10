type IconProps = { width?: number; height?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ width = 16, height = 16, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function UserIcon({ width = 14, height = 14, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function PinIcon({ width = 14, height = 14, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ width = 16, height = 16, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M22 6 12 13 2 6" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

export function PencilIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

export function CheckIcon({ width = 28, height = 28, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function GoogleGIcon({ width = 28, height = 28, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.8-.4-4.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.5 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.6C29.6 36 26.9 37 24 37c-5.2 0-9.6-3.3-11.2-8l-6.6 5.1C9.6 40.6 16.3 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.6C39.7 37.3 44 31.7 44 24c0-1.4-.1-2.8-.4-3.5z"
      />
    </svg>
  );
}
