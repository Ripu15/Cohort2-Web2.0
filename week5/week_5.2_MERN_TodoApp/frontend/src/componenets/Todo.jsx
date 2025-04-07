/* todos = [

]*/
//{todos}-   Its  object destructuring
export function Todos({todos}){
    return <div>
      {/* map is rendering every todo */}
      {todos.map(function(todo){
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ?  "Completed" : "Mark As Complete"}</button>
        </div>
      })}
    </div>

}