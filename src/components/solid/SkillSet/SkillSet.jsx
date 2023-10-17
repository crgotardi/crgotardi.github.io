import skills from "@dataset/skills"
import { Skill } from "@components/solid/";


const SkillSet = () => {
    return (
        <>
            {skills.map((set) =>
                <div class="mb-16">
                    <h4 class="sm:text-h4 text-h5">{set.name}</h4>
                    <div class="container flex flex-wrap gap-6 xs:justify-stretch justify-center">
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