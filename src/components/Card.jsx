const Card = ({ children, ...props }) => {
  return (
    <section className="card" {...props}>
      {children}
    </section>
  );
};

export default Card;
