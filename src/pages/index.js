import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero, Intro, TextImage } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<TextImage />
	</Layout>
)

export default IndexPage
