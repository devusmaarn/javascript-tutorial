import Avatar from "../Components/Avatar.jsx";

function Review({review}){
    return(
        <div>
            <Avatar imageUrl={review.user.avatar} alt={review.user.name} size={50} />
            <div className="content">
                <h3 className="heading-3">{review.user.name}</h3>
                <p className="comment">{review.comment}</p>
            </div>
        </div>
    )
}

export default function CustomerReviews(){

    let reviews = [
        {
            user: {
                name: "Uthman Muhammad",
                avatar: "https://img.freepik.com/free-photo/young-african-man-using-mobile-phone-isolated-against-white-wall_231208-611.jpg?w=2000&t=st=1696248044~exp=1696248644~hmac=71dcf5fadc8e6fd38573eaaf56a7bc0ac4556f99cc782211898b4d6908d8605d",
            },
            comment: 'this website is an amazing website with cheap services, I have earned a lot from it. kudos the the owners'
        }
    ]

    return(
        <section className="customerReviews">
            <h2 className="heading-2">Customers' Reviews</h2>
            <div className="reviews">
                {reviews.map(review => <Review key={review.comment} review={review} /> )}
            </div>
        </section>
    )

}