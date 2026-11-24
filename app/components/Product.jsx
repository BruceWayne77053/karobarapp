export default function Product({ name,src,detail }) {
  return(
    <>
    
        <div className="bg-gray-100 p-4" flex flex-col align-center>
        <h1 className="text-xl">{name}</h1>
        <Image src={src} width="200" height="200"/>
        <p>{detail}</p>
        </div>
    </>
  )
}
