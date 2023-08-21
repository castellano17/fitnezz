import React from "react";

const SvgLogo = ({ color, width, height }) => {
  const colors = {
    white: "#fff",
    red: "#F4623A",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 358.000000 190.000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(0.000000,190.000000) scale(0.100000,-0.100000)"
        fill={colors[color]}
        stroke="none"
      >
        <path
          d="M1616 1784 c-134 -29 -237 -102 -252 -179 -8 -47 -2 -95 26 -186 l23
-75 -26 -40 c-14 -21 -33 -56 -42 -76 l-15 -38 49 0 c47 0 50 2 74 43 35 59
108 124 175 155 48 23 71 27 147 27 78 0 99 -4 152 -29 65 -30 146 -105 177
-164 15 -30 20 -32 66 -32 l50 0 -15 38 c-9 20 -28 55 -42 76 l-26 39 27 88
c29 98 33 154 12 202 -54 127 -327 201 -560 151z m285 -124 c71 -14 141 -49
155 -79 9 -18 8 -36 -4 -80 -8 -31 -16 -57 -17 -59 -1 -1 -33 12 -71 30 -66
32 -74 33 -189 33 -114 0 -123 -2 -188 -32 l-68 -32 -10 27 c-18 44 -22 98
-10 120 13 24 83 60 142 71 63 12 197 13 260 1z"
        />
        <path
          d="M1006 1399 c-15 -13 -36 -49 -47 -79 -17 -49 -19 -51 -15 -17 5 36 4
37 -29 37 -35 0 -69 -26 -81 -62 -3 -12 -15 -18 -34 -18 -33 0 -54 -25 -65
-77 -4 -18 -12 -33 -20 -33 -29 0 -33 -82 -5 -110 11 -11 22 -32 26 -47 15
-66 68 -101 76 -50 3 18 6 15 17 -18 21 -62 48 -87 93 -83 34 2 41 -2 63 -35
l26 -37 73 0 c62 0 75 3 93 23 38 41 83 215 53 205 -8 -2 -19 -32 -26 -65 -35
-173 -95 -179 -130 -12 -12 55 -15 108 -11 209 5 142 22 213 57 245 17 16 20
15 39 -4 24 -24 40 -76 48 -153 5 -48 3 -58 -9 -58 -9 0 -23 12 -33 26 -16 24
-18 25 -33 10 -20 -20 -29 -147 -13 -188 12 -33 41 -37 48 -8 5 19 14 20 198
20 l192 0 6 -40 c6 -50 18 -64 85 -107 50 -32 52 -36 52 -77 0 -24 -3 -58 -6
-75 -6 -26 -10 -30 -28 -25 -96 28 -200 125 -235 219 -12 31 -21 62 -21 70 0
11 -13 15 -50 15 -50 0 -50 0 -44 -27 46 -211 190 -353 390 -383 196 -30 396
73 482 250 32 66 54 144 44 155 -3 3 -25 5 -49 5 -31 0 -43 -4 -43 -15 0 -8
-9 -39 -21 -70 -36 -96 -146 -197 -241 -220 -24 -6 -28 -3 -37 27 l-9 33 -1
-37 c-1 -34 -4 -38 -26 -38 -18 0 -29 -8 -38 -27 -11 -25 -12 -16 -15 76 -2
86 0 107 14 122 16 18 14 20 -32 39 -137 59 -150 76 -140 179 6 72 24 95 63
88 12 -2 20 -1 18 4 -7 10 32 22 45 14 5 -3 10 -1 10 4 0 6 -7 11 -15 11 -8 0
-15 5 -15 10 0 17 31 24 50 12 10 -6 27 -8 39 -5 11 3 29 2 38 -2 10 -4 30 -7
44 -6 47 4 56 -28 33 -111 -8 -26 -45 -23 -52 5 -6 20 -7 20 -12 -8 -5 -29 -7
-30 -59 -30 -51 0 -55 2 -64 29 -6 18 -6 31 0 35 5 3 13 15 16 26 5 14 1 12
-14 -7 -11 -16 -27 -28 -35 -28 -10 0 -14 -9 -12 -29 1 -16 -4 -36 -11 -45
-12 -14 -12 -16 3 -10 9 3 26 0 39 -9 13 -8 35 -12 54 -10 18 3 45 -2 63 -11
26 -12 30 -13 20 -1 -10 11 -7 15 13 20 13 4 41 5 63 3 36 -3 39 -5 42 -37 5
-51 -5 -79 -36 -95 -25 -14 -26 -15 -4 -16 19 0 22 -5 22 -38 0 -21 6 -47 14
-57 12 -17 14 -11 21 56 3 41 6 100 6 132 l-1 57 199 0 c190 0 199 -1 204 -20
7 -29 36 -25 48 8 16 41 7 168 -13 188 -15 15 -17 14 -33 -10 -10 -14 -24 -26
-33 -26 -12 0 -14 11 -9 64 11 115 55 187 90 148 34 -37 49 -105 54 -242 7
-191 -25 -330 -75 -330 -26 0 -50 48 -64 129 -8 49 -16 71 -26 71 -29 0 12
-165 51 -207 18 -20 31 -23 94 -23 72 0 73 0 95 35 20 30 28 35 64 35 48 0 74
24 95 85 11 33 14 36 17 18 8 -51 61 -16 76 50 4 15 15 36 26 47 29 29 25 110
-5 110 -7 0 -16 15 -20 33 -11 52 -32 77 -64 77 -22 0 -31 7 -41 30 -15 36
-37 50 -79 50 -29 0 -30 -1 -25 -37 4 -34 2 -32 -16 17 -11 30 -32 66 -47 79
-23 20 -34 23 -91 19 -53 -3 -67 -8 -83 -29 -26 -34 -49 -103 -56 -171 l-6
-58 -183 0 c-169 0 -183 1 -188 18 -9 27 -42 41 -116 48 -151 14 -203 4 -220
-42 l-10 -24 -173 0 -174 0 -6 58 c-7 68 -30 137 -56 171 -16 21 -30 26 -83
29 -57 4 -68 1 -92 -19z m64 -73 c0 -3 -4 -16 -10 -30 -8 -22 -16 -26 -50 -26
-42 0 -43 1 -34 38 5 18 13 22 50 22 24 0 44 -2 44 -4z m1504 -18 c9 -37 8
-38 -34 -38 -34 0 -42 4 -50 26 -14 35 -15 34 34 34 37 0 45 -4 50 -22z
m-1654 -42 c0 -23 -17 -36 -45 -36 -28 0 -32 3 -28 20 4 15 14 20 39 20 19 0
34 -2 34 -4z m1780 0 c0 -2 3 -11 6 -20 5 -13 -1 -16 -30 -16 -20 0 -36 2 -36
4 0 2 -3 11 -6 20 -5 13 1 16 30 16 20 0 36 -2 36 -4z m-1650 -16 c0 -5 -20
-10 -45 -10 -25 0 -45 5 -45 10 0 6 20 10 45 10 25 0 45 -4 45 -10z m1540 0
c0 -5 -20 -10 -45 -10 -25 0 -45 5 -45 10 0 6 20 10 45 10 25 0 45 -4 45 -10z
m-1790 -45 c0 -9 -9 -15 -25 -15 -24 0 -32 10 -18 23 12 13 43 7 43 -8z m100
5 c0 -5 -13 -10 -30 -10 -16 0 -30 5 -30 10 0 6 14 10 30 10 17 0 30 -4 30
-10z m1810 0 c0 -5 -13 -10 -30 -10 -16 0 -30 5 -30 10 0 6 14 10 30 10 17 0
30 -4 30 -10z m88 -7 c2 -8 -6 -13 -22 -13 -17 0 -26 5 -26 16 0 19 41 16 48
-3z m-1113 -3 c7 -11 -42 -37 -51 -27 -4 3 -4 13 -1 22 7 17 42 21 52 5z
m-902 -27 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m2010 0 c-7
-2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z"
        />
        <path d="M1770 1169 c0 -13 5 -31 10 -39 7 -11 8 -5 4 20 -8 43 -14 51 -14 19z" />
        <path d="M1852 1155 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
        <path
          d="M800 220 l0 -160 40 0 39 0 3 58 3 57 68 3 c67 3 67 3 67 32 l0 30
-71 0 -70 0 3 38 3 37 88 3 88 3 -3 27 -3 27 -127 3 -128 3 0 -161z"
        />
        <path
          d="M1070 351 c0 -23 5 -30 23 -33 21 -3 22 -7 22 -98 0 -92 -1 -95 -23
-98 -19 -3 -23 -9 -20 -30 3 -27 4 -27 86 -30 l82 -3 0 31 c0 23 -4 30 -20 30
-19 0 -20 7 -20 100 0 93 1 100 20 100 16 0 20 7 20 30 l0 30 -85 0 -85 0 0
-29z"
        />
        <path
          d="M1260 350 c0 -29 2 -30 45 -30 l45 0 0 -130 0 -130 45 0 45 0 0 130
0 130 45 0 c43 0 45 1 45 30 l0 30 -135 0 -135 0 0 -30z"
        />
        <path
          d="M1562 223 l3 -158 43 -3 42 -3 0 93 0 93 53 -92 52 -93 43 0 42 0 0
160 0 160 -40 0 -39 0 -3 -91 -3 -91 -50 89 -51 88 -47 3 -48 3 3 -158z"
        />
        <path
          d="M1900 220 l0 -160 125 0 125 0 0 30 0 30 -85 0 -85 0 0 35 0 35 70 0
70 0 0 30 0 30 -70 0 -70 0 0 35 0 35 85 0 85 0 0 30 0 30 -125 0 -125 0 0
-160z"
        />
        <path
          d="M2206 359 c-23 -18 -26 -28 -26 -78 0 -79 18 -94 116 -99 l74 -4 0
-29 0 -29 -95 0 -95 0 0 -30 0 -30 118 0 c144 0 155 7 155 96 0 76 -14 88
-111 94 -72 5 -77 7 -80 29 -5 33 12 41 96 41 l72 0 0 30 0 30 -99 0 c-84 0
-102 -3 -125 -21z"
        />
        <path
          d="M2523 370 c-32 -13 -50 -79 -34 -129 14 -47 44 -61 133 -61 59 0 59
0 56 -27 l-3 -28 -93 0 -92 0 0 -32 0 -33 119 0 c113 0 121 1 135 22 10 14 16
44 16 75 0 76 -20 93 -109 93 -78 0 -100 14 -81 49 9 19 20 21 90 21 l80 0 0
30 0 30 -97 -1 c-54 0 -108 -4 -120 -9z"
        />
      </g>
    </svg>
  );
};

export default SvgLogo;
