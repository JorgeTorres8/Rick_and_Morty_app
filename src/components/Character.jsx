import '@/app/globals.css'
import * as React from "react"
import useApp from '@/hooks/useApp'
import { Button } from "@/components/ui/button"

import Image from 'next/image'

const Character = ({character}) => {
  const {handleFavorites, favoriteCharacter} = useApp();

  const {id, name, image} = character;

  return (
    
    <div className={`flex flex-col justify-center items-center gap-1
    hover:border-lime-600 bg-zinc-200 dark:bg-transparent hover:cursor-pointer border-2 rounded-xl p-3 
      transition ease-out delay-100 hover:scale-105 duration-300 ${favoriteCharacter[0]?.id === id ? 'border-lime-600 ' : ' border-zinc-800'}`}>
      <Button
        onClick={() => {
          handleFavorites(character)
        }}
      >
        <p className={`text-base font-semibold ${favoriteCharacter[0]?.id === id ? 'text-cyan-700 dark:text-cyan-500' : ''}`}>{name}</p>
      </Button>
        
      <div className="w-auto h-auto rounded-full overflow-hidden">
        <Image  
          src={image}
          alt={name}
          width={140}
          height={140}
        />
      </div>
    </div>
  )
}

export default Character;