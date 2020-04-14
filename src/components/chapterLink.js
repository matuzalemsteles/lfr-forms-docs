import React from "react"
import { Link } from "gatsby"

import './chapterLink.css';

const ChapterLink = ({ chapter }) => (
    <div className="chapter-link">
        <Link to={chapter.frontmatter.path}>
            <span className="chapter-index">{chapter.frontmatter.order}</span>
            {` - `}
            <span className="chapter-title">{chapter.frontmatter.title}</span>
        </Link>
    </div>
)

export default ChapterLink;