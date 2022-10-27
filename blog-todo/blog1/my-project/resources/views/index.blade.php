@include('header')


<div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
        <div class="flex justify-between">
            <h2 class="text-2xl font-semibold leading-tight">Records</h2>
            <a href="{{ url('/create') }}">
                <button class="rounded-full border bg-orange-400 hover:bg-green-600 p-2 text-white font-bold w-24">New
                </button>
            </a>

        </div>
        <div class="-mx-2 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                ID
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Tiltle
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Text
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Action
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        </tr>
                    </thead>
                    @foreach ($posts as $post)
                        <tbody>
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex">

                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">

                                            </p>
                                            <p class="text-gray-600 whitespace-no-wrap">{{ $post->id }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ $post->name }}</p>

                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <a href="/{{ $post->id }}">
                                        <p class="text-gray-900 whitespace-no-wrap cursor-pointer">
                                            {{ \Illuminate\Support\Str::limit($post->body, 200, '...') }}</p>
                                    </a>


                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">


                                    <form action='/delete/{{ $post->id }}' method="post">
                                        @method('delete')
                                        @csrf
                                        {{-- <button type="submit" class="tt-icon-btn tt-hover-02 tt-small-indent">
                                            <i class="lni-trash">Delete</i>
                                        </button> --}}

                                        <button type="submit"
                                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-24">
                                            Delete
                                        </button>
                                    </form>

                                    <form action='/update/{{ $post->id }}' method="get">

                                        <button type="submit"
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-24">
                                            Edit
                                        </button>
                                    </form>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">

                                </td>
                            </tr>

                        </tbody>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
</div>
</div>
