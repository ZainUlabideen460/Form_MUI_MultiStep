import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputCom from '../components/InputCom';


const Home = () => {
    const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
const handlechange=(e)=>{
    const { name, value } = e.target; // Ensure 'e' is the event object
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        }

}
const navigate=useNavigate();
    const handleclick=()=>{
        const datanew={name,email}
        navigate("/form",{state:datanew })
        
    }
    
  return (
    <div>
    <div className='w-full h-[50px] pt-3 flex bg-gray-200 justify-around'>
        <div>
        <img src="/favicon.ico" alt="Logo"  height={"30px"} width="30px"/>
        </div>
        <div className='text-black'><ul
        className='flex gap-10'>
        <li>
            <Link to={"/"}>Home</Link></li>
        <li><Link to={"/form"}>
        Form
        </Link>
            </li>
      </ul></div>

      </div>
      <div>
        <div>
        <InputCom
          placeholder='Name'
          name='name'
          value={name}
          onChange={handlechange}
          label='Name'
        />
        </div>
        <div>
        <InputCom
          type="email"
          placeholder='Email'
          name='email'
          value={email}
          onChange={handlechange}
          label='Email'
        />
        </div>
        <div>
            <button onClick={handleclick}>Go To Form</button>
        </div>
      </div>

      
    </div>
  )
}

export default Home
