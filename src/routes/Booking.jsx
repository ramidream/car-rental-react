import React from 'react';
import { useParams } from "react-router-dom";
import { getVehicleBySlug } from "../lib/vehicles.js";
import { DateRange } from 'react-date-range';

export function Booking() {

  const { slug } = useParams();

  const vehicle = getVehicleBySlug(slug);

  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  console.log("vehicle in booking " + vehicle.slug);
  return (
    <div>
      <h1>This is the new page of {slug}! </h1>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
}

// export default Booking;


