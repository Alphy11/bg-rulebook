import { Rule } from '../testUtils/content';
import { ContentBody, TitleBody } from './Text';

export type RuleDisplayProps = {
    rule: Rule;
};

export function RuleDisplay({ rule }: RuleDisplayProps) {
    const { additional, content } = rule;
    return (
        <div className="px-1.5 pb-4">
            <TitleBody>
                {additional?.indexer || ''} {additional?.title || ''}
            </TitleBody>

            <ContentBody content={content} />
        </div>
    );
}
