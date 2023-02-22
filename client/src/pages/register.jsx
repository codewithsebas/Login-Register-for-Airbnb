import {
	MdEmail,
	MdKeyboardArrowUp,
	MdDriveFileRenameOutline,
} from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
	const [pass, setPass] = useState(false);

	// Obtencion de datos del formulario
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Funcion para enviar el formulario
	async function registerUser(ev) {
		try {
			ev.preventDefault();
			await axios.post('/register', {
				name,
				email,
				password,
			});
		} catch (error) {
			console.log('Usuario ya existe');
		}
	}
	return (
		<div className='relative flex h-screen w-full items-center justify-center bg-white'>
			<img
				className='h-full w-full object-cover opacity-80'
				src='/assets/background.jpg'
				alt='Background'
			/>
			<div className='absolute flex h-full max-h-[32rem] w-full max-w-md flex-col items-center justify-between rounded-xl bg-white px-8 pt-7 pb-5 shadow-2xl'>
				<div className='flex w-full items-center justify-between'>
					<h1 className='text-3xl font-semibold'>Registrate</h1>
					<img className='w-10' src='/assets/favicon.svg' alt='Logo' />
				</div>
				<form onSubmit={registerUser} className='flex w-full flex-col gap-4'>
					<div className='flex flex-col'>
						<label className='group w-12' htmlFor='name'>
							Nombre
						</label>
						<div className='relative'>
							<input
								autoFocus
								id='name'
								className='w-full rounded-lg border px-3 py-2 outline-none duration-150 placeholder:text-black/20 hover:border-black/30 focus:border-black/20 focus:shadow'
								type='text'
								value={name}
								onChange={ev => setName(ev.target.value)}
								placeholder='Tu nombre'
							/>
							<label
								htmlFor='name'
								className='absolute top-0 bottom-0 right-2 flex cursor-pointer items-center text-xl text-black/20 hover:text-black/30'
							>
								<MdDriveFileRenameOutline />
							</label>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='group w-12' htmlFor='email'>
							Correo
						</label>
						<div className='relative'>
							<input
								id='email'
								className='w-full rounded-lg border px-3 py-2 outline-none duration-150 placeholder:text-black/20 hover:border-black/30 focus:border-black/20 focus:shadow'
								type='text'
								value={email}
								onChange={ev => setEmail(ev.target.value)}
								placeholder='Tu correo electronico'
							/>
							<label
								htmlFor='email'
								className='absolute top-0 bottom-0 right-2 flex cursor-pointer items-center text-xl text-black/20 hover:text-black/30'
							>
								<MdEmail />
							</label>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='group w-12' htmlFor='password'>
							Contraseña
						</label>
						<div className='relative'>
							<input
								id='password'
								className='w-full rounded-lg border px-3 py-2 outline-none duration-150 placeholder:text-black/20 hover:border-black/30 focus:border-black/20 focus:shadow'
								type={pass ? 'text' : 'password'}
								value={password}
								onChange={ev => setPassword(ev.target.value)}
								placeholder='Tu contraseña'
							/>
							<label
								onClick={() => setPass(!pass)}
								htmlFor='password'
								className='absolute top-0 bottom-0 right-2 flex cursor-pointer items-center text-xl text-black/20 hover:text-black/30'
							>
								{pass ? <FaEyeSlash /> : <FaEye />}
							</label>
						</div>
					</div>

					<button className='group flex items-center justify-between rounded-lg bg-red-400 py-2 px-2 font-semibold text-white shadow-md duration-150 hover:bg-red-500/80'>
						<div className='w-5'></div>
						<h1>Registrarme</h1>
						<MdKeyboardArrowUp className='text-2xl duration-200 group-hover:rotate-90' />
					</button>
					<div className='flex items-center justify-between'>
						<h1 className='text-black/70'>Ya tienes cuenta?</h1>
						<Link className='text-red-400 hover:underline' to='/login'>
							Inicia Sesión
						</Link>
					</div>
				</form>
				<div className='flex w-full justify-between text-black/20'>
					<p>Airbnb - Clone</p>
					<p>Sebastián Giraldo</p>
				</div>
			</div>
		</div>
	);
}
