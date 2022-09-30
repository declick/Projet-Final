
        
     import { useNavigate } from 'react-router-dom';

const Reserver = () => {
    const navigate = useNavigate();
    return (
   
        <button onClick={() => navigate('/Home')} />
     
    )
}
        

export default Reserver