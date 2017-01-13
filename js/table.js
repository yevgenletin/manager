$( document ).ready(function() {
    $("#table_content").sortable();

//localStorage object
    //localStorage.setItem("saveItems", []);
    var saveItems = localStorage.getItem("saveItems");
    var arrItem = saveItems ? JSON.parse(saveItems) : [];
    var selectedRow = null;

//objet of table
    function itemTable(id, name, time, date){
        this.id = id;
        this.name = name;
        this.time = time;
        this.date = date;
    }

    //botton save table
    $('#save_table').on("click", function(){
        event.preventDefault();
        save();
    });
//view table
    if(arrItem != null) {
        if (arrItem.length > 0) {
            for (i = 0; i < arrItem.length; i++) {
                // console.log(arrItem[i]);
                addRowToTable(arrItem[i].id, arrItem[i].name, arrItem[i].time, arrItem[i].date);
            }
        }
    }
    var check_tr = false;
    var autoSave = false;
    //autosave
    $('#autosave').on('change', function () {
        autoSave = autoSave ? false : true;
        if(autoSave) {
            interval = setInterval(function () {
                save()
            }, 15 * 1000);
        } else {
            clearInterval(interval);
        }
    });

    $('#icon_delete').on('click', function () {
        event.preventDefault();
        selectedRow.remove();
    });

    //edit row of table
    $('#icon_edit').click( function () {
        event.preventDefault();
        $('#edit_item').show();
        $('#edit_nickname').val(selectedRow.find("td").eq(1).html());
        $('#edit_time').val(selectedRow.find("td").eq(2).html());
        $('#edit_date').val(selectedRow.find("td").eq(3).html());

    });

    $('#edit_accept').on('click', function () {
        event.preventDefault();
        var name = $('#edit_nickname').val();
        var time = $('#edit_time').val();
        var date = $('#edit_date').val();

        selectedRow.find("td").eq(1).html(name);
        selectedRow.find("td").eq(2).html(time);
        selectedRow.find("td").eq(3).html(date);
        $('#edit_item').hide();
    });

    $('#edit_cancel').on('click', function () {
        event.preventDefault();
        $('#edit_item').hide();
        $('#edit_time, #edit_date, #edit_nickname').val("");
    });

    //add row
    $('#icon_add').on('click', function () {
        event.preventDefault();
        $('#add_item').show();
    });

    $('#add_accept').on('click', function () {
        event.preventDefault();
        var id = localStorage.getItem("id");
        var name = $('#nickname').val();
        var time = $('#time').val();
        var date = $('#date_time').val();
        addRowToTable(id, name, time, date);
        var myItem = new itemTable(id, name, time, date);
        arrItem.push(myItem);
        localStorage.setItem("saveItems", JSON.stringify(arrItem));
        id++;
        localStorage.setItem("id", id);

        $('#add_item').hide();
        $('#time, #date_time, #nickname').val("");
    });

    $('#add_cancel').on('click', function () {
        event.preventDefault();
        $('#add_item').hide();
        $('#time, #date_time, #nickname').val("");
    });

    //sort row
    $('thead').find('th').on('click', function (e) {
        var id = $(this).attr('id');
        switch (id) {
            case 'th_id':
                arrItem.sort(sortId);
                break;
            case 'th_name':
                arrItem.sort(sortName);
                break;
            case 'th_date':
                arrItem.sort(sortDate);
                break;
            case 'th_time':
                arrItem.sort(sortTime);
                break;

        }
        $('tbody').find('tr').each(function() {
            $(this).remove();
        })
        update();
    });

    $('body').on('mouseup', function (e) {
        var table = $("manager_table");
        var icon_edit = $('#icon_edit');
        var icon_delete = $('#icon_delete');

        if (!table.is(e.target) && table.has(e.target).length === 0 && selectedRow &&
            !icon_edit.is(e.target) && icon_edit.has(e.target).length === 0 &&
            !icon_delete.is(e.target) && icon_delete.has(e.target).length === 0 ) {
            selectedRow.removeClass('envolver');
            selectedRow = null;
            $('#icon_edit').removeClass('active');
            $('#icon_delete').removeClass('active');
            $('#icon_delete').addClass('disabled');
            $('#icon_edit').addClass('disabled');
        }
    });

    //function
    function addRowToTable(id, name, time, date) {
        var element = '<tr><td>' + id + '</td><td>' + name + '</td><td>' + time + '</td><td>' + date + '</td><tr>';
        $('#manager_table').append(element);

        var rows = $('tr').not(':first');
        rows.on('click', function () {
            selectedRow = $(this);
            rows.removeClass('envolver');
            selectedRow.addClass('envolver');
            $('#icon_edit').removeClass('disabled');
            $('#icon_delete').removeClass('disabled');
            $('#icon_delete').addClass('active');
            $('#icon_edit').addClass('active');
        });
    }

    function sortId(a, b) {
        return a.id - b.id;
    }

    function sortName(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    }


    function sortDate(a, b) {
        return new Date(a.date) - new Date(b.date);
    }

    function sortTime(a, b) {
        if(a.time.split(':')[0] > b.time.split(':')[0]) {
            return 1;
        } else if(a.time.split(':')[0] == b.time.split(':')[0]) {
            if(a.time.split(':')[1] > b.time.split(':')[1])
                return 1;
            else
                return -1;
        }
    }
    function update() {
        if(arrItem.length) {
            for(var i in arrItem) {
                var item = arrItem[i];

                element = '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.time + '</td><td>' + item.date + '</td><tr>';
                $('#manager_table').append(element);
            }
        }
    }
    function save(){
        arr = [];
        $("#manager_table tr").each(function (index)
        {
            var campo1, campo2, campo3, campo4;
            $(this).children("td").each(function (index2)
            {

                switch (index2)
                {
                    case 0: campo1 = $(this).text();
                        break;
                    case 1: campo2 = $(this).text();
                        break;
                    case 2: campo3 = $(this).text();
                        break;
                    case 3: campo4 = $(this).text();
                        break;
                }

            })

            if(campo1 != undefined){
                var myItem = new itemTable(campo1, campo2, campo3, campo4);
                arr.push(myItem);
            }
        })
        localStorage.setItem("saveItems", JSON.stringify(arr));
    }
});