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
        adminThumbnail: ({ doc }) =>
          `https://personal-website-media.s3.us-west-2.amazonaws.com/${doc.filename}`,
        disableLocalStorage: true,
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            access: {
              create: () => false,
            },
            admin: {
              disabled: true,
            },
            hooks: {
              afterRead: [
                ({ data }) =>
                  `https://personal-website-media.s3.us-west-2.amazonaws.com/${data!.filename}`,
              ],
            },
          },
    ],
};