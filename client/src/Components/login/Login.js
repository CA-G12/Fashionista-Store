import image from './cartIcon.png'
import Button from '../button/Button'

function Login() {
  return (
    <div>
      <img alt="tset" src={image} />
      <div>
        <form>
          <br />
          <br />
          <input placeholder="EMAIL" />
          <br />
          <br />
          <input placeholder="PASSWORD" />
          <br />
          <br />
          <Button />
        </form>
      </div>
    </div>
  )
}

export default Login
