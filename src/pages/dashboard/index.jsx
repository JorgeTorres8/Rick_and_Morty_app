import fetch from 'node-fetch';
import '@/app/globals.css'
import DashboardLayout from '../layout/DashboardLayout'
import Character from '@/components/Character';

export const config = {
    runtime: 'nodejs', // or "edge"
}

function Dashboard({ characters, error }) {


  return(
    <DashboardLayout>
      <div className='h-screen flex flex-col items-center'>
        <h1 className='mt-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>The adventure begins!</h1>
        <p className='text-xl mt-8 text-center'>Choose your favorite main character, he will be your avatar and will also 
        be with you during your stay in this application. <span className=' text-lg font-bold'>Click on his name</span></p>
        
          <div className='w-9/12 gap-7 m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {characters.map(character => (
              <Character
                key={character.id}
                character={character}
              />
            ))}
          </div>
          <p className='m-7 md:m-0 text-center font-bold text-lg opacity-0'>Enjoy the app!</p>
      </div>


    </DashboardLayout>
  )
}

export async function getServerSideProps() {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/character`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const firstFiveCharacters = data.results.slice(0, 6).map(character => ({
        id: character.id,
        name: character.name,
        image: character.image
      }));
  
      return {
        props: {
          characters: firstFiveCharacters
        }
      };
    } catch (error) {
      return {
        props: {
          error: 'Error al obtener los personajes'
        }
      };
    }
}

export default Dashboard;