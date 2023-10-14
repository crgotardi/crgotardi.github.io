import Skill from "../Skill/Skill"
import sets from "../../../dataset/skills"

const SkillSet = () => {
    return (
        <>
            {sets.map((set) =>
                <div class="mb-16">
                    <h4 class="text-h4">{set.name}</h4>
                    <div class="container flex flex-wrap gap-6">
                        {set.skills.map((skill) =>
                            <Skill props={skill} />
                        )}
                    </div>
                </div>
            )}
            
        </>
    )
}

export default SkillSet