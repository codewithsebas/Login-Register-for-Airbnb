import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

export default function Home() {
	const { user } = useContext(UserContext);
	const example = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	if(!user) {
		return <Navigate to={'/login'} />
	}
	return (
		<main className='px-8 py-5'>
			<div className='flex flex-wrap gap-5'>
				{example.map(index => (
					<div className='h-80 w-72 grow' key={index}>
						<div className='h-52 w-full'>
							<img
								className='h-full w-full rounded-xl object-cover'
								src='/assets/profile.jpg'
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-2 px-3 py-3'>
							<div className='flex items-center justify-between'>
								<h1 className='font-semibold'>Melgar, Colombia</h1>
								<h2>4.88</h2>
							</div>
							<div>
								<p className='text-black/50'>A 86 kilometros de distancia</p>
								<h1 className='font-semibold'>
									$195,519 COP <span className='text-black/50'>Noche</span>
								</h1>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
