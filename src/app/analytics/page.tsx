import { Container, SimpleGrid } from '@mantine/core';
import BalanceAnalytics from "./balanceAnalytics/BalanceAnalytics";
import Cards from "./cards/Cards";

export default function Dashboard() {

    return (
        <Container mr={150} size="xl" py="xl">
            <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
                <div>
                    <Cards />
                </div>
                <div style={{ 
                    gridColumn: 'span 2', 
                    marginLeft: '320px',
                    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
                    paddingLeft: '20px'
                }}>
                    <BalanceAnalytics />
                </div>
            </SimpleGrid>
        </Container>
    ) 
}