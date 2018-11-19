# Intro to WebXR with AFRAME (FE BCN Talk)

_https://www.meetup.com/es-ES/frontend-barcelona/events/256268326/_

Hey, there! Here I attached the 3 demos I'm showing today.

## Installation

Treat every one of each them as a sepparate project. All of them have their spparated package.json; so you need to
`npm i` each folder: (If you are on Bash [and have the `&&` command])

```
> cd ./1-hello-world/ && npm i
  && cd ../2-hello-webvr-vue/ && npm i
  && cd ../3-angle/ && npm i
  && cd ../4-adding-interactions/ && npm i
```

To launch the local development server, these projects use different packages; that will be installed locally for them.

## Start (Compiles and hot-reloads for development)

```
> npm run dev
```

All of them are run with the same command event it will not do the same. But for demo reasons I will not enter
in details.

It will start the same port for all of them: `1234`

## To share local host with secure tunnels

As shown in the demo, I'm using:

https://ngrok.com

```
> ngrok http --host-header=rewrite 1234 # (in case of the 2nd example)
```

Second example has a special http server (special for SPAs, for Vue).

```
> ngrok http 1234 # (in the other ones)
```

