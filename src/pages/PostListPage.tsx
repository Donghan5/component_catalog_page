import { useEffect, useState } from 'react';
import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/atoms/Input';
import { CreatePostModal } from '../components/molecules/CreatePostModal';

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export const PostListPage = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const [searchTerm, setSearchTerm] = useState('');

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const [editingPost, setEditingPost] = useState<Post | null>(null);

	const navigate = useNavigate();

	const fetchPosts = async () => {
		try {
			setIsLoading(true);
			setError(null);

			const response = await fetch('https://jsonplaceholder.typicode.com/posts');

			if (!response.ok) {
				throw new Error('Failed to fetch posts');
			}

			const data = await response.json();
			setPosts(data);
		} catch (error) {
			setError(error instanceof Error ? error.message : 'An unknown error occurred');
		} finally {
			setIsLoading(false);
		}
	}

	const handleSavePost = async (title: string, body: string) => {		
		if (editingPost) {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
					method: 'PUT',
					body: JSON.stringify({
						id: editingPost.id,
						title,
						body,
						userId: editingPost.userId,
					}),
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
					},
				});

				const updatedPost = await response.json();

				setPosts((prev) => prev.map(post => post.id === editingPost.id ? updatedPost : post));
				alert('Updated');
			} catch (error) {
				alert('Failed to update post');
			}
		} else {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					body: JSON.stringify({
						title,
						body,
						userId: 1,
					}),
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
					},
				});

				const newPost = await response.json();

				setPosts((prev) => [newPost, ...prev]);

				alert('Post created successfully (Actually, not saved. Why? It is mock data!');
			} catch (error) {
				console.error('Error creating post:', error);
				alert('Failed to create post');
			}
		}
	};

	const openEditModal = (post: Post, e: React.MouseEvent) => {
		e.stopPropagation();
		setEditingPost(post);
		setIsCreateModalOpen(true);
	};

	const openCreateModal = () => {
		setEditingPost(null);   // indicates that we are creating a new post
		setIsCreateModalOpen(true);
	};

	const handleDeletePost = async (id: number, e: React.MouseEvent) => {
		e.stopPropagation();

		if (!window.confirm('Are you sure to delete this post?')) return;

		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
				method: 'DELETE',
			});

			if (response.ok) {
				setPosts((prev) => prev.filter((post) => post.id !== id));
				alert('Deleted!');
			} else {
				throw new Error('Failed to delete post');
			}
		} catch (error) {
			alert('Failed to delete post');
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="space-y-6">
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
			<h2 className="text-2xl font-bold">Post List</h2>
			<Button size="sm" onClick={fetchPosts} disabled={isLoading}>
				Refresh
			</Button>
			<Button size="sm" onClick={() => setIsCreateModalOpen(true)}>
				Create Post
			</Button>
			</div>

			<div className="max-w-md">
			<Input 
				placeholder="Search posts..." 
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			</div>
		</div>

		{isLoading && <div className="text-center py-10">Loading... ⏳</div>}
		
		{error && (
			<div className="p-4 bg-red-50 text-red-600 rounded-lg">Error: {error}</div>
		)}

		{!isLoading && !error && (
			<>
			<p className="text-sm text-gray-500 mb-2">
				Total {filteredPosts.length} posts.
			</p>
			
			{filteredPosts.length === 0 ? (
				<div className="text-center py-10 text-gray-400 bg-gray-50 rounded-lg">
				No results found.
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{filteredPosts.map((post) => (
					<div 
					key={post.id} 
					onClick={() => navigate(`/components/post-list/${post.id}`)}
					className="cursor-pointer"
					>
					<Card 
						title={post.title} 
						className="hover:shadow-xl transition-shadow duration-200 h-full hover:-translate-y-1 transform"
					>
						<p className="text-gray-600 text-sm line-clamp-3">
						{post.body}
						</p>
						<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
							<Button
								size="sm"
								variant="secondary"
								onClick={(e) => openEditModal(post, e)}
							>
								Edit
							</Button>
							<Button
								size="sm"
								variant="danger"
								onClick={(e) => handleDeletePost(post.id, e)}
							>
								Delete
							</Button>
						</div>
					</Card>
					</div>
				))}
				</div>
			)}
			</>
		)}

		<CreatePostModal
			isOpen={isCreateModalOpen}
			onClose={() => setIsCreateModalOpen(false)}
			onSubmit={handleSavePost}
			postToEdit={editingPost}
		/>
		</div>
  );
};