<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        return response()->json(Person::all());
    }

    public function show($id)
    {
        return Person::find($id);
    }

    public function store(Request $request)
    {
        $person = new Person();
        $person->name = $request->name;
        $person->born = $request->born;
        $person->save();
    }

    public function update(Request $request, $id)
    {
        $person = Person::find($id);
        $person->name = $request->name;
        $person->born = $request->born;
        $person->save();
    }

    public function destroy($id)
    {
        Person::find($id)->delete();
    }

    public function selected($ids)
    {
        return Person::find(explode(",", $ids));
    }
}
