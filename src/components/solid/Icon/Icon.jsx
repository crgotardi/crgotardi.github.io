import {
    FaBrandsReact,
    FaBrandsVuejs,
    FaBrandsSquareJs,
    FaBrandsHtml5,
    FaBrandsCss3Alt,
    FaBrandsSass,
    FaBrandsDocker,
    FaBrandsNodeJs,
    FaBrandsGitAlt,
    FaBrandsFigma,
    FaBrandsLinkedin
} from 'solid-icons/fa'

import {
    AiFillGithub
} from 'solid-icons/ai'

import {
    BiLogosTailwindCss,
    BiLogosGmail
} from 'solid-icons/bi'

import {
    TbBrandNextjs,
    TbBrandNuxt,
    TbBrandSolidjs
} from 'solid-icons/tb'

import {
    SiAdobexd,
    SiPostgresql,
    SiKubernetes,
    SiRemix,
    SiAstro
} from 'solid-icons/si'

import {
    BsFilePdf,
    BsSunFill,
    BsMoonFill
} from 'solid-icons/bs'

import {
    HiOutlineArrowLongRight
} from 'solid-icons/hi'

const Icon = ({ name, size = "1rem", link = null, color = null, callback = null }) => {    
    const icons = {
        'arrow-right': <HiOutlineArrowLongRight />,
        'astro': <SiAstro />,
        'css': <FaBrandsCss3Alt />,
        'docker': <FaBrandsDocker />,
        'figma': <FaBrandsFigma />,
        'github': <AiFillGithub />,
        'git': <FaBrandsGitAlt />,
        'gmail': <BiLogosGmail />,
        'html': <FaBrandsHtml5 />,
        'js': <FaBrandsSquareJs />,
        'k8s': <SiKubernetes />,
        'linkedin': <FaBrandsLinkedin />,
        'moon': <BsMoonFill />,
        'node': <FaBrandsNodeJs />,
        'nuxt': <TbBrandNuxt />,
        'next': <TbBrandNextjs />,
        'pdf': <BsFilePdf />,
        'postgre': <SiPostgresql />,
        'react': <FaBrandsReact />,
        'remix': <SiRemix />,
        'sass': <FaBrandsSass />,
        'solid': <TbBrandSolidjs />,
        'sun': <BsSunFill />,
        'tailwind': <BiLogosTailwindCss />,
        'vue': <FaBrandsVuejs />,
        'xd': <SiAdobexd />,
    };

    function handleCallback() {
        if (callback && typeof callback === 'function') {
            callback()
        }
    }

    return (
        <a
            style={{ 'font-size': size }}
            class={`${color} transition-all`}
            href={link ? link : null}
            target={link ? "_blank" : null}
            onClick={handleCallback}
        >
            { icons[name] }
        </a>
    )
}

export default Icon