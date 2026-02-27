import Image from 'next/image'

import ReactIcon from '../../assets/icons/react.svg'
import VueIcon from '../../assets/icons/vue.svg'
import NextIcon from '../../assets/icons/nextjs.svg'
import JavaScriptIcon from '../../assets/icons/javascript.svg'
import TypeScriptIcon from '../../assets/icons/typescript.svg'
import TailwindIcon from '../../assets/icons/tailwind.svg'
import FramerIcon from '../../assets/icons/framer.svg'
import NodeIcon from '../../assets/icons/nodejs.svg'
import ExpressIcon from '../../assets/icons/express.svg'
import MongoIcon from '../../assets/icons/mongo.svg'
import SQLIcon from '../../assets/icons/pgsql.svg'
import FirebaseIcon from '../../assets/icons/firebase.svg'
import GraphQLIcon from '../../assets/icons/graphql.svg'
import GitIcon from '../../assets/icons/git.svg'
import DockerIcon from '../../assets/icons/docker.svg'
import AWSIcon from '../../assets/icons/aws.svg'
import VercelIcon from '../../assets/icons/vercel.svg'
import CICDIcon from '../../assets/icons/jenkins.svg'
import LiquidIcon from '../../assets/icons/liquid.svg'
import ShopifyIcon from '../../assets/icons/shopify.svg'
import CMSPayloadIcon from '../../assets/icons/cmspayload.svg'
import KonvaIcon from '../../assets/icons/konva.svg'
import LivekitIcon from '../../assets/icons/livekit.svg'
import MaplibreIcon from '../../assets/icons/maplibre.svg'
import PageflyIcon from '../../assets/icons/pagefly.svg'
import StorybookIcon from '../../assets/icons/storybook.svg'
import TanstackDarkIcon from '../../assets/icons/tanstack-dark.svg'
import TanstackLightIcon from '../../assets/icons/tanstack-light.svg'

const TechIcon = ({ src, alt, className = 'h-16 w-16' }) => {
	return (
		<Image src={src} alt={alt} width={64} height={64} className={className} />
	)
}

export {
	ReactIcon,
	NextIcon,
	VueIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	TailwindIcon,
	FramerIcon,
	NodeIcon,
	ExpressIcon,
	MongoIcon,
	SQLIcon,
	FirebaseIcon,
	GraphQLIcon,
	GitIcon,
	DockerIcon,
	CICDIcon,
	AWSIcon,
	VercelIcon,
	StorybookIcon,
	ShopifyIcon,
	PageflyIcon,
	LiquidIcon,
	MaplibreIcon,
	KonvaIcon,
	CMSPayloadIcon,
	LivekitIcon,
	TanstackDarkIcon,
	TanstackLightIcon,
}
