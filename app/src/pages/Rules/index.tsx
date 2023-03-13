import { Heriarchy } from '../../components/Heirarchy';
import TwilightCoreRules from '../../content/POKRules.json';
import FactionInfo from '../../content/FactionList.json';
import { Search, SearchProvider } from '../../components/Search';
import { StoreProvider } from '../../components/Store';
import { Header } from '../../components/Header';
import { Rule } from '../../testUtils/content';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TwilightImperiumRules = [
    ...TwilightCoreRules,
    {
        id: 'factions',
        additional: {
            title: 'FACTIONS',
        },
        content: ['Comprehensive list of factions and abilities'],
        type: 'root',
        subtree: FactionInfo,
    } as Rule,
];
const rulesStub: Record<string, Rule[]> = {
    'twilight-imperium-4': TwilightImperiumRules,
};

export function RulesPage() {
    const { game } = useParams();
    const [rules, setRules] = useState<null | Rule[]>();
    useEffect(() => {
        if (game) {
            setRules(rulesStub[game]);
        }
    }, [setRules, game]);
    return (
        <SearchProvider>
            <StoreProvider>
                <div className="flex h-full flex-col">
                    <Header />
                    <Search />
                    {rules ? <Heriarchy rules={rules} /> : null}
                </div>
            </StoreProvider>
        </SearchProvider>
    );
}
