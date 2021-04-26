import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image 
                src="http://lh3.googleusercontent.com/iXmJ9aWblkGDpg-_jpcqaY10KmA8HthjZ7F15U7mJ9PQK6vZEStMlathz1FfQQWV5XeeF-A1tZ0UpDjx3q6vEm2BWZn5k1btVSuBk9ad=s660"
                height={80}
                width={190}
                className="cursor-pointer"
            />
            
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
                <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                <button hidden type="submit"onClick={search} >Search</button>
            </form>
            <Avatar className="ml-auto" url="https://i.blogs.es/9a43ad/adaap/1366_2000.jpg" />
            </div>
            {/* Header options components */}
            <HeaderOptions />
        </header>
    )
}

export default Header
