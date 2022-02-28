import React, { useEffect } from "react";

const Canvas = ({ show }) => {
  useEffect(() => {
    var text = "";
    var canvas = document.getElementById("box");
    var ctx = canvas.getContext("2d");

    var c = 1.4; //velocity of wave
    var t = 0;
    var epsilon = 0.1;
    var PI = Math.PI;
    var initAmp = 5;

    var width = window.innerWidth;
    var height;

    if (show === "home") {
      height = window.innerHeight;

      if (window.innerHeight < 800) {
        height = 850;
      } else {
        height = window.innerHeight;
      }
    }

    if (show === "contact") {
      height = window.innerHeight - 30;

      if (window.innerHeight < 800) {
        height = 850;
      }

      if (window.innerWidth < 800) {
        height = window.innerHeight;
      }
    }

    if (show === "about") {
      height = 2650;

      if (window.innerWidth < 450) {
        height = 2900;
      }
    }

    if (show === "artist") {
      height = 2500;

      if (window.innerWidth < 751) {
        height = 4000;
      }

      if (window.innerWidth < 500) {
        height = 3000;
      }
    }

    var intervalTime = 20; // ms
    var deltaX = 10;
    var deltaY = 10;
    var deltaT = intervalTime * 0.001;

    //separate number of x
    var N = Math.round(width / deltaX);
    var M = Math.round(height / deltaY); //sepaate number of y

    var sizeX = -1; //width;
    var sizeY = -1; //height;

    var u;
    var du;

    setInterval(function () {
      var innerHTML = "";

      width = window.innerWidth;
      // height = window.innerHeight;

      if (show === "home") {
        height = window.innerHeight;

        if (window.innerHeight < 800) {
          height = 850;
        } else {
          height = window.innerHeight;
        }
      }

      if (show === "contact") {
        height = window.innerHeight - 30;

        if (window.innerHeight < 800) {
          height = 850;
        }

        if (window.innerWidth < 800) {
          height = window.innerHeight;
        }
      }

      if (show === "about") {
        height = 2650;

        if (window.innerWidth < 450) {
          height = 2900;
        }
      }

      if (show === "artist") {
        height = 2500;

        if (window.innerWidth < 751) {
          height = 4000;
        }

        if (window.innerWidth < 500) {
          height = 3000;
        }
      }

      if (sizeX != width || sizeY != height) {
        N = Math.round(width / deltaX);
        M = Math.round(height / deltaY);

        u = new Array(N);
        du = new Array(N);

        sizeX = width;
        sizeY = height;

        for (let i = 0; i < u.length; i++) {
          u[i] = new Array(M);
          du[i] = new Array(M);
          for (let j = 0; j < u[i].length; j++) {
            let x = (i / N) * sizeX; // set center of screen to the origin
            let y = (j / M) * sizeY;
            let flct = Math.random() - 1 / 2;
            let r =
              euclidDist(x, y, (1 / 2) * sizeX, (1 / 2) * sizeY) + 20 * flct;
            u[i][j] = -initAmp * f2(r / 50);
            du[i][j] = 0;
          }
        }
      }

      sizeX = width;
      sizeY = height;

      t = t + deltaT;

      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);

      for (var i = 1; i < u.length - 1; i++) {
        for (var j = 1; j < u[i].length - 1; j++) {
          var ddu =
            c ** 2 *
            (secondOrderDiff(u[i - 1][j], u[i][j], u[i + 1][j], epsilon) +
              secondOrderDiff(u[i][j - 1], u[i][j], u[i][j + 1], epsilon));

          du[i][j] = du[i][j] + ddu * deltaT;
        }
      }

      for (var i = 1; i < u.length - 1; i++) {
        for (var j = 1; j < u[i].length - 1; j++) {
          let x = (sizeX / N) * i + width / 2 - sizeX / 2;
          let y = (sizeY / M) * j + height / 2 - sizeY / 2;

          u[i][j] = u[i][j] + du[i][j] * deltaT;

          let color = 70 * u[i][j];
          ctx.fillStyle = "hsl(177,100%," + color + "%)";
          ctx.fillRect(x, y, 5, 5);
        }
      }

      var text = "";
      //document.getElementById("monitor").innerHTML = ;
    }, intervalTime);

    function innerProd(ax, ay, bx, by) {
      var r = ax * bx + ay * by;
      return r;
    }

    function secondOrderDiff(a, b, c, epsilon) {
      var dab = (b - a) / epsilon;
      var dbc = (c - b) / epsilon;
      var r = (dbc - dab) / epsilon;
      return r;
    }

    function euclidDist(ax, ay, bx, by) {
      var r = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
      return r;
    }

    function bump(r) {
      //bump function
      if (Math.abs(r) >= 1.0) return 0.0;
      var s = Math.exp(-(1 / (1 - r ** 2))) / Math.exp(-1);
      return s;
    }

    function f2(x) {
      if (x == 0.0) return 1.0;
      var r = Math.sin(x) / x;
      return r;
    }
  }, []);

  return (
    <>
      <canvas id="box"></canvas>
      <div id="monitor"></div>
    </>
  );
};

export default Canvas;
