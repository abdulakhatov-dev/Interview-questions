// 1) What is CSS?
{
    // CSS stands for Cascading Style Sheets. CSS is used to define styles for web pages, including the design, 
    // layout and variations in display for different devices and screen sizes. CSS was intended to allow web 
    // professionals to separate the content and structure of a website's code from the visual design.

    // CSS can be used for document text styling — for example changing the color and size of headings and links. 
    // It can be used to create layout — for example turning a single column of text into a layout with a main 
    // content area and a sidebar for related information. It can even be used for effects such as animation.
}

// 2) What is the use of css ruleset?
{
    // CSS is a rule or set of rules that describe the formatting (change of appearance) of individual elements 
    // on a web page. The rule consists of two parts: the selector and the next declaration block. The image 
    // below shows the structure (syntax) of the rule:

    // div {
    // color: blue;
    // text-align: justify;
    // }
}

// 3) What are the possible ways to apply CSS styles to a web page?
{
    // 1. Inline CSS
    {
        // Inline CSS is specified directly in the opening tag of the element you want it to apply to. It is entered into the style attribute within HTML. This allows CSS properties on a "per tag" basis.

        // Example

        // <p style="font-weight:bold;">Bold Font</p>
        // This CSS type is not really recommended, as each HTML tag needs to be styled individually. However, inline CSS in HTML can be useful in some situations. For example, in cases where you don't have access to CSS files or need to apply styles for a single element only.
    }
    // 2. Internal CSS
    {
        // Internal or Embedded, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.

        // Example

        // <!DOCTYPE html>
        // <html>
        // <head>
        //     <title>Internal CSS Example</title>
        // <style>
        //     p {
        //         color: red;
        //     }
            
        //     a {
        //         color: blue;
        //     }
        // </style>
        // ...
        // This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.
    }
    // 3. External CSS 
    {
        // In external CSS rules are stored in a separate file. To refer to that file from the HTML page, add the link element (and its closing element within XHTML) to the head element. This CSS type is a more efficient method, especially for styling a large website. By editing one .css file, you can change your entire site at once.

        // style.css

        // p {
        //     color: red;
        // }
        
        // a {
        //     color: blue;
        // }
        // <!DOCTYPE html>
        // <html>
        // <head>
        //     <title>External CSS Example</title>
        //     <link rel="stylesheet" type="text/css" href="style.css">
        // ...
        // The link element in the example has three attributes. The first, rel, tells the browser the type of the target of the link. The second, type, tells the browser what type of stylesheet it is. And the third, href, tells the browser under which URL to find the stylesheet.
    }
}

// 4) CSS3 Colors
{
    // The color keyword list has been extended in the CSS3 color module to include 147 additional keyword
    // colors (that are generally well supported), CSS3 also provides us with a number of other options: 
    // HSL, HSLA, RGBA and Opacity.

    // div.halfopaque {
    //     background-color: rgb(0, 0, 0);
    //     opacity: 0.5;
    //     color: #000000;
    // }
    // div.halfalpha {
    //     background-color: rgba(0, 0, 0, 0.5);
    //     color: #000000;
    // }
}

// 5) CSS3 Selectors
{
    // Matches any element E whose attribute attr starts with the value val. In other words, the val matches the beginning of the attribute value.
    // E[attr^=val]
    // /* Example */
    // a[href^='http://sales.']{color: teal;}
    // Matches any element E whose attribute attr ends in val. In other words, the val matches the end of the attribute value.
    // E[attr$=val]
    // /* Example */
    // a[href$='.jsp']{color: purple;}
    // Matches any element E whose attribute attr matches val anywhere within the attribute. It is similar to E[attr~=val], except the val can be part of a word.
    // E[attr*=val]  
    // /* Example */
    // img[src*='artwork']{
    //         border-color: #C3B087 #FFF #FFF #C3B087;
    // }
}

// 6) Pseudo-classes
{
    // CSS2 supports user interaction pseudo-classes, namely :link, :visited, :hover, :active, and :focus.
    // A few more pseudo-class selectors were added in CSS3. One is the :root selector, which allows designers 
    // to point to the root element of a document.
}

// 7) Text Shadow and Box Shadow
{
    // text-shadow: topOffset leftOffset blurRadius color;
    // box-shadow: 2px 5px 0 0 rgba(72,72,72,1);
}

