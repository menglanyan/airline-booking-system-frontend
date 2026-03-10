const PaginationComponent = ({
  currentPage,
  onPrev,
  onNext,
  disablePrev,
  disableNext
}) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={onPrev}
        disabled={disablePrev}
      >
        &laquo; Prev
      </button>
      
      <span className="pagination-page-label">
        Page {currentPage + 1}
      </span>

      <button
        className="pagination-button"
        onClick={onNext}
        disabled={disableNext}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default PaginationComponent;