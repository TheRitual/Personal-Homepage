import { Tile } from "../../components/Tiles";

const list = [
    "Effective communication",
    "Teamwork",
    "Responsibility",
    "Creativity",
    "Problem-solving",
    "Leadership",
    "Extroversion",
    "People skills",
];

const Skills = () => {
    return (
        <>
            <Tile title="My skillset includes 🛠️" list={list} />
            <Tile title="What I want to learn next 🚀" />
        </>
    );
}

export default Skills;