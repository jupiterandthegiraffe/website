var html = require("./htmlhint").HTMLHint
let htmls ="<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n" +
    "    <title>New page</title>\n" +
    "    <link href=\"tailwind_theme/tailwind.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "    <script>/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute('data-pg-ia-disabled')) { window.pgia_small_mq=typeof pgia_small_mq=='string'?pgia_small_mq:'(max-width:767px)';window.pgia_large_mq=typeof pgia_large_mq=='string'?pgia_large_mq:'(min-width:768px)';var style = document.createElement('style');var pgcss='html:not(.pg-ia-no-preview) [data-pg-ia-hide=\"\"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=\"\"] {opacity:1;visibility:visible;display:block;}';if(document.documentElement.hasAttribute('data-pg-id') && document.documentElement.hasAttribute('data-pg-mobile')) {pgia_small_mq='(min-width:0)';pgia_large_mq='(min-width:99999px)'} pgcss+='@media ' + pgia_small_mq + '{ html:not(.pg-ia-no-preview) [data-pg-ia-hide=\"mobile\"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=\"mobile\"] {opacity:1;visibility:visible;display:block;}}';pgcss+='@media ' + pgia_large_mq + '{html:not(.pg-ia-no-preview) [data-pg-ia-hide=\"desktop\"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=\"desktop\"] {opacity:1;visibility:visible;display:block;}}';style.innerHTML=pgcss;document.querySelector('head').appendChild(style);}}catch(e){console&&console.log(e);}})()</script>\n" +
    "    <meta name=\"description\" content=\"Pinegrow Web Editor - Professional Services TailwindCSS Template\">\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <header class=\"bg-blue-600\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <div class=\"flex flex-wrap -mx-4 md:justify-between justify-center items-center py-2\"> \n" +
    "          <div class=\"flex-wrap inline-flex px-4 py-1 space-x-1\"> \n" +
    "            <a href=\"#\" class=\"p-2 text-white border-white hover:bg-white  hover:text-blue-600 border rounded-full\" aria-label=\"facebook link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                <path d=\"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z\"></path>                 \n" +
    "              </svg></a> \n" +
    "            <a href=\"#\" class=\"p-2 text-white border-white hover:bg-white  hover:text-blue-600 border rounded-full\" aria-label=\"twitter link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                <path d=\"M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z\"></path>                 \n" +
    "              </svg></a> \n" +
    "            <a href=\"#\" class=\"p-2 text-white border-white hover:bg-white  hover:text-blue-600 border rounded-full\" aria-label=\"instagram link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                <path d=\"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z\"></path>                 \n" +
    "              </svg></a> \n" +
    "            <a href=\"#\" class=\"p-2 text-white border-white hover:bg-white  hover:text-blue-600 border rounded-full\" aria-label=\"linkedin link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                <path d=\"M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z\"></path>                 \n" +
    "              </svg></a> \n" +
    "            <a href=\"#\" class=\"p-2 text-white border-white hover:bg-white  hover:text-blue-600 border rounded-full\" aria-label=\"youtube link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                <path d=\"M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z\"></path>                 \n" +
    "              </svg></a> \n" +
    "          </div>           \n" +
    "          <div class=\"flex-wrap inline-flex px-4 py-1 space-x-1 md:space-x-4\"> \n" +
    "            <a href=\"#\" class=\"group hover:text-gray-300 inline-flex items-center text-sm text-white\"> <span class=\"border border-white group-hover:bg-white group-hover:text-blue-600 p-2 rounded-full text-white md:mr-2\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                  <path d=\"M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z\"></path>                   \n" +
    "                </svg></span> <span class=\"hidden md:block\">+0-123-456-789</span> </a> \n" +
    "            <a href=\"#\" class=\"group hover:text-gray-300 inline-flex items-center text-sm text-white\"> <span class=\"border border-white group-hover:bg-white group-hover:text-blue-600 p-2 rounded-full text-white md:mr-2\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-4 w-4\"> \n" +
    "                  <path d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z\"></path>                   \n" +
    "                </svg></span> <span class=\"hidden md:block\">info@company.com</span> </a> \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "        <hr class=\"border-gray-400 border-opacity-25 mx-auto w-full\"> \n" +
    "      </div>       \n" +
    "      <nav class=\"flex items-center flex-wrap px-4  container mx-auto py-8\"> \n" +
    "        <a href=\"#\" class=\"font-medium font-serif hover:text-blue-800 mr-auto text-3xl text-white uppercase\">                 Company </a> \n" +
    "        <button class=\"hover:text-gray-800 px-3 py-2 rounded text-white lg:hidden\" data-name=\"nav-toggler\" data-pg-ia='{\"l\":[{\"name\":\"NabMenuToggler\",\"trg\":\"click\",\"a\":{\"l\":[{\"t\":\"^nav|[data-name=nav-menu]\",\"l\":[{\"t\":\"set\",\"p\":0,\"d\":0,\"l\":{\"class.remove\":\"hidden\"}}]},{\"t\":\"#gt# span:nth-of-type(1)\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.2,\"l\":{\"rotationZ\":45,\"yPercent\":300}}]},{\"t\":\"#gt# span:nth-of-type(2)\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.2,\"l\":{\"autoAlpha\":0}}]},{\"t\":\"#gt# span:nth-of-type(3)\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.2,\"l\":{\"rotationZ\":-45,\"yPercent\":-300}}]}]},\"pdef\":\"true\",\"trev\":\"true\"}]}'> \n" +
    "          <span class=\"block border-b-2 border-current my-1 w-6\"></span> \n" +
    "          <span class=\"block border-b-2 border-current my-1 w-6\"></span> \n" +
    "          <span class=\"block border-b-2 border-current my-1 w-6\"></span> \n" +
    "        </button>         \n" +
    "        <div class=\"lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full hidden\" data-name=\"nav-menu\"> \n" +
    "          <div class=\"flex flex-col lg:flex-row\"> \n" +
    "            <a href=\"#\" class=\"font-light lg:px-4 uppercase py-2 px-0  text-white hover:text-gray-300\">Home</a> \n" +
    "            <a href=\"#\" class=\"font-light lg:px-4 uppercase py-2 px-0  text-white hover:text-gray-300\">About</a> \n" +
    "            <a href=\"#\" class=\"font-light lg:px-4 uppercase py-2 px-0  text-white hover:text-gray-300\">Features</a> \n" +
    "            <a href=\"#\" class=\"font-light lg:px-4 uppercase py-2 px-0  text-white hover:text-gray-300\">Services</a> \n" +
    "            <a href=\"#\" class=\"font-light lg:px-4 uppercase py-2 px-0  text-white hover:text-gray-300\">Contact</a> \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </nav>       \n" +
    "    </header>\n" +
    "    <section class=\"bg-gray-50 relative text-gray-500\"> \n" +
    "      <div class=\"container mx-auto pt-20 px-4\"> \n" +
    "        <div class=\"-mx-4 flex flex-wrap items-center\"> \n" +
    "          <div class=\"lg:w-6/12 mb-16 px-4 w-full\"> \n" +
    "            <p class=\"font-medium mb-2 text-blue-600 uppercase\">Professional Lawyers</p> \n" +
    "            <h1 class=\"font-bold font-serif mb-4 text-6xl text-gray-800\">Dedicated to Helping Our Clients Succeed</h1> \n" +
    "            <p class=\"font-light leading-tight mb-6 text-xl\">Our ability to feel, act and communicate is indistinguishable from magic.</p> \n" +
    "            <a href=\"#\" class=\"bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white\">Contact Us</a> \n" +
    "          </div>           \n" +
    "          <div class=\"px-4 w-full lg:w-6/12\"> \n" +
    "            <div class=\"-mb-32 bg-white p-4 shadow-xl\"> \n" +
    "              <img src=\"https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDExfHxidWlsZGluZ3N8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=640&h=800&fit=crop\" class=\"w-full\" alt=\"Hero image\" width=\"640\" height=\"800\"/> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section class=\"pb-20 pt-40 text-gray-500\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <div class=\"flex flex-wrap -mx-4  items-center mb-4\"> \n" +
    "          <div class=\"px-4 w-full lg:w-9/12\"> \n" +
    "            <h2 class=\"font-medium mb-1 text-blue-600\">Services</h2> \n" +
    "            <h3 class=\"font-bold font-serif mb-1 text-4xl text-gray-900\">We are committed to protecting our clients</h3> \n" +
    "            <p class=\"mb-4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p> \n" +
    "          </div>           \n" +
    "          <div class=\"px-4 w-full lg:text-right lg:w-3/12\"> \n" +
    "            <a href=\"#\" class=\"bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white\">Read More</a> \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "        <div class=\"flex flex-wrap -mx-4\"> \n" +
    "          <div class=\"w-full p-4  xl:w-3/12 sm:w-6/12\"> \n" +
    "            <div class=\"bg-gray-50 px-6 py-16 rounded-lg shadow-lg\">\n" +
    "              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-10 inline-block mb-4 text-blue-600 w-10\">\n" +
    "                <g>\n" +
    "                  <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                  <path d=\"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z\"/>\n" +
    "                </g>\n" +
    "              </svg>               \n" +
    "              <h4 class=\"font-bold font-serif mb-2 text-gray-900 text-xl\">Data Protection</h4> \n" +
    "              <p class=\"mb-4\">                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-800 hover:underline text-blue-600\">Learn More</a> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-3/12 sm:w-6/12\"> \n" +
    "            <div class=\"bg-gray-50 px-6 py-16 rounded-lg shadow-lg sm:-mb-16 sm:mt-16\">\n" +
    "              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-10 inline-block mb-4 text-blue-600 w-10\">\n" +
    "                <g>\n" +
    "                  <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                  <path d=\"M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z\"/>\n" +
    "                </g>\n" +
    "              </svg>               \n" +
    "              <h4 class=\"font-bold font-serif mb-2 text-gray-900 text-xl\">Intellectual Property</h4> \n" +
    "              <p class=\"mb-4\">                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-800 hover:underline text-blue-600\">Learn More</a> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-3/12 sm:w-6/12\"> \n" +
    "            <div class=\"bg-gray-50 px-6 py-16 rounded-lg shadow-lg\">\n" +
    "              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-10 inline-block mb-4 text-blue-600 w-10\">\n" +
    "                <g>\n" +
    "                  <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                  <path d=\"M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v16h14V4H5zm2 2h10v4H7V6zm0 6h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v6h-2v-6z\"/>\n" +
    "                </g>\n" +
    "              </svg>               \n" +
    "              <h4 class=\"font-bold font-serif mb-2 text-gray-900 text-xl\">Tax Consultation</h4> \n" +
    "              <p class=\"mb-4\">                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-800 hover:underline text-blue-600\">Learn More</a> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-3/12 sm:w-6/12\"> \n" +
    "            <div class=\"bg-gray-50 px-6 py-16 rounded-lg shadow-lg sm:mt-16\">\n" +
    "              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-10 inline-block mb-4 text-blue-600 w-10\">\n" +
    "                <g>\n" +
    "                  <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                  <path fill-rule=\"nonzero\" d=\"M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"/>\n" +
    "                </g>\n" +
    "              </svg>               \n" +
    "              <h4 class=\"font-bold font-serif mb-2 text-gray-900 text-xl\">Consumer Protection</h4> \n" +
    "              <p class=\"mb-4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-800 hover:underline text-blue-600\">Learn More</a> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section> \n" +
    "      <div class=\"container mx-auto px-4 relative\">\n" +
    "        <div class=\"bg-gray-50 lg:px-16 p-10\">\n" +
    "          <div class=\"-mx-4 flex flex-wrap items-center\"> \n" +
    "            <div class=\"px-4 py-16 w-full lg:w-7/12\"> \n" +
    "              <h2 class=\"mb-1 text-gray-500 text-lg uppercase\">Get in touch</h2> \n" +
    "              <h3 class=\"font-bold font-serif mb-6 text-4xl text-gray-800\">Maximize the efficiency and quality of your company.</h3> \n" +
    "              <a href=\"#\" class=\"bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white\">Let&apos;s Talk</a> \n" +
    "            </div>\n" +
    "            <div class=\"px-4 w-full lg:w-5/12\"> \n" +
    "              <img src=\"https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI2NXx8cHJvZmVzc2lvbmFsfGVufDB8fHw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=400&fit=crop\" class=\"w-full\" alt=\"CTA image\" width=\"600\" height=\"400\"/> \n" +
    "            </div>             \n" +
    "          </div>\n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section> \n" +
    "      <div class=\"container mx-auto px-4\">\n" +
    "        <div class=\"bg-blue-700 px-12 py-20 relative text-center text-white\">\n" +
    "          <div class=\"relative lg:mx-auto xl:w-10/12\">\n" +
    "            <h2 class=\"font-medium mb-2 text-xl\">Our Number Counts</h2>\n" +
    "            <h3 class=\"font-bold font-serif mb-6 text-4xl\">Most awarded law firm in the city</h3>\n" +
    "            <div class=\"flex flex-wrap -mx-4\">\n" +
    "              <div class=\"p-4 w-full sm:w-6/12 lg:w-3/12\">\n" +
    "                <div class=\"bg-gray-900 bg-opacity-25 px-4 py-10\">\n" +
    "                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-12 inline-block mb-6 w-12\">\n" +
    "                    <g>\n" +
    "                      <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                      <path d=\"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z\"/>\n" +
    "                    </g>\n" +
    "                  </svg>\n" +
    "                  <h4 class=\"font-bold font-serif mb-1 text-4xl\">\n" +
    "                            636 </h4>\n" +
    "                  <h5>Qualified Lawyers</h5>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"p-4 w-full sm:w-6/12 lg:w-3/12\">\n" +
    "                <div class=\"bg-gray-900 bg-opacity-25 px-4 py-10\">\n" +
    "                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-12 inline-block mb-6 w-12\">\n" +
    "                    <g>\n" +
    "                      <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                      <path d=\"M9 18H4v-8h5v8zm-2-2v-4H6v4h1zm6 0V8h-1v8h1zm2 2h-5V6h5v12zm4-2V4h-1v12h1zm2 2h-5V2h5v16zm1 4H3v-2h19v2z\"/>\n" +
    "                    </g>\n" +
    "                  </svg>\n" +
    "                  <h4 class=\"font-bold font-serif mb-1 text-4xl\">1349</h4>\n" +
    "                  <h5>Projects Completed</h5>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"p-4 w-full sm:w-6/12 lg:w-3/12\">\n" +
    "                <div class=\"bg-gray-900 bg-opacity-25 px-4 py-10\">\n" +
    "                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-12 inline-block mb-6 w-12\">\n" +
    "                    <g>\n" +
    "                      <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                      <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z\"/>\n" +
    "                    </g>\n" +
    "                  </svg>\n" +
    "                  <h4 class=\"font-bold font-serif mb-1 text-4xl\">2496</h4>\n" +
    "                  <h5>Satisfied Clients</h5>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"p-4 w-full sm:w-6/12 lg:w-3/12\">\n" +
    "                <div class=\"bg-gray-900 bg-opacity-25 px-4 py-10\">\n" +
    "                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\" class=\"h-12 inline-block mb-6 w-12\">\n" +
    "                    <g>\n" +
    "                      <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n" +
    "                      <path d=\"M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z\"/>\n" +
    "                    </g>\n" +
    "                  </svg>\n" +
    "                  <h4 class=\"font-bold font-serif mb-1 text-4xl\">4694</h4>\n" +
    "                  <h5>Awards Won</h5>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section class=\"py-16 text-center text-gray-500\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <div class=\"-mx-4 flex flex-wrap\"> \n" +
    "          <div class=\"mx-auto p-4 w-full lg:w-8/12\"> \n" +
    "            <div class=\"relative text-center text-gray-500 z-0\" data-pg-ia='{\"l\":[{\"trg\":\"now\",\"a\":{\"l\":[{\"t\":\"#gt#div#gt#[data-slider-elem=pgia-slide]:nth-of-type(1)\",\"l\":[{\"t\":\"set\",\"p\":0,\"d\":0,\"s\":0.1,\"l\":{\"pgDom\":{\"clone\":1,\"ins\":\"append\"}}}]}]},\"pdef\":\"true\",\"rstr\":\"true\",\"name\":\"CloneSlidesForInfinite\"},{\"name\":\"AutoPlay\",\"trg\":\"now\",\"timer\":\"6\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"set\",\"p\":5.98,\"d\":0,\"l\":{\"pgia\":{\"play\":\"GotoNext\"}}}]}]},\"rpt\":\"-1\",\"tcv\":\"slider-user-active\",\"nopg\":\"true\"},{\"name\":\"UserActive\",\"trg\":\"mouseenter\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"set\",\"p\":0,\"d\":0,\"l\":{\"pgia\":{\"pause\":\"AutoPlay\"}}}]}]},\"rstr\":\"true\",\"po\":\"true\",\"pol\":\"UserInactive\"},{\"name\":\"UserInactive\",\"trg\":\"mouseleave_notouch\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"tween\",\"p\":0.5,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"AutoPlay\"}}}]}]},\"rstr\":\"true\",\"po\":\"true\",\"pol\":\"UserActive\"},{\"name\":\"SwipeLeftToNext\",\"trg\":\"swipe_left\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"GotoNext\"}}}]}]},\"tc\":\"no-attr\",\"tca\":\"data-slider-direction\",\"tcv\":\"vertical\",\"pdef\":\"true\"},{\"name\":\"SwipeRightToPrev\",\"trg\":\"swipe_right\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"GotoPrev\"}}}]}]},\"tc\":\"no-attr\",\"tca\":\"data-slider-direction\",\"tcv\":\"vertical\",\"pdef\":\"true\"},{\"name\":\"GotoNext\",\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"[data-slider-elem=pgia-slides-container]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"scrollTo\":{\"dest\":\"next_page_or_start\"}}}]}]}},{\"name\":\"GotoPrev\",\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"[data-slider-elem=pgia-slides-container]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"scrollTo\":{\"dest\":\"prev_page\"}}}]}]}},{\"name\":\"GotoFirst\",\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"[data-slider-elem=pgia-slides-container]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"scrollTo\":{\"dest\":\"first\"}}}]}]}},{\"name\":\"GotoLast\",\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"[data-slider-elem=pgia-slides-container]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"scrollTo\":{\"dest\":\"last\"}}}]}]}},{\"name\":\"SwipeDownToNext\",\"trg\":\"swipe_down\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"GotoNext\"}}}]}]},\"tc\":\"attr\",\"tca\":\"data-slider-direction\",\"tcv\":\"vertical\",\"pdef\":\"true\"},{\"name\":\"SwipeUpToPrev\",\"trg\":\"swipe_up\",\"a\":{\"l\":[{\"t\":\"this\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"GotoPrev\"}}}]}]},\"tc\":\"attr\",\"tca\":\"data-slider-direction\",\"tcv\":\"vertical\",\"pdef\":\"true\"}]}' data-slider-scrollbar=\"auto\" data-slider-slides-per-page=\"1\" data-slider-direction=\"horizontal\" data-slider-name=\"pgia-slider\">\n" +
    "              <div class=\"flex flex-row nowrap overflow-hidden\" data-pg-ia-scene='{\"dir\":\"a\",\"s\":\"whole\",\"snap\":\"e\",\"pag\":\"p\",\"pag_t\":\".pgia-slide\",\"pag_clone\":\"true\",\"pag_pa\":\"Current\",\"pag_pd\":\"-Current\",\"pag_inf\":\"true\",\"pag_i\":\"^[data-slider-name=pgia-slider]|[data-slider-elem=pgia-pagination-item]\"}' data-slider-elem=\"pgia-slides-container\">\n" +
    "                <div class=\"flex-grow-0 flex-shrink-0 overflow-hidden relative w-full\" data-pg-ia='{\"l\":[{\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"#gt#div\",\"l\":[{\"t\":\"tween\",\"p\":0.4,\"d\":0.6,\"l\":{\"autoAlpha\":1},\"e\":\"Linear.easeNone\"}]}],\"desc\":\"Show the content of the slide. Customize this animation to reveal the content.\"},\"rstr\":\"true\",\"po\":\"true\",\"pol\":\"HideContent\",\"name\":\"ShowContent\"},{\"name\":\"HideContent\",\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"#gt#div\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.1,\"l\":{\"autoAlpha\":0}}]}],\"desc\":\"Hide the content of the slide. Customize this animation to reveal the content.\"},\"rstr\":\"true\",\"po\":\"true\",\"pol\":\"ShowContent\"}]}' data-pg-ia-scene='{\"dir\":\"a\",\"s\":\"custom\",\"s_t\":\"start\",\"s_s\":\"end\",\"e_t\":\"end\",\"e_s\":\"start\",\"l\":[{\"a\":{\"l\":[{\"t\":\"\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"HideContent\"}}},{\"t\":\"tween\",\"p\":0.5,\"d\":9,\"l\":{\"pgia\":{\"play\":\"ShowContent\"}}},{\"t\":\"tween\",\"p\":9.5,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"HideContent\"}}}]}]},\"p\":\"scroll\",\"sc_dir\":\"up_down\",\"rep\":\"true\"}]}' data-pg-ia-apply=\"^[data-slider-name=pgia-slider]|[data-slider-elem=pgia-slide]\" data-slider-elem=\"pgia-slide\">\n" +
    "                  <div data-pg-ia-hide class=\"px-16 py-4\">\n" +
    "                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-20 inline-block mb-4 text-blue-600 w-20\"> \n" +
    "                      <path d=\"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z\"/> \n" +
    "                    </svg>\n" +
    "                    <h2 class=\"font-normal font-serif mb-4 text-3xl text-gray-800\">It's so easy to create a professional website at a fraction of the cost.</h2>\n" +
    "                    <div> \n" +
    "                      <p class=\"inline-block\">Zig Ziglar -</p> \n" +
    "                      <p class=\"font-normal inline-block text-blue-600 text-lg\">ACME Gizmo LLC</p> \n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-grow-0 flex-shrink-0 overflow-hidden relative w-full\" data-slider-elem=\"pgia-slide\">\n" +
    "                  <div data-pg-ia-hide class=\"px-16 py-4\">\n" +
    "                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-20 inline-block mb-4 text-blue-600 w-20\"> \n" +
    "                      <path d=\"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z\"/> \n" +
    "                    </svg>\n" +
    "                    <h2 class=\"font-normal font-serif mb-4 text-3xl text-gray-800\">Good content isn&rsquo;t about good storytelling. It&rsquo;s about telling a true story well.</h2>\n" +
    "                    <div> \n" +
    "                      <p class=\"inline-block\">I.P Freely - </p> \n" +
    "                      <p class=\"font-normal inline-block text-blue-600 text-lg\">ACME Gizmo LLC</p> \n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-grow-0 flex-shrink-0 overflow-hidden relative w-full\" data-slider-elem=\"pgia-slide\">\n" +
    "                  <div data-pg-ia-hide class=\"px-16 py-4\">\n" +
    "                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-20 inline-block mb-4 text-blue-600 w-20\"> \n" +
    "                      <path d=\"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z\"/> \n" +
    "                    </svg>\n" +
    "                    <h2 class=\"font-normal font-serif mb-4 text-3xl text-gray-800\">It's so easy to create a professional website at a fraction of the cost.</h2>\n" +
    "                    <div> \n" +
    "                      <p class=\"inline-block\">Zig Ziglar -</p> \n" +
    "                      <p class=\"font-normal inline-block text-blue-600 text-lg\">ACME Gizmo LLC</p> \n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-grow-0 flex-shrink-0 overflow-hidden relative w-full\" data-slider-elem=\"pgia-slide\">\n" +
    "                  <div data-pg-ia-hide class=\"px-16 py-4\">\n" +
    "                    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-20 inline-block mb-4 text-blue-600 w-20\"> \n" +
    "                      <path d=\"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z\"/> \n" +
    "                    </svg>\n" +
    "                    <h2 class=\"font-normal font-serif mb-4 text-3xl text-gray-800\">Good content isn’t about good storytelling. It’s about telling a true story well.</h2>\n" +
    "                    <div> \n" +
    "                      <p class=\"inline-block\">I.P Freely - </p> \n" +
    "                      <p class=\"font-normal inline-block text-blue-600 text-lg\">Paper City LLC</p> \n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div data-slider-elem=\"pgia-controls\">\n" +
    "                <a href=\"#\" data-scroll-to=\"prev\" data-pg-ia='{\"l\":[{\"name\":\"ScrollTo\",\"trg\":\"click\",\"a\":{\"l\":[{\"t\":\"^[data-slider-name=pgia-slider]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"pgia\":{\"play\":\"Goto${target.data-scroll-to}\"}}}]}]},\"pdef\":\"true\"}]}' data-pg-ia-apply=\"^[data-slider-name=pgia-slider]|[data-scroll-to]\" class=\"absolute bg-white bottom-1/2 h-10 hover:bg-gray-200 inline-flex items-center justify-center left-0 ml-4 rounded-full shadow-lg text-gray-900 text-xl transform translate-y-1/2 w-10\">&lsaquo;</a>\n" +
    "                <div class=\"flex justify-center pb-3 space-x-1 text-center\" data-slider-elem=\"pgia-pagination\">\n" +
    "                  <a href=\"#\" data-pg-ia='{\"l\":[{\"name\":\"ScrollToSlide\",\"trg\":\"click\",\"a\":{\"l\":[{\"t\":\"^[data-slider-name=pgia-slider]|[data-slider-elem=pgia-slides-container]\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.5,\"l\":{\"scrollTo\":{\"dest\":\"page\"}}}]}]},\"pdef\":\"true\"},{\"trg\":\"no\",\"a\":{\"l\":[{\"t\":\"span\",\"l\":[{\"t\":\"tween\",\"p\":0,\"d\":0.2,\"l\":{\"class.add\":\"bg-blue-600\"}}]}],\"desc\":\"Customize the active item animation.\"},\"name\":\"Current\"}]}' class=\"group inline-block py-3\" data-slider-elem=\"pgia-pagination-item\" aria-label=\"slider dot\"><span class=\"bg-gray-400 block group-hover:bg-blue-600 h-1 rounded-full w-6\"></span></a>\n" +
    "                </div>\n" +
    "                <a class=\"absolute bg-white bottom-1/2 h-10 hover:bg-gray-200 inline-flex items-center justify-center mr-4 right-0 rounded-full shadow-lg text-gray-900 text-xl transform translate-y-1/2 w-10\" href=\"#\" data-scroll-to=\"next\">&rsaquo;</a>\n" +
    "              </div>\n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section class=\"bg-gray-50 py-16 text-gray-500\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <h2 class=\"font-bold font-serif mb-6 text-4xl text-gray-900\">Latest Articles</h2>\n" +
    "        <div class=\"flex flex-wrap -mx-4  justify-center\"> \n" +
    "          <div class=\"p-4 w-full md:w-6/12 lg:w-4/12\"> \n" +
    "            <div class=\"bg-white flex flex-col h-full shadow-lg\"> \n" +
    "              <a href=\"#\" class=\"block hover:opacity-75\"><img src=\"https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop\" class=\"w-full\" alt=\"Blog image\" width=\"350\" height=\"240\"/></a>\n" +
    "              <div class=\"p-4\">\n" +
    "                <div class=\"font-semibold mb-1 text-blue-600 text-sm\">\n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Travel</a>, \n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Lifestyle</a>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"block hover:text-blue-600 text-gray-800\"><h3 class=\"font-semibold font-serif leading-tight text-xl\">Travelling as a way of self-discovery and progress</h3></a>\n" +
    "              </div>               \n" +
    "              <div class=\"border-t flex items-center justify-between mt-auto p-4 text-gray-600 text-xs\">\n" +
    "                <a href=\"#\" class=\"hover:text-blue-600 inline-flex items-center space-x-2\"> <img src=\"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop\" class=\"h-12 rounded-full w-12\" alt=\"Author image\" width=\"400\" height=\"400\"/><div>\n" +
    "                    <h4 class=\"font-semibold font-serif text-base\">Dianne Russell</h4>\n" +
    "                    <p>10 August 2020</p>\n" +
    "                  </div></a>\n" +
    "                <span>6 min read</span>\n" +
    "              </div>               \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"p-4 w-full md:w-6/12 lg:w-4/12\"> \n" +
    "            <div class=\"bg-white flex flex-col h-full shadow-lg\"> \n" +
    "              <a href=\"#\" class=\"block hover:opacity-75\"><img src=\"https://images.unsplash.com/photo-1577327966244-999949c7e884?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDEyfHxidXNpbmVzcyUyMHBob3RvZ3JhcGhlcnxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop\" class=\"w-full\" alt=\"Blog image\" width=\"350\" height=\"240\"/></a>\n" +
    "              <div class=\"p-4\">\n" +
    "                <div class=\"font-semibold mb-1 text-blue-600 text-sm\">\n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Travel</a>, \n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Lifestyle</a>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"block hover:text-blue-600 text-gray-800\"><h3 class=\"font-semibold font-serif leading-tight text-xl\">Where to grow your business as a photographer: site or social media?</h3></a>\n" +
    "              </div>               \n" +
    "              <div class=\"border-t flex items-center justify-between mt-auto p-4 text-gray-600 text-xs\">\n" +
    "                <a href=\"#\" class=\"hover:text-blue-600 inline-flex items-center space-x-2\"> <img src=\"https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDd8fGNhdHxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop\" class=\"h-12 rounded-full w-12\" alt=\"Author image\" width=\"400\" height=\"400\"/><div>\n" +
    "                    <h4 class=\"font-semibold font-serif text-base\">Kathryn Murphy</h4>\n" +
    "                    <p>10 August 2020</p>\n" +
    "                  </div></a>\n" +
    "                <span>6 min read</span>\n" +
    "              </div>               \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"p-4 w-full md:w-6/12 lg:w-4/12\"> \n" +
    "            <div class=\"bg-white flex flex-col h-full shadow-lg\"> \n" +
    "              <a href=\"#\" class=\"block hover:opacity-75\"><img src=\"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE0MHx8Y29sb3JzJTIwd2Vic2l0ZXxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop\" class=\"w-full\" alt=\"Blog image\" width=\"350\" height=\"240\"/></a>\n" +
    "              <div class=\"p-4\">\n" +
    "                <div class=\"font-semibold mb-1 text-blue-600 text-sm\">\n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Travel</a>, \n" +
    "                  <a href=\"#\" class=\"hover:text-blue-800 hover:underline\">Lifestyle</a>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"block hover:text-blue-600 text-gray-800\"><h3 class=\"font-semibold font-serif leading-tight text-xl\">How to choose the right colors when creating a website?</h3></a>\n" +
    "              </div>               \n" +
    "              <div class=\"border-t flex items-center justify-between mt-auto p-4 text-gray-600 text-xs\">\n" +
    "                <a href=\"#\" class=\"hover:text-blue-600 inline-flex items-center space-x-2\"> <img src=\"https://images.unsplash.com/photo-1517101724602-c257fe568157?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDZ8fHBhcnJvdHxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop\" class=\"h-12 rounded-full w-12\" alt=\"Author image\" width=\"400\" height=\"400\"/><div>\n" +
    "                    <h4 class=\"font-semibold font-serif text-base\">Darrell Steward</h4>\n" +
    "                    <p>10 August 2020</p>\n" +
    "                  </div></a>\n" +
    "                <span>6 min read</span>\n" +
    "              </div>               \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <section class=\"py-24 text-gray-500\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <div class=\"flex flex-wrap -mx-4  items-center\"> \n" +
    "          <div class=\"mx-auto px-4 text-center w-full lg:w-7/12\"> \n" +
    "            <h2 class=\"font-bold font-serif mb-2 text-4xl text-gray-900\">Need a professional legal advice?</h2>\n" +
    "            <p class=\"font-light mb-8 text-xl\">Get one free consultation from our legal experts</p> \n" +
    "            <a href=\"#\" class=\"bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white\">Request Now</a> \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </section>\n" +
    "    <footer class=\"bg-blue-700 font-light pt-12 text-white\"> \n" +
    "      <div class=\"container mx-auto px-4\"> \n" +
    "        <div class=\"flex flex-wrap -mx-4\"> \n" +
    "          <div class=\"w-full p-4  xl:mr-auto xl:w-4/12\"> \n" +
    "            <a href=\"#\" class=\"font-medium font-serif hover:text-blue-400 inline-block mb-6 mr-auto text-3xl text-white uppercase\">                 Company </a> \n" +
    "            <p class=\"mb-4 text-sm\">                             Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper. </p> \n" +
    "            <div class=\"mb-6\"> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\">+1 234 567-890</a> \n" +
    "              <br> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\">hello@company.com</a> \n" +
    "            </div>             \n" +
    "            <div class=\"flex-wrap inline-flex space-x-3\"> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\" aria-label=\"facebook link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-5 w-5\"> \n" +
    "                  <path d=\"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z\"/> \n" +
    "                </svg></a> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\" aria-label=\"twitter link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-5 w-5\"> \n" +
    "                  <path d=\"M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z\"/> \n" +
    "                </svg></a> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\" aria-label=\"instagram link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-5 w-5\"> \n" +
    "                  <path d=\"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z\"/> \n" +
    "                </svg></a> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\" aria-label=\"linkedin link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-5 w-5\"> \n" +
    "                  <path d=\"M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z\"/> \n" +
    "                </svg></a> \n" +
    "              <a href=\"#\" class=\"hover:text-blue-400\" aria-label=\"youtube link\"> <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-5 w-5\"> \n" +
    "                  <path d=\"M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z\"/> \n" +
    "                </svg></a> \n" +
    "            </div>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-2/12 sm:w-4/12\"> \n" +
    "            <h2 class=\"font-bold font-serif mb-8 text-lg uppercase\">                             About </h2> \n" +
    "            <ul> \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Get Quote</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Enterprise Plan</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Become an Affiliate</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Our Portfolio</a> \n" +
    "              </li>               \n" +
    "            </ul>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-2/12 sm:w-4/12\"> \n" +
    "            <h2 class=\"font-bold font-serif mb-8 text-lg uppercase\">                             Services </h2> \n" +
    "            <ul> \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Web Design</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Web Development</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">WordPress</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Digital Marketing</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Content Writing</a> \n" +
    "              </li>               \n" +
    "            </ul>             \n" +
    "          </div>           \n" +
    "          <div class=\"w-full p-4  xl:w-2/12 sm:w-4/12\"> \n" +
    "            <h2 class=\"font-bold font-serif mb-8 text-lg uppercase\">                             Other </h2> \n" +
    "            <ul> \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Business Stories</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Learning</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Licence</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Refund Policy</a> \n" +
    "              </li>               \n" +
    "              <li class=\"mb-4\"> \n" +
    "                <a href=\"#\" class=\"hover:text-blue-400\">Terms of Service</a> \n" +
    "              </li>               \n" +
    "            </ul>             \n" +
    "          </div>           \n" +
    "        </div>         \n" +
    "        <div class=\"py-4 text-center\"> \n" +
    "          <hr class=\"mb-4 opacity-25\"> \n" +
    "          <p class=\"text-sm\">Copyright &copy; 2021 Company Name</p> \n" +
    "        </div>         \n" +
    "      </div>       \n" +
    "    </footer>\n" +
    "    <script src=\"pgia/lib/pgia.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
let d = html.verify(htmls,{
    "tagname-lowercase": true,
        "attr-lowercase": false,
        "attr-value-double-quotes": false,
        "tag-pair": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "attr-no-duplication": true,
        "title-require": true
})

d

let r = "Tag must be paired, missing: [ </di> ], start tag match failed [ <di class=\"container mx-auto px-4\"> ] on line 13."

let g = r.match(/line\s?(\d+)/si)
g

let s = /line\s?(\d+)/.exec(r)
s