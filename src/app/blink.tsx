// @ts-nocheck
import React, { useEffect } from "react";

const Blink = () => {
  useEffect(() => {
    let handle; // Define handle at the top scope of the useEffect

    function startBlink() {
      // Assign the interval ID to handle
      handle = setInterval(() => {
        const blink = document.querySelector(".blink");
        // @ts-ignore
        blink.style.visibility =
          blink.style.visibility === "hidden" ? "visible" : "hidden";
      }, 500);
      return handle;
    }

    function stopBlink() {
      const blink = document.querySelector(".blink");
      blink.style.visibility = "visible";
      clearInterval(handle);
    }

    const options = ["secure", "modular", "scalable", "decentralized"];

    async function replaceTyper() {
      const typer = document.getElementById("typer");
      const current = typer.innerText;
      const next = options[(options.indexOf(current) + 1) % options.length];
      const CHAR_DELAY = 40;
      const WORD_DELAY = 2300;

      stopBlink();

      while (typer.innerText.length > 0) {
        typer.innerText = typer.innerText.slice(0, -1);
        await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
      }

      for (let i = 0; i < next.length; i++) {
        typer.innerText += next[i];
        await new Promise((resolve) => setTimeout(resolve, CHAR_DELAY));
      }

      startBlink();

      await new Promise((resolve) => setTimeout(resolve, WORD_DELAY));
      replaceTyper();
    }

    startBlink();
    setTimeout(() => replaceTyper(), 4000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(handle);
  }, []);
};

export default Blink;