// 8) Linear Gradients
{
    // Syntax: background: linear-gradient(direction, color-stop1, color-stop2, ...);
    // #grad {
    // background: linear-gradient(to right, red , yellow);
    // }
}

// 9) Radial Gradients
{
    // Syntax : background: radial-gradient(shape size at position, start-color, ..., last-color);
    // /* Example */      
    // #grad {
    // background: radial-gradient(red, yellow, green);
    // }//Default       
    // #grad {
    // background: radial-gradient(circle, red, yellow, green);
    // }//Circle
}

// 10) Multiple Background Images
{
    // In CSS3, there's no need to include an element for every background image; it provides us with the 
    // ability to add more than one background image to any element, even to pseudo-elements.

    // background-image:
    // url(firstImage.jpg),
    // url(secondImage.gif),
    // url(thirdImage.png);
}

// 11) What are the css selectors?
{
    // A CSS selector is the part of a CSS rule set that actually selects the content you want to style.

    // i) Universal Selector
    {
        // The universal selector works like a wild card character, selecting all elements on a page. Every HTML page is built on content placed within HTML tags. Each set of tags represents an element on the page.

        // * {
        // color: green;
        // font-size: 20px;
        // line-height: 25px;
        // }
    }
    // ii) Element Type Selector
    {
        // This selector match one or more HTML elements of the same name.

        // ul {
        //     list-style: none;
        //     border: solid 1px #ccc;
        // }
    }
    // iii) ID Selector
    {
        // This selector matches any HTML element that has an ID attribute with the same value as that of the selector.

        // #container {
        //     width: 960px;
        //     margin: 0 auto;
        // }
        // <div id="container"></div>
    }
    // iv) Class Selecto
    {
        // The class selector also matches all elements on the page that have their class attribute set to the same value as the class.
        
        // .box {
        //     padding: 20px;
        //     margin: 10px;
        //     width: 240px;
        //  }
        //  <div class="box"></div>
    }
    // v) Descendant Combinator
    {
        // The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors
        // so you can be more specific in your selection method.
        
        // #container .box {
        //     float: left;
        //     padding-bottom: 15px;
        // }

        // This declaration block will apply to all elements that have a class of box that are inside an element with an 
        // ID of container. It’s worth noting that the .box element doesn’t have to be an immediate child: there could be
        // another element wrapping .box, and the styles would still apply.

    }
    // vi) Child Combinator
    {
        // A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it 
        // only targets immediate child elements.
        
        // #container > .box {
        //     float: left;
        //     padding-bottom: 15px;
        // }

        // The selector will match all elements that have a class of box and that are immediate children of the #container element. 
        // That means, unlike the descendant combinator, there can’t be another element wrapping .box—it has to be a direct child element.
    }
    // vii) General Sibling Combinator
    {
        // A selector that uses a general sibling combinator matches elements based on sibling relationships. 
        // The selected elements are beside each other in the HTML.
        // h2 ~ p {
        //     margin-bottom: 20px;
        // }   
        // In this example, all paragraph elements (<p>) will be styled with the specified rules, but only if they
        // are siblings of <h2> elements. There could be other elements in between the <h2> and <p>, and the styles would still apply.
    }
    // viii) Adjacent Sibling Combinator
    {
        // A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as
        // the general sibling selector. The difference is that the targeted element must be an immediate sibling, 
        // not just a general sibling.

        // p + p {
        //     text-indent: 1.5em;
        //     margin-bottom: 0;
        // }

        // In this example will apply the specified styles only to paragraph elements that immediately follow other paragraph
        // elements. This means the first paragraph element on a page would not receive these styles. Also, if another element 
        // appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied.         
    }
    // ix) Attribute Selector
    {
        // The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets\

        // input[type="text"] {
        //     background-color: #444;
        //     width: 200px;
        // }
        // <input type="text">

        // The attribute selector can also be declared using just the attribute itself, with no value, like this:

        // input[type] {
        // background-color: #444;
        // width: 200px;
        // }
    }
    // x) Pseudo-class
    {
        // A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, 
        // the state of being hovered, or the state of being activated.

        // a:hover {
        //     color: red;
        // }
    }
    // xi) Pseudo-element
    {
        // A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to:

        // Style the first letter, or line, of an element
        // Insert content before, or after, the content of an element
    }
    
}

