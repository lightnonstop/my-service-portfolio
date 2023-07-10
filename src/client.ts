import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

const config: ClientConfig = {
    projectId: import.meta.env.VITE_APP_SANITY_PROJECTID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-31',
    token: import.meta.env.VITE_APP_SANITY_PROJECT_TOKEN,
}
export const client = createClient(config);
const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source)