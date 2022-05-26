from renderer import *

me = Person(
    name="johnny blower",
    description= "A game",
    mail='tedber@kth.se',
    image='static/level_background_0.png',
)

projects = [
    Project(name="bachelor's thesis",        description="gråskalors kontrast och dess påverkan på ögonblinkningar vid användning av datorskärmar", href="https://www.diva-portal.org/smash/record.jsf?dswid=-6468&pid=diva2%3A1334691&c=2&searchType=SIMPLE&language=sv&query=viktor+lemon&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"),
    Project(name="master's thesis",          description="designing a Precious Key: A First-Person Creation, Exploration and evaluation-process", href="http://www.diva-portal.org/smash/record.jsf?dswid=-6468&pid=diva2%3A1647637&c=1&searchType=SIMPLE&language=sv&query=Martin+Lindberg+precious+key&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"),

]

skills = [
    Skill(title="Driver’s License",   description="I have a driver’s license of type B, administered in Sweden",                                          icon='<i class="fa fa-car fa-10x" aria-hidden="true"></i>'),
    Skill(title="Gamer",              description="I have a catalog of over 690 completed games, giving me a great experience in aspects of game design", icon='<i class="fa fa-gamepad fa-10x" aria-hidden="true"></i>'),
]


with open('index.html', 'w') as index:
    index.write(render_index(me, projects, skills))
