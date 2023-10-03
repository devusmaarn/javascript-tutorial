

export default function Avatar({size, imageUrl, alt}){
    return(
        <img src={imageUrl} width={size} alt={alt} />
    )
}