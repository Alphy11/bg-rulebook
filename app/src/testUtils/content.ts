import { faker } from '@faker-js/faker';

function fakeTitle(): string {
    return faker.lorem.sentence();
}
function fakeContent() {
    return new Array(Math.floor(Math.random() * 4) + 1)
        .fill(0)
        .map(() => faker.lorem.sentence());
}
function fakeRule(ruleNumber: string, depth: number) {
    return {
        type: 'some',
        id: ruleNumber,
        additional: {
            title: fakeTitle(),
        },
        content: fakeContent(),
        ...(depth > 0 && {
            subtree: fakeRules(ruleNumber, depth - 1),
        }),
    };
}
function fakeRules(ruleNumber: string, depth: number): Rule[] {
    return new Array(Math.floor(Math.random() * 4) + 1)
        .fill(0)
        .map((_, arrayIndex) => fakeRule(`${ruleNumber}.${arrayIndex}`, depth));
}

export interface Rule {
    id: string;
    additional?: {
        title?: string;
        indexer?: string;
    };
    content: string[];
    type: string;
    subtree?: Rule[];
}

export const random: Rule[] = new Array(4)
    .fill(0)
    .map((_, arrayIndex) => fakeRule(String(arrayIndex + 1), 2));
