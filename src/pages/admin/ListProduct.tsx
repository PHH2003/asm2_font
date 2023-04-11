import React ,{ useEffect, useState }from 'react'
import { Table } from 'antd';
import type { ColumnGroupType,ColumnType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import Iproduct from '../../interface/product';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
interface Iprops{
    product:Iproduct[]
}
const columns: ColumnGroupType<Iproduct> | ColumnType<Iproduct>[] = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'price',
    dataIndex: 'price'
  }
];


const ListProduct = (props:Iprops) => {
  
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [data,setData]=useState<Iproduct[]>([])
  useEffect(()=>{
    setData(props.product)
  },[])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Iproduct> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  
}

export default ListProduct