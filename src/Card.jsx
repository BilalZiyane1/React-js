import profilePic from './assets/me.jpg'

const Card = ()=>{
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Bilal Ziyane</h2>
            <p className='card-text'>I'm a computer science student</p>
        </div>
    )
}

export default Card