import React, { useState } from "react";
import DateInput from "./components/DatePicker";
import AvailabilityTable from "./components/AvailabilityTable";
import RefreshButton from "./components/RefreshButton";
import { fetchAvailability } from "./services/api";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDataFetched(false);
  };

  const handleRefresh = async () => {
    if (selectedDate) {
      try {
        const formattedDate = selectedDate.toISOString().slice(0, 10);
        const data = await fetchAvailability(formattedDate);
        setSlots(data.slots);
        setIsDataFetched(true);
      } catch (error) {
        alert("Error fetching data. Please try another date.");
      }
    } else {
      alert("Please select a date first.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h3>Select Date:</h3>
      <DateInput selectedDate={selectedDate} onChangeDate={handleDateChange} />
      <br />
      <RefreshButton onClick={handleRefresh} />
      {isDataFetched && <AvailabilityTable slots={slots} />}
    </div>
  );
}

export default App;
