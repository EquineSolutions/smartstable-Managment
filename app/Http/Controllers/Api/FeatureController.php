<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FeatureRequest;
use App\Feature;
use Illuminate\Http\Request;
use DB;

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
        return response()->json($output);
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
        $data = $request->validated();
        try{
            Feature::create($data);
            $output = [
                'status' => 200,
                'message' => 'feature created successfully',
            ];

        } catch (\Exception $e) {
            DB::rollback();
            $output = [
                'status' => 500,
                'error' => $e->getMessage(),
            ];
        }

        return response()->json($output);
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
        return response()->json($output);
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
        return response()->json($output);
    }

    /**
     *
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
        return response()->json($output);

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
        return response()->json($output);
    }
}
