import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React, { ReactNode } from 'react';

import { Container } from '@/components/shared';

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants';

import './globals.css';

const pragmatica = localFont({
	src: '../fonts/Pragmatica.ttf',
	variable: '--font-pragmatica-sans',
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={pragmatica.variable}>
				<Container>{children}</Container>
			</body>
		</html>
	);
}
