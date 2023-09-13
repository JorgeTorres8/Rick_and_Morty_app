import { createContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/use-toast"
import useAuth from "@/hooks/useAuth";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [favoriteCharacter, setFavoriteCharacter] = useState([]);
    const [description, setDescription] = useState('');
    const [characters, setCharacters] = useState([]);
    const [pageCharacters, setPageCharacters] = useState(1);
    const [episodes, setEpisodes] = useState([]);
    const [pageEpisodes, setPageEpisodes] = useState(1);
   /* const [totalPageCharacters, setTotalPageCharacters] = useState(1);
    const [currentFavourite, setCurrentFavourite] = useState('');
    const [totalPageEpisodes, setTotalPageEpisodes] = useState(1);*/
    const [loading, setLoading] = useState(false);

    const {user} = useAuth();
    const { toast } = useToast();
    const router = useRouter()

    useEffect(() => {
        const favoritesChLS = JSON.parse(localStorage.getItem("favoriteCharacter")) ?? [];
        if(favoritesChLS.length !== 0) {
            setFavoriteCharacter(favoritesChLS);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("favoriteCharacter", JSON.stringify(favoriteCharacter));
    }, [favoriteCharacter]);

    const handleFavorites = (character) => {
        if(!favoriteCharacter.some(favoritesState => favoritesState.id === character.id)) {
            setFavoriteCharacter([character])
        } 
    };    
    

    useEffect(() => {
        const consultAPI = async () => {
            setLoading(true);
            
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/character?page=${pageCharacters}`)
                .then(response => response.json())
                .then(data => {
                const characters = data.results;
                const characterObjects = characters.map(character => {
                    const { id, image, name, status, species, gender, type } = character;
                    return { id, image, name, status, species, gender, type };
                });
                setCharacters(characterObjects);
                setLoading(false);
            })
            .catch(error => console.error(error));
        }
        consultAPI();
    }, [pageCharacters])
    
    
    const handleChangePageCharacters = (e, value) => {
        setPageCharacters(e);
    }

    useEffect(() => {
        const consultAPI = async () => {
            setLoading(true);
            
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episode?page=${pageEpisodes}`)
                .then(response => response.json())
                .then(data => {
                const episodes = data.results;
                const episodesObjects = episodes.map(episodeMap => {
                    const { id, name, air_date, episode} = episodeMap;
                    return { id, name, air_date, episode};
                });
                setEpisodes(episodesObjects);
                setLoading(false);
            })
            .catch(error => console.error(error));
        }
        consultAPI();
    }, [pageEpisodes])

    const handleChangePageEpisodes = (e, value) => {
        setPageEpisodes(e);
    }
   
    useEffect(() => {
        if (favoriteCharacter && favoriteCharacter.length > 0) {
            if (favoriteCharacter[0].id === 1) {
                setDescription("Wubba lubba dub dub!");
            } else if (favoriteCharacter[0].id ===  2) {
                setDescription( "Aw jeez, we have to be careful on this trip!");
            } else if (favoriteCharacter[0].id ===  3) {
                setDescription("I'm not a normal teenager, I'm a cool teenager.");
            } else if (favoriteCharacter[0].id === 4) {
                setDescription("I'm a complex person, I like horses.");
            } else if (favoriteCharacter[0].id === 5) {
                setDescription("I'm just trying to be the best Jerry I can be.");
            } else if (favoriteCharacter[0].id === 6) {
                setDescription("I am the princess of the Abandango Cluster!");
            }
        }
    }, [favoriteCharacter, description, user, router.pathname, toast])

    useEffect(() => {
        if (description.length && user && router.pathname === '/dashboard') {
            toast({
                description: description,
                className:"border-cyan-700 bg-zinc-300 text-zinc-800 font-bold dark:bg-zinc-300 dark:text-zinc-800 rounded-xl shadow-md shadow-lime-800 text-center top:1",
                duration: 2200
            });
        }
    }, [description])
    
    return(    
        <AppContext.Provider
            value={{
                handleFavorites,
                favoriteCharacter,
                description,
                setCharacters,
                characters,
                handleChangePageCharacters,
                episodes,
                setEpisodes,
                handleChangePageEpisodes,
                setLoading
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider
}

export default AppContext;