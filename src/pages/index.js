import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import {
	Hero,
	Intro,
	TextImage,
	Banner,
	Cards,
	Contact,
} from '@components/home'

import { content } from '@data/content'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero title={content.heroTitle} />
		<Intro
			title={content.introTitle}
			body={content.introBody}
			linkText={content.introLinkText}
			linkUrl={content.introLinkUrl}
		/>
		<TextImage
			title={content.aboutTitle}
			body={content.aboutBody}
			linkText={content.aboutButtonText}
			linkUrl={content.aboutButtonUrl}
		/>
		<Banner title={content.ctaTitle} />
		<Cards cardsTitle={content.cardsTitle} cards={content.cards} />
		<Contact title={content.contactTitle} body={content.contactBody} />
	</Layout>
)

export default IndexPage
