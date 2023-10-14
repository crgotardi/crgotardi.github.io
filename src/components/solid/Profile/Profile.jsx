import profile from '../../../dataset/profile.js';
import Icon from '../Icon/Icon.jsx';

const Profile = () => {
    const { name, photo, medias } = profile

    return (
        <div class="flex flex-col items-center">
            <img 
                src={photo} 
                alt={name}
                class="
                    w-50
                    grayscale hover:grayscale-0 
                    brightness-50 hover:brightness-100 
                    transition ease-in-out duration-150
                    cursor-pointer
                    mt-[10rem]
                "
            />
            <div class="mt-6 flex gap-5">
                {medias.map(media => (
                    <Icon
                        name={media.icon}
                        size="2rem"
                        link={media.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile;