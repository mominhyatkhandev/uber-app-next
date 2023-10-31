"use client";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const InputItem = ({ label }) => {
  const [value, setValue] = useState(null);
  return (
    <div className="mt-5">
      <div>
        <label className="text-slate-400">{label}</label>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          debounce={300}
          selectProps={{
            value,
            onChange: setValue,
            isClearable: true,
            placeholder: label == "Where From" ? "Source" : "Destination",
            className: "w-full",
            components: {
              DropdownIndicator: false,
            },
            styles: {
              control: (provided) => ({
                ...provided,
                backgroundColor: '#00FFF',
                outline: 'none'
              }),
            },
          }}
        />
        {/* <input type='text' placeholder={label} className='bg-white p-1 border-[1px] w-full rounded-sm outline-none focus:border-yellow-300'/> */}
      </div>
    </div>
  );
};

export default InputItem;
