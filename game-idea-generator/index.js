const SINGULAR_TO_PLURAL = {
    "princess":    "princesses",
    "superhero":   "superheroes",
    "baby":        "babies",
    "unluckiness": "unluckinesses",
    "gold":        "gold",
};
function toPlural(word) {
    let words = word.split(" ");
    let last_word = words.pop()
    if (last_word in SINGULAR_TO_PLURAL)
    {
        if (words.length === 0)
            return words.join(" ") + SINGULAR_TO_PLURAL[last_word];
        else
            return words.join(" ") + " " + SINGULAR_TO_PLURAL[last_word];
    }
    else if (words.length === 0)
        return last_word + "s";
    else
        return words.join(" ") + " " + last_word + "s";
}
function toIndefinite(word) {
    if ("aeoiyu".includes(word.charAt(0)))
        return "an " + word;
    else
        return "a " + word;
}


// ds - Definite   Singular
// is - Indefinite Singular
// dp - Definite   Plural
// id - Indefinite Plural
function is(x) { return toIndefinite(x);      }
function ip(x) { return toPlural(x);          }
function ds(x) { return "the " + x;           }
function dp(x) { return "the " + toPlural(x); }
function i(x)  { return choose([is, ip])(x) }
function d(x)  { return choose([ds, dp])(x) }
function p(x)  { return choose([ip, dp])(x) }
function s(x)  { return choose([is, ds])(x) }
function r(x)  { let f = choose(Object.values(all_modifiers)); return f(x); }


// A <genre> game...
const GENRES = [
    "puzzle",
    "FPS",
    "RPG",
    "horror",
    "action",
    "survivor",
    "metroidvania",
    "turned-based strategy",
    "real-time strategy",
    "tower defence",
    "detective",
    "racing",
    "stealth",
    "roguelike",
];

const CHARACTERS = [
    "prince",
    "princess",
    "alien",
    "monster",
    "superhero",
    "spider",
    "solider",
    "cute animal",
    "ogre",
    "baby",
    "sailor",
    "pilot",
    "idiot",
    "scientist",
    "cat",
];
// tries to...
const GOALS = [
    "kill all ${character:dp}",
    "avoid killing ${character:r}",
    "survive",
    "die",
    "get to ${place:ds}",
    "escape",
    "hide",
    "bring ${character:ds} to safety",
    "solve '${problem:ds}' dilemma",
    "take over the world",
    "take over ${place:ds}",
    "find their love interest",
    "build ${thing:is}",
    "deliver ${thing:is}",
    "buy ${thing:is}",
    "destroy ${thing:is}",
];
// without <challenge>...
const CHALLENGES = [
    "taking damage",
    "dying",
    "getting noticed",
    "breaking the rules",
    "loosing resources",
    "running out of time",
    "ever going backwards",
    "loosing their friend",
    "falling to their death",
    "getting sad",
    "getting too excited",
    "looking straight at ${character:ds}",
    "straining their muscles",
];
// use their <mechanic>...
const MECHANICS = [
    "magic spells",
    "jumping ability",
    "grappling hook",
    "strong odor",
    "animal impression",
    "teleportation",
    "building blocks",
    "cloning",
    "mind-reading",
    "terrain manipulation",
];
// but/about <problem>
// <problem> bothers
const PROBLEMS = [
    "war",
    "murder",
    "customer complaint",
    "overload of gold",
    "unfortunate unluckiness",
    "starving animal",
];
const THINGS = [
    "weapon",
    "car",
    "ladder",
    "computer game",
];
const PLACES = [
    "supermarket",
    "village",
    "mysterious planet",
    "dungeon",
    "school",
    "deserted island",
    "cruise ship",
    "restaurant",
    "abandoned mineshaft",
]
const TIMES = [
    "moment after the big bang",
    "jurassic period",
    "stone age",
    "medieval time",
    "renaissance",
    "industrial revolution",
    "present",
    "future",
]
const EVENTS = [
    "the world explodes",
    "the day turns to night",
    "the time runs out",
    "its just not worth it anymore",
]
const ADJECTIVES = [
    "thrilling",
    "stressful",
    "relaxing",
    "scary",
]

