// 1) What is HTML?
{
    // HTML is short for HyperText Markup Language and is the language of the World Wide Web. 
    // It is the standard text formatting language used for creating and displaying pages on the Web.
    //  HTML documents are made up of two things: the content and the tags that format it for proper display on pages.
}

// 2) What are tags?
{
    // Content is placed in between HTML tags in order to properly format it. 
    // It makes use of the less than symbol (<) and the greater than symbol (>). 
    // A slash symbol is also used as a closing tag. For example:
    // <strong>sample</strong>
}

// 3) Do all HTML tags come in a pair?
{
    // No, there are single HTML tags that do not need a closing tag. Examples are the <img> tag and <br> tags.
}

// 4) What are some of the common lists that can be used when designing a page?
{
    // You can insert any or a combination of the following list types:
    // – ordered list
    // – unordered list
    // – definition list
    // Each of this list types makes use of a different tag set to compose
}

// 5) How do you insert a comment in HTML?
{
    // Comments in HTML begins with “<!–“nd ends with “–>”. For example:
    // <!-- A SAMPLE COMMENT -->
}

// 6) What is an image map?
{
    // Image map lets you link to many different web pages using a single image. 
    // You can define shapes in images that you want to make part of an image mapping.
}

// 7) What is the advantage of collapsing white space?
{
    // White spaces are a blank sequence of space characters, which is treated as a single space character in HTML.
    // Because the browser collapses multiple spaces into a single space, you can indent lines of text without 
    // worrying about multiple spaces. This enables you to organize the HTML code into a much more readable format.
}

// 8) Can attribute values be set to anything or are there specific values that they accept?
{
    // Some attribute values can be set to only predefined values. Other attributes can accept any 
    // numerical value that represents the number of pixels for a size.
}

// 9) How do you insert a copyright symbol on a browser page?
{
    // To insert the copyright symbol, you need to type &copy; or & #169; in an HTML file.
}

// 10) How do you create links to sections within the same page?
{
    // Links can be created using the <a> tag, with referencing through the use of the number (#) symbol. 
    // For example, you can have one line as <a href=”#topmost”>BACK TO TOP</a>, which would result in the 
    // words “BACK TO TOP” appearing on the webpage and links to a bookmark named topmost. You then create 
    // a separate tag command like <a name=”topmost”> somewhere on the top of the same webpage so that the 
    // user will be linked to that spot when he clicked on “BACK TO TOP”.
}

// 11) Do older HTML files work on newer browsers?
{
    // Yes, older HTML files are compliant to the HTML standard. Most older files work on the newer browsers, 
    // though some features may not work.
}

// 12) Does a hyperlink apply to text only?
{
    // No, hyperlinks can be used in the text as well as images. That means you can convert an image into a link
    // that will allow users to link to another page when clicked. Surround the image within the <a href=” “>…</a>
    // tag combinations.
}

// 13) If the user’s operating system does not support the needed character, how can the symbol be represented?
{
    // In cases wherein their operating system does not support a particular character, it is still possible
    //  to display that character by showing it as an image instead.
}

// 14) How do you change the number type in the middle of a list?
{
    // The <li> tag includes two attributes – type and value. The type attribute can be used to change the numbering
    //  type for any list item. The value attribute can change the number index.
}

// 15) What are style sheets?
{
    // Style sheets enable you to build consistent, transportable, and well-defined style templates. These templates
    // can be linked to several different web pages, making it easy to maintain and change the look and feel of all
    // the web pages within site.
}

// 16) How do you create multicolored text in a webpage?
{
    // To create text with different colors, use the <font color=”color”>…</font> tags for every character that you
    // want to apply color. You can use this tag combination as many times as needed, surrounding a single character
    // or an entire word.
}

// 17) What if there is no text between the tags or if a text was omitted by mistake? Will it affect the display of the HTML file?
{
    // If there is no text between the tags, then there is nothing to format. Therefore no formatting will appear.
    // Some tags, especially tags without a closing tag like the <img> tag, do not require any text between them.
}

// 18) How do you create a link that will connect to another web page when clicked?
{
    // To create hyperlinks, or links that connect to another web page, use the href tag. The general format for this is: 
    // <a href=”site”>text</a>
    // Replace “site” with the actual page URL that is supposed to be linked to when the text is clicked.
}

// 19) Can a single text link point to two different web pages?
{
    // No. The <a> tag can accept only a single href attribute, and it can point to only a single web page.
}

