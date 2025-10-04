import css from "./PaginationItem.module.css";
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
  const liClasses = classNames({
    [css.pageItem]: true,
    [css.active]: page === currentPage,
    [css.disabled]: isDisabled,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className={css.pageLink}>{page}</span>
    </li>
  );
};

export default PaginationItem;
