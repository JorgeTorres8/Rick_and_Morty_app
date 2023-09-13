import ColumnFilter from "./ColumnFilter"
import Image from "next/image";
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
        Cell: ({ cell }) => <div className="flex justify-center items-center"><Image width={60} height={60} priority className="w-auto h-auto rounded-full overflow-hidden" src={cell.value} alt="Player"/></div>,
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