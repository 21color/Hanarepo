import Layout from '@/_shared/components/atoms/Layout';
import { Button, Card, Flex, Typography } from '@hanarepo/components';

export const Home = () => {
  return (
    <Layout.Column>
      <Card size="medium">
        <Card.Header title="여기는 실험실 입니다."
          subtitle='이것저것 테스트 합니다.'/>
  
        <Card.Content>
          <Flex.Column gap={10}>
            <Typography variant="label">리덕스 툴킷 실험실</Typography>
            <Button variant='primary' title='REDUX_TOOLKIT' />
          </Flex.Column>
        </Card.Content>
      </Card>
    </Layout.Column>
  );
}
