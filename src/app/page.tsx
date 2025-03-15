import Image from 'next/image';

export default function Home() {
	return (
		<div className={'max-w-lg mx-auto mt-20 mb-4 space-y-2 px-4'}>
			<h1 className={'text-2xl'}>История Каната и Айдай:</h1>

			<p className={'text-pretty text-wrap'}>
				Любовь, которая преодолевает расстояния Каждый человек мечтает встретить
				того самого, с кем время летит незаметно, а каждое мгновение наполняется
				теплом и радостью. Канат и Айдай – двое людей, чья встреча стала началом
				невероятной истории, полной любви, нежности и мечтаний о будущем. Начало
				пути Канат – целеустремлённый и талантливый фронтенд-разработчик,
				который постоянно работает над своим развитием. Его дни наполнены кодом,
				задачами и стремлением к совершенству. Но даже в этом бешеном ритме он
				нашёл время для самого главного – любви. Айдай – нежная, обаятельная и
				невероятно милая девушка с очаровательным ростом в 150 см, что делает её
				ещё более особенной в глазах Каната.
			</p>

			<div className={'flex gap-2 flex-wrap'}>
				<Image
					className={'rounded-xl border flex-1 w-full sm:w-[45%] h-auto'}
					src={'/aidai.jpg'}
					alt={'Aidaika lubimka'}
					width={200}
					height={200}
					priority
				/>

				<Image
					className={'rounded-xl border flex-1 w-full sm:w-[45%] h-auto'}
					src={'/kanat.jpg'}
					alt={'kanatka'}
					width={200}
					height={200}
					priority
				/>
			</div>

			<p>
				Она покорила его сердце своей добротой, искренностью и лёгкостью, с
				которой она освещает всё вокруг. Время, проведённое вместе Когда они
				вместе, мир словно перестаёт существовать. Прогулки, кино, разговоры обо
				всём и ни о чём – в этих простых радостях кроется настоящая магия их
				отношений. Канат чувствует, что рядом с Айдай он может быть самим собой,
				а её присутствие делает его по-настоящему счастливым. Но самое главное –
				это понимание и уважение, которые лежат в основе их любви.
			</p>
		</div>
	);
}
