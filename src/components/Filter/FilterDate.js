import br from "date-fns/locale/pt-BR";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";

function FilterDate({ start, end, HandleStart, HandleEnd }) {
  return (
    <div className="Filter_container">
      <h1>Filtro por data</h1>
      <div className="Filter_day">
        <div className="date_start">
          <h1>Data inicial:</h1>
          <DatePicker
            className="start_picker"
            selected={start}
            dateFormat="dd/MM/yyyy"
            onChange={HandleStart}
            locale={br}
          />
        </div>
        <div className="date_end">
          <h1>Data final:</h1>
          <DatePicker
            className="end_picker"
            selected={end}
            dateFormat="dd/MM/yyyy"
            onChange={HandleEnd}
            locale={br}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterDate;
