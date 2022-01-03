import React from 'react'
import { TodoListItem } from './TodoListItem'


export const TodoList = (props) => {

    const { todos, handleToggle, handleDelete } = props

    return (
        <ul className='list-group list-group-flush'>

            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
