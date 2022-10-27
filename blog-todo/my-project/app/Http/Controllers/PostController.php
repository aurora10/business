<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('id', 'desc')->get();
        //dd($posts);
        return view('index')->with('posts', $posts);
    }

    public function create()
    {
        return view('create');
    }


    public function store(Request $request)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'body' => 'required'

        ));

        $post = new Post();

        $post->name = $request->name;
        $post->body = $request->body;

        $post->save();

        return redirect()->route('home');
    }

    public function update($id)
    {

        $post = Post::find($id);
        //dd($post);
        return view('edit', compact('post'));
    }

    public function edit(Request $request, $id)
    {
        $this->validate($request, array(
            'name' => 'required|max:255',
            'body' => 'required'

        ));

        Post::find($id)->update([
            'name' => request('name'),
            'body' => request('body')
        ]);

        return redirect()->route('home');
    }

    public function delete($id)
    {

        Post::destroy($id);
        return redirect()->route('home');
    }



    public function show($id)
    {
        $post = Post::findOrFail($id);

        return view('show')->with('post', $post);
    }
}
