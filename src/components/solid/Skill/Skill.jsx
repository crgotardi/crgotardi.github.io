import Icon from "../Icon/Icon"

const Skill = ({ props }) => {
    const { icon, name, progress } = props

    return (
        <>
            <div class="flex gap-5 items-center">
                <Icon name={icon} size="3rem" />
                <div>
                    <h5 class="title-h5 mb-1">
                        {name}
                    </h5>
                    <div class="bar w-[200px]">
                        <div
                            class="progress-bar bg-sky-600 rounded h-1"
                            style={{ 'width': `${progress * 2}px` }}
                        >
                        </div>
                        <span class="bg-sky-600 p-1 rounded text-xs font-semibold">
                            {progress}%
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill