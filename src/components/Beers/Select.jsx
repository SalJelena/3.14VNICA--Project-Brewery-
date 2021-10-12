import Option from "./Options"

const Select = ({setSelect, options, type}) => {
    return (
        <div>
            <select onChange={(e)=>{
                setSelect(e.target.value)
            }} >
                <option value='' defaultValue>All flavours</option>
                {options.map(opt => <Option key={opt} opt={opt} />)}
            </select>
        </div>
    )
}

export default Select