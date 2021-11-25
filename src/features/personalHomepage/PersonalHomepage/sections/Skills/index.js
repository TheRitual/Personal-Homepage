import { Tile } from "../../components/Tiles";

const skills = [
    "JavaScript",
    "Java",
    "HTML5",
    "CSS3",
    "React.js",
    "Redux + Saga",
    "ReduxJS Toolkit",
    "Styled-Components",
    "React Hooks",
    "Node Package Manager",
    "Axios",
    "GIT",
    "REST API",
    "MongoDB",
    "JUnit",
    "SQL",
    "Agile / SCRUM",
    "Trello",
    "Adobe Photoshop",
    "Adobe Premiere",
    "Adobe AfterEffects",
    "Adobe Illustrator",
    "Figma",
    "Effective communication",
    "Teamwork",
    "Responsibility",
    "Creativity",
    "Problem-solving",
    "Conflict resolution",
    "Flexibility",
    "Empathy",
    "UX/UI aesthetic",
    "Learnability",
    "Result-oriented",
    "Continue self-improvement by learning",
];

const learn = [
    "Next.js",
    "Spring Framework",
    "Node.js",
    "React Native",
    "Unit testing",
    "TypeScript",
    "Google Cloud Platform",
    "OAuth2",
    "GraphQL",
];

const Skills = () => {
    return (
        <>
            <Tile title="My skillset includes 🛠️" list={skills} />
            <Tile title="What I want to learn next 🚀" list={learn} />
        </>
    );
}

export default Skills;