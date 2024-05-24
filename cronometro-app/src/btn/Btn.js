function Btn(props) {
    return (
        <>
        <button className='btn' onClick={ props.click } >{ props.title }</button>
        </>
    );
}

export default Btn;