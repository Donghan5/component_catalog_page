import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { CreatePostModal } from '../components/molecules/CreatePostModal';

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export const PostDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error("Failed to fetch post", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	const handleDelete = async () => {
		if (!window.confirm('Are you sure to delete this post?')) return;

		try {
			await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
				method: 'DELETE',
			});
			alert('Deleted!');
		} catch (error) {
			alert('Failed to delete post');
		}
	};

	const handleUpdate = async (title: string, body: string) => {
		if (!post) return;

		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					id: post.id,
					title,
					body,
					userId: post.userId,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			const updatedData = await response.json();
			setPost(updatedData);
			alert('Updated!');
		} catch (error) {
			alert('Failed to update post');
		}
	};

	if (isLoading) return <div className="p-8 text-center">Loading...</div>;
	if (!post) return <div className="p-8 text-center">Post not found</div>;

	return (
		<div className="max-w-2xl mx-auto space-y-6">
			<Button variant="primary" onClick={() => navigate(-1)}>
				Back to list
			</Button>

			<Button
				variant="danger"
				onClick={handleDelete}
			>
				Delete
			</Button>
			
			<Button
				variant="secondary"
				onClick={() => setIsEditModalOpen(true)}
			>
				Edit
			</Button>

			<Card title={`Post #${post.id}`}>
				<h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
				<p className="text-gray-600">{post.body}</p>
			</Card>


			<CreatePostModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				onSubmit={handleUpdate}
				postToEdit={post}
			/>
		</div>
	);
};