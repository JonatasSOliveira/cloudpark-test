import { Text, View } from "react-native"
import { Button } from "@/presentation/components/atoms/Button"
import { SafeAreaView } from "react-native-safe-area-context"
import { Input } from "@/presentation/components/atoms/Input"

export const LoginPage: React.FC = () => {
  return <SafeAreaView className="flex-1 justify-center items-center gap-8 py-4 px-8">
    <Text >Tela de Login</Text>
    <View className="flex gap-4 w-full">
      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorMessage=""
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
      />
    </View>
    <Button title="Entrar" />
  </SafeAreaView>
}