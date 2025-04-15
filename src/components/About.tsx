const teamCard = [{name : "Melissa", picture: "src/assets/pictures/melissa.jpg", description: "Cat lover, she is a geek"},
    {name : "Laurent", picture: "src/assets/pictures/melissa.jpg", description: "The danser of the team"},
    {name : "Daphnee", picture: "src/assets/pictures/melissa.jpg", description: "The best cook"},
]


function About() {

    return (
        <>
        <section className="contenairparagraphs">
        <h2>Our team members</h2>
        <p>United by the same vision discover our team of developers</p>
        </section>
        <section className="contenairTeamCards">
            {teamCard.map((person, index) => (
                <div key={index} className="teamCard">
                    <img src={person.picture} alt={person.name} />
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                </div>
            ))}
        </section>
        </>
        
    )
}

export default About