import React, { useContext } from 'react';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import { Rule } from '../../testUtils/content';
import { RuleDisplay } from '../RuleDisplay';
import { SelectedItemContext } from '../Store';
import { RuleRow } from './RuleRow';

export type HeriarchyComponentProps = {
    rules: Rule[];
    selectedRule?: Rule;
};

export function HeriarchyComponent({ rules }: HeriarchyComponentProps) {
    const { selectedItem } = useContext(SelectedItemContext);
    return (
        <>
            {selectedItem && (
                <>
                    <div className="flex border-b border-black pt-3">
                        <RuleDisplay rule={selectedItem} />
                    </div>
                </>
            )}
            <SwipeableList>
                {(selectedItem === null ? rules : selectedItem.subtree)
                    ?.filter((rule: Rule) => rule.type !== 'related topics')
                    .map((rule: Rule) => (
                        <RuleRow key={rule.id} rule={rule} />
                    ))}
            </SwipeableList>
        </>
    );
}
