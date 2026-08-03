type IconProps = {
  size?: number;
  className?: string;
};

function baseProps(size = 20, className = "") {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export function ArrowRightIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MailIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function GithubIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
      <path d="M15 22v-3.2c0-.9.3-1.6.8-2.1-2.7-.3-5.6-1.3-5.6-6A4.6 4.6 0 0 1 11 7.4a4.3 4.3 0 0 1 .1-3.1s1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.3 4.3 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.8 3.4c0 4.7-2.9 5.7-5.6 6 .5.5.8 1.3.8 2.5V22" />
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v2" />
      <rect x="2" y="9" width="4" height="11" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7H3V3h7" />
    </svg>
  );
}

export function SunIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M20 12.8A8 8 0 1 1 11.2 4 6.5 6.5 0 0 0 20 12.8Z" />
    </svg>
  );
}
