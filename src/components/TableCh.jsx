import React, { useMemo } from 'react'
import useApp from '@/hooks/useApp'
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './ColumnsCha'
import { ArrowRightCircle } from 'lucide-react'
import { ArrowLeftCircle } from 'lucide-react'

const TableCh = () => {

  const {characters, loading, handleChangePageCharacters} = useApp();

  const columns = useMemo(() => {
    if (!loading) {
      return COLUMNS;
    }
    return [];
  }, [loading]);

  const data = useMemo(() => {
    if (!loading) {
      return characters;
    }
    return [];
  }, [loading, characters]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
   /* nextPage,
    previousPage,*/
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = useTable({
    columns, 
    data,
    }, 
    useFilters,
    useGlobalFilter,
    usePagination
  )

  const {pageIndex} = state

  return (
    <>
      <div className=" mt-10 table-auto relative overflow-x-auto rounded-2xl overflow-hidden shadow-lg shadow-lime-900">
        <table {...getTableProps()} className="w-full text-base text-center text-gray-500 dark:text-gray-400" >
            <thead className="text-xs text-center text-gray-200 uppercase bg-zinc-700 dark:bg-cyan-900 dark:text-zinc-200">
                {
                  headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                      {
                        headerGroup.headers.map( column => (
                          <th scope='col' className="p-2 text-center"
                            {...column.getHeaderProps()}>
                            {column.render('Header')}
                            <div className='mt-2 text-zinc-900 dark:text-zinc-200'>{column.canFilter ? column.render('Filter') : null}</div>
                          </th> 
                        ))
                      }
                    </tr>
                  ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return(
                      <tr className="bg-white border-b even:bg-slate-700 odd:bg-slate-800 dark:border-gray-700" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td scope="col" className="p-2 text-center font-medium text-zinc-200 dark:text-white" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                      </tr>
                    )
                  })}          
            </tbody>
        </table>
      </div>

      <div className='mb-20 md:mb-5 border-cyan-800 border-l-4 border-r-4 border-b-4 rounded-2xl'>
          <div className='flex justify-between items-center flex-col md:flex-row gap-5 m-5'>
            <div className='flex gap-5 justify-center items-center'>
              <span className=' text-xl font-semibold'>
                Page {''}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><ArrowLeftCircle className='h-7 w-7 text-lime-600'/></button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><ArrowRightCircle className='h-7 w-7 text-lime-600'/></button>
            </div>

          <span className=' text-xl font-semibold'>
            Go to sheet: {' '}
            <input min={1} max={42} className='w-10 text-center' type='number' defaultValue={pageIndex + 1}
              onChange={e => {const pageNumber = e.target.value + 1 ? Number(e.target.value) - 1 : 0
                handleChangePageCharacters(pageNumber + 1)}}
            />
          {' '} of 42
          </span>
          </div>

        </div>
    </>
    /* 
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
    */
  )
}

export default TableCh