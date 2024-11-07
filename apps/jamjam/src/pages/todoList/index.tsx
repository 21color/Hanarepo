import { addTodo, editTodo, resetTodos, setEditTodo, toggleTodo } from '@/_shared/store/todo/slice';
import { RootState } from '@/_shared/store/todo/store';
import { Button, Card, Checkbox, Flex, Textfield } from '@hanarepo/components';
import { vars } from '@hanarepo/token/vars';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const TodoList = () => {

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const handelAddTodo = () => {
    if (todo.trim() === '') return;
    dispatch(addTodo(todo));
    setTodo('');
  }

  const handelEditTodo = (id: number, text: string) => {
    if (text.trim() === '') return;
    dispatch(editTodo({
      id,
      text,
    }));
    dispatch(setEditTodo(id));
    setTodo('');
  }

  const sortedTodos = todos.slice().sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);

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
              onClick={() => {dispatch(resetTodos());}
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
            {sortedTodos.map((todo) => (
              <li key={todo.id} css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                {todo.editing ? (
                  <Flex gap={10}>
                    <Textfield 
                      placeholder={todo.text}
                      variant="standard"
                      value={ newTodo === '' ? todo.text : newTodo }
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button 
                      variant="primary"
                      title="완료"
                      onClick={() => handelEditTodo(todo.id, newTodo)}
                    />
                  </Flex>
                ) : (
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
                    color: todo.completed ? vars.color.semantic.textDisabled : vars.color.semantic.text,
                  }}
                >{todo.text}</span>
                <Button 
                  variant="secondary"
                  title="수정"
                  onClick={() => {dispatch(setEditTodo(todo.id));
                  }}
                />
                </Checkbox.Label>
                )}
              </li>
            ))}
            </ul>
            </Flex.Column>
        </Card.Content>
      </Card>
    </Flex.Column>
  );
};

