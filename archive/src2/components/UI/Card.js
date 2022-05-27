import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  // we want to Card to work as a wrapper
  return <div className={classes}>{props.children}</div>;
};
export default Card;
