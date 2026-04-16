
export default function Select ({ onChange,options,selectedValue,label }) {
  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange} value={selectedValue} >
        {options.map(item => <option key={item.value} value={item.value}>{item.value}</option>)}
      </select>
    </div>

  );
}