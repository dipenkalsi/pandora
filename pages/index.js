import Login from '../components/Login'
import { useContext } from 'react'
import { PandoraContext } from '../context/context'
export default function Home() {
  const {updateProgress,updateVolume}=useContext(PandoraContext)
  return (
    <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <Login/>
      {/* temporarily render homepage before you build Login */}
    </div>
  )
}
