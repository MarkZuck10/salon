import React from "react";

const AvailabilityTable = ({ slots }) => {
  return (
    <div className="table-responsive">

      <table className="table-auto w-full">


        <thead>
          <tr>
            <th>Time Slot</th>
            <th>Status</th>
          </tr>
        </thead>
        
        <tbody>
          {slots.map((slot, index) => (
            <tr
              key={index}
              className={slot.status === "busy" ? "bg-red-500" : "bg-green-500"}
            >
              <td>{`${slot.startTime} - ${slot.endTime}`}</td>
              <td>{slot.status.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>


      </table>



    </div>
  );
};

export default AvailabilityTable;
