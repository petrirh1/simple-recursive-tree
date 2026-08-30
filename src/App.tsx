import FileTree, { Item } from './components/ui/file-tree';

const items: Item[] = [
	{
		name: 'public',
		type: 'folder',
		children: [{ name: 'recursive-tree.svg', type: 'file' }],
	},
	{
		name: 'src',
		type: 'folder',
		children: [
			{
				name: 'assets',
				type: 'folder',
				children: [{ name: 'react.svg', type: 'file' }],
			},
			{
				name: 'components/ui',
				type: 'folder',
				children: [{ name: 'file-tree.tsx', type: 'file' }],
			},
			{
				name: 'lib',
				type: 'folder',
				children: [{ name: 'utils.ts', type: 'file' }],
			},
			{ name: 'App.tsx', type: 'file' },
			{ name: 'index.css', type: 'file' },
			{ name: 'main.tsx', type: 'file' },
			{ name: 'vite-env.d.ts', type: 'file' },
		],
	},
	{ name: '.eslintrc.cjs', type: 'file' },
	{ name: '.gitignore', type: 'file' },
	{ name: 'components.json', type: 'file' },
	{ name: 'index.html', type: 'file' },
	{ name: 'package-lock.json', type: 'file' },
	{ name: 'package.json', type: 'file' },
	{ name: 'postcss.config.js', type: 'file' },
	{ name: 'README.md', type: 'file' },
	{ name: 'tailwind.config.js', type: 'file' },
	{ name: 'tsconfig.app.json', type: 'file' },
	{ name: 'tsconfig.json', type: 'file' },
	{ name: 'tsconfig.node.json', type: 'file' },
	{ name: 'vite.config.ts', type: 'file' },
];

function App() {
	return <FileTree items={items} />;
}

export default App;
