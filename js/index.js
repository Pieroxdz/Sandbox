function toggleMenu() {
    const navButtons = document.querySelectorAll(".btn-nav");
    const navMenu = document.querySelector("nav ul");

    navButtons.forEach(elemento => {
        elemento.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        })
    })


}

toggleMenu();

async function getServices() {
    const response = await fetch("http://localhost:3000/services");
    const services = await response.json();
    // console.log(services);

    /* Iteramos con la info que tenemos de la api */
    services.map((service) => {
        createServiceItem(service.image,
            service.title,
            service.description,
            "Learn More",
            service.link);
    });
}


function createServiceItem(imageURL, title, description, linkText, linkHref) {
    /* ATRAPAMOS EL DIV PADRE */
    const servicesList = document.querySelector(".services-list");

    /* CREAMOS EL VID HIJO */
    const serviceItemContainer = document.createElement("DIV");
    serviceItemContainer.classList.add("service-item");

    /* CREAMOS LA IMAGEN */
    const serviceImage = document.createElement("IMG");
    serviceImage.setAttribute("src", imageURL);
    serviceItemContainer.append(serviceImage);

    /* CREAMOS EL TITULO */
    const titleService = document.createElement("H3");
    titleService.textContent = title;
    serviceItemContainer.append(titleService);

    /* CREAMOS EL PARRÁFO */
    const paragraphService = document.createElement("P");
    paragraphService.textContent = description;
    serviceItemContainer.append(paragraphService);

    /* CREAMOS EL ENLACE */
    const linkService = document.createElement("A");
    linkService.textContent = linkText;
    linkService.setAttribute("href", linkHref);
    serviceItemContainer.append(linkService);


    servicesList.append(serviceItemContainer);
}

getServices();


async function getTestimonials() {
    const response = await fetch("http://localhost:3000/testimonials");
    const testimonials = await response.json();
    console.log(testimonials);

    /* Iteramos con la info que tenemos de la api */
    testimonials.map((testimonial) => {
        createTestimonialItem(testimonial.author,
            testimonial.image,
            testimonial.area,
            testimonial.testimonial);
    });
}

function createTestimonialItem(author, imageURL, area, testimonial) {
    const testimonialsList = document.querySelector(".testimonials-list");
    const testimonialsItemContainer = document.createElement("div");
    testimonialsItemContainer.classList.add("testimonials-item");

    const paragraph = document.createElement("p");
    paragraph.textContent = testimonial;

    const testimonialAuthorContainer = document.createElement("div");
    testimonialAuthorContainer.classList.add("testimonials-author");

    const testimonialImageContainer = document.createElement("div");
    testimonialImageContainer.classList.add("image");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageURL);
    testimonialImageContainer.append(imageElement);

    const testimonialBioContainer = document.createElement("div");
    testimonialBioContainer.classList.add("bio");

    const authorElement = document.createElement("h3");
    authorElement.textContent = author;
    testimonialBioContainer.append(authorElement);

    const areaElement = document.createElement("p");
    areaElement.textContent = area;
    testimonialBioContainer.append(areaElement);

    testimonialAuthorContainer.append(
        testimonialImageContainer,
        testimonialBioContainer
    );

    testimonialsItemContainer.append(paragraph, testimonialAuthorContainer);

    testimonialsList.append(testimonialsItemContainer);
}

getTestimonials();

async function getFaqs() {
    const response = await fetch("http://localhost:3000/faqs");
    const faqs = await response.json();
    console.log(faqs);

    /* Iteramos con la info que tenemos de la api */
    faqs.map((faq) => {
        createFaqItem(faq.question,
            faq.answer,
        );
    });
}

function createFaqItem(question, answer) {
    const faqsList = document.querySelector(".faq-list");
    const faqsItemContainer = document.createElement("div");
    faqsItemContainer.classList.add("faq-item");

    const details = document.createElement("details");
    faqsItemContainer.append(details);

    const summary = document.createElement("summary");
    summary.textContent = question;
    details.append(summary);

    const ol = document.createElement("ol");
    details.append(ol);

    const p = document.createElement("p");
    p.textContent = answer;
    ol.append(p); 
    faqsList.append(faqsItemContainer);
}

getFaqs();


async function getTeam() {
    const response = await fetch("http://localhost:3000/team");
    const team = await response.json();
    console.log(team);

    /* Iteramos con la info que tenemos de la api */
    team.map((e) => {
        createTeamItem(e.name,
            e.image,
            e.area
        );
    });
}

function createTeamItem(name, imageURL, area) {
    const teamList = document.querySelector(".team-list");
    const teamItemContainer = document.createElement("div");
    teamItemContainer.classList.add("team-item");

    const imgTeam = document.createElement("IMG");
    imgTeam.setAttribute("src", imageURL);
    teamItemContainer.append(imgTeam);

    const  headingTeam = document.createElement("h3");
    headingTeam.textContent = name;
    teamItemContainer.append(headingTeam);

    const paragraphTeam = document.createElement("p");
    paragraphTeam.textContent = area;
    teamItemContainer.append(paragraphTeam);

    teamList.append(teamItemContainer);
}

getTeam();

async function getProjects() {
    const response = await fetch("http://localhost:3000/projects");
    const projects = await response.json();
    console.log(projects);

    /* Iteramos con la info que tenemos de la api */
    projects.map((project) => {
        createProjectItem(project.image,
            project.name,
            project.category
        );
    });
}

function createProjectItem(imageURL, name, category) {
    const projectList = document.querySelector(".projects-container");
    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("project");

    const imgProject = document.createElement("IMG");
    imgProject.setAttribute("src", imageURL);
    projectItemContainer.append(imgProject);

    const projectName = document.createElement("h3");
    projectName.textContent = name;
    projectItemContainer.append(projectName);

    const projectCategory = document.createElement("p");
    projectCategory.textContent = category;
    projectItemContainer.append(projectCategory);

    projectList.append(projectItemContainer);
}

getProjects();

async function getStrategyCards() {
    const response = await fetch("http://localhost:3000/strategys");
    const strategys = await response.json();
    console.log(strategys);

    /* Iteramos con la info que tenemos de la api */
    strategys.map((strategy) => {
        createStrategyItem(strategy.id,
            strategy.title,
            strategy.description
        );
    });
}

function createStrategyItem(id, title, description) {
    const strategyList = document.querySelector(".strategy-cards-container");
    const strategyItemContainer = document.createElement("div");
    strategyItemContainer.classList.add("strategy-card");

    const order = document.createElement("DIV");
    order.classList.add("order");
    order.textContent = `0${id}`;
    strategyItemContainer.append(order);

    const info = document.createElement("DIV");
    info.classList.add("info");
    strategyItemContainer.append(info);
    
    const strategyTitle = document.createElement("H3");
    strategyTitle.textContent = title;
    info.append(strategyTitle);

    const strategyDescription = document.createElement("P");
    strategyDescription.textContent = description;
    info.append(strategyDescription);

    strategyList.append(strategyItemContainer);
}

getStrategyCards();