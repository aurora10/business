<section id="contact">
    <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
    >
        <path d="M0 0 L50 100 L100 0 Z" fill="#FDE504" stroke="white"></path>
    </svg>
    <div class="container flex">
        <div class="header waypoint" data-animation="slide-in-left">
            CONTACT
        </div>
        <div
            class="header-bar waypoint"
{{--            data-animation="slide-in-right"--}}
{{--            data-delay=".25s"--}}
        ></div>
        <div
            class="highlight waypoint"
            data-animation="slide-in-right"
            data-delay=".5s"
        >
            Have a question or want to work together?
        </div>


        <form action="{{ url('/') }}" method="post"
              class="waypoint"
              data-animation="pop-in"
{{--              data-delay=".5s"--}}
{{--              id="contact-form">--}}>

            {{ csrf_field() }}

            <div class="form-group">
                <input placeholder="Name" type="text" name="name" class="form-control" required/>
                @if($errors->has('name'))
                    <small class="form-text invalid-feedback ">{{ $errors->first('name') }}</small>
                @endif
            </div>




            <div class="form-group">

                <input placeholder="Enter email" type="email" name="email" class="form-control" required/>
                @if($errors->has('email'))
                    <small class="form-text invalid-feedback ">{{ $errors->first('email') }}</small>
                @endif
            </div>


            <div class="form-group">

                <textarea placeholder="Your Message" type="text" name="message" class="form-control" required/> </textarea>
                @if($errors->has('message'))
                    <small class="form-text invalid-feedback ">{{ $errors->first('message') }}</small>
                @endif

            </div>


            <input class="button" type="submit" id="submit" value="SUBMIT"/>


        </form>
    </div>
</section>
