import Sidebar from '../components/sidebar'
import Header from '../components/header'
import RegexForm from '../components/regex-form'
import MatchTextForm from '../components/match-text-form'
import RegexTemplates from '../components/regex-templates'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div id="main" className="pt-16 grid grid-cols-12">
        <Sidebar />
        <div className="h-full pt-8 col-span-10 mx-10">
          <div className="text-gray-darkest">
            <RegexForm />
            <MatchTextForm />
            <RegexTemplates />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
