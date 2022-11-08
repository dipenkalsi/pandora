import NavLink from './navLink'
import logo from '../assets/logo-no-background.png'
import Image from 'next/image'
const styles = {
  nav: `max-h-[110vh] w-96 p-5 pb-10 border-r border-gray-600`,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
}

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className=''>
        <div className='pb-6'>
        <Image src={logo} height="25" width="200"></Image>
        </div>
        <NavLink icon='assets/home.svg' title='Home' className={styles.link} />
        <NavLink
          icon='assets/search.svg'
          title='Search'
          className={styles.link}
        />
        <NavLink
          icon='assets/playlist.svg'
          title='Your library'
          className={styles.link}
        />
      </div>

      <div className='mb-5 border-b border-gray-600'>
        <NavLink
          icon='assets/add.svg'
          title='Create Playlist'
          className={styles.link}
        />
        <NavLink
          icon='assets/heart.svg'
          title='Liked Songs'
          className={styles.link}
        />
      </div>

      <div className='mt-5 leading-8 flex flex-col gap-[10px]'>
        <p className='text-sm'>GHOST SONGS</p>
        <p className={styles.playlistName}>
          CarPlay Vol.2
        </p>
        <p className={styles.playlistName}>
          Country Dump
        </p>
        <p className={styles.playlistName}>
          Energy Booster: Country
        </p>
        <p className={styles.playlistName}>
          Funky
        </p>
        <p className={styles.playlistName}>
          Coaching 🔥
        </p>
        <p className={styles.playlistName}>
          Country
        </p>
        <p className={styles.playlistName}>
          Your Top Songs 2022
        </p>
      </div>
    </div>
  )
}

export default Nav
