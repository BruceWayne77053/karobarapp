'use client';
import { useState, useEffect } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    function clear() {
        setTodos([]);
    }

    useEffect(() => {
        setTodos([
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            }

        ]);
    }, []);

    return (
        <>
            <button onClick={clear} className="border px-3 py-1 mb-2">
                Clear
            </button>
            <div className="flex justify-between">
                {todos.map((t) => {
                    return (
                        <div key={t.id} className="border p-4">
                            <h1>{t.title}</h1>
                            <p>{t.userId}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}




// 'use client'
// import { useState } from "react";

// export default function Todos(){
    
//     const [todos, setTodos] = useState([])
//     setTodos([
// //         {
// //     "userId": 1,
// //     "id": 1,
// //     "title": "delectus aut autem",
// //     "completed": false
// //   }
//     ])

//     // function clear(){
//     //     // setTodos([])
//     //     fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>()).then(()=>())
//     // }



//     console.log("Loading")
//     useEffect(()=>{
//         setTodos([{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }])
//     },[])
//     return(
//         <>
//             <div className = "flex justify-between">
            
//             {
//                 todos.map((t,i)=>{
//                     <div key={i} className="border p-4">
//                         <h1>{t.title}</h1>
//                         <p>{t.userId}</p>
//                     </div>
//                 })
//             }
            
//             </div> 
//         </>
//     )
// }









