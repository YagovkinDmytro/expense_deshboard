import Pagination from "../Pagination/Pagination.jsx";

const PaginationComponent = ({ currentPage, onPageChange }) => {
  return (
    <div className="container">
      <Pagination
        currentPage={currentPage}
        total={1000}
        limit={20}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationComponent;
