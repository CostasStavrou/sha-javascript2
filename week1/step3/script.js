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

var buttonClicked = function(e) {
  if (e.target.className === "dark") {
    e.target.className = "light";
    body.className = "light-theme";
    e.target.innerHTML = "Dark theme";
  } else {
    e.target.className = "dark";
    body.className = "dark-theme";
    e.target.innerHTML = "Light theme";
  }
}

body.onload = function() {
  var button = document.getElementById("button");
  button.addEventListener("click", buttonClicked)
}
