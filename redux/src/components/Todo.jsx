import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleUpdate = (id, text) => {
        setEditId(id);
        setNewText(text);
    };

    const handleSave = (id) => {
        if (newText.trim()) {
            dispatch(updateTodo({ id, text: newText }));
            setEditId(null);
            setNewText("");
        }
    };

    return (
        <div>
            <div className="text-2xl font-bold">Todo</div>
            <ul className="list-none mt-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                    >
                        {editId === todo.id ? (
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                className="bg-zinc-700 text-white px-2 py-1 rounded flex-grow mr-2"
                            />
                        ) : (
                            <span>{todo.text}</span>
                        )}

                        <div className="flex items-center">
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleSave(todo.id)}
                                    className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleUpdate(todo.id, todo.text)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                            >
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
