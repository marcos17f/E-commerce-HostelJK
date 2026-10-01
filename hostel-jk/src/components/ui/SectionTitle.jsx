export default function SectionTitle({ eyebrow, heading, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{heading}</h2>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </div>
  );
}
