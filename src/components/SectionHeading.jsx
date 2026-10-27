const SectionHeading = ({ title, children, className = '' }) => (
  <div className={`sec-head ${className}`}>
    <h2 className="sec-title">{title}</h2>
    <span className="sec-bar" aria-hidden="true" />
    {children && <p className="sec-sub">{children}</p>}
  </div>
);

export default SectionHeading;
