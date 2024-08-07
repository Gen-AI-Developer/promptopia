"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProviders();
    }, [])

    const [toggleDropDown, settoggleDropDown] = useState(false);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href={'/'} className='flex gap-2 flex-center'>
                <Image
                    src={'/assets/images/logo.svg'}
                    alt='Promptopia Logo'
                    width={30}
                    height={30}
                    className='object-contain'
                ></Image>
                <p className='logo_text'>Promptopia</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ?
                    (<div className='flex gap-3 md:gap-5'>
                        <Link href={'/create-prompt'} className='black_btn'> Create Post</Link>
                        <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
                        <Link href={'/profile'}>
                            <Image
                                src={'/assets/images/profile.jpeg'}
                                width={37}
                                height={37}
                                className='rounded-full shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                            ></Image>
                        </Link>
                    </div>) : <>
                        {providers && Object.values(providers).map((provider) => {
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className='black_btn'
                            >
                                Sign-In
                            </button>
                        })}
                    </>}
            </div>
            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>

                {isUserLoggedIn ?
                    (<div className='flex'>

                        <Image
                            src={'/assets/images/profile.jpeg'}
                            width={37}
                            height={37}
                            onClick={() => settoggleDropDown((prev) => !prev)}
                            className='rounded-full shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                        ></Image>
                        {toggleDropDown && (
                            <div className='dropdown border  shadow-md'>
                                <Link
                                    href={'/profile'}
                                    className='dropdown_link'
                                    onClick={() => {
                                        settoggleDropDown(false)
                                    }}

                                >
                                    My Profile
                                </Link>
                                <Link
                                    href={'/create-prompt'}
                                    className='dropdown_link'
                                    onClick={() => {
                                        settoggleDropDown(false)
                                    }}

                                >
                                    Create Prompts
                                </Link>
                                <button
                                    className='mt-5 w-full black_btn'
                                    type='button'
                                    onClick={() => {
                                        settoggleDropDown(false);
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </button>

                            </div>)}
                    </div>) : <>
                        {providers && Object.values(providers).map((provider) => {
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className='black_btn'
                            >
                                Sign-In
                            </button>
                        })}
                    </>}
            </div>

        </nav>
    )
}

export default Nav