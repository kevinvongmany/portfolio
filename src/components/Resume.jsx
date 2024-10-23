import Animated from './Animated';

export default function Resume() {
    return (
      <Animated>
      <p className='mb-8 text-gray-400 leading-relaxed'>
        8+ years of solution development experience, with a proven track record of delivering high-impact tactical solutions. Delivered key integrated solutions & managed services with well-known major brands and retailers such as Woolworths, Westfields, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
        <h2 className='text-4xl mb-4 text-blue-600 font-bold'>Experience</h2>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Solution Engineer</h3>
          <p className='mb-1 text-gray-500'>TechMedia (a PMY company)</p>
          <p className='mb-2 text-gray-400'>Apr 2024 - present</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Solution Developer</h3>
          <p className='mb-1 text-gray-500'>TechMedia (a PMY company)</p>
          <p className='mb-2 text-gray-400'>Mar 2023 - April 2024</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Content Services Lead</h3>
          <p className='mb-1 text-gray-500'>TechMedia Digital Systems</p>
          <p className='mb-2 text-gray-400'>Jul 2019 - Mar 2023</p>
        </div>
        </div>
        <div>
        <h2 className='text-4xl mb-4 text-blue-600 font-bold'>Technical Skills</h2>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Languages</h3>
          <p className='mb-1 text-gray-400'>Python, JavaScript, PHP, HTML</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Frameworks</h3>
          <p className='mb-1 text-gray-400'>React, Angular, Vue, Django</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Tools</h3>
          <p className='mb-1 text-gray-400'>Git, Docker, Jenkins, JIRA</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Backend API</h3>
          <p className='mb-1 text-gray-400'>FastAPI, Flask, ExpressJS</p>
        </div>
        </div>
        <div>
        <h2 className='text-4xl mb-4 text-blue-600 font-bold'>General Skills</h2>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Technical Support</h3>
          <p className='mb-1 text-gray-400'>Provide level 3 customer support for custom software solutions, integration and CMS platforms.</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Mentorship & Training</h3>
          <p className='mb-1 text-gray-400'>Provide internal training sessions, client-facing training sessions and weekend coding workshops.</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Team & Project Management</h3>
          <p className='mb-1 text-gray-400'>Code Review, Pair Programming, Agile Development</p>
        </div>
        <div className='mb-6'>
          <h3 className='text-2xl mt-1 mb-2 text-blue-500 font-semibold'>Technical Writing</h3>
          <p className='mb-1 text-gray-400'>Documentation, Markdown, Wiki, API docs</p>
        </div>
        </div>
      </div>
      </Animated>
    )
  }