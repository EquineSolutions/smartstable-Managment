<?php

namespace App\Http\Controllers;

use App\club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = club::orderBy('id','ASC')->get();
        $output = [
            'status' => 200,
            'message' => 'Clubs loaded successfully',
            'data' => $data
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            Feature::create([
                'first_name' => Input::get('first_name'),
                'last_name' => Input::get('last_name'),
                'email' => Input::get('email'),
                'business_name' => Input::get('business_name'),
                'business_type' => Input::get('business_type'),
            ]);
            $output = [
                'status' => 200,
                'message' => 'club created successfully',
            ];
            $status =200;
        } catch (\Exception $e) {
            DB::rollback();
            $output = [
                'status' => 500,
                'error' => $e->getMessage(),
            ];
            $status =500;
        }
        return response()->json($output,$status);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function show(club $club)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function edit(club $club)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, club $club)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\club  $club
     * @return \Illuminate\Http\Response
     */
    public function destroy(club $club)
    {
        //
    }
}
