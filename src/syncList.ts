interface PluginItem {
  author?: string;
  homepage?: string;
  manifest: string;
  overrides?: {
    manifest?: { [key: string]: any };
    openapi?: { [key: string]: any };
  };
  path: string;
  tags?: string[];
}
const PluginList: PluginItem[] = [
  {
    manifest:
      'https://raw.githubusercontent.com/aipmhub/chat-plugin-serper/main/public/manifest.json',
    path: 'serper',
    tags: ['web', 'search'],
  },
];

export default PluginList;
