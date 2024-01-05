import {useState,useEffect} from 'react'
import {RiSearchLine} from 'react-icons/ri'
export default function Main(){
  return(
    <>
    <div className='container' style={{
      backgroundColor:'black',
      paddingBottom:'60rem'

    }}>
      <div style={{
        display:'flex',
        flexDirection:'column',
       
        alignItems:'center'

      }}>
    <div style={{color:'white',fontSize:'5rem'}}>REV.IT</div>
    <div>
      <Search style={{padding:'60px'}}></Search>
    </div>
    </div>
    <div style={{fontSize:'5rem',color:'white',fontWeight:'bold',textAlign:'center'}}>
      Search to Rate
     
    </div>
    </div>
    </>
  )
}
function Search({style}){
  return(
    <>
      <div style={style}> 
        <input style={{padding:'10px',margin:'6px',borderRadius:'30px',border:'none',outline:'none'}} type="text" id="searchm" placeholder='search a movie or tvshow'></input>
        <RiSearchLine style={{color:'white',cursor:'pointer',marginLeft:'15px'}}className="search-icon" />
      </div>
    </>
  )
}

