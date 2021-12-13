
import { useState } from "react"

const Zad3 = () => {
    const links =[
        {
            'id':'1',
            'link':'https://www.link1.ex',
        },
        {
            'id':'2',
            'link':'https://www.link2.ex',
        },
        {
            'id':'3',
            'link':'https://www.link3.ex',
        },
        {
            'id':'4',
            'link':'https://www.link4.ex',
        }
    ]

    const [selected,setSelected] = useState(null)


    
    const select = (e:any) => {
        let elem:HTMLElement = e.target;
        if(selected)
        {
            selected.setAttribute('style','background-color:')
            setSelected(elem);
        }
        else{
            setSelected(elem)
        }
        elem.setAttribute('style','background-color:red'); 
    }

    return(
        <div>
        <ul>
        {
            links.map((element) => {
                return <li key={element.id}><a id={element.id} href='#' onClick={(e:any) => select(e)}>{element.link}</a></li> 
            })
        }
        </ul>
        </div>
    )
}

export default Zad3