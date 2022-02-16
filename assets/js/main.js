// window.onload = function () {
//   //   // Manually specifying individual notes with manual labels.
//   //   Raphael.chord("div1", [-1, 2, 4, 4, 4, 2], "B maj");
//   //   Raphael.chord("div1", [-1, 0, 2, 2, 2, 0], "A maj");
//   //   Raphael.chord("div1", [3, 2, 0, 0, 0, 3], "G maj");
//   //   Raphael.chord("div1", [1, 3, 3, 2, 1, 1], "F maj");
//   //   Raphael.chord("div1", [0, 2, 2, 1, 0, 0], "E maj");
//   //   Raphael.chord("div1", [-1, -1, 0, 2, 3, 2], "D maj");
//   //   Raphael.chord("div1", [-1, 3, 2, 0, 1, 0], "C maj");

//   //   // Manually finding chords with manual labels.
//   //   Raphael.chord("div2", Raphael.chord.find("A#", "maj"), "A# maj"); // A# == Bb
//   //   Raphael.chord("div2", Raphael.chord.find("Bb", "maj"), "Bb maj"); // Bb == A#
//   //   Raphael.chord("div2", Raphael.chord.find("G#", "maj"), "G# maj"); // G# == Ab
//   //   Raphael.chord("div2", Raphael.chord.find("Ab", "maj"), "Ab maj"); // Ab == G#
//   //   Raphael.chord("div2", Raphael.chord.find("F#", "maj"), "F# maj");
//   //   Raphael.chord("div2", Raphael.chord.find("D#", "maj"), "D# maj");
//   //   Raphael.chord("div2", Raphael.chord.find("C#", "maj"), "C# maj");

//   //   // Manually finding chords by variation with manual labels.
//   //   Raphael.chord("div3", Raphael.chord.find("C#", "maj", 5), "C# maj"); // 5th variant
//   //   Raphael.chord("div3", Raphael.chord.find("C#", "maj", 4), "C# maj"); // 4th variant
//   //   Raphael.chord("div3", Raphael.chord.find("C#", "maj", 3), "C# maj"); // 3rd variant
//   //   Raphael.chord("div3", Raphael.chord.find("C#", "maj", 2), "C# maj"); // 2nd variant
//   //   Raphael.chord("div3", Raphael.chord.find("C#", "maj", 1), "C# maj"); // 1st variant

//   //   // Automatically finding chords with automatic labels.
//   //   Raphael.chord("div5", "A# min"); // A# == Bb
//   //   Raphael.chord("div5", "Bb min"); // Bb == A#
//   //   Raphael.chord("div5", "G# min"); // G# == Ab
//   //   Raphael.chord("div5", "Ab min"); // Ab == G#
//   //   Raphael.chord("div5", "F# min");
//   //   Raphael.chord("div5", "D# min");
//   //   Raphael.chord("div5", "C# min");
//   //   Raphael.chord("div4", "B min");
//   //   Raphael.chord("div4", "A min");
//   //   Raphael.chord("div4", "G min");
//   //   Raphael.chord("div4", "F min");
//   //   Raphael.chord("div4", "E min");
//   //   Raphael.chord("div4", "D min");
//   //   Raphael.chord("div4", "C min");

//   //   // Automatically finding chords by variation with automatic labels.
//   //   Raphael.chord("div6", "A# min", 7);
//   //   Raphael.chord("div6", "A# min", 6);
//   //   Raphael.chord("div6", "A# min", 5);
//   //   Raphael.chord("div6", "A# min", 4);
//   //   Raphael.chord("div6", "A# min", 3);
//   //   Raphael.chord("div6", "A# min", 2);
//   //   Raphael.chord("div6", "A# min", 1);

//   //   // Examples of the other possible chord types.
//   //   Raphael.chord("div7", "B 11");
//   //   Raphael.chord("div7", "A maj9");
//   //   Raphael.chord("div7", "G 9");
//   //   Raphael.chord("div7", "F maj7");
//   //   Raphael.chord("div7", "E 7");
//   //   Raphael.chord("div7", "D 6");
//   //   Raphael.chord("div7", "C 5");
//   //   Raphael.chord("div8", "A# min9");
//   //   Raphael.chord("div8", "G# min7");
//   //   Raphael.chord("div8", "F# min6");
//   //   Raphael.chord("div8", "D# maj13");
//   //   Raphael.chord("div8", "C# 13");
//   //   Raphael.chord("div9", "B aug");
//   //   Raphael.chord("div9", "A dim");
//   //   Raphael.chord("div9", "G sus4");
//   //   Raphael.chord("div9", "F sus2");
//   //   Raphael.chord("div9", "E min(maj7)");
//   //   Raphael.chord("div9", "D min13");
//   //   Raphael.chord("div9", "C min11");
//   //   Raphael.chord("div10", "D aug9");
//   //   Raphael.chord("div10", "C add9");
//   //   Raphael.chord("div10", "A# 9sus4");
//   //   Raphael.chord("div10", "G# 7b9");
//   //   Raphael.chord("div10", "F# 7b5");
//   //   Raphael.chord("div10", "D# 7sus4");
//   //   Raphael.chord("div10", "C# 6/9");

//   // Examples of changing the size of the chord image.
//   // Raphael.chord("div11", "C maj").element.setSize(550, 500);
//   Raphael.chord("chord", "A").element.setSize(550, 500);
// };
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});
const imageEl = document.getElementById("chord--canvas");

const btn = document.querySelector("[data-chord='A']");

const buttonsContainerEl = document.querySelector(
  ".guitar__buttons--container"
);
// let intViewportWidth = window.innerWidth;
function getChord(chord) {
  Raphael.chord("chord--canvas", chord).element.setSize(550, 500);
}

buttonsContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  imageEl.innerHTML = "";
  let chordSelected = e.target.closest("button").dataset.chord;
  getChord(chordSelected);
});
