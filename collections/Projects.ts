import { CollectionConfig } from 'payload/types';
import formatSlug from '../util/formatSlug';
import { TMedia } from './Media';

export const Projects: CollectionConfig = {
	slug: 'projects',
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			required: true,
			unique: true,
			index: true,
			admin: {
				position: 'sidebar',
			},
			hooks: {
				beforeValidate: [formatSlug('title')],
			},
		},
		{
			name: 'content',
			label: "Content",
			type: 'richText',
		},
		{
			name: 'thumbnail',
			label: "Thumbnail",
			type: "upload",
			relationTo: "media",
			admin: {
				position: 'sidebar',
			},
			required: true,
		},
	],
};

export type TProject = {
	id: string,
	title: string,
	slug: string,
	content: Leaf[],
	thumbnail: TMedia,
}

export type Leaf = {
	type: string
	value?: {
		url: string
		alt: string
	}
	children?: Leaf[]
	url?: string
	[key: string]: unknown
}