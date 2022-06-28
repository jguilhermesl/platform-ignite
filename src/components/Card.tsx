import { ArrowRight, Lightning, CaretRight } from "phosphor-react";

export function Card() {
	return(
		<div className="w-[45%] flex relative hover:opacity-70 cursor-pointer">
			<div className="bg-green-700 w-[30%] rounded-l flex justify-center items-center">
				<Lightning className="text-2xl" />
			</div>
			<div className="flex flex-col gap-2 py-5 px-7 bg-gray-700 rounded-r">
				<strong className="text-gray-100 text-xl">Material complementar</strong>
				<span className="text-gray-200 text-sm">Acesse o material complementar para acelerar seu desenvolvimento</span>
			</div>
			<CaretRight className="absolute text-green-700 text-xl right-4 top-[41%]" />
		</div>
	)
}