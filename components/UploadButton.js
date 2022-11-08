import React from 'react'
const style = {
    uploadButton:`bg-green-500 flex items-center justify-center space-x-3 cursor-pointer hover:bg-green-600 rounded-full px-5 py-2 hover:scale-110 transition-all ease-in duration-150`
}
const UploadButton = ({setShowUploadMusic,setIsBlur}) => {
    const uploadClicked=()=>{
        setIsBlur(true)
        setShowUploadMusic(true);
    }
  return (
    <div onClick={uploadClicked} className={style.uploadButton}>
        <img src="/assets/add.svg" alt=""/>
        <p className='font-semibold'>Add a song</p>
    </div>
  )
}

export default UploadButton
