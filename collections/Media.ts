import { CollectionConfig } from "payload/types"

export type TMedia = {
    filename: string
    width: number
    height: number
    alt: string
    sizes: {
        card?: {
            filename: string
            width: number
            height: number
        }
        feature?: {
            filename: string
            width: number
            height: number
        }
    }
    url: string,
}

export const Media: CollectionConfig = {
    slug: 'media',
	access: {
		read: () => true,
	},
    upload: {
        adminThumbnail: 'card',
        imageSizes: [
            {
                name: 'card',
                width: 640,
                height: 480,
            },
            {
                name: 'feature',
                width: 1024,
                height: 512,
            },
        ],
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
    ],
};