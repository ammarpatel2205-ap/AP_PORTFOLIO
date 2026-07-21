import { FaJs, FaCss3Alt, FaHtml5, FaBootstrap, FaReact} from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiGit, SiGithub } from 'react-icons/si'
import profileImg from '../assets/profile.avif'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Projects', 'Skills', 'Contact']


export const skillsData = [
    {
        icon: FaHtml5,
        title: 'HTML',
        technologies: ['HTML5']
    },
    {
        icon: FaCss3Alt,
        title: 'CSS',
        technologies: ['CSS3']
    },
    {
        icon: FaJs,
        title: 'JavaScript',
        technologies: ['ES6+']
    },
    {
        icon: FaBootstrap,
        title: 'Bootstrap',
        technologies: ['Bootsrap 5']
    },
    {
        icon: RiTailwindCssFill,
        title: 'Tailwind Css',
        technologies: ['Tailwind Css']
    },
    {
        icon: FaReact,
        title: 'React',
        technologies: ['React JS']
    },
    {
        icon: SiGit,
        title: 'Git',
        technologies: ['Version Control']
    },
    {
        icon: SiGithub,
        title: 'GitHub',
        technologies: ['Code Hosting']
    }
]



export const projectData = [
    {
        title: 'Jeevan Sandhya',
        description: 'Jeevan Sandhya – Old Age Care Center is a web-based Old Age Home Management System developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB to efficiently manage senior residents, staff, activities, and user records.',
        image: 'src/assets/jeevan.png',
        live: 'https://jeevan-sandhya-old-age-care-center.onrender.com/home.html',
        repo: 'https://github.com/ammarpatel2205-ap/jeevan-sandhya',
        tech: ['HTML', 'CSS', 'JavaScript',
            'Node.js\n', 'Express.js', 'MongoDB']
    },
    {
        title: 'Crazy Fitness Gym',
        description: 'Crazy Fitness Gym is a responsive fitness website built using HTML, CSS, and JavaScript that showcases gym services, trainers, membership plans, and contact information with an engaging user interface.',
        image: 'src/assets/gym.png',
        live: 'https://crazy-fitness-gym.vercel.app/',
        repo: 'https://github.com/ammarpatel2205-ap/crazy-fitness-gym',
        tech: ['HTML', 'CSS', 'JavaScript']
    },
    
    {
        title: 'ToDo App',
        description: 'A responsive task management app built with React and Tailwind CSS to organize daily tasks efficiently.',
        image: 'src/assets/todo.png',
        live: 'https://to-do-react-app-wheat.vercel.app/',
        repo: 'https://github.com/ammarpatel2205-ap/todo-app',
        tech: ['React', 'Tailwindcss']
    },
]

