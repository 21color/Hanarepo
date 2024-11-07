import { addTodo, resetTodos, toggleTodo } from '@/_shared/store/todo/slice';
import { RootState } from '@/_shared/store/todo/store';
import { Button, Card, Checkbox, Flex, Textfield } from '@hanarepo/components';
import { vars } from '@hanarepo/token/vars';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const TodoList = () => {

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handelAddTodo = () => {
    if (todo.trim() === '') return;
    dispatch(addTodo(todo));
    setTodo('');
  }

  return (
    <Flex.Column width={600}gap={20}>
      <Card size="large">
        <Card.Header title="TODO LIST 🌙" 
          subtitle='redux toolkit todo list'
        />
        <Card.Content>
          <Textfield 
            variant="standard"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="할일을 입력해 주세요"
          />
          <Flex gap={10} >
          <Button variant="primary" 
            title="할일 추가"
            onClick={handelAddTodo} />
            <Button variant="critical"
              title="모두 삭제"
              onClick={() => {
                 dispatch(resetTodos());
              }
            } />
          </Flex>
          <Flex.Column gap={10}>
            <ul css={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '12px 6px',
              gap: 8,
            }}>
            {todos.map((todo) => (
              <li key={todo.id}>
                <Checkbox.Label>
                  <Checkbox 
                    checked={todo.completed}
                    onChange={() => {
                      dispatch(toggleTodo(todo.id));
                    }}
                  />
                <span 
                  css={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: 8,
                    fontSize: 18,
                    color: todo.completed ? vars.color.semantic.textDisabled : vars.color.text,
                  }}
                >{todo.text}</span>
                </Checkbox.Label>
              </li>
            ))}
            </ul>
            </Flex.Column>
        </Card.Content>
      </Card>
    </Flex.Column>
  );
};

