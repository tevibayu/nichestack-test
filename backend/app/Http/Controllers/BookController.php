<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Book;
use Illuminate\Http\Request;
use App\Exceptions\GeneralException;

use Cache;
use Module;
use View;
use DB;
use Validator;

class BookController extends Controller {
    

    public function index(Request $request)
    {


        $limit = 10;
        $records = Book::orderBy('book.created_at', 'desc')->paginate($limit);
           
        $numb = (($records->currentPage()-1) * $limit) + 1;

        return view('book.index')
                ->withRecords($records)
                ->withType('new')
                ->withNumb($numb);
    }

    public function list_book(){
        $records = Book::orderBy('book.created_at', 'desc')->get();

        return json_encode($records);
    }



    public function store(Request $request)
    {

        $type = $request->input('type');
        $rules = array(
            'book_name' => 'required',
            'author' => 'required'
        );

        // run the validation rules on the inputs from the form
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            $my_errors = [];
            foreach ($validator->errors()->all() as $error) {
                $my_errors[] = $error;
            }

            die(json_encode(array('type' => 'error', 'text' => $my_errors)));
        }
       
        if($type == "edit"){

            $id = $request->input('id');

            $record = new Book();
            $record = $record->find($id);

            if(is_null($record)){
                die(json_encode(array('type' => 'error', 'text' => "Book not exist.")));
            }

            $notif = 'updated.';
        } else {
            $record = new Book();
            $notif = 'created.';
        }
        
        $result = $this->save($record, $request);
        if ($result['save']) 
        {
            die(json_encode(array('type' => 'success', 'text' => 'Succesfully '.$notif)));
        } else {
            die(json_encode(array('type' => 'error', 'text' => "Book was failed to ".$notif)));
        }
    }

    public function edit(Request $request)
    {
        $id = $request->input('id');
        $record = new Book();
        $record = $record->find($id);

        if (is_null($record)) 
        {
            die(json_encode(array('type' => 'error', 'text' => "Book not exist.")));
        }

        die(json_encode(array('type' => 'success', 'data' => $record, 'action' => 'edit')));

    }


    public function destroy(Request $request)
    {
        $id = $request->input('id');
        $record = new Book();
        $record = $record->find($id);

        if (is_null($record)) 
        {
            die(json_encode(array('type' => 'error', 'text' => "Book not exist.")));
        }

        if ($record->delete()) 
        {
           die(json_encode(array('type' => 'success', 'text' => 'Succesfully deleted.')));
        } else {
            die(json_encode(array('type' => 'error', 'text' => 'Book was failed to deleted.')));
        }
    }


    private function save($record, $request)
    {

        $author = implode(", ", $request->input('author'));
        $record->book_name = $request->input('book_name');
        $record->author = $author;
        $save = $record->save();

        $result = array(
                    'save' => $save,
                    'id' => $record->id_book
                    );

        return $result;
    }
    


    
}