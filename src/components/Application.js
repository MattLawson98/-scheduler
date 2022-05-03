
import React from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";


export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  //Gets the appoitments for the day
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  //Gets the interviewers for the day
  const interviewers = getInterviewersForDay(state, state.day);
  //Gets each individual appoitment and interview.
  const appointment = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview)

    return (
      <Appointment 
        id={appointment.id}
        key={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
    />)
  });
  //Creates the main scheduler page showing each day as well as each interview!
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}