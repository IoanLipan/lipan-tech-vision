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
import CiCdIcon from '../../assets/icons/jenkins.svg'
import LiquidIcon from '../../assets/icons/liquid.svg'
import ShopifyIcon from '../../assets/icons/shopify.svg'
import CMSPayloadIcom from '../../assets/icons/cmspayload.svg'
import KonvaIcon from '../../assets/icons/konva.svg'
import LivekitIcon from '../../assets/icons/livekit.svg'
import MaplibreIcon from '../../assets/icons/maplibre.svg'
import PageflyIcon from '../../assets/icons/pagefly.svg'
import StorybookIcon from '../../assets/icons/storybook.svg'
import Tanstack from '../../assets/icons/tanstack.svg'

const TechIcon = ({ src, alt, className = 'h-16 w-16' }) => {
	return (
		<Image src={src} alt={alt} width={64} height={64} className={className} />
	)
}

export const ReactTechIcon = () => <TechIcon src={ReactIcon} alt="React" />
export const VueTechIcon = () => <TechIcon src={VueIcon} alt="Vue.js" />
export const NextTechIcon = () => <TechIcon src={NextIcon} alt="Next.js" />
export const JavaScriptTechIcon = () => (
	<TechIcon src={JavaScriptIcon} alt="JavaScript" />
)
export const TypeScriptTechIcon = () => (
	<TechIcon src={TypeScriptIcon} alt="TypeScript" />
)
export const TailwindTechIcon = () => (
	<TechIcon src={TailwindIcon} alt="TailwindCSS" />
)
export const FramerTechIcon = () => (
	<TechIcon src={FramerIcon} alt="Framer Motion" />
)
export const NodeTechIcon = () => <TechIcon src={NodeIcon} alt="Node.js" />
export const ExpressTechIcon = () => (
	<TechIcon src={ExpressIcon} alt="Express.js" />
)
export const MongoTechIcon = () => <TechIcon src={MongoIcon} alt="MongoDB" />
export const SQLTechIcon = () => <TechIcon src={SQLIcon} alt="SQL" />
export const FirebaseTechIcon = () => (
	<TechIcon src={FirebaseIcon} alt="Firebase" />
)
export const GraphQLTechIcon = () => (
	<TechIcon src={GraphQLIcon} alt="GraphQL" />
)
export const GitTechIcon = () => <TechIcon src={GitIcon} alt="Git" />
export const DockerTechIcon = () => <TechIcon src={DockerIcon} alt="Docker" />
export const AWSTechIcon = () => <TechIcon src={AWSIcon} alt="AWS" />
export const VercelTechIcon = () => <TechIcon src={VercelIcon} alt="Vercel" />
export const CICDTechIcon = () => <TechIcon src={CiCdIcon} alt="CI/CD" />
export const LiquidTechIcon = () => <TechIcon src={LiquidIcon} alt="Liquid" />
export const ShopifyTechIcon = () => (
	<TechIcon src={ShopifyIcon} alt="Shopify" />
)
export const CMSPayloadTechIcon = () => (
	<TechIcon src={CMSPayloadIcom} alt="CMS Payload" />
)
export const KonvaTechIcon = () => <TechIcon src={KonvaIcon} alt="Konva" />
export const LivekitTechIcon = () => (
	<TechIcon src={LivekitIcon} alt="Livekit" />
)
export const MaplibreTechIcon = () => (
	<TechIcon src={MaplibreIcon} alt="Maplibre" />
)
export const PageflyTechIcon = () => (
	<TechIcon src={PageflyIcon} alt="Pagefly" />
)
export const StorybookTechIcon = () => (
	<TechIcon src={StorybookIcon} alt="Storybook" />
)
export const TanstackTechIcon = () => (
  <TechIcon src={Tanstack} alt="Tanstack" />
)
