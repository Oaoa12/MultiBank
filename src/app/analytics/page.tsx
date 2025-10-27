import { Container, SimpleGrid } from '@mantine/core';
import BalanceAnalytics from "./balanceAnalytics/BalanceAnalytics";
import Cards from "./cards/Cards";

export default function Dashboard() {

    return (
        <Container mr={150} size="xl" py="xl">
            <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
                <div style={{ gridColumn: 'span 2' }}>
                    <BalanceAnalytics />
                </div>
                <div>
                    <Cards />
                </div>
            </SimpleGrid>
        </Container>
    ) 
}