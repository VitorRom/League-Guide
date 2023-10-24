import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label className={`label-${props.label}`}>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div >
    )
}