https://slides.com/stowball/intro-to-webxr/

- demo
- marker

# Intro WebXR, immersive web.

    - What is Immersive Web: (https://developers.google.com/web/updates/2018/05/welcome-to-immersive)
        - Immersive 360° videos
        - Traditional 2D (or 3D) videos presented in immersive surroundings
        - Data visualizations
        - Engaging shopping experiences
        - Art
        - Branding
            - https://design.google/library/speaking-volumes/
        - Games
        - Something cool nobody's thought of yet

    - State of the art WebVR/WebXR API

        A draft, official spec and experimental JavaScript API that supports VR devices.

        - MDN Docs are not even published yet
        https://developer.mozilla.org/en-US/docs/Web/API/WebXR_API

        - https://immersive-web.github.io/webxr-reference/


        Basically, it provides performant Stereoscopic Rendering and Positional Tracking. It doesn‘t do graphics.

        It also connects to the Device Controllers

        You need WebGL
            - THREE.js, BabylonJS
            - AFrame.js

        - https://webvr.info/
            - In progress, 2019...
            - A-Frame 0.8.2 and Chrome v66+
            - Chrome flgas: https://webvr.info/get-chrome/
            - On Chrome:
                - chrome://flags/#enable-webvr
                - Or Phones ("DayDream Ready"): Pixel 3, Galaxy S9 & S9+, Pixel 2, Galaxy S8 & S8+, ZenFone AR, LG V30

        - https://caniuse.com/#search=WebXR !!
            - Polyfills...
        - Controllers, new API, WebGL 3.X features support
        - Demos:
            - https://webvr.info/samples/
            - (from mobile (Safari mobile, Chrome on Android), more likely click on "Polyfill" links...)

    - Differences with Unity
        - https://docs.unity3d.com/Manual/webgl-building.html

    - Performance...:
        - On a 90-hertz HMD (Head Mounted Device), you have 11 milliseconds to render both eyes (https://software.intel.com/en-us/videos/webvr-interacting-with-the-hmd)

# AFrame.js

    - install
        - Online:
            - glitch
            - online editors
        - Local Development
            - Installation:
                - js script tag
                - npm install AFrame
                - npm install -g angle
                    - Not to confuse with https://chromium.googlesource.com/angle/angle
            - HTTP Server:
                - Mongoose Server https://cesanta.com/
                - run python -m SimpleHTTPServer
                - Any npm package...: https://www.npmjs.com/package/http-server
            - https://ngrok.com/download: Sharing local across devices...

    - support: Headsets and WebVR browsers
        - https://aframe.io/docs/0.8.0/introduction/vr-headsets-and-webvr-browsers.html#which-platforms-does-a-frame-support

    - demos
        - hello world
            - https://aframe.io/docs/0.8.0/introduction/
        - with frameworks: not so well...
            - https://github.com/frederic-schwarz/aframe-vuejs-3dio
            - https://codepen.io/stowball/full/qMVgeq/
        - Don McCurdy's animations and VR controls
            - https://rexraptor08.github.io/animation-controls/

# AR in Web
    https://aframe.io/blog/arjs/
    https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf

    - Demos:
        - https://codepen.io/jeromeetienne/pen/mRqqzb

# Special Mentions


- Demos:
    Vizor: https://patches.vizor.io/chriz/mb1

- Resources:
    - https://webxr.io/

- physics
    - https://github.com/kripken/ammo.js/
