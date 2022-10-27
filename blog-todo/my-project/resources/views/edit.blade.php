@include('header')



<h1 class="flex justify-center  font-bold  mt-8 mb-8 text-4xl text-gray-600">Edit Record</h1>

<div class="flex justify-center  font-bold  mt-8 mb-8  text-gray-600 font-sans">


    <form class="" method='post' action='/edit/{{ $post->id }}' name='contactform' id='contactform'>
        @csrf
        <p class=" flex items-center min-w-full  flex-col col-span-3 mx-auto">
            <label for='fullname'>Title:</label><br />
            <input class=" bg-yellow-300 border outline-0 rounded-md ml-4 w-80 pl-3 mb-10 " type='text' name='name'
                value="{{ $post->name }}" />




        </p>
        <p>
            <textarea class="border rounded-lg bg-gray-200 px-4  outline-0" name="body" cols="70" rows="10">{{ $post->body }}</textarea>
        </p>

        <input
            class="flex justify-center my-auto items-center rounded-full
             bg-amber-600 hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer text-white border p-3 mt-8"
            type='submit' name='submit' value='Update Record' />
        {{--  hover:shadow-xl active:scale-90 transition duration-150 --}}
    </form>


</div>
