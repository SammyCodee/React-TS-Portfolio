type Person = {
    name: string;
    skillLevel: 'Beginner' | 'Intermediate' | 'Expert' | 'Master'
}

const person: Person = {name: 'bob', skillLevel: "Expert"}
printSkillLevel(person.skillLevel)

function printSkillLevel(skillLevel: Person["skillLevel"]){
    console.log(skillLevel)
}

type PersonGroupBySkillLevel = {
    [index in Person["skillLevel"]]: Person[]
}

const a:PersonGroupBySkillLevel = {
    "Beginner": [],
    "Intermediate": [],
    "Expert": [],
    "Master": []
}


const b = {
    name: 'Rain',
    age: 33,
    isProgrammer: true
}

type B = (typeof b)[keyof typeof b] //object value's type: string | number | boolean
type C = (typeof b)["isProgrammer"] //boolean