// 20) What is a marquee?
{
    // A marquee allows you to put a scrolling text in a web page. To do this, place whatever text you want to appear 
    // scrolling within the <marquee> and </marquee> tags.
}

// 21) How do you create text on a webpage that will allow you to send an email when clicked?
{
    // To change text into a clickable link to send email, use the mailto command within the href tag. 
    // The format is as follows:
    // <A HREF=”mailto:youremailaddress”>text to be clicked</A>
}

// 22) Are <br> tags the only way to separate sections of text?
{
    // No. The <br> tag is only one way to separate lines of text. Other tags, like the <p> tag and 
    // <blockquote> tag, also separate sections of text.
}

// 23) How do you make a picture into a background image of a web page?
{
    // To do this, place a tag code after the </head> tag as follows:
    // <body background = “image.gif”></body>
    // Replace image.gif with the name of your image file. This will take the picture and make it the background 
    // image of your web page.
}

// 24) Tell me two benefits of HTML5 Web Storage
{
    // Two main benefits of HTML5 Web Storage:

    // It can store up to 10 MB data which is certainly more than what cookies have.
    // Web storage data cannot be transferred with the HTTP request. It helps to increase the performance of the application.
}

// 25) What are two types of Web Storage in HTML5?
{
    // Two storage types of HTML5 are:

    // Session Storage:

    // It stores data of current session only. It means that the data stored in session storage 
    // clear automatically when the browser is closed.

    // Local Storage:

    // Local storage is another type of HTML5 Web Storage. In local storage, data is not deleted
    // automatically when the current browser window is closed.
}

// 26) What is the Application Cache in HTML5 and why it is used?
{
    // The Application Cache concept means that a web application is cached. It can be accessible without the need for internet connection.
    
    // Some advantages of Application Cache:

    // Offline browsing – Web users can also use the application when they are offline.
    // Speed – Cached resources load quicker
    // Reduce the server load – The web browser will only download updated resources from the server.
}

// 27) Explain five new input types provided by HTML5 for forms?
{
    // Following are the important, new data types offered by HTML5:

    //     Date: It allows the user to select a date.
    //     datetime-local: This input type allows the user to select a date and time without time zone.
    //     datetime: This input type allows the user to select a date and time with time zone.
    //     month: It enables the user to select a month and year
    //     email: These input fields used to contain an e-mail address.

}

// 28) What are the semantic tags available in html5?
{
    // HTML5 semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.

    // HTML5 offers new semantic elements to define different parts of a web page:

    // <article>
    // <aside>
    // <details>
    // <figcaption>
    // <figure>
    // <footer>
    // <header>
    // <main>
    // <mark>
    // <nav>
    // <section>
    // <summary>
    // <time>
    
    // Syntax:
    // <header></header>
    // <section>
    //     <article>
    //         <figure>
    //             <img>
    //             <figcaption></figcaption>
    //         </figure>
    //     </article>
    // </section>
    // <footer></footer>

}

// 29) Why you would like to use semantic tag?
{
    // Search Engine Optimization, accessibility, repurposing, light code.
    // Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
    // Search engine needs to understand page content to rank and semantic tag helps.
    // Semantic code aids accessibility. Specially, many people whose eyes are not good rely on speech browsers to read pages to them. These programs cannot interpret pages very well unless they are clearly explained.
    // Help Search engines to better understand pages. Search engine need to understand what your content is about when rank you properly on search engines. Semantic code tends to improve your placement on search engines, as it is easier for the "search engine spiders" to understand.
    // It's easier to read and edit, which saves time and money during maintenance.
}

// 30) What does a <DOCTYPE html> do?
{
    // A DOCTYPE is always associated to a DTD ( Document Type Definition ). A DTD defines how documents
    // of a certain type should be structured (i.e. a button can contain a span but not a div), whereas
    // a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD).
    // For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the
    // HTML specifications your document respects.

    // Once a user agent has recognized a correct DOCTYPE, it will trigger the no-quirks mode matching this 
    // DOCTYPE forreading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the quirks mode.
}

// 31) What happens when DOCTYPE is not given?
{
    // The web page is rendered in quirks mode. The web browsers engines use quirks mode to support
    //  older browsers which does not follow the W3C specifications. In quirks mode CSS class and id
    //   names are case insensitive. In standards mode they are case sensitive.
}

