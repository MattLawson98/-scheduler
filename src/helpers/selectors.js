export function getAppointmentsForDay(state, name) {
  const filteredDays = state.days.filter(day => day.name === name);

  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  const appointmentsFromDays = filteredDays[0].appointments;
 
  let filteredAppointments = [];
 
  for(let appointment of appointmentsFromDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}

export  function getInterview(state, interviewers) {
  if(!interviewers) return null;

  const filteredInterview = {};
  
  filteredInterview.student = interviewers.student;
  filteredInterview.interviewer = state.interviewers[interviewers.interviewer];
  return filteredInterview;

}

export function getInterviewersForDay(state, name) {
  const filteredDays = state.days.filter(day => day.name === name);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  const interviewersFromDays = filteredDays[0].interviewers;
 
  let filteredInterviewers = [];

  for(let interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers;
}