import React from 'react'
import SkeletonElement from './SkeletonElement'
const SkeletonArticle = ({theme}) => {
  const selectedTheme= theme || "light";
  return (
    <div className={`skeleton-wrapper ${selectedTheme}`}>
        <div className="skeleton-article">
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
    </div>
  )
}

export default SkeletonArticle