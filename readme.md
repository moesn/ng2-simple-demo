**from scratch**
```
npm install -g tsd
npm install -g typescript@1.5.0-beta
```

**init tsd**
```
tsd init
tsd query angular2
tsd query angular2 --action install --save
```

**start typescript watcher**
```
tsc -w
```



**install from this repo:**
```
npm install -g tsd
npm install -g typescript@1.5.0-beta
tsd reinstall
tsd rebundle
```

**build:**
```
npm install -g typescript@1.5.0-beta
tsc
```

**run:**
- install http-server package via
 ```
 npm install -g http-server 
 ```
- run server (if port 8080 it taken, pick any port that is free)
 ```
 http-server -p 8080
 ```