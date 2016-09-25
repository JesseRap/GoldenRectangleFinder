# GoldenRectangleFinder
Golden Rectangle Chrome Extension

This is a Google Chrome extension which searches the DOM tree for <code><<span>div</span>></code> and <code><<span>img</span>></code> elements whose dimensions correspond roughly to the golden rectangle (width / height ~= 1.62).

It visually highlights these elements (adds box-shadow CSS), and adds a mouse-enter event listener which overlays an image of a Fibonacci spiral on top of the golden-rectangular element.

Known bugs:
<ul>
<li> Sometimes produces unwanted side effects, occasionally interfering with the site's UI.
<li> Sometimes the CSS highlighting works, but the image mouse-enter overlay does not appear.
</ul>
