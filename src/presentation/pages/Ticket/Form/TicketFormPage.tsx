import React, { useEffect, useReducer } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DefaultHeader } from '@/presentation/components/atoms/DefaultHeader';
import { Input } from '@/presentation/components/atoms/Input';
import { Textarea } from '@/presentation/components/atoms/TextArea';
import { Dropdown } from '@/presentation/components/atoms/Dropdown';
import { Button } from '@/presentation/components/atoms/Button';
import { ServiceFacade } from '@/application/facades/ServiceFacade';
import { RootStackParamList } from '@/presentation/navigation/AppNavigator';
import { formReducer, initialFormState } from './formReducer';
import { ValidationError } from '@/domain/errors/Validation.error';
import { useTicketStore } from '@/shared/stores/ticket.store';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketForm'>;

export const TicketFormPage: React.FC<Props> = ({ navigation }) => {
  const { addTicket } = useTicketStore();
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const loadCategories = async () => {
    dispatch({ type: 'setLoadingCategories', value: true });
    const res = await ServiceFacade.ticketCategoryService.listAll();
    dispatch({ type: 'setLoadingCategories', value: false });
    if (res.isFailure()) return;
    dispatch({ type: 'setCategories', categories: res.value });
  };

  const handleCreateTicket = async () => {
    dispatch({ type: 'setSubmitting', value: true });
    dispatch({ type: 'setErrors', errors: {} });

    const result = await ServiceFacade.ticketService.create({
      title: state.title,
      description: state.description,
      categoryId: state.categoryId,
    });

    dispatch({ type: 'setSubmitting', value: false });

    if (result.isFailure()) {
      if (result.error instanceof ValidationError) {
        dispatch({ type: 'setErrors', errors: result.error.fieldErrors });
      } else {
        Alert.alert('Atenção', result.error.message);
      }
      return;
    }

    addTicket(result.value);
    navigation.goBack();
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-grayBg">
      <DefaultHeader title="Abrir Chamado" showBackButton />
      <View className="flex-1 gap-4 px-8 pb-4 pt-12">
        <View className="flex-1 gap-4">
          <Input
            label="Título"
            placeholder="Digite o título"
            value={state.title}
            onChangeText={(text) => dispatch({ type: 'setField', field: 'title', value: text })}
            autoFocus
            errorMessage={state.fieldErrors.title}
          />

          <Textarea
            label="Descrição"
            placeholder="Digite a descrição"
            value={state.description}
            onChangeText={(text) =>
              dispatch({ type: 'setField', field: 'description', value: text })
            }
            errorMessage={state.fieldErrors.description}
          />

          <Dropdown<{ id: string; name: string }, 'id', 'name'>
            label="Categoria"
            data={state.categories}
            selectedId={state.categoryId}
            onSelect={(item) => dispatch({ type: 'setField', field: 'categoryId', value: item.id })}
            idKey="id"
            labelKey="name"
            placeholder="Escolha uma categoria"
            className="mb-4"
            isLoading={state.loadingCategories}
            errorMessage={state.fieldErrors.categoryId}
          />
        </View>
        <Button title="Salvar" onPress={handleCreateTicket} loading={state.isSubmitting} />
        <Button title="Cancelar" variant="ghost" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
