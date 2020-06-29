<!--
 * @Author: jiawen.wang
 * @Date: 2020-06-28 17:49:27
 * @LastEditTime: 2020-06-29 16:22:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\About.vue
--> 
<template>
  <div class="about">
     <input type="checkbox">
    <svg width="400" height="400">
        <circle stroke-width="20" cx="200" cy="200" r='190' stroke="#68e534" fill="none" class="circle"
            stroke-linecap="round" transform="rotate(-90,200,200)"></circle>
        <polyline fill="none" stroke="#68e534" stroke-width='24' points="88,214 173,284 304,138" stroke-linecap="round"
            stroke-linejoin="round" class="tick">
        </polyline>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
      #box .box {
        margin: 0;
        padding: 0;
        width: 30vw;
        height: 30vw;
        /* transform: translate(12px, 50%); */
        animation: name duration timing-function delay iteration-count direction fill-mode;
        transition: 1s;

    }

    .circle {
        stroke-dasharray: 1194;
        stroke-dashoffset: 1194;
        /* animation: circle 1s ease-in-out forwords; */

    }

    input[type="checkbox"]:checked+svg .circle {
        animation: circle 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    .tick {
        stroke-dasharray: 350;
        stroke-dashoffset: 350;
    }

    p {
        font-size: 10px;
    }

    input[type="checkbox"]:checked+svg .tick {
        animation: tick 0.5s ease-in-out 0.95s forwards;
        /* animation-fill-mode: forwards; */
    }

    @keyframes circle {
        from {
            stroke-dashoffset: 1194;

        }

        to {
            stroke-dashoffset: 2388;
        }
    }

    @keyframes tick {
        from {
            stroke-dashoffset: 350;
        }

        to {
            stroke-dashoffset: 0;
        }
    }
</style>
