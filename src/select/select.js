import React from 'react';
import Select from "react-select";
import { useDispatch } from 'react-redux';
import { setStockInterval } from '../slices/dataSlice';

const CustomSelect = () => {
    const dispatch = useDispatch();

    const groupedOptions = [
        {
            label: "Intervalo",
            options: [
                { value: "1min", label: "1 minuto" },
                { value: "5min", label: "5 minutos" },
                { value: "15min", label: "15 minutos" },
            ],
        },
    ];

    const handleSelect = (event) => {
        dispatch(setStockInterval(event.value));
    }

    return (
        <div>
            <Select onChange={handleSelect} placeholder='1 minuto' options={groupedOptions} />
        </div>
    );
};

export default CustomSelect;