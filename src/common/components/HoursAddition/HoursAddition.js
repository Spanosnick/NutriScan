import style from './HoursAddition.module.css';
import {useState} from "react";
import {Input} from "../Input/Input";
import ToggleButton from 'react-toggle-button'


export function HoursAddition({onSubmit,defaultHours}) {
    const [hoursOpen, setHoursOpen] = useState(defaultHours);


    function inputHandler(day, type, event){

        const inputValue = event.target.value;

        const index = hoursOpen.findIndex((array_day)=> array_day.day === day);

        if(type === 'open') {
            setHoursOpen([...hoursOpen.slice(0, index), {
                ...hoursOpen[index],
                open: inputValue
            }, ...hoursOpen.slice(index + 1)]);
        }else if(type === 'close'){
            setHoursOpen([...hoursOpen.slice(0, index), {
                ...hoursOpen[index],
                close: inputValue
            }, ...hoursOpen.slice(index + 1)]);
        }
    }


    function updateDocumentHours(){

        onSubmit(hoursOpen);
    }

    return (<div className={style.hoursContainer}>
            <h3> Ώρες Λειτουργίας</h3>
        {hoursOpen.map((day, index) => {
            return <div className={style.hoursRow} key={`${day.day}_index`}>
                <p className={style.day}>{day.day}</p>
                {day.itsOpen && <Input label='' type='time' value={day.open} onChange={(value)=>inputHandler(day.day,'open',value)}/> }
                {day.itsOpen && '-' }
                {day.itsOpen && <Input label='' type='time' value={day.close} onChange={(value)=>inputHandler(day.day,'close',value)}/> }
                <ToggleButton   value={day.itsOpen}   onToggle={(value)=> setHoursOpen([...hoursOpen.slice(0,index),{...day,itsOpen: !value},...hoursOpen.slice(index+1)])}        />
            </div>
        })}
            <div className={style.hoursRow}>
                <button className={style.updateHoursBtn} onClick={updateDocumentHours}>Ενημέρωση</button>
            </div>
        </div>
    )
}

export function DisplayAvailableHours({hours,styleTable}){

return (
    <table className={styleTable}>
        <thead>
        <tr>
            <th>Ημέρα</th>
            <th>Ώρα Έναρξης</th>
            <th>Ώρα Λήξης</th>
        </tr>
        </thead>
        <tbody>
        {Object.keys(hours).map((day,index)=>{
            return <tr key={`${day}_${index}`}>
                <td>{hours[day].day}</td>
                {hours[day].itsOpen && (<td>{hours[day].open}</td> )}
                {hours[day].itsOpen && (<td>{hours[day].close}</td> )}
                {!hours[day].itsOpen && (<td className={style.closedColor} colSpan='2'>Κλειστό</td> )}
            </tr>
        })}
        </tbody>
    </table>
)
}
