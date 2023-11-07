<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        return Writer::all();
    }

    public function show($id)
    {
        $writer = response()->json(Writer::find($id));
        return $writer;
    }

    public function store(Request $request)
    {
        $writer = new Writer();
        $writer->author = $request->author;
        $writer->title = $request->title;

        $writer->save();
    }

    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->author = $request->author;
        $writer->title = $request->title;

        $writer->save();
    }

    public function destroy($id)
    {
        Writer::find($id)->delete();
    }
}
