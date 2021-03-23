import Todo from './Todo';
const TodoList = ({ todos, deleteTodo }) => {
  return(
    <>  
      { todos.map( t => 
        <Todo
          key={t.id}
          // title={t.title}
          // id={t.id}
          // complete={t.complete}
          {...t}
          deleteTodo={deleteTodo}
        />
      )}
    </>
  )
}
export default TodoList;