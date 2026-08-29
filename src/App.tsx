import FileTree, { Item } from './components/ui/file-tree';

const items: Item[] = [
	{
		name: 'Photography',
		type: 'folder',
		children: [
			{
				name: 'jpeg',
				type: 'folder',
				children: [
					{
						name: '2023',
						type: 'folder',
						children: [
							{ name: 'DSC0001.jpg', type: 'file' },
							{ name: 'DSC0002.jpg', type: 'file' },
							{ name: 'DSC0003.jpg', type: 'file' },
							{ name: 'DSC0004.jpg', type: 'file' },
						],
					},
					{
						name: '2024',
						type: 'folder',
						children: [
							{ name: 'DSC0005.jpg', type: 'file' },
							{ name: 'DSC0006.jpg', type: 'file' },
							{ name: 'DSC0007.jpg', type: 'file' },
							{ name: 'DSC0008.jpg', type: 'file' },
							{ name: 'DSC0009.jpg', type: 'file' },
							{ name: 'DSC0010.jpg', type: 'file' },
							{ name: 'DSC0011.jpg', type: 'file' },
							{ name: 'DSC0012.jpg', type: 'file' },
							{ name: 'DSC0013.jpg', type: 'file' },
							{ name: 'tmp', type: 'folder', children: [{ name: 'junk.jpg', type: 'file' }] },
						],
					},
					{
						name: '2025',
						type: 'folder',
						children: [
							{ name: 'DSC0014.jpg', type: 'file' },
							{ name: 'DSC0015.jpg', type: 'file' },
							{ name: 'DSC0016.jpg', type: 'file' },
							{ name: 'DSC0017.jpg', type: 'file' },
							{ name: 'DSC0018.jpg', type: 'file' },
							{ name: 'DSC0019.jpg', type: 'file' },
							{ name: 'DSC0020.jpg', type: 'file' },
						],
					},
					{
						name: '2026',
						type: 'folder',
						children: [
							{ name: 'DSC0021.jpg', type: 'file' },
							{ name: 'DSC0022.jpg', type: 'file' },
						],
					},
				],
			},
			{
				name: 'raw',
				type: 'folder',
				children: [
					{
						name: '2026',
						type: 'folder',
						children: [
							{ name: 'DSC0014.arw', type: 'file' },
							{ name: 'DSC0015.arw', type: 'file' },
							{ name: 'DSC0016.arw', type: 'file' },
							{ name: 'DSC0017.arw', type: 'file' },
							{ name: 'DSC0018.arw', type: 'file' },
							{ name: 'DSC0019.arw', type: 'file' },
							{ name: 'DSC0020.arw', type: 'file' },
						],
					},
				],
			},
		],
	},
];

function App() {
	return <FileTree items={items} />;
}

export default App;
