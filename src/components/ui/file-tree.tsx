import { ChevronRight, Folder, FileImage } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ItemType = 'folder' | 'file';

export type Item = {
	name: string;
	type: ItemType;
	children?: Item[];
};

const FileTree = ({ items }: { items: Item[] }) => {
	return (
		<ul className='p-2 w-fit'>
			{items.map((file) => (
				<Item item={file} key={file.name} />
			))}
		</ul>
	);
};

const Item = ({ item }: { item: Item }) => {
	const [isOpen, setIsOpen] = useState(false);

	const isClickable = () => {
		return item.children?.length && isFolder();
	};

	const isFolder = () => item.type === 'folder';
	const isFile = () => item.type === 'file';

	return (
		<li key={item.name} className='mt-1.5 text-gray-700 dark:text-gray-400'>
			<span
				role={`${isClickable() ? 'button' : 'none'}`}
				onClick={() => setIsOpen(!isOpen)}
				className={`flex items-center gap-1.5 hover:bg-accent transition-all w-fit rounded-sm px-1 ${
					isFile() && 'ml-4'
				}`}>
				{isClickable() && (
					<ChevronRight
						className={`size-3 transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
						strokeWidth={3}
					/>
				)}
				{isFolder() ? (
					<Folder className='size-4' />
				) : (
					<FileImage className='size-4 text-gray-500' />
				)}
				<p>{item.name}</p>
			</span>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						layout
						initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='ml-5'>
						{item.children?.map((item) => (
							<Item item={item} key={item.name} />
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</li>
	);
};

export default FileTree;
