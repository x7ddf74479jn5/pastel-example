import React from 'react';
import {Text} from 'ink';
import zod from 'zod';

export const alias = 'd';

export const options = zod.object({
	name: zod.string().describe('Server name'),
	os: zod.enum(['Ubuntu', 'Debian']).describe('Operating system'),
	memory: zod.number().describe('Memory size'),
	region: zod.enum(['waw', 'lhr', 'nyc']).describe('Region'),
});

type Props = {
	options: zod.infer<typeof options>;
};

export default function Deploy({options}: Props) {
	console.log(options);
	return (
		<Text>
			Deploying a server named "{options.name}" running {options.os} with memory
			size of {options.memory} MB in {options.region} region
		</Text>
	);
}
