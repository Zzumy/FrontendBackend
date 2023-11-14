<?php

namespace App\Http\Controllers;

use App\Models\Writer;
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
        $writer->vnev = $request->vnev;
        $writer->knev = $request->knev;
        $writer->szul = $request->szul;
        $writer->save();
        return Writers()::find($record->id);
    }

    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->vnev = $request->vnev;
        $writer->knev = $request->knev;
        $writer->szul = $request->szul;
        $writer->save();
        return response()->json(['message' => 'Sikeres törlés!'], 201);
    }

    public function destroy($id)
    {
        $writer = Writers::find($id)->delete();
        return response()->json(['message' => 'Sikeres törlés!'], 201);
    }
}
