export const getProjects = async () => {
    
    const response = await fetch("/PersonalHomepage/portfolio.json");
    if (!response.ok) {
        new Error((response).statusText);
    }

    return await response.json();
};