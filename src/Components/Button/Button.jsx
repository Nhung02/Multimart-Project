const Button = ({title, text, number, action, color}) => {
    return(
        <button onClick={action} style={{marginRight: '20px', backgroundColor: color}}>{title}</button>
    )
}

export default Button;