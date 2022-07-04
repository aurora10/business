
@include('partials.head')

<body>
<div class="overflow-wrap">
    <!-- HOME -->
    <div class="modal-wrap flex">
        <div class="mask"></div>
        <div class="modal" id="modal">
            <div class="carousel-wrap">
                <div class="window">
                    <div id="carousel">
                        <div class="slide"></div>
                        <div class="slide"></div>
                        <div class="slide"></div>
                    </div>
                    <i class="mdi mdi-chevron-left" id="prev"></i>
                    <i class="mdi mdi-chevron-right" id="next"></i>
                </div>
            </div>
            <div class="info-box">
                <div class="title"></div>
                <div class="tag"></div>
                <div class="detail"></div>
                <a href="#" target="_blank"
                ><div class="button">
                        <i class="mdi mdi-open-in-new"></i>VIEW SITE
                    </div></a
                >


            </div>

            <i class="close mdi mdi-close"></i>
        </div>
    </div>


{{--    modal --}}

    <section id="home" class="flex height-fix">
        <div id="pt" class="canvas"></div>
        <div class="flex">
            <div class="text">
                Hello, I'm <span class="highlight" style="color: #FFE900">Robert Zimerman</span>.
                <br />

                I'm a full-stack web developer.
            </div>

            <div class="button page-link" dest="portfolio">
                Some of my work <i class="mdi mdi-arrow-right"></i>
            </div>

            <nav class="flex">
                <div class="link-wrap">
                    <div class="active page-link" dest="home">home</div>
                    <a href="https://robzi-portfollio.s3.eu-central-1.amazonaws.com/index-1.html">CV</a>
                    <!-- <div class="page-link" >CV</div> -->
                    <div class="page-link" dest="about">about</div>
                    <div class="page-link" dest="portfolio">portfolio</div>
                    <div class="page-link" dest="blog">blog</div>
                    <div class="page-link" dest="contact">contact</div>
                </div>
                <i class="mdi mdi-menu"></i>
            </nav>
        </div>
    </section>

    <!-- ABOUT -->
    <section id="about" style="background-color: #FE9920">
        <div class="container flex">
            <div class="header waypoint" data-animation="slide-in-left" style="color: white">
                ABOUT
            </div>
            <div
                class="header-bar waypoint"
                data-animation="slide-in-left"
                data-delay=".5s"
            ></div>

            <div class="flex row label-wrap">
                <div class="flex row-gt-sm">
                    <div class="flex bullet-wrap ">
                        <div class="hex-wrap waypoint" data-animation="flip-in-x">
                            <div class="hexagon">
                                <i class="mdi mdi-speedometer"></i>
                            </div>
                        </div>
                        <div class="waypoint" data-animation="fade-in">
                            <div class="label bold">Fast & Secure</div>
                            <div style="color: black">
                                Fast and secure websites - my highest
                                priority.
                            </div>
                        </div>
                    </div>

                    <div class="flex bullet-wrap ">
                        <div
                            class="hex-wrap waypoint"
                            data-animation="flip-in-x"
                            data-delay=".2s"
                        >
                            <div class="hexagon">
                                <i class="mdi mdi-cellphone-link"></i>
                            </div>
                        </div>
                        <div class="waypoint" data-animation="fade-in" data-delay=".2s">
                            <div class="label bold">Responsive</div>
                            <div style="color: black">My layouts will work on any device, big or small.</div>
                        </div>
                    </div>
                </div>
                <div class="flex row-gt-sm">
                    <div class="flex bullet-wrap ">
                        <div
                            class="hex-wrap waypoint"
                            data-animation="flip-in-x"
                            data-delay=".4s"
                        >
                            <div class="hexagon">
                                <i class="mdi mdi-lightbulb-outline"></i>
                            </div>
                        </div>
                        <div class="waypoint" data-animation="fade-in" data-delay=".4s">
                            <div class="label bold">Intuitive</div>
                            <div style="color: black">Strong preference for easy to use, intuitive UX/UI.</div>
                        </div>
                    </div>

                    <div class="flex bullet-wrap ">
                        <div
                            class="hex-wrap waypoint"
                            data-animation="flip-in-x"
                            data-delay=".6s"
                        >
                            <div class="hexagon">
                                <i class="mdi mdi-rocket"></i>
                            </div>
                        </div>
                        <div class="waypoint" data-animation="fade-in" data-delay=".6s">
                            <div class="label bold">Dynamic-Database Driven</div>
                            <div style="color: black">
                                Websites don't have to be static, I love making pages come
                                to life.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills-wrapper flex row-gt-sm">
                <div
                    class="flex flex-50-gt-sm waypoint"
                    data-animation="slide-in-left"
                >
                    <img src="img/me1.png" class="me" />
                    <div class="label bold"><h3>What can I do for you?</h3></div>
                    <div style="color: black">
                        I'm a Full-Stack Web Developer for Benelux region.

                        <br />
                        I have passion for creating modern web application wit
                        intuitive design & dynamic user experiences.
                        <br />
                        <br>
                        <span class="page-link bold my-hov " dest="contact"
                        >Shall we make something special ?</span
                        >
                    </div>
                </div>

                <div
                    class="flex flex-50-gt-sm waypoint bars-wrap"
                    data-animation="slide-in-right"
                >


                    <div class="bar flex">
                        <div class="bar fill" style="width:90%">
                            <div class="tag bold flex">PHP / Laravel</div>
                        </div>
                        <span>95%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style="width:80%">
                            <div class="tag bold flex">JS/ReactJS</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style="width:80%">
                            <div class="tag bold flex">Solidity</div>
                        </div>
                        <span>90%</span>
                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style="width:90%">
                            <div class="tag bold flex">Wordpress</div>
                        </div>
                        <span>70%</span>


                    </div>

                    <div class="bar flex">
                        <div class="bar fill" style="width:60%">
                            <div class="tag bold flex">Python/Django</div>
                        </div>
                        <span>60%</span>
                    </div>

                   



                    

                    

                </div>
            </div>
        </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="flex" id="portfolio" style="background-color: #0B2545">
        <div class="header waypoint" data-animation="slide-in-right" style=" color: #FFE900">
            PROJECTS
        </div>
        <div
            class="header-bar waypoint"
            data-animation="slide-in-right"
            data-delay=".3s"
        ></div>

        <div class="filter-wrap waypoint" data-animation="fade-in">
            <div class="flex row">
                <div class="filter" data-filter="all">ALL</div>
                <div class="filter" data-filter=".rails">PHP/Laravel</div>
                <div class="filter" data-filter=".react">WORDPRESS</div>
                <div class="filter" data-filter=".js">JAVASCRIPT</div>
            </div>
            <div class="float-bar">
                <div class="flex row">
                    <div class="filter" data-filter="all">ALL</div>
                    <div class="filter" data-filter=".rails">PHP/Laravel</div>
                    <div class="filter" data-filter=".react">WORDPRESS</div>
                    <div class="filter" data-filter=".js">JAVASCRIPT</div>
                </div>
            </div>
        </div>

        <div id="gallery" class="container flex row wrap waypoint">
            <div class="mix react" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold" style="color: white;">Resaurant Site</div>
                        <span class="highlight">PHP / Wordpress</span>
                    </div>
                    <div class="button" id="restaurant">LEARN MORE</div>

                </div>
            </div>

            <div class="mix react" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">Product Story</div>
                        <span class="highlight">PHP / Wordpress</span>
                    </div>
                    <div class="button" id="story">LEARN MORE</div>
                </div>
            </div>

            <div class="mix react" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">Influencer Blog</div>
                        <span class="highlight">PHP / Wordpress</span>
                    </div>
                    <div class="button" id="influencer">LEARN MORE</div>
                </div>
            </div>

            <div class="mix js" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">NETWARE</div>
                        <span class="highlight">JavaScript / Bootstrap 4 / SCSS</span>
                    </div>
                    <div class="button" id="netware">LEARN MORE</div>
                </div>
            </div>

            <div class="mix rails" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold" style="color: white">Blog </div>
                        <span class="highlight">PHP / Laravel</span>
                    </div>
                    <div class="button" id="blog">LEARN MORE</div>
                </div>
            </div>

            <div class="mix js" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">DIGITAL AGENCY</div>
                        <span class="highlight">JS / Bootstrap / SCSS</span>
                    </div>
                    <div class="button" id="digital">LEARN MORE</div>
                </div>
            </div>

            <div class="mix js" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">CREATIVE IDEAS</div>
                        <span class="highlight">JavaScript</span>
                    </div>
                    <div class="button" id="ideas">LEARN MORE</div>
                </div>
            </div>

            <div class="mix rails" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">E - Commerce Store</div>
                        <span class="highlight">PHP / Laravel</span>
                    </div>
                    <div class="button" id="minishop">LEARN MORE</div>
                </div>
            </div>

            <div class="mix js" data-my-order="1">
                <div>
                    <div class="card"></div>
                    <div class="text">
                        <div class="bold">Photographer Profile</div>
                        <span class="highlight">JS / Botstrap</span>
                    </div>
                    <div class="button" id="photo">LEARN MORE</div>
                </div>
            </div>
        </div>
    </section>

    <!-- BLOG -->
    <section id="blog"  style="background-color:  #02020A">
        <div class="container flex" >
            <div class="header waypoint" data-animation="slide-in-left" style="color: #FEE702">BLOG</div>
            <div
                class="header-bar waypoint"
                data-animation="slide-in-left"
                data-delay=".5s"
            ></div>

            <div class="flex row wrap">
                <div class="flex row-gt-sm">
                    <a
                        href="https://hackernoon.com/startups-beware-the-next-big-thing-34bdd3cbec4b"
                        target="_blank"
                    >
                        <div class="blog-wrap waypoint" data-animation="fade-in">
                            <div class="fade-wrap">
                                <div class="thumb" id="thumb-1"></div>
                                <div class="label bold">Startups, Beware the Next Big Thing</div>
                                <div class="date">APRIL 29, 2016</div>
                                <div class="bar"></div>
                                <div class="text" style="color: white">
                                    In 2007, Groupon took in the first million dollars of what would ultimately be $1.4B of venture capital, raised with ambitions of reshaping shopping. For a while, it looked like group buying, social commerce...
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://hackernoon.com/the-problem-that-is-government-money-bn443tts/"
                        target="_blank"
                    >
                        <div
                            class="blog-wrap waypoint"
                            data-animation="fade-in"
                            data-delay=".2s"
                        >
                            <div class="fade-wrap">
                                <div class="thumb" id="thumb-2"></div>
                                <div class="label bold">
                                    The Problem that is "Government Money"
                                </div>
                                <div class="date">MAY 28, 2020</div>
                                <div class="bar"></div>
                                <div class="text" style="color: white">
                                    In an earlier article, I outlined the opportunities that blockchains offer investors from a wide angle. This prompted a number of requests for more in-depth analysis of the disruptive qualities of this technology...
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="flex row-gt-sm">
                    <a
                        href="https://www.wired.com/2017/06/pied-pipers-new-internet-isnt-just-possible-almost/"
                        target="_blank"
                    >
                        <div
                            class="blog-wrap waypoint"
                            data-animation="fade-in"
                            data-delay=".4s"
                        >
                            <div class="fade-wrap">
                                <div class="thumb" id="thumb-3"></div>
                                <div class="label bold">Pied Piper's New Internet Isn't Just Possible—It's Almost Here</div>
                                <div class="date">MARCH 06, 2017</div>
                                <div class="bar"></div>
                                <div class="text" style="color: white">
                                    On HBO's Silicon Valley, startups promise to "change the world" by tackling silly, often nonexistent problems. But this season, the show's characters are tackling a project that really could make a difference. In their latest pivot, Richard Hendricks and the Pied Piper gang are trying to create a new internet that cuts out intermediaries like Facebook...
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://www.wired.com/story/fix-urban-sprawl-ditch-cul-de-sac/"
                        target="_blank"
                    >
                        <div
                            class="blog-wrap waypoint"
                            data-animation="fade-in"
                            data-delay=".6s"
                        >
                            <div class="fade-wrap">
                                <div class="thumb" id="thumb-4"></div>
                                <div class="label bold">
                                    Want to Fix Urban Sprawl? Ditch the Cul-de-Sac
                                </div>
                                <div class="date">FEBRUARY 23, 2015</div>
                                <div class="bar"></div>
                                <div class="text" style="color: white">
                                    THE WORLD’S CITIES are growing fast. Half the human race already lives in urban areas, and another 2.5 billion people could join them by 2050, the United Nations forecasts. While urban growth is inevitable, urban sprawl—with its long commutes and increased congestion—doesn’t have to be...
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    @include('partials.contact')

    @include('partials.footer')
