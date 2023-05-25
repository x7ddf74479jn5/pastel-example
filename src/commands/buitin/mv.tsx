import React from 'react';
import {Text} from 'ink';
import zod from 'zod';

export const args = zod.tuple([zod.string(), zod.string()]);

type Props = {
	args: zod.infer<typeof arguments>;
};

export default function Move({args}: Props) {
	return (
		<Text>
			Moving from {args[0]} to {args[1]}
		</Text>
	);
}
