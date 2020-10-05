import React from "react"
import {ListGroup,ListGroupItem} from "reactstrap"

import {FaCheckDouble} from "react-icons/fa"

const Todos = ({todos,markComplete}) => {
     return(
         <ListGroup className="mt-4 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                   {todo.todoString}
                    <span className="float-right"
                    onClick={() => markComplete(todo.id)}
                    >DONE</span>
                </ListGroupItem>
            ))}
         </ListGroup>

        )
}

export default Todos;