const re = /\${(character|thing|problem|place|challenges):(is|ip|ds|dp|r)}/;
const all_groups    = { "character": get_character, "thing": get_thing, "problem": get_problem, "place": get_place, "challenge": get_challenge };
const all_modifiers = { "is": is, "ip": ip, "ds": ds, "dp": dp, "r": r, "i": i, "d": d, "p": p, "s": s };

function get_character(f=r) { return f(g(CHARACTERS)); }
function get_problem(f=r)   { return f(g(PROBLEMS));   }
function get_place(f=r)     { return f(g(PLACES));     }
function get_thing(f=r)     { return f(g(THINGS));     }

function get_genre()     { return g(GENRES);        }
function get_goal()      { return g(GOALS);         }
function get_challenge() { return g(CHALLENGES);    }
function get_mechanic()  { return g(MECHANICS);     }
function get_time()      { return ds(g(TIMES));     }
function get_event()     { return g(EVENTS);        }
function get_adjective() { return g(ADJECTIVES);    }


const TEMPLATES = [
    function () {
        const x1 = get_genre();
        const x2 = get_character()
        const x3 = get_goal()
        const x4 = get_challenge()
        const x5 = get_mechanic()
        return `${is(x1).toTitle()} game where ${x2} tries to ${x3} without ${x4}, using their ${x5} to achieve the goal.`;
    },
    function () {
        const x1 = get_character(ds);
        const x2 = get_goal();
        const x3 = get_place(ds);
        const x4 = get_problem(i);
        const x5 = get_mechanic()
        const x6 = get_adjective();
        const x7 = get_genre();
        return `${x1.toTitle()} tries to ${x2} at ${x3} but ${x4} make things complicated. Fortunately, ${x1} can use their ${x5} in this ${x6} ${x7} game!`;
    },
    function () {
        const x1 = get_character();
        const x2 = get_problem(d);
        const x3 = get_place(s);
        const x4 = get_mechanic();
        const x6 = get_genre();
        const x7 = get_adjective();
        return `Nobody except ${x1} knows about ${x2} at ${x3} in this ${x7} ${x6} game. Using their ${x4} they might be able to turn everything around!`;
    },
    function () {
        const x1 = get_character(d);
        const x2 = get_problem(i);
        const x3 = get_place(ds);
        const x4 = get_mechanic();
        const x5 = get_character(is);
        const x6 = get_event();
        return `${x2.toTitle()} bothers ${x1} at ${x3}. ${x5.toTitle()} wants to help out by using their ${x4} but they must do it before ${x6}!`;
    },
    function () {
        const x1 = get_time();
        const x2 = get_genre();
        const x4 = get_character(i);
        const x5 = get_character(i);
        const x6 = get_mechanic();
        return `Taking place in ${x1}, ${x5} fight ${x4} in this ${x2} game using only their ${x6}.`;
    },
    function () {
        const x2 = get_problem();
        const x4 = get_character();
        const x5 = get_goal();
        const x6 = get_event();
        return `${x4.toTitle()} want to ${x5} before ${x6} but ${x2} is in their way.`;
    },
    function () {
        const x1 = get_mechanic();
        const x2 = get_mechanic();
        const x3 = get_character();
        const x4 = get_goal();
        const x5 = get_event();
        return `Using both ${x1} and ${x2}, ${x3} might be able to ${x4} until ${x5}.`;
    },
]


String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}

String.prototype.toTitle = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


function choose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function g(choices) {
    let choice = choose(choices);
    let match  = choice.match(re);
    while (match) {
        let k1 = match[1];
        let k2 = match[2];

        let group    = all_groups[k1];
        let modifier = all_modifiers[k2];

        choice = choice.replace(`\${${k1}:${k2}}`, group(modifier));
        match  = choice.match(re);
    }
    return choice;
}


function generate_idea() {
    const template = choose(TEMPLATES);
    const string   = template();
    let final_result = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ")
            final_result.push(string[i]);
        else
            final_result.push(`<span id="letter_${i}">${string[i]}</span>`);
    }

    document.getElementById("output").innerHTML = final_result.join("");

    const output = document.getElementById("output");
    for (let i = 0; i < output.children.length; i++) {
        let x = i / 66.0;
        output.children[i].style.animation = `fade-in 0.33s ${x}s forwards cubic-bezier(0.11, 0, 0.5, 0)`
    }

}
