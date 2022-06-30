import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{playlists}, dispatch ] = useStateValue()
  return (
    <div className='sidebar'>
          <img className='sidebar__logo' src="https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_960_720.jpg" alt="" />

          <SidebarOption title="Home" Icon={HomeIcon}/>
          <SidebarOption title="Search" Icon={SearchIcon}/>
          <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
          <br />
          <strong className='sidebar__title'>PLAYLISTS</strong>
          <hr />
          {playlists?.items?.map(playlists => (
              <SidebarOption title={playlists.name} />
          ))}
         
    </div>
  )
}

export default Sidebar