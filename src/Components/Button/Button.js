import './Button.scss';

function Button(props) {
    const { variant, text } = props;
    return (
        <button className={`Button Button__${variant}`}>
            {text}
        </button>
    )
}

export default Button;