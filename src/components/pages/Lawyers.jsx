import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { lawyers } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

const allCategory = ["Todos", ...new Set(lawyers.map((item) => item.category))]
export const Lawyers = () => {
  const [list, setLists] = useState(lawyers)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = lawyers.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "Todos") {
      setLists(lawyers)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Advogados' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