// 32) What are the new form elements in HTML5?
{
    // There are five new form elements in the HTML5 forms specification: 
    // <datalist>, <output>, <progress>, and <meter>.

    // 1. Datalist Tag
    // Allows to attach a list of suggestions to a text input element. As soon as the user begins 
    // to type in the text field, the list of suggestions appears and the user can choose from the 
    // suggestions with the mouse.

    // <p>Enter your favorite browser name:</p>
    // <input type="text" list="browsers" name="favorite_browser">
    // <datalist id="browsers">
    //     <option value="Firefox">
    //     <option value="Chrome">    
    //     <option value="Internet Explorer">
    //     <option value="Opera">
    //     <option value="Safari">
    // </datalist>

    // 2. Meter Tag
    // Indicates a numeric value that falls within a range. The tag supports a number of attributes: value: If you don't specify a value, the first numeric value inside the <meter></meter> pair becomes the value.

    // max: The maximum possible value of the item.
    // min: The minimum possible value of the item.
    // high: If the value can be defined as a range, this is the high end of the range.
    // low: If the value can defined as a range, this is the low end of that range.
    // optimum: The optimal value of the element.
    // <p>Disk Usage: <meter value="0.2">20%</meter></p>

    // <p>Total Score: <meter value="6" min="0" max="10">6 out of 10</meter></p>

    // <p>Pollution Level: <meter low="60" high="80" max="100" value="85">Very High</meter></p>

    // 3. Output Tag
    // It indicates a section of the page that can be modified by a script (usually JavaScript).

    // <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    // <input type="range" id="a" value="50"> +
    // <input type="number" id="b" value="100"> =
    // <output name="result" for="a b"></output>
    // </form>

    // 4. Progress Tag
    // Indicates how much of a task has been completed (often marked as a percentage). It is expected to be modified through JavaScript code.

    
    // <p>Progress: <progress id="bar" value="0" max="100"><span>0</span>%</progress></p>

    // <script type="text/javascript">
    //     var i = 0;
    //     var progressBar = document.getElementById("bar");
        
    //     function countNumbers() {
    //     if(i < 100) {
    //         i = i + 1;
    //         progressBar.value = i;
    //         // For browsers that don't support progress tag
    //         progressBar.getElementsByTagName("span")[0].textContent = i;
    //     }

    //     // Wait for sometime before running this script again
    //     setTimeout("countNumbers()", 100);
    //     }
    //     countNumbers();
    // </script>
}

// 33) What is difference between span tag and div tag?
{
    // The primary difference between div and span tag is their default behavior. By default, a <div> is a 
    // block-level-element and a <span> is an inline element.

    // <div> is a block level element which means it will render it on it's own line with a width of a 100% of the parent element.
    // <span> is an inline element which means it will render on the same line as the previous element, if it is also an 
    // inline element, and it's width will be determined by it's content.
}

// 34) What are semantic and non-semantic elements?
{
    // Semantic elements: clearly describes its meaning to both the browser and the developer. For example: 
    // <form>, <table>, <article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, 
    // <mark>, <nav>, <section>, <summary>, <time> clearly defines its content.

    // Non-semantic elements: <div> and <span> tells nothing about its content.
}

// 35) What is the purpose of main element?
{
    // he HTML <main> element represents the dominant content of the <body> of a document. The main content area 
    // consists of content that is directly related to or expands upon the central topic of a document, or the 
    // central functionality of an application.

    // <main role="main">
    //     <p>Geckos are a group of usually small, usually nocturnal lizards. 
    //     They are found on every continent except Australia.</p>
    //     <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
    // </main>
    // Note: A document mustn't have more than one <main> element that doesn't have the hidden attribute specified.
}

