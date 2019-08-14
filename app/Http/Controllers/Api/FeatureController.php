<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeatureRequest;
use App\Feature;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Input;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $features = Feature::orderBy('id','DESC')->get();
        $output = [
            'status' => 200,
            'message' => 'Features loaded successfully',
            'data' => [
                'features' =>$features
            ]
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
    public function store(FeatureRequest $request)
    {

        $enable =Input::get('enable') ;
        $enable = ($enable  === 0 ||$enable  ===  false||$enable  === 'no') ? 0:1 ;

        try{
            Feature::create([
                'name' => Input::get('name'),
                'description' => Input::get('description'),
                'key' => Input::get('key'),
                'enable' => $enable,
                'priority' => Input::get('priority'),
                ]);
            $output = [
                'status' => 200,
                'message' => 'feature created successfully',
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
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function show(Feature $feature)
    {
        $output = [
            'status' => 200,
            'message' => 'feature loaded successfully',
            'data' => [
                'feature' => $feature
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function edit(Feature $feature)
    {
        $output = [
            'status' => 200,
            'message' => 'feature loaded successfully',
            'data' => [
                'feature' => $feature
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feature $feature)
    {
        $feature->update($request->all());
        $output = [
            'status' => 200,
            'message' => 'feature updated successfully',
        ];
        return response()->json($output,200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feature $feature)
    {
        $feature->delete();
        $output = [
            'status' => 200,
            'message' => 'User deleted successfully',
        ];
        return response()->json($output,200);
    }
}
