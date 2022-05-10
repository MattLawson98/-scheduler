import {useEffect} from "react";
import React from "react";


import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';

import 'components/Appointment/styles.scss';
import useVisualMode from 'hooks/useVisualMode';

 const EMPTY = "EMPTY";
  const SHOW = "SHOW"; 
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const DELETING = "DELETING";

//Creates page to show Appointment slots!
export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }

  }, [mode, transition, props.interview])

  function save(name, interviewer) {
    
    if (name && interviewer) {
      const interview = {
        student: name,
        interviewer
      };

      transition(SAVING);

      props.bookInterview(props.id, interview)
        .then(() => transition(SHOW))
        .catch(() => { 
          transition(ERROR_SAVE, true)
        })
    }
  }

  function remove(){
    if (mode === CONFIRM) {
      transition(DELETING,true);
      
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => {
        transition(ERROR_DELETE,true)
      });
    } else {
      transition(CONFIRM);      
    }

  }

  function edit() {
    transition(EDIT);
  }
  //Gives the overall functionality/data of the scheduler app!
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {/* Adds the data for the main page showing interviews */}
      {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={remove}
        onEdit={edit}
      />)}
      {/* Adds the data for the scheduling form */}
      {mode === CREATE && (
        <Form
        name={props.name}
        value={props.value}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
      />)}
      {/* Adds the Saving message and function */}
      {mode === SAVING && 
        <Status message="Saving" 
      />}
      {/* Adds the Deleting message and function */}
      {mode === DELETING && 
        <Status message="Deleting" 
      />}
      {/* Adds the confimation message and function */}
      {mode === CONFIRM && 
        <Confirm 
          onCancel={back}
          onConfirm={remove}
          message="Are you sure you would like to delete?" 
      />}
      {/* Adds the Editing functionality to the scheduler */}
      {mode === EDIT &&
        <Form 
          name={props.name ? props.name : props.interview.student}
          value={props.value ? props.value: props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
      />}
      {/* Adds an Error on Save if encountered! */}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not save appointment."
          onClose={back}
      />)}
      {/* Adds an Error on Deleting if encountered */}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not delete appointment."
          onClose={back}
      />)}
      
    </article>
  )
}