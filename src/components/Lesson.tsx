import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
	const isLessonAvailable = isPast(props.availableAt);
	const availableDateFormatted = format(props.availableAt, "EEEE ' • 'd' de 'MMMM' • 'k'h'mm'", {
		locale: ptBR
	})

	return(
		<a href="">
			<span className="text-gray-300 font-normal text-sm pb-4">
				{availableDateFormatted}
			</span>

			<div className="flex flex-col gap-3 border border-gray-500 p-4 rounded mt-2">
				<header className="flex justify-between items-center">
					{isLessonAvailable ? (
						<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
							<Lock size={20} />
							Em breve
						</span>
					)}
						
						<span className="uppercase text-xs border border-green-300 text-green-300 rounded-[4px] p-[3px] font-bold">
							{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
						</span>
				 </header>
				 <strong className="text-sm text-gray-200">
					{props.title}
				 </strong>
			</div>
		</a>
	)
}