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
    manifest: 'https://plugin.askyourpdf.com/.well-known/ai-plugin.json',
    path: 'ask-your-pdf',
    tags: ['pdf', 'document', 'web'],
  },
  {
    manifest:
      'https://raw.githubusercontent.com/GithuBarry/chat-plugin-search-engine/main/public/manifest.json',
    path: 'serper',
    tags: ['web', 'search'],
  },
];

export default PluginList;
