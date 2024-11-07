import Layout from '@/_shared/components/atoms/Layout';
import { TODO_LIST } from '@/constants/routes';
import { Button, Card, Flex, Typography } from '@hanarepo/components';
import { useNavigate } from 'react-router-dom';


export const Home = () => {

  const navigate = useNavigate();

  return (
    <Layout.Column>
      <Card size="medium">
        <Card.Header title="여기는 실험실 입니다."
          subtitle='이것저것 테스트 합니다.'/>
  
        <Card.Content>
          <Flex.Column gap={10}>
            <Typography variant="label">리덕스 툴킷 실험실</Typography>
            <Button variant='primary'
              onClick={() => navigate(TODO_LIST)} title='REDUX_TOOLKIT' />
          </Flex.Column>
        </Card.Content>
      </Card>
    </Layout.Column>
  );
}
