import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BiLoaderAlt } from 'react-icons/bi';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Account() {
	const { ready, user, setUser } = useContext(UserContext);
	const [redirect, setRedirect] = useState(null);
	const [loading, setLoading] = useState(false);

	let { subpage } = useParams();

	function logout() {
		setLoading(true);
		setTimeout(async () => {
			await axios.post('/logout');
			setRedirect('/login');
			setUser(null);
		}, 1800);
	}

	if (!ready) {
		return (
			<div className='relative flex h-screen w-full items-center justify-center bg-white pt-[75px]'>
				<img
					className='h-full w-full object-cover opacity-80'
					src='/assets/background.jpg'
					alt='Background'
				/>
				<div className='absolute h-full max-h-[30rem] w-full max-w-md rounded-xl border bg-white p-7 px-8 shadow-2xl'>
					<div className='m-auto flex h-full w-full animate-pulse flex-col justify-between gap-3'>
						<div className='flex justify-between gap-10'>
							<div className='h-4 w-full rounded-full bg-slate-200'></div>
							<div className='h-4 w-full rounded-full bg-slate-200'></div>
						</div>
						<div className='flex flex-col items-center gap-4'>
							<div className='h-60 w-60 rounded-full bg-slate-200'></div>
							<div className='flex w-60 flex-col justify-between gap-5'>
								<div className='h-4 w-full rounded-full bg-slate-200'></div>
								<div className='h-4 w-full rounded-full bg-slate-200'></div>
							</div>
						</div>
						<div className='h-6 w-full rounded-full bg-slate-200'></div>
					</div>
				</div>
			</div>
		);
	}

	if (ready && !user && !redirect) {
		return <Navigate to={'/login'} />;
	}

	if (subpage === undefined) {
		subpage = 'profile';
	}

	function linkClass(type = null) {
		let classes =
			'rounded-lg py-2 px-4 font-semibold text-black/70 duration-150 hover:text-black';
		if (type === subpage) {
			classes +=
				'rounded-lg bg-red-400 py-2 px-4 font-semibold text-white shadow-md duration-150 hover:bg-red-500/80';
		}
		return classes;
	}

	if (redirect) {
		return <Navigate to={redirect} />;
	}

	return (
		<div className='relative flex h-screen w-full items-center justify-center bg-white'>
			<img
				className='h-full w-full object-cover opacity-80'
				src='/assets/background.jpg'
				alt='Background'
			/>
			<div className='absolute flex w-full max-w-lg flex-col items-center justify-between gap-3 rounded-xl bg-white p-7 px-8 shadow-2xl'>
				<div className='flex w-full items-center justify-between'>
					<h1 className='text-3xl font-semibold'>Perfil</h1>
					<img className='w-10' src='/assets/favicon.svg' alt='Logo' />
				</div>
				<div className='flex h-full w-full flex-col justify-between gap-6'>
					<div className='m-auto w-full'>
						<img
							className='m-auto h-60 w-60 cursor-pointer rounded-full border-4 border-red-100 object-cover opacity-80 duration-200 hover:opacity-100'
							src='/assets/profile.jpg'
							alt='Profile'
						/>
					</div>
					<div className='flex flex-col gap-3 text-center'>
						<h1 className='text-4xl font-semibold'>{user?.name}</h1>
						<p className='text-xl'>{user?.email}</p>
					</div>
					<button
						onClick={logout}
						className='group flex items-center justify-between rounded-lg bg-red-400 py-2 px-2 font-semibold text-white shadow-md duration-150 hover:bg-red-500/80'
					>
						<div className='w-5'></div>
						{loading ? (
							<>
								<h1>Cerrando Sesión...</h1>
								<BiLoaderAlt className='animate-spin text-2xl duration-200' />
							</>
						) : (
							<>
								<h1>Cerrar Sesión</h1>
								<MdKeyboardArrowUp className='text-2xl duration-200 group-hover:rotate-90' />
							</>
						)}
					</button>
				</div>
				<div className='mt-5 w-full border-t pt-5'>
					<ul className='flex justify-between'>
						<Link to={'/account'}>
							<li className={linkClass('profile')}>My profile</li>
						</Link>
						<Link to={'/account/bookings'}>
							<li className={linkClass('bookings')}>My bookings</li>
						</Link>
						<Link to={'/account/places'}>
							<li className={linkClass('places')}>My accommodations</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
