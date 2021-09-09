import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero, Intro, TextImage, Banner } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<TextImage />
		<Banner />
	</Layout>
)

export default IndexPage
