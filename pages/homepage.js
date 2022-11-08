import Nav from '../components/nav'
import Activity from '../components/activity'
import UserControls from '../components/UserControls'
import Playlist from '../components/Playlist'
import Header from '../components/Header'
import { useEffect,useState } from 'react'
import UploadModal  from '../components/UploadModal'
// import {songs} from '../data/songs'
import usePandora from '../hooks/usePandora'
const HomePage = () => {
  const [showUploadMusic,setShowUploadMusic]=useState(false)
  const [title , setTitle] = useState('')
  const [musicUrl,setMusicUrl]=useState('')
  const [songs,setSongs] = useState([])
  const [isBlur,setIsBlur] = useState(false)
  console.log(songs)
  const {newMusic,getSongs} = usePandora(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  )

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
    console.log(songs)
  }, [])
  return (
    <div className={`flex flex-col md:flex-row bg-gradient-to-t from-black to-[#000033] scrollbar-hide ${isBlur?"bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 overflow-x-hidden ":""}`}>
      <Nav />
      <div className='w-full'>

        <Header setShowUploadMusic={setShowUploadMusic} setIsBlur={setIsBlur}/>
        <Playlist songs={songs}/>
        <UserControls songs={songs}/>
        {showUploadMusic && (
          <UploadModal
          title={title}
          setTitle={setTitle}
          setShowUploadMusic={setShowUploadMusic}
          musicUrl={musicUrl}
          setMusicUrl={setMusicUrl}
          newMusic={newMusic}
          setIsBlur={setIsBlur}
          isBlur={isBlur}
          />
        )}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage
