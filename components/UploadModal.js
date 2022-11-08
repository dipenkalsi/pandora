import style from '../styles/UploadModal.module.css'
import axios from 'axios'

const UploadModal = ({
  description: title,
  musicUrl,
  newMusic,
  setTitle,
  setMusicUrl,
  setShowUploadMusic,
  setIsBlur,
  isBlur
}) => {
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const uploadClicked = async () => {
    var files = document.querySelector('#music-file')

    if (files.files.length == 0) return

    const base64_file = await toBase64(files.files[0])

    axios
      .post(
        '/api/upload_music',
        { file: base64_file, filename: files.files[0].name},
        {},
      )
      .then(res => {
        console.log(res.data)
        if (
          res.data.result &&
          res.data.result.created &&
          res.data.result.created[0].dataTxId
        )
          setMusicUrl(
            'https://arweave.net/' + res.data.result.created[0].dataTxId,
          )
      })
      .catch(err => {
        console.log(err)
      })
  }

  const createNewClicked = () => {
    newMusic()
  }
  const handleCancelClick=()=>{
    setShowUploadMusic(false)
    setIsBlur(false)
  }
  const useEffect=(()=>{
    if(isBlur){
        document.getElementById("wrapper").classList.add("filter: blur(0)")
    }
  },[isBlur])

  return (
    <div className={`${style.wrapper} ${isBlur?"bg-white backdrop-filter backdrop-blur-lg bg-opacity-10":""}`} id="wrapper">
      <div className={style.title}>Upload New Music</div>
      {/* <input type='file' id='music-file' name='file' className='flex items-center justify-center'/> */}
      
<label class="block mb-2 text-sm font-medium text-indigo-400" for="file">Upload file</label>
<input class="block w-full text-sm text-green-400 bg-[#00002C] rounded-full  cursor-pointer dark:text-indigo-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-indigo-400 custom_file" id="music-file" type="file" name='file'/>

      <div className={style.modalButtons}>
        <button
          onClick={uploadClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Upload
        </button>
      </div>

      <div className={style.inputField}>
        <div className={style.inputTitle}>Title</div>
        <div className={style.inputContainer}>
          <input
            className={`${style.input}`}
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Music Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type='text'
            value={musicUrl}
            onChange={e => setMusicUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={handleCancelClick}
          className={`px-12 hover:bg-red-700 hover:text-white transition-all duration-150 ease-in  ${style.cancelButton}`}
        >
          Cancel
        </button>
        <button
          onClick={createNewClicked}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

export default UploadModal