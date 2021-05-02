import './Card.css';

const Card = (props) => {

    const classes = 'card ' + props.className; //required to pass through other classes

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;