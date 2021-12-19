import React , {useState , useEffect} from 'react'
import axios from 'axios'
import  {Header}  from './component/ui/Header'
import './Project.css'
import { CharacterGrid } from './component/characters/CharacterGrid'



const  Project = () =>{
    const [items , setItems] = useState ([])
    const[loading , setLoding] = useState([true])

    useEffect(() => {
        const getData = async()=>{
            const apiData = await axios('https://www.breakingbadapi.com/api/characters')
        console.log(apiData.data);
        setItems(apiData.data)
       
        setLoding(false)
    }

        getData();
        
    }, [])
    return (
        <div>
            <Header/>
            <CharacterGrid loading={loading} items={items}/>
        </div>
    )
}

export default Project
