<?php

namespace App\Http\Controllers\Api;

use App\Horse;
use App\HorseFile;
use App\Http\Controllers\Controller;
use App\Http\Requests\HorseImageRequest;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HorseFileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($horse_id)
    {
        return response()->json([
            'status' => 200,
            'message' => 'Horse Files loaded successfully',
            'data' => HorseFile::where('horse_id', $horse_id)->get()->groupBy('type')
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param HorseImageRequest $request
     * @return Response
     * @throws AuthorizationException
     */
    public function store(HorseImageRequest $request)
    {
        $this->authorize('create', Horse::class);

        foreach ($request->validated()['images'] as $image){
            $data = array();
            $data['name'] = $image->getClientOriginalName();
            $data['url'] = downloadFile($image, "/uploads/images/horses/");
            $data['horse_id'] = $request->horse_id;
            HorseFile::create($data);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Horse image created successfully',
            'data' => []
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param HorseFile $image
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(HorseFile $image)
    {
        return $image;
        $this->authorize('delete', Horse::class);

        $image->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Image deleted successfully',
        ]);
    }
}
