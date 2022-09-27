import Card from "../components/Shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return <Card>
    <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave a feedback for a project or product</p>
        <p>Verrsion: 1.0.0</p>
        <p>
            <Link to="/">back to home</Link>
        </p>
    </div>
  </Card>
}

export default AboutPage
