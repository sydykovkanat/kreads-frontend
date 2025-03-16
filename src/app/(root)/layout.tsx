import React, { PropsWithChildren } from 'react';

import { Container, Header } from '@/components/shared';
import { Footer } from '@/components/shared/footer';

interface Props extends PropsWithChildren {
	modals: React.ReactNode;
}

export default function Layout({ modals, children }: Props) {
	return (
		<>
			{modals}
			<Header />

			<Container>{children}</Container>

			<Footer />
		</>
	);
}
