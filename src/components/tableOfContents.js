import React from "react"
import ChapterLink from './chapterLink';

import './tableOfContents.css';

const TableOfContents = ({ chapters }) => {
    chapters.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order);

    return (
        <div className="table-of-contents">
            <h3>Conteúdo</h3>

            {chapters.map(chapter => {
                return (
                    <div className="table-of-contents-chapter" key={chapter.node.id}>
                        <ChapterLink chapter={chapter.node} />

                        {chapter.node.headings.map(({value}, index) => {
                            return (
                                <div className="chapter-description" key={value}>
                                    {chapter.node.frontmatter.order}.{index + 1} - {value}
                                </div>
                            );
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default TableOfContents;