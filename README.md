# Simple Recursive Tree

A modern, interactive, and animated recursive file tree component built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Recursive Rendering**: Easily render nested directory and file hierarchies of arbitrary depth.
- **Smooth Animations**: Animated expand/collapse transitions powered by `framer-motion`.
- **Clean UI & Icons**: Crisp directory and file icons using `lucide-react`.
- **Type-Safe**: Full TypeScript support with explicit data types for tree nodes.
- **Customizable Styling**: Styled with Tailwind CSS for effortless customization.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/petrirh1/simple-recursive-tree.git
   cd simple-recursive-tree
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at the local URL provided by Vite (typically `http://localhost:5173`).

---

## 💻 Usage Example

```tsx
import FileTree, { Item } from './components/ui/file-tree';

const fileStructure: Item[] = [
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

export default function App() {
	return (
		<div className='p-4'>
			<FileTree items={fileStructure} />
		</div>
	);
}
```
