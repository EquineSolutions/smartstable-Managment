<?php

namespace App\Http\Controllers\Api;

use App\Feature;
use App\Http\Controllers\Controller;
use App\Package;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $packages = Package::orderBy('id','DESC')->get();
        $output = [
            'status' => 200,
            'message' => 'Packages loaded successfully',
            'data' => [
                'packages' =>$packages
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
        $features = Feature::get();
        $output = [
            'status' => 200,
            'message' => 'features loaded successfully',
            'data' => [
                'features' =>$features
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        DB::beginTransaction();
        try{

            if($request->file('logo')){
                $logo = $request->file('logo');
                $path =public_path('uploads/images/packages');
                if(!File::isDirectory($path)) {
                    File::makeDirectory($path, 0777, true, true);
                }
                $file_name = Input::file('logo')->getClientOriginalName();
                $logo->move($path, $file_name);
                $logo_path = $request->getSchemeAndHttpHost()."/uploads/images/packages/".$file_name;

            }
            $enable =Input::get('enable') ;
            $enable = ($enable  === 0 ||$enable  ===  false||$enable  === 'no') ? 0:1 ;
            $package = Package::create(
                [
                    'name'=>Input::get('name'),
                    'description'=>Input::get('description'),
                    'duration'=>Input::get('duration'),
                    'price'=>Input::get('price'),
                    'enable'=>$enable,
                    'logo'=>isset($logo_path)?$logo_path:''
                ]);
            $features = Feature::find(Input::get('features'));
            $package->features()->attach($features);
            DB::commit();

            $output = [
                'status' => 200,
                'message' => 'Package created successfully',
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
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        $output = [
            'status' => 200,
            'message' => 'feature loaded successfully',
            'data' => [
                'package' => $package,
                'features' => $package->features
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit(Package $package)
    {
        $features = Feature::get();
        $output = [
            'status' => 200,
            'message' => 'Permissions loaded successfully',
            'data' => [
                'package' => $package,
                'features' => $features,
                'packageFeatures' => $package->features,
            ]
        ];
        return response()->json($output,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Package $package)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(Package $package)
    {
        $package->delete();
        $output = [
            'status' => 200,
            'message' => 'Package deleted successfully',
        ];
        return response()->json($output,200);
    }
}
