import {useState} from 'react';
import { InputGroup } from '../../atoms/input-group/InputGroup';
import { TodoItem } from "../todo-item/TodoItem"

export function TodoList() {
  const [items, setItems] = useState([
    {label: 'Deliver the project', isDone: false}
  ]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const label = formData.get('taskName');

    setItems((oldItems) => {
      const newItem = { label, isDone: false }
      return [...oldItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    console.log('Change status', {items, setItems});
    console.log('Current item:', index, items[index])

    setItems(oldItems => {
      const newItems = oldItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;
    });
  };

  return <div>
    <h1>Today's tasks</h1>
    
      <form onSubmit={formSubmitHandler}>
        <InputGroup label= {'Write a task:'} name='taskName' />
      </form>

    <ul>
      { items.map((item, index) => (
          <TodoItem key={index} 
            index={index}
            isDone={item.isDone}
            changeStatus={changeStatus}
          >
          {item.label}
          </TodoItem>
        ))
      }
    </ul>
  </div>
};
