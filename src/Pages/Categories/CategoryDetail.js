import React from 'react'
import PropTypes from 'prop-types'
import "./Category.scss"

function CategoryDetail(props) {
  return (
    <div className='category__detail'>
        <div className="category__detail--banner">
            <img src='https://photo-zmp3.zmdcdn.me/cover/5/7/d/b/57dbc9145318876d3d79e26a99ec8a83.jpg' alt='banner'/>
        </div>
        <div className="category__detail--box">
            <div className="category__detail--item">
                <div className="category__detail--item_img">
                    <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/8/4/6/5846eb739c6e94d088e86fc0ab61fd56.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

CategoryDetail.propTypes = {}

export default CategoryDetail
