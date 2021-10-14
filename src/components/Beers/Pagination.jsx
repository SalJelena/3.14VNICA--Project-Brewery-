import { useState } from "react";
import { useEffect } from "react";
import StyledButtons from "./Styles/StyledButtons";
import StyledButtonsSection from './Styles/StyledButtonsSection'


const Pagination = ({beers, displayed, setOnPage}) => {

    let length = beers.length
    let numberOfPages = Math.ceil(length / displayed)

    const [pages, setPages] = useState([])
    const [currPage, setCurrPage] = useState(1)

    const changePage = (page) => {
        setCurrPage(page)
        let start = displayed * (page - 1)
        let end = start + Number(displayed)
        setOnPage(beers.slice(start, end))
    }


    useEffect(() => {
        let tmp = []
        for(let i=1; i<=numberOfPages; i++){
            tmp.push(i)
        }
    
        setPages(tmp)
    },[displayed,numberOfPages])


    return (
        <>
        {
            displayed <= 6 ?

            <StyledButtonsSection>
            <StyledButtons disabled={currPage <= 1} onClick={()=>{
            changePage(currPage -1)
            }}>BACK</StyledButtons>
            {pages.map(page => <StyledButtons key={page} onClick={()=>{changePage(page)}} >{page}</StyledButtons>)}
            <StyledButtons disabled={currPage >= pages.length} onClick={()=>{changePage(currPage + 1)}} >NEXT</StyledButtons>
            </StyledButtonsSection>

            :

            <div></div>

        }


        </>
    )
}

export default Pagination