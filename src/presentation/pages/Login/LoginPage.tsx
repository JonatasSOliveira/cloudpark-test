import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@/presentation/components/atoms/Button';
import { Input } from '@/presentation/components/atoms/Input';
import { FieldErrors } from '@/domain/errors/Field.error';
import { SignInRequestDTO } from '@/domain/dtos/auth/SignInRequest.dto';
import { ServiceFacade } from '@/application/facades/ServiceFacade';
import { ValidationError } from '@/domain/errors/Validation.error';
import { useAuthStore } from '@/shared/stores/auth.store';
import { RootStackParamList } from '@/presentation/navigation/AppNavigator';
import { LoginLogo } from '@/presentation/components/atoms/LoginLogo';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginPage: React.FC<Props> = ({ navigation }) => {
  const { setSession } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<SignInRequestDTO>>({});
  const [loading, setLoading] = useState(false);

  const goToTicketList = () => {
    navigation.replace('TicketList');
  };

  const handleSignIn = async () => {
    setLoading(true);
    setFieldErrors({});

    const result = await ServiceFacade.authService.signIn({ email, password });

    setLoading(false);

    if (result.isFailure()) {
      if (result.error instanceof ValidationError) {
        setFieldErrors(result.error.fieldErrors);
      } else {
        Alert.alert('Atenção', result.error.message);
      }
      return;
    }

    setSession(result.value);
    goToTicketList();
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-8 bg-primaryDark px-8 py-2">
      <LoginLogo />
      <View className="flex w-full gap-4 rounded-lg bg-white px-4 py-8 shadow-lg">
        <Input
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          errorMessage={fieldErrors.email}
          autoFocus
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          errorMessage={fieldErrors.password}
        />
        <Button title="Entrar" onPress={handleSignIn} loading={loading} />
      </View>
    </SafeAreaView>
  );
};
