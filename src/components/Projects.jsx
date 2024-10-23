import Animated from './Animated';
import beatbrowser from '../assets/beatbrowser.png';
import cinejournal from '../assets/cinejournal.png';
import techBlog from '../assets/tech-blog-webpage.png';
import socialNetworkApi from '../assets/social-network-api.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import pwaTextEditor from '../assets/pwa-text-editor.png';
import Project from './Project';

const projects = [
  {
    repository: 'beatbrowser',
    image: beatbrowser,
    name: 'BeatBrowser'
  },
  {
    repository: 'cinejournal-webapp',
    image: cinejournal,
    name: 'CineJournal'
  },
  {
    repository: 'tech-blog-webpage',
    image: techBlog,
    name: 'Tech Blog Webpage'
  },
  {
    repository: 'social-network-api',
    image: socialNetworkApi,
    name: 'Social Network API'
  },
  {
    repository: 'weather-dashboard',
    image: weatherDashboard,
    name: 'Weather Dashboard'
  },
  {
    repository: 'pwa-text-editor',
    image: pwaTextEditor,
    name: 'PWA Text Editor'
  }
]

export default function Projects() {
    return (
      <Animated>
      <h1 className="mb-4 text-blue-500 ">Projects</h1>
      <h2 className="mb-4 text-2xl">Unfortunately most of my projects are considered proprietary, but feel free to check some of my home projects below!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
        <Project key={index} image={project.image} repository={project.repository} name={project.name} />
        ))}
      </div>
      <p className="mt-4 text-gray-400">Please note that some of these projects may be outdated or no longer maintained.</p>
      <h2 className="mt-8 text-2xl">Want to see more? Check out my <a href="https://github.com/kevinvongmany" target="_blank" className="text-blue-600">GitHub</a>!</h2>
      </Animated>
    )
  }