import { useState } from "react"

const Zad2 = () => {
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

    
    const select = (e:any) => {
        let elem:HTMLElement = e.target;
        elem.style.backgroundColor === '' ? elem.setAttribute('style','background-color:red') : elem.setAttribute('style','background-color:')
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

export default Zad2