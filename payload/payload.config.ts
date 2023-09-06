import path from 'path';
import { buildConfig } from 'payload/config';
import { Projects } from './collections/Projects';
import { Media } from './collections/Media';
import { Experiences } from './collections/Experiences';
import { Logo } from '@/components/Logo';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export default buildConfig({
  collections: [
    Projects,
    Media,
    Experiences,
  ],
  admin: {
    meta: {
      titleSuffix: "- Altay Batuhan",
      favicon: "/images/favicon-dark.ico",
      ogImage: "/images/transparent-logo.png",
    },
    components: {
      graphics: {
        Logo: Logo,
        Icon: Logo,
      },
    },
  },
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
              region: process.env.S3_REGION,
            },
            bucket: process.env.S3_BUCKET || '',
          }),
        },
      },
    }),
  ],
});
