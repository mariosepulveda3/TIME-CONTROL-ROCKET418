import {
  Box,
  Calendar,
  Day,
  Month,
  MonthHeader,
  Week,
  Weekday,
} from "@chakra-ui/core";
import { useState } from "react";

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Box>
      <Calendar>
        <MonthHeader>
          {({ date, onNextMonth, onPrevMonth }) => (
            <Box>
              <button onClick={onPrevMonth}>❮</button>
              {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              <button onClick={onNextMonth}>❯</button>
            </Box>
          )}
        </MonthHeader>
        <Month>
          {({ days, onSelect }) => (
            <Week>
              {days.map((day) => (
                <Day
                  key={day.date}
                  isToday={day.isToday}
                  isSelected={day.isSelected}
                  isDisabled={day.isDisabled}
                  onClick={() => onSelect(day.date)}
                >
                  {day.day}
                </Day>
              ))}
            </Week>
          )}
        </Month>
        <Weekday>{({ day }) => day}</Weekday>
      </Calendar>
    </Box>
  );
}

export default MyCalendar;
