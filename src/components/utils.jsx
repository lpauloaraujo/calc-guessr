export function Button({ color = 'black', size = '16px', width = 'auto', height = 'auto', onClick, children }) {
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
        backgroundColor: '#f0f0f0',
        display: 'inline-block'
    };

    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export function Card({ children }) {
    const style = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        padding: '16px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        margin: '10px',
    };

    return <div style={style}>{children}</div>;
}