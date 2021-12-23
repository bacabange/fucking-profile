import Link from 'next/link'
import React from 'react'

interface PaginationProps {
  next?: number | null;
  prev?: number | null;
}

const Pagination: React.FC<PaginationProps> = ({next = null, prev = null}) => {
  return (
    <ul className="pagination">
      <li>
        <Link href={`/page/${prev}`}>
          <a className={`pagination-item ${prev ? 'pagination-item--active' : 'pagination-item--inactive'}`}>
            &lsaquo;
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/page/${next}`}>
          <a className={`pagination-item ${next ? 'pagination-item--active' : 'pagination-item--inactive'}`}>
            &rsaquo;
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Pagination
