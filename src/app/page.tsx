import Image from 'next/image';

export default function Home() {
	return (
		<div className={'max-w-lg mx-auto mt-20 mb-4 space-y-2 px-4'}>
			<h1 className={'text-2xl'}>История Каната и Айдай:</h1>

			<p>
				Каждый человек мечтает встретить <strong>того самого</strong>, с кем
				время летит незаметно, а каждое мгновение наполняется теплом и радостью.
			</p>

			<p>
				<strong>Канат и Айдай</strong> – двое людей, чья встреча стала началом
				невероятной истории, полной любви, нежности и мечтаний о будущем.
			</p>

			<p>
				<strong>Начало пути Канат</strong> – целеустремлённый и талантливый
				фронтенд-разработчик, который постоянно работает над своим развитием.
				Его дни наполнены кодом, задачами и стремлением к совершенству.
			</p>

			<p>
				Но даже в этом бешеном ритме он нашёл время для самого главного –&nbsp;
				<strong>любви</strong>.
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
				<strong>Айдай</strong> – нежная, обаятельная и невероятно милая девушка
				с очаровательным ростом в 150 см, что делает её ещё более особенной в
				глазах Каната.
			</p>

			<p>
				Время, проведённое <strong>вместе</strong> - когда они вместе, мир
				словно <strong>перестаёт существовать</strong>. Прогулки, кино,
				разговоры обо всём и ни о чём – в этих простых радостях кроется
				настоящая <strong>магия их отношений</strong>.
			</p>

			<p>
				Канат чувствует, что рядом с Айдай он может быть&nbsp;
				<strong>самим собой</strong>, а её присутствие делает его&nbsp;
				<strong>по-настоящему счастливым</strong>.
			</p>
		</div>
	);
}

/*



 */
