# push testserver

push-testserver is a cli script which pushes your branch as a test-branch for creating a testserver.

## install

```
npm i -g push-testserver
```

## run

After installing there are two scripts available in your terminal:

```
push-testserver
```
or
```
force-push-testserver
```


## What it does:
The script pushes an branch with the name in the format ```<type>/<something>``` to the `origin` remote with the name ```test/<something>```

> ```<something>``` can contain anything valid in a GIT branch-name, also more `/` (slashes) are valid

```force-push-testserver``` does the exact same thing only with a force push flag.

## Requirements

- GIT
- Node >=12