import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Hero } from '@components/home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
	</Layout>
)

export default IndexPage
