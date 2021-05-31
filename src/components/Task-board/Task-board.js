import React, { useState } from 'react';
import './Task-board.scss';
import ListColumn from './List-column/List-column';
import CardTask from './Card-task/Card-task'
import TaskModal from './Task-Modal/Task-modal';
import Congratulation from './Congratulation/Congratulation';


const TaskBoard = (props) => {
  let [idHover, setHoverId] = useState();
  let [dragItem, setDragItem] = useState();
  let [tasks, setTasks] = useState(props.buddy ? [
    {
      id: 1, title: 'TO DO', tasks: [
        // { id: 1, task: "task 1", name: 'Get a to-do list for the week'},
        // { id: 2, task: "task 2", name: 'Sign Up Flow' },
        // { id: 3, task: "task 3", name: 'Kick off meeting' },
      ]
    },
    {
      id: 2, title: 'IN PROGRESS', tasks: [
        // { id: 1011, task: "task 1", name: 'Internal policy and company rules' },
        // { id: 1323, task: "task 2", name: 'Hour with Buddy' },
        { id: 2123, task: "ON-50", name: 'Sign necessary documents' },
      ]
    },
    {
      id: 3, title: 'REVIEW (Q&A)', tasks: [
        // { id: 4231, task: "task 4", name: ' Sign Up Flow' },
        // { id: 712, task: "task 655", name: 'Sign necessary documents' },
        // { id: 852, task: "task 63", name: 'Sign necessary documents' },
        // { id: 959, task: "task 6123", name: 'Sign Up Flow' },

      ]
    },
    {
      id: 4, title: 'DONE', tasks: [
        { id: 7, task: "ON-48", name: 'Meet HR, PM, CEO' },
        { id: 5, task: "ON-47", name: 'Hour with Buddy' },
        { id: 51, task: "ON-46", name: 'Sign necessary documents' },
        { id: 6, task: "ON-45", name: 'Office excursion' },
        { id: 8, task: "ON-44", name: 'Meet your team' },
        { id: 9, task: "ON-43", name: 'Get acquainted other teams' },
        { id: 10, task: "ON-42", name: 'Meet your working place' },
        
        { id: 11, task: "ON-43", name: 'Get program licenses' },
        { id: 12, task: "ON-41", name: 'Be added to Slack, Jira, Confluence' },
        { id: 13, task: "ON-39", name: 'Get a laptop' },
        { id: 14, task: "ON-38", name: 'Get all needed technical equipment' },
        { id: 15, task: "ON-37", name: 'Create and approve your work schedule' },

        { id: 17, task: "ON-36", name: 'Watch training “Internal policy and company rules”' },
        { id: 16, task: "ON-35", name: 'Watch training “How to start a new job in comfort”' },
        { id: 18, task: "ON-34", name: 'Watch training “How work planning is conducted in the company”' },

        { id: 19, task: "ON-32", name: 'Kick off meeting' },
        { id: 20, task: "ON-31", name: 'Get a to-do list for the week' },
      ]
    }
  ] : [
    {
      id: 1, title: 'TO DO', tasks: [
        // { id: 1, task: "task 1", name: 'Get a to-do list for the week'},
        // { id: 2, task: "task 2", name: 'Sign Up Flow' },
        // { id: 3, task: "task 3", name: 'Kick off meeting' },
      ]
    },
    {
      id: 2, title: 'IN PROGRESS', tasks: [
        // { id: 1011, task: "task 1", name: 'Internal policy and company rules' },
        // { id: 1323, task: "task 2", name: 'Hour with Buddy' },
      ]
    },
    {
      id: 3, title: 'REVIEW (Q&A)', tasks: [
        // { id: 4231, task: "task 4", name: ' Sign Up Flow' },
        // { id: 712, task: "task 655", name: 'Sign necessary documents' },
        // { id: 852, task: "task 63", name: 'Sign necessary documents' },
        // { id: 959, task: "task 6123", name: 'Sign Up Flow' },
        { id: 2123, task: "ON-50", name: 'Sign necessary documents' },

      ]
    },
    {
      id: 4, title: 'DONE', tasks: [
        { id: 7, task: "ON-48", name: 'Meet HR, PM, CEO' },
        { id: 5, task: "ON-47", name: 'Hour with Buddy' },
        { id: 51, task: "ON-46", name: 'Sign necessary documents' },
        { id: 6, task: "ON-45", name: 'Office excursion' },
        { id: 8, task: "ON-44", name: 'Meet your team' },
        { id: 9, task: "ON-43", name: 'Get acquainted other teams' },
        { id: 10, task: "ON-42", name: 'Meet your working place' },
        
        { id: 11, task: "ON-43", name: 'Get program licenses' },
        { id: 12, task: "ON-41", name: 'Be added to Slack, Jira, Confluence' },
        { id: 13, task: "ON-39", name: 'Get a laptop' },
        { id: 14, task: "ON-38", name: 'Get all needed technical equipment' },
        { id: 15, task: "ON-37", name: 'Create and approve your work schedule' },

        { id: 17, task: "ON-36", name: 'Watch training “Internal policy and company rules”' },
        { id: 16, task: "ON-35", name: 'Watch training “How to start a new job in comfort”' },
        { id: 18, task: "ON-34", name: 'Watch training “How work planning is conducted in the company”' },

        { id: 19, task: "ON-32", name: 'Kick off meeting' },
        { id: 20, task: "ON-31", name: 'Get a to-do list for the week' },
      ]
    }
  ])
  let [activeModal, setActiveModal] = useState(false);
  let [newCard, setNewCard] = useState(null);
  let [newBoard, setNewBoard] = useState(null);
  let [congrats, setCongrats] = useState(false)

  function dragStart(event, column, task, id) {
    setNewCard(task);
    setNewBoard(column)
    setDragItem(id)
  }

  function dragOver(event, id) {
    event.preventDefault();
    setHoverId(id)
  }

  function dragEnd() {
    setHoverId()
    setDragItem()
  }

  function dragDrop(event, column, task) {
    event.preventDefault();

    const cardIndex = newBoard.tasks.indexOf(newCard)
    newBoard.tasks.splice(cardIndex, 1);

    const dropIndex = column.tasks.indexOf(task)
    column.tasks.splice(dropIndex + 1, 0, newCard);
  }

  function dragLeave(event, id) {
  }

  function colDrop(event, column) {
    event.preventDefault();

    if (column.tasks.length === 0) {
      column.tasks.push(newCard)
      const cardIndex = newBoard.tasks.indexOf(newCard)
      newBoard.tasks.splice(cardIndex, 1);
    }

    if(
        tasks[0].tasks.length === 0 &&
        tasks[1].tasks.length === 0 &&
        tasks[2].tasks.length === 0
      ) {
      setTimeout(() => {
        setCongrats(true)
      }, 100);
      }
  }

  function closeCongrats() {
    setCongrats(false)
  }

  function colOver(event, column) {
    event.preventDefault();
  }

  function showModal() {
    setActiveModal( activeModal = !activeModal);
  }

 function changeCardPosition(name) {
   let newtasks = [...tasks]
    if ( name === 'In Review (Q&A)' && newtasks[1].tasks.length !== 0) {
      newtasks[2].tasks.push(newtasks[1].tasks[0])
      newtasks[1].tasks = [];

      setTasks(newtasks)
    } 

    if (name === 'Done' && newtasks[2].tasks.length !== 0) {
      newtasks[3].tasks.push(newtasks[2].tasks[0])
      newtasks[2].tasks = [];

      setTasks(newtasks);
      setCongrats(true);
    }
 }

  return (
    <div className="task-board">
       <TaskModal
        activeModal={activeModal}
        closeModal={()=>{showModal();}}
        changeCardPosition={(name)=>{changeCardPosition(name)}}
        changeProgresBar={(name)=>{props.changeProgresBar(name)}}
        buddy={props.buddy}
       />
       <Congratulation
        closeCongrats={()=>{closeCongrats();}}
        setCareer={()=>{props.setCareer()}}
        active={congrats}
        buddy={props.buddy}
        change={()=>{props.change()}}
        hideUsers={()=>{props.hideUsers()}}
      />

      {tasks.map((column) => {
        return (
          <ListColumn

          title={column.title}
            key={column.id}
            colDrop={(event) => { colDrop(event, column) }}
            colOver={colOver}
          >
            {column.tasks.map((task) => {
              return (
                <CardTask
                  dragStart={(event) => { dragStart(event, column, task, task.id) }}
                  dragOver={(event) => { dragOver(event, task.id) }}
                  dragLeave={(event) => { dragLeave(event, task.id) }}
                  dragEnd={dragEnd}
                  dragDrop={(event) => { dragDrop(event, column, task) }}
                  key={task.id}
                  id={task.id}
                  idHover={idHover}
                  dragItem={dragItem}
                  name={task.name}
                  showModal={()=>{showModal();}}
                  task={task.task}
                >
                </CardTask>
              )
            })}

          </ListColumn>
        )
      })}
    </div>
  )
}

export default TaskBoard;
