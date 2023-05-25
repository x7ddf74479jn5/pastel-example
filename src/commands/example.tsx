import React from 'react';
import {Text} from 'ink';
import zod from 'zod';
import {argument} from 'pastel';

export const args = zod.tuple([
	zod
		.number()
		.default(1024)
		.describe(
			argument({
				name: 'number',
				description: 'Some number',
				defaultValueDescription: '1,204',
			}),
		),
]);

type Props = {
	args: zod.infer<typeof arguments>;
};

export default function Example({args}: Props) {
	return <Text>Some number = {args[0]}</Text>;
}
