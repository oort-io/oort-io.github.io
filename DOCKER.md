# Docker for windows

1. Install [Docker-toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) I'm assuming you do not have Windows enterprise or whatever the Docker CE requirements are. This will install Virtualbox and the docker CLI tooling.
2. I have two disks on my windows machine, so I had to set the environment variable `MACHINE_STORAGE_PATH` to my `D:` drive as my `C:` drive is nearly full. (RIP) I also installed Docker Toolbox to install on the `D:` drive.
3. Assuming you are using a bash-like shell, your paths will all be eff'd if you do anything like a `docker -v` or `docker exec -it <HASH> /bin/bash` as it will try to expand anything to `C:\Program Files\Git\...` or something of that sort. I followed this [issue](https://github.com/docker/toolbox/issues/673)
    1. TLDR: Make some new `bin` that you will add to your `PATH` at the top level. You want this to be called before the real docker.exe is called.
    2. Make a script called `docker`
        ```
        #!/bin/bash
        (export MSYS_NO_PATHCONV=1; "docker.exe" "$@")
        ```

## Running Jekyll
`./serve.sh` - this will start a container that is watching for changes on the local dir. It will rebuild on changes. 

To connect you must find attach to the docker-machine, find its ip by running `docker-machine ip` and connect to port `4000`