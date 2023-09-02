
import { CollectionConfig } from 'payload/types';
import { TMedia } from './Media';
import { Leaf } from '../components/RichText';

export const Experiences: CollectionConfig = {
	slug: 'experiences',
	admin: {
		useAsTitle: 'instutition',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'instutition',
			label: 'Instutition',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'logo',
			label: "Logo",
			type: "upload",
			relationTo: "media",
			admin: {
				position: 'sidebar',
			},
			required: true,
		},
		{
			name: 'location',
			label: 'Location',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'duration',
			label: 'Duration',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'role',
			label: 'Role',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'content',
			label: "Content",
			type: 'richText',
		},
	],
};

export type TExperience = {
	id: string,
	instutition: string,
	location: string,
	duration: string,
	role: string,
	logo: TMedia,
	content: Leaf[],
}
