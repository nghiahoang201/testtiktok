import { Link } from 'react-router-dom';

function Button({ to, href, onClick, Children }) {
    var Btn = 'button';
    var props = {
        onClick,
        to,
        href,
    };

    if (to) {
        props.to = to;
        Btn = Link;
    } else if (href) {
        props.href = href;
        Btn = 'a';
    }

    return (
        <Btn {...props}>
            <div>{Children}</div>
        </Btn>
    );
}

export default Button;
