

function Description({description}){
    return (
        <div className="description">
            <img src={description.imageUrl} alt={description.title} />
            <div className="details">
                <h3 className="title">{description.title}</h3>
                <p className="content">{description.description}</p>
                <a href={description.linkUrl} className="link">
                    {description.linkText} ->
                </a>
            </div>
        </div>
    )
}

export default function Descriptions(){

    let descriptions = [
        {
            title: 'New Generational Advanced Telecoms Services',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et olore magna aliqua.',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1687362298502-1881385c786f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            linkUrl: '/services',
            linkText: 'Learn More',
        }
    ];

    return(
        <section className="descriptions">
            {descriptions.map(description => <Description key={description.title} description={description}  />)}
        </section>
    )
}