import React from 'react';
import DataTable from 'components/DataTable';
import Icon from 'components/Icon';
import Button from 'components/Button';

export default (self, employees) => [
  {
    title: '销售组织',
    name: 'saleOrgName',
    tableItem: {},
    searchItem: {
      group: 'abc'
    },
    formItem: {}
  },
  {
    title: '发货方式',
    name: 'deliveryTypeCode',
    dict: [{ code: '0', codeName: '快递' }, { code: '1', codeName: '自提' }],
    tableItem: {},
    formItem: {
      type: 'select'
    },
    searchItem: {
      type: 'select'
    }
  },
  {
    title: '收货地址',
    name: 'invoiceAddressName',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
  {
    title: '客户',
    name: 'customerName',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
  {
    title: '订单时间',
    name: 'orderDate',
    tableItem: {},
    formItem: {
      type: 'datetime'
    },
    searchItem: {
      type: 'datetime'
    }
  },
  {
    title: '发货时间',
    name: 'deliveryDate',
    tableItem: {},
    formItem: {
      type: 'datetime'
    },
    searchItem: {
      type: 'datetime'
    }
  },
  {
    title: '业务员',
    name: 'salesmanName',
    tableItem: {},
    formItem: {},
    searchItem: {}
    // tableItem: {
    //   render: text => text.map(item => item.title).join(',')
    // },
    // formItem: {
    //   type: 'transfer',
    //   modal: true,
    //   dataSource: employees,
    //   normalize: value => value.map(item => item.key)
    // }
  },
  {
    title: '来源平台',
    name: 'platformName',
    formItem: {
      type: 'editor'
    }
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <DataTable.Oper>
          <Button tooltip="修改" onClick={e => self.onUpdate(record)}>
            <Icon type="edit" />
          </Button>
          <Button tooltip="删除" onClick={e => self.onDelete(record)}>
            <Icon type="trash" />
          </Button>
        </DataTable.Oper>
      )
    }
  }
];
