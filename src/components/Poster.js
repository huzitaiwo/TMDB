import poster from '../asset/poster.jpg'

export default function Poster() {
  return (
    <img 
      style={{ height: "300px", width: "100%", objectFit: "cover", marginBottom: "30px", filter: "blur(2px)" }} 
      src={poster} 
      alt="poster"
    />
  )
}
