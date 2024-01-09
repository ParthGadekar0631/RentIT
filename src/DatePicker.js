import React,{useState} from 'react';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People";
import "./DatePicker.css"
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";




function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        
        

    }
    return (
        <div className="datepicker">
           <DateRangePicker ranges={
               [selectionRange]} onChange= {
                   handleSelect} />
             <h2>Number of guests
                 <PeopleIcon /></h2> 
                 <input min={0} defaultValue={2} type="number" />     
        </div>
    )
}


export default DatePicker
