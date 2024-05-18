const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    border: "thin solid red",
    margin: "1rem auto",
    padding: "1rem",
    backgroundColor:"cadetblue",
    color:"white"
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
