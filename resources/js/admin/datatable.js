window.DatatablesAdvancedMultipleControls = {
    init: function () {
            $("#m_table_1").DataTable({
                dom: `
                <'row'
                <'col-sm-12 col-md-12'f>
                >
                <'row'
                <'col-sm-12'tr>
                >
                <'row'
                <'col-sm-12 col-md-6'l>
                >
                <'row'
                <'col-sm-12 col-md-5'i>
                <'col-sm-12 col-md-7'p>
                >
                `,
                columnDefs: [
                    {
                    targets: -1,
                    }
            ]
            })
    },
};