import { Heriarchy } from './components/Heirarchy';
import TwilightCoreRules from './content/POKRules.json';
import FactionInfo from './content/FactionList.json';
import { Search, SearchProvider } from './components/Search';
import { StoreProvider } from './components/Store';
import { Header } from './components/Header';

export function HomePage() {
    return (
        <SearchProvider>
            <StoreProvider>
                <div className="flex flex-col h-full">
                    <Header />
                    <Search />
                    <Heriarchy
                        rules={[
                            ...TwilightCoreRules,
                            {
                                id: 'factions',
                                additional: {
                                    title: 'FACTIONS',
                                },
                                content: [
                                    'Comprehensive list of factions and abilities',
                                ],
                                type: 'root',
                                subtree: FactionInfo,
                            } as any,
                        ]}
                    />
                </div>
            </StoreProvider>
        </SearchProvider>
    );
}
