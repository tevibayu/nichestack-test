@extends('layout.master')


@section('content')

<div class="card">
  <div class="card-header">
    <h3 class="card-title"><span id="title_type">Create</span> Book</h3>
  </div>
  <div class="card-body">
    <form id="form-book">
      <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
      <input type="hidden" name="type" id="form-type" value="{{ $type }}" />
      <input type="hidden" name="id" id="form-id" value="" />
      <div class="form-group mb-3 row">
        <label class="form-label col-3 col-form-label">Book Name</label>
        <div class="col">
          <input type="text" class="form-control" name="book_name" id="book_name" value="" placeholder="Book Name">
        </div>
      </div>

      <div class="form-group mb-3 row">
        <label class="form-label col-3 col-form-label">Author</label>
        <div class="col">
          <div id="author-container">
            <input type="text" name="author[]" id="author1" value="" class="form-control mb-2" placeholder="Author">
          </div>
          <small class="form-hint">
            You can add multiple author in this book.
          </small>
          <a href="javascript:void(0)" onclick="add_author()" class="btn btn-link link-secondary">
            + Add New Author
          </a>
        </div>

      </div>
      </form>


      <div class="form-footer">
        <button class="btn btn-primary" onclick="add()">Save</button>
      </div>
    
  </div>
</div>

<div class="card">
  <div class="card-header">
    <h3 class="card-title">Book List</h3>
  </div>
  <div class="card-body border-bottom py-3">
    <div class="d-flex">
      <div class="text-muted">
        Show
        <div class="mx-2 d-inline-block">
          <input type="text" class="form-control form-control-sm" value="{{ $records->count() }}" size="3" aria-label="Book count">
        </div>
        entries
      </div>
     
    </div>
  </div>
  <div class="table-responsive">
    <table class="table card-table table-vcenter text-nowrap datatable">
      <thead>
        <tr>

          <th class="w-1">No. <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
          </th>
          <th>Book Name</th>
          <th>Authors</th>
          <th>Published on</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        @if($records->count())
        @foreach ($records as $record)
        <tr>

          <td><span class="text-muted">{{ $record->id_book }}</span></td>
          <td>{{ $record->book_name }}</td>
          <td>
            {{ $record->author }}
          </td>

          <td>
            {!! date("d, M Y H:i", strtotime($record->created_at)) !!}
          </td>
          
          <td class="text-end">
            <span class="dropdown">
              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="javascript:void(0)" onclick="edit('{{ $record->id_book }}')">
                  Update
                </a>
                <a class="dropdown-item" href="javascript:void(0)" onclick="destroy('{{ $record->id_book }}')">
                  Remove
                </a>
              </div>
            </span>
          </td>
        </tr>
        @endforeach
        @endif


      </tbody>
    </table>
  </div>

  @if($records->count())
    <div class="card-footer d-flex align-items-center">
      
      <div style="float: right;">
        {!! $records->appends(['search' => ''])->render() !!}
      </div>
    </div>
    @endif

</div>

<script>

  function add_author(count='', value = ''){

    if(count == ''){
      var count = document.querySelectorAll('[name="author[]"]').length;
    }

    count = count+1;

    console.log(count)
    if(count <= 3){
      
      var elem = document.getElementById('author-container').innerHTML;
      elem += '<input type="text" name="author[]" id="author'+(count)+'" value="'+value+'" class="form-control mb-2" placeholder="Author">';
      document.getElementById('author-container').innerHTML = elem;
    }
    
  }

  function add(){

    var _dataForm = $("#form-book").serialize();
    $.ajax({
      url: '{{ route('admin.book.save') }}', 
      type: "POST",
      dataType: 'json',
      async: false,
      data: _dataForm,
      success: function(msg){

        if(msg['type'] == 'success'){

          setTimeout(function(){
            window.location.href = "{{ route('admin.book.index') }}";
          }, 3000);
          
        }
        showBanner(msg['type'], msg['text'], 4000);

      }
    });
  }

  function edit(id){

    $.ajax({
      url: '{{ route('admin.book.edit') }}', 
      type: "POST",
      dataType: 'json',
      async: false,
      data: {'id': id, '_token': my_token},
      success: function(msg){

        if(msg['type'] == 'success'){

          $('#title_type').html('Edit');

          $('#author2').remove();
          $('#author3').remove();

          $("#type").val(msg['action'])
          $('#form-id').attr('value', msg['data']['id_book']);
          $('#form-type').attr('value', 'edit');
          $("#book_name").val(msg['data']['book_name'])

          var author = (msg['data']['author']).split(", ");

          $('#author1').attr('value', author[0]);

          if(typeof author[1] !== 'undefined'){
            add_author(1, author[1]);
          }

          if(typeof author[2] !== 'undefined'){
            add_author(2, author[2]);
          }

        } else {
          showBanner(msg['type'], msg['text'], 4000);
        }
        
        

      }
    });
  }

  function destroy(id){

    $.ajax({
      url: '{{ route('admin.book.destroy') }}', 
      type: "POST",
      dataType: 'json',
      async: false,
      data: {'id': id, '_token': my_token},
      success: function(msg){

        if(msg['type'] == 'success'){

          setTimeout(function(){
            window.location.href = "{{ route('admin.book.index') }}";
          }, 3000);
          
        }
        
        showBanner(msg['type'], msg['text'], 4000);

      }
    });
  }

  function showBanner(type, text, time){

    if(type == 'success'){
      $('#modal-type').addClass('bg-success');
      $('#modal-title').html('Succedeed');

    } else {
      $('#modal-type').addClass('bg-danger');
      $('#modal-title').html('Error');

    }
    $('#modal-text').html(text);

    $('#modal-container').modal('show');

    setTimeout(function(){
      $('#modal-container').modal('hide');
    }, time)
  }
</script>


@endsection