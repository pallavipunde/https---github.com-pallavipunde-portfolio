// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Projects Data (Replace with your actual projects)
    const projects = [
        {
            title: 'Online Quiz App',
            description: 'A web-based online quiz application.',
            link: 'https://github.com/pallavipunde/https---github.com-pallavipunde-online-quiz-app'
        },
        {
            title: 'Resume Creator',
            description: 'A web application to create and download resumes.',
            link: 'https://github.com/pallavipunde/Project-Resume-creat'
        },
        // Add more projects as needed
    ];

    // Skills Data (Replace with your actual skills)
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'java' ,
        'c' ,
        'c++'
        //add more skills
    ];

    // Populate Projects
    const projectContainer = document.getElementById('projectContainer');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectDiv);
    });

    //populate skills
    const skillContainer = document.getElementById('skillContainer');
    const skillList = document.createElement('ul');
    skills.forEach(skill=>{
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillList.appendChild(skillItem);
    });
    skillContainer.appendChild(skillList);
});