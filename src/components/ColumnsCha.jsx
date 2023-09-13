import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ cell }) => <div className="flex justify-center items-center"><img className="w-20 h-20 md:w-16 md:h-16 rounded-full overflow-hidden" src={cell.value} alt="Player"/></div>,
        Filter: ColumnFilter
      },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: ColumnFilter
    },
    {
        Header: 'Species',
        accessor: 'species',
        Filter: ColumnFilter
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter
    },
    {
        Header: 'Type',
        accessor: 'type',
        Filter: ColumnFilter
    }

]