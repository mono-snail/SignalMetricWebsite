interface DeviceShotProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function DeviceShot({
  src,
  alt,
  priority = false,
  className = "",
}: DeviceShotProps) {
  return (
    <figure className={`device-shot ${className}`.trim()}>
      <div className="device-speaker" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        width={738}
        height={1600}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}
