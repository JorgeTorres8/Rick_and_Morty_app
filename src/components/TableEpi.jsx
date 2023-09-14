import React, { useMemo, useEffect } from 'react'
import useApp from '@/hooks/useApp'
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './ColumnsEpi'
import { ArrowRightCircle } from 'lucide-react'
import { ArrowLeftCircle } from 'lucide-react'

const TableEpi = () => {

  const {episodes,setEpisodes, setLoading, loading, handleChangePageEpisodes} = useApp();

  useEffect(() => {
    const consultEpisodesAPI = async () => {
        setLoading(true);

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episode`)
            .then(response => response.json())
            .then(data => {
            const episodes = data.results;
            const episodesObjects = episodes.map(episodeMap => {
                const { id, name, air_date, episode} = episodeMap;
                return { id, name, air_date, episode};
            });
            setEpisodes(episodesObjects);
            setLoading(false);
        })
    }
    consultEpisodesAPI();
    }, [setEpisodes, setLoading])

  const columns = useMemo(() => {
    if (!loading) {
      return COLUMNS;
    }
    return [];
  }, [loading]);

  const data = useMemo(() => {
    if (!loading) {
      return episodes;
    }
    return [];
  }, [loading, episodes]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    /*nextPage,
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
        <table {...getTableProps()} className="w-full text-base text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-center text-gray-200 uppercase bg-zinc-700 dark:bg-cyan-900 dark:text-zinc-200">
                {
                  headerGroups.map(headerGroup => (
                    <tr key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                      {
                        headerGroup.headers.map( column => (
                          <th key={column.id} scope='col' className="p-2 text-center"
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
                      <tr key={row.id} className="bg-white border-b even:bg-slate-700 odd:bg-slate-800 dark:border-gray-700" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td key={cell.column.id} scope="col" className="p-2 text-center font-medium text-zinc-200 dark:text-white" {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
            <input min={1} max={3} className='w-10 text-center' type='number' defaultValue={pageIndex + 1}
              onChange={e => {const pageNumber = e.target.value + 1 ? Number(e.target.value) - 1 : 0
                handleChangePageEpisodes(pageNumber + 1)}}
            />
          {' '} of 3
          </span>
          </div>

        </div>
    </>
  )
}

export default TableEpi