import Image from 'next/image';

import { Avatar } from '@/components/shared';
import { ScrollArea, ScrollBar } from '@/components/ui';

import { IPost } from '@/shared/types/post.interface';

import { formatDate } from '@/utils/format-date';

interface Props {
	post: IPost;
}

export function PostCard({ post }: Props) {
	return (
		<div
			className={
				'px-3 sm:px-6 py-3 border-b last-of-type:border-b-0 flex gap-x-2'
			}
		>
			<div className='shrink-0'>
				<Avatar src={post.user.avatar} />
			</div>

			<div className={'space-y-1.5'}>
				<div className={'flex gap-2 leading-none'}>
					<h4 className={'font-semibold'}>{post.user.username}</h4>

					<p className={'text-muted-foreground'}>
						{formatDate(post.createdAt)}
					</p>
				</div>

				<div>
					<pre
						className={'font-sans leading-none'}
						style={{
							marginBottom: post.images.length > 0 ? '8px' : 0,
						}}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{post.images.length > 0 && (
						<ScrollArea className={'w-full rounded-xl pb-3'}>
							<div className={'flex gap-x-4'}>
								{post.images.map((item) => (
									<Image
										key={item}
										src={item}
										alt={item}
										width={200}
										height={300}
										className={
											'block aspect-auto object-cover size-auto rounded-xl border'
										}
										priority
									/>
								))}
							</div>

							<ScrollBar orientation={'horizontal'} />
						</ScrollArea>
					)}
				</div>
			</div>
		</div>
	);
}
