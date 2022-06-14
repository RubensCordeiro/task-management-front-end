export default function Pagination(props) {
  const { currentPage, nextPageTasks, onChangePage } = props;

  function goToPage(page) {
    onChangePage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className="w-full my-2">
      <ul className="text-sm flex justify-center gap-x-4">
        {currentPage > 1 && (
          <li
            className="w-6 text-center border border-zinc-600 rounded hover:bg-zinc-600 hover:text-white cursor-pointer transition linear duration-200"
            onClick={() => goToPage(parseInt(currentPage) - 1)}
          >
            {parseInt(currentPage) - 1}
          </li>
        )}
        <li className="w-6 text-center  border border-zinc-600 rounded hover:bg-zinc-600 hover:text-white cursor-pointer transition linear duration-200">
          {currentPage}
        </li>
        {nextPageTasks.length > 0 && (
          <li
            className="w-6 text-center border border-zinc-600 rounded hover:bg-zinc-600 hover:text-white cursor-pointer transition linear duration-200"
            onClick={() => goToPage(parseInt(currentPage) + 1)}
          >
            {parseInt(currentPage) + 1}
          </li>
        )}
      </ul>
    </div>
  );
}
