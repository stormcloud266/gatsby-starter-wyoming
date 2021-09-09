import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero, Intro } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
	</Layout>
)

export default IndexPage
