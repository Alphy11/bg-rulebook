import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import { Rule } from '../../testUtils/content';
import React, { ReactNode, useContext } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { SelectedItemContext } from '../Store';
import { ContentBody, TitleBody } from '../Text';

interface RuleRowProps {
    rule: Rule;
}
function IDBody({ children }: { children: ReactNode }) {
    const padContent =
        children && typeof children === 'string' && children.match(/[a-z]/i);
    return (
        <div className={`pr-1 ${padContent ? 'mr-[20%]' : ''}`}>{children}</div>
    );
}

export function RuleRow({ rule }: RuleRowProps) {
    const { additional = {}, content, subtree } = rule;

    const { pushSelectedItem } = useContext(SelectedItemContext);
    const hasChildren = !!rule.subtree?.length;

    return (
        <>
            <SwipeableListItem threshold={0.4}>
                <div
                    className="w-full border-b border-black p-2"
                    onClick={
                        hasChildren ? () => pushSelectedItem(rule) : undefined
                    }
                >
                    <div className="flex">
                        <div className="flex flex-1 flex-wrap">
                            {additional.indexer && (
                                <IDBody> {additional.indexer}</IDBody>
                            )}
                            <div className="min-w-[85%] flex-1">
                                {additional.title && (
                                    <TitleBody>{additional.title}</TitleBody>
                                )}
                                {!!content.length && (
                                    <ContentBody content={content} />
                                )}
                            </div>
                        </div>
                        {!!subtree && (
                            <div className="flex items-center justify-center">
                                <div className="pl-1">
                                    <BsChevronRight />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </SwipeableListItem>
        </>
    );
}
