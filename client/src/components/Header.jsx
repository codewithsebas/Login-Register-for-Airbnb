import { FaUserCircle } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
	const { user } = useContext(UserContext);
	return (
		<header className='fixed z-10 flex w-full items-center justify-between border-b bg-white py-4 px-8 shadow-md'>
			<Link to={'/'} className='w-10'>
				<img
					className='h-full w-full object-cover'
					src='/favicon.svg'
					alt='Logo'
				/>
			</Link>
			<div className='group flex w-full max-w-xs items-center justify-between gap-1 rounded-full border py-1.5 pl-4 pr-2 shadow duration-150 hover:shadow-md'>
				<input
					id='search'
					type='text'
					placeholder='Empieza la búsqueda'
					className='w-full outline-none  placeholder:font-medium placeholder:text-black/50'
				/>
				<label
					htmlFor='search'
					className='flex cursor-pointer items-center rounded-full bg-red-400 p-1.5 text-lg text-white'
				>
					<BiSearch />
				</label>
			</div>
			<Link
				to={user ? '/account' : '/login'}
				className='flex cursor-pointer items-center gap-2 rounded-full border py-1 pr-2 pl-3 text-3xl text-black/60 duration-150 hover:shadow-md'
			>
				{!!user && (
					<p className='text-base font-semibold text-black'>{user.name}</p>
				)}
				<div className='relative'>
					<FaUserCircle />
					{!!user && (
						<div className='absolute -top-1 -right-1 h-3 w-3 rounded-full border border-white bg-red-400'></div>
					)}
				</div>
			</Link>
		</header>
	);
}
