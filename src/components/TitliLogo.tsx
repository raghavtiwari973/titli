interface TitliLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
}

export function TitliMark({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <video
      src="/logo-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      width={size}
      height={size}
      className={`object-cover rounded-full shadow-sm ${className}`}
    />
  );
}

export default function TitliLogo({
  className = '',
  size = 48,
  showText = true,
  textClassName = '',
}: TitliLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <TitliMark size={size} />
      {showText && (
        <span
          className={`font-sans text-2xl tracking-wide text-titli-plum font-bold ${textClassName}`}
        >
          Titli
        </span>
      )}
    </div>
  );
}
