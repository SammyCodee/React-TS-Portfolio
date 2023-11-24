const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;

type SkillLevel = (typeof SKILL_LEVELS)[number] //get the actual string literal autocomplete suggestions

const skill_level: SkillLevel = "Beginner" //auto complete