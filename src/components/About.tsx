import Filters from "./Filters"

const teamCard = [{name : "Mélissa", picture: "src/assets/pictures/melissa.jpg", description: "Passionate about development, I contribute to innovative projects."},
    {name : "Laurent", picture: "src/assets/pictures/laurent.JPG", description: "Experienced game designer specializing in free-to-play and mobile games"},
    {name : "Daphnée", picture: "src/assets/pictures/daphnee.jpg", description: "I love creating engaging content that resonates with audiences."},
]
const h1Section = [{title : "DiPiRi : Our story", description : "Pack your bags, we'll take care of the sun! Our web application reinvents travel planning by suggesting destinations based on the weather you like. No more rainy vacations when you're dreaming of sunshine! Discover our vision in the “Our mission” section, and meet the people behind the project in the “Our team” section. Ready to travel differently? 🌍✨"}]
const h2Section = [{title : "Our mission", description : "Our mission is to revolutionize the way you plan your travels by offering personalized recommendations based on your weather preferences. We believe that everyone deserves a vacation that matches their dreams, and we are here to make it happen!"}, 
    {title : "Our team", description : "We are a passionate team of developers, designers, and travel enthusiasts who have come together to create a unique travel experience."},
]

function About() {

    return (
        <>
        <section className="contenair_H1">
            {h1Section.map((section, index) => (
                <div key={index} className="H1">
                    <h1>{section.title}</h1>
                    <p>{section.description}</p>
                </div>
            ))}
        </section>
        <section className="contenairparagraphs"> 
          {h2Section.map((section, index) => (
                <div key={index} className="paragraphs">
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                </div>
            ))}
        </section>

        <section className="contenairTeamCards">
            {teamCard.map((person, index) => (
                <div key={index} className="teamCard">
                    <img className="teamCardpicture" src={person.picture} alt={person.name} />
                    <div className ="teamCardText">
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                    </div>
                </div>
            ))}
        </section>
        </>
        
    )
}

export default About
