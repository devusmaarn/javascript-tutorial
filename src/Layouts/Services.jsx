
function Service({service}){
    return(
        <div className="service">
            <div className="imageWrapper">
                <img src={service.imageUrl} alt={service.title} className="image"/>
            </div>
            <div className="details">
                <h3 className="heading-3 title">{service.title}</h3>
                <p className="description">{service.description}</p>
            </div>
        </div>
    )
}


export default function Services(){

    let services = [
        {
            title: 'Airtime Purchase',
            description: 'buy airtimes at cheaper and affordable price and earn bonuses when you buy more.',
            imageUrl: 'https://thewhistler.ng/wp-content/uploads/2017/09/all-network-airtel-glo-mtn-ntel-1.jpg',
        }
    ];

    return (
        <section className="services-section">
            <div className="header">
                <h2 className="heading-2">Services</h2>
                <a href="/services" className="link">See All -></a>
            </div>

            <div className="services">
                {services.map(service => <Service key={service.title} service={service} />)}
            </div>
        </section>
    )
}