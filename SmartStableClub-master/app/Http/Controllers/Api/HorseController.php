<?php

namespace App\Http\Controllers\Api;

use App\Horse;
use App\HorseFile;
use App\HorseParent;
use App\Http\Controllers\Controller;
use App\Http\Requests\HorseRequest;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class HorseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('browse', Horse::class);
        return response()->json([
            'status' => 200,
            'message' => 'Horse loaded successfully',
            'data' => Horse::without(['mother', 'father'])->get()
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     * @throws AuthorizationException
     */
    public function create()
    {
        $this->authorize('create', Horse::class);

        return response()->json([
            'status' => 200,
            'message' => 'create data loaded successfully',
            'data' => [
                'gender' => [
                    [
                        'name' => 'Stallion',
                        'value' => 0
                    ],
                    [
                        'name' => 'Mare',
                        'value' => 1
                    ],
                    [
                        'name' => 'Gelding',
                        'value' => 2
                    ]
                ],
                'colors' => [
                    'Bay', 'Dark Bay', 'Chestnut', 'Grey', 'Black', 'Pinto', 'other'
                ],
                'discipline' => [
                    'Jumping', 'Dressage', 'Endurance', 'Vaulting', 'Flat race', 'Arabian shows'
                ]
            ]
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param HorseRequest $request
     * @return Response
     * @throws AuthorizationException
     */
    public function store(HorseRequest $request)
    {
        $this->authorize('create', Horse::class);

        $horse_data = $request->validated();


        DB::beginTransaction();



        try{
            $horse = Horse::create($horse_data);

            $data = $request->validated();
            foreach ($data['images'] as $image){
                $data = array();
                $data['old_name'] = $image->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($image, "/uploads/images/horses/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'image';
                HorseFile::create($data);
            }

            foreach ($data['breeding'] as $breeding){
                $data = array();
                $data['old_name'] = $breeding->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($breeding, "/uploads/files/horses/breeding/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'breeding';
                HorseFile::create($data);
            }

            foreach ($data['identification'] as $identification){
                $data = array();
                $data['old_name'] = $identification->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($identification, "/uploads/files/horses/identification/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'identification';
                HorseFile::create($data);
            }

            HorseParent::create([
                'name' => $horse_data['father'],
                'gender' => 's',
                'horse_id' => $horse->id
            ]);

            HorseParent::create([
                'name' => $horse_data['mother'],
                'gender' => 'm',
                'horse_id' => $horse->id
            ]);

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Horse created successfully',
                'data' => Horse::find($horse->id)
            ],200);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                'status' => 500,
                'error' => $e->getMessage(),
            ]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param Horse $horse
     * @return Response
     * @throws AuthorizationException
     */
    public function show(Horse $horse)
    {
        $this->authorize('view', Horse::class);

        return response()->json([
            'status' => 200,
            'message' => 'Horse loaded successfully',
            'data' => $horse
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Horse $horse
     * @return Response
     * @throws AuthorizationException
     */
    public function edit(Horse $horse)
    {
        $this->authorize('edit', Horse::class);

        return response()->json([
            'status' => 200,
            'message' => 'create data loaded successfully',
            'data' => [
                'horse' => $horse,
                'gender' => [
                    [
                        'name' => 'Stallion',
                        'value' => 0
                    ],
                    [
                        'name' => 'Mare',
                        'value' => 1
                    ],
                    [
                        'name' => 'Gelding',
                        'value' => 2
                    ]
                ],
                'colors' => [
                    'Bay', 'Dark Bay', 'Chestnut', 'Grey', 'Black', 'Pinto', 'other'
                ],
                'discipline' => [
                    'Jumping', 'Dressage', 'Endurance', 'Vaulting', 'Flat race', 'Arabian shows'
                ]
            ]
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Horse $horse
     * @return Response
     * @throws AuthorizationException
     */
    public function update(Request $request, Horse $horse)
    {
        $this->authorize('edit', [Horse::class, $horse]);

        $data = $request;

        DB::beginTransaction();

        try {

            $horse->update($data->all());
            $horse->save();

            foreach ($data['images'] as $image) {
                $data = array();
                $data['old_name'] = $image->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($image, "/uploads/images/horses/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'image';
                HorseFile::create($data);
            }

            foreach ($data['breeding'] as $breeding) {
                $data = array();
                $data['old_name'] = $breeding->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($breeding, "/uploads/files/horses/breeding/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'breeding';
                HorseFile::create($data);
            }

            foreach ($data['identification'] as $identification) {
                $data = array();
                $data['old_name'] = $identification->getClientOriginalName();
                $data['name'] = 'dummy name';
                $data['url'] = downloadFile($identification, "/uploads/files/horses/identification/");
                $data['horse_id'] = $horse->id;
                $data['type'] = 'identification';
                HorseFile::create($data);
            }
            if ($data['father_name']) {
                $father = HorseParent::where('horse_id', $horse->id)->where('gender', 's')->get();
                $father->update($data['father_name']);
                $father->save();
            }
            if($data['mother_name']) {
                $father = HorseParent::where('horse_id', $horse->id)->where('gender', 'm')->get();
                $father->update($data['mother_name']);
                $father->save();
            }
            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Horse created successfully',
                'data' => Horse::find($horse->id)
            ],200);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                'status' => 500,
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Horse $horse
     * @return Response
     * @throws AuthorizationException
     */
    public function destroy(Horse $horse)
    {
        $this->authorize('delete', Horse::class);

        $horse->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Horse deleted successfully',
        ],200);
    }
}
