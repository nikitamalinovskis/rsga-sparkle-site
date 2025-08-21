import React from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import VideoBlock from '@/components/sections/VideoBlock'
import About from '@/components/sections/About'
import Endorsements from '@/components/sections/Endorsements'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import SEO from '@/components/SEO'

// Russian content for RSGA
const pageData = {
	hero: {
		title: 'Инновационные экологические решения для управления отходами',
		subtitle:
			'RSGA предоставляет устойчивые и экономически эффективные услуги для полигонов и строительных площадок.',
		cta: [
			{ label: 'Узнать больше', action: '/ru/about' },
			{ label: 'Связаться с нами', action: '/ru/contacts' }
		]
	},
	services: [
		{
			id: 'alternative-cover',
			title: 'Альтернативное покрытие',
			description:
				'Современная замена почвенного покрытия, снижающая затраты и логистику, соответствующая требованиям ЕС.',
			category: 'Core',
			link: '/ru/services/alternative-cover',
			image: '/lovable-uploads/a010f091-a5ac-4966-a5cb-4a54cc337745.png'
		},
		{
			id: 'hydroseeding',
			title: 'Гидропосев',
			description:
				'Быстрый и экономичный контроль эрозии и создание растительности на склонах и участках.',
			category: 'Core',
			link: '/ru/services/hydroseeding',
			image: '/lovable-uploads/e2f20f80-baf0-49ad-a9e6-b4b0b332641d.png'
		},
		{
			id: 'industrial-deodorant-dust',
			title: 'Промышленный дезодорант',
			description:
				'Устранение запахов и подавление пыли для полигонов, дорог и промышленных зон.',
			category: 'Core',
			link: '/ru/services/industrial-deodorant-dust',
			image: '/lovable-uploads/06705bd7-68f6-4f18-ae63-9f90140aa6b4.png'
		},
		{
			id: 'sale-of-sand',
			title: 'Торговля песком',
			description:
				'Надежные поставки для строительных и промышленных нужд.',
			category: 'Additional',
			link: '/ru/services/sale-of-sand',
			image: '/lovable-uploads/553093f7-1241-4723-a1a1-4e7f94c006a2.png'
		},
		{
			id: 'earthworks',
			title: 'Земляные работы',
			description:
				'Выемка грунта, планировка, подготовка участков для инфраструктуры и строительства.',
			category: 'Additional',
			link: '/ru/services/earthworks',
			image: '/lovable-uploads/22aad84a-459a-4481-a422-60bf8199d441.png'
		},
		{
			id: 'planning-business-development',
			title: 'Планирование и развитие',
			description:
				'Консультации по устойчивому управлению полигонами, соответствию требованиям и развитию.',
			category: 'Additional',
			link: '/ru/services/planning-business-development',
			image: '/lovable-uploads/a43da217-a275-4997-b77e-21db21409b5c.png'
		}
	],
	about: {
		text: 'RSGA работает в сфере управления отходами и экологических услуг. Миссия: улучшить экологическую устойчивость с помощью инновационных технологий. Охват: Латвия и Европа.'
	},
	video_block: {
		title: 'Узнайте больше о наших инновационных решениях',
		url: 'https://youtu.be/Dp79pLCIACo?si=eXO1q-5fS3UgyoSX',
		description:
			'Это видео демонстрирует подход RSGA к устойчивому управлению полигонами, включая решения альтернативного покрытия, технологии гидропосева и применение промышленных дезодорантов.'
	},
	endorsements: [
		{
			company: 'Getliņi EKO',
			logo: 'getlini-logo.svg',
			person: 'Иманц Стиранс',
			role: 'Председатель правления',
			testimonial:
				'Более 10 лет наша компания покупает у SIA RSGA услугу – Альтернативное ежедневное покрытие на полигоне Getliņi EKO. За этот период сложилось успешное сотрудничество, обеспечивающее устойчивую и экономически эффективную работу полигона.',
			link: 'https://rsga.lv/docs/Getlini.pdf'
		},
		{
			company: 'Vidusdaugavas SPAAO',
			logo: 'spao-logo.svg',
			person: 'Янис Биснекс',
			role: 'Председатель правления',
			testimonial:
				'Благодаря инновационным дезодорантным решениям RSGA мы смогли улучшить экологический комфорт и минимизировать воздействие запахов на близлежащие сообщества.',
			link: 'https://rsga.lv/docs/RSGA_ADC_eng.pdf'
		},
		{
			company: 'Liepājas RAS',
			logo: 'liepajasras-logo.svg',
			person: 'Нормундс Ниедолс',
			role: 'Председатель правления',
			testimonial:
				'С решениями альтернативного покрытия RSGA мы снизили затраты, сохранив стандарты экологической безопасности на полигоне Кивитес.',
			link: 'https://rsga.lv/docs/RSGA_ADC_eng.pdf'
		}
	],
	cta_block: {
		text: 'Давайте вместе сделаем управление отходами более устойчивым.',
		button: { label: 'Связаться с нами', action: '/ru/contacts' }
	},
	contacts: {
		company: 'SIA RSGA',
		registration_no: '40003811272',
		address: 'Mārupes iela 4, Рига, Латвия, LV-1002',
		phone: '+371 67 32 56 73',
		email: 'info@rsga.lv',
		fax: '+371 67 32 56 24'
	}
}

const Home = () => {
	return (
		<div className='min-h-screen'>
			<SEO
				title='RSGA | Современные решения в управлении отходами в Латвии и Европе'
				description='RSGA предлагает инновационные и экологичные услуги по управлению отходами: покрытия полигонов, гидропосев, земляные работы, консалтинг и поставки песка.'
				canonical='https://rsga.lv/ru'
			/>
			<Header />

			<main>
				<Hero
					title={pageData.hero.title}
					subtitle={pageData.hero.subtitle}
					cta={pageData.hero.cta}
				/>

				<Services services={pageData.services} />

				<VideoBlock
					title={pageData.video_block.title}
					description={pageData.video_block.description}
					url={pageData.video_block.url}
				/>

				<About text={pageData.about.text} />

				<Endorsements endorsements={pageData.endorsements} />

				<CTA
					text={pageData.cta_block.text}
					button={pageData.cta_block.button}
				/>
			</main>

			<Footer contacts={pageData.contacts} />
		</div>
	)
}

export default Home
