import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { ICartState } from '../../redux/modules/cart/types';
import { IState } from '../../redux';

import {
  Content,
  Container,
  GoBackButton,
  Header,
  TitleContainer,
  Description,
  Title,
  BuyButtonText,
  Card,
  CardTextContainer,
  CardText,
  CardTitle,
  QuantityContainer,
  QuantityButton,
  QuantityText,
  CardInformation,
  CardImage,
  AddButton,
  AddButtonText,
  BuyContainer,
  TrashContainer,
  Button,
  ButtonText,
  TotalContainer,
  TotalText,
  TotalValue,
} from './styles';

const Cart: React.FC = () => {
  const navigator = useNavigation();

  const handleGoBack = useCallback(() => {
    navigator.goBack();
  }, [navigator]);

  const { cart } = useSelector<IState, ICartState>(state => state.cart);

  return (
    <Container>
      <Header>
        <GoBackButton onPress={handleGoBack} activeOpacity={0.6}>
          <AntIcon name="arrowleft" size={20} color="#ff3647" />
        </GoBackButton>
      </Header>
      <TitleContainer>
        <Title>Bem-vindo ao seu carrinho!</Title>
        <Description>
          Aqui você pode alterar a quantidade e excluir produtos do carrinho.
          Quando terminar, é só clicar em Fechar Carrinho!
        </Description>
      </TitleContainer>
      <Content>
        {cart.cart_item &&
          cart.cart_item.map(item => (
            <Card key={item.id}>
              <TrashContainer>
                <MaterialIcon name="delete" size={20} color="#ff3647" />
              </TrashContainer>
              <CardInformation>
                <CardTextContainer>
                  <CardTitle>{item.product.name}</CardTitle>
                  <CardText>{item.product.short_description}</CardText>
                </CardTextContainer>
                <CardImage
                  style={{ resizeMode: 'center' }}
                  source={require('../../assets/arroz.jpg')}
                />
              </CardInformation>
              <BuyContainer>
                <QuantityContainer>
                  <QuantityButton>
                    <BuyButtonText>-</BuyButtonText>
                  </QuantityButton>
                  <QuantityText>{item.quantity}</QuantityText>
                  <QuantityButton>
                    <BuyButtonText>+</BuyButtonText>
                  </QuantityButton>
                </QuantityContainer>
                <AddButton enabled={false}>
                  <AddButtonText>Confirmar</AddButtonText>
                  <AddButtonText>R$17,90</AddButtonText>
                </AddButton>
              </BuyContainer>
            </Card>
          ))}
        <TotalContainer>
          <TotalText>Total:</TotalText>
          <TotalValue>R$300,50</TotalValue>
        </TotalContainer>
        <Button>
          <ButtonText>Fechar Carrinho</ButtonText>
          <Entypo
            name="chevron-right"
            size={18}
            color="#fff"
            style={{ marginRight: 8 }}
          />
        </Button>
      </Content>
    </Container>
  );
};

export default Cart;
