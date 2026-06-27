interface SectionLabelProps {
  text: string;
  color?: "accent" | "primary" | "green";
}

export default function SectionLabel({ text, color = "accent" }: SectionLabelProps) {
  const lineColor = color === "accent" ? "bg-accent" : color === "green" ? "bg-green" : "bg-primary";
  const textColor = color === "accent" ? "text-accent" : color === "green" ? "text-green" : "text-primary";

  return (
    <div className="section-label">
      <span className={`section-label-line ${lineColor}`} />
      <span className={`section-label-text ${textColor}`}>{text}</span>
    </div>
  );
}
