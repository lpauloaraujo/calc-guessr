export function Button({ color = 'black', backgroundColor = 'white', size = '16px', width = 'auto', height = 'auto', onClick, children }) {
    const style = {
        color,
        fontSize: size,
        width,
        height,
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export function Card({ children, className }) {
    const style = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        padding: '16px',
        borderRadius: '10px',
        margin: '10px',
    };

    return <div className={className} style={style}>{children}</div>;
}