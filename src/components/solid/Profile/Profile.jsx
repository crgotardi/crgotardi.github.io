import profile from '@dataset/profile';
import { Icon } from "@components/solid/";

const Profile = () => {
    const { name, photo, medias } = profile

    return (
        <div class="flex flex-col items-center">
            <img 
                src={photo} 
                alt={name}
                class="
                    w-60
                    cursor-pointer
                    rounded-full
                "
            />
            <div class="mt-6 flex gap-5">
                {medias.map(media => (
                    <Icon
                        name={media.icon}
                        size="2rem"
                        link={media.link}
                        color="
                            text-action-light 
                            dark:text-action-dark 
                            hover:text-sky-200
                            hover:dark:text-sky-200 
                        "
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile;