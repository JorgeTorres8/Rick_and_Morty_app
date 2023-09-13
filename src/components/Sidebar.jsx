import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import '@/app/globals.css'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Home, Play, User2, LogOut } from 'lucide-react';
import useApp from '@/hooks/useApp'

const Sidebar = () => {

    const router = useRouter();
    const {handleLogOut, isAuth, name } = useAuth();
    const {favoriteCharacter} = useApp();

    return (
        <>
            <aside className='bg-zinc-950 dark:bg-slate-800 p-2 flex items-center justify-center'>
                <Sheet>
                    <SheetTrigger>
                        <div className='w-auto h-auto'>
                            <Image
                                src="/img/icon_portal.png"
                                width={40}
                                height={40}
                                fit="contain"
                                alt="Portal Image"
                            />
                        </div>
                    </SheetTrigger>
                    
                    <SheetContent className="w-32 sm:w-36 bg-zinc-950 dark:bg-slate-800 flex flex-col justify-center items-center border-r-2 border-lime-800 gap-11" side="left">
                        <div className='flex flex-col justify-center items-cente'>
                            <div className="w-auto h-auto rounded-full overflow-hidden">
                                <Image  
                                src={favoriteCharacter[0]?.image ? favoriteCharacter[0]?.image : '/img/user.webp' }
                                alt={favoriteCharacter[0]?.name ? favoriteCharacter[0]?.name : 'user'}
                                width={100}
                                height={100}
                                />
                            </div>
                            <p className='text-center text-lg font-semibold mt-1'>{name}</p>
                        </div>
                        
                        <nav className='flex flex-col gap-12 justify-center items-center text-zinc-300'>
                            <Link href='/dashboard'>
                                <Button className='text-1xl'>
                                    <div className={`flex flex-col justify-center items-center px-5 py-2 ${router.pathname === '/dashboard' ? ' bg-zinc-800 dark:bg-slate-500 rounded' : ''}`}>
                                    <Home absoluteStrokeWidth className={`h-6 w-6 ${router.pathname === '/dashboard' ? 'text-zinc-200 dark:text-black' : 'text-cyan-500'}`}/>Home
                                    </div>
                                </Button>
                            </Link>

                            <Link href='/dashboard/characters'>
                                <Button className=" text-1xl">
                                    <div className={`flex flex-col justify-center items-center px-5 py-2 ${router.pathname === '/dashboard/characters' ? 'bg-zinc-800 dark:bg-slate-500 rounded' : ''}`}>
                                    <User2 absoluteStrokeWidth className={`h-6 w-6 ${router.pathname === '/dashboard/characters' ? 'text-zinc-200 dark:text-black' : 'text-cyan-500'}`}/>Characters
                                    </div>
                                </Button>
                            </Link>

                            <Link href='/dashboard/episodes'>
                                <Button className="text-1xl">
                                <div className={`flex flex-col justify-center items-center px-5 py-2 ${router.pathname === '/dashboard/episodes' ? ' bg-slate-800 dark:bg-slate-500 rounded' : ''}`}>
                                    <Play absoluteStrokeWidth className={`h-6 w-6 ${router.pathname === '/dashboard/episodes' ? 'text-zinc-200 dark:text-black' : 'text-cyan-500'}`}/> Episodes
                                    </div>
                                </Button>
                            </Link>
            
                            <Button onClick={handleLogOut} className="border-cyan-600 border-2 rounded mt-14 p-2 text-1xl hover:bg-cyan-900">
                                <LogOut absoluteStrokeWidth className="text-red-500 h-6 w-6" /> Log Out
                            </Button>

                        </nav>
                    </SheetContent>
                </Sheet>
                
            </aside>

        </>
    )
}

export default Sidebar;