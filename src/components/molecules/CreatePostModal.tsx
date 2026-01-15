import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

interface CreatePostModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (title: string, body: string) => void;
	postToEdit?: Post | null;
}

export const CreatePostModal = ({
	isOpen,
	onClose,
	onSubmit,
	postToEdit
}: CreatePostModalProps) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (isOpen && postToEdit) {
			setTitle(postToEdit.title);
			setBody(postToEdit.body);
		} else if (isOpen && !postToEdit) {
			setTitle('');
			setBody('');
		}
	}, [isOpen, postToEdit]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!title.trim() || !body.trim()) {
			alert('Please enter both title and body');
			return;
		}

		setIsSubmitting(true);

		await onSubmit(title, body);

		setIsSubmitting(false);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={postToEdit ? 'Edit Post' : 'Create a new post'}>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input
					label="title"
					placeholder="Enter the post title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<div className="flex flex-col gap-1.5">
					<label className="text-sm font-medium text-gray-700">Body</label>
					<textarea
						className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all resize-none h-32"
						placeholder="Input the body of the post"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>

				<div className="flex justify-end gap-2 mt-4">
					<Button
						type="button"
						variant="secondary"
						onClick={onClose}
						disabled={isSubmitting}
					>
						Cancel
					</Button>
					<Button
						type="submit"
						disabled={isSubmitting}
					>
						{postToEdit ? 'Update Post' : 'Create Post'}
					</Button>

				</div>
			</form>
		</Modal>
	);
};