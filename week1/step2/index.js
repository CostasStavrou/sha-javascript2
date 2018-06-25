/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

var body = document.getElementsByTagName("body")[0];

function createAndAddElement(parent, element, inner) {
  var tempEl = document.createElement(element);
  if (inner !== undefined) tempEl.innerHTML = inner;
  parent.appendChild(tempEl);
}

body.onload = function() {
  createAndAddElement(body, "h1", "Main section");
  createAndAddElement(body, "p", "This is the first paragraph...");
  createAndAddElement(body, "p", "and a second one");
  createAndAddElement(body, "ul");
  var ulElement = document.getElementsByTagName("ul")[0];
  createAndAddElement(ulElement, "li", "First list item");
  createAndAddElement(ulElement, "li", "Second list item");
  createAndAddElement(ulElement, "li", "Third list item");
  createAndAddElement(ulElement, "li", "Fourth list item");
  createAndAddElement(ulElement, "li", "Fifth list item");
}
