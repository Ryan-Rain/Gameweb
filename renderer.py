from dataclasses import dataclass
from typing import Optional
from string import ascii_letters, digits, capwords

VALID_LETTERS = ascii_letters + digits + '_'

@dataclass
class Person:
    name: str
    description: str
    mail: str
    image: str = 'homepage.jpg'

@dataclass
class Project:
    name: str
    description: str
    image_format: str = "png"
    href: Optional[str] = None

@dataclass
class Skill:
    title: str
    description: str
    icon: str


def clean(string: str):
    string = string.replace(" ", "_")
    string = ''.join(x for x in string if x in VALID_LETTERS)
    return string


def render_project(project: Project):
    href  = project.href or f'projects/{clean(project.name)}.html'
    img   = f'static/{clean(project.name)}.{project.image_format}'
    title = f'{capwords(project.name)}'
    desc  = f'{project.description.capitalize()}'
    return f"""
        <div class="column">
            <div class="card">
                <div class="image">
                    <a href={href}>
                        <img src="{img}" alt="{title}">
                        <div class="project-text">
                            <h2>{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        """


def render_skill(skill: Skill):
    title = capwords(skill.title)
    desc  = skill.description.capitalize()
    return f"""
        <div class="skill">
            <div class="icon">{skill.icon}</div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        """


def render_hero(person: Person):
    description = '\n'.join(['<h2>' + desc.strip() + '</h2>' for desc in person.description.split('\n')])
    return f"""
    <h1>{person.name.upper()}</h1>
    {description}
    """


def render_index(person: Person, projects: [Project], skills: [Skill]):
    return f"""\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{capwords(person.name)}</title>
    <script src="https://use.fontawesome.com/c301710f3d.js"></script>
    <link rel="stylesheet" href="index.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200;300&family=Roboto+Slab&display=swap" rel="stylesheet">
</head>
<body>

    <!--  NAVBAR  -->
    <div id="navbar">
        <div><a id="home-link" href="#" class="active">{capwords(person.name)}</a></div>
        <ul>
            <li><a id="contact-link"   href="#contact" >Contact</a></li>
            <li><a id="skills-link"    href="#skills"  >Skills</a></li>
            <li><a id="projects-link"  href="#projects">Projects</a></li>
        </ul>

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>


    <!--  HERO  -->
    <div id="hero" style="background-image: url('static/{person.image}')">
        <div id="hero-content">
            {render_hero(person)}
        </div>
    </div>


    <!--  PROJECTS  -->
    <div id="projects">
        <h1>Projects</h1>
        <h2>Some projects I've worked on</h2>

        <div class="cards" id="card-section">
            {''.join(render_project(project) for project in projects)}
        </div>
    </div>


    <!--  Skills  -->
    <h1 style="text-align: center; margin-top: 32px">Skills</h1>
    <div id="skills">
        {''.join(render_skill(skill) for skill in skills)}
    </div>


    <!--  CONTACT  -->
    <div id="contact">
        <h1>Want to get in touch?</h1>
        <p>Project Management - Game Design - Concept Design - Education - Media Production</p>
        <div class="mail-button"><a href="mailto:{person.mail}?subject=I saw your portfolio and...">Get In Touch!</a></div>
    </div>


</body>
<script src="index.js"></script>
</html>
"""
