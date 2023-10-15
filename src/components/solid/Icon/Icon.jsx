import {
    FaRegularMoon,
    FaRegularSun,
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
    BsFilePdf
} from 'solid-icons/bs'

import {
    HiOutlineArrowLongRight
} from 'solid-icons/hi'

const Icon = ({ name, size="1rem", link=null, color=null}) => {
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
        'moon': <FaRegularMoon />,
        'node': <FaBrandsNodeJs />,
        'nuxt': <TbBrandNuxt />,
        'next': <TbBrandNextjs />,
        'pdf': <BsFilePdf />,
        'postgre': <SiPostgresql />,
        'react': <FaBrandsReact />,
        'remix': <SiRemix />,
        'sass': <FaBrandsSass />,
        'solid': <TbBrandSolidjs />,
        'sun': <FaRegularSun />,
        'tailwind': <BiLogosTailwindCss />,
        'vue': <FaBrandsVuejs />,
        'xd': <SiAdobexd />,
    };

    return (
        <a
            style={{ 'font-size': size }}
            href={link ? link : null}
            target={link ? "_blank" : null}
            class={`${color}`}
        >
            { icons[name] }
        </a>
    )
}

export default Icon