// 12) What is contextual selector?
{
    // Contextual selector addresses specific occurrence of an element. It is a string of individual selectors separated by 
    // white space (search pattern), where only the last element in the pattern is addressed providing it matches the specified contex.

    // It also check the context of the class in the html tree, assigning the style to the element through a specific route, 
    // taking into account the order of depth in the tree.

    // Example:

    // table p { property: value; } 
}

// 13) What is the difference between Pseudo-classes and pseudo-elements?
{
    // A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example :hover. A pseudo-element however allows us to create items that do not normally exist in the document tree, for example ::after.

    // Pseudo-classes:

    // Pseudo-classes select regular elements but under certain conditions, like when their position relative to siblings or when they're under a particular state. Here is a list of pseudo-classes in CSS3:

    // a) Dynamic pseudo-classes:

    // :link
    // :visited
    // :hover
    // :active
    // :focus
    // b) UI element states pseudo-classes:

    // :enabled
    // :disabled
    // :checked
    // c) Structural pseudo-classes:

    // :first-child
    // :nth-child(n)
    // :nth-last-child(n)
    // :nth-of-type(n)
    // :nth-last-of-type(n)
    // :last-child
    // :first-of-type
    // :last-of-type
    // :only-child
    // :only-of-type
    // :root
    // :empty
    // d) Other pseudo-classes:

    // :not(x) :target :lang(language)

    // Pseudo-elements:

    // Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element.

    // ::before
    // ::after
    // ::first-letter
    // ::first-line
    // ::selection

}

// 14) What is Combinator selector?
{
    // A combinator is the character in a selector that connects two selectors together. There are four types of combinators.

    // a) Descendant Combinator (space): The descendant selector matches all elements that are descendants of a specified element.

    // The following example selects all <p> elements inside <div> elements:

    // div p {
    // background-color: yellow;
    // }
    // b) Child Combinator (>): The child selector selects all elements that are the children of a specified element.

    // The following example selects all <p> elements that are children of a <div> element:

    // div > p {
    // background-color: yellow;
    // }
    // c) Adjacent Sibling Combinator (+): The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

    // The following example selects all <p> elements that are placed immediately after <div> elements:

    // div + p {
    // background-color: yellow;
    // }
    // d) General Sibling Combinator (~): The general sibling selector selects all elements that are siblings of a specified element.

    // The following example selects all <p> elements that are siblings of <div> elements:

    // div ~ p {
    // background-color: yellow;
    // }
}

// 15) What is the difference between the “nth-child()” and “nth-of-type()” selectors?
{
    // The nth-child() pseudo-class is used to match an element based on a number, which represents the element's position amongst it's siblings. More specifically, the number represents the number of siblings that exist before the element in the document tree (minus 1).

    // Example:

    // .example :nth-child(4) { background: #ffdb3a; }
    // <div class="example">
    // <p>This is a <em>paragraph</em>.</p>
    // <p>This is a <em>paragraph</em>.</p>
    // <p>This is a <em>paragraph</em>.</p>
    // <div>This is a <em>divider</em>.</div> <!-- Element to select -->
    // <div>This is a <em>divider</em>.</div> 
    // </div>
    // The nth-of-type() pseudo-class, like nth-child(), is used to match an element based on a number. This number, however, represents the element's position within only those of its siblings that are of the same element type.

    // This number can also be expressed as a function, or using the keywords even or odd.

    // .example p:nth-of-type(odd) { background: #ffdb3a; }
    // <div class="example">
    // <p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
    // <p>This is a <em>paragraph</em>.</p>
    // <p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
    // <div>This is a <em>divider</em>.</div>
    // <div>This is a <em>divider</em>.</div> <!-- Element to select -->
    // </div>
}

// 16) What is CSS BEM?
{
    // The BEM (Block Element Modifier) methodology is a naming convention for CSS classes in order to keep CSS more 
    // maintainable by defining namespaces to solve scoping issues. A Block is a standalone component that is reusable
    // across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a 
    // Block or Element is in a certain state or is different in structure or style.
}
// https://github.com/learning-zone/css-interview-questions