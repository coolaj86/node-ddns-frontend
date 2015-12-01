DDNS HTML App
======

**STOP:** You probably want [node-ddns](https://github.com/Daplie/node-ddns)

A Dynamic DNS (DDNS / DynDNS) UDP Server written in node.js.

This is one distinct part of a 3-part system.

  * node-ddns (full stack demo)
  * node-ddns-api (RESTful HTTP API)
  * node-ddns-frontend (HTML5 Management App)
  * node-ddns-service (UDP DNS Server)

Install & Configure
-------------------

```bash
# bower
bower install --save com.daplie.ddns

# git
git clone git@github.com:Daplie/node-ddns-frontend.git
```

```bash
serve-https node-ddns-frontend
```

LICENSE
=======

Dual-licensed MIT and Apache-2.0

See LICENSE
