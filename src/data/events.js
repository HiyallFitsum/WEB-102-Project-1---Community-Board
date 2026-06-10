

export const events = [
    { id: 1, title: "...", date: "...", description: "..."},
    { id: 2, title: "...", date: "...", description: "..."},
]

function Card({ title, date, description}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default Card