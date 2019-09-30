<?php

namespace App\Http\Controllers\Api;

use App\HorseParent;
use App\Http\Controllers\Controller;
use App\Http\Requests\HorseParentRequest;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HorseParentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
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
     * @param HorseParentRequest $request
     * @return Response
     * @throws AuthorizationException
     */
    public function store(HorseParentRequest $request)
    {
        $this->authorize('create', HorseParent::class);

        $data = $request->validated();

        $horse_parent = HorseParent::create($data);

        return response()->json([
            'status' => 200,
            'message' => 'Horse parent created successfully',
            'data' => $horse_parent
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
     * @param HorseParent $horseParent
     * @return Response
     * @throws AuthorizationException
     */
    public function update(Request $request, HorseParent $horseParent)
    {
        $this->authorize('edit', HorseParent::class);

        $horseParent->update($request->all());
        $horseParent->save();

        return response()->json([
            'status' => 200,
            'message' => 'Horse parent updated successfully',
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param HorseParent $horseParent
     * @return Response
     * @throws AuthorizationException
     */
    public function destroy(HorseParent $horseParent)
    {
        $this->authorize('delete', HorseParent::class);

        $horseParent->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Horse deleted successfully',
        ],200);
    }
}
