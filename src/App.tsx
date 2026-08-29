import FileTree, { Item } from './components/ui/file-tree';

const items: Item[] = [
	{
		name: 'src',
		type: 'folder',
		children: [
			{
				name: 'components',
				type: 'folder',
				children: [{ name: 'file-tree.tsx', type: 'file' }],
			},
			{ name: 'App.tsx', type: 'file' },
			{ name: 'main.tsx', type: 'file' },
		],
	},
	{ name: 'package.json', type: 'file' },
];

function App() {
	return <FileTree items={items} />;
}

export default App;
