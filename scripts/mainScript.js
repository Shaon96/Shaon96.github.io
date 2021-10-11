const contentType = {
    HOME: 'home',
    ABOUT: 'about',
    EDUCATION: 'education',
    EXPERIENCE: 'experience',
    PROJECT_PUBLICATION: 'project_publication'
}


function updateContent(selectedContentType) {
    let selectedClassName, selectedOption;
    switch (selectedContentType) {
        case contentType.HOME:
            selectedClassName = "home";
            selectedOption = "home"
            break;
        case contentType.ABOUT:
            selectedClassName = "about-body";
            selectedOption = "about"
            break;
        case contentType.EDUCATION:
            selectedClassName = "education-full-body";
            selectedOption = "education"
            break;
        case contentType.EXPERIENCE:
            selectedClassName = "experience-body";
            selectedOption = "experience"
            break;
    }

    var selectElement = document.getElementById("nav-menu-drop");
    selectElement.value = selectedOption;

    const contentClasses = ["home", "about-body", "education-full-body", "experience-body"];

    contentClasses.forEach((classNameItem) => {
        if (classNameItem == selectedClassName) {
            var selectedContent = document.getElementsByClassName(selectedClassName);
            selectedContent[0].style.display = 'block';
        } else {
            var otherContent = document.getElementsByClassName(classNameItem);
            otherContent[0].style.display = 'none';
        }
    })
}

/**
 * Dynamically load content in content pane
 */

function loadHome() {
    updateContent(contentType.HOME);
}

function loadAbout() {
    updateContent(contentType.ABOUT);
}

function loadEducation() {
    updateContent(contentType.EDUCATION);
}

function loadExperience() {
    updateContent(contentType.EXPERIENCE);
}

function loadProject() {
    updateContent(contentType.PROJECT_PUBLICATION);
}

function onPageLoad() {
    loadHome();
    tick();
}

function tick() {
    var interval = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('tock()', interval) // disable when unloaded
}

function tock() {
    var x = new Date()
    var timeElements = document.getElementsByClassName('date-time-display');

    timeElements[0].innerHTML = x.toLocaleDateString() + "\n" + x.toLocaleTimeString();
    timeElements[1].innerHTML = x.toLocaleDateString() + "\n" + x.toLocaleTimeString();

    tick();
}

function optionChanged() {
    var selectMenuElement = document.getElementById("nav-menu-drop");

    // console.log("option was changed to " + selectMenuElement.value);
    switch (selectMenuElement.value) {
        case "home":
            {
                loadHome();
                break;
            }
        case "about":
            {
                loadAbout();
                break;
            }
        case "education":
            {
                loadEducation();
                break;
            }
        case "experience":
            {
                loadExperience();
                break;
            }
        case "project":
            {
                loadProject();
                break;
            }
    }
}