// 36) What is the purpose of meta tags?
{
    // The META elements can be used to include name/value pairs describing properties of the HTML document, such as 
    // author, expiry date, a list of keywords, document author etc.

    // <!DOCTYPE html>
    // <html>
    // <head>
    //         <!--Recommended Meta Tags-->
    //         <meta charset="utf-8">
    //         <meta name="language" content="english"> 
    //         <meta http-equiv="content-type" content="text/html">
    //         <meta name="author" content="Author Name">
    //         <meta name="designer" content="Designer Name">
    //         <meta name="publisher" content="Publisher Name">
    //         <meta name="no-email-collection" content="name@email.com">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

    //         <!--Search Engine Optimization Meta Tags-->
    //         <meta name="description" content="Project Description">
    //         <meta name="keywords" content="Software Engineer,Product Manager,Project Manager,Data Scientist">
    //         <meta name="robots" content="index,follow">
    //         <meta name="revisit-after" content="7 days">
    //         <meta name="distribution" content="web">
    //         <meta name="robots" content="noodp">
            
    //         <!--Optional Meta Tags-->
    //         <meta name="distribution" content="web">
    //         <meta name="web_author" content="">
    //         <meta name="rating" content="">
    //         <meta name="subject" content="Personal">
    //         <meta name="title" content=" - Official Website.">
    //         <meta name="copyright" content="Copyright 2020">
    //         <meta name="reply-to" content="">
    //         <meta name="abstract" content="">
    //         <meta name="city" content="Bangalore">
    //         <meta name="country" content="INDIA">
    //         <meta name="distribution" content="">
    //         <meta name="classification" content="">
        
    //         <!--Meta Tags for HTML pages on Mobile-->
    //         <meta name="format-detection" content="telephone=yes"/>
    //         <meta name="HandheldFriendly" content="true"/> 
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    //         <meta name="apple-mobile-web-app-capable" content="yes" />
            
    //         <!--http-equiv Tags-->
    //         <meta http-equiv="Content-Style-Type" content="text/css">
    //         <meta http-equiv="Content-Script-Type" content="text/javascript">
        
    //     <title>HTML5 Meta Tags</title>
    // </head>
    // <body>
    //     ...
    // </body>
    // </html>
}

// 37) What does async and defer refer in script tag? Describe the difference between <script>, <script async> and <script defer>?
{
    // <!-- Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag. -->
    // <script src="myscript.js"></script>


    // <!-- With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time. -->
    // <!-- Google Analytics is usually added like this -->
    // <script async src="https://google-analytics.com/analytics.js"></script>


    // <!-- With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.) -->
    // <script defer src="myscript.js"></script>
}

// 38) Describe the difference between a cookie, sessionStorage and localStorage?
{
    // cookie: A text file saved on the users computer to store and retrieve data

    // sessionStorage: Is memory space in a browser to save temporary data until the window or tab is closed.

    // localStorage: Like cookie, where data can be saved and retrieved after browser sessions, 
    // but stored in memory like sessionStorage. Data is stored as plain key value pairs and can be stored as Json objects.
}

// 39) What is the purpose of the alt attribute on images?
{
    // The alt attribute provides alternative information for an image if a user cannot view it. 
    // The alt attribute should be used to describe any images except those which only serve a decorative purposes,
    // in which case it should be left empty.

    // <img src="pancakes.png" alt="Stack of blueberry pancakes with powdered sugar">  
}

// 40) What are data- attributes good for?
{
    // The HTML5 data attribute lets you assign custom data to an element. When we want to store more information/data
    // about the element when no suitable HTML5 element or attribute exists
}

// 41) Show different Images depending on Browser Width
{
    // The HTML <picture> element allows you to define different images for different browser window sizes.

    // <picture>
    //     <source srcset="img_small.jpg" media="(max-width: 600px)">
    //     <source srcset="img_large.jpg" media="(max-width: 1500px)">
    //     <source srcset="img.jpg">
    //     <img src="img_small.jpg" alt="Image">
    // </picture>
}

// 42) What is an iframe and how it works?
{
    // The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one.
    // Each embedded browsing context has its own session history and document. The browsing context that embeds the 
    // others is called the parent browsing context. The topmost browsing context — the one with no parent — is usually
    // the browser window, represented by the Window object.

    // <iframe id="inlineFrameId"
    //   title="Inline iFrame Example"
    //   width="300"
    //   height="200"
    //   src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
    //     Sorry your browser does not support inline frames.
    // </iframe>
}


// 43) How do you change the direction of html text?
{
    // The default text direction in HTML is left-to-right. However, when developing web content and applications, 
    // we may need to set it to right-to-left, for instance, to cater for languages such as Arabic, Hebrew, Pashto, Persian, Urdu, and Sindhi.

    // We can set text direction in HTML in one of two ways:

    // With the HTML dir attribute
    // With the CSS direction property
    // Example

    // <!-- Syntax -->
    // <element dir="ltr|rtl|auto">

    // <!-- Example -->
    // <textarea dir="rtl"></textarea>
}

// 44) What is the difference between <section> and <div>?
{
    // The <section> tag creates independent sections within a webpage having logically connected content. 
    // And the <div> tag is an empty container specifying a division or a section.

    // The <section> Element

    // According to the W3C specification, the <section> tag means that the content inside this element is grouped. 
    // In other words, the content relates to a single theme. It must be an entry in the outline of the page.
}

