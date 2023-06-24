import './Menu_categorias.css';

export const Menu_categorias = () => {

    const mouseDentro = (id: string) => {

        const element = document.getElementById(id)
    
        if(element) {
            element.setAttribute('fill', '#ffff');
        }
    }

    const mouseFora = (id: string) => {

        const element = document.getElementById(id)
    
        if(element) {
            element.setAttribute('fill', '#221E2F');
        }

    }

    return (

        <>

            <div className="container-fluid div-lista-menu-personalizada">
                <ul className="list-inline lista-icones-categorias-personalizada">
                    <li className="list-inline-item mx-4 lista-item-personalizado" onMouseEnter={() => mouseDentro('categoria1')} onMouseLeave={() => mouseFora('categoria1')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g id="categoria1" fill="#221E2F" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M1337 5109 c-130 -31 -231 -140 -257 -278 -14 -74 -14 -4468 0 -4542
                                22 -115 94 -208 198 -257 l57 -27 1225 0 1225 0 57 27 c103 48 176 144 198
                                257 14 74 14 4468 0 4542 -22 113 -95 209 -198 257 l-57 27 -1205 2 c-683 0
                                -1221 -3 -1243 -8z m1617 -255 c19 -18 19 -20 6 -45 -10 -18 -25 -19 -400 -19
                                -379 0 -390 1 -400 20 -8 14 -8 26 0 40 10 19 21 20 395 20 335 0 386 -2 399
                                -16z m856 -2249 l0 -1965 -1250 0 -1250 0 0 1965 0 1965 1250 0 1250 0 0
                                -1965z m-1200 -2095 c41 -11 94 -61 109 -103 48 -127 -70 -262 -199 -227 -103
                                28 -162 149 -116 238 42 80 122 116 206 92z"/>
                                <path d="M2370 3315 c-241 -38 -476 -149 -650 -304 l-55 -49 64 -66 64 -65 50
                                44 c393 354 1010 359 1420 12 l64 -55 64 65 64 64 -40 36 c-291 259 -676 376
                                -1045 318z"/>
                                <path d="M2397 3000 c-142 -25 -302 -96 -414 -183 -103 -80 -102 -73 -29 -146
                                l64 -64 52 45 c66 58 186 121 280 148 244 69 521 9 707 -154 l44 -39 64 63
                                c74 74 75 67 -28 147 -83 64 -208 128 -312 158 -75 23 -114 28 -235 31 -80 1
                                -167 -1 -193 -6z"/>
                                <path d="M2485 2683 c-122 -19 -245 -73 -323 -140 l-43 -38 65 -64 64 -64 39
                                30 c82 65 165 93 273 93 108 0 191 -28 273 -93 l39 -30 64 64 65 64 -43 38
                                c-57 49 -158 101 -235 121 -66 17 -189 27 -238 19z"/>
                            </g>
                        </svg>
                    </li>
                    <li className="list-inline-item mx-4 lista-item-personalizado" onMouseEnter={() => mouseDentro('categoria2')} onMouseLeave={() => mouseFora('categoria2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g fill="#221E2F" id="categoria2" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                            <path d="M1233 5099 c-74 -23 -134 -67 -185 -134 -64 -84 -70 -114 -79 -365
                            -5 -124 -11 -257 -15 -297 -5 -59 -2 -80 15 -119 12 -25 21 -48 21 -50 0 -2
                            -55 -4 -123 -4 -184 0 -274 -29 -369 -118 -73 -68 -115 -149 -133 -254 l-6
                            -38 -54 0 c-60 0 -85 -16 -85 -55 0 -13 11 -31 24 -42 14 -10 44 -61 67 -113
                            l42 -95 83 -695 c46 -382 86 -708 90 -725 9 -44 49 -119 84 -158 l30 -35 -35
                            -26 c-19 -15 -46 -46 -59 -69 -30 -51 -276 -1023 -276 -1089 0 -89 70 -187
                            163 -228 l47 -21 0 -162 c0 -131 3 -167 16 -185 15 -22 19 -22 238 -22 176 0
                            226 3 242 14 17 13 19 30 22 185 l3 171 284 0 c282 0 284 0 299 22 21 30 20
                            44 -4 68 -20 20 -33 20 -558 20 -518 0 -538 1 -570 20 -42 26 -72 76 -72 120
                            0 19 56 257 124 528 131 522 132 523 198 558 22 11 102 14 423 14 382 0 396 1
                            415 20 25 25 26 52 2 73 -17 15 -57 17 -364 17 -373 0 -393 2 -462 55 -18 14
                            -44 46 -59 72 -23 43 -30 85 -66 387 -23 186 -41 344 -41 352 0 12 106 14 680
                            14 l680 0 0 -29 c0 -24 -8 -34 -46 -56 -32 -19 -52 -39 -65 -68 -18 -40 -19
                            -84 -19 -1067 l0 -1025 23 -40 c14 -26 37 -48 67 -62 40 -21 58 -23 197 -23
                            l153 0 0 -160 c0 -147 1 -160 19 -170 12 -6 96 -10 205 -10 241 0 226 -13 226
                            190 l0 150 675 0 675 0 0 -154 c0 -127 3 -157 16 -170 13 -13 46 -16 205 -16
                            245 0 229 -13 229 190 l0 150 148 0 c133 0 152 2 192 22 25 13 55 38 68 57
                            l22 34 -2 1048 c-3 1040 -3 1048 -24 1076 -11 15 -40 38 -64 51 l-44 22 -1373
                            0 -1373 0 0 24 c0 13 13 136 30 272 16 137 30 257 30 267 0 15 11 17 103 17
                            78 0 112 -5 143 -19 49 -22 84 -74 84 -125 0 -56 15 -76 55 -76 46 0 59 26 52
                            98 -11 104 -96 199 -197 221 -28 6 -89 11 -135 11 -98 0 -91 -11 -75 121 18
                            143 19 149 38 149 28 0 62 29 62 54 0 33 -31 56 -73 56 -34 0 -36 2 -42 38
                            -32 188 -164 328 -345 362 -29 5 -113 10 -186 10 l-133 0 21 36 c13 23 22 59
                            26 103 5 80 -20 149 -74 202 -34 33 -34 34 -34 121 l0 88 349 0 349 0 11 -29
                            c16 -38 68 -86 110 -100 22 -7 141 -11 348 -11 260 0 320 3 350 15 48 20 71
                            41 94 88 l19 37 375 0 375 0 0 -673 c0 -640 1 -675 18 -690 24 -22 55 -21 75
                            1 16 17 17 82 17 725 0 694 0 707 -20 727 -19 19 -33 20 -430 20 l-410 0 0
                            110 0 110 413 -1 c289 0 422 -4 444 -12 60 -22 117 -72 148 -128 l30 -54 5
                            -908 c5 -885 6 -909 24 -923 27 -19 42 -18 66 6 20 20 20 33 20 903 0 971 1
                            952 -61 1049 -35 54 -93 109 -141 134 -86 44 -67 44 -1393 43 -1224 0 -1262
                            -1 -1322 -20z m837 -199 l0 -110 -385 0 c-462 0 -425 12 -425 -138 l0 -98 -52
                            -1 c-29 0 -70 -7 -90 -16 l-38 -16 0 138 c0 134 1 140 31 199 33 66 84 114
                            146 137 30 11 119 14 426 14 l387 1 0 -110z m820 -50 c0 -147 -2 -162 -20
                            -180 -19 -19 -33 -20 -334 -20 -294 0 -315 1 -337 19 -23 19 -24 25 -27 180
                            l-3 161 360 0 361 0 0 -160z m-1583 -436 c48 -37 66 -77 61 -139 -15 -178
                            -262 -198 -308 -24 -20 75 31 165 106 189 43 14 104 2 141 -26z m505 -427 c91
                            -45 155 -130 172 -229 l7 -38 -761 0 c-622 0 -760 2 -760 13 0 33 32 117 59
                            154 39 54 91 93 154 115 48 16 93 18 562 15 l510 -2 57 -28z m205 -404 c-2
                            -16 -24 -193 -48 -395 l-43 -368 -698 0 c-643 0 -698 1 -698 17 0 9 -16 149
                            -35 312 -34 278 -38 299 -70 372 -19 42 -35 79 -35 83 0 3 367 6 816 6 l816 0
                            -5 -27z m1993 -2088 l0 -1045 -1042 0 c-955 0 -1043 1 -1060 17 -17 15 -18 60
                            -18 1026 0 926 1 1012 17 1029 15 17 61 18 1060 18 l1043 0 0 -1045z m761
                            1035 c19 -10 19 -33 19 -1035 0 -1002 0 -1025 -19 -1035 -13 -6 -137 -10 -335
                            -10 l-316 0 0 1045 0 1045 316 0 c198 0 322 -4 335 -10z m-3881 -2290 l0 -130
                            -150 0 -150 0 0 130 0 130 150 0 150 0 0 -130z m1670 -15 l0 -115 -120 0 -120
                            0 0 115 0 115 120 0 120 0 0 -115z m1800 0 l0 -115 -115 0 -115 0 0 115 0 115
                            115 0 115 0 0 -115z"/>
                            <path d="M2122 2308 c-17 -17 -17 -1609 0 -1626 9 -9 206 -12 824 -12 725 0
                            814 2 828 16 14 14 16 101 16 809 0 708 -2 795 -16 809 -14 14 -103 16 -828
                            16 -618 0 -815 -3 -824 -12z m1558 -813 l0 -715 -735 0 -735 0 0 715 0 715
                            735 0 735 0 0 -715z"/>
                            <path d="M4265 2284 c-23 -23 -15 -66 15 -81 31 -16 322 -18 350 -3 34 18 44
                            48 25 76 -15 24 -16 24 -195 24 -151 0 -181 -2 -195 -16z"/>
                            <path d="M4260 1859 c-17 -30 -8 -62 20 -76 31 -16 322 -18 350 -3 34 18 44
                            48 25 76 -15 24 -16 24 -200 24 -176 0 -185 -1 -195 -21z"/>
                            <path d="M4260 1441 c-13 -26 -13 -54 2 -69 8 -8 66 -12 195 -12 l183 0 16 25
                            c15 23 15 27 0 50 l-16 25 -185 0 c-172 0 -185 -1 -195 -19z"/>
                            <path d="M4365 1074 c-81 -44 -121 -117 -113 -205 17 -177 245 -242 366 -105
                            78 89 59 224 -41 293 -33 23 -52 28 -111 31 -51 2 -79 -2 -101 -14z m130 -98
                            c46 -20 69 -57 61 -101 -21 -109 -196 -97 -196 14 0 43 14 64 55 86 37 18 38
                            18 80 1z"/>
                            <path d="M127 4892 c-42 -46 -7 -92 71 -92 41 0 54 4 66 22 21 30 20 44 -4 68
                            -27 27 -110 28 -133 2z"/>
                            <path d="M486 4894 c-9 -8 -16 -26 -16 -39 0 -37 26 -55 79 -55 57 0 84 17 84
                            55 0 16 -8 34 -19 42 -25 18 -109 17 -128 -3z"/>
                            <path d="M336 4744 c-23 -23 -22 -116 2 -137 25 -22 48 -21 72 3 25 25 27 95
                            4 128 -18 26 -56 29 -78 6z"/>
                            <path d="M4716 3807 c-27 -20 -34 -108 -12 -142 18 -27 63 -34 84 -13 7 7 12
                            39 12 74 0 54 -3 65 -22 78 -27 19 -39 20 -62 3z"/>
                            <path d="M4512 3603 c-25 -10 -34 -53 -17 -79 13 -20 24 -24 66 -24 28 0 59 5
                            70 10 27 15 25 64 -3 84 -21 15 -88 20 -116 9z"/>
                            <path d="M4860 3590 c-24 -24 -25 -38 -4 -68 12 -18 25 -22 69 -22 60 0 85 16
                            85 55 0 33 -36 55 -87 55 -30 0 -49 -6 -63 -20z"/>
                            <path d="M4710 3440 c-25 -25 -27 -95 -4 -128 18 -26 56 -29 78 -6 23 23 22
                            116 -2 137 -25 22 -48 21 -72 -3z"/>
                            <path d="M3774 3108 c-65 -31 -41 -128 31 -128 64 0 90 79 39 119 -30 23 -39
                            24 -70 9z"/>
                            <path d="M2397 2860 c-18 -15 -27 -31 -27 -51 0 -65 80 -93 120 -42 50 64 -29
                            143 -93 93z"/>
                            <path d="M1173 1459 c-107 -14 -222 -100 -273 -204 -22 -43 -25 -64 -25 -155
                            0 -127 19 -175 105 -261 71 -72 143 -101 250 -101 141 0 252 67 321 194 33 60
                            34 67 34 168 0 101 -1 108 -34 168 -78 143 -215 213 -378 191z m7 -359 c0
                            -198 -3 -250 -13 -250 -7 0 -37 15 -67 33 -89 53 -140 158 -124 257 11 67 62
                            141 124 177 30 18 60 33 67 33 10 0 13 -52 13 -250z m178 219 c167 -95 167
                            -343 0 -438 -29 -17 -59 -31 -65 -31 -10 0 -13 57 -13 250 0 193 3 250 13 250
                            6 0 36 -14 65 -31z"/>
                            </g>
                        </svg>
                    </li>
                    <li className="list-inline-item mx-4 lista-item-personalizado" onMouseEnter={() => mouseDentro('categoria3')} onMouseLeave={() => mouseFora('categoria3')} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g fill="#221E2F" id="categoria3" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M599 4741 c-46 -15 -66 -30 -83 -65 -15 -31 -16 -150 -16 -1298 l0
                            -1264 -250 -672 -250 -673 0 -145 c0 -165 10 -203 64 -232 29 -16 118 -17
                            1161 -20 622 -1 1145 0 1163 3 66 12 94 81 49 123 l-23 22 -1132 0 -1132 0 0
                            80 0 80 2410 0 2410 0 0 -80 0 -80 -1133 0 -1134 0 -21 -23 c-44 -46 -17 -110
                            50 -122 18 -3 542 -4 1163 -3 1043 3 1132 4 1161 20 54 29 64 67 64 231 l0
                            146 -250 672 -250 673 0 1264 c0 1400 4 1313 -64 1350 -29 16 -144 17 -1621
                            20 -874 1 -1605 0 -1623 -3 -67 -12 -94 -78 -52 -123 l21 -22 1594 0 1595 0 0
                            -1210 0 -1210 -1910 0 -1910 0 0 1210 0 1210 174 0 175 0 20 26 c12 15 21 33
                            21 40 0 29 -25 64 -53 74 -34 11 -349 12 -388 1z m4112 -3301 c120 -322 218
                            -591 219 -597 0 -10 -480 -13 -2370 -13 -1512 0 -2370 3 -2370 10 0 7 360 983
                            429 1163 l11 27 1931 -2 1932 -3 218 -585z"/>
                            <path d="M774 1869 c-17 -5 -38 -17 -46 -26 -23 -26 -280 -723 -280 -759 0
                            -42 17 -71 52 -89 26 -13 268 -15 2062 -15 2001 0 2034 0 2065 20 42 25 54 70
                            36 130 -7 25 -68 193 -136 374 -102 272 -128 333 -151 350 l-27 21 -1772 2
                            c-1027 1 -1785 -2 -1803 -8z m416 -151 c-1 -7 -13 -58 -28 -113 l-27 -100
                            -188 -3 c-146 -2 -187 0 -187 10 0 12 66 194 76 210 3 5 84 8 180 8 133 0 174
                            -3 174 -12z m515 -30 c-4 -24 -12 -74 -18 -113 l-12 -70 -193 -3 c-181 -2
                            -193 -1 -188 15 2 10 10 38 16 63 6 25 18 69 26 98 l15 52 180 0 180 0 -6 -42z
                            m516 -68 c-1 -58 -5 -108 -8 -112 -7 -12 -383 -10 -383 2 0 21 31 204 36 212
                            3 5 85 7 182 6 l177 -3 -4 -105z m523 73 c3 -21 6 -73 6 -115 l0 -78 -190 0
                            -190 0 0 78 c0 42 3 94 6 115 l7 37 177 0 177 0 7 -37z m510 29 c5 -8 36 -191
                            36 -212 0 -7 -65 -10 -192 -8 l-193 3 -6 105 c-3 58 -4 108 -2 113 6 10 351 9
                            357 -1z m530 -44 c8 -29 20 -73 26 -98 6 -25 14 -53 16 -63 5 -16 -7 -17 -188
                            -15 l-193 3 -12 70 c-6 39 -14 89 -18 113 l-6 42 180 0 180 0 15 -52z m538
                            -53 c21 -55 38 -106 38 -113 0 -10 -41 -12 -187 -10 l-188 3 -27 100 c-15 55
                            -27 106 -28 113 0 10 39 12 177 10 l177 -3 38 -100z m-3232 -281 c0 -3 -12
                            -53 -27 -110 l-27 -104 -208 0 c-114 0 -208 3 -208 8 0 4 17 53 37 109 l38
                            103 198 0 c108 0 197 -3 197 -6z m557 -21 c-3 -16 -11 -65 -18 -110 l-12 -83
                            -215 0 c-188 0 -213 2 -208 15 3 9 13 44 21 78 9 34 21 77 26 95 l11 32 200 0
                            201 0 -6 -27z m559 -4 c-3 -17 -6 -67 -6 -110 l0 -79 -215 0 c-143 0 -215 4
                            -215 10 0 6 7 56 17 110 l16 100 205 0 205 0 -7 -31z m558 -6 c3 -21 6 -71 6
                            -110 l0 -73 -210 0 -210 0 0 73 c0 39 3 89 6 110 l7 37 197 0 197 0 7 -37z
                            m569 -63 c10 -54 17 -104 17 -110 0 -6 -72 -10 -215 -10 l-215 0 0 79 c0 43
                            -3 93 -6 110 l-6 31 204 0 205 0 16 -100z m546 68 c5 -18 17 -61 26 -95 8 -34
                            18 -69 21 -78 5 -13 -20 -15 -208 -15 l-215 0 -12 83 c-7 45 -15 94 -18 110
                            l-5 27 200 0 200 0 11 -32z m584 -71 c20 -56 37 -105 37 -109 0 -5 -94 -8
                            -208 -8 l-208 0 -27 104 c-15 57 -27 107 -27 110 0 3 89 6 198 6 l197 0 38
                            -103z"/>
                            <path d="M872 4439 c-20 -6 -40 -22 -52 -42 -19 -31 -20 -57 -20 -1010 0
                            -1051 -2 -1019 49 -1047 27 -14 3395 -14 3422 0 51 28 49 -4 49 1047 0 951 -1
                            979 -20 1010 -13 21 -31 35 -57 42 -50 14 -3323 14 -3371 0z m3298 -1049 l0
                            -910 -1610 0 -1610 0 0 910 0 910 1610 0 1610 0 0 -910z"/>
                            </g>
                        </svg>
                    </li>
                </ul>

            </div>


        </>

    );

}