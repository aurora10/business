@include('header')

<div class="pt-10 bg-slate-200 min-h-full">
    <div
        class=" container mx-auto  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md
    drop-shadow-2xl p-4 min-h-min">
        <h1 class="mt-7 text-lg font-semibold">{{ $post->name }}</h1>

        <br>

        <h4>{{ $post->body }}</h4>

    </div>

</div>
