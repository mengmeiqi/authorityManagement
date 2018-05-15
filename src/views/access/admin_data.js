
export const editInlineColumns = [
    {
        title: '部门编号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '部门名称',
        align: 'center',
        key: 'name',
        width: 290,
        editable: true
    },
    {
        title: '部门主管',
        align: 'center',
        width: 90,
        key: 'sex'
    },
    {
        title: '部门成员',
        align: 'center',
        width: 90,
        key: 'sex'
    },
    {
        title: '职能',
        align: 'center',
        key: 'work',
        editable: true
    },
    {
        title: '操作',
        align: 'center',
        width: 190,
        key: 'handle',
        handle: ['edit', 'delete']
    }
];

export const editInlineData = [
    {
        name: 'Aresn',
        sex: '男',
        work: '前端1开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'lisa',
        sex: '女',
        work: '程序员鼓励师'
    },
    {
        name: 'qweqew',
        sex: 'dd',
        work: '1111'
    },
    {
        name: 'qweqew',
        sex: 'dd',
        work: '1111'
    },
    {
        name: 'qweqew',
        sex: 'dd',
        work: '1111'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'Lison',
        sex: '男',
        work: '前端开发'
    },
    {
        name: 'qweqew',
        sex: 'dd',
        work: '1111'
    }
];

const tableData = {
    editInlineColumns: editInlineColumns,
    editInlineData: editInlineData
};

export default tableData;
