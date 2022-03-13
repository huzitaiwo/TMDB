import poster from '../asset/poster.jpg'

export default function Poster() {
  return (
    <img 
      style={{ height: "300px", width: "100%", objectFit: "cover" }} 
      src={poster} 
      alt="poster"
    />
  )
}
