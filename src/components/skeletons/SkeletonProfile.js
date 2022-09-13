import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = ({theme}) => {
    const selectedTheme= theme || "light";
  return (
    <div className={`skeleton-wrapper ${selectedTheme}`}>
        <div className="skeleton-Profile">
          <div>
            <SkeletonElement type="avatar"/>
            <SkeletonElement type="title"/>
          </div>
          <div>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
          </div>
        </div>
    </div>
  )
}

export default SkeletonProfile