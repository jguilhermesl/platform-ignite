import { DefaultUi, Player, Youtube } from '@vime/react'
import { DiscordLogo, Lightning } from 'phosphor-react'
import { Card } from './Card'
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css'
import { useParams } from 'react-router-dom'

const GET_LESSON_BY_SLUG_QUERY = gql`query GetLessonBySlug ($slug: String ) {
  lesson(where: {slug: $slug}) {
    id
    videoId
    title
    teacher {
      avatarURL
      bio
      name
    }
    description
  }
}`

interface GetLessonBySlugQueryProps {
	lesson: {
		id: string,
		videoId: string,
		title: string,
		teacher: {
			avatarURL: string,
			bio: string,
			name: string
		},
		description: string
	}
} 

export function Video() {
	const { slug } = useParams<{slug: string}>()
	const { data } = useQuery<GetLessonBySlugQueryProps>(GET_LESSON_BY_SLUG_QUERY, {
		variables: {
			slug
		}
	})

	if(!data) {
		return <div className="flex-1">Carregando...</div>
	}

	return(
		<div className="flex-1">
			<div className="w-full max-w-[1100px] max-h-[87vh] aspect-video">
				<Player>
					<Youtube videoId={data.lesson.videoId} />
					<DefaultUi />
				</Player>
			</div>
			<div className="flex flex-col gap-4 p-6">
				<header className="flex">
					<div className="w-[70%] flex flex-col gap-1">
						<strong className="text-[1.3rem] text-gray-100">{data.lesson.title}</strong>
						<p className="text-[0.8rem] text-gray-200">{data.lesson.description}</p>
					</div>
					<div className="flex flex-col gap-2 ml-auto">
						<button className="flex items-center justify-center gap-2 w-60 bg-green-500 rounded py-4 px-4 text-sm font-bold uppercase hover:bg-green-700 transition-colors">
							<DiscordLogo /> Comunidade no Discord
						</button>
						<button className="flex items-center justify-center gap-2 w-60 border border-blue-500 text-blue-500 rounded py-4 px-6 text-sm font-bold uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors">
							<Lightning />Acesse o desafio
						</button>
					</div>
				</header>
				<div className="flex gap-3 items-center">
					<img src={data.lesson.teacher?.avatarURL} className="bg-green-600 rounded-full w-11 h-11 object-cover" />
					<div className="flex flex-col">
						<span className="font-bold text-xl text-gray-100">{data.lesson.teacher?.name}</span>
						<span className="font-normal text-xs text-gray-200">{data.lesson.teacher?.bio}</span>
					</div>
				</div>
				<div className="flex justify-evenly mt-6">
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}