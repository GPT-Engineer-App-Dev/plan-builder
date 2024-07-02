import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="mr-2"
            />
            <Button onClick={addTodo}>Add</Button>
          </div>
          <Separator />
          <ul className="mt-4 space-y-2">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
              </li>
            ))}
          </ul>
          <Button variant="destructive" className="mt-4" onClick={deleteCompletedTodos}>
            Delete Completed
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;