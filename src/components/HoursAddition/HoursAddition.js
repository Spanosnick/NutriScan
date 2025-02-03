import style from './HoursAddition.module.css';
import {useState} from "react";
import {Input} from "../Input/Input";
import ToggleButton from 'react-toggle-button'

export function HoursAddition() {
    const [hoursOpen, setHoursOpen] = useState({
        Monday: {itsOpen:true,open: '15:00', close: ''},
        Tuesday: {itsOpen:true,open: '', close: ''},
        Wednesday: {itsOpen:true,open: '', close: ''},
        Thursday: {itsOpen:true,open: '', close: ''},
        Friday: {itsOpen:true,open: '', close: ''},
        Saturday: {itsOpen:true,open: '', close: ''},
        Sunday: {itsOpen:true,open: '', close: ''}
    });


    function inputHandler(day, type, event){

        const inputValue = event.target.value;
        setHoursOpen({...hoursOpen, [day]: {...hoursOpen[day], [type]: inputValue}})
    }

    function updateDocumentHours(){
        console.log(hoursOpen)

    }

    return (<div className={style.hoursContainer}>
            <h3> Ώρες Λειτουργίας</h3>
        {Object.keys(hoursOpen).map((day, index) => {
            return <div className={style.hoursRow} key={`${day}_index`}>
                <h1>{day}</h1>
                {hoursOpen[day]['itsOpen'] && <Input label='' type='time' value={hoursOpen[day]['open']} onChange={(value)=>inputHandler(day,'open',value)}/> }
                {hoursOpen[day]['itsOpen'] && '-' }
                {hoursOpen[day]['itsOpen'] && <Input label='' type='time' value={hoursOpen[day]['close']} onChange={(value)=>inputHandler(day,'close',value)}/> }
                <ToggleButton   value={hoursOpen[day]['itsOpen']}   onToggle={(value)=> setHoursOpen({...hoursOpen, [day]: {...hoursOpen[day], itsOpen: !value}})}        />
            </div>
        })}
            <div className={style.hoursRow}>
                <button className={style.updateHoursBtn} onClick={updateDocumentHours}>Ενημέρωση</button>
            </div>

        </div>
    )
}
