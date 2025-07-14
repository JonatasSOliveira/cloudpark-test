import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ServiceFacade } from '@/application/facades/ServiceFacade';
import { DefaultList } from '@/presentation/components/organisms/DefaultList';
import { FloatingButton } from '@/presentation/components/atoms/FloatingButton';
import { DefaultHeader } from '@/presentation/components/atoms/DefaultHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/presentation/navigation/AppNavigator';
import { useTicketStore } from '@/shared/stores/ticket.store';
import { TicketStatusLabels } from '@/domain/dtos/ticket/TicketStatus.enum';
import { InfoCard } from '@/presentation/components/molecule/InfoCard';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketList'>;

export const TicketListPage: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { tickets, setTickets } = useTicketStore();

  const loadTickets = async () => {
    setLoading(true);
    const ticketResult = await ServiceFacade.ticketService.listAll();
    if (ticketResult.isFailure()) {
      return;
    }

    setTickets(ticketResult.value);
    setLoading(false);
  };

  const goToTicketForm = () => {
    navigation.navigate('TicketForm');
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-grayBg">
      <DefaultHeader title="Chamados" />
      <View className="relative flex-1 px-4 py-4">
        <DefaultList
          data={tickets}
          isLoading={loading}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InfoCard
              title={item.title}
              subtitle={TicketStatusLabels[item.status]}
              metadata={new Date(item.createdAt).toLocaleDateString()}
            />
          )}
          emptyComponent={
            <Text className="mt-8 text-center text-gray-500">Nenhum chamado encontrado.</Text>
          }
        />
        <FloatingButton onPress={goToTicketForm} />
      </View>
    </SafeAreaView>
  );
};
