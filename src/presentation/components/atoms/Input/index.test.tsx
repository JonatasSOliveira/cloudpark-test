import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from './index';

describe('Input', () => {
  it('deve renderizar label, placeholder e permitir digitação', () => {
    const onChangeText = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Input label="Email" placeholder="Digite seu email" value="" onChangeText={onChangeText} />
    );

    expect(getByText('Email')).toBeTruthy();
    const input = getByPlaceholderText('Digite seu email');
    fireEvent.changeText(input, 'teste@exemplo.com');
    expect(onChangeText).toHaveBeenCalledWith('teste@exemplo.com');
  });

  it('deve exibir mensagem de erro se fornecida', () => {
    const { getByText } = render(
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        value=""
        errorMessage="Campo obrigatório"
        onChangeText={() => {}}
      />
    );

    expect(getByText('Campo obrigatório')).toBeTruthy();
  });
});
