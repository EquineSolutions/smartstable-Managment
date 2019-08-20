<?php

namespace App\Http\Controllers\Api;

use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return array
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('browse', Client::class);
        return [
            'data' => ClientResource::collection(Client::all()),
            'status' => Response::HTTP_OK
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create()
    {
        $this->authorize('create', Client::class);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ClientRequest $request
     * @return array
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(ClientRequest $request)
    {
        $this->authorize('create', Client::class);
        $data = $request->validated();
        Client::create($data);
        return [
            'message' =>  'Client Created Successfully.',
            'status' => Response::HTTP_OK
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client $client
     * @return array
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Client $client)
    {
        $this->authorize('view', Client::class);
        return [
            'data' =>  new ClientResource($client),
            'status' => Response::HTTP_OK
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Client $client
     * @return ClientResource
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Client $client)
    {
        $this->authorize('edit', Client::class);
        return new ClientResource($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  \App\Client $client
     * @return array
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Client $client)
    {
        $this->authorize('edit', Client::class);
        $request['email'] = $client->email;
        $client->update($request->all());
        return [
            'message' =>  'Client Updated Successfully.',
            'status' => Response::HTTP_OK
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client $client
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Client $client)
    {
        $this->authorize('delete', Client::class);
        $client->delete();
        return response(['message' => 'Client Deleted Successfully.', 'status'=> Response::HTTP_OK], Response::HTTP_OK);
    }

    /**
     * @param $client_email
     * @return array
     */
    public function get_client_info($client_email)
    {
        $client = Client::where('email', $client_email)->first();
        if ($client==null)
            return [
                'data' =>  [],
                'status' => Response::HTTP_NOT_FOUND
            ];
        return [
            'data' =>  new ClientResource($client),
            'status' => Response::HTTP_OK
        ];
    }
}
