import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import moment from "moment";

import Header from "./Header/Header";
import Breaks from "./Breaks/Breaks";
import FilterDate from "../../components/Filter/FilterDate";

import "./home.css";

export default function Home() {
  const [breaks, setBreaks] = useState([""]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const start = moment(startDate).format("DD/MM/YYYY");
  const end = moment(endDate).format("DD/MM/YYYY");

  if (end < start) {
    toast.error("A data final precisa ser maior que a data inicial!", {
      toastId: "Error-id-01",
    });
  }

  useEffect(() => {
    async function getItems() {
      const { data } = await api.post("pausesFilter", {
        start,
        end,
      });
      setBreaks(data);
    }

    getItems();
  }, [start, end]);

  return (
    <div className="Home">
      <Header />
      <FilterDate
        start={startDate}
        end={endDate}
        HandleStart={(date) => setStartDate(date)}
        HandleEnd={(date) => setEndDate(date)}
      />
      <Breaks breaks={breaks} />
    </div>
  );
}
