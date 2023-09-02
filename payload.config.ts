import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import { Projects } from './collections/Projects';
import { Media } from './collections/Media';
import { Experiences } from './collections/Experiences';
import { Logo } from './components/Logo';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
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
  collections: [
    Projects,
    Media,
    Experiences,
  ],
});
