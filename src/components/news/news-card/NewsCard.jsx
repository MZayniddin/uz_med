import React from 'react'
import "./NewsCard.scss"
import section from "../../../assets/images/section-bg.jpg"

 function NewsCard(props) {
  return (
    <div>
        <div className="new_box">
                    <img className="new_box_img" src={section} alt="" />
                    <div className="new_box_text">
                        <h2 className="new_box_text1">Training and research centers (labs) in the  framework of the ERASMUS PLUS projects at TTPU</h2>
                        <p className="new_box_text2">Training and research centers (labs) in the  framework of th...</p>
                    </div>
                </div>
    </div>
  )
}

export default NewsCard