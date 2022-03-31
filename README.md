# tangulation

Particle React Configuration

## Usage

The following will add this repo as a submodule at the main branch. It
can then be used as a normal git repo inside of this one. Note also a
.gitmodules file will appear.

```
git submodule add https://github.com/TangleSwap/tangulation <path to
local instance>

e.g. usage in docs
git submodule add https://github.com/TangleSwap/tangulation src/theme/Footer/tangulation
```

If already added to a repo, run the following in order to initialise the
submodule once the other repo has been cloned:

```
git submodule init && git submodule update
```