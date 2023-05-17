"use strict";

// selecting elements for maniputate them
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

// defining functions for events
const openModal = function () {
  console.log("BUTTTON CLICKED");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// adding events to button

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
