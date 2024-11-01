"use client"
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function PriceSlider() {
    const [value, setValue] = useState([0, 5000000]);

    return (
        <div className='w-5/6 pt-4'>
            <Slider
                range
                value={value}
                onChange={setValue}
                min={0}
                max={5000000}
                step={10000}
                trackStyle={[{ backgroundColor: "#000" }]}
                handleStyle={[{ borderColor: '#000' }, { borderColor: '#000' }]}
            />
            <div className='pt-4'>
                {value[0].toLocaleString()} VNĐ - {value[1].toLocaleString()} VNĐ
            </div>
        </div>
    